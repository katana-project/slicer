import type { Callable } from "$lib/workspace/analysis/graph";
import { type Member, type Node, read } from "@katana-project/asm";
import { escapeLiteral, formatEntry, formatInsn } from "@katana-project/asm/analysis/disasm";
import type { BootstrapMethodsAttribute, CodeAttribute } from "@katana-project/asm/attr";
import { type Annotation, type AnnotationsAttribute, readAnnotations } from "@katana-project/asm/attr/annotation";
import { readBootstrapMethods } from "@katana-project/asm/attr/bsm";
import { readCode } from "@katana-project/asm/attr/code";
import type { InvokeInstruction } from "@katana-project/asm/insn";
import type { ClassEntry, Entry, NameTypeEntry, RefEntry } from "@katana-project/asm/pool";
import { AttributeType, ConstantType, Modifier, Opcode } from "@katana-project/asm/spec";
import { expose } from "comlink";
import { QueryType, type SearchData, SearchMode, type SearchResultData } from "./search";
import { CharacteristicType, EntryPointType } from "./types";

export interface AnalysisWorker {
    read(data: Uint8Array, flags: number): Promise<Node>;
    search(data: SearchData): Promise<SearchResultData[]>;

    collectEntryPoints(node: Node): Promise<EntryPointType[]>;
    collectCharacteristics(node: Node): Promise<CharacteristicType[]>;
    findCallees(member: Member, owner: Node): Promise<Callable[]>;
}

type Comparator = (v: string) => boolean;
const createComparator = (value: string, mode: SearchMode): Comparator => {
    switch (mode) {
        case SearchMode.PARTIAL_MATCH:
            return (v) => v.includes(value);
        case SearchMode.EXACT_MATCH:
            return (v) => v === value;
        case SearchMode.REGEXP:
            const regex = new RegExp(value);
            return (v) => regex.test(v);
    }
};

const readCode0 = (node: Node, member: Member): CodeAttribute | null => {
    const attr = member.attrs.find((a) => a.name?.string === AttributeType.CODE);
    if (attr) {
        if (attr.type === AttributeType.CODE) {
            return attr as CodeAttribute;
        }

        try {
            return readCode(attr, node.pool);
        } catch (e) {}
    }

    return null;
};

const readBsm = (node: Node): BootstrapMethodsAttribute | null => {
    const attr = node.attrs.find((a) => a.name?.string === AttributeType.BOOTSTRAP_METHODS);
    if (attr) {
        if (attr.type === AttributeType.BOOTSTRAP_METHODS) {
            return attr as BootstrapMethodsAttribute;
        }

        try {
            return readBootstrapMethods(attr, node.pool);
        } catch (e) {}
    }

    return null;
};

const searchPoolEntries = (
    node: Node,
    comparator: Comparator,
    filterFn: (entry: Entry) => boolean
): SearchResultData[] => {
    const bsmAttr = readBsm(node);
    return node.pool
        .filter((e) => e !== null && filterFn(e))
        .map((e) => ({ value: formatEntry(e!, node.pool, bsmAttr ?? undefined) }))
        .filter((e) => comparator(e.value));
};

const isMethodNameType = (entry: Entry): boolean => {
    return entry.type === ConstantType.NAME_AND_TYPE && (entry as NameTypeEntry).typeEntry!.string.charAt(0) === "(";
};

const searchMembers = (members: Member[], comparator: Comparator): SearchResultData[] => {
    return members
        .map((m) => ({
            value: `${escapeLiteral(m.name.string)} ${escapeLiteral(m.type.string)}`,
            member: m,
        }))
        .filter((m) => comparator(m.value));
};

const FABRIC_INITIALIZERS = new Set([
    "net/fabricmc/api/ModInitializer",
    "net/fabricmc/api/ClientModInitializer",
    "net/fabricmc/api/DedicatedServerModInitializer",
]);

expose({
    async read(buf: Uint8Array, flags: number): Promise<Node> {
        return read(buf, flags);
    },
    async search({ type, node, value, mode, ref }: SearchData): Promise<SearchResultData[]> {
        const comparator = createComparator(value, mode);

        switch (type) {
            case QueryType.PSEUDOCODE:
                const bsmAttr = readBsm(node);
                const code = [
                    ...node.methods.flatMap((member) => {
                        const codeAttr = readCode0(node, member);
                        return (codeAttr?.insns ?? []).map((i) => ({
                            member,
                            value: formatInsn(codeAttr!, bsmAttr, i, node.pool, true),
                        }));
                    }),
                    ...node.pool
                        .filter((e) => e !== null)
                        .map((e) => ({
                            value: `${ConstantType[e.type]} ${formatEntry(e, node.pool, bsmAttr ?? undefined)}`,
                        })),
                ];

                return code.filter((e) => comparator(e.value));
            case QueryType.STRING:
                return searchPoolEntries(node, comparator, (e) => e.type === ConstantType.STRING);
            case QueryType.FIELD:
                return ref
                    ? searchPoolEntries(
                          node,
                          comparator,
                          (e) => e.type === ConstantType.NAME_AND_TYPE && !isMethodNameType(e)
                      )
                    : searchMembers(node.fields, comparator);
            case QueryType.METHOD:
                return ref
                    ? searchPoolEntries(node, comparator, (e) => isMethodNameType(e))
                    : searchMembers(node.methods, comparator);
        }
    },
    async collectEntryPoints(node: Node): Promise<EntryPointType[]> {
        const entryPoints: EntryPointType[] = [];

        const mainMethod = node.methods.find(
            (m) =>
                m.name.string === "main" &&
                m.type.string === "([Ljava/lang/String;)V" &&
                (m.access & Modifier.STATIC) !== 0
        );

        if (mainMethod) {
            entryPoints.push(EntryPointType.MAIN);
        }

        let annotations: Annotation[] = [];
        try {
            const attr = node.attrs.find(
                (a) =>
                    a.name?.string === AttributeType.RUNTIME_VISIBLE_ANNOTATIONS ||
                    a.name?.string === AttributeType.RUNTIME_INVISIBLE_ANNOTATIONS
            ) as AnnotationsAttribute | undefined;

            if (attr) {
                annotations = attr.annotations ?? readAnnotations(attr, node.pool).annotations;
            }
        } catch {
            // annotations already defaults to []
        }

        const premainMethod = node.methods.find(
            (m) =>
                m.name.string === "premain" &&
                (m.type.string === "(Ljava/lang/String;Ljava/lang/instrument/Instrumentation;)V" ||
                    m.type.string === "(Ljava/lang/String;)V") &&
                (m.access & Modifier.STATIC) !== 0
        );

        if (premainMethod) {
            entryPoints.push(EntryPointType.AGENT);
        }

        switch (node.superClass?.nameEntry?.string) {
            case "org/bukkit/plugin/java/JavaPlugin":
                entryPoints.push(EntryPointType.MINECRAFT_BUKKIT);
                break;
            case "net/md_5/bungee/api/plugin/Plugin":
                entryPoints.push(EntryPointType.MINECRAFT_BUNGEE);
                break;
        }

        const velocityPlugin = annotations.some(
            (a) => a.typeEntry?.string === "Lcom/velocitypowered/api/plugin/Plugin;"
        );
        if (velocityPlugin) {
            entryPoints.push(EntryPointType.MINECRAFT_VELOCITY);
        }

        const forgeMod = annotations.some((a) => a.typeEntry?.string === "Lnet/minecraftforge/fml/common/Mod;");
        if (forgeMod) {
            entryPoints.push(EntryPointType.MINECRAFT_FORGE);
        }

        const fabricMod = node.interfaces?.some((i) => i.nameEntry && FABRIC_INITIALIZERS.has(i.nameEntry.string));
        if (fabricMod) {
            entryPoints.push(EntryPointType.MINECRAFT_FABRIC);
        }

        return entryPoints;
    },
    async collectCharacteristics(node: Node): Promise<CharacteristicType[]> {
        const chars = new Set<CharacteristicType>();
        for (const entry of node.pool) {
            switch (entry?.type) {
                case ConstantType.CLASS: {
                    const className = (entry as ClassEntry).nameEntry?.string;
                    if (!className) break;

                    switch (className) {
                        case "java/lang/ClassLoader":
                        case "java/net/URLClassLoader":
                            chars.add(CharacteristicType.CLASS_LOADING);
                            break;
                        case "javax/crypto/Cipher":
                            chars.add(CharacteristicType.ENCRYPTION);
                            break;
                        case "java/lang/reflect/Method":
                        case "java/lang/reflect/Constructor":
                        case "java/lang/reflect/Field":
                        // MethodHandle stuff is emitted by javac in e.g. string concat - we can't have that
                        // case "java/lang/invoke/MethodHandle":
                        // case "java/lang/invoke/MethodHandles":
                        // case "java/lang/invoke/MethodHandles$Lookup":
                        // case "java/lang/invoke/MethodType":
                        case "java/lang/invoke/VarHandle":
                        case "java/util/concurrent/atomic/AtomicReferenceFieldUpdater":
                        case "java/util/concurrent/atomic/AtomicIntegerFieldUpdater":
                        case "java/util/concurrent/atomic/AtomicLongFieldUpdater":
                            chars.add(CharacteristicType.REFLECTION);
                            break;
                        case "java/io/File":
                        case "java/nio/file/Files":
                        case "java/nio/file/Path":
                        case "java/nio/file/Paths":
                        case "java/nio/file/FileSystem":
                        case "java/nio/file/FileSystems":
                        case "java/nio/channels/FileChannel":
                        case "java/nio/channels/AsynchronousFileChannel":
                            chars.add(CharacteristicType.FILE_IO);
                            break;
                        case "java/net/Socket":
                        case "java/net/ServerSocket":
                        case "java/net/DatagramSocket":
                        case "java/net/HttpURLConnection":
                        case "java/net/URL":
                        case "java/net/URLConnection":
                        case "java/net/http/HttpClient":
                        case "java/nio/channels/NetworkChannel":
                        case "java/nio/channels/SocketChannel":
                        case "java/nio/channels/ServerSocketChannel":
                        case "java/nio/channels/DatagramChannel":
                        case "java/nio/channels/AsynchronousSocketChannel":
                        case "java/nio/channels/AsynchronousServerSocketChannel":
                            chars.add(CharacteristicType.NETWORK_IO);
                            break;
                        case "java/io/ObjectInputStream":
                        case "java/io/ObjectOutputStream":
                            chars.add(CharacteristicType.OBJECT_SERDES);
                            break;
                        case "java/lang/foreign/MemorySegment":
                        case "java/lang/foreign/Arena":
                        case "java/lang/foreign/Linker":
                        case "java/lang/foreign/SymbolLookup":
                        case "sun/misc/Unsafe":
                            chars.add(CharacteristicType.NATIVE_CODE);
                            break;
                        case "java/lang/ProcessBuilder":
                        case "java/lang/ProcessHandle":
                        case "java/lang/Process":
                            chars.add(CharacteristicType.PROCESS_MANIPULATION);
                            break;
                    }
                    break;
                }
                case ConstantType.METHODREF:
                case ConstantType.INTERFACE_METHODREF: {
                    const refEntry = entry as RefEntry;
                    const className = refEntry.refEntry?.nameEntry?.string;
                    const nameType = refEntry.nameTypeEntry;
                    const methodName = nameType?.nameEntry?.string;

                    if (!className || !methodName) break;
                    switch (className) {
                        case "java/lang/Runtime":
                        case "java/lang/System": {
                            if (methodName === "exec") {
                                chars.add(CharacteristicType.PROCESS_MANIPULATION);
                            }
                            if (methodName === "load" || methodName === "loadLibrary") {
                                chars.add(CharacteristicType.NATIVE_CODE);
                            }
                            break;
                        }
                        case "java/lang/invoke/MethodHandles": {
                            if (methodName === "lookup" || methodName === "publicLookup") {
                                chars.add(CharacteristicType.REFLECTION);
                            }
                            break;
                        }
                        case "java/lang/invoke/MethodHandles$Lookup": {
                            if (methodName.match(/^(find|unreflect).+$/)) {
                                chars.add(CharacteristicType.REFLECTION);
                            }
                            break;
                        }
                    }

                    break;
                }
            }
        }

        for (const method of node.methods) {
            if ((method.access & Modifier.NATIVE) !== 0) {
                chars.add(CharacteristicType.NATIVE_CODE);
            }
        }

        return Array.from(chars.values());
    },
    async findCallees(member: Member, owner: Node): Promise<Callable[]> {
        const callees: Callable[] = [];

        const code = readCode0(owner, member);
        if (!code) {
            return callees;
        }

        const visited = new Set<string>();
        for (const insn of code.insns) {
            switch (insn.opcode) {
                case Opcode.INVOKEVIRTUAL:
                case Opcode.INVOKESPECIAL:
                case Opcode.INVOKESTATIC:
                case Opcode.INVOKEINTERFACE: {
                    const ref = owner.pool[(insn as InvokeInstruction).ref] as RefEntry;
                    const calleeClass = ref.refEntry!;
                    const callee = ref.nameTypeEntry!;

                    const id = `${calleeClass.nameEntry!.string}#${callee.nameEntry!.string}${callee.typeEntry!.string}`;
                    if (!visited.has(id)) {
                        visited.add(id);
                        callees.push({
                            id,
                            name: callee.nameEntry!.string,
                            type: callee.typeEntry!.string,
                            owner: calleeClass.nameEntry!.string,
                        });
                    }
                    break;
                }
            }
        }

        return callees;
    },
} satisfies AnalysisWorker);
