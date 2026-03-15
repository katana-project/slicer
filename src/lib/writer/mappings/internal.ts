import type { MappingSet } from "$lib/workspace/analysis/mapping/data";
import { type ArrayType, type MethodType, type Type, TypeKind } from "@katana-project/asm/type";

export const remapType = (type: Type, mappingSet: MappingSet): Type => {
    switch (type.kind) {
        case TypeKind.OBJECT: {
            const clazz = mappingSet.getOrNull(type.value.slice(1, -1));
            if (clazz && clazz.dst) {
                type.value = `L${clazz.dst};`;
            }
            break;
        }
        case TypeKind.METHOD: {
            const mthType = type as MethodType;
            mthType.parameters = mthType.parameters.map((p) => remapType(p, mappingSet));
            mthType.returnType = remapType(mthType.returnType, mappingSet);
            break;
        }
        case TypeKind.ARRAY: {
            const arrType = type as ArrayType;
            arrType.elementType = remapType(arrType.elementType, mappingSet);
            break;
        }
    }

    return type;
};
