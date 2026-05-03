import type {
    Annotation,
    ArrayElementValue,
    ConstElementValue,
    ElementValue,
} from "@katana-project/asm/attr/annotation";
import type { NumberEntry, UTF8Entry } from "@katana-project/asm/pool";
import { org } from "./ktproto";

export const readModule = (data: Uint8Array): string => {
    return JSON.stringify(org.jetbrains.kotlin.metadata.jvm.Module.decode(data).toJSON(), null, 2);
};

export const readPackageFragment = (data: Uint8Array): string => {
    return JSON.stringify(org.jetbrains.kotlin.metadata.PackageFragment.decode(data).toJSON(), null, 2);
};

export enum MetadataKind {
    CLASS = 1,
    FILE_FACADE = 2,
    SYNTHETIC_CLASS = 3,
    MULTI_FILE_CLASS_FACADE = 4,
    MULTI_FILE_CLASS_PART = 5,
}

export interface MetadataAnnotation {
    kind?: MetadataKind;
    metadataVersion?: number[];
    bytecodeVersion?: number[];
    data1?: string[];
    data2?: string[];
    extraString?: string;
    packageName?: string;
    extraInt?: number;
}

export const readMetadataAnnotation = (anno: Annotation): MetadataAnnotation => {
    const find = <T extends ElementValue>(name: string): T | null => {
        return (anno.values.find((v) => v.nameEntry?.string === name)?.value as T) || null;
    };

    const kind = (find<ConstElementValue>("k")?.valueEntry as NumberEntry)?.value;
    const metadataVersion =
        find<ArrayElementValue>("mv")?.values?.map(
            (v) => ((v as ConstElementValue).valueEntry as NumberEntry)?.value
        ) || [];
    const bytecodeVersion =
        find<ArrayElementValue>("bv")?.values?.map(
            (v) => ((v as ConstElementValue).valueEntry as NumberEntry)?.value
        ) || [];
    const data1 =
        find<ArrayElementValue>("d1")?.values?.map((v) => ((v as ConstElementValue).valueEntry as UTF8Entry)?.string) ||
        [];
    const data2 =
        find<ArrayElementValue>("d2")?.values?.map(
            (v) => ((v as ConstElementValue).valueEntry! as UTF8Entry)?.string
        ) || [];
    const extraString = (find<ConstElementValue>("xs")?.valueEntry as UTF8Entry)?.string;
    const packageName = (find<ConstElementValue>("pn")?.valueEntry as UTF8Entry)?.string;
    const extraInt = (find<ConstElementValue>("xi")?.valueEntry as NumberEntry)?.value;

    return { kind, metadataVersion, bytecodeVersion, data1, data2, extraString, packageName, extraInt };
};

export interface Metadata {
    kind: MetadataKind;
}

export interface MetadataClass extends Metadata {
    kind: MetadataKind.CLASS;
    kmClass: org.jetbrains.kotlin.metadata.IClass;
    flags: number;
}

export interface MetadataFileFacade extends Metadata {
    kind: MetadataKind.FILE_FACADE;
    kmPackage: org.jetbrains.kotlin.metadata.IPackage;
    flags: number;
}

export interface MetadataSyntheticClass extends Metadata {
    kind: MetadataKind.SYNTHETIC_CLASS;
    kmLambda: org.jetbrains.kotlin.metadata.IFunction;
    flags: number;
}

export interface MetadataMultiFileClassFacade extends Metadata {
    kind: MetadataKind.MULTI_FILE_CLASS_FACADE;
    partClassNames: string[];
    flags: number;
}

export interface MetadataMultiFileClassPart extends Metadata {
    kind: MetadataKind.MULTI_FILE_CLASS_PART;
    kmPackage: org.jetbrains.kotlin.metadata.IPackage;
    facadeClassName: string;
    flags: number;
}
