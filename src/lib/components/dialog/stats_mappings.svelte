<script lang="ts">
    import {
        Dialog,
        DialogContent,
        DialogDescription,
        DialogHeader,
        DialogTitle,
    } from "$lib/components/ui/dialog";
    import { t } from "$lib/i18n";
    import { mappings } from "$lib/workspace/analysis/mapping";
    import { classes as workspaceClasses, EntryType, type ClassEntry } from "$lib/workspace";
    import type { ModalProps } from "svelte-modals";

    interface CountStats {
        mapped: number;
        total: number;
    }

    interface MappingStats {
        classes: CountStats;
        fields: CountStats;
        methods: CountStats;
        total: CountStats;
    }

    let { isOpen, close }: ModalProps = $props();

    const isMappedName = (src: string, dst?: string): boolean => {
        return Boolean(dst) && src !== dst;
    };

    const remapDescToDst = (desc: string): string => {
        return desc.replace(/L([^;]+);/g, (_match, name: string) => {
            const mapped = $mappings.getOrNull(name);
            return `L${mapped?.dst ?? name};`;
        });
    };

    const countElements = (): Omit<MappingStats, "total"> => {
        let mappedClasses = 0;
        let mappedFields = 0;
        let mappedMethods = 0;

        let totalClasses = 0;
        let totalFields = 0;
        let totalMethods = 0;

        const classesByDst = new Map($mappings.values().filter((klass) => klass.dst).map((klass) => [klass.dst!, klass]));

        for (const entry of $workspaceClasses.values()) {
            if (entry.type !== EntryType.CLASS) {
                continue;
            }

            const classEntry = entry as ClassEntry;
            const className = classEntry.node.thisClass.nameEntry?.string;
            if (!className) {
                continue;
            }

            const mappedClass = $mappings.getOrNull(className) ?? classesByDst.get(className) ?? null;
            const classUsesDstNames = mappedClass !== null && mappedClass.dst === className;

            let mappedFieldKeys: Set<string> | null = null;
            let mappedMethodKeys: Set<string> | null = null;

            if (mappedClass && classUsesDstNames) {
                mappedFieldKeys = new Set(
                    mappedClass.fields
                        .values()
                        .filter((member) => isMappedName(member.src, member.dst) && Boolean(member.dst))
                        .map((member) => `${member.dst!}:${remapDescToDst(member.srcDesc)}`)
                );

                mappedMethodKeys = new Set(
                    mappedClass.methods
                        .values()
                        .filter((member) => isMappedName(member.src, member.dst) && Boolean(member.dst))
                        .map((member) => `${member.dst!}:${remapDescToDst(member.srcDesc)}`)
                );
            }

            totalClasses++;
            if (mappedClass && isMappedName(mappedClass.src, mappedClass.dst)) {
                mappedClasses++;
            }

            for (const field of classEntry.node.fields) {
                totalFields++;
                const mappedField = classUsesDstNames
                    ? null
                    : mappedClass?.fields.getOrNull(field.name.string, field.type.string);
                const fieldIsMapped =
                    (mappedField && isMappedName(field.name.string, mappedField.dst)) ||
                    (mappedFieldKeys?.has(`${field.name.string}:${field.type.string}`) ?? false);
                if (fieldIsMapped) {
                    mappedFields++;
                }
            }

            for (const method of classEntry.node.methods) {
                totalMethods++;
                const mappedMethod = classUsesDstNames
                    ? null
                    : mappedClass?.methods.getOrNull(method.name.string, method.type.string);
                const methodIsMapped =
                    (mappedMethod && isMappedName(method.name.string, mappedMethod.dst)) ||
                    (mappedMethodKeys?.has(`${method.name.string}:${method.type.string}`) ?? false);
                if (methodIsMapped) {
                    mappedMethods++;
                }
            }
        }

        return {
            classes: { mapped: mappedClasses, total: totalClasses },
            fields: { mapped: mappedFields, total: totalFields },
            methods: { mapped: mappedMethods, total: totalMethods },
        };
    };

    const stats = $derived.by<MappingStats>(() => {
        const elements = countElements();

        const total = {
            mapped: elements.classes.mapped + elements.fields.mapped + elements.methods.mapped,
            total: elements.classes.total + elements.fields.total + elements.methods.total,
        };

        return {
            ...elements,
            total,
        };
    });

    const formatStats = (count: CountStats): string => {
        const percentage = count.total === 0 ? 0 : Math.round((count.mapped / count.total) * 100);
        return `${count.mapped}/${count.total} (${percentage}%)`;
    };
</script>

<Dialog bind:open={isOpen} onOpenChangeComplete={(open) => open || close()}>
    <DialogContent class="sm:max-w-md">
        <DialogHeader>
            <DialogTitle>{$t("dialog.mapping-stats.title")}</DialogTitle>
            <DialogDescription>{$t("dialog.mapping-stats.desc")}</DialogDescription>
        </DialogHeader>

        <div class="grid gap-3 py-4">
            <div class="flex items-center justify-between rounded-lg bg-muted/50 px-4 py-3">
                <span class="text-muted-foreground">{$t("dialog.mapping-stats.classes")}</span>
                <span class="font-medium tabular-nums">{formatStats(stats.classes)}</span>
            </div>

            <div class="flex items-center justify-between rounded-lg bg-muted/50 px-4 py-3">
                <span class="text-muted-foreground">{$t("dialog.mapping-stats.fields")}</span>
                <span class="font-medium tabular-nums">{formatStats(stats.fields)}</span>
            </div>

            <div class="flex items-center justify-between rounded-lg bg-muted/50 px-4 py-3">
                <span class="text-muted-foreground">{$t("dialog.mapping-stats.methods")}</span>
                <span class="font-medium tabular-nums">{formatStats(stats.methods)}</span>
            </div>

            <div class="mt-1 flex items-center justify-between rounded-lg border bg-background px-4 py-3">
                <span class="font-medium">{$t("dialog.mapping-stats.total")}</span>
                <span class="text-lg font-semibold tabular-nums">{formatStats(stats.total)}</span>
            </div>
        </div>
    </DialogContent>
</Dialog>