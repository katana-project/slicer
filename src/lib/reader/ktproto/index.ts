import { org } from "./ktproto";

export const readModule = (data: Uint8Array): string => {
    return JSON.stringify(org.jetbrains.kotlin.metadata.jvm.Module.decode(data).toJSON(), null, 2);
};

export const readPackageFragment = (data: Uint8Array): string => {
    return JSON.stringify(org.jetbrains.kotlin.metadata.PackageFragment.decode(data).toJSON(), null, 2);
};
