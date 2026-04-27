import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace org. */
export namespace org {

    /** Namespace jetbrains. */
    namespace jetbrains {

        /** Namespace kotlin. */
        namespace kotlin {

            /** Namespace metadata. */
            namespace metadata {

                /** Namespace jvm. */
                namespace jvm {

                    /** Properties of a Module. */
                    interface IModule {

                        /** Module packageParts */
                        packageParts?: (org.jetbrains.kotlin.metadata.jvm.IPackageParts[]|null);

                        /** Module metadataParts */
                        metadataParts?: (org.jetbrains.kotlin.metadata.jvm.IPackageParts[]|null);

                        /** Module jvmPackageName */
                        jvmPackageName?: (string[]|null);

                        /** Module stringTable */
                        stringTable?: (org.jetbrains.kotlin.metadata.IStringTable|null);

                        /** Module qualifiedNameTable */
                        qualifiedNameTable?: (org.jetbrains.kotlin.metadata.IQualifiedNameTable|null);

                        /** Module annotation */
                        annotation?: (org.jetbrains.kotlin.metadata.IAnnotation[]|null);

                        /** Module optionalAnnotationClass */
                        optionalAnnotationClass?: (org.jetbrains.kotlin.metadata.IClass[]|null);
                    }

                    /** Represents a Module. */
                    class Module implements IModule {

                        /**
                         * Constructs a new Module.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: org.jetbrains.kotlin.metadata.jvm.IModule);

                        /** Module packageParts. */
                        public packageParts: org.jetbrains.kotlin.metadata.jvm.IPackageParts[];

                        /** Module metadataParts. */
                        public metadataParts: org.jetbrains.kotlin.metadata.jvm.IPackageParts[];

                        /** Module jvmPackageName. */
                        public jvmPackageName: string[];

                        /** Module stringTable. */
                        public stringTable?: (org.jetbrains.kotlin.metadata.IStringTable|null);

                        /** Module qualifiedNameTable. */
                        public qualifiedNameTable?: (org.jetbrains.kotlin.metadata.IQualifiedNameTable|null);

                        /** Module annotation. */
                        public annotation: org.jetbrains.kotlin.metadata.IAnnotation[];

                        /** Module optionalAnnotationClass. */
                        public optionalAnnotationClass: org.jetbrains.kotlin.metadata.IClass[];

                        /**
                         * Decodes a Module message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Module
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): org.jetbrains.kotlin.metadata.jvm.Module;

                        /**
                         * Creates a Module message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Module
                         */
                        public static fromObject(object: { [k: string]: any }): org.jetbrains.kotlin.metadata.jvm.Module;

                        /**
                         * Creates a plain object from a Module message. Also converts values to other types if specified.
                         * @param message Module
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: org.jetbrains.kotlin.metadata.jvm.Module, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Module to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Module
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a PackageParts. */
                    interface IPackageParts {

                        /** PackageParts packageFqName */
                        packageFqName: string;

                        /** PackageParts shortClassName */
                        shortClassName?: (string[]|null);

                        /** PackageParts multifileFacadeShortNameId */
                        multifileFacadeShortNameId?: (number[]|null);

                        /** PackageParts multifileFacadeShortName */
                        multifileFacadeShortName?: (string[]|null);

                        /** PackageParts classWithJvmPackageNameShortName */
                        classWithJvmPackageNameShortName?: (string[]|null);

                        /** PackageParts classWithJvmPackageNameMultifileFacadeShortNameId */
                        classWithJvmPackageNameMultifileFacadeShortNameId?: (number[]|null);

                        /** PackageParts classWithJvmPackageNamePackageId */
                        classWithJvmPackageNamePackageId?: (number[]|null);
                    }

                    /** Represents a PackageParts. */
                    class PackageParts implements IPackageParts {

                        /**
                         * Constructs a new PackageParts.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: org.jetbrains.kotlin.metadata.jvm.IPackageParts);

                        /** PackageParts packageFqName. */
                        public packageFqName: string;

                        /** PackageParts shortClassName. */
                        public shortClassName: string[];

                        /** PackageParts multifileFacadeShortNameId. */
                        public multifileFacadeShortNameId: number[];

                        /** PackageParts multifileFacadeShortName. */
                        public multifileFacadeShortName: string[];

                        /** PackageParts classWithJvmPackageNameShortName. */
                        public classWithJvmPackageNameShortName: string[];

                        /** PackageParts classWithJvmPackageNameMultifileFacadeShortNameId. */
                        public classWithJvmPackageNameMultifileFacadeShortNameId: number[];

                        /** PackageParts classWithJvmPackageNamePackageId. */
                        public classWithJvmPackageNamePackageId: number[];

                        /**
                         * Decodes a PackageParts message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PackageParts
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): org.jetbrains.kotlin.metadata.jvm.PackageParts;

                        /**
                         * Creates a PackageParts message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PackageParts
                         */
                        public static fromObject(object: { [k: string]: any }): org.jetbrains.kotlin.metadata.jvm.PackageParts;

                        /**
                         * Creates a plain object from a PackageParts message. Also converts values to other types if specified.
                         * @param message PackageParts
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: org.jetbrains.kotlin.metadata.jvm.PackageParts, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PackageParts to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for PackageParts
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a StringTable. */
                interface IStringTable {

                    /** StringTable string */
                    string?: (string[]|null);
                }

                /** Represents a StringTable. */
                class StringTable implements IStringTable {

                    /**
                     * Constructs a new StringTable.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: org.jetbrains.kotlin.metadata.IStringTable);

                    /** StringTable string. */
                    public string: string[];

                    /**
                     * Decodes a StringTable message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StringTable
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): org.jetbrains.kotlin.metadata.StringTable;

                    /**
                     * Creates a StringTable message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StringTable
                     */
                    public static fromObject(object: { [k: string]: any }): org.jetbrains.kotlin.metadata.StringTable;

                    /**
                     * Creates a plain object from a StringTable message. Also converts values to other types if specified.
                     * @param message StringTable
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: org.jetbrains.kotlin.metadata.StringTable, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StringTable to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for StringTable
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a QualifiedNameTable. */
                interface IQualifiedNameTable {

                    /** QualifiedNameTable qualifiedName */
                    qualifiedName?: (org.jetbrains.kotlin.metadata.QualifiedNameTable.IQualifiedName[]|null);
                }

                /** Represents a QualifiedNameTable. */
                class QualifiedNameTable implements IQualifiedNameTable {

                    /**
                     * Constructs a new QualifiedNameTable.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: org.jetbrains.kotlin.metadata.IQualifiedNameTable);

                    /** QualifiedNameTable qualifiedName. */
                    public qualifiedName: org.jetbrains.kotlin.metadata.QualifiedNameTable.IQualifiedName[];

                    /**
                     * Decodes a QualifiedNameTable message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QualifiedNameTable
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): org.jetbrains.kotlin.metadata.QualifiedNameTable;

                    /**
                     * Creates a QualifiedNameTable message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QualifiedNameTable
                     */
                    public static fromObject(object: { [k: string]: any }): org.jetbrains.kotlin.metadata.QualifiedNameTable;

                    /**
                     * Creates a plain object from a QualifiedNameTable message. Also converts values to other types if specified.
                     * @param message QualifiedNameTable
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: org.jetbrains.kotlin.metadata.QualifiedNameTable, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QualifiedNameTable to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for QualifiedNameTable
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace QualifiedNameTable {

                    /** Properties of a QualifiedName. */
                    interface IQualifiedName {

                        /** QualifiedName parentQualifiedName */
                        parentQualifiedName?: (number|null);

                        /** QualifiedName shortName */
                        shortName: number;

                        /** QualifiedName kind */
                        kind?: (org.jetbrains.kotlin.metadata.QualifiedNameTable.QualifiedName.Kind|null);
                    }

                    /** Represents a QualifiedName. */
                    class QualifiedName implements IQualifiedName {

                        /**
                         * Constructs a new QualifiedName.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: org.jetbrains.kotlin.metadata.QualifiedNameTable.IQualifiedName);

                        /** QualifiedName parentQualifiedName. */
                        public parentQualifiedName: number;

                        /** QualifiedName shortName. */
                        public shortName: number;

                        /** QualifiedName kind. */
                        public kind: org.jetbrains.kotlin.metadata.QualifiedNameTable.QualifiedName.Kind;

                        /**
                         * Decodes a QualifiedName message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns QualifiedName
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): org.jetbrains.kotlin.metadata.QualifiedNameTable.QualifiedName;

                        /**
                         * Creates a QualifiedName message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns QualifiedName
                         */
                        public static fromObject(object: { [k: string]: any }): org.jetbrains.kotlin.metadata.QualifiedNameTable.QualifiedName;

                        /**
                         * Creates a plain object from a QualifiedName message. Also converts values to other types if specified.
                         * @param message QualifiedName
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: org.jetbrains.kotlin.metadata.QualifiedNameTable.QualifiedName, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this QualifiedName to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for QualifiedName
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace QualifiedName {

                        /** Kind enum. */
                        enum Kind {
                            CLASS = 0,
                            PACKAGE = 1,
                            LOCAL = 2
                        }
                    }
                }

                /** Properties of an Annotation. */
                interface IAnnotation {

                    /** Annotation id */
                    id: number;

                    /** Annotation argument */
                    argument?: (org.jetbrains.kotlin.metadata.Annotation.IArgument[]|null);
                }

                /** Represents an Annotation. */
                class Annotation implements IAnnotation {

                    /**
                     * Constructs a new Annotation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: org.jetbrains.kotlin.metadata.IAnnotation);

                    /** Annotation id. */
                    public id: number;

                    /** Annotation argument. */
                    public argument: org.jetbrains.kotlin.metadata.Annotation.IArgument[];

                    /**
                     * Decodes an Annotation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Annotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): org.jetbrains.kotlin.metadata.Annotation;

                    /**
                     * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Annotation
                     */
                    public static fromObject(object: { [k: string]: any }): org.jetbrains.kotlin.metadata.Annotation;

                    /**
                     * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                     * @param message Annotation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: org.jetbrains.kotlin.metadata.Annotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Annotation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Annotation
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Annotation {

                    /** Properties of an Argument. */
                    interface IArgument {

                        /** Argument nameId */
                        nameId: number;

                        /** Argument value */
                        value: org.jetbrains.kotlin.metadata.Annotation.Argument.IValue;
                    }

                    /** Represents an Argument. */
                    class Argument implements IArgument {

                        /**
                         * Constructs a new Argument.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: org.jetbrains.kotlin.metadata.Annotation.IArgument);

                        /** Argument nameId. */
                        public nameId: number;

                        /** Argument value. */
                        public value: org.jetbrains.kotlin.metadata.Annotation.Argument.IValue;

                        /**
                         * Decodes an Argument message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Argument
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): org.jetbrains.kotlin.metadata.Annotation.Argument;

                        /**
                         * Creates an Argument message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Argument
                         */
                        public static fromObject(object: { [k: string]: any }): org.jetbrains.kotlin.metadata.Annotation.Argument;

                        /**
                         * Creates a plain object from an Argument message. Also converts values to other types if specified.
                         * @param message Argument
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: org.jetbrains.kotlin.metadata.Annotation.Argument, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Argument to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Argument
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace Argument {

                        /** Properties of a Value. */
                        interface IValue {

                            /** Value type */
                            type?: (org.jetbrains.kotlin.metadata.Annotation.Argument.Value.Type|null);

                            /** Value intValue */
                            intValue?: (number|Long|null);

                            /** Value floatValue */
                            floatValue?: (number|null);

                            /** Value doubleValue */
                            doubleValue?: (number|null);

                            /** Value stringValue */
                            stringValue?: (number|null);

                            /** Value classId */
                            classId?: (number|null);

                            /** Value enumValueId */
                            enumValueId?: (number|null);

                            /** Value annotation */
                            annotation?: (org.jetbrains.kotlin.metadata.IAnnotation|null);

                            /** Value arrayElement */
                            arrayElement?: (org.jetbrains.kotlin.metadata.Annotation.Argument.IValue[]|null);

                            /** Value arrayDimensionCount */
                            arrayDimensionCount?: (number|null);

                            /** Value flags */
                            flags?: (number|null);
                        }

                        /** Represents a Value. */
                        class Value implements IValue {

                            /**
                             * Constructs a new Value.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: org.jetbrains.kotlin.metadata.Annotation.Argument.IValue);

                            /** Value type. */
                            public type: org.jetbrains.kotlin.metadata.Annotation.Argument.Value.Type;

                            /** Value intValue. */
                            public intValue: (number|Long);

                            /** Value floatValue. */
                            public floatValue: number;

                            /** Value doubleValue. */
                            public doubleValue: number;

                            /** Value stringValue. */
                            public stringValue: number;

                            /** Value classId. */
                            public classId: number;

                            /** Value enumValueId. */
                            public enumValueId: number;

                            /** Value annotation. */
                            public annotation?: (org.jetbrains.kotlin.metadata.IAnnotation|null);

                            /** Value arrayElement. */
                            public arrayElement: org.jetbrains.kotlin.metadata.Annotation.Argument.IValue[];

                            /** Value arrayDimensionCount. */
                            public arrayDimensionCount: number;

                            /** Value flags. */
                            public flags: number;

                            /**
                             * Decodes a Value message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Value
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): org.jetbrains.kotlin.metadata.Annotation.Argument.Value;

                            /**
                             * Creates a Value message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Value
                             */
                            public static fromObject(object: { [k: string]: any }): org.jetbrains.kotlin.metadata.Annotation.Argument.Value;

                            /**
                             * Creates a plain object from a Value message. Also converts values to other types if specified.
                             * @param message Value
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: org.jetbrains.kotlin.metadata.Annotation.Argument.Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Value to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Value
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        namespace Value {

                            /** Type enum. */
                            enum Type {
                                BYTE = 0,
                                CHAR = 1,
                                SHORT = 2,
                                INT = 3,
                                LONG = 4,
                                FLOAT = 5,
                                DOUBLE = 6,
                                BOOLEAN = 7,
                                STRING = 8,
                                CLASS = 9,
                                ENUM = 10,
                                ANNOTATION = 11,
                                ARRAY = 12
                            }
                        }
                    }
                }

                /** Properties of a Type. */
                interface IType {

                    /** Type argument */
                    argument?: (org.jetbrains.kotlin.metadata.Type.IArgument[]|null);

                    /** Type nullable */
                    nullable?: (boolean|null);

                    /** Type flexibleTypeCapabilitiesId */
                    flexibleTypeCapabilitiesId?: (number|null);

                    /** Type flexibleUpperBound */
                    flexibleUpperBound?: (org.jetbrains.kotlin.metadata.IType|null);

                    /** Type flexibleUpperBoundId */
                    flexibleUpperBoundId?: (number|null);

                    /** Type className */
                    className?: (number|null);

                    /** Type typeParameter */
                    typeParameter?: (number|null);

                    /** Type typeParameterName */
                    typeParameterName?: (number|null);

                    /** Type typeAliasName */
                    typeAliasName?: (number|null);

                    /** Type outerType */
                    outerType?: (org.jetbrains.kotlin.metadata.IType|null);

                    /** Type outerTypeId */
                    outerTypeId?: (number|null);

                    /** Type abbreviatedType */
                    abbreviatedType?: (org.jetbrains.kotlin.metadata.IType|null);

                    /** Type abbreviatedTypeId */
                    abbreviatedTypeId?: (number|null);

                    /** Type flags */
                    flags?: (number|null);

                    /** Type annotation */
                    annotation?: (org.jetbrains.kotlin.metadata.IAnnotation[]|null);
                }

                /** Represents a Type. */
                class Type implements IType {

                    /**
                     * Constructs a new Type.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: org.jetbrains.kotlin.metadata.IType);

                    /** Type argument. */
                    public argument: org.jetbrains.kotlin.metadata.Type.IArgument[];

                    /** Type nullable. */
                    public nullable: boolean;

                    /** Type flexibleTypeCapabilitiesId. */
                    public flexibleTypeCapabilitiesId: number;

                    /** Type flexibleUpperBound. */
                    public flexibleUpperBound?: (org.jetbrains.kotlin.metadata.IType|null);

                    /** Type flexibleUpperBoundId. */
                    public flexibleUpperBoundId: number;

                    /** Type className. */
                    public className: number;

                    /** Type typeParameter. */
                    public typeParameter: number;

                    /** Type typeParameterName. */
                    public typeParameterName: number;

                    /** Type typeAliasName. */
                    public typeAliasName: number;

                    /** Type outerType. */
                    public outerType?: (org.jetbrains.kotlin.metadata.IType|null);

                    /** Type outerTypeId. */
                    public outerTypeId: number;

                    /** Type abbreviatedType. */
                    public abbreviatedType?: (org.jetbrains.kotlin.metadata.IType|null);

                    /** Type abbreviatedTypeId. */
                    public abbreviatedTypeId: number;

                    /** Type flags. */
                    public flags: number;

                    /** Type annotation. */
                    public annotation: org.jetbrains.kotlin.metadata.IAnnotation[];

                    /**
                     * Decodes a Type message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Type
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): org.jetbrains.kotlin.metadata.Type;

                    /**
                     * Creates a Type message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Type
                     */
                    public static fromObject(object: { [k: string]: any }): org.jetbrains.kotlin.metadata.Type;

                    /**
                     * Creates a plain object from a Type message. Also converts values to other types if specified.
                     * @param message Type
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: org.jetbrains.kotlin.metadata.Type, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Type to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Type
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Type {

                    /** Properties of an Argument. */
                    interface IArgument {

                        /** Argument projection */
                        projection?: (org.jetbrains.kotlin.metadata.Type.Argument.Projection|null);

                        /** Argument type */
                        type?: (org.jetbrains.kotlin.metadata.IType|null);

                        /** Argument typeId */
                        typeId?: (number|null);
                    }

                    /** Represents an Argument. */
                    class Argument implements IArgument {

                        /**
                         * Constructs a new Argument.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: org.jetbrains.kotlin.metadata.Type.IArgument);

                        /** Argument projection. */
                        public projection: org.jetbrains.kotlin.metadata.Type.Argument.Projection;

                        /** Argument type. */
                        public type?: (org.jetbrains.kotlin.metadata.IType|null);

                        /** Argument typeId. */
                        public typeId: number;

                        /**
                         * Decodes an Argument message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Argument
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): org.jetbrains.kotlin.metadata.Type.Argument;

                        /**
                         * Creates an Argument message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Argument
                         */
                        public static fromObject(object: { [k: string]: any }): org.jetbrains.kotlin.metadata.Type.Argument;

                        /**
                         * Creates a plain object from an Argument message. Also converts values to other types if specified.
                         * @param message Argument
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: org.jetbrains.kotlin.metadata.Type.Argument, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Argument to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Argument
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace Argument {

                        /** Projection enum. */
                        enum Projection {
                            IN = 0,
                            OUT = 1,
                            INV = 2,
                            STAR = 3
                        }
                    }
                }

                /** Properties of a TypeParameter. */
                interface ITypeParameter {

                    /** TypeParameter id */
                    id: number;

                    /** TypeParameter name */
                    name: number;

                    /** TypeParameter reified */
                    reified?: (boolean|null);

                    /** TypeParameter variance */
                    variance?: (org.jetbrains.kotlin.metadata.TypeParameter.Variance|null);

                    /** TypeParameter upperBound */
                    upperBound?: (org.jetbrains.kotlin.metadata.IType[]|null);

                    /** TypeParameter upperBoundId */
                    upperBoundId?: (number[]|null);

                    /** TypeParameter annotation */
                    annotation?: (org.jetbrains.kotlin.metadata.IAnnotation[]|null);
                }

                /** Represents a TypeParameter. */
                class TypeParameter implements ITypeParameter {

                    /**
                     * Constructs a new TypeParameter.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: org.jetbrains.kotlin.metadata.ITypeParameter);

                    /** TypeParameter id. */
                    public id: number;

                    /** TypeParameter name. */
                    public name: number;

                    /** TypeParameter reified. */
                    public reified: boolean;

                    /** TypeParameter variance. */
                    public variance: org.jetbrains.kotlin.metadata.TypeParameter.Variance;

                    /** TypeParameter upperBound. */
                    public upperBound: org.jetbrains.kotlin.metadata.IType[];

                    /** TypeParameter upperBoundId. */
                    public upperBoundId: number[];

                    /** TypeParameter annotation. */
                    public annotation: org.jetbrains.kotlin.metadata.IAnnotation[];

                    /**
                     * Decodes a TypeParameter message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TypeParameter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): org.jetbrains.kotlin.metadata.TypeParameter;

                    /**
                     * Creates a TypeParameter message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TypeParameter
                     */
                    public static fromObject(object: { [k: string]: any }): org.jetbrains.kotlin.metadata.TypeParameter;

                    /**
                     * Creates a plain object from a TypeParameter message. Also converts values to other types if specified.
                     * @param message TypeParameter
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: org.jetbrains.kotlin.metadata.TypeParameter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TypeParameter to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TypeParameter
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace TypeParameter {

                    /** Variance enum. */
                    enum Variance {
                        IN = 0,
                        OUT = 1,
                        INV = 2
                    }
                }

                /** Properties of a Class. */
                interface IClass {

                    /** Class flags */
                    flags?: (number|null);

                    /** Class fqName */
                    fqName: number;

                    /** Class companionObjectName */
                    companionObjectName?: (number|null);

                    /** Class typeParameter */
                    typeParameter?: (org.jetbrains.kotlin.metadata.ITypeParameter[]|null);

                    /** Class supertype */
                    supertype?: (org.jetbrains.kotlin.metadata.IType[]|null);

                    /** Class supertypeId */
                    supertypeId?: (number[]|null);

                    /** Class nestedClassName */
                    nestedClassName?: (number[]|null);

                    /** Class contextReceiverType */
                    contextReceiverType?: (org.jetbrains.kotlin.metadata.IType[]|null);

                    /** Class contextReceiverTypeId */
                    contextReceiverTypeId?: (number[]|null);

                    /** Class _constructor */
                    _constructor?: (org.jetbrains.kotlin.metadata.IConstructor[]|null);

                    /** Class function */
                    "function"?: (org.jetbrains.kotlin.metadata.IFunction[]|null);

                    /** Class property */
                    property?: (org.jetbrains.kotlin.metadata.IProperty[]|null);

                    /** Class typeAlias */
                    typeAlias?: (org.jetbrains.kotlin.metadata.ITypeAlias[]|null);

                    /** Class enumEntry */
                    enumEntry?: (org.jetbrains.kotlin.metadata.IEnumEntry[]|null);

                    /** Class sealedSubclassFqName */
                    sealedSubclassFqName?: (number[]|null);

                    /** Class inlineClassUnderlyingPropertyName */
                    inlineClassUnderlyingPropertyName?: (number|null);

                    /** Class inlineClassUnderlyingType */
                    inlineClassUnderlyingType?: (org.jetbrains.kotlin.metadata.IType|null);

                    /** Class inlineClassUnderlyingTypeId */
                    inlineClassUnderlyingTypeId?: (number|null);

                    /** Class annotation */
                    annotation?: (org.jetbrains.kotlin.metadata.IAnnotation[]|null);

                    /** Class typeTable */
                    typeTable?: (org.jetbrains.kotlin.metadata.ITypeTable|null);

                    /** Class versionRequirement */
                    versionRequirement?: (number[]|null);

                    /** Class versionRequirementTable */
                    versionRequirementTable?: (org.jetbrains.kotlin.metadata.IVersionRequirementTable|null);

                    /** Class compilerPluginData */
                    compilerPluginData?: (org.jetbrains.kotlin.metadata.ICompilerPluginData[]|null);
                }

                /** Represents a Class. */
                class Class implements IClass {

                    /**
                     * Constructs a new Class.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: org.jetbrains.kotlin.metadata.IClass);

                    /** Class flags. */
                    public flags: number;

                    /** Class fqName. */
                    public fqName: number;

                    /** Class companionObjectName. */
                    public companionObjectName: number;

                    /** Class typeParameter. */
                    public typeParameter: org.jetbrains.kotlin.metadata.ITypeParameter[];

                    /** Class supertype. */
                    public supertype: org.jetbrains.kotlin.metadata.IType[];

                    /** Class supertypeId. */
                    public supertypeId: number[];

                    /** Class nestedClassName. */
                    public nestedClassName: number[];

                    /** Class contextReceiverType. */
                    public contextReceiverType: org.jetbrains.kotlin.metadata.IType[];

                    /** Class contextReceiverTypeId. */
                    public contextReceiverTypeId: number[];

                    /** Class _constructor. */
                    public _constructor: org.jetbrains.kotlin.metadata.IConstructor[];

                    /** Class function. */
                    public function: org.jetbrains.kotlin.metadata.IFunction[];

                    /** Class property. */
                    public property: org.jetbrains.kotlin.metadata.IProperty[];

                    /** Class typeAlias. */
                    public typeAlias: org.jetbrains.kotlin.metadata.ITypeAlias[];

                    /** Class enumEntry. */
                    public enumEntry: org.jetbrains.kotlin.metadata.IEnumEntry[];

                    /** Class sealedSubclassFqName. */
                    public sealedSubclassFqName: number[];

                    /** Class inlineClassUnderlyingPropertyName. */
                    public inlineClassUnderlyingPropertyName: number;

                    /** Class inlineClassUnderlyingType. */
                    public inlineClassUnderlyingType?: (org.jetbrains.kotlin.metadata.IType|null);

                    /** Class inlineClassUnderlyingTypeId. */
                    public inlineClassUnderlyingTypeId: number;

                    /** Class annotation. */
                    public annotation: org.jetbrains.kotlin.metadata.IAnnotation[];

                    /** Class typeTable. */
                    public typeTable?: (org.jetbrains.kotlin.metadata.ITypeTable|null);

                    /** Class versionRequirement. */
                    public versionRequirement: number[];

                    /** Class versionRequirementTable. */
                    public versionRequirementTable?: (org.jetbrains.kotlin.metadata.IVersionRequirementTable|null);

                    /** Class compilerPluginData. */
                    public compilerPluginData: org.jetbrains.kotlin.metadata.ICompilerPluginData[];

                    /**
                     * Decodes a Class message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Class
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): org.jetbrains.kotlin.metadata.Class;

                    /**
                     * Creates a Class message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Class
                     */
                    public static fromObject(object: { [k: string]: any }): org.jetbrains.kotlin.metadata.Class;

                    /**
                     * Creates a plain object from a Class message. Also converts values to other types if specified.
                     * @param message Class
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: org.jetbrains.kotlin.metadata.Class, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Class to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Class
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Class {

                    /** Kind enum. */
                    enum Kind {
                        CLASS = 0,
                        INTERFACE = 1,
                        ENUM_CLASS = 2,
                        ENUM_ENTRY = 3,
                        ANNOTATION_CLASS = 4,
                        OBJECT = 5,
                        COMPANION_OBJECT = 6
                    }
                }

                /** Properties of a Package. */
                interface IPackage {

                    /** Package function */
                    "function"?: (org.jetbrains.kotlin.metadata.IFunction[]|null);

                    /** Package property */
                    property?: (org.jetbrains.kotlin.metadata.IProperty[]|null);

                    /** Package typeAlias */
                    typeAlias?: (org.jetbrains.kotlin.metadata.ITypeAlias[]|null);

                    /** Package typeTable */
                    typeTable?: (org.jetbrains.kotlin.metadata.ITypeTable|null);

                    /** Package versionRequirementTable */
                    versionRequirementTable?: (org.jetbrains.kotlin.metadata.IVersionRequirementTable|null);
                }

                /** Represents a Package. */
                class Package implements IPackage {

                    /**
                     * Constructs a new Package.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: org.jetbrains.kotlin.metadata.IPackage);

                    /** Package function. */
                    public function: org.jetbrains.kotlin.metadata.IFunction[];

                    /** Package property. */
                    public property: org.jetbrains.kotlin.metadata.IProperty[];

                    /** Package typeAlias. */
                    public typeAlias: org.jetbrains.kotlin.metadata.ITypeAlias[];

                    /** Package typeTable. */
                    public typeTable?: (org.jetbrains.kotlin.metadata.ITypeTable|null);

                    /** Package versionRequirementTable. */
                    public versionRequirementTable?: (org.jetbrains.kotlin.metadata.IVersionRequirementTable|null);

                    /**
                     * Decodes a Package message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Package
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): org.jetbrains.kotlin.metadata.Package;

                    /**
                     * Creates a Package message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Package
                     */
                    public static fromObject(object: { [k: string]: any }): org.jetbrains.kotlin.metadata.Package;

                    /**
                     * Creates a plain object from a Package message. Also converts values to other types if specified.
                     * @param message Package
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: org.jetbrains.kotlin.metadata.Package, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Package to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Package
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TypeTable. */
                interface ITypeTable {

                    /** TypeTable type */
                    type?: (org.jetbrains.kotlin.metadata.IType[]|null);

                    /** TypeTable firstNullable */
                    firstNullable?: (number|null);
                }

                /** Represents a TypeTable. */
                class TypeTable implements ITypeTable {

                    /**
                     * Constructs a new TypeTable.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: org.jetbrains.kotlin.metadata.ITypeTable);

                    /** TypeTable type. */
                    public type: org.jetbrains.kotlin.metadata.IType[];

                    /** TypeTable firstNullable. */
                    public firstNullable: number;

                    /**
                     * Decodes a TypeTable message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TypeTable
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): org.jetbrains.kotlin.metadata.TypeTable;

                    /**
                     * Creates a TypeTable message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TypeTable
                     */
                    public static fromObject(object: { [k: string]: any }): org.jetbrains.kotlin.metadata.TypeTable;

                    /**
                     * Creates a plain object from a TypeTable message. Also converts values to other types if specified.
                     * @param message TypeTable
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: org.jetbrains.kotlin.metadata.TypeTable, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TypeTable to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TypeTable
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Constructor. */
                interface IConstructor {

                    /** Constructor flags */
                    flags?: (number|null);

                    /** Constructor valueParameter */
                    valueParameter?: (org.jetbrains.kotlin.metadata.IValueParameter[]|null);

                    /** Constructor versionRequirement */
                    versionRequirement?: (number[]|null);

                    /** Constructor compilerPluginData */
                    compilerPluginData?: (org.jetbrains.kotlin.metadata.ICompilerPluginData[]|null);

                    /** Constructor annotation */
                    annotation?: (org.jetbrains.kotlin.metadata.IAnnotation[]|null);
                }

                /** Represents a Constructor. */
                class Constructor implements IConstructor {

                    /**
                     * Constructs a new Constructor.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: org.jetbrains.kotlin.metadata.IConstructor);

                    /** Constructor flags. */
                    public flags: number;

                    /** Constructor valueParameter. */
                    public valueParameter: org.jetbrains.kotlin.metadata.IValueParameter[];

                    /** Constructor versionRequirement. */
                    public versionRequirement: number[];

                    /** Constructor compilerPluginData. */
                    public compilerPluginData: org.jetbrains.kotlin.metadata.ICompilerPluginData[];

                    /** Constructor annotation. */
                    public annotation: org.jetbrains.kotlin.metadata.IAnnotation[];

                    /**
                     * Decodes a Constructor message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Constructor
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): org.jetbrains.kotlin.metadata.Constructor;

                    /**
                     * Creates a Constructor message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Constructor
                     */
                    public static fromObject(object: { [k: string]: any }): org.jetbrains.kotlin.metadata.Constructor;

                    /**
                     * Creates a plain object from a Constructor message. Also converts values to other types if specified.
                     * @param message Constructor
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: org.jetbrains.kotlin.metadata.Constructor, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Constructor to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Constructor
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Function. */
                interface IFunction {

                    /** Function flags */
                    flags?: (number|null);

                    /** Function oldFlags */
                    oldFlags?: (number|null);

                    /** Function name */
                    name: number;

                    /** Function returnType */
                    returnType?: (org.jetbrains.kotlin.metadata.IType|null);

                    /** Function returnTypeId */
                    returnTypeId?: (number|null);

                    /** Function typeParameter */
                    typeParameter?: (org.jetbrains.kotlin.metadata.ITypeParameter[]|null);

                    /** Function receiverType */
                    receiverType?: (org.jetbrains.kotlin.metadata.IType|null);

                    /** Function receiverTypeId */
                    receiverTypeId?: (number|null);

                    /** Function contextReceiverType */
                    contextReceiverType?: (org.jetbrains.kotlin.metadata.IType[]|null);

                    /** Function contextReceiverTypeId */
                    contextReceiverTypeId?: (number[]|null);

                    /** Function contextParameter */
                    contextParameter?: (org.jetbrains.kotlin.metadata.IValueParameter[]|null);

                    /** Function valueParameter */
                    valueParameter?: (org.jetbrains.kotlin.metadata.IValueParameter[]|null);

                    /** Function typeTable */
                    typeTable?: (org.jetbrains.kotlin.metadata.ITypeTable|null);

                    /** Function versionRequirement */
                    versionRequirement?: (number[]|null);

                    /** Function contract */
                    contract?: (org.jetbrains.kotlin.metadata.IContract|null);

                    /** Function compilerPluginData */
                    compilerPluginData?: (org.jetbrains.kotlin.metadata.ICompilerPluginData[]|null);

                    /** Function annotation */
                    annotation?: (org.jetbrains.kotlin.metadata.IAnnotation[]|null);

                    /** Function extensionReceiverAnnotation */
                    extensionReceiverAnnotation?: (org.jetbrains.kotlin.metadata.IAnnotation[]|null);
                }

                /** Represents a Function. */
                class Function implements IFunction {

                    /**
                     * Constructs a new Function.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: org.jetbrains.kotlin.metadata.IFunction);

                    /** Function flags. */
                    public flags: number;

                    /** Function oldFlags. */
                    public oldFlags: number;

                    /** Function name. */
                    public name: number;

                    /** Function returnType. */
                    public returnType?: (org.jetbrains.kotlin.metadata.IType|null);

                    /** Function returnTypeId. */
                    public returnTypeId: number;

                    /** Function typeParameter. */
                    public typeParameter: org.jetbrains.kotlin.metadata.ITypeParameter[];

                    /** Function receiverType. */
                    public receiverType?: (org.jetbrains.kotlin.metadata.IType|null);

                    /** Function receiverTypeId. */
                    public receiverTypeId: number;

                    /** Function contextReceiverType. */
                    public contextReceiverType: org.jetbrains.kotlin.metadata.IType[];

                    /** Function contextReceiverTypeId. */
                    public contextReceiverTypeId: number[];

                    /** Function contextParameter. */
                    public contextParameter: org.jetbrains.kotlin.metadata.IValueParameter[];

                    /** Function valueParameter. */
                    public valueParameter: org.jetbrains.kotlin.metadata.IValueParameter[];

                    /** Function typeTable. */
                    public typeTable?: (org.jetbrains.kotlin.metadata.ITypeTable|null);

                    /** Function versionRequirement. */
                    public versionRequirement: number[];

                    /** Function contract. */
                    public contract?: (org.jetbrains.kotlin.metadata.IContract|null);

                    /** Function compilerPluginData. */
                    public compilerPluginData: org.jetbrains.kotlin.metadata.ICompilerPluginData[];

                    /** Function annotation. */
                    public annotation: org.jetbrains.kotlin.metadata.IAnnotation[];

                    /** Function extensionReceiverAnnotation. */
                    public extensionReceiverAnnotation: org.jetbrains.kotlin.metadata.IAnnotation[];

                    /**
                     * Decodes a Function message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Function
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): org.jetbrains.kotlin.metadata.Function;

                    /**
                     * Creates a Function message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Function
                     */
                    public static fromObject(object: { [k: string]: any }): org.jetbrains.kotlin.metadata.Function;

                    /**
                     * Creates a plain object from a Function message. Also converts values to other types if specified.
                     * @param message Function
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: org.jetbrains.kotlin.metadata.Function, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Function to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Function
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Property. */
                interface IProperty {

                    /** Property flags */
                    flags?: (number|null);

                    /** Property oldFlags */
                    oldFlags?: (number|null);

                    /** Property name */
                    name: number;

                    /** Property returnType */
                    returnType?: (org.jetbrains.kotlin.metadata.IType|null);

                    /** Property returnTypeId */
                    returnTypeId?: (number|null);

                    /** Property typeParameter */
                    typeParameter?: (org.jetbrains.kotlin.metadata.ITypeParameter[]|null);

                    /** Property receiverType */
                    receiverType?: (org.jetbrains.kotlin.metadata.IType|null);

                    /** Property receiverTypeId */
                    receiverTypeId?: (number|null);

                    /** Property contextReceiverType */
                    contextReceiverType?: (org.jetbrains.kotlin.metadata.IType[]|null);

                    /** Property contextReceiverTypeId */
                    contextReceiverTypeId?: (number[]|null);

                    /** Property contextParameter */
                    contextParameter?: (org.jetbrains.kotlin.metadata.IValueParameter[]|null);

                    /** Property setterValueParameter */
                    setterValueParameter?: (org.jetbrains.kotlin.metadata.IValueParameter|null);

                    /** Property getterFlags */
                    getterFlags?: (number|null);

                    /** Property setterFlags */
                    setterFlags?: (number|null);

                    /** Property versionRequirement */
                    versionRequirement?: (number[]|null);

                    /** Property compilerPluginData */
                    compilerPluginData?: (org.jetbrains.kotlin.metadata.ICompilerPluginData[]|null);

                    /** Property annotation */
                    annotation?: (org.jetbrains.kotlin.metadata.IAnnotation[]|null);

                    /** Property getterAnnotation */
                    getterAnnotation?: (org.jetbrains.kotlin.metadata.IAnnotation[]|null);

                    /** Property setterAnnotation */
                    setterAnnotation?: (org.jetbrains.kotlin.metadata.IAnnotation[]|null);

                    /** Property extensionReceiverAnnotation */
                    extensionReceiverAnnotation?: (org.jetbrains.kotlin.metadata.IAnnotation[]|null);

                    /** Property backingFieldAnnotation */
                    backingFieldAnnotation?: (org.jetbrains.kotlin.metadata.IAnnotation[]|null);

                    /** Property delegateFieldAnnotation */
                    delegateFieldAnnotation?: (org.jetbrains.kotlin.metadata.IAnnotation[]|null);

                    /** Property getterContract */
                    getterContract?: (org.jetbrains.kotlin.metadata.IContract|null);

                    /** Property setterContract */
                    setterContract?: (org.jetbrains.kotlin.metadata.IContract|null);
                }

                /** Represents a Property. */
                class Property implements IProperty {

                    /**
                     * Constructs a new Property.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: org.jetbrains.kotlin.metadata.IProperty);

                    /** Property flags. */
                    public flags: number;

                    /** Property oldFlags. */
                    public oldFlags: number;

                    /** Property name. */
                    public name: number;

                    /** Property returnType. */
                    public returnType?: (org.jetbrains.kotlin.metadata.IType|null);

                    /** Property returnTypeId. */
                    public returnTypeId: number;

                    /** Property typeParameter. */
                    public typeParameter: org.jetbrains.kotlin.metadata.ITypeParameter[];

                    /** Property receiverType. */
                    public receiverType?: (org.jetbrains.kotlin.metadata.IType|null);

                    /** Property receiverTypeId. */
                    public receiverTypeId: number;

                    /** Property contextReceiverType. */
                    public contextReceiverType: org.jetbrains.kotlin.metadata.IType[];

                    /** Property contextReceiverTypeId. */
                    public contextReceiverTypeId: number[];

                    /** Property contextParameter. */
                    public contextParameter: org.jetbrains.kotlin.metadata.IValueParameter[];

                    /** Property setterValueParameter. */
                    public setterValueParameter?: (org.jetbrains.kotlin.metadata.IValueParameter|null);

                    /** Property getterFlags. */
                    public getterFlags: number;

                    /** Property setterFlags. */
                    public setterFlags: number;

                    /** Property versionRequirement. */
                    public versionRequirement: number[];

                    /** Property compilerPluginData. */
                    public compilerPluginData: org.jetbrains.kotlin.metadata.ICompilerPluginData[];

                    /** Property annotation. */
                    public annotation: org.jetbrains.kotlin.metadata.IAnnotation[];

                    /** Property getterAnnotation. */
                    public getterAnnotation: org.jetbrains.kotlin.metadata.IAnnotation[];

                    /** Property setterAnnotation. */
                    public setterAnnotation: org.jetbrains.kotlin.metadata.IAnnotation[];

                    /** Property extensionReceiverAnnotation. */
                    public extensionReceiverAnnotation: org.jetbrains.kotlin.metadata.IAnnotation[];

                    /** Property backingFieldAnnotation. */
                    public backingFieldAnnotation: org.jetbrains.kotlin.metadata.IAnnotation[];

                    /** Property delegateFieldAnnotation. */
                    public delegateFieldAnnotation: org.jetbrains.kotlin.metadata.IAnnotation[];

                    /** Property getterContract. */
                    public getterContract?: (org.jetbrains.kotlin.metadata.IContract|null);

                    /** Property setterContract. */
                    public setterContract?: (org.jetbrains.kotlin.metadata.IContract|null);

                    /**
                     * Decodes a Property message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Property
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): org.jetbrains.kotlin.metadata.Property;

                    /**
                     * Creates a Property message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Property
                     */
                    public static fromObject(object: { [k: string]: any }): org.jetbrains.kotlin.metadata.Property;

                    /**
                     * Creates a plain object from a Property message. Also converts values to other types if specified.
                     * @param message Property
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: org.jetbrains.kotlin.metadata.Property, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Property to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Property
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ValueParameter. */
                interface IValueParameter {

                    /** ValueParameter flags */
                    flags?: (number|null);

                    /** ValueParameter name */
                    name: number;

                    /** ValueParameter type */
                    type?: (org.jetbrains.kotlin.metadata.IType|null);

                    /** ValueParameter typeId */
                    typeId?: (number|null);

                    /** ValueParameter varargElementType */
                    varargElementType?: (org.jetbrains.kotlin.metadata.IType|null);

                    /** ValueParameter varargElementTypeId */
                    varargElementTypeId?: (number|null);

                    /** ValueParameter annotation */
                    annotation?: (org.jetbrains.kotlin.metadata.IAnnotation[]|null);

                    /** ValueParameter annotationParameterDefaultValue */
                    annotationParameterDefaultValue?: (org.jetbrains.kotlin.metadata.Annotation.Argument.IValue|null);
                }

                /** Represents a ValueParameter. */
                class ValueParameter implements IValueParameter {

                    /**
                     * Constructs a new ValueParameter.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: org.jetbrains.kotlin.metadata.IValueParameter);

                    /** ValueParameter flags. */
                    public flags: number;

                    /** ValueParameter name. */
                    public name: number;

                    /** ValueParameter type. */
                    public type?: (org.jetbrains.kotlin.metadata.IType|null);

                    /** ValueParameter typeId. */
                    public typeId: number;

                    /** ValueParameter varargElementType. */
                    public varargElementType?: (org.jetbrains.kotlin.metadata.IType|null);

                    /** ValueParameter varargElementTypeId. */
                    public varargElementTypeId: number;

                    /** ValueParameter annotation. */
                    public annotation: org.jetbrains.kotlin.metadata.IAnnotation[];

                    /** ValueParameter annotationParameterDefaultValue. */
                    public annotationParameterDefaultValue?: (org.jetbrains.kotlin.metadata.Annotation.Argument.IValue|null);

                    /**
                     * Decodes a ValueParameter message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ValueParameter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): org.jetbrains.kotlin.metadata.ValueParameter;

                    /**
                     * Creates a ValueParameter message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ValueParameter
                     */
                    public static fromObject(object: { [k: string]: any }): org.jetbrains.kotlin.metadata.ValueParameter;

                    /**
                     * Creates a plain object from a ValueParameter message. Also converts values to other types if specified.
                     * @param message ValueParameter
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: org.jetbrains.kotlin.metadata.ValueParameter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ValueParameter to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ValueParameter
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TypeAlias. */
                interface ITypeAlias {

                    /** TypeAlias flags */
                    flags?: (number|null);

                    /** TypeAlias name */
                    name: number;

                    /** TypeAlias typeParameter */
                    typeParameter?: (org.jetbrains.kotlin.metadata.ITypeParameter[]|null);

                    /** TypeAlias underlyingType */
                    underlyingType?: (org.jetbrains.kotlin.metadata.IType|null);

                    /** TypeAlias underlyingTypeId */
                    underlyingTypeId?: (number|null);

                    /** TypeAlias expandedType */
                    expandedType?: (org.jetbrains.kotlin.metadata.IType|null);

                    /** TypeAlias expandedTypeId */
                    expandedTypeId?: (number|null);

                    /** TypeAlias annotation */
                    annotation?: (org.jetbrains.kotlin.metadata.IAnnotation[]|null);

                    /** TypeAlias versionRequirement */
                    versionRequirement?: (number[]|null);

                    /** TypeAlias compilerPluginData */
                    compilerPluginData?: (org.jetbrains.kotlin.metadata.ICompilerPluginData[]|null);
                }

                /** Represents a TypeAlias. */
                class TypeAlias implements ITypeAlias {

                    /**
                     * Constructs a new TypeAlias.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: org.jetbrains.kotlin.metadata.ITypeAlias);

                    /** TypeAlias flags. */
                    public flags: number;

                    /** TypeAlias name. */
                    public name: number;

                    /** TypeAlias typeParameter. */
                    public typeParameter: org.jetbrains.kotlin.metadata.ITypeParameter[];

                    /** TypeAlias underlyingType. */
                    public underlyingType?: (org.jetbrains.kotlin.metadata.IType|null);

                    /** TypeAlias underlyingTypeId. */
                    public underlyingTypeId: number;

                    /** TypeAlias expandedType. */
                    public expandedType?: (org.jetbrains.kotlin.metadata.IType|null);

                    /** TypeAlias expandedTypeId. */
                    public expandedTypeId: number;

                    /** TypeAlias annotation. */
                    public annotation: org.jetbrains.kotlin.metadata.IAnnotation[];

                    /** TypeAlias versionRequirement. */
                    public versionRequirement: number[];

                    /** TypeAlias compilerPluginData. */
                    public compilerPluginData: org.jetbrains.kotlin.metadata.ICompilerPluginData[];

                    /**
                     * Decodes a TypeAlias message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TypeAlias
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): org.jetbrains.kotlin.metadata.TypeAlias;

                    /**
                     * Creates a TypeAlias message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TypeAlias
                     */
                    public static fromObject(object: { [k: string]: any }): org.jetbrains.kotlin.metadata.TypeAlias;

                    /**
                     * Creates a plain object from a TypeAlias message. Also converts values to other types if specified.
                     * @param message TypeAlias
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: org.jetbrains.kotlin.metadata.TypeAlias, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TypeAlias to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TypeAlias
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an EnumEntry. */
                interface IEnumEntry {

                    /** EnumEntry name */
                    name?: (number|null);

                    /** EnumEntry annotation */
                    annotation?: (org.jetbrains.kotlin.metadata.IAnnotation[]|null);
                }

                /** Represents an EnumEntry. */
                class EnumEntry implements IEnumEntry {

                    /**
                     * Constructs a new EnumEntry.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: org.jetbrains.kotlin.metadata.IEnumEntry);

                    /** EnumEntry name. */
                    public name: number;

                    /** EnumEntry annotation. */
                    public annotation: org.jetbrains.kotlin.metadata.IAnnotation[];

                    /**
                     * Decodes an EnumEntry message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EnumEntry
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): org.jetbrains.kotlin.metadata.EnumEntry;

                    /**
                     * Creates an EnumEntry message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EnumEntry
                     */
                    public static fromObject(object: { [k: string]: any }): org.jetbrains.kotlin.metadata.EnumEntry;

                    /**
                     * Creates a plain object from an EnumEntry message. Also converts values to other types if specified.
                     * @param message EnumEntry
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: org.jetbrains.kotlin.metadata.EnumEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EnumEntry to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for EnumEntry
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Modality enum. */
                enum Modality {
                    FINAL = 0,
                    OPEN = 1,
                    ABSTRACT = 2,
                    SEALED = 3
                }

                /** Visibility enum. */
                enum Visibility {
                    INTERNAL = 0,
                    PRIVATE = 1,
                    PROTECTED = 2,
                    PUBLIC = 3,
                    PRIVATE_TO_THIS = 4,
                    LOCAL = 5
                }

                /** MemberKind enum. */
                enum MemberKind {
                    DECLARATION = 0,
                    FAKE_OVERRIDE = 1,
                    DELEGATION = 2,
                    SYNTHESIZED = 3
                }

                /** ReturnValueStatus enum. */
                enum ReturnValueStatus {
                    UNSPECIFIED = 0,
                    MUST_USE = 1,
                    EXPLICITLY_IGNORABLE = 2
                }

                /** Properties of a VersionRequirement. */
                interface IVersionRequirement {

                    /** VersionRequirement version */
                    version?: (number|null);

                    /** VersionRequirement versionFull */
                    versionFull?: (number|null);

                    /** VersionRequirement level */
                    level?: (org.jetbrains.kotlin.metadata.VersionRequirement.Level|null);

                    /** VersionRequirement errorCode */
                    errorCode?: (number|null);

                    /** VersionRequirement message */
                    message?: (number|null);

                    /** VersionRequirement versionKind */
                    versionKind?: (org.jetbrains.kotlin.metadata.VersionRequirement.VersionKind|null);
                }

                /** Represents a VersionRequirement. */
                class VersionRequirement implements IVersionRequirement {

                    /**
                     * Constructs a new VersionRequirement.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: org.jetbrains.kotlin.metadata.IVersionRequirement);

                    /** VersionRequirement version. */
                    public version: number;

                    /** VersionRequirement versionFull. */
                    public versionFull: number;

                    /** VersionRequirement level. */
                    public level: org.jetbrains.kotlin.metadata.VersionRequirement.Level;

                    /** VersionRequirement errorCode. */
                    public errorCode: number;

                    /** VersionRequirement message. */
                    public message: number;

                    /** VersionRequirement versionKind. */
                    public versionKind: org.jetbrains.kotlin.metadata.VersionRequirement.VersionKind;

                    /**
                     * Decodes a VersionRequirement message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns VersionRequirement
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): org.jetbrains.kotlin.metadata.VersionRequirement;

                    /**
                     * Creates a VersionRequirement message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns VersionRequirement
                     */
                    public static fromObject(object: { [k: string]: any }): org.jetbrains.kotlin.metadata.VersionRequirement;

                    /**
                     * Creates a plain object from a VersionRequirement message. Also converts values to other types if specified.
                     * @param message VersionRequirement
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: org.jetbrains.kotlin.metadata.VersionRequirement, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this VersionRequirement to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for VersionRequirement
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace VersionRequirement {

                    /** Level enum. */
                    enum Level {
                        WARNING = 0,
                        ERROR = 1,
                        HIDDEN = 2
                    }

                    /** VersionKind enum. */
                    enum VersionKind {
                        LANGUAGE_VERSION = 0,
                        COMPILER_VERSION = 1,
                        API_VERSION = 2
                    }
                }

                /** Properties of a VersionRequirementTable. */
                interface IVersionRequirementTable {

                    /** VersionRequirementTable requirement */
                    requirement?: (org.jetbrains.kotlin.metadata.IVersionRequirement[]|null);
                }

                /** Represents a VersionRequirementTable. */
                class VersionRequirementTable implements IVersionRequirementTable {

                    /**
                     * Constructs a new VersionRequirementTable.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: org.jetbrains.kotlin.metadata.IVersionRequirementTable);

                    /** VersionRequirementTable requirement. */
                    public requirement: org.jetbrains.kotlin.metadata.IVersionRequirement[];

                    /**
                     * Decodes a VersionRequirementTable message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns VersionRequirementTable
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): org.jetbrains.kotlin.metadata.VersionRequirementTable;

                    /**
                     * Creates a VersionRequirementTable message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns VersionRequirementTable
                     */
                    public static fromObject(object: { [k: string]: any }): org.jetbrains.kotlin.metadata.VersionRequirementTable;

                    /**
                     * Creates a plain object from a VersionRequirementTable message. Also converts values to other types if specified.
                     * @param message VersionRequirementTable
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: org.jetbrains.kotlin.metadata.VersionRequirementTable, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this VersionRequirementTable to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for VersionRequirementTable
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a PackageFragment. */
                interface IPackageFragment {

                    /** PackageFragment strings */
                    strings?: (org.jetbrains.kotlin.metadata.IStringTable|null);

                    /** PackageFragment qualifiedNames */
                    qualifiedNames?: (org.jetbrains.kotlin.metadata.IQualifiedNameTable|null);

                    /** PackageFragment package */
                    "package"?: (org.jetbrains.kotlin.metadata.IPackage|null);

                    /** PackageFragment class */
                    "class"?: (org.jetbrains.kotlin.metadata.IClass[]|null);

                    /** PackageFragment fileAnnotation */
                    fileAnnotation?: (org.jetbrains.kotlin.metadata.IAnnotation[]|null);
                }

                /** Represents a PackageFragment. */
                class PackageFragment implements IPackageFragment {

                    /**
                     * Constructs a new PackageFragment.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: org.jetbrains.kotlin.metadata.IPackageFragment);

                    /** PackageFragment strings. */
                    public strings?: (org.jetbrains.kotlin.metadata.IStringTable|null);

                    /** PackageFragment qualifiedNames. */
                    public qualifiedNames?: (org.jetbrains.kotlin.metadata.IQualifiedNameTable|null);

                    /** PackageFragment package. */
                    public package?: (org.jetbrains.kotlin.metadata.IPackage|null);

                    /** PackageFragment class. */
                    public class: org.jetbrains.kotlin.metadata.IClass[];

                    /** PackageFragment fileAnnotation. */
                    public fileAnnotation: org.jetbrains.kotlin.metadata.IAnnotation[];

                    /**
                     * Decodes a PackageFragment message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PackageFragment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): org.jetbrains.kotlin.metadata.PackageFragment;

                    /**
                     * Creates a PackageFragment message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PackageFragment
                     */
                    public static fromObject(object: { [k: string]: any }): org.jetbrains.kotlin.metadata.PackageFragment;

                    /**
                     * Creates a plain object from a PackageFragment message. Also converts values to other types if specified.
                     * @param message PackageFragment
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: org.jetbrains.kotlin.metadata.PackageFragment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PackageFragment to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PackageFragment
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Contract. */
                interface IContract {

                    /** Contract effect */
                    effect?: (org.jetbrains.kotlin.metadata.IEffect[]|null);
                }

                /** Represents a Contract. */
                class Contract implements IContract {

                    /**
                     * Constructs a new Contract.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: org.jetbrains.kotlin.metadata.IContract);

                    /** Contract effect. */
                    public effect: org.jetbrains.kotlin.metadata.IEffect[];

                    /**
                     * Decodes a Contract message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Contract
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): org.jetbrains.kotlin.metadata.Contract;

                    /**
                     * Creates a Contract message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Contract
                     */
                    public static fromObject(object: { [k: string]: any }): org.jetbrains.kotlin.metadata.Contract;

                    /**
                     * Creates a plain object from a Contract message. Also converts values to other types if specified.
                     * @param message Contract
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: org.jetbrains.kotlin.metadata.Contract, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Contract to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Contract
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an Effect. */
                interface IEffect {

                    /** Effect effectType */
                    effectType?: (org.jetbrains.kotlin.metadata.Effect.EffectType|null);

                    /** Effect effectConstructorArgument */
                    effectConstructorArgument?: (org.jetbrains.kotlin.metadata.IExpression[]|null);

                    /** Effect conclusionOfConditionalEffect */
                    conclusionOfConditionalEffect?: (org.jetbrains.kotlin.metadata.IExpression|null);

                    /** Effect kind */
                    kind?: (org.jetbrains.kotlin.metadata.Effect.InvocationKind|null);

                    /** Effect conditionKind */
                    conditionKind?: (org.jetbrains.kotlin.metadata.Effect.EffectConditionKind|null);
                }

                /** Represents an Effect. */
                class Effect implements IEffect {

                    /**
                     * Constructs a new Effect.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: org.jetbrains.kotlin.metadata.IEffect);

                    /** Effect effectType. */
                    public effectType: org.jetbrains.kotlin.metadata.Effect.EffectType;

                    /** Effect effectConstructorArgument. */
                    public effectConstructorArgument: org.jetbrains.kotlin.metadata.IExpression[];

                    /** Effect conclusionOfConditionalEffect. */
                    public conclusionOfConditionalEffect?: (org.jetbrains.kotlin.metadata.IExpression|null);

                    /** Effect kind. */
                    public kind: org.jetbrains.kotlin.metadata.Effect.InvocationKind;

                    /** Effect conditionKind. */
                    public conditionKind: org.jetbrains.kotlin.metadata.Effect.EffectConditionKind;

                    /**
                     * Decodes an Effect message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Effect
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): org.jetbrains.kotlin.metadata.Effect;

                    /**
                     * Creates an Effect message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Effect
                     */
                    public static fromObject(object: { [k: string]: any }): org.jetbrains.kotlin.metadata.Effect;

                    /**
                     * Creates a plain object from an Effect message. Also converts values to other types if specified.
                     * @param message Effect
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: org.jetbrains.kotlin.metadata.Effect, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Effect to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Effect
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Effect {

                    /** EffectType enum. */
                    enum EffectType {
                        RETURNS_CONSTANT = 0,
                        CALLS = 1,
                        RETURNS_NOT_NULL = 2,
                        RETURNS_RESULT_OF = 3
                    }

                    /** InvocationKind enum. */
                    enum InvocationKind {
                        AT_MOST_ONCE = 0,
                        EXACTLY_ONCE = 1,
                        AT_LEAST_ONCE = 2
                    }

                    /** EffectConditionKind enum. */
                    enum EffectConditionKind {
                        CONCLUSION_CONDITION = 0,
                        RETURNS_CONDITION = 1,
                        HOLDSIN_CONDITION = 2
                    }
                }

                /** Properties of an Expression. */
                interface IExpression {

                    /** Expression flags */
                    flags?: (number|null);

                    /** Expression valueParameterReference */
                    valueParameterReference?: (number|null);

                    /** Expression constantValue */
                    constantValue?: (org.jetbrains.kotlin.metadata.Expression.ConstantValue|null);

                    /** Expression isInstanceType */
                    isInstanceType?: (org.jetbrains.kotlin.metadata.IType|null);

                    /** Expression isInstanceTypeId */
                    isInstanceTypeId?: (number|null);

                    /** Expression andArgument */
                    andArgument?: (org.jetbrains.kotlin.metadata.IExpression[]|null);

                    /** Expression orArgument */
                    orArgument?: (org.jetbrains.kotlin.metadata.IExpression[]|null);
                }

                /** Represents an Expression. */
                class Expression implements IExpression {

                    /**
                     * Constructs a new Expression.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: org.jetbrains.kotlin.metadata.IExpression);

                    /** Expression flags. */
                    public flags: number;

                    /** Expression valueParameterReference. */
                    public valueParameterReference: number;

                    /** Expression constantValue. */
                    public constantValue: org.jetbrains.kotlin.metadata.Expression.ConstantValue;

                    /** Expression isInstanceType. */
                    public isInstanceType?: (org.jetbrains.kotlin.metadata.IType|null);

                    /** Expression isInstanceTypeId. */
                    public isInstanceTypeId: number;

                    /** Expression andArgument. */
                    public andArgument: org.jetbrains.kotlin.metadata.IExpression[];

                    /** Expression orArgument. */
                    public orArgument: org.jetbrains.kotlin.metadata.IExpression[];

                    /**
                     * Decodes an Expression message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Expression
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): org.jetbrains.kotlin.metadata.Expression;

                    /**
                     * Creates an Expression message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Expression
                     */
                    public static fromObject(object: { [k: string]: any }): org.jetbrains.kotlin.metadata.Expression;

                    /**
                     * Creates a plain object from an Expression message. Also converts values to other types if specified.
                     * @param message Expression
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: org.jetbrains.kotlin.metadata.Expression, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Expression to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Expression
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Expression {

                    /** ConstantValue enum. */
                    enum ConstantValue {
                        TRUE = 0,
                        FALSE = 1,
                        NULL = 2
                    }
                }

                /** Properties of a CompilerPluginData. */
                interface ICompilerPluginData {

                    /** CompilerPluginData pluginId */
                    pluginId: number;

                    /** CompilerPluginData data */
                    data: Uint8Array;
                }

                /** Represents a CompilerPluginData. */
                class CompilerPluginData implements ICompilerPluginData {

                    /**
                     * Constructs a new CompilerPluginData.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: org.jetbrains.kotlin.metadata.ICompilerPluginData);

                    /** CompilerPluginData pluginId. */
                    public pluginId: number;

                    /** CompilerPluginData data. */
                    public data: Uint8Array;

                    /**
                     * Decodes a CompilerPluginData message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CompilerPluginData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): org.jetbrains.kotlin.metadata.CompilerPluginData;

                    /**
                     * Creates a CompilerPluginData message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CompilerPluginData
                     */
                    public static fromObject(object: { [k: string]: any }): org.jetbrains.kotlin.metadata.CompilerPluginData;

                    /**
                     * Creates a plain object from a CompilerPluginData message. Also converts values to other types if specified.
                     * @param message CompilerPluginData
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: org.jetbrains.kotlin.metadata.CompilerPluginData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CompilerPluginData to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CompilerPluginData
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }
        }
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a FileDescriptorSet. */
        interface IFileDescriptorSet {

            /** FileDescriptorSet file */
            file?: (google.protobuf.IFileDescriptorProto[]|null);
        }

        /** Represents a FileDescriptorSet. */
        class FileDescriptorSet implements IFileDescriptorSet {

            /**
             * Constructs a new FileDescriptorSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorSet);

            /** FileDescriptorSet file. */
            public file: google.protobuf.IFileDescriptorProto[];

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorSet;

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorSet;

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @param message FileDescriptorSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FileDescriptorSet
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FileDescriptorProto. */
        interface IFileDescriptorProto {

            /** FileDescriptorProto name */
            name?: (string|null);

            /** FileDescriptorProto package */
            "package"?: (string|null);

            /** FileDescriptorProto dependency */
            dependency?: (string[]|null);

            /** FileDescriptorProto publicDependency */
            publicDependency?: (number[]|null);

            /** FileDescriptorProto weakDependency */
            weakDependency?: (number[]|null);

            /** FileDescriptorProto messageType */
            messageType?: (google.protobuf.IDescriptorProto[]|null);

            /** FileDescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** FileDescriptorProto service */
            service?: (google.protobuf.IServiceDescriptorProto[]|null);

            /** FileDescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** FileDescriptorProto options */
            options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo */
            sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);
        }

        /** Represents a FileDescriptorProto. */
        class FileDescriptorProto implements IFileDescriptorProto {

            /**
             * Constructs a new FileDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorProto);

            /** FileDescriptorProto name. */
            public name: string;

            /** FileDescriptorProto package. */
            public package: string;

            /** FileDescriptorProto dependency. */
            public dependency: string[];

            /** FileDescriptorProto publicDependency. */
            public publicDependency: number[];

            /** FileDescriptorProto weakDependency. */
            public weakDependency: number[];

            /** FileDescriptorProto messageType. */
            public messageType: google.protobuf.IDescriptorProto[];

            /** FileDescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** FileDescriptorProto service. */
            public service: google.protobuf.IServiceDescriptorProto[];

            /** FileDescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** FileDescriptorProto options. */
            public options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo. */
            public sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorProto;

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorProto;

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @param message FileDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FileDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DescriptorProto. */
        interface IDescriptorProto {

            /** DescriptorProto name */
            name?: (string|null);

            /** DescriptorProto field */
            field?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto nestedType */
            nestedType?: (google.protobuf.IDescriptorProto[]|null);

            /** DescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** DescriptorProto extensionRange */
            extensionRange?: (google.protobuf.DescriptorProto.IExtensionRange[]|null);

            /** DescriptorProto options */
            options?: (google.protobuf.IMessageOptions|null);
        }

        /** Represents a DescriptorProto. */
        class DescriptorProto implements IDescriptorProto {

            /**
             * Constructs a new DescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDescriptorProto);

            /** DescriptorProto name. */
            public name: string;

            /** DescriptorProto field. */
            public field: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto nestedType. */
            public nestedType: google.protobuf.IDescriptorProto[];

            /** DescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** DescriptorProto extensionRange. */
            public extensionRange: google.protobuf.DescriptorProto.IExtensionRange[];

            /** DescriptorProto options. */
            public options?: (google.protobuf.IMessageOptions|null);

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto;

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto;

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @param message DescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace DescriptorProto {

            /** Properties of an ExtensionRange. */
            interface IExtensionRange {

                /** ExtensionRange start */
                start?: (number|null);

                /** ExtensionRange end */
                end?: (number|null);
            }

            /** Represents an ExtensionRange. */
            class ExtensionRange implements IExtensionRange {

                /**
                 * Constructs a new ExtensionRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IExtensionRange);

                /** ExtensionRange start. */
                public start: number;

                /** ExtensionRange end. */
                public end: number;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExtensionRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @param message ExtensionRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ExtensionRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ExtensionRange
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a FieldDescriptorProto. */
        interface IFieldDescriptorProto {

            /** FieldDescriptorProto name */
            name?: (string|null);

            /** FieldDescriptorProto number */
            number?: (number|null);

            /** FieldDescriptorProto label */
            label?: (google.protobuf.FieldDescriptorProto.Label|null);

            /** FieldDescriptorProto type */
            type?: (google.protobuf.FieldDescriptorProto.Type|null);

            /** FieldDescriptorProto typeName */
            typeName?: (string|null);

            /** FieldDescriptorProto extendee */
            extendee?: (string|null);

            /** FieldDescriptorProto defaultValue */
            defaultValue?: (string|null);

            /** FieldDescriptorProto options */
            options?: (google.protobuf.IFieldOptions|null);
        }

        /** Represents a FieldDescriptorProto. */
        class FieldDescriptorProto implements IFieldDescriptorProto {

            /**
             * Constructs a new FieldDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldDescriptorProto);

            /** FieldDescriptorProto name. */
            public name: string;

            /** FieldDescriptorProto number. */
            public number: number;

            /** FieldDescriptorProto label. */
            public label: google.protobuf.FieldDescriptorProto.Label;

            /** FieldDescriptorProto type. */
            public type: google.protobuf.FieldDescriptorProto.Type;

            /** FieldDescriptorProto typeName. */
            public typeName: string;

            /** FieldDescriptorProto extendee. */
            public extendee: string;

            /** FieldDescriptorProto defaultValue. */
            public defaultValue: string;

            /** FieldDescriptorProto options. */
            public options?: (google.protobuf.IFieldOptions|null);

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldDescriptorProto;

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldDescriptorProto;

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @param message FieldDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FieldDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FieldDescriptorProto {

            /** Type enum. */
            enum Type {
                TYPE_DOUBLE = 1,
                TYPE_FLOAT = 2,
                TYPE_INT64 = 3,
                TYPE_UINT64 = 4,
                TYPE_INT32 = 5,
                TYPE_FIXED64 = 6,
                TYPE_FIXED32 = 7,
                TYPE_BOOL = 8,
                TYPE_STRING = 9,
                TYPE_GROUP = 10,
                TYPE_MESSAGE = 11,
                TYPE_BYTES = 12,
                TYPE_UINT32 = 13,
                TYPE_ENUM = 14,
                TYPE_SFIXED32 = 15,
                TYPE_SFIXED64 = 16,
                TYPE_SINT32 = 17,
                TYPE_SINT64 = 18
            }

            /** Label enum. */
            enum Label {
                LABEL_OPTIONAL = 1,
                LABEL_REQUIRED = 2,
                LABEL_REPEATED = 3
            }
        }

        /** Properties of an EnumDescriptorProto. */
        interface IEnumDescriptorProto {

            /** EnumDescriptorProto name */
            name?: (string|null);

            /** EnumDescriptorProto value */
            value?: (google.protobuf.IEnumValueDescriptorProto[]|null);

            /** EnumDescriptorProto options */
            options?: (google.protobuf.IEnumOptions|null);
        }

        /** Represents an EnumDescriptorProto. */
        class EnumDescriptorProto implements IEnumDescriptorProto {

            /**
             * Constructs a new EnumDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumDescriptorProto);

            /** EnumDescriptorProto name. */
            public name: string;

            /** EnumDescriptorProto value. */
            public value: google.protobuf.IEnumValueDescriptorProto[];

            /** EnumDescriptorProto options. */
            public options?: (google.protobuf.IEnumOptions|null);

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto;

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto;

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EnumValueDescriptorProto. */
        interface IEnumValueDescriptorProto {

            /** EnumValueDescriptorProto name */
            name?: (string|null);

            /** EnumValueDescriptorProto number */
            number?: (number|null);

            /** EnumValueDescriptorProto options */
            options?: (google.protobuf.IEnumValueOptions|null);
        }

        /** Represents an EnumValueDescriptorProto. */
        class EnumValueDescriptorProto implements IEnumValueDescriptorProto {

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueDescriptorProto);

            /** EnumValueDescriptorProto name. */
            public name: string;

            /** EnumValueDescriptorProto number. */
            public number: number;

            /** EnumValueDescriptorProto options. */
            public options?: (google.protobuf.IEnumValueOptions|null);

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueDescriptorProto;

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueDescriptorProto;

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumValueDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumValueDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ServiceDescriptorProto. */
        interface IServiceDescriptorProto {

            /** ServiceDescriptorProto name */
            name?: (string|null);

            /** ServiceDescriptorProto method */
            method?: (google.protobuf.IMethodDescriptorProto[]|null);

            /** ServiceDescriptorProto options */
            options?: (google.protobuf.IServiceOptions|null);
        }

        /** Represents a ServiceDescriptorProto. */
        class ServiceDescriptorProto implements IServiceDescriptorProto {

            /**
             * Constructs a new ServiceDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceDescriptorProto);

            /** ServiceDescriptorProto name. */
            public name: string;

            /** ServiceDescriptorProto method. */
            public method: google.protobuf.IMethodDescriptorProto[];

            /** ServiceDescriptorProto options. */
            public options?: (google.protobuf.IServiceOptions|null);

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceDescriptorProto;

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceDescriptorProto;

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @param message ServiceDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ServiceDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MethodDescriptorProto. */
        interface IMethodDescriptorProto {

            /** MethodDescriptorProto name */
            name?: (string|null);

            /** MethodDescriptorProto inputType */
            inputType?: (string|null);

            /** MethodDescriptorProto outputType */
            outputType?: (string|null);

            /** MethodDescriptorProto options */
            options?: (google.protobuf.IMethodOptions|null);
        }

        /** Represents a MethodDescriptorProto. */
        class MethodDescriptorProto implements IMethodDescriptorProto {

            /**
             * Constructs a new MethodDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodDescriptorProto);

            /** MethodDescriptorProto name. */
            public name: string;

            /** MethodDescriptorProto inputType. */
            public inputType: string;

            /** MethodDescriptorProto outputType. */
            public outputType: string;

            /** MethodDescriptorProto options. */
            public options?: (google.protobuf.IMethodOptions|null);

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodDescriptorProto;

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodDescriptorProto;

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @param message MethodDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MethodDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FileOptions. */
        interface IFileOptions {

            /** FileOptions javaPackage */
            javaPackage?: (string|null);

            /** FileOptions javaOuterClassname */
            javaOuterClassname?: (string|null);

            /** FileOptions javaMultipleFiles */
            javaMultipleFiles?: (boolean|null);

            /** FileOptions javaGenerateEqualsAndHash */
            javaGenerateEqualsAndHash?: (boolean|null);

            /** FileOptions optimizeFor */
            optimizeFor?: (google.protobuf.FileOptions.OptimizeMode|null);

            /** FileOptions goPackage */
            goPackage?: (string|null);

            /** FileOptions ccGenericServices */
            ccGenericServices?: (boolean|null);

            /** FileOptions javaGenericServices */
            javaGenericServices?: (boolean|null);

            /** FileOptions pyGenericServices */
            pyGenericServices?: (boolean|null);

            /** FileOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a FileOptions. */
        class FileOptions implements IFileOptions {

            /**
             * Constructs a new FileOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileOptions);

            /** FileOptions javaPackage. */
            public javaPackage: string;

            /** FileOptions javaOuterClassname. */
            public javaOuterClassname: string;

            /** FileOptions javaMultipleFiles. */
            public javaMultipleFiles: boolean;

            /** FileOptions javaGenerateEqualsAndHash. */
            public javaGenerateEqualsAndHash: boolean;

            /** FileOptions optimizeFor. */
            public optimizeFor: google.protobuf.FileOptions.OptimizeMode;

            /** FileOptions goPackage. */
            public goPackage: string;

            /** FileOptions ccGenericServices. */
            public ccGenericServices: boolean;

            /** FileOptions javaGenericServices. */
            public javaGenericServices: boolean;

            /** FileOptions pyGenericServices. */
            public pyGenericServices: boolean;

            /** FileOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileOptions;

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileOptions;

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @param message FileOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FileOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FileOptions {

            /** OptimizeMode enum. */
            enum OptimizeMode {
                SPEED = 1,
                CODE_SIZE = 2,
                LITE_RUNTIME = 3
            }
        }

        /** Properties of a MessageOptions. */
        interface IMessageOptions {

            /** MessageOptions messageSetWireFormat */
            messageSetWireFormat?: (boolean|null);

            /** MessageOptions noStandardDescriptorAccessor */
            noStandardDescriptorAccessor?: (boolean|null);

            /** MessageOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MessageOptions .org.jetbrains.kotlin.metadata.skipMessageInComparison */
            ".org.jetbrains.kotlin.metadata.skipMessageInComparison"?: (boolean|null);
        }

        /** Represents a MessageOptions. */
        class MessageOptions implements IMessageOptions {

            /**
             * Constructs a new MessageOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMessageOptions);

            /** MessageOptions messageSetWireFormat. */
            public messageSetWireFormat: boolean;

            /** MessageOptions noStandardDescriptorAccessor. */
            public noStandardDescriptorAccessor: boolean;

            /** MessageOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MessageOptions;

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MessageOptions;

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @param message MessageOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MessageOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MessageOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FieldOptions. */
        interface IFieldOptions {

            /** FieldOptions ctype */
            ctype?: (google.protobuf.FieldOptions.CType|null);

            /** FieldOptions packed */
            packed?: (boolean|null);

            /** FieldOptions lazy */
            lazy?: (boolean|null);

            /** FieldOptions deprecated */
            deprecated?: (boolean|null);

            /** FieldOptions experimentalMapKey */
            experimentalMapKey?: (string|null);

            /** FieldOptions weak */
            weak?: (boolean|null);

            /** FieldOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FieldOptions .org.jetbrains.kotlin.metadata.skipInComparison */
            ".org.jetbrains.kotlin.metadata.skipInComparison"?: (boolean|null);

            /** FieldOptions .org.jetbrains.kotlin.metadata.nameIdInTable */
            ".org.jetbrains.kotlin.metadata.nameIdInTable"?: (boolean|null);

            /** FieldOptions .org.jetbrains.kotlin.metadata.fqNameIdInTable */
            ".org.jetbrains.kotlin.metadata.fqNameIdInTable"?: (boolean|null);

            /** FieldOptions .org.jetbrains.kotlin.metadata.stringIdInTable */
            ".org.jetbrains.kotlin.metadata.stringIdInTable"?: (boolean|null);

            /** FieldOptions .org.jetbrains.kotlin.metadata.typeIdInTable */
            ".org.jetbrains.kotlin.metadata.typeIdInTable"?: (boolean|null);
        }

        /** Represents a FieldOptions. */
        class FieldOptions implements IFieldOptions {

            /**
             * Constructs a new FieldOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldOptions);

            /** FieldOptions ctype. */
            public ctype: google.protobuf.FieldOptions.CType;

            /** FieldOptions packed. */
            public packed: boolean;

            /** FieldOptions lazy. */
            public lazy: boolean;

            /** FieldOptions deprecated. */
            public deprecated: boolean;

            /** FieldOptions experimentalMapKey. */
            public experimentalMapKey: string;

            /** FieldOptions weak. */
            public weak: boolean;

            /** FieldOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions;

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions;

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @param message FieldOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FieldOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FieldOptions {

            /** CType enum. */
            enum CType {
                STRING = 0,
                CORD = 1,
                STRING_PIECE = 2
            }
        }

        /** Properties of an EnumOptions. */
        interface IEnumOptions {

            /** EnumOptions allowAlias */
            allowAlias?: (boolean|null);

            /** EnumOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumOptions. */
        class EnumOptions implements IEnumOptions {

            /**
             * Constructs a new EnumOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumOptions);

            /** EnumOptions allowAlias. */
            public allowAlias: boolean;

            /** EnumOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumOptions;

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumOptions;

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @param message EnumOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EnumValueOptions. */
        interface IEnumValueOptions {

            /** EnumValueOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumValueOptions. */
        class EnumValueOptions implements IEnumValueOptions {

            /**
             * Constructs a new EnumValueOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueOptions);

            /** EnumValueOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueOptions;

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueOptions;

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @param message EnumValueOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumValueOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ServiceOptions. */
        interface IServiceOptions {

            /** ServiceOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a ServiceOptions. */
        class ServiceOptions implements IServiceOptions {

            /**
             * Constructs a new ServiceOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceOptions);

            /** ServiceOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceOptions;

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceOptions;

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @param message ServiceOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ServiceOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MethodOptions. */
        interface IMethodOptions {

            /** MethodOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a MethodOptions. */
        class MethodOptions implements IMethodOptions {

            /**
             * Constructs a new MethodOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodOptions);

            /** MethodOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodOptions;

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodOptions;

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @param message MethodOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MethodOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an UninterpretedOption. */
        interface IUninterpretedOption {

            /** UninterpretedOption name */
            name?: (google.protobuf.UninterpretedOption.INamePart[]|null);

            /** UninterpretedOption identifierValue */
            identifierValue?: (string|null);

            /** UninterpretedOption positiveIntValue */
            positiveIntValue?: (number|Long|null);

            /** UninterpretedOption negativeIntValue */
            negativeIntValue?: (number|Long|null);

            /** UninterpretedOption doubleValue */
            doubleValue?: (number|null);

            /** UninterpretedOption stringValue */
            stringValue?: (Uint8Array|null);

            /** UninterpretedOption aggregateValue */
            aggregateValue?: (string|null);
        }

        /** Represents an UninterpretedOption. */
        class UninterpretedOption implements IUninterpretedOption {

            /**
             * Constructs a new UninterpretedOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUninterpretedOption);

            /** UninterpretedOption name. */
            public name: google.protobuf.UninterpretedOption.INamePart[];

            /** UninterpretedOption identifierValue. */
            public identifierValue: string;

            /** UninterpretedOption positiveIntValue. */
            public positiveIntValue: (number|Long);

            /** UninterpretedOption negativeIntValue. */
            public negativeIntValue: (number|Long);

            /** UninterpretedOption doubleValue. */
            public doubleValue: number;

            /** UninterpretedOption stringValue. */
            public stringValue: Uint8Array;

            /** UninterpretedOption aggregateValue. */
            public aggregateValue: string;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption;

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UninterpretedOption
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption;

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @param message UninterpretedOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UninterpretedOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UninterpretedOption to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UninterpretedOption
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace UninterpretedOption {

            /** Properties of a NamePart. */
            interface INamePart {

                /** NamePart namePart */
                namePart: string;

                /** NamePart isExtension */
                isExtension: boolean;
            }

            /** Represents a NamePart. */
            class NamePart implements INamePart {

                /**
                 * Constructs a new NamePart.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.UninterpretedOption.INamePart);

                /** NamePart namePart. */
                public namePart: string;

                /** NamePart isExtension. */
                public isExtension: boolean;

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NamePart
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @param message NamePart
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.UninterpretedOption.NamePart, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NamePart to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for NamePart
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a SourceCodeInfo. */
        interface ISourceCodeInfo {

            /** SourceCodeInfo location */
            location?: (google.protobuf.SourceCodeInfo.ILocation[]|null);
        }

        /** Represents a SourceCodeInfo. */
        class SourceCodeInfo implements ISourceCodeInfo {

            /**
             * Constructs a new SourceCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ISourceCodeInfo);

            /** SourceCodeInfo location. */
            public location: google.protobuf.SourceCodeInfo.ILocation[];

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo;

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SourceCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo;

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @param message SourceCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.SourceCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SourceCodeInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace SourceCodeInfo {

            /** Properties of a Location. */
            interface ILocation {

                /** Location path */
                path?: (number[]|null);

                /** Location span */
                span?: (number[]|null);

                /** Location leadingComments */
                leadingComments?: (string|null);

                /** Location trailingComments */
                trailingComments?: (string|null);
            }

            /** Represents a Location. */
            class Location implements ILocation {

                /**
                 * Constructs a new Location.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.SourceCodeInfo.ILocation);

                /** Location path. */
                public path: number[];

                /** Location span. */
                public span: number[];

                /** Location leadingComments. */
                public leadingComments: string;

                /** Location trailingComments. */
                public trailingComments: string;

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Location
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @param message Location
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.SourceCodeInfo.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Location to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Location
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }
    }
}
