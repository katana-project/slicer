/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const org = $root.org = (() => {

    /**
     * Namespace org.
     * @exports org
     * @namespace
     */
    const org = {};

    org.jetbrains = (function() {

        /**
         * Namespace jetbrains.
         * @memberof org
         * @namespace
         */
        const jetbrains = {};

        jetbrains.kotlin = (function() {

            /**
             * Namespace kotlin.
             * @memberof org.jetbrains
             * @namespace
             */
            const kotlin = {};

            kotlin.metadata = (function() {

                /**
                 * Namespace metadata.
                 * @memberof org.jetbrains.kotlin
                 * @namespace
                 */
                const metadata = {};

                metadata.jvm = (function() {

                    /**
                     * Namespace jvm.
                     * @memberof org.jetbrains.kotlin.metadata
                     * @namespace
                     */
                    const jvm = {};

                    jvm.Module = (function() {

                        /**
                         * Properties of a Module.
                         * @memberof org.jetbrains.kotlin.metadata.jvm
                         * @interface IModule
                         * @property {Array.<org.jetbrains.kotlin.metadata.jvm.IPackageParts>|null} [packageParts] Module packageParts
                         * @property {Array.<org.jetbrains.kotlin.metadata.jvm.IPackageParts>|null} [metadataParts] Module metadataParts
                         * @property {Array.<string>|null} [jvmPackageName] Module jvmPackageName
                         * @property {org.jetbrains.kotlin.metadata.IStringTable|null} [stringTable] Module stringTable
                         * @property {org.jetbrains.kotlin.metadata.IQualifiedNameTable|null} [qualifiedNameTable] Module qualifiedNameTable
                         * @property {Array.<org.jetbrains.kotlin.metadata.IAnnotation>|null} [annotation] Module annotation
                         * @property {Array.<org.jetbrains.kotlin.metadata.IClass>|null} [optionalAnnotationClass] Module optionalAnnotationClass
                         */

                        /**
                         * Constructs a new Module.
                         * @memberof org.jetbrains.kotlin.metadata.jvm
                         * @classdesc Represents a Module.
                         * @implements IModule
                         * @constructor
                         * @param {org.jetbrains.kotlin.metadata.jvm.IModule=} [properties] Properties to set
                         */
                        function Module(properties) {
                            this.packageParts = [];
                            this.metadataParts = [];
                            this.jvmPackageName = [];
                            this.annotation = [];
                            this.optionalAnnotationClass = [];
                            if (properties)
                                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Module packageParts.
                         * @member {Array.<org.jetbrains.kotlin.metadata.jvm.IPackageParts>} packageParts
                         * @memberof org.jetbrains.kotlin.metadata.jvm.Module
                         * @instance
                         */
                        Module.prototype.packageParts = $util.emptyArray;

                        /**
                         * Module metadataParts.
                         * @member {Array.<org.jetbrains.kotlin.metadata.jvm.IPackageParts>} metadataParts
                         * @memberof org.jetbrains.kotlin.metadata.jvm.Module
                         * @instance
                         */
                        Module.prototype.metadataParts = $util.emptyArray;

                        /**
                         * Module jvmPackageName.
                         * @member {Array.<string>} jvmPackageName
                         * @memberof org.jetbrains.kotlin.metadata.jvm.Module
                         * @instance
                         */
                        Module.prototype.jvmPackageName = $util.emptyArray;

                        /**
                         * Module stringTable.
                         * @member {org.jetbrains.kotlin.metadata.IStringTable|null|undefined} stringTable
                         * @memberof org.jetbrains.kotlin.metadata.jvm.Module
                         * @instance
                         */
                        Module.prototype.stringTable = null;

                        /**
                         * Module qualifiedNameTable.
                         * @member {org.jetbrains.kotlin.metadata.IQualifiedNameTable|null|undefined} qualifiedNameTable
                         * @memberof org.jetbrains.kotlin.metadata.jvm.Module
                         * @instance
                         */
                        Module.prototype.qualifiedNameTable = null;

                        /**
                         * Module annotation.
                         * @member {Array.<org.jetbrains.kotlin.metadata.IAnnotation>} annotation
                         * @memberof org.jetbrains.kotlin.metadata.jvm.Module
                         * @instance
                         */
                        Module.prototype.annotation = $util.emptyArray;

                        /**
                         * Module optionalAnnotationClass.
                         * @member {Array.<org.jetbrains.kotlin.metadata.IClass>} optionalAnnotationClass
                         * @memberof org.jetbrains.kotlin.metadata.jvm.Module
                         * @instance
                         */
                        Module.prototype.optionalAnnotationClass = $util.emptyArray;

                        /**
                         * Decodes a Module message from the specified reader or buffer.
                         * @function decode
                         * @memberof org.jetbrains.kotlin.metadata.jvm.Module
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {org.jetbrains.kotlin.metadata.jvm.Module} Module
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Module.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.org.jetbrains.kotlin.metadata.jvm.Module();
                            while (reader.pos < end) {
                                let tag = reader.uint32();
                                if (tag === error)
                                    break;
                                switch (tag >>> 3) {
                                case 1: {
                                        if (!(message.packageParts && message.packageParts.length))
                                            message.packageParts = [];
                                        message.packageParts.push($root.org.jetbrains.kotlin.metadata.jvm.PackageParts.decode(reader, reader.uint32()));
                                        break;
                                    }
                                case 2: {
                                        if (!(message.metadataParts && message.metadataParts.length))
                                            message.metadataParts = [];
                                        message.metadataParts.push($root.org.jetbrains.kotlin.metadata.jvm.PackageParts.decode(reader, reader.uint32()));
                                        break;
                                    }
                                case 3: {
                                        if (!(message.jvmPackageName && message.jvmPackageName.length))
                                            message.jvmPackageName = [];
                                        message.jvmPackageName.push(reader.string());
                                        break;
                                    }
                                case 4: {
                                        message.stringTable = $root.org.jetbrains.kotlin.metadata.StringTable.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 5: {
                                        message.qualifiedNameTable = $root.org.jetbrains.kotlin.metadata.QualifiedNameTable.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 6: {
                                        if (!(message.annotation && message.annotation.length))
                                            message.annotation = [];
                                        message.annotation.push($root.org.jetbrains.kotlin.metadata.Annotation.decode(reader, reader.uint32()));
                                        break;
                                    }
                                case 16: {
                                        if (!(message.optionalAnnotationClass && message.optionalAnnotationClass.length))
                                            message.optionalAnnotationClass = [];
                                        message.optionalAnnotationClass.push($root.org.jetbrains.kotlin.metadata.Class.decode(reader, reader.uint32()));
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a Module message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof org.jetbrains.kotlin.metadata.jvm.Module
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {org.jetbrains.kotlin.metadata.jvm.Module} Module
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Module.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Creates a Module message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof org.jetbrains.kotlin.metadata.jvm.Module
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {org.jetbrains.kotlin.metadata.jvm.Module} Module
                         */
                        Module.fromObject = function fromObject(object) {
                            if (object instanceof $root.org.jetbrains.kotlin.metadata.jvm.Module)
                                return object;
                            let message = new $root.org.jetbrains.kotlin.metadata.jvm.Module();
                            if (object.packageParts) {
                                if (!Array.isArray(object.packageParts))
                                    throw TypeError(".org.jetbrains.kotlin.metadata.jvm.Module.packageParts: array expected");
                                message.packageParts = [];
                                for (let i = 0; i < object.packageParts.length; ++i) {
                                    if (typeof object.packageParts[i] !== "object")
                                        throw TypeError(".org.jetbrains.kotlin.metadata.jvm.Module.packageParts: object expected");
                                    message.packageParts[i] = $root.org.jetbrains.kotlin.metadata.jvm.PackageParts.fromObject(object.packageParts[i]);
                                }
                            }
                            if (object.metadataParts) {
                                if (!Array.isArray(object.metadataParts))
                                    throw TypeError(".org.jetbrains.kotlin.metadata.jvm.Module.metadataParts: array expected");
                                message.metadataParts = [];
                                for (let i = 0; i < object.metadataParts.length; ++i) {
                                    if (typeof object.metadataParts[i] !== "object")
                                        throw TypeError(".org.jetbrains.kotlin.metadata.jvm.Module.metadataParts: object expected");
                                    message.metadataParts[i] = $root.org.jetbrains.kotlin.metadata.jvm.PackageParts.fromObject(object.metadataParts[i]);
                                }
                            }
                            if (object.jvmPackageName) {
                                if (!Array.isArray(object.jvmPackageName))
                                    throw TypeError(".org.jetbrains.kotlin.metadata.jvm.Module.jvmPackageName: array expected");
                                message.jvmPackageName = [];
                                for (let i = 0; i < object.jvmPackageName.length; ++i)
                                    message.jvmPackageName[i] = String(object.jvmPackageName[i]);
                            }
                            if (object.stringTable != null) {
                                if (typeof object.stringTable !== "object")
                                    throw TypeError(".org.jetbrains.kotlin.metadata.jvm.Module.stringTable: object expected");
                                message.stringTable = $root.org.jetbrains.kotlin.metadata.StringTable.fromObject(object.stringTable);
                            }
                            if (object.qualifiedNameTable != null) {
                                if (typeof object.qualifiedNameTable !== "object")
                                    throw TypeError(".org.jetbrains.kotlin.metadata.jvm.Module.qualifiedNameTable: object expected");
                                message.qualifiedNameTable = $root.org.jetbrains.kotlin.metadata.QualifiedNameTable.fromObject(object.qualifiedNameTable);
                            }
                            if (object.annotation) {
                                if (!Array.isArray(object.annotation))
                                    throw TypeError(".org.jetbrains.kotlin.metadata.jvm.Module.annotation: array expected");
                                message.annotation = [];
                                for (let i = 0; i < object.annotation.length; ++i) {
                                    if (typeof object.annotation[i] !== "object")
                                        throw TypeError(".org.jetbrains.kotlin.metadata.jvm.Module.annotation: object expected");
                                    message.annotation[i] = $root.org.jetbrains.kotlin.metadata.Annotation.fromObject(object.annotation[i]);
                                }
                            }
                            if (object.optionalAnnotationClass) {
                                if (!Array.isArray(object.optionalAnnotationClass))
                                    throw TypeError(".org.jetbrains.kotlin.metadata.jvm.Module.optionalAnnotationClass: array expected");
                                message.optionalAnnotationClass = [];
                                for (let i = 0; i < object.optionalAnnotationClass.length; ++i) {
                                    if (typeof object.optionalAnnotationClass[i] !== "object")
                                        throw TypeError(".org.jetbrains.kotlin.metadata.jvm.Module.optionalAnnotationClass: object expected");
                                    message.optionalAnnotationClass[i] = $root.org.jetbrains.kotlin.metadata.Class.fromObject(object.optionalAnnotationClass[i]);
                                }
                            }
                            return message;
                        };

                        /**
                         * Creates a plain object from a Module message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof org.jetbrains.kotlin.metadata.jvm.Module
                         * @static
                         * @param {org.jetbrains.kotlin.metadata.jvm.Module} message Module
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Module.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            let object = {};
                            if (options.arrays || options.defaults) {
                                object.packageParts = [];
                                object.metadataParts = [];
                                object.jvmPackageName = [];
                                object.annotation = [];
                                object.optionalAnnotationClass = [];
                            }
                            if (options.defaults) {
                                object.stringTable = null;
                                object.qualifiedNameTable = null;
                            }
                            if (message.packageParts && message.packageParts.length) {
                                object.packageParts = [];
                                for (let j = 0; j < message.packageParts.length; ++j)
                                    object.packageParts[j] = $root.org.jetbrains.kotlin.metadata.jvm.PackageParts.toObject(message.packageParts[j], options);
                            }
                            if (message.metadataParts && message.metadataParts.length) {
                                object.metadataParts = [];
                                for (let j = 0; j < message.metadataParts.length; ++j)
                                    object.metadataParts[j] = $root.org.jetbrains.kotlin.metadata.jvm.PackageParts.toObject(message.metadataParts[j], options);
                            }
                            if (message.jvmPackageName && message.jvmPackageName.length) {
                                object.jvmPackageName = [];
                                for (let j = 0; j < message.jvmPackageName.length; ++j)
                                    object.jvmPackageName[j] = message.jvmPackageName[j];
                            }
                            if (message.stringTable != null && message.hasOwnProperty("stringTable"))
                                object.stringTable = $root.org.jetbrains.kotlin.metadata.StringTable.toObject(message.stringTable, options);
                            if (message.qualifiedNameTable != null && message.hasOwnProperty("qualifiedNameTable"))
                                object.qualifiedNameTable = $root.org.jetbrains.kotlin.metadata.QualifiedNameTable.toObject(message.qualifiedNameTable, options);
                            if (message.annotation && message.annotation.length) {
                                object.annotation = [];
                                for (let j = 0; j < message.annotation.length; ++j)
                                    object.annotation[j] = $root.org.jetbrains.kotlin.metadata.Annotation.toObject(message.annotation[j], options);
                            }
                            if (message.optionalAnnotationClass && message.optionalAnnotationClass.length) {
                                object.optionalAnnotationClass = [];
                                for (let j = 0; j < message.optionalAnnotationClass.length; ++j)
                                    object.optionalAnnotationClass[j] = $root.org.jetbrains.kotlin.metadata.Class.toObject(message.optionalAnnotationClass[j], options);
                            }
                            return object;
                        };

                        /**
                         * Converts this Module to JSON.
                         * @function toJSON
                         * @memberof org.jetbrains.kotlin.metadata.jvm.Module
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Module.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for Module
                         * @function getTypeUrl
                         * @memberof org.jetbrains.kotlin.metadata.jvm.Module
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        Module.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/org.jetbrains.kotlin.metadata.jvm.Module";
                        };

                        return Module;
                    })();

                    jvm.PackageParts = (function() {

                        /**
                         * Properties of a PackageParts.
                         * @memberof org.jetbrains.kotlin.metadata.jvm
                         * @interface IPackageParts
                         * @property {string} packageFqName PackageParts packageFqName
                         * @property {Array.<string>|null} [shortClassName] PackageParts shortClassName
                         * @property {Array.<number>|null} [multifileFacadeShortNameId] PackageParts multifileFacadeShortNameId
                         * @property {Array.<string>|null} [multifileFacadeShortName] PackageParts multifileFacadeShortName
                         * @property {Array.<string>|null} [classWithJvmPackageNameShortName] PackageParts classWithJvmPackageNameShortName
                         * @property {Array.<number>|null} [classWithJvmPackageNameMultifileFacadeShortNameId] PackageParts classWithJvmPackageNameMultifileFacadeShortNameId
                         * @property {Array.<number>|null} [classWithJvmPackageNamePackageId] PackageParts classWithJvmPackageNamePackageId
                         */

                        /**
                         * Constructs a new PackageParts.
                         * @memberof org.jetbrains.kotlin.metadata.jvm
                         * @classdesc Represents a PackageParts.
                         * @implements IPackageParts
                         * @constructor
                         * @param {org.jetbrains.kotlin.metadata.jvm.IPackageParts=} [properties] Properties to set
                         */
                        function PackageParts(properties) {
                            this.shortClassName = [];
                            this.multifileFacadeShortNameId = [];
                            this.multifileFacadeShortName = [];
                            this.classWithJvmPackageNameShortName = [];
                            this.classWithJvmPackageNameMultifileFacadeShortNameId = [];
                            this.classWithJvmPackageNamePackageId = [];
                            if (properties)
                                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * PackageParts packageFqName.
                         * @member {string} packageFqName
                         * @memberof org.jetbrains.kotlin.metadata.jvm.PackageParts
                         * @instance
                         */
                        PackageParts.prototype.packageFqName = "";

                        /**
                         * PackageParts shortClassName.
                         * @member {Array.<string>} shortClassName
                         * @memberof org.jetbrains.kotlin.metadata.jvm.PackageParts
                         * @instance
                         */
                        PackageParts.prototype.shortClassName = $util.emptyArray;

                        /**
                         * PackageParts multifileFacadeShortNameId.
                         * @member {Array.<number>} multifileFacadeShortNameId
                         * @memberof org.jetbrains.kotlin.metadata.jvm.PackageParts
                         * @instance
                         */
                        PackageParts.prototype.multifileFacadeShortNameId = $util.emptyArray;

                        /**
                         * PackageParts multifileFacadeShortName.
                         * @member {Array.<string>} multifileFacadeShortName
                         * @memberof org.jetbrains.kotlin.metadata.jvm.PackageParts
                         * @instance
                         */
                        PackageParts.prototype.multifileFacadeShortName = $util.emptyArray;

                        /**
                         * PackageParts classWithJvmPackageNameShortName.
                         * @member {Array.<string>} classWithJvmPackageNameShortName
                         * @memberof org.jetbrains.kotlin.metadata.jvm.PackageParts
                         * @instance
                         */
                        PackageParts.prototype.classWithJvmPackageNameShortName = $util.emptyArray;

                        /**
                         * PackageParts classWithJvmPackageNameMultifileFacadeShortNameId.
                         * @member {Array.<number>} classWithJvmPackageNameMultifileFacadeShortNameId
                         * @memberof org.jetbrains.kotlin.metadata.jvm.PackageParts
                         * @instance
                         */
                        PackageParts.prototype.classWithJvmPackageNameMultifileFacadeShortNameId = $util.emptyArray;

                        /**
                         * PackageParts classWithJvmPackageNamePackageId.
                         * @member {Array.<number>} classWithJvmPackageNamePackageId
                         * @memberof org.jetbrains.kotlin.metadata.jvm.PackageParts
                         * @instance
                         */
                        PackageParts.prototype.classWithJvmPackageNamePackageId = $util.emptyArray;

                        /**
                         * Decodes a PackageParts message from the specified reader or buffer.
                         * @function decode
                         * @memberof org.jetbrains.kotlin.metadata.jvm.PackageParts
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {org.jetbrains.kotlin.metadata.jvm.PackageParts} PackageParts
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        PackageParts.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.org.jetbrains.kotlin.metadata.jvm.PackageParts();
                            while (reader.pos < end) {
                                let tag = reader.uint32();
                                if (tag === error)
                                    break;
                                switch (tag >>> 3) {
                                case 1: {
                                        message.packageFqName = reader.string();
                                        break;
                                    }
                                case 2: {
                                        if (!(message.shortClassName && message.shortClassName.length))
                                            message.shortClassName = [];
                                        message.shortClassName.push(reader.string());
                                        break;
                                    }
                                case 3: {
                                        if (!(message.multifileFacadeShortNameId && message.multifileFacadeShortNameId.length))
                                            message.multifileFacadeShortNameId = [];
                                        if ((tag & 7) === 2) {
                                            let end2 = reader.uint32() + reader.pos;
                                            while (reader.pos < end2)
                                                message.multifileFacadeShortNameId.push(reader.int32());
                                        } else
                                            message.multifileFacadeShortNameId.push(reader.int32());
                                        break;
                                    }
                                case 4: {
                                        if (!(message.multifileFacadeShortName && message.multifileFacadeShortName.length))
                                            message.multifileFacadeShortName = [];
                                        message.multifileFacadeShortName.push(reader.string());
                                        break;
                                    }
                                case 5: {
                                        if (!(message.classWithJvmPackageNameShortName && message.classWithJvmPackageNameShortName.length))
                                            message.classWithJvmPackageNameShortName = [];
                                        message.classWithJvmPackageNameShortName.push(reader.string());
                                        break;
                                    }
                                case 7: {
                                        if (!(message.classWithJvmPackageNameMultifileFacadeShortNameId && message.classWithJvmPackageNameMultifileFacadeShortNameId.length))
                                            message.classWithJvmPackageNameMultifileFacadeShortNameId = [];
                                        if ((tag & 7) === 2) {
                                            let end2 = reader.uint32() + reader.pos;
                                            while (reader.pos < end2)
                                                message.classWithJvmPackageNameMultifileFacadeShortNameId.push(reader.int32());
                                        } else
                                            message.classWithJvmPackageNameMultifileFacadeShortNameId.push(reader.int32());
                                        break;
                                    }
                                case 6: {
                                        if (!(message.classWithJvmPackageNamePackageId && message.classWithJvmPackageNamePackageId.length))
                                            message.classWithJvmPackageNamePackageId = [];
                                        if ((tag & 7) === 2) {
                                            let end2 = reader.uint32() + reader.pos;
                                            while (reader.pos < end2)
                                                message.classWithJvmPackageNamePackageId.push(reader.int32());
                                        } else
                                            message.classWithJvmPackageNamePackageId.push(reader.int32());
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            if (!message.hasOwnProperty("packageFqName"))
                                throw $util.ProtocolError("missing required 'packageFqName'", { instance: message });
                            return message;
                        };

                        /**
                         * Decodes a PackageParts message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof org.jetbrains.kotlin.metadata.jvm.PackageParts
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {org.jetbrains.kotlin.metadata.jvm.PackageParts} PackageParts
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        PackageParts.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Creates a PackageParts message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof org.jetbrains.kotlin.metadata.jvm.PackageParts
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {org.jetbrains.kotlin.metadata.jvm.PackageParts} PackageParts
                         */
                        PackageParts.fromObject = function fromObject(object) {
                            if (object instanceof $root.org.jetbrains.kotlin.metadata.jvm.PackageParts)
                                return object;
                            let message = new $root.org.jetbrains.kotlin.metadata.jvm.PackageParts();
                            if (object.packageFqName != null)
                                message.packageFqName = String(object.packageFqName);
                            if (object.shortClassName) {
                                if (!Array.isArray(object.shortClassName))
                                    throw TypeError(".org.jetbrains.kotlin.metadata.jvm.PackageParts.shortClassName: array expected");
                                message.shortClassName = [];
                                for (let i = 0; i < object.shortClassName.length; ++i)
                                    message.shortClassName[i] = String(object.shortClassName[i]);
                            }
                            if (object.multifileFacadeShortNameId) {
                                if (!Array.isArray(object.multifileFacadeShortNameId))
                                    throw TypeError(".org.jetbrains.kotlin.metadata.jvm.PackageParts.multifileFacadeShortNameId: array expected");
                                message.multifileFacadeShortNameId = [];
                                for (let i = 0; i < object.multifileFacadeShortNameId.length; ++i)
                                    message.multifileFacadeShortNameId[i] = object.multifileFacadeShortNameId[i] | 0;
                            }
                            if (object.multifileFacadeShortName) {
                                if (!Array.isArray(object.multifileFacadeShortName))
                                    throw TypeError(".org.jetbrains.kotlin.metadata.jvm.PackageParts.multifileFacadeShortName: array expected");
                                message.multifileFacadeShortName = [];
                                for (let i = 0; i < object.multifileFacadeShortName.length; ++i)
                                    message.multifileFacadeShortName[i] = String(object.multifileFacadeShortName[i]);
                            }
                            if (object.classWithJvmPackageNameShortName) {
                                if (!Array.isArray(object.classWithJvmPackageNameShortName))
                                    throw TypeError(".org.jetbrains.kotlin.metadata.jvm.PackageParts.classWithJvmPackageNameShortName: array expected");
                                message.classWithJvmPackageNameShortName = [];
                                for (let i = 0; i < object.classWithJvmPackageNameShortName.length; ++i)
                                    message.classWithJvmPackageNameShortName[i] = String(object.classWithJvmPackageNameShortName[i]);
                            }
                            if (object.classWithJvmPackageNameMultifileFacadeShortNameId) {
                                if (!Array.isArray(object.classWithJvmPackageNameMultifileFacadeShortNameId))
                                    throw TypeError(".org.jetbrains.kotlin.metadata.jvm.PackageParts.classWithJvmPackageNameMultifileFacadeShortNameId: array expected");
                                message.classWithJvmPackageNameMultifileFacadeShortNameId = [];
                                for (let i = 0; i < object.classWithJvmPackageNameMultifileFacadeShortNameId.length; ++i)
                                    message.classWithJvmPackageNameMultifileFacadeShortNameId[i] = object.classWithJvmPackageNameMultifileFacadeShortNameId[i] | 0;
                            }
                            if (object.classWithJvmPackageNamePackageId) {
                                if (!Array.isArray(object.classWithJvmPackageNamePackageId))
                                    throw TypeError(".org.jetbrains.kotlin.metadata.jvm.PackageParts.classWithJvmPackageNamePackageId: array expected");
                                message.classWithJvmPackageNamePackageId = [];
                                for (let i = 0; i < object.classWithJvmPackageNamePackageId.length; ++i)
                                    message.classWithJvmPackageNamePackageId[i] = object.classWithJvmPackageNamePackageId[i] | 0;
                            }
                            return message;
                        };

                        /**
                         * Creates a plain object from a PackageParts message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof org.jetbrains.kotlin.metadata.jvm.PackageParts
                         * @static
                         * @param {org.jetbrains.kotlin.metadata.jvm.PackageParts} message PackageParts
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        PackageParts.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            let object = {};
                            if (options.arrays || options.defaults) {
                                object.shortClassName = [];
                                object.multifileFacadeShortNameId = [];
                                object.multifileFacadeShortName = [];
                                object.classWithJvmPackageNameShortName = [];
                                object.classWithJvmPackageNamePackageId = [];
                                object.classWithJvmPackageNameMultifileFacadeShortNameId = [];
                            }
                            if (options.defaults)
                                object.packageFqName = "";
                            if (message.packageFqName != null && message.hasOwnProperty("packageFqName"))
                                object.packageFqName = message.packageFqName;
                            if (message.shortClassName && message.shortClassName.length) {
                                object.shortClassName = [];
                                for (let j = 0; j < message.shortClassName.length; ++j)
                                    object.shortClassName[j] = message.shortClassName[j];
                            }
                            if (message.multifileFacadeShortNameId && message.multifileFacadeShortNameId.length) {
                                object.multifileFacadeShortNameId = [];
                                for (let j = 0; j < message.multifileFacadeShortNameId.length; ++j)
                                    object.multifileFacadeShortNameId[j] = message.multifileFacadeShortNameId[j];
                            }
                            if (message.multifileFacadeShortName && message.multifileFacadeShortName.length) {
                                object.multifileFacadeShortName = [];
                                for (let j = 0; j < message.multifileFacadeShortName.length; ++j)
                                    object.multifileFacadeShortName[j] = message.multifileFacadeShortName[j];
                            }
                            if (message.classWithJvmPackageNameShortName && message.classWithJvmPackageNameShortName.length) {
                                object.classWithJvmPackageNameShortName = [];
                                for (let j = 0; j < message.classWithJvmPackageNameShortName.length; ++j)
                                    object.classWithJvmPackageNameShortName[j] = message.classWithJvmPackageNameShortName[j];
                            }
                            if (message.classWithJvmPackageNamePackageId && message.classWithJvmPackageNamePackageId.length) {
                                object.classWithJvmPackageNamePackageId = [];
                                for (let j = 0; j < message.classWithJvmPackageNamePackageId.length; ++j)
                                    object.classWithJvmPackageNamePackageId[j] = message.classWithJvmPackageNamePackageId[j];
                            }
                            if (message.classWithJvmPackageNameMultifileFacadeShortNameId && message.classWithJvmPackageNameMultifileFacadeShortNameId.length) {
                                object.classWithJvmPackageNameMultifileFacadeShortNameId = [];
                                for (let j = 0; j < message.classWithJvmPackageNameMultifileFacadeShortNameId.length; ++j)
                                    object.classWithJvmPackageNameMultifileFacadeShortNameId[j] = message.classWithJvmPackageNameMultifileFacadeShortNameId[j];
                            }
                            return object;
                        };

                        /**
                         * Converts this PackageParts to JSON.
                         * @function toJSON
                         * @memberof org.jetbrains.kotlin.metadata.jvm.PackageParts
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        PackageParts.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for PackageParts
                         * @function getTypeUrl
                         * @memberof org.jetbrains.kotlin.metadata.jvm.PackageParts
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        PackageParts.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/org.jetbrains.kotlin.metadata.jvm.PackageParts";
                        };

                        return PackageParts;
                    })();

                    return jvm;
                })();

                metadata.StringTable = (function() {

                    /**
                     * Properties of a StringTable.
                     * @memberof org.jetbrains.kotlin.metadata
                     * @interface IStringTable
                     * @property {Array.<string>|null} [string] StringTable string
                     */

                    /**
                     * Constructs a new StringTable.
                     * @memberof org.jetbrains.kotlin.metadata
                     * @classdesc Represents a StringTable.
                     * @implements IStringTable
                     * @constructor
                     * @param {org.jetbrains.kotlin.metadata.IStringTable=} [properties] Properties to set
                     */
                    function StringTable(properties) {
                        this.string = [];
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * StringTable string.
                     * @member {Array.<string>} string
                     * @memberof org.jetbrains.kotlin.metadata.StringTable
                     * @instance
                     */
                    StringTable.prototype.string = $util.emptyArray;

                    /**
                     * Decodes a StringTable message from the specified reader or buffer.
                     * @function decode
                     * @memberof org.jetbrains.kotlin.metadata.StringTable
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {org.jetbrains.kotlin.metadata.StringTable} StringTable
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    StringTable.decode = function decode(reader, length, error) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.org.jetbrains.kotlin.metadata.StringTable();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            case 1: {
                                    if (!(message.string && message.string.length))
                                        message.string = [];
                                    message.string.push(reader.string());
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a StringTable message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof org.jetbrains.kotlin.metadata.StringTable
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {org.jetbrains.kotlin.metadata.StringTable} StringTable
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    StringTable.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Creates a StringTable message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof org.jetbrains.kotlin.metadata.StringTable
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {org.jetbrains.kotlin.metadata.StringTable} StringTable
                     */
                    StringTable.fromObject = function fromObject(object) {
                        if (object instanceof $root.org.jetbrains.kotlin.metadata.StringTable)
                            return object;
                        let message = new $root.org.jetbrains.kotlin.metadata.StringTable();
                        if (object.string) {
                            if (!Array.isArray(object.string))
                                throw TypeError(".org.jetbrains.kotlin.metadata.StringTable.string: array expected");
                            message.string = [];
                            for (let i = 0; i < object.string.length; ++i)
                                message.string[i] = String(object.string[i]);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a StringTable message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof org.jetbrains.kotlin.metadata.StringTable
                     * @static
                     * @param {org.jetbrains.kotlin.metadata.StringTable} message StringTable
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    StringTable.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.arrays || options.defaults)
                            object.string = [];
                        if (message.string && message.string.length) {
                            object.string = [];
                            for (let j = 0; j < message.string.length; ++j)
                                object.string[j] = message.string[j];
                        }
                        return object;
                    };

                    /**
                     * Converts this StringTable to JSON.
                     * @function toJSON
                     * @memberof org.jetbrains.kotlin.metadata.StringTable
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    StringTable.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for StringTable
                     * @function getTypeUrl
                     * @memberof org.jetbrains.kotlin.metadata.StringTable
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    StringTable.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/org.jetbrains.kotlin.metadata.StringTable";
                    };

                    return StringTable;
                })();

                metadata.QualifiedNameTable = (function() {

                    /**
                     * Properties of a QualifiedNameTable.
                     * @memberof org.jetbrains.kotlin.metadata
                     * @interface IQualifiedNameTable
                     * @property {Array.<org.jetbrains.kotlin.metadata.QualifiedNameTable.IQualifiedName>|null} [qualifiedName] QualifiedNameTable qualifiedName
                     */

                    /**
                     * Constructs a new QualifiedNameTable.
                     * @memberof org.jetbrains.kotlin.metadata
                     * @classdesc Represents a QualifiedNameTable.
                     * @implements IQualifiedNameTable
                     * @constructor
                     * @param {org.jetbrains.kotlin.metadata.IQualifiedNameTable=} [properties] Properties to set
                     */
                    function QualifiedNameTable(properties) {
                        this.qualifiedName = [];
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * QualifiedNameTable qualifiedName.
                     * @member {Array.<org.jetbrains.kotlin.metadata.QualifiedNameTable.IQualifiedName>} qualifiedName
                     * @memberof org.jetbrains.kotlin.metadata.QualifiedNameTable
                     * @instance
                     */
                    QualifiedNameTable.prototype.qualifiedName = $util.emptyArray;

                    /**
                     * Decodes a QualifiedNameTable message from the specified reader or buffer.
                     * @function decode
                     * @memberof org.jetbrains.kotlin.metadata.QualifiedNameTable
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {org.jetbrains.kotlin.metadata.QualifiedNameTable} QualifiedNameTable
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    QualifiedNameTable.decode = function decode(reader, length, error) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.org.jetbrains.kotlin.metadata.QualifiedNameTable();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            case 1: {
                                    if (!(message.qualifiedName && message.qualifiedName.length))
                                        message.qualifiedName = [];
                                    message.qualifiedName.push($root.org.jetbrains.kotlin.metadata.QualifiedNameTable.QualifiedName.decode(reader, reader.uint32()));
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a QualifiedNameTable message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof org.jetbrains.kotlin.metadata.QualifiedNameTable
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {org.jetbrains.kotlin.metadata.QualifiedNameTable} QualifiedNameTable
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    QualifiedNameTable.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Creates a QualifiedNameTable message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof org.jetbrains.kotlin.metadata.QualifiedNameTable
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {org.jetbrains.kotlin.metadata.QualifiedNameTable} QualifiedNameTable
                     */
                    QualifiedNameTable.fromObject = function fromObject(object) {
                        if (object instanceof $root.org.jetbrains.kotlin.metadata.QualifiedNameTable)
                            return object;
                        let message = new $root.org.jetbrains.kotlin.metadata.QualifiedNameTable();
                        if (object.qualifiedName) {
                            if (!Array.isArray(object.qualifiedName))
                                throw TypeError(".org.jetbrains.kotlin.metadata.QualifiedNameTable.qualifiedName: array expected");
                            message.qualifiedName = [];
                            for (let i = 0; i < object.qualifiedName.length; ++i) {
                                if (typeof object.qualifiedName[i] !== "object")
                                    throw TypeError(".org.jetbrains.kotlin.metadata.QualifiedNameTable.qualifiedName: object expected");
                                message.qualifiedName[i] = $root.org.jetbrains.kotlin.metadata.QualifiedNameTable.QualifiedName.fromObject(object.qualifiedName[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a QualifiedNameTable message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof org.jetbrains.kotlin.metadata.QualifiedNameTable
                     * @static
                     * @param {org.jetbrains.kotlin.metadata.QualifiedNameTable} message QualifiedNameTable
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    QualifiedNameTable.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.arrays || options.defaults)
                            object.qualifiedName = [];
                        if (message.qualifiedName && message.qualifiedName.length) {
                            object.qualifiedName = [];
                            for (let j = 0; j < message.qualifiedName.length; ++j)
                                object.qualifiedName[j] = $root.org.jetbrains.kotlin.metadata.QualifiedNameTable.QualifiedName.toObject(message.qualifiedName[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this QualifiedNameTable to JSON.
                     * @function toJSON
                     * @memberof org.jetbrains.kotlin.metadata.QualifiedNameTable
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    QualifiedNameTable.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for QualifiedNameTable
                     * @function getTypeUrl
                     * @memberof org.jetbrains.kotlin.metadata.QualifiedNameTable
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    QualifiedNameTable.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/org.jetbrains.kotlin.metadata.QualifiedNameTable";
                    };

                    QualifiedNameTable.QualifiedName = (function() {

                        /**
                         * Properties of a QualifiedName.
                         * @memberof org.jetbrains.kotlin.metadata.QualifiedNameTable
                         * @interface IQualifiedName
                         * @property {number|null} [parentQualifiedName] QualifiedName parentQualifiedName
                         * @property {number} shortName QualifiedName shortName
                         * @property {org.jetbrains.kotlin.metadata.QualifiedNameTable.QualifiedName.Kind|null} [kind] QualifiedName kind
                         */

                        /**
                         * Constructs a new QualifiedName.
                         * @memberof org.jetbrains.kotlin.metadata.QualifiedNameTable
                         * @classdesc Represents a QualifiedName.
                         * @implements IQualifiedName
                         * @constructor
                         * @param {org.jetbrains.kotlin.metadata.QualifiedNameTable.IQualifiedName=} [properties] Properties to set
                         */
                        function QualifiedName(properties) {
                            if (properties)
                                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * QualifiedName parentQualifiedName.
                         * @member {number} parentQualifiedName
                         * @memberof org.jetbrains.kotlin.metadata.QualifiedNameTable.QualifiedName
                         * @instance
                         */
                        QualifiedName.prototype.parentQualifiedName = -1;

                        /**
                         * QualifiedName shortName.
                         * @member {number} shortName
                         * @memberof org.jetbrains.kotlin.metadata.QualifiedNameTable.QualifiedName
                         * @instance
                         */
                        QualifiedName.prototype.shortName = 0;

                        /**
                         * QualifiedName kind.
                         * @member {org.jetbrains.kotlin.metadata.QualifiedNameTable.QualifiedName.Kind} kind
                         * @memberof org.jetbrains.kotlin.metadata.QualifiedNameTable.QualifiedName
                         * @instance
                         */
                        QualifiedName.prototype.kind = 1;

                        /**
                         * Decodes a QualifiedName message from the specified reader or buffer.
                         * @function decode
                         * @memberof org.jetbrains.kotlin.metadata.QualifiedNameTable.QualifiedName
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {org.jetbrains.kotlin.metadata.QualifiedNameTable.QualifiedName} QualifiedName
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        QualifiedName.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.org.jetbrains.kotlin.metadata.QualifiedNameTable.QualifiedName();
                            while (reader.pos < end) {
                                let tag = reader.uint32();
                                if (tag === error)
                                    break;
                                switch (tag >>> 3) {
                                case 1: {
                                        message.parentQualifiedName = reader.int32();
                                        break;
                                    }
                                case 2: {
                                        message.shortName = reader.int32();
                                        break;
                                    }
                                case 3: {
                                        message.kind = reader.int32();
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            if (!message.hasOwnProperty("shortName"))
                                throw $util.ProtocolError("missing required 'shortName'", { instance: message });
                            return message;
                        };

                        /**
                         * Decodes a QualifiedName message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof org.jetbrains.kotlin.metadata.QualifiedNameTable.QualifiedName
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {org.jetbrains.kotlin.metadata.QualifiedNameTable.QualifiedName} QualifiedName
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        QualifiedName.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Creates a QualifiedName message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof org.jetbrains.kotlin.metadata.QualifiedNameTable.QualifiedName
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {org.jetbrains.kotlin.metadata.QualifiedNameTable.QualifiedName} QualifiedName
                         */
                        QualifiedName.fromObject = function fromObject(object) {
                            if (object instanceof $root.org.jetbrains.kotlin.metadata.QualifiedNameTable.QualifiedName)
                                return object;
                            let message = new $root.org.jetbrains.kotlin.metadata.QualifiedNameTable.QualifiedName();
                            if (object.parentQualifiedName != null)
                                message.parentQualifiedName = object.parentQualifiedName | 0;
                            if (object.shortName != null)
                                message.shortName = object.shortName | 0;
                            switch (object.kind) {
                            case "CLASS":
                            case 0:
                                message.kind = 0;
                                break;
                            default:
                                if (typeof object.kind === "number") {
                                    message.kind = object.kind;
                                    break;
                                }
                                break;
                            case "PACKAGE":
                            case 1:
                                message.kind = 1;
                                break;
                            case "LOCAL":
                            case 2:
                                message.kind = 2;
                                break;
                            }
                            return message;
                        };

                        /**
                         * Creates a plain object from a QualifiedName message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof org.jetbrains.kotlin.metadata.QualifiedNameTable.QualifiedName
                         * @static
                         * @param {org.jetbrains.kotlin.metadata.QualifiedNameTable.QualifiedName} message QualifiedName
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        QualifiedName.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            let object = {};
                            if (options.defaults) {
                                object.parentQualifiedName = -1;
                                object.shortName = 0;
                                object.kind = options.enums === String ? "PACKAGE" : 1;
                            }
                            if (message.parentQualifiedName != null && message.hasOwnProperty("parentQualifiedName"))
                                object.parentQualifiedName = message.parentQualifiedName;
                            if (message.shortName != null && message.hasOwnProperty("shortName"))
                                object.shortName = message.shortName;
                            if (message.kind != null && message.hasOwnProperty("kind"))
                                object.kind = options.enums === String ? $root.org.jetbrains.kotlin.metadata.QualifiedNameTable.QualifiedName.Kind[message.kind] === undefined ? message.kind : $root.org.jetbrains.kotlin.metadata.QualifiedNameTable.QualifiedName.Kind[message.kind] : message.kind;
                            return object;
                        };

                        /**
                         * Converts this QualifiedName to JSON.
                         * @function toJSON
                         * @memberof org.jetbrains.kotlin.metadata.QualifiedNameTable.QualifiedName
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        QualifiedName.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for QualifiedName
                         * @function getTypeUrl
                         * @memberof org.jetbrains.kotlin.metadata.QualifiedNameTable.QualifiedName
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        QualifiedName.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/org.jetbrains.kotlin.metadata.QualifiedNameTable.QualifiedName";
                        };

                        /**
                         * Kind enum.
                         * @name org.jetbrains.kotlin.metadata.QualifiedNameTable.QualifiedName.Kind
                         * @enum {number}
                         * @property {number} CLASS=0 CLASS value
                         * @property {number} PACKAGE=1 PACKAGE value
                         * @property {number} LOCAL=2 LOCAL value
                         */
                        QualifiedName.Kind = (function() {
                            const valuesById = {}, values = Object.create(valuesById);
                            values[valuesById[0] = "CLASS"] = 0;
                            values[valuesById[1] = "PACKAGE"] = 1;
                            values[valuesById[2] = "LOCAL"] = 2;
                            return values;
                        })();

                        return QualifiedName;
                    })();

                    return QualifiedNameTable;
                })();

                metadata.Annotation = (function() {

                    /**
                     * Properties of an Annotation.
                     * @memberof org.jetbrains.kotlin.metadata
                     * @interface IAnnotation
                     * @property {number} id Annotation id
                     * @property {Array.<org.jetbrains.kotlin.metadata.Annotation.IArgument>|null} [argument] Annotation argument
                     */

                    /**
                     * Constructs a new Annotation.
                     * @memberof org.jetbrains.kotlin.metadata
                     * @classdesc Represents an Annotation.
                     * @implements IAnnotation
                     * @constructor
                     * @param {org.jetbrains.kotlin.metadata.IAnnotation=} [properties] Properties to set
                     */
                    function Annotation(properties) {
                        this.argument = [];
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Annotation id.
                     * @member {number} id
                     * @memberof org.jetbrains.kotlin.metadata.Annotation
                     * @instance
                     */
                    Annotation.prototype.id = 0;

                    /**
                     * Annotation argument.
                     * @member {Array.<org.jetbrains.kotlin.metadata.Annotation.IArgument>} argument
                     * @memberof org.jetbrains.kotlin.metadata.Annotation
                     * @instance
                     */
                    Annotation.prototype.argument = $util.emptyArray;

                    /**
                     * Decodes an Annotation message from the specified reader or buffer.
                     * @function decode
                     * @memberof org.jetbrains.kotlin.metadata.Annotation
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {org.jetbrains.kotlin.metadata.Annotation} Annotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Annotation.decode = function decode(reader, length, error) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.org.jetbrains.kotlin.metadata.Annotation();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            case 1: {
                                    message.id = reader.int32();
                                    break;
                                }
                            case 2: {
                                    if (!(message.argument && message.argument.length))
                                        message.argument = [];
                                    message.argument.push($root.org.jetbrains.kotlin.metadata.Annotation.Argument.decode(reader, reader.uint32()));
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        if (!message.hasOwnProperty("id"))
                            throw $util.ProtocolError("missing required 'id'", { instance: message });
                        return message;
                    };

                    /**
                     * Decodes an Annotation message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof org.jetbrains.kotlin.metadata.Annotation
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {org.jetbrains.kotlin.metadata.Annotation} Annotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Annotation.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof org.jetbrains.kotlin.metadata.Annotation
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {org.jetbrains.kotlin.metadata.Annotation} Annotation
                     */
                    Annotation.fromObject = function fromObject(object) {
                        if (object instanceof $root.org.jetbrains.kotlin.metadata.Annotation)
                            return object;
                        let message = new $root.org.jetbrains.kotlin.metadata.Annotation();
                        if (object.id != null)
                            message.id = object.id | 0;
                        if (object.argument) {
                            if (!Array.isArray(object.argument))
                                throw TypeError(".org.jetbrains.kotlin.metadata.Annotation.argument: array expected");
                            message.argument = [];
                            for (let i = 0; i < object.argument.length; ++i) {
                                if (typeof object.argument[i] !== "object")
                                    throw TypeError(".org.jetbrains.kotlin.metadata.Annotation.argument: object expected");
                                message.argument[i] = $root.org.jetbrains.kotlin.metadata.Annotation.Argument.fromObject(object.argument[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof org.jetbrains.kotlin.metadata.Annotation
                     * @static
                     * @param {org.jetbrains.kotlin.metadata.Annotation} message Annotation
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Annotation.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.arrays || options.defaults)
                            object.argument = [];
                        if (options.defaults)
                            object.id = 0;
                        if (message.id != null && message.hasOwnProperty("id"))
                            object.id = message.id;
                        if (message.argument && message.argument.length) {
                            object.argument = [];
                            for (let j = 0; j < message.argument.length; ++j)
                                object.argument[j] = $root.org.jetbrains.kotlin.metadata.Annotation.Argument.toObject(message.argument[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this Annotation to JSON.
                     * @function toJSON
                     * @memberof org.jetbrains.kotlin.metadata.Annotation
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Annotation.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for Annotation
                     * @function getTypeUrl
                     * @memberof org.jetbrains.kotlin.metadata.Annotation
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Annotation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/org.jetbrains.kotlin.metadata.Annotation";
                    };

                    Annotation.Argument = (function() {

                        /**
                         * Properties of an Argument.
                         * @memberof org.jetbrains.kotlin.metadata.Annotation
                         * @interface IArgument
                         * @property {number} nameId Argument nameId
                         * @property {org.jetbrains.kotlin.metadata.Annotation.Argument.IValue} value Argument value
                         */

                        /**
                         * Constructs a new Argument.
                         * @memberof org.jetbrains.kotlin.metadata.Annotation
                         * @classdesc Represents an Argument.
                         * @implements IArgument
                         * @constructor
                         * @param {org.jetbrains.kotlin.metadata.Annotation.IArgument=} [properties] Properties to set
                         */
                        function Argument(properties) {
                            if (properties)
                                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Argument nameId.
                         * @member {number} nameId
                         * @memberof org.jetbrains.kotlin.metadata.Annotation.Argument
                         * @instance
                         */
                        Argument.prototype.nameId = 0;

                        /**
                         * Argument value.
                         * @member {org.jetbrains.kotlin.metadata.Annotation.Argument.IValue} value
                         * @memberof org.jetbrains.kotlin.metadata.Annotation.Argument
                         * @instance
                         */
                        Argument.prototype.value = null;

                        /**
                         * Decodes an Argument message from the specified reader or buffer.
                         * @function decode
                         * @memberof org.jetbrains.kotlin.metadata.Annotation.Argument
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {org.jetbrains.kotlin.metadata.Annotation.Argument} Argument
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Argument.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.org.jetbrains.kotlin.metadata.Annotation.Argument();
                            while (reader.pos < end) {
                                let tag = reader.uint32();
                                if (tag === error)
                                    break;
                                switch (tag >>> 3) {
                                case 1: {
                                        message.nameId = reader.int32();
                                        break;
                                    }
                                case 2: {
                                        message.value = $root.org.jetbrains.kotlin.metadata.Annotation.Argument.Value.decode(reader, reader.uint32());
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            if (!message.hasOwnProperty("nameId"))
                                throw $util.ProtocolError("missing required 'nameId'", { instance: message });
                            if (!message.hasOwnProperty("value"))
                                throw $util.ProtocolError("missing required 'value'", { instance: message });
                            return message;
                        };

                        /**
                         * Decodes an Argument message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof org.jetbrains.kotlin.metadata.Annotation.Argument
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {org.jetbrains.kotlin.metadata.Annotation.Argument} Argument
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Argument.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Creates an Argument message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof org.jetbrains.kotlin.metadata.Annotation.Argument
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {org.jetbrains.kotlin.metadata.Annotation.Argument} Argument
                         */
                        Argument.fromObject = function fromObject(object) {
                            if (object instanceof $root.org.jetbrains.kotlin.metadata.Annotation.Argument)
                                return object;
                            let message = new $root.org.jetbrains.kotlin.metadata.Annotation.Argument();
                            if (object.nameId != null)
                                message.nameId = object.nameId | 0;
                            if (object.value != null) {
                                if (typeof object.value !== "object")
                                    throw TypeError(".org.jetbrains.kotlin.metadata.Annotation.Argument.value: object expected");
                                message.value = $root.org.jetbrains.kotlin.metadata.Annotation.Argument.Value.fromObject(object.value);
                            }
                            return message;
                        };

                        /**
                         * Creates a plain object from an Argument message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof org.jetbrains.kotlin.metadata.Annotation.Argument
                         * @static
                         * @param {org.jetbrains.kotlin.metadata.Annotation.Argument} message Argument
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Argument.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            let object = {};
                            if (options.defaults) {
                                object.nameId = 0;
                                object.value = null;
                            }
                            if (message.nameId != null && message.hasOwnProperty("nameId"))
                                object.nameId = message.nameId;
                            if (message.value != null && message.hasOwnProperty("value"))
                                object.value = $root.org.jetbrains.kotlin.metadata.Annotation.Argument.Value.toObject(message.value, options);
                            return object;
                        };

                        /**
                         * Converts this Argument to JSON.
                         * @function toJSON
                         * @memberof org.jetbrains.kotlin.metadata.Annotation.Argument
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Argument.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for Argument
                         * @function getTypeUrl
                         * @memberof org.jetbrains.kotlin.metadata.Annotation.Argument
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        Argument.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/org.jetbrains.kotlin.metadata.Annotation.Argument";
                        };

                        Argument.Value = (function() {

                            /**
                             * Properties of a Value.
                             * @memberof org.jetbrains.kotlin.metadata.Annotation.Argument
                             * @interface IValue
                             * @property {org.jetbrains.kotlin.metadata.Annotation.Argument.Value.Type|null} [type] Value type
                             * @property {number|Long|null} [intValue] Value intValue
                             * @property {number|null} [floatValue] Value floatValue
                             * @property {number|null} [doubleValue] Value doubleValue
                             * @property {number|null} [stringValue] Value stringValue
                             * @property {number|null} [classId] Value classId
                             * @property {number|null} [enumValueId] Value enumValueId
                             * @property {org.jetbrains.kotlin.metadata.IAnnotation|null} [annotation] Value annotation
                             * @property {Array.<org.jetbrains.kotlin.metadata.Annotation.Argument.IValue>|null} [arrayElement] Value arrayElement
                             * @property {number|null} [arrayDimensionCount] Value arrayDimensionCount
                             * @property {number|null} [flags] Value flags
                             */

                            /**
                             * Constructs a new Value.
                             * @memberof org.jetbrains.kotlin.metadata.Annotation.Argument
                             * @classdesc Represents a Value.
                             * @implements IValue
                             * @constructor
                             * @param {org.jetbrains.kotlin.metadata.Annotation.Argument.IValue=} [properties] Properties to set
                             */
                            function Value(properties) {
                                this.arrayElement = [];
                                if (properties)
                                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }

                            /**
                             * Value type.
                             * @member {org.jetbrains.kotlin.metadata.Annotation.Argument.Value.Type} type
                             * @memberof org.jetbrains.kotlin.metadata.Annotation.Argument.Value
                             * @instance
                             */
                            Value.prototype.type = 0;

                            /**
                             * Value intValue.
                             * @member {number|Long} intValue
                             * @memberof org.jetbrains.kotlin.metadata.Annotation.Argument.Value
                             * @instance
                             */
                            Value.prototype.intValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                            /**
                             * Value floatValue.
                             * @member {number} floatValue
                             * @memberof org.jetbrains.kotlin.metadata.Annotation.Argument.Value
                             * @instance
                             */
                            Value.prototype.floatValue = 0;

                            /**
                             * Value doubleValue.
                             * @member {number} doubleValue
                             * @memberof org.jetbrains.kotlin.metadata.Annotation.Argument.Value
                             * @instance
                             */
                            Value.prototype.doubleValue = 0;

                            /**
                             * Value stringValue.
                             * @member {number} stringValue
                             * @memberof org.jetbrains.kotlin.metadata.Annotation.Argument.Value
                             * @instance
                             */
                            Value.prototype.stringValue = 0;

                            /**
                             * Value classId.
                             * @member {number} classId
                             * @memberof org.jetbrains.kotlin.metadata.Annotation.Argument.Value
                             * @instance
                             */
                            Value.prototype.classId = 0;

                            /**
                             * Value enumValueId.
                             * @member {number} enumValueId
                             * @memberof org.jetbrains.kotlin.metadata.Annotation.Argument.Value
                             * @instance
                             */
                            Value.prototype.enumValueId = 0;

                            /**
                             * Value annotation.
                             * @member {org.jetbrains.kotlin.metadata.IAnnotation|null|undefined} annotation
                             * @memberof org.jetbrains.kotlin.metadata.Annotation.Argument.Value
                             * @instance
                             */
                            Value.prototype.annotation = null;

                            /**
                             * Value arrayElement.
                             * @member {Array.<org.jetbrains.kotlin.metadata.Annotation.Argument.IValue>} arrayElement
                             * @memberof org.jetbrains.kotlin.metadata.Annotation.Argument.Value
                             * @instance
                             */
                            Value.prototype.arrayElement = $util.emptyArray;

                            /**
                             * Value arrayDimensionCount.
                             * @member {number} arrayDimensionCount
                             * @memberof org.jetbrains.kotlin.metadata.Annotation.Argument.Value
                             * @instance
                             */
                            Value.prototype.arrayDimensionCount = 0;

                            /**
                             * Value flags.
                             * @member {number} flags
                             * @memberof org.jetbrains.kotlin.metadata.Annotation.Argument.Value
                             * @instance
                             */
                            Value.prototype.flags = 0;

                            /**
                             * Decodes a Value message from the specified reader or buffer.
                             * @function decode
                             * @memberof org.jetbrains.kotlin.metadata.Annotation.Argument.Value
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @param {number} [length] Message length if known beforehand
                             * @returns {org.jetbrains.kotlin.metadata.Annotation.Argument.Value} Value
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            Value.decode = function decode(reader, length, error) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.org.jetbrains.kotlin.metadata.Annotation.Argument.Value();
                                while (reader.pos < end) {
                                    let tag = reader.uint32();
                                    if (tag === error)
                                        break;
                                    switch (tag >>> 3) {
                                    case 1: {
                                            message.type = reader.int32();
                                            break;
                                        }
                                    case 2: {
                                            message.intValue = reader.sint64();
                                            break;
                                        }
                                    case 3: {
                                            message.floatValue = reader.float();
                                            break;
                                        }
                                    case 4: {
                                            message.doubleValue = reader.double();
                                            break;
                                        }
                                    case 5: {
                                            message.stringValue = reader.int32();
                                            break;
                                        }
                                    case 6: {
                                            message.classId = reader.int32();
                                            break;
                                        }
                                    case 7: {
                                            message.enumValueId = reader.int32();
                                            break;
                                        }
                                    case 8: {
                                            message.annotation = $root.org.jetbrains.kotlin.metadata.Annotation.decode(reader, reader.uint32());
                                            break;
                                        }
                                    case 9: {
                                            if (!(message.arrayElement && message.arrayElement.length))
                                                message.arrayElement = [];
                                            message.arrayElement.push($root.org.jetbrains.kotlin.metadata.Annotation.Argument.Value.decode(reader, reader.uint32()));
                                            break;
                                        }
                                    case 11: {
                                            message.arrayDimensionCount = reader.int32();
                                            break;
                                        }
                                    case 10: {
                                            message.flags = reader.int32();
                                            break;
                                        }
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };

                            /**
                             * Decodes a Value message from the specified reader or buffer, length delimited.
                             * @function decodeDelimited
                             * @memberof org.jetbrains.kotlin.metadata.Annotation.Argument.Value
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @returns {org.jetbrains.kotlin.metadata.Annotation.Argument.Value} Value
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            Value.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };

                            /**
                             * Creates a Value message from a plain object. Also converts values to their respective internal types.
                             * @function fromObject
                             * @memberof org.jetbrains.kotlin.metadata.Annotation.Argument.Value
                             * @static
                             * @param {Object.<string,*>} object Plain object
                             * @returns {org.jetbrains.kotlin.metadata.Annotation.Argument.Value} Value
                             */
                            Value.fromObject = function fromObject(object) {
                                if (object instanceof $root.org.jetbrains.kotlin.metadata.Annotation.Argument.Value)
                                    return object;
                                let message = new $root.org.jetbrains.kotlin.metadata.Annotation.Argument.Value();
                                switch (object.type) {
                                default:
                                    if (typeof object.type === "number") {
                                        message.type = object.type;
                                        break;
                                    }
                                    break;
                                case "BYTE":
                                case 0:
                                    message.type = 0;
                                    break;
                                case "CHAR":
                                case 1:
                                    message.type = 1;
                                    break;
                                case "SHORT":
                                case 2:
                                    message.type = 2;
                                    break;
                                case "INT":
                                case 3:
                                    message.type = 3;
                                    break;
                                case "LONG":
                                case 4:
                                    message.type = 4;
                                    break;
                                case "FLOAT":
                                case 5:
                                    message.type = 5;
                                    break;
                                case "DOUBLE":
                                case 6:
                                    message.type = 6;
                                    break;
                                case "BOOLEAN":
                                case 7:
                                    message.type = 7;
                                    break;
                                case "STRING":
                                case 8:
                                    message.type = 8;
                                    break;
                                case "CLASS":
                                case 9:
                                    message.type = 9;
                                    break;
                                case "ENUM":
                                case 10:
                                    message.type = 10;
                                    break;
                                case "ANNOTATION":
                                case 11:
                                    message.type = 11;
                                    break;
                                case "ARRAY":
                                case 12:
                                    message.type = 12;
                                    break;
                                }
                                if (object.intValue != null)
                                    if ($util.Long)
                                        (message.intValue = $util.Long.fromValue(object.intValue)).unsigned = false;
                                    else if (typeof object.intValue === "string")
                                        message.intValue = parseInt(object.intValue, 10);
                                    else if (typeof object.intValue === "number")
                                        message.intValue = object.intValue;
                                    else if (typeof object.intValue === "object")
                                        message.intValue = new $util.LongBits(object.intValue.low >>> 0, object.intValue.high >>> 0).toNumber();
                                if (object.floatValue != null)
                                    message.floatValue = Number(object.floatValue);
                                if (object.doubleValue != null)
                                    message.doubleValue = Number(object.doubleValue);
                                if (object.stringValue != null)
                                    message.stringValue = object.stringValue | 0;
                                if (object.classId != null)
                                    message.classId = object.classId | 0;
                                if (object.enumValueId != null)
                                    message.enumValueId = object.enumValueId | 0;
                                if (object.annotation != null) {
                                    if (typeof object.annotation !== "object")
                                        throw TypeError(".org.jetbrains.kotlin.metadata.Annotation.Argument.Value.annotation: object expected");
                                    message.annotation = $root.org.jetbrains.kotlin.metadata.Annotation.fromObject(object.annotation);
                                }
                                if (object.arrayElement) {
                                    if (!Array.isArray(object.arrayElement))
                                        throw TypeError(".org.jetbrains.kotlin.metadata.Annotation.Argument.Value.arrayElement: array expected");
                                    message.arrayElement = [];
                                    for (let i = 0; i < object.arrayElement.length; ++i) {
                                        if (typeof object.arrayElement[i] !== "object")
                                            throw TypeError(".org.jetbrains.kotlin.metadata.Annotation.Argument.Value.arrayElement: object expected");
                                        message.arrayElement[i] = $root.org.jetbrains.kotlin.metadata.Annotation.Argument.Value.fromObject(object.arrayElement[i]);
                                    }
                                }
                                if (object.arrayDimensionCount != null)
                                    message.arrayDimensionCount = object.arrayDimensionCount | 0;
                                if (object.flags != null)
                                    message.flags = object.flags | 0;
                                return message;
                            };

                            /**
                             * Creates a plain object from a Value message. Also converts values to other types if specified.
                             * @function toObject
                             * @memberof org.jetbrains.kotlin.metadata.Annotation.Argument.Value
                             * @static
                             * @param {org.jetbrains.kotlin.metadata.Annotation.Argument.Value} message Value
                             * @param {$protobuf.IConversionOptions} [options] Conversion options
                             * @returns {Object.<string,*>} Plain object
                             */
                            Value.toObject = function toObject(message, options) {
                                if (!options)
                                    options = {};
                                let object = {};
                                if (options.arrays || options.defaults)
                                    object.arrayElement = [];
                                if (options.defaults) {
                                    object.type = options.enums === String ? "BYTE" : 0;
                                    if ($util.Long) {
                                        let long = new $util.Long(0, 0, false);
                                        object.intValue = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                                    } else
                                        object.intValue = options.longs === String ? "0" : 0;
                                    object.floatValue = 0;
                                    object.doubleValue = 0;
                                    object.stringValue = 0;
                                    object.classId = 0;
                                    object.enumValueId = 0;
                                    object.annotation = null;
                                    object.flags = 0;
                                    object.arrayDimensionCount = 0;
                                }
                                if (message.type != null && message.hasOwnProperty("type"))
                                    object.type = options.enums === String ? $root.org.jetbrains.kotlin.metadata.Annotation.Argument.Value.Type[message.type] === undefined ? message.type : $root.org.jetbrains.kotlin.metadata.Annotation.Argument.Value.Type[message.type] : message.type;
                                if (message.intValue != null && message.hasOwnProperty("intValue"))
                                    if (typeof message.intValue === "number")
                                        object.intValue = options.longs === String ? String(message.intValue) : message.intValue;
                                    else
                                        object.intValue = options.longs === String ? $util.Long.prototype.toString.call(message.intValue) : options.longs === Number ? new $util.LongBits(message.intValue.low >>> 0, message.intValue.high >>> 0).toNumber() : message.intValue;
                                if (message.floatValue != null && message.hasOwnProperty("floatValue"))
                                    object.floatValue = options.json && !isFinite(message.floatValue) ? String(message.floatValue) : message.floatValue;
                                if (message.doubleValue != null && message.hasOwnProperty("doubleValue"))
                                    object.doubleValue = options.json && !isFinite(message.doubleValue) ? String(message.doubleValue) : message.doubleValue;
                                if (message.stringValue != null && message.hasOwnProperty("stringValue"))
                                    object.stringValue = message.stringValue;
                                if (message.classId != null && message.hasOwnProperty("classId"))
                                    object.classId = message.classId;
                                if (message.enumValueId != null && message.hasOwnProperty("enumValueId"))
                                    object.enumValueId = message.enumValueId;
                                if (message.annotation != null && message.hasOwnProperty("annotation"))
                                    object.annotation = $root.org.jetbrains.kotlin.metadata.Annotation.toObject(message.annotation, options);
                                if (message.arrayElement && message.arrayElement.length) {
                                    object.arrayElement = [];
                                    for (let j = 0; j < message.arrayElement.length; ++j)
                                        object.arrayElement[j] = $root.org.jetbrains.kotlin.metadata.Annotation.Argument.Value.toObject(message.arrayElement[j], options);
                                }
                                if (message.flags != null && message.hasOwnProperty("flags"))
                                    object.flags = message.flags;
                                if (message.arrayDimensionCount != null && message.hasOwnProperty("arrayDimensionCount"))
                                    object.arrayDimensionCount = message.arrayDimensionCount;
                                return object;
                            };

                            /**
                             * Converts this Value to JSON.
                             * @function toJSON
                             * @memberof org.jetbrains.kotlin.metadata.Annotation.Argument.Value
                             * @instance
                             * @returns {Object.<string,*>} JSON object
                             */
                            Value.prototype.toJSON = function toJSON() {
                                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                            };

                            /**
                             * Gets the default type url for Value
                             * @function getTypeUrl
                             * @memberof org.jetbrains.kotlin.metadata.Annotation.Argument.Value
                             * @static
                             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns {string} The default type url
                             */
                            Value.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                                if (typeUrlPrefix === undefined) {
                                    typeUrlPrefix = "type.googleapis.com";
                                }
                                return typeUrlPrefix + "/org.jetbrains.kotlin.metadata.Annotation.Argument.Value";
                            };

                            /**
                             * Type enum.
                             * @name org.jetbrains.kotlin.metadata.Annotation.Argument.Value.Type
                             * @enum {number}
                             * @property {number} BYTE=0 BYTE value
                             * @property {number} CHAR=1 CHAR value
                             * @property {number} SHORT=2 SHORT value
                             * @property {number} INT=3 INT value
                             * @property {number} LONG=4 LONG value
                             * @property {number} FLOAT=5 FLOAT value
                             * @property {number} DOUBLE=6 DOUBLE value
                             * @property {number} BOOLEAN=7 BOOLEAN value
                             * @property {number} STRING=8 STRING value
                             * @property {number} CLASS=9 CLASS value
                             * @property {number} ENUM=10 ENUM value
                             * @property {number} ANNOTATION=11 ANNOTATION value
                             * @property {number} ARRAY=12 ARRAY value
                             */
                            Value.Type = (function() {
                                const valuesById = {}, values = Object.create(valuesById);
                                values[valuesById[0] = "BYTE"] = 0;
                                values[valuesById[1] = "CHAR"] = 1;
                                values[valuesById[2] = "SHORT"] = 2;
                                values[valuesById[3] = "INT"] = 3;
                                values[valuesById[4] = "LONG"] = 4;
                                values[valuesById[5] = "FLOAT"] = 5;
                                values[valuesById[6] = "DOUBLE"] = 6;
                                values[valuesById[7] = "BOOLEAN"] = 7;
                                values[valuesById[8] = "STRING"] = 8;
                                values[valuesById[9] = "CLASS"] = 9;
                                values[valuesById[10] = "ENUM"] = 10;
                                values[valuesById[11] = "ANNOTATION"] = 11;
                                values[valuesById[12] = "ARRAY"] = 12;
                                return values;
                            })();

                            return Value;
                        })();

                        return Argument;
                    })();

                    return Annotation;
                })();

                metadata.Type = (function() {

                    /**
                     * Properties of a Type.
                     * @memberof org.jetbrains.kotlin.metadata
                     * @interface IType
                     * @property {Array.<org.jetbrains.kotlin.metadata.Type.IArgument>|null} [argument] Type argument
                     * @property {boolean|null} [nullable] Type nullable
                     * @property {number|null} [flexibleTypeCapabilitiesId] Type flexibleTypeCapabilitiesId
                     * @property {org.jetbrains.kotlin.metadata.IType|null} [flexibleUpperBound] Type flexibleUpperBound
                     * @property {number|null} [flexibleUpperBoundId] Type flexibleUpperBoundId
                     * @property {number|null} [className] Type className
                     * @property {number|null} [typeParameter] Type typeParameter
                     * @property {number|null} [typeParameterName] Type typeParameterName
                     * @property {number|null} [typeAliasName] Type typeAliasName
                     * @property {org.jetbrains.kotlin.metadata.IType|null} [outerType] Type outerType
                     * @property {number|null} [outerTypeId] Type outerTypeId
                     * @property {org.jetbrains.kotlin.metadata.IType|null} [abbreviatedType] Type abbreviatedType
                     * @property {number|null} [abbreviatedTypeId] Type abbreviatedTypeId
                     * @property {number|null} [flags] Type flags
                     * @property {Array.<org.jetbrains.kotlin.metadata.IAnnotation>|null} [annotation] Type annotation
                     */

                    /**
                     * Constructs a new Type.
                     * @memberof org.jetbrains.kotlin.metadata
                     * @classdesc Represents a Type.
                     * @implements IType
                     * @constructor
                     * @param {org.jetbrains.kotlin.metadata.IType=} [properties] Properties to set
                     */
                    function Type(properties) {
                        this.argument = [];
                        this.annotation = [];
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Type argument.
                     * @member {Array.<org.jetbrains.kotlin.metadata.Type.IArgument>} argument
                     * @memberof org.jetbrains.kotlin.metadata.Type
                     * @instance
                     */
                    Type.prototype.argument = $util.emptyArray;

                    /**
                     * Type nullable.
                     * @member {boolean} nullable
                     * @memberof org.jetbrains.kotlin.metadata.Type
                     * @instance
                     */
                    Type.prototype.nullable = false;

                    /**
                     * Type flexibleTypeCapabilitiesId.
                     * @member {number} flexibleTypeCapabilitiesId
                     * @memberof org.jetbrains.kotlin.metadata.Type
                     * @instance
                     */
                    Type.prototype.flexibleTypeCapabilitiesId = 0;

                    /**
                     * Type flexibleUpperBound.
                     * @member {org.jetbrains.kotlin.metadata.IType|null|undefined} flexibleUpperBound
                     * @memberof org.jetbrains.kotlin.metadata.Type
                     * @instance
                     */
                    Type.prototype.flexibleUpperBound = null;

                    /**
                     * Type flexibleUpperBoundId.
                     * @member {number} flexibleUpperBoundId
                     * @memberof org.jetbrains.kotlin.metadata.Type
                     * @instance
                     */
                    Type.prototype.flexibleUpperBoundId = 0;

                    /**
                     * Type className.
                     * @member {number} className
                     * @memberof org.jetbrains.kotlin.metadata.Type
                     * @instance
                     */
                    Type.prototype.className = 0;

                    /**
                     * Type typeParameter.
                     * @member {number} typeParameter
                     * @memberof org.jetbrains.kotlin.metadata.Type
                     * @instance
                     */
                    Type.prototype.typeParameter = 0;

                    /**
                     * Type typeParameterName.
                     * @member {number} typeParameterName
                     * @memberof org.jetbrains.kotlin.metadata.Type
                     * @instance
                     */
                    Type.prototype.typeParameterName = 0;

                    /**
                     * Type typeAliasName.
                     * @member {number} typeAliasName
                     * @memberof org.jetbrains.kotlin.metadata.Type
                     * @instance
                     */
                    Type.prototype.typeAliasName = 0;

                    /**
                     * Type outerType.
                     * @member {org.jetbrains.kotlin.metadata.IType|null|undefined} outerType
                     * @memberof org.jetbrains.kotlin.metadata.Type
                     * @instance
                     */
                    Type.prototype.outerType = null;

                    /**
                     * Type outerTypeId.
                     * @member {number} outerTypeId
                     * @memberof org.jetbrains.kotlin.metadata.Type
                     * @instance
                     */
                    Type.prototype.outerTypeId = 0;

                    /**
                     * Type abbreviatedType.
                     * @member {org.jetbrains.kotlin.metadata.IType|null|undefined} abbreviatedType
                     * @memberof org.jetbrains.kotlin.metadata.Type
                     * @instance
                     */
                    Type.prototype.abbreviatedType = null;

                    /**
                     * Type abbreviatedTypeId.
                     * @member {number} abbreviatedTypeId
                     * @memberof org.jetbrains.kotlin.metadata.Type
                     * @instance
                     */
                    Type.prototype.abbreviatedTypeId = 0;

                    /**
                     * Type flags.
                     * @member {number} flags
                     * @memberof org.jetbrains.kotlin.metadata.Type
                     * @instance
                     */
                    Type.prototype.flags = 0;

                    /**
                     * Type annotation.
                     * @member {Array.<org.jetbrains.kotlin.metadata.IAnnotation>} annotation
                     * @memberof org.jetbrains.kotlin.metadata.Type
                     * @instance
                     */
                    Type.prototype.annotation = $util.emptyArray;

                    /**
                     * Decodes a Type message from the specified reader or buffer.
                     * @function decode
                     * @memberof org.jetbrains.kotlin.metadata.Type
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {org.jetbrains.kotlin.metadata.Type} Type
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Type.decode = function decode(reader, length, error) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.org.jetbrains.kotlin.metadata.Type();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            case 2: {
                                    if (!(message.argument && message.argument.length))
                                        message.argument = [];
                                    message.argument.push($root.org.jetbrains.kotlin.metadata.Type.Argument.decode(reader, reader.uint32()));
                                    break;
                                }
                            case 3: {
                                    message.nullable = reader.bool();
                                    break;
                                }
                            case 4: {
                                    message.flexibleTypeCapabilitiesId = reader.int32();
                                    break;
                                }
                            case 5: {
                                    message.flexibleUpperBound = $root.org.jetbrains.kotlin.metadata.Type.decode(reader, reader.uint32());
                                    break;
                                }
                            case 8: {
                                    message.flexibleUpperBoundId = reader.int32();
                                    break;
                                }
                            case 6: {
                                    message.className = reader.int32();
                                    break;
                                }
                            case 7: {
                                    message.typeParameter = reader.int32();
                                    break;
                                }
                            case 9: {
                                    message.typeParameterName = reader.int32();
                                    break;
                                }
                            case 12: {
                                    message.typeAliasName = reader.int32();
                                    break;
                                }
                            case 10: {
                                    message.outerType = $root.org.jetbrains.kotlin.metadata.Type.decode(reader, reader.uint32());
                                    break;
                                }
                            case 11: {
                                    message.outerTypeId = reader.int32();
                                    break;
                                }
                            case 13: {
                                    message.abbreviatedType = $root.org.jetbrains.kotlin.metadata.Type.decode(reader, reader.uint32());
                                    break;
                                }
                            case 14: {
                                    message.abbreviatedTypeId = reader.int32();
                                    break;
                                }
                            case 1: {
                                    message.flags = reader.int32();
                                    break;
                                }
                            case 100: {
                                    if (!(message.annotation && message.annotation.length))
                                        message.annotation = [];
                                    message.annotation.push($root.org.jetbrains.kotlin.metadata.Annotation.decode(reader, reader.uint32()));
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Type message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof org.jetbrains.kotlin.metadata.Type
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {org.jetbrains.kotlin.metadata.Type} Type
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Type.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Creates a Type message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof org.jetbrains.kotlin.metadata.Type
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {org.jetbrains.kotlin.metadata.Type} Type
                     */
                    Type.fromObject = function fromObject(object) {
                        if (object instanceof $root.org.jetbrains.kotlin.metadata.Type)
                            return object;
                        let message = new $root.org.jetbrains.kotlin.metadata.Type();
                        if (object.argument) {
                            if (!Array.isArray(object.argument))
                                throw TypeError(".org.jetbrains.kotlin.metadata.Type.argument: array expected");
                            message.argument = [];
                            for (let i = 0; i < object.argument.length; ++i) {
                                if (typeof object.argument[i] !== "object")
                                    throw TypeError(".org.jetbrains.kotlin.metadata.Type.argument: object expected");
                                message.argument[i] = $root.org.jetbrains.kotlin.metadata.Type.Argument.fromObject(object.argument[i]);
                            }
                        }
                        if (object.nullable != null)
                            message.nullable = Boolean(object.nullable);
                        if (object.flexibleTypeCapabilitiesId != null)
                            message.flexibleTypeCapabilitiesId = object.flexibleTypeCapabilitiesId | 0;
                        if (object.flexibleUpperBound != null) {
                            if (typeof object.flexibleUpperBound !== "object")
                                throw TypeError(".org.jetbrains.kotlin.metadata.Type.flexibleUpperBound: object expected");
                            message.flexibleUpperBound = $root.org.jetbrains.kotlin.metadata.Type.fromObject(object.flexibleUpperBound);
                        }
                        if (object.flexibleUpperBoundId != null)
                            message.flexibleUpperBoundId = object.flexibleUpperBoundId | 0;
                        if (object.className != null)
                            message.className = object.className | 0;
                        if (object.typeParameter != null)
                            message.typeParameter = object.typeParameter | 0;
                        if (object.typeParameterName != null)
                            message.typeParameterName = object.typeParameterName | 0;
                        if (object.typeAliasName != null)
                            message.typeAliasName = object.typeAliasName | 0;
                        if (object.outerType != null) {
                            if (typeof object.outerType !== "object")
                                throw TypeError(".org.jetbrains.kotlin.metadata.Type.outerType: object expected");
                            message.outerType = $root.org.jetbrains.kotlin.metadata.Type.fromObject(object.outerType);
                        }
                        if (object.outerTypeId != null)
                            message.outerTypeId = object.outerTypeId | 0;
                        if (object.abbreviatedType != null) {
                            if (typeof object.abbreviatedType !== "object")
                                throw TypeError(".org.jetbrains.kotlin.metadata.Type.abbreviatedType: object expected");
                            message.abbreviatedType = $root.org.jetbrains.kotlin.metadata.Type.fromObject(object.abbreviatedType);
                        }
                        if (object.abbreviatedTypeId != null)
                            message.abbreviatedTypeId = object.abbreviatedTypeId | 0;
                        if (object.flags != null)
                            message.flags = object.flags | 0;
                        if (object.annotation) {
                            if (!Array.isArray(object.annotation))
                                throw TypeError(".org.jetbrains.kotlin.metadata.Type.annotation: array expected");
                            message.annotation = [];
                            for (let i = 0; i < object.annotation.length; ++i) {
                                if (typeof object.annotation[i] !== "object")
                                    throw TypeError(".org.jetbrains.kotlin.metadata.Type.annotation: object expected");
                                message.annotation[i] = $root.org.jetbrains.kotlin.metadata.Annotation.fromObject(object.annotation[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a Type message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof org.jetbrains.kotlin.metadata.Type
                     * @static
                     * @param {org.jetbrains.kotlin.metadata.Type} message Type
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Type.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.arrays || options.defaults) {
                            object.argument = [];
                            object.annotation = [];
                        }
                        if (options.defaults) {
                            object.flags = 0;
                            object.nullable = false;
                            object.flexibleTypeCapabilitiesId = 0;
                            object.flexibleUpperBound = null;
                            object.className = 0;
                            object.typeParameter = 0;
                            object.flexibleUpperBoundId = 0;
                            object.typeParameterName = 0;
                            object.outerType = null;
                            object.outerTypeId = 0;
                            object.typeAliasName = 0;
                            object.abbreviatedType = null;
                            object.abbreviatedTypeId = 0;
                        }
                        if (message.flags != null && message.hasOwnProperty("flags"))
                            object.flags = message.flags;
                        if (message.argument && message.argument.length) {
                            object.argument = [];
                            for (let j = 0; j < message.argument.length; ++j)
                                object.argument[j] = $root.org.jetbrains.kotlin.metadata.Type.Argument.toObject(message.argument[j], options);
                        }
                        if (message.nullable != null && message.hasOwnProperty("nullable"))
                            object.nullable = message.nullable;
                        if (message.flexibleTypeCapabilitiesId != null && message.hasOwnProperty("flexibleTypeCapabilitiesId"))
                            object.flexibleTypeCapabilitiesId = message.flexibleTypeCapabilitiesId;
                        if (message.flexibleUpperBound != null && message.hasOwnProperty("flexibleUpperBound"))
                            object.flexibleUpperBound = $root.org.jetbrains.kotlin.metadata.Type.toObject(message.flexibleUpperBound, options);
                        if (message.className != null && message.hasOwnProperty("className"))
                            object.className = message.className;
                        if (message.typeParameter != null && message.hasOwnProperty("typeParameter"))
                            object.typeParameter = message.typeParameter;
                        if (message.flexibleUpperBoundId != null && message.hasOwnProperty("flexibleUpperBoundId"))
                            object.flexibleUpperBoundId = message.flexibleUpperBoundId;
                        if (message.typeParameterName != null && message.hasOwnProperty("typeParameterName"))
                            object.typeParameterName = message.typeParameterName;
                        if (message.outerType != null && message.hasOwnProperty("outerType"))
                            object.outerType = $root.org.jetbrains.kotlin.metadata.Type.toObject(message.outerType, options);
                        if (message.outerTypeId != null && message.hasOwnProperty("outerTypeId"))
                            object.outerTypeId = message.outerTypeId;
                        if (message.typeAliasName != null && message.hasOwnProperty("typeAliasName"))
                            object.typeAliasName = message.typeAliasName;
                        if (message.abbreviatedType != null && message.hasOwnProperty("abbreviatedType"))
                            object.abbreviatedType = $root.org.jetbrains.kotlin.metadata.Type.toObject(message.abbreviatedType, options);
                        if (message.abbreviatedTypeId != null && message.hasOwnProperty("abbreviatedTypeId"))
                            object.abbreviatedTypeId = message.abbreviatedTypeId;
                        if (message.annotation && message.annotation.length) {
                            object.annotation = [];
                            for (let j = 0; j < message.annotation.length; ++j)
                                object.annotation[j] = $root.org.jetbrains.kotlin.metadata.Annotation.toObject(message.annotation[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this Type to JSON.
                     * @function toJSON
                     * @memberof org.jetbrains.kotlin.metadata.Type
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Type.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for Type
                     * @function getTypeUrl
                     * @memberof org.jetbrains.kotlin.metadata.Type
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Type.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/org.jetbrains.kotlin.metadata.Type";
                    };

                    Type.Argument = (function() {

                        /**
                         * Properties of an Argument.
                         * @memberof org.jetbrains.kotlin.metadata.Type
                         * @interface IArgument
                         * @property {org.jetbrains.kotlin.metadata.Type.Argument.Projection|null} [projection] Argument projection
                         * @property {org.jetbrains.kotlin.metadata.IType|null} [type] Argument type
                         * @property {number|null} [typeId] Argument typeId
                         */

                        /**
                         * Constructs a new Argument.
                         * @memberof org.jetbrains.kotlin.metadata.Type
                         * @classdesc Represents an Argument.
                         * @implements IArgument
                         * @constructor
                         * @param {org.jetbrains.kotlin.metadata.Type.IArgument=} [properties] Properties to set
                         */
                        function Argument(properties) {
                            if (properties)
                                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Argument projection.
                         * @member {org.jetbrains.kotlin.metadata.Type.Argument.Projection} projection
                         * @memberof org.jetbrains.kotlin.metadata.Type.Argument
                         * @instance
                         */
                        Argument.prototype.projection = 2;

                        /**
                         * Argument type.
                         * @member {org.jetbrains.kotlin.metadata.IType|null|undefined} type
                         * @memberof org.jetbrains.kotlin.metadata.Type.Argument
                         * @instance
                         */
                        Argument.prototype.type = null;

                        /**
                         * Argument typeId.
                         * @member {number} typeId
                         * @memberof org.jetbrains.kotlin.metadata.Type.Argument
                         * @instance
                         */
                        Argument.prototype.typeId = 0;

                        /**
                         * Decodes an Argument message from the specified reader or buffer.
                         * @function decode
                         * @memberof org.jetbrains.kotlin.metadata.Type.Argument
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {org.jetbrains.kotlin.metadata.Type.Argument} Argument
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Argument.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.org.jetbrains.kotlin.metadata.Type.Argument();
                            while (reader.pos < end) {
                                let tag = reader.uint32();
                                if (tag === error)
                                    break;
                                switch (tag >>> 3) {
                                case 1: {
                                        message.projection = reader.int32();
                                        break;
                                    }
                                case 2: {
                                        message.type = $root.org.jetbrains.kotlin.metadata.Type.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 3: {
                                        message.typeId = reader.int32();
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes an Argument message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof org.jetbrains.kotlin.metadata.Type.Argument
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {org.jetbrains.kotlin.metadata.Type.Argument} Argument
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Argument.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Creates an Argument message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof org.jetbrains.kotlin.metadata.Type.Argument
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {org.jetbrains.kotlin.metadata.Type.Argument} Argument
                         */
                        Argument.fromObject = function fromObject(object) {
                            if (object instanceof $root.org.jetbrains.kotlin.metadata.Type.Argument)
                                return object;
                            let message = new $root.org.jetbrains.kotlin.metadata.Type.Argument();
                            switch (object.projection) {
                            case "IN":
                            case 0:
                                message.projection = 0;
                                break;
                            case "OUT":
                            case 1:
                                message.projection = 1;
                                break;
                            default:
                                if (typeof object.projection === "number") {
                                    message.projection = object.projection;
                                    break;
                                }
                                break;
                            case "INV":
                            case 2:
                                message.projection = 2;
                                break;
                            case "STAR":
                            case 3:
                                message.projection = 3;
                                break;
                            }
                            if (object.type != null) {
                                if (typeof object.type !== "object")
                                    throw TypeError(".org.jetbrains.kotlin.metadata.Type.Argument.type: object expected");
                                message.type = $root.org.jetbrains.kotlin.metadata.Type.fromObject(object.type);
                            }
                            if (object.typeId != null)
                                message.typeId = object.typeId | 0;
                            return message;
                        };

                        /**
                         * Creates a plain object from an Argument message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof org.jetbrains.kotlin.metadata.Type.Argument
                         * @static
                         * @param {org.jetbrains.kotlin.metadata.Type.Argument} message Argument
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Argument.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            let object = {};
                            if (options.defaults) {
                                object.projection = options.enums === String ? "INV" : 2;
                                object.type = null;
                                object.typeId = 0;
                            }
                            if (message.projection != null && message.hasOwnProperty("projection"))
                                object.projection = options.enums === String ? $root.org.jetbrains.kotlin.metadata.Type.Argument.Projection[message.projection] === undefined ? message.projection : $root.org.jetbrains.kotlin.metadata.Type.Argument.Projection[message.projection] : message.projection;
                            if (message.type != null && message.hasOwnProperty("type"))
                                object.type = $root.org.jetbrains.kotlin.metadata.Type.toObject(message.type, options);
                            if (message.typeId != null && message.hasOwnProperty("typeId"))
                                object.typeId = message.typeId;
                            return object;
                        };

                        /**
                         * Converts this Argument to JSON.
                         * @function toJSON
                         * @memberof org.jetbrains.kotlin.metadata.Type.Argument
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Argument.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        /**
                         * Gets the default type url for Argument
                         * @function getTypeUrl
                         * @memberof org.jetbrains.kotlin.metadata.Type.Argument
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        Argument.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/org.jetbrains.kotlin.metadata.Type.Argument";
                        };

                        /**
                         * Projection enum.
                         * @name org.jetbrains.kotlin.metadata.Type.Argument.Projection
                         * @enum {number}
                         * @property {number} IN=0 IN value
                         * @property {number} OUT=1 OUT value
                         * @property {number} INV=2 INV value
                         * @property {number} STAR=3 STAR value
                         */
                        Argument.Projection = (function() {
                            const valuesById = {}, values = Object.create(valuesById);
                            values[valuesById[0] = "IN"] = 0;
                            values[valuesById[1] = "OUT"] = 1;
                            values[valuesById[2] = "INV"] = 2;
                            values[valuesById[3] = "STAR"] = 3;
                            return values;
                        })();

                        return Argument;
                    })();

                    return Type;
                })();

                metadata.TypeParameter = (function() {

                    /**
                     * Properties of a TypeParameter.
                     * @memberof org.jetbrains.kotlin.metadata
                     * @interface ITypeParameter
                     * @property {number} id TypeParameter id
                     * @property {number} name TypeParameter name
                     * @property {boolean|null} [reified] TypeParameter reified
                     * @property {org.jetbrains.kotlin.metadata.TypeParameter.Variance|null} [variance] TypeParameter variance
                     * @property {Array.<org.jetbrains.kotlin.metadata.IType>|null} [upperBound] TypeParameter upperBound
                     * @property {Array.<number>|null} [upperBoundId] TypeParameter upperBoundId
                     * @property {Array.<org.jetbrains.kotlin.metadata.IAnnotation>|null} [annotation] TypeParameter annotation
                     */

                    /**
                     * Constructs a new TypeParameter.
                     * @memberof org.jetbrains.kotlin.metadata
                     * @classdesc Represents a TypeParameter.
                     * @implements ITypeParameter
                     * @constructor
                     * @param {org.jetbrains.kotlin.metadata.ITypeParameter=} [properties] Properties to set
                     */
                    function TypeParameter(properties) {
                        this.upperBound = [];
                        this.upperBoundId = [];
                        this.annotation = [];
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * TypeParameter id.
                     * @member {number} id
                     * @memberof org.jetbrains.kotlin.metadata.TypeParameter
                     * @instance
                     */
                    TypeParameter.prototype.id = 0;

                    /**
                     * TypeParameter name.
                     * @member {number} name
                     * @memberof org.jetbrains.kotlin.metadata.TypeParameter
                     * @instance
                     */
                    TypeParameter.prototype.name = 0;

                    /**
                     * TypeParameter reified.
                     * @member {boolean} reified
                     * @memberof org.jetbrains.kotlin.metadata.TypeParameter
                     * @instance
                     */
                    TypeParameter.prototype.reified = false;

                    /**
                     * TypeParameter variance.
                     * @member {org.jetbrains.kotlin.metadata.TypeParameter.Variance} variance
                     * @memberof org.jetbrains.kotlin.metadata.TypeParameter
                     * @instance
                     */
                    TypeParameter.prototype.variance = 2;

                    /**
                     * TypeParameter upperBound.
                     * @member {Array.<org.jetbrains.kotlin.metadata.IType>} upperBound
                     * @memberof org.jetbrains.kotlin.metadata.TypeParameter
                     * @instance
                     */
                    TypeParameter.prototype.upperBound = $util.emptyArray;

                    /**
                     * TypeParameter upperBoundId.
                     * @member {Array.<number>} upperBoundId
                     * @memberof org.jetbrains.kotlin.metadata.TypeParameter
                     * @instance
                     */
                    TypeParameter.prototype.upperBoundId = $util.emptyArray;

                    /**
                     * TypeParameter annotation.
                     * @member {Array.<org.jetbrains.kotlin.metadata.IAnnotation>} annotation
                     * @memberof org.jetbrains.kotlin.metadata.TypeParameter
                     * @instance
                     */
                    TypeParameter.prototype.annotation = $util.emptyArray;

                    /**
                     * Decodes a TypeParameter message from the specified reader or buffer.
                     * @function decode
                     * @memberof org.jetbrains.kotlin.metadata.TypeParameter
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {org.jetbrains.kotlin.metadata.TypeParameter} TypeParameter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TypeParameter.decode = function decode(reader, length, error) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.org.jetbrains.kotlin.metadata.TypeParameter();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            case 1: {
                                    message.id = reader.int32();
                                    break;
                                }
                            case 2: {
                                    message.name = reader.int32();
                                    break;
                                }
                            case 3: {
                                    message.reified = reader.bool();
                                    break;
                                }
                            case 4: {
                                    message.variance = reader.int32();
                                    break;
                                }
                            case 5: {
                                    if (!(message.upperBound && message.upperBound.length))
                                        message.upperBound = [];
                                    message.upperBound.push($root.org.jetbrains.kotlin.metadata.Type.decode(reader, reader.uint32()));
                                    break;
                                }
                            case 6: {
                                    if (!(message.upperBoundId && message.upperBoundId.length))
                                        message.upperBoundId = [];
                                    if ((tag & 7) === 2) {
                                        let end2 = reader.uint32() + reader.pos;
                                        while (reader.pos < end2)
                                            message.upperBoundId.push(reader.int32());
                                    } else
                                        message.upperBoundId.push(reader.int32());
                                    break;
                                }
                            case 100: {
                                    if (!(message.annotation && message.annotation.length))
                                        message.annotation = [];
                                    message.annotation.push($root.org.jetbrains.kotlin.metadata.Annotation.decode(reader, reader.uint32()));
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        if (!message.hasOwnProperty("id"))
                            throw $util.ProtocolError("missing required 'id'", { instance: message });
                        if (!message.hasOwnProperty("name"))
                            throw $util.ProtocolError("missing required 'name'", { instance: message });
                        return message;
                    };

                    /**
                     * Decodes a TypeParameter message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof org.jetbrains.kotlin.metadata.TypeParameter
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {org.jetbrains.kotlin.metadata.TypeParameter} TypeParameter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TypeParameter.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Creates a TypeParameter message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof org.jetbrains.kotlin.metadata.TypeParameter
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {org.jetbrains.kotlin.metadata.TypeParameter} TypeParameter
                     */
                    TypeParameter.fromObject = function fromObject(object) {
                        if (object instanceof $root.org.jetbrains.kotlin.metadata.TypeParameter)
                            return object;
                        let message = new $root.org.jetbrains.kotlin.metadata.TypeParameter();
                        if (object.id != null)
                            message.id = object.id | 0;
                        if (object.name != null)
                            message.name = object.name | 0;
                        if (object.reified != null)
                            message.reified = Boolean(object.reified);
                        switch (object.variance) {
                        case "IN":
                        case 0:
                            message.variance = 0;
                            break;
                        case "OUT":
                        case 1:
                            message.variance = 1;
                            break;
                        default:
                            if (typeof object.variance === "number") {
                                message.variance = object.variance;
                                break;
                            }
                            break;
                        case "INV":
                        case 2:
                            message.variance = 2;
                            break;
                        }
                        if (object.upperBound) {
                            if (!Array.isArray(object.upperBound))
                                throw TypeError(".org.jetbrains.kotlin.metadata.TypeParameter.upperBound: array expected");
                            message.upperBound = [];
                            for (let i = 0; i < object.upperBound.length; ++i) {
                                if (typeof object.upperBound[i] !== "object")
                                    throw TypeError(".org.jetbrains.kotlin.metadata.TypeParameter.upperBound: object expected");
                                message.upperBound[i] = $root.org.jetbrains.kotlin.metadata.Type.fromObject(object.upperBound[i]);
                            }
                        }
                        if (object.upperBoundId) {
                            if (!Array.isArray(object.upperBoundId))
                                throw TypeError(".org.jetbrains.kotlin.metadata.TypeParameter.upperBoundId: array expected");
                            message.upperBoundId = [];
                            for (let i = 0; i < object.upperBoundId.length; ++i)
                                message.upperBoundId[i] = object.upperBoundId[i] | 0;
                        }
                        if (object.annotation) {
                            if (!Array.isArray(object.annotation))
                                throw TypeError(".org.jetbrains.kotlin.metadata.TypeParameter.annotation: array expected");
                            message.annotation = [];
                            for (let i = 0; i < object.annotation.length; ++i) {
                                if (typeof object.annotation[i] !== "object")
                                    throw TypeError(".org.jetbrains.kotlin.metadata.TypeParameter.annotation: object expected");
                                message.annotation[i] = $root.org.jetbrains.kotlin.metadata.Annotation.fromObject(object.annotation[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a TypeParameter message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof org.jetbrains.kotlin.metadata.TypeParameter
                     * @static
                     * @param {org.jetbrains.kotlin.metadata.TypeParameter} message TypeParameter
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    TypeParameter.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.arrays || options.defaults) {
                            object.upperBound = [];
                            object.upperBoundId = [];
                            object.annotation = [];
                        }
                        if (options.defaults) {
                            object.id = 0;
                            object.name = 0;
                            object.reified = false;
                            object.variance = options.enums === String ? "INV" : 2;
                        }
                        if (message.id != null && message.hasOwnProperty("id"))
                            object.id = message.id;
                        if (message.name != null && message.hasOwnProperty("name"))
                            object.name = message.name;
                        if (message.reified != null && message.hasOwnProperty("reified"))
                            object.reified = message.reified;
                        if (message.variance != null && message.hasOwnProperty("variance"))
                            object.variance = options.enums === String ? $root.org.jetbrains.kotlin.metadata.TypeParameter.Variance[message.variance] === undefined ? message.variance : $root.org.jetbrains.kotlin.metadata.TypeParameter.Variance[message.variance] : message.variance;
                        if (message.upperBound && message.upperBound.length) {
                            object.upperBound = [];
                            for (let j = 0; j < message.upperBound.length; ++j)
                                object.upperBound[j] = $root.org.jetbrains.kotlin.metadata.Type.toObject(message.upperBound[j], options);
                        }
                        if (message.upperBoundId && message.upperBoundId.length) {
                            object.upperBoundId = [];
                            for (let j = 0; j < message.upperBoundId.length; ++j)
                                object.upperBoundId[j] = message.upperBoundId[j];
                        }
                        if (message.annotation && message.annotation.length) {
                            object.annotation = [];
                            for (let j = 0; j < message.annotation.length; ++j)
                                object.annotation[j] = $root.org.jetbrains.kotlin.metadata.Annotation.toObject(message.annotation[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this TypeParameter to JSON.
                     * @function toJSON
                     * @memberof org.jetbrains.kotlin.metadata.TypeParameter
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    TypeParameter.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for TypeParameter
                     * @function getTypeUrl
                     * @memberof org.jetbrains.kotlin.metadata.TypeParameter
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    TypeParameter.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/org.jetbrains.kotlin.metadata.TypeParameter";
                    };

                    /**
                     * Variance enum.
                     * @name org.jetbrains.kotlin.metadata.TypeParameter.Variance
                     * @enum {number}
                     * @property {number} IN=0 IN value
                     * @property {number} OUT=1 OUT value
                     * @property {number} INV=2 INV value
                     */
                    TypeParameter.Variance = (function() {
                        const valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "IN"] = 0;
                        values[valuesById[1] = "OUT"] = 1;
                        values[valuesById[2] = "INV"] = 2;
                        return values;
                    })();

                    return TypeParameter;
                })();

                metadata.Class = (function() {

                    /**
                     * Properties of a Class.
                     * @memberof org.jetbrains.kotlin.metadata
                     * @interface IClass
                     * @property {number|null} [flags] Class flags
                     * @property {number} fqName Class fqName
                     * @property {number|null} [companionObjectName] Class companionObjectName
                     * @property {Array.<org.jetbrains.kotlin.metadata.ITypeParameter>|null} [typeParameter] Class typeParameter
                     * @property {Array.<org.jetbrains.kotlin.metadata.IType>|null} [supertype] Class supertype
                     * @property {Array.<number>|null} [supertypeId] Class supertypeId
                     * @property {Array.<number>|null} [nestedClassName] Class nestedClassName
                     * @property {Array.<org.jetbrains.kotlin.metadata.IType>|null} [contextReceiverType] Class contextReceiverType
                     * @property {Array.<number>|null} [contextReceiverTypeId] Class contextReceiverTypeId
                     * @property {Array.<org.jetbrains.kotlin.metadata.IConstructor>|null} [_constructor] Class _constructor
                     * @property {Array.<org.jetbrains.kotlin.metadata.IFunction>|null} ["function"] Class function
                     * @property {Array.<org.jetbrains.kotlin.metadata.IProperty>|null} [property] Class property
                     * @property {Array.<org.jetbrains.kotlin.metadata.ITypeAlias>|null} [typeAlias] Class typeAlias
                     * @property {Array.<org.jetbrains.kotlin.metadata.IEnumEntry>|null} [enumEntry] Class enumEntry
                     * @property {Array.<number>|null} [sealedSubclassFqName] Class sealedSubclassFqName
                     * @property {number|null} [inlineClassUnderlyingPropertyName] Class inlineClassUnderlyingPropertyName
                     * @property {org.jetbrains.kotlin.metadata.IType|null} [inlineClassUnderlyingType] Class inlineClassUnderlyingType
                     * @property {number|null} [inlineClassUnderlyingTypeId] Class inlineClassUnderlyingTypeId
                     * @property {Array.<org.jetbrains.kotlin.metadata.IAnnotation>|null} [annotation] Class annotation
                     * @property {org.jetbrains.kotlin.metadata.ITypeTable|null} [typeTable] Class typeTable
                     * @property {Array.<number>|null} [versionRequirement] Class versionRequirement
                     * @property {org.jetbrains.kotlin.metadata.IVersionRequirementTable|null} [versionRequirementTable] Class versionRequirementTable
                     * @property {Array.<org.jetbrains.kotlin.metadata.ICompilerPluginData>|null} [compilerPluginData] Class compilerPluginData
                     */

                    /**
                     * Constructs a new Class.
                     * @memberof org.jetbrains.kotlin.metadata
                     * @classdesc Represents a Class.
                     * @implements IClass
                     * @constructor
                     * @param {org.jetbrains.kotlin.metadata.IClass=} [properties] Properties to set
                     */
                    function Class(properties) {
                        this.typeParameter = [];
                        this.supertype = [];
                        this.supertypeId = [];
                        this.nestedClassName = [];
                        this.contextReceiverType = [];
                        this.contextReceiverTypeId = [];
                        this._constructor = [];
                        this["function"] = [];
                        this.property = [];
                        this.typeAlias = [];
                        this.enumEntry = [];
                        this.sealedSubclassFqName = [];
                        this.annotation = [];
                        this.versionRequirement = [];
                        this.compilerPluginData = [];
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Class flags.
                     * @member {number} flags
                     * @memberof org.jetbrains.kotlin.metadata.Class
                     * @instance
                     */
                    Class.prototype.flags = 6;

                    /**
                     * Class fqName.
                     * @member {number} fqName
                     * @memberof org.jetbrains.kotlin.metadata.Class
                     * @instance
                     */
                    Class.prototype.fqName = 0;

                    /**
                     * Class companionObjectName.
                     * @member {number} companionObjectName
                     * @memberof org.jetbrains.kotlin.metadata.Class
                     * @instance
                     */
                    Class.prototype.companionObjectName = 0;

                    /**
                     * Class typeParameter.
                     * @member {Array.<org.jetbrains.kotlin.metadata.ITypeParameter>} typeParameter
                     * @memberof org.jetbrains.kotlin.metadata.Class
                     * @instance
                     */
                    Class.prototype.typeParameter = $util.emptyArray;

                    /**
                     * Class supertype.
                     * @member {Array.<org.jetbrains.kotlin.metadata.IType>} supertype
                     * @memberof org.jetbrains.kotlin.metadata.Class
                     * @instance
                     */
                    Class.prototype.supertype = $util.emptyArray;

                    /**
                     * Class supertypeId.
                     * @member {Array.<number>} supertypeId
                     * @memberof org.jetbrains.kotlin.metadata.Class
                     * @instance
                     */
                    Class.prototype.supertypeId = $util.emptyArray;

                    /**
                     * Class nestedClassName.
                     * @member {Array.<number>} nestedClassName
                     * @memberof org.jetbrains.kotlin.metadata.Class
                     * @instance
                     */
                    Class.prototype.nestedClassName = $util.emptyArray;

                    /**
                     * Class contextReceiverType.
                     * @member {Array.<org.jetbrains.kotlin.metadata.IType>} contextReceiverType
                     * @memberof org.jetbrains.kotlin.metadata.Class
                     * @instance
                     */
                    Class.prototype.contextReceiverType = $util.emptyArray;

                    /**
                     * Class contextReceiverTypeId.
                     * @member {Array.<number>} contextReceiverTypeId
                     * @memberof org.jetbrains.kotlin.metadata.Class
                     * @instance
                     */
                    Class.prototype.contextReceiverTypeId = $util.emptyArray;

                    /**
                     * Class _constructor.
                     * @member {Array.<org.jetbrains.kotlin.metadata.IConstructor>} _constructor
                     * @memberof org.jetbrains.kotlin.metadata.Class
                     * @instance
                     */
                    Class.prototype._constructor = $util.emptyArray;

                    /**
                     * Class function.
                     * @member {Array.<org.jetbrains.kotlin.metadata.IFunction>} function
                     * @memberof org.jetbrains.kotlin.metadata.Class
                     * @instance
                     */
                    Class.prototype["function"] = $util.emptyArray;

                    /**
                     * Class property.
                     * @member {Array.<org.jetbrains.kotlin.metadata.IProperty>} property
                     * @memberof org.jetbrains.kotlin.metadata.Class
                     * @instance
                     */
                    Class.prototype.property = $util.emptyArray;

                    /**
                     * Class typeAlias.
                     * @member {Array.<org.jetbrains.kotlin.metadata.ITypeAlias>} typeAlias
                     * @memberof org.jetbrains.kotlin.metadata.Class
                     * @instance
                     */
                    Class.prototype.typeAlias = $util.emptyArray;

                    /**
                     * Class enumEntry.
                     * @member {Array.<org.jetbrains.kotlin.metadata.IEnumEntry>} enumEntry
                     * @memberof org.jetbrains.kotlin.metadata.Class
                     * @instance
                     */
                    Class.prototype.enumEntry = $util.emptyArray;

                    /**
                     * Class sealedSubclassFqName.
                     * @member {Array.<number>} sealedSubclassFqName
                     * @memberof org.jetbrains.kotlin.metadata.Class
                     * @instance
                     */
                    Class.prototype.sealedSubclassFqName = $util.emptyArray;

                    /**
                     * Class inlineClassUnderlyingPropertyName.
                     * @member {number} inlineClassUnderlyingPropertyName
                     * @memberof org.jetbrains.kotlin.metadata.Class
                     * @instance
                     */
                    Class.prototype.inlineClassUnderlyingPropertyName = 0;

                    /**
                     * Class inlineClassUnderlyingType.
                     * @member {org.jetbrains.kotlin.metadata.IType|null|undefined} inlineClassUnderlyingType
                     * @memberof org.jetbrains.kotlin.metadata.Class
                     * @instance
                     */
                    Class.prototype.inlineClassUnderlyingType = null;

                    /**
                     * Class inlineClassUnderlyingTypeId.
                     * @member {number} inlineClassUnderlyingTypeId
                     * @memberof org.jetbrains.kotlin.metadata.Class
                     * @instance
                     */
                    Class.prototype.inlineClassUnderlyingTypeId = 0;

                    /**
                     * Class annotation.
                     * @member {Array.<org.jetbrains.kotlin.metadata.IAnnotation>} annotation
                     * @memberof org.jetbrains.kotlin.metadata.Class
                     * @instance
                     */
                    Class.prototype.annotation = $util.emptyArray;

                    /**
                     * Class typeTable.
                     * @member {org.jetbrains.kotlin.metadata.ITypeTable|null|undefined} typeTable
                     * @memberof org.jetbrains.kotlin.metadata.Class
                     * @instance
                     */
                    Class.prototype.typeTable = null;

                    /**
                     * Class versionRequirement.
                     * @member {Array.<number>} versionRequirement
                     * @memberof org.jetbrains.kotlin.metadata.Class
                     * @instance
                     */
                    Class.prototype.versionRequirement = $util.emptyArray;

                    /**
                     * Class versionRequirementTable.
                     * @member {org.jetbrains.kotlin.metadata.IVersionRequirementTable|null|undefined} versionRequirementTable
                     * @memberof org.jetbrains.kotlin.metadata.Class
                     * @instance
                     */
                    Class.prototype.versionRequirementTable = null;

                    /**
                     * Class compilerPluginData.
                     * @member {Array.<org.jetbrains.kotlin.metadata.ICompilerPluginData>} compilerPluginData
                     * @memberof org.jetbrains.kotlin.metadata.Class
                     * @instance
                     */
                    Class.prototype.compilerPluginData = $util.emptyArray;

                    /**
                     * Decodes a Class message from the specified reader or buffer.
                     * @function decode
                     * @memberof org.jetbrains.kotlin.metadata.Class
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {org.jetbrains.kotlin.metadata.Class} Class
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Class.decode = function decode(reader, length, error) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.org.jetbrains.kotlin.metadata.Class();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            case 1: {
                                    message.flags = reader.int32();
                                    break;
                                }
                            case 3: {
                                    message.fqName = reader.int32();
                                    break;
                                }
                            case 4: {
                                    message.companionObjectName = reader.int32();
                                    break;
                                }
                            case 5: {
                                    if (!(message.typeParameter && message.typeParameter.length))
                                        message.typeParameter = [];
                                    message.typeParameter.push($root.org.jetbrains.kotlin.metadata.TypeParameter.decode(reader, reader.uint32()));
                                    break;
                                }
                            case 6: {
                                    if (!(message.supertype && message.supertype.length))
                                        message.supertype = [];
                                    message.supertype.push($root.org.jetbrains.kotlin.metadata.Type.decode(reader, reader.uint32()));
                                    break;
                                }
                            case 2: {
                                    if (!(message.supertypeId && message.supertypeId.length))
                                        message.supertypeId = [];
                                    if ((tag & 7) === 2) {
                                        let end2 = reader.uint32() + reader.pos;
                                        while (reader.pos < end2)
                                            message.supertypeId.push(reader.int32());
                                    } else
                                        message.supertypeId.push(reader.int32());
                                    break;
                                }
                            case 7: {
                                    if (!(message.nestedClassName && message.nestedClassName.length))
                                        message.nestedClassName = [];
                                    if ((tag & 7) === 2) {
                                        let end2 = reader.uint32() + reader.pos;
                                        while (reader.pos < end2)
                                            message.nestedClassName.push(reader.int32());
                                    } else
                                        message.nestedClassName.push(reader.int32());
                                    break;
                                }
                            case 20: {
                                    if (!(message.contextReceiverType && message.contextReceiverType.length))
                                        message.contextReceiverType = [];
                                    message.contextReceiverType.push($root.org.jetbrains.kotlin.metadata.Type.decode(reader, reader.uint32()));
                                    break;
                                }
                            case 21: {
                                    if (!(message.contextReceiverTypeId && message.contextReceiverTypeId.length))
                                        message.contextReceiverTypeId = [];
                                    if ((tag & 7) === 2) {
                                        let end2 = reader.uint32() + reader.pos;
                                        while (reader.pos < end2)
                                            message.contextReceiverTypeId.push(reader.int32());
                                    } else
                                        message.contextReceiverTypeId.push(reader.int32());
                                    break;
                                }
                            case 8: {
                                    if (!(message._constructor && message._constructor.length))
                                        message._constructor = [];
                                    message._constructor.push($root.org.jetbrains.kotlin.metadata.Constructor.decode(reader, reader.uint32()));
                                    break;
                                }
                            case 9: {
                                    if (!(message["function"] && message["function"].length))
                                        message["function"] = [];
                                    message["function"].push($root.org.jetbrains.kotlin.metadata.Function.decode(reader, reader.uint32()));
                                    break;
                                }
                            case 10: {
                                    if (!(message.property && message.property.length))
                                        message.property = [];
                                    message.property.push($root.org.jetbrains.kotlin.metadata.Property.decode(reader, reader.uint32()));
                                    break;
                                }
                            case 11: {
                                    if (!(message.typeAlias && message.typeAlias.length))
                                        message.typeAlias = [];
                                    message.typeAlias.push($root.org.jetbrains.kotlin.metadata.TypeAlias.decode(reader, reader.uint32()));
                                    break;
                                }
                            case 13: {
                                    if (!(message.enumEntry && message.enumEntry.length))
                                        message.enumEntry = [];
                                    message.enumEntry.push($root.org.jetbrains.kotlin.metadata.EnumEntry.decode(reader, reader.uint32()));
                                    break;
                                }
                            case 16: {
                                    if (!(message.sealedSubclassFqName && message.sealedSubclassFqName.length))
                                        message.sealedSubclassFqName = [];
                                    if ((tag & 7) === 2) {
                                        let end2 = reader.uint32() + reader.pos;
                                        while (reader.pos < end2)
                                            message.sealedSubclassFqName.push(reader.int32());
                                    } else
                                        message.sealedSubclassFqName.push(reader.int32());
                                    break;
                                }
                            case 17: {
                                    message.inlineClassUnderlyingPropertyName = reader.int32();
                                    break;
                                }
                            case 18: {
                                    message.inlineClassUnderlyingType = $root.org.jetbrains.kotlin.metadata.Type.decode(reader, reader.uint32());
                                    break;
                                }
                            case 19: {
                                    message.inlineClassUnderlyingTypeId = reader.int32();
                                    break;
                                }
                            case 25: {
                                    if (!(message.annotation && message.annotation.length))
                                        message.annotation = [];
                                    message.annotation.push($root.org.jetbrains.kotlin.metadata.Annotation.decode(reader, reader.uint32()));
                                    break;
                                }
                            case 30: {
                                    message.typeTable = $root.org.jetbrains.kotlin.metadata.TypeTable.decode(reader, reader.uint32());
                                    break;
                                }
                            case 31: {
                                    if (!(message.versionRequirement && message.versionRequirement.length))
                                        message.versionRequirement = [];
                                    if ((tag & 7) === 2) {
                                        let end2 = reader.uint32() + reader.pos;
                                        while (reader.pos < end2)
                                            message.versionRequirement.push(reader.int32());
                                    } else
                                        message.versionRequirement.push(reader.int32());
                                    break;
                                }
                            case 32: {
                                    message.versionRequirementTable = $root.org.jetbrains.kotlin.metadata.VersionRequirementTable.decode(reader, reader.uint32());
                                    break;
                                }
                            case 33: {
                                    if (!(message.compilerPluginData && message.compilerPluginData.length))
                                        message.compilerPluginData = [];
                                    message.compilerPluginData.push($root.org.jetbrains.kotlin.metadata.CompilerPluginData.decode(reader, reader.uint32()));
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        if (!message.hasOwnProperty("fqName"))
                            throw $util.ProtocolError("missing required 'fqName'", { instance: message });
                        return message;
                    };

                    /**
                     * Decodes a Class message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof org.jetbrains.kotlin.metadata.Class
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {org.jetbrains.kotlin.metadata.Class} Class
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Class.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Creates a Class message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof org.jetbrains.kotlin.metadata.Class
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {org.jetbrains.kotlin.metadata.Class} Class
                     */
                    Class.fromObject = function fromObject(object) {
                        if (object instanceof $root.org.jetbrains.kotlin.metadata.Class)
                            return object;
                        let message = new $root.org.jetbrains.kotlin.metadata.Class();
                        if (object.flags != null)
                            message.flags = object.flags | 0;
                        if (object.fqName != null)
                            message.fqName = object.fqName | 0;
                        if (object.companionObjectName != null)
                            message.companionObjectName = object.companionObjectName | 0;
                        if (object.typeParameter) {
                            if (!Array.isArray(object.typeParameter))
                                throw TypeError(".org.jetbrains.kotlin.metadata.Class.typeParameter: array expected");
                            message.typeParameter = [];
                            for (let i = 0; i < object.typeParameter.length; ++i) {
                                if (typeof object.typeParameter[i] !== "object")
                                    throw TypeError(".org.jetbrains.kotlin.metadata.Class.typeParameter: object expected");
                                message.typeParameter[i] = $root.org.jetbrains.kotlin.metadata.TypeParameter.fromObject(object.typeParameter[i]);
                            }
                        }
                        if (object.supertype) {
                            if (!Array.isArray(object.supertype))
                                throw TypeError(".org.jetbrains.kotlin.metadata.Class.supertype: array expected");
                            message.supertype = [];
                            for (let i = 0; i < object.supertype.length; ++i) {
                                if (typeof object.supertype[i] !== "object")
                                    throw TypeError(".org.jetbrains.kotlin.metadata.Class.supertype: object expected");
                                message.supertype[i] = $root.org.jetbrains.kotlin.metadata.Type.fromObject(object.supertype[i]);
                            }
                        }
                        if (object.supertypeId) {
                            if (!Array.isArray(object.supertypeId))
                                throw TypeError(".org.jetbrains.kotlin.metadata.Class.supertypeId: array expected");
                            message.supertypeId = [];
                            for (let i = 0; i < object.supertypeId.length; ++i)
                                message.supertypeId[i] = object.supertypeId[i] | 0;
                        }
                        if (object.nestedClassName) {
                            if (!Array.isArray(object.nestedClassName))
                                throw TypeError(".org.jetbrains.kotlin.metadata.Class.nestedClassName: array expected");
                            message.nestedClassName = [];
                            for (let i = 0; i < object.nestedClassName.length; ++i)
                                message.nestedClassName[i] = object.nestedClassName[i] | 0;
                        }
                        if (object.contextReceiverType) {
                            if (!Array.isArray(object.contextReceiverType))
                                throw TypeError(".org.jetbrains.kotlin.metadata.Class.contextReceiverType: array expected");
                            message.contextReceiverType = [];
                            for (let i = 0; i < object.contextReceiverType.length; ++i) {
                                if (typeof object.contextReceiverType[i] !== "object")
                                    throw TypeError(".org.jetbrains.kotlin.metadata.Class.contextReceiverType: object expected");
                                message.contextReceiverType[i] = $root.org.jetbrains.kotlin.metadata.Type.fromObject(object.contextReceiverType[i]);
                            }
                        }
                        if (object.contextReceiverTypeId) {
                            if (!Array.isArray(object.contextReceiverTypeId))
                                throw TypeError(".org.jetbrains.kotlin.metadata.Class.contextReceiverTypeId: array expected");
                            message.contextReceiverTypeId = [];
                            for (let i = 0; i < object.contextReceiverTypeId.length; ++i)
                                message.contextReceiverTypeId[i] = object.contextReceiverTypeId[i] | 0;
                        }
                        if (object._constructor) {
                            if (!Array.isArray(object._constructor))
                                throw TypeError(".org.jetbrains.kotlin.metadata.Class._constructor: array expected");
                            message._constructor = [];
                            for (let i = 0; i < object._constructor.length; ++i) {
                                if (typeof object._constructor[i] !== "object")
                                    throw TypeError(".org.jetbrains.kotlin.metadata.Class._constructor: object expected");
                                message._constructor[i] = $root.org.jetbrains.kotlin.metadata.Constructor.fromObject(object._constructor[i]);
                            }
                        }
                        if (object["function"]) {
                            if (!Array.isArray(object["function"]))
                                throw TypeError(".org.jetbrains.kotlin.metadata.Class.function: array expected");
                            message["function"] = [];
                            for (let i = 0; i < object["function"].length; ++i) {
                                if (typeof object["function"][i] !== "object")
                                    throw TypeError(".org.jetbrains.kotlin.metadata.Class.function: object expected");
                                message["function"][i] = $root.org.jetbrains.kotlin.metadata.Function.fromObject(object["function"][i]);
                            }
                        }
                        if (object.property) {
                            if (!Array.isArray(object.property))
                                throw TypeError(".org.jetbrains.kotlin.metadata.Class.property: array expected");
                            message.property = [];
                            for (let i = 0; i < object.property.length; ++i) {
                                if (typeof object.property[i] !== "object")
                                    throw TypeError(".org.jetbrains.kotlin.metadata.Class.property: object expected");
                                message.property[i] = $root.org.jetbrains.kotlin.metadata.Property.fromObject(object.property[i]);
                            }
                        }
                        if (object.typeAlias) {
                            if (!Array.isArray(object.typeAlias))
                                throw TypeError(".org.jetbrains.kotlin.metadata.Class.typeAlias: array expected");
                            message.typeAlias = [];
                            for (let i = 0; i < object.typeAlias.length; ++i) {
                                if (typeof object.typeAlias[i] !== "object")
                                    throw TypeError(".org.jetbrains.kotlin.metadata.Class.typeAlias: object expected");
                                message.typeAlias[i] = $root.org.jetbrains.kotlin.metadata.TypeAlias.fromObject(object.typeAlias[i]);
                            }
                        }
                        if (object.enumEntry) {
                            if (!Array.isArray(object.enumEntry))
                                throw TypeError(".org.jetbrains.kotlin.metadata.Class.enumEntry: array expected");
                            message.enumEntry = [];
                            for (let i = 0; i < object.enumEntry.length; ++i) {
                                if (typeof object.enumEntry[i] !== "object")
                                    throw TypeError(".org.jetbrains.kotlin.metadata.Class.enumEntry: object expected");
                                message.enumEntry[i] = $root.org.jetbrains.kotlin.metadata.EnumEntry.fromObject(object.enumEntry[i]);
                            }
                        }
                        if (object.sealedSubclassFqName) {
                            if (!Array.isArray(object.sealedSubclassFqName))
                                throw TypeError(".org.jetbrains.kotlin.metadata.Class.sealedSubclassFqName: array expected");
                            message.sealedSubclassFqName = [];
                            for (let i = 0; i < object.sealedSubclassFqName.length; ++i)
                                message.sealedSubclassFqName[i] = object.sealedSubclassFqName[i] | 0;
                        }
                        if (object.inlineClassUnderlyingPropertyName != null)
                            message.inlineClassUnderlyingPropertyName = object.inlineClassUnderlyingPropertyName | 0;
                        if (object.inlineClassUnderlyingType != null) {
                            if (typeof object.inlineClassUnderlyingType !== "object")
                                throw TypeError(".org.jetbrains.kotlin.metadata.Class.inlineClassUnderlyingType: object expected");
                            message.inlineClassUnderlyingType = $root.org.jetbrains.kotlin.metadata.Type.fromObject(object.inlineClassUnderlyingType);
                        }
                        if (object.inlineClassUnderlyingTypeId != null)
                            message.inlineClassUnderlyingTypeId = object.inlineClassUnderlyingTypeId | 0;
                        if (object.annotation) {
                            if (!Array.isArray(object.annotation))
                                throw TypeError(".org.jetbrains.kotlin.metadata.Class.annotation: array expected");
                            message.annotation = [];
                            for (let i = 0; i < object.annotation.length; ++i) {
                                if (typeof object.annotation[i] !== "object")
                                    throw TypeError(".org.jetbrains.kotlin.metadata.Class.annotation: object expected");
                                message.annotation[i] = $root.org.jetbrains.kotlin.metadata.Annotation.fromObject(object.annotation[i]);
                            }
                        }
                        if (object.typeTable != null) {
                            if (typeof object.typeTable !== "object")
                                throw TypeError(".org.jetbrains.kotlin.metadata.Class.typeTable: object expected");
                            message.typeTable = $root.org.jetbrains.kotlin.metadata.TypeTable.fromObject(object.typeTable);
                        }
                        if (object.versionRequirement) {
                            if (!Array.isArray(object.versionRequirement))
                                throw TypeError(".org.jetbrains.kotlin.metadata.Class.versionRequirement: array expected");
                            message.versionRequirement = [];
                            for (let i = 0; i < object.versionRequirement.length; ++i)
                                message.versionRequirement[i] = object.versionRequirement[i] | 0;
                        }
                        if (object.versionRequirementTable != null) {
                            if (typeof object.versionRequirementTable !== "object")
                                throw TypeError(".org.jetbrains.kotlin.metadata.Class.versionRequirementTable: object expected");
                            message.versionRequirementTable = $root.org.jetbrains.kotlin.metadata.VersionRequirementTable.fromObject(object.versionRequirementTable);
                        }
                        if (object.compilerPluginData) {
                            if (!Array.isArray(object.compilerPluginData))
                                throw TypeError(".org.jetbrains.kotlin.metadata.Class.compilerPluginData: array expected");
                            message.compilerPluginData = [];
                            for (let i = 0; i < object.compilerPluginData.length; ++i) {
                                if (typeof object.compilerPluginData[i] !== "object")
                                    throw TypeError(".org.jetbrains.kotlin.metadata.Class.compilerPluginData: object expected");
                                message.compilerPluginData[i] = $root.org.jetbrains.kotlin.metadata.CompilerPluginData.fromObject(object.compilerPluginData[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a Class message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof org.jetbrains.kotlin.metadata.Class
                     * @static
                     * @param {org.jetbrains.kotlin.metadata.Class} message Class
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Class.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.arrays || options.defaults) {
                            object.supertypeId = [];
                            object.typeParameter = [];
                            object.supertype = [];
                            object.nestedClassName = [];
                            object._constructor = [];
                            object["function"] = [];
                            object.property = [];
                            object.typeAlias = [];
                            object.enumEntry = [];
                            object.sealedSubclassFqName = [];
                            object.contextReceiverType = [];
                            object.contextReceiverTypeId = [];
                            object.annotation = [];
                            object.versionRequirement = [];
                            object.compilerPluginData = [];
                        }
                        if (options.defaults) {
                            object.flags = 6;
                            object.fqName = 0;
                            object.companionObjectName = 0;
                            object.inlineClassUnderlyingPropertyName = 0;
                            object.inlineClassUnderlyingType = null;
                            object.inlineClassUnderlyingTypeId = 0;
                            object.typeTable = null;
                            object.versionRequirementTable = null;
                        }
                        if (message.flags != null && message.hasOwnProperty("flags"))
                            object.flags = message.flags;
                        if (message.supertypeId && message.supertypeId.length) {
                            object.supertypeId = [];
                            for (let j = 0; j < message.supertypeId.length; ++j)
                                object.supertypeId[j] = message.supertypeId[j];
                        }
                        if (message.fqName != null && message.hasOwnProperty("fqName"))
                            object.fqName = message.fqName;
                        if (message.companionObjectName != null && message.hasOwnProperty("companionObjectName"))
                            object.companionObjectName = message.companionObjectName;
                        if (message.typeParameter && message.typeParameter.length) {
                            object.typeParameter = [];
                            for (let j = 0; j < message.typeParameter.length; ++j)
                                object.typeParameter[j] = $root.org.jetbrains.kotlin.metadata.TypeParameter.toObject(message.typeParameter[j], options);
                        }
                        if (message.supertype && message.supertype.length) {
                            object.supertype = [];
                            for (let j = 0; j < message.supertype.length; ++j)
                                object.supertype[j] = $root.org.jetbrains.kotlin.metadata.Type.toObject(message.supertype[j], options);
                        }
                        if (message.nestedClassName && message.nestedClassName.length) {
                            object.nestedClassName = [];
                            for (let j = 0; j < message.nestedClassName.length; ++j)
                                object.nestedClassName[j] = message.nestedClassName[j];
                        }
                        if (message._constructor && message._constructor.length) {
                            object._constructor = [];
                            for (let j = 0; j < message._constructor.length; ++j)
                                object._constructor[j] = $root.org.jetbrains.kotlin.metadata.Constructor.toObject(message._constructor[j], options);
                        }
                        if (message["function"] && message["function"].length) {
                            object["function"] = [];
                            for (let j = 0; j < message["function"].length; ++j)
                                object["function"][j] = $root.org.jetbrains.kotlin.metadata.Function.toObject(message["function"][j], options);
                        }
                        if (message.property && message.property.length) {
                            object.property = [];
                            for (let j = 0; j < message.property.length; ++j)
                                object.property[j] = $root.org.jetbrains.kotlin.metadata.Property.toObject(message.property[j], options);
                        }
                        if (message.typeAlias && message.typeAlias.length) {
                            object.typeAlias = [];
                            for (let j = 0; j < message.typeAlias.length; ++j)
                                object.typeAlias[j] = $root.org.jetbrains.kotlin.metadata.TypeAlias.toObject(message.typeAlias[j], options);
                        }
                        if (message.enumEntry && message.enumEntry.length) {
                            object.enumEntry = [];
                            for (let j = 0; j < message.enumEntry.length; ++j)
                                object.enumEntry[j] = $root.org.jetbrains.kotlin.metadata.EnumEntry.toObject(message.enumEntry[j], options);
                        }
                        if (message.sealedSubclassFqName && message.sealedSubclassFqName.length) {
                            object.sealedSubclassFqName = [];
                            for (let j = 0; j < message.sealedSubclassFqName.length; ++j)
                                object.sealedSubclassFqName[j] = message.sealedSubclassFqName[j];
                        }
                        if (message.inlineClassUnderlyingPropertyName != null && message.hasOwnProperty("inlineClassUnderlyingPropertyName"))
                            object.inlineClassUnderlyingPropertyName = message.inlineClassUnderlyingPropertyName;
                        if (message.inlineClassUnderlyingType != null && message.hasOwnProperty("inlineClassUnderlyingType"))
                            object.inlineClassUnderlyingType = $root.org.jetbrains.kotlin.metadata.Type.toObject(message.inlineClassUnderlyingType, options);
                        if (message.inlineClassUnderlyingTypeId != null && message.hasOwnProperty("inlineClassUnderlyingTypeId"))
                            object.inlineClassUnderlyingTypeId = message.inlineClassUnderlyingTypeId;
                        if (message.contextReceiverType && message.contextReceiverType.length) {
                            object.contextReceiverType = [];
                            for (let j = 0; j < message.contextReceiverType.length; ++j)
                                object.contextReceiverType[j] = $root.org.jetbrains.kotlin.metadata.Type.toObject(message.contextReceiverType[j], options);
                        }
                        if (message.contextReceiverTypeId && message.contextReceiverTypeId.length) {
                            object.contextReceiverTypeId = [];
                            for (let j = 0; j < message.contextReceiverTypeId.length; ++j)
                                object.contextReceiverTypeId[j] = message.contextReceiverTypeId[j];
                        }
                        if (message.annotation && message.annotation.length) {
                            object.annotation = [];
                            for (let j = 0; j < message.annotation.length; ++j)
                                object.annotation[j] = $root.org.jetbrains.kotlin.metadata.Annotation.toObject(message.annotation[j], options);
                        }
                        if (message.typeTable != null && message.hasOwnProperty("typeTable"))
                            object.typeTable = $root.org.jetbrains.kotlin.metadata.TypeTable.toObject(message.typeTable, options);
                        if (message.versionRequirement && message.versionRequirement.length) {
                            object.versionRequirement = [];
                            for (let j = 0; j < message.versionRequirement.length; ++j)
                                object.versionRequirement[j] = message.versionRequirement[j];
                        }
                        if (message.versionRequirementTable != null && message.hasOwnProperty("versionRequirementTable"))
                            object.versionRequirementTable = $root.org.jetbrains.kotlin.metadata.VersionRequirementTable.toObject(message.versionRequirementTable, options);
                        if (message.compilerPluginData && message.compilerPluginData.length) {
                            object.compilerPluginData = [];
                            for (let j = 0; j < message.compilerPluginData.length; ++j)
                                object.compilerPluginData[j] = $root.org.jetbrains.kotlin.metadata.CompilerPluginData.toObject(message.compilerPluginData[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this Class to JSON.
                     * @function toJSON
                     * @memberof org.jetbrains.kotlin.metadata.Class
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Class.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for Class
                     * @function getTypeUrl
                     * @memberof org.jetbrains.kotlin.metadata.Class
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Class.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/org.jetbrains.kotlin.metadata.Class";
                    };

                    /**
                     * Kind enum.
                     * @name org.jetbrains.kotlin.metadata.Class.Kind
                     * @enum {number}
                     * @property {number} CLASS=0 CLASS value
                     * @property {number} INTERFACE=1 INTERFACE value
                     * @property {number} ENUM_CLASS=2 ENUM_CLASS value
                     * @property {number} ENUM_ENTRY=3 ENUM_ENTRY value
                     * @property {number} ANNOTATION_CLASS=4 ANNOTATION_CLASS value
                     * @property {number} OBJECT=5 OBJECT value
                     * @property {number} COMPANION_OBJECT=6 COMPANION_OBJECT value
                     */
                    Class.Kind = (function() {
                        const valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "CLASS"] = 0;
                        values[valuesById[1] = "INTERFACE"] = 1;
                        values[valuesById[2] = "ENUM_CLASS"] = 2;
                        values[valuesById[3] = "ENUM_ENTRY"] = 3;
                        values[valuesById[4] = "ANNOTATION_CLASS"] = 4;
                        values[valuesById[5] = "OBJECT"] = 5;
                        values[valuesById[6] = "COMPANION_OBJECT"] = 6;
                        return values;
                    })();

                    return Class;
                })();

                metadata.Package = (function() {

                    /**
                     * Properties of a Package.
                     * @memberof org.jetbrains.kotlin.metadata
                     * @interface IPackage
                     * @property {Array.<org.jetbrains.kotlin.metadata.IFunction>|null} ["function"] Package function
                     * @property {Array.<org.jetbrains.kotlin.metadata.IProperty>|null} [property] Package property
                     * @property {Array.<org.jetbrains.kotlin.metadata.ITypeAlias>|null} [typeAlias] Package typeAlias
                     * @property {org.jetbrains.kotlin.metadata.ITypeTable|null} [typeTable] Package typeTable
                     * @property {org.jetbrains.kotlin.metadata.IVersionRequirementTable|null} [versionRequirementTable] Package versionRequirementTable
                     */

                    /**
                     * Constructs a new Package.
                     * @memberof org.jetbrains.kotlin.metadata
                     * @classdesc Represents a Package.
                     * @implements IPackage
                     * @constructor
                     * @param {org.jetbrains.kotlin.metadata.IPackage=} [properties] Properties to set
                     */
                    function Package(properties) {
                        this["function"] = [];
                        this.property = [];
                        this.typeAlias = [];
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Package function.
                     * @member {Array.<org.jetbrains.kotlin.metadata.IFunction>} function
                     * @memberof org.jetbrains.kotlin.metadata.Package
                     * @instance
                     */
                    Package.prototype["function"] = $util.emptyArray;

                    /**
                     * Package property.
                     * @member {Array.<org.jetbrains.kotlin.metadata.IProperty>} property
                     * @memberof org.jetbrains.kotlin.metadata.Package
                     * @instance
                     */
                    Package.prototype.property = $util.emptyArray;

                    /**
                     * Package typeAlias.
                     * @member {Array.<org.jetbrains.kotlin.metadata.ITypeAlias>} typeAlias
                     * @memberof org.jetbrains.kotlin.metadata.Package
                     * @instance
                     */
                    Package.prototype.typeAlias = $util.emptyArray;

                    /**
                     * Package typeTable.
                     * @member {org.jetbrains.kotlin.metadata.ITypeTable|null|undefined} typeTable
                     * @memberof org.jetbrains.kotlin.metadata.Package
                     * @instance
                     */
                    Package.prototype.typeTable = null;

                    /**
                     * Package versionRequirementTable.
                     * @member {org.jetbrains.kotlin.metadata.IVersionRequirementTable|null|undefined} versionRequirementTable
                     * @memberof org.jetbrains.kotlin.metadata.Package
                     * @instance
                     */
                    Package.prototype.versionRequirementTable = null;

                    /**
                     * Decodes a Package message from the specified reader or buffer.
                     * @function decode
                     * @memberof org.jetbrains.kotlin.metadata.Package
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {org.jetbrains.kotlin.metadata.Package} Package
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Package.decode = function decode(reader, length, error) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.org.jetbrains.kotlin.metadata.Package();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            case 3: {
                                    if (!(message["function"] && message["function"].length))
                                        message["function"] = [];
                                    message["function"].push($root.org.jetbrains.kotlin.metadata.Function.decode(reader, reader.uint32()));
                                    break;
                                }
                            case 4: {
                                    if (!(message.property && message.property.length))
                                        message.property = [];
                                    message.property.push($root.org.jetbrains.kotlin.metadata.Property.decode(reader, reader.uint32()));
                                    break;
                                }
                            case 5: {
                                    if (!(message.typeAlias && message.typeAlias.length))
                                        message.typeAlias = [];
                                    message.typeAlias.push($root.org.jetbrains.kotlin.metadata.TypeAlias.decode(reader, reader.uint32()));
                                    break;
                                }
                            case 30: {
                                    message.typeTable = $root.org.jetbrains.kotlin.metadata.TypeTable.decode(reader, reader.uint32());
                                    break;
                                }
                            case 32: {
                                    message.versionRequirementTable = $root.org.jetbrains.kotlin.metadata.VersionRequirementTable.decode(reader, reader.uint32());
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Package message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof org.jetbrains.kotlin.metadata.Package
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {org.jetbrains.kotlin.metadata.Package} Package
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Package.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Creates a Package message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof org.jetbrains.kotlin.metadata.Package
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {org.jetbrains.kotlin.metadata.Package} Package
                     */
                    Package.fromObject = function fromObject(object) {
                        if (object instanceof $root.org.jetbrains.kotlin.metadata.Package)
                            return object;
                        let message = new $root.org.jetbrains.kotlin.metadata.Package();
                        if (object["function"]) {
                            if (!Array.isArray(object["function"]))
                                throw TypeError(".org.jetbrains.kotlin.metadata.Package.function: array expected");
                            message["function"] = [];
                            for (let i = 0; i < object["function"].length; ++i) {
                                if (typeof object["function"][i] !== "object")
                                    throw TypeError(".org.jetbrains.kotlin.metadata.Package.function: object expected");
                                message["function"][i] = $root.org.jetbrains.kotlin.metadata.Function.fromObject(object["function"][i]);
                            }
                        }
                        if (object.property) {
                            if (!Array.isArray(object.property))
                                throw TypeError(".org.jetbrains.kotlin.metadata.Package.property: array expected");
                            message.property = [];
                            for (let i = 0; i < object.property.length; ++i) {
                                if (typeof object.property[i] !== "object")
                                    throw TypeError(".org.jetbrains.kotlin.metadata.Package.property: object expected");
                                message.property[i] = $root.org.jetbrains.kotlin.metadata.Property.fromObject(object.property[i]);
                            }
                        }
                        if (object.typeAlias) {
                            if (!Array.isArray(object.typeAlias))
                                throw TypeError(".org.jetbrains.kotlin.metadata.Package.typeAlias: array expected");
                            message.typeAlias = [];
                            for (let i = 0; i < object.typeAlias.length; ++i) {
                                if (typeof object.typeAlias[i] !== "object")
                                    throw TypeError(".org.jetbrains.kotlin.metadata.Package.typeAlias: object expected");
                                message.typeAlias[i] = $root.org.jetbrains.kotlin.metadata.TypeAlias.fromObject(object.typeAlias[i]);
                            }
                        }
                        if (object.typeTable != null) {
                            if (typeof object.typeTable !== "object")
                                throw TypeError(".org.jetbrains.kotlin.metadata.Package.typeTable: object expected");
                            message.typeTable = $root.org.jetbrains.kotlin.metadata.TypeTable.fromObject(object.typeTable);
                        }
                        if (object.versionRequirementTable != null) {
                            if (typeof object.versionRequirementTable !== "object")
                                throw TypeError(".org.jetbrains.kotlin.metadata.Package.versionRequirementTable: object expected");
                            message.versionRequirementTable = $root.org.jetbrains.kotlin.metadata.VersionRequirementTable.fromObject(object.versionRequirementTable);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a Package message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof org.jetbrains.kotlin.metadata.Package
                     * @static
                     * @param {org.jetbrains.kotlin.metadata.Package} message Package
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Package.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.arrays || options.defaults) {
                            object["function"] = [];
                            object.property = [];
                            object.typeAlias = [];
                        }
                        if (options.defaults) {
                            object.typeTable = null;
                            object.versionRequirementTable = null;
                        }
                        if (message["function"] && message["function"].length) {
                            object["function"] = [];
                            for (let j = 0; j < message["function"].length; ++j)
                                object["function"][j] = $root.org.jetbrains.kotlin.metadata.Function.toObject(message["function"][j], options);
                        }
                        if (message.property && message.property.length) {
                            object.property = [];
                            for (let j = 0; j < message.property.length; ++j)
                                object.property[j] = $root.org.jetbrains.kotlin.metadata.Property.toObject(message.property[j], options);
                        }
                        if (message.typeAlias && message.typeAlias.length) {
                            object.typeAlias = [];
                            for (let j = 0; j < message.typeAlias.length; ++j)
                                object.typeAlias[j] = $root.org.jetbrains.kotlin.metadata.TypeAlias.toObject(message.typeAlias[j], options);
                        }
                        if (message.typeTable != null && message.hasOwnProperty("typeTable"))
                            object.typeTable = $root.org.jetbrains.kotlin.metadata.TypeTable.toObject(message.typeTable, options);
                        if (message.versionRequirementTable != null && message.hasOwnProperty("versionRequirementTable"))
                            object.versionRequirementTable = $root.org.jetbrains.kotlin.metadata.VersionRequirementTable.toObject(message.versionRequirementTable, options);
                        return object;
                    };

                    /**
                     * Converts this Package to JSON.
                     * @function toJSON
                     * @memberof org.jetbrains.kotlin.metadata.Package
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Package.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for Package
                     * @function getTypeUrl
                     * @memberof org.jetbrains.kotlin.metadata.Package
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Package.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/org.jetbrains.kotlin.metadata.Package";
                    };

                    return Package;
                })();

                metadata.TypeTable = (function() {

                    /**
                     * Properties of a TypeTable.
                     * @memberof org.jetbrains.kotlin.metadata
                     * @interface ITypeTable
                     * @property {Array.<org.jetbrains.kotlin.metadata.IType>|null} [type] TypeTable type
                     * @property {number|null} [firstNullable] TypeTable firstNullable
                     */

                    /**
                     * Constructs a new TypeTable.
                     * @memberof org.jetbrains.kotlin.metadata
                     * @classdesc Represents a TypeTable.
                     * @implements ITypeTable
                     * @constructor
                     * @param {org.jetbrains.kotlin.metadata.ITypeTable=} [properties] Properties to set
                     */
                    function TypeTable(properties) {
                        this.type = [];
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * TypeTable type.
                     * @member {Array.<org.jetbrains.kotlin.metadata.IType>} type
                     * @memberof org.jetbrains.kotlin.metadata.TypeTable
                     * @instance
                     */
                    TypeTable.prototype.type = $util.emptyArray;

                    /**
                     * TypeTable firstNullable.
                     * @member {number} firstNullable
                     * @memberof org.jetbrains.kotlin.metadata.TypeTable
                     * @instance
                     */
                    TypeTable.prototype.firstNullable = -1;

                    /**
                     * Decodes a TypeTable message from the specified reader or buffer.
                     * @function decode
                     * @memberof org.jetbrains.kotlin.metadata.TypeTable
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {org.jetbrains.kotlin.metadata.TypeTable} TypeTable
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TypeTable.decode = function decode(reader, length, error) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.org.jetbrains.kotlin.metadata.TypeTable();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            case 1: {
                                    if (!(message.type && message.type.length))
                                        message.type = [];
                                    message.type.push($root.org.jetbrains.kotlin.metadata.Type.decode(reader, reader.uint32()));
                                    break;
                                }
                            case 2: {
                                    message.firstNullable = reader.int32();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a TypeTable message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof org.jetbrains.kotlin.metadata.TypeTable
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {org.jetbrains.kotlin.metadata.TypeTable} TypeTable
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TypeTable.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Creates a TypeTable message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof org.jetbrains.kotlin.metadata.TypeTable
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {org.jetbrains.kotlin.metadata.TypeTable} TypeTable
                     */
                    TypeTable.fromObject = function fromObject(object) {
                        if (object instanceof $root.org.jetbrains.kotlin.metadata.TypeTable)
                            return object;
                        let message = new $root.org.jetbrains.kotlin.metadata.TypeTable();
                        if (object.type) {
                            if (!Array.isArray(object.type))
                                throw TypeError(".org.jetbrains.kotlin.metadata.TypeTable.type: array expected");
                            message.type = [];
                            for (let i = 0; i < object.type.length; ++i) {
                                if (typeof object.type[i] !== "object")
                                    throw TypeError(".org.jetbrains.kotlin.metadata.TypeTable.type: object expected");
                                message.type[i] = $root.org.jetbrains.kotlin.metadata.Type.fromObject(object.type[i]);
                            }
                        }
                        if (object.firstNullable != null)
                            message.firstNullable = object.firstNullable | 0;
                        return message;
                    };

                    /**
                     * Creates a plain object from a TypeTable message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof org.jetbrains.kotlin.metadata.TypeTable
                     * @static
                     * @param {org.jetbrains.kotlin.metadata.TypeTable} message TypeTable
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    TypeTable.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.arrays || options.defaults)
                            object.type = [];
                        if (options.defaults)
                            object.firstNullable = -1;
                        if (message.type && message.type.length) {
                            object.type = [];
                            for (let j = 0; j < message.type.length; ++j)
                                object.type[j] = $root.org.jetbrains.kotlin.metadata.Type.toObject(message.type[j], options);
                        }
                        if (message.firstNullable != null && message.hasOwnProperty("firstNullable"))
                            object.firstNullable = message.firstNullable;
                        return object;
                    };

                    /**
                     * Converts this TypeTable to JSON.
                     * @function toJSON
                     * @memberof org.jetbrains.kotlin.metadata.TypeTable
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    TypeTable.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for TypeTable
                     * @function getTypeUrl
                     * @memberof org.jetbrains.kotlin.metadata.TypeTable
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    TypeTable.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/org.jetbrains.kotlin.metadata.TypeTable";
                    };

                    return TypeTable;
                })();

                metadata.Constructor = (function() {

                    /**
                     * Properties of a Constructor.
                     * @memberof org.jetbrains.kotlin.metadata
                     * @interface IConstructor
                     * @property {number|null} [flags] Constructor flags
                     * @property {Array.<org.jetbrains.kotlin.metadata.IValueParameter>|null} [valueParameter] Constructor valueParameter
                     * @property {Array.<number>|null} [versionRequirement] Constructor versionRequirement
                     * @property {Array.<org.jetbrains.kotlin.metadata.ICompilerPluginData>|null} [compilerPluginData] Constructor compilerPluginData
                     * @property {Array.<org.jetbrains.kotlin.metadata.IAnnotation>|null} [annotation] Constructor annotation
                     */

                    /**
                     * Constructs a new Constructor.
                     * @memberof org.jetbrains.kotlin.metadata
                     * @classdesc Represents a Constructor.
                     * @implements IConstructor
                     * @constructor
                     * @param {org.jetbrains.kotlin.metadata.IConstructor=} [properties] Properties to set
                     */
                    function Constructor(properties) {
                        this.valueParameter = [];
                        this.versionRequirement = [];
                        this.compilerPluginData = [];
                        this.annotation = [];
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Constructor flags.
                     * @member {number} flags
                     * @memberof org.jetbrains.kotlin.metadata.Constructor
                     * @instance
                     */
                    Constructor.prototype.flags = 6;

                    /**
                     * Constructor valueParameter.
                     * @member {Array.<org.jetbrains.kotlin.metadata.IValueParameter>} valueParameter
                     * @memberof org.jetbrains.kotlin.metadata.Constructor
                     * @instance
                     */
                    Constructor.prototype.valueParameter = $util.emptyArray;

                    /**
                     * Constructor versionRequirement.
                     * @member {Array.<number>} versionRequirement
                     * @memberof org.jetbrains.kotlin.metadata.Constructor
                     * @instance
                     */
                    Constructor.prototype.versionRequirement = $util.emptyArray;

                    /**
                     * Constructor compilerPluginData.
                     * @member {Array.<org.jetbrains.kotlin.metadata.ICompilerPluginData>} compilerPluginData
                     * @memberof org.jetbrains.kotlin.metadata.Constructor
                     * @instance
                     */
                    Constructor.prototype.compilerPluginData = $util.emptyArray;

                    /**
                     * Constructor annotation.
                     * @member {Array.<org.jetbrains.kotlin.metadata.IAnnotation>} annotation
                     * @memberof org.jetbrains.kotlin.metadata.Constructor
                     * @instance
                     */
                    Constructor.prototype.annotation = $util.emptyArray;

                    /**
                     * Decodes a Constructor message from the specified reader or buffer.
                     * @function decode
                     * @memberof org.jetbrains.kotlin.metadata.Constructor
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {org.jetbrains.kotlin.metadata.Constructor} Constructor
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Constructor.decode = function decode(reader, length, error) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.org.jetbrains.kotlin.metadata.Constructor();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            case 1: {
                                    message.flags = reader.int32();
                                    break;
                                }
                            case 2: {
                                    if (!(message.valueParameter && message.valueParameter.length))
                                        message.valueParameter = [];
                                    message.valueParameter.push($root.org.jetbrains.kotlin.metadata.ValueParameter.decode(reader, reader.uint32()));
                                    break;
                                }
                            case 31: {
                                    if (!(message.versionRequirement && message.versionRequirement.length))
                                        message.versionRequirement = [];
                                    if ((tag & 7) === 2) {
                                        let end2 = reader.uint32() + reader.pos;
                                        while (reader.pos < end2)
                                            message.versionRequirement.push(reader.int32());
                                    } else
                                        message.versionRequirement.push(reader.int32());
                                    break;
                                }
                            case 32: {
                                    if (!(message.compilerPluginData && message.compilerPluginData.length))
                                        message.compilerPluginData = [];
                                    message.compilerPluginData.push($root.org.jetbrains.kotlin.metadata.CompilerPluginData.decode(reader, reader.uint32()));
                                    break;
                                }
                            case 3: {
                                    if (!(message.annotation && message.annotation.length))
                                        message.annotation = [];
                                    message.annotation.push($root.org.jetbrains.kotlin.metadata.Annotation.decode(reader, reader.uint32()));
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Constructor message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof org.jetbrains.kotlin.metadata.Constructor
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {org.jetbrains.kotlin.metadata.Constructor} Constructor
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Constructor.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Creates a Constructor message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof org.jetbrains.kotlin.metadata.Constructor
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {org.jetbrains.kotlin.metadata.Constructor} Constructor
                     */
                    Constructor.fromObject = function fromObject(object) {
                        if (object instanceof $root.org.jetbrains.kotlin.metadata.Constructor)
                            return object;
                        let message = new $root.org.jetbrains.kotlin.metadata.Constructor();
                        if (object.flags != null)
                            message.flags = object.flags | 0;
                        if (object.valueParameter) {
                            if (!Array.isArray(object.valueParameter))
                                throw TypeError(".org.jetbrains.kotlin.metadata.Constructor.valueParameter: array expected");
                            message.valueParameter = [];
                            for (let i = 0; i < object.valueParameter.length; ++i) {
                                if (typeof object.valueParameter[i] !== "object")
                                    throw TypeError(".org.jetbrains.kotlin.metadata.Constructor.valueParameter: object expected");
                                message.valueParameter[i] = $root.org.jetbrains.kotlin.metadata.ValueParameter.fromObject(object.valueParameter[i]);
                            }
                        }
                        if (object.versionRequirement) {
                            if (!Array.isArray(object.versionRequirement))
                                throw TypeError(".org.jetbrains.kotlin.metadata.Constructor.versionRequirement: array expected");
                            message.versionRequirement = [];
                            for (let i = 0; i < object.versionRequirement.length; ++i)
                                message.versionRequirement[i] = object.versionRequirement[i] | 0;
                        }
                        if (object.compilerPluginData) {
                            if (!Array.isArray(object.compilerPluginData))
                                throw TypeError(".org.jetbrains.kotlin.metadata.Constructor.compilerPluginData: array expected");
                            message.compilerPluginData = [];
                            for (let i = 0; i < object.compilerPluginData.length; ++i) {
                                if (typeof object.compilerPluginData[i] !== "object")
                                    throw TypeError(".org.jetbrains.kotlin.metadata.Constructor.compilerPluginData: object expected");
                                message.compilerPluginData[i] = $root.org.jetbrains.kotlin.metadata.CompilerPluginData.fromObject(object.compilerPluginData[i]);
                            }
                        }
                        if (object.annotation) {
                            if (!Array.isArray(object.annotation))
                                throw TypeError(".org.jetbrains.kotlin.metadata.Constructor.annotation: array expected");
                            message.annotation = [];
                            for (let i = 0; i < object.annotation.length; ++i) {
                                if (typeof object.annotation[i] !== "object")
                                    throw TypeError(".org.jetbrains.kotlin.metadata.Constructor.annotation: object expected");
                                message.annotation[i] = $root.org.jetbrains.kotlin.metadata.Annotation.fromObject(object.annotation[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a Constructor message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof org.jetbrains.kotlin.metadata.Constructor
                     * @static
                     * @param {org.jetbrains.kotlin.metadata.Constructor} message Constructor
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Constructor.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.arrays || options.defaults) {
                            object.valueParameter = [];
                            object.annotation = [];
                            object.versionRequirement = [];
                            object.compilerPluginData = [];
                        }
                        if (options.defaults)
                            object.flags = 6;
                        if (message.flags != null && message.hasOwnProperty("flags"))
                            object.flags = message.flags;
                        if (message.valueParameter && message.valueParameter.length) {
                            object.valueParameter = [];
                            for (let j = 0; j < message.valueParameter.length; ++j)
                                object.valueParameter[j] = $root.org.jetbrains.kotlin.metadata.ValueParameter.toObject(message.valueParameter[j], options);
                        }
                        if (message.annotation && message.annotation.length) {
                            object.annotation = [];
                            for (let j = 0; j < message.annotation.length; ++j)
                                object.annotation[j] = $root.org.jetbrains.kotlin.metadata.Annotation.toObject(message.annotation[j], options);
                        }
                        if (message.versionRequirement && message.versionRequirement.length) {
                            object.versionRequirement = [];
                            for (let j = 0; j < message.versionRequirement.length; ++j)
                                object.versionRequirement[j] = message.versionRequirement[j];
                        }
                        if (message.compilerPluginData && message.compilerPluginData.length) {
                            object.compilerPluginData = [];
                            for (let j = 0; j < message.compilerPluginData.length; ++j)
                                object.compilerPluginData[j] = $root.org.jetbrains.kotlin.metadata.CompilerPluginData.toObject(message.compilerPluginData[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this Constructor to JSON.
                     * @function toJSON
                     * @memberof org.jetbrains.kotlin.metadata.Constructor
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Constructor.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for Constructor
                     * @function getTypeUrl
                     * @memberof org.jetbrains.kotlin.metadata.Constructor
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Constructor.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/org.jetbrains.kotlin.metadata.Constructor";
                    };

                    return Constructor;
                })();

                metadata.Function = (function() {

                    /**
                     * Properties of a Function.
                     * @memberof org.jetbrains.kotlin.metadata
                     * @interface IFunction
                     * @property {number|null} [flags] Function flags
                     * @property {number|null} [oldFlags] Function oldFlags
                     * @property {number} name Function name
                     * @property {org.jetbrains.kotlin.metadata.IType|null} [returnType] Function returnType
                     * @property {number|null} [returnTypeId] Function returnTypeId
                     * @property {Array.<org.jetbrains.kotlin.metadata.ITypeParameter>|null} [typeParameter] Function typeParameter
                     * @property {org.jetbrains.kotlin.metadata.IType|null} [receiverType] Function receiverType
                     * @property {number|null} [receiverTypeId] Function receiverTypeId
                     * @property {Array.<org.jetbrains.kotlin.metadata.IType>|null} [contextReceiverType] Function contextReceiverType
                     * @property {Array.<number>|null} [contextReceiverTypeId] Function contextReceiverTypeId
                     * @property {Array.<org.jetbrains.kotlin.metadata.IValueParameter>|null} [contextParameter] Function contextParameter
                     * @property {Array.<org.jetbrains.kotlin.metadata.IValueParameter>|null} [valueParameter] Function valueParameter
                     * @property {org.jetbrains.kotlin.metadata.ITypeTable|null} [typeTable] Function typeTable
                     * @property {Array.<number>|null} [versionRequirement] Function versionRequirement
                     * @property {org.jetbrains.kotlin.metadata.IContract|null} [contract] Function contract
                     * @property {Array.<org.jetbrains.kotlin.metadata.ICompilerPluginData>|null} [compilerPluginData] Function compilerPluginData
                     * @property {Array.<org.jetbrains.kotlin.metadata.IAnnotation>|null} [annotation] Function annotation
                     * @property {Array.<org.jetbrains.kotlin.metadata.IAnnotation>|null} [extensionReceiverAnnotation] Function extensionReceiverAnnotation
                     */

                    /**
                     * Constructs a new Function.
                     * @memberof org.jetbrains.kotlin.metadata
                     * @classdesc Represents a Function.
                     * @implements IFunction
                     * @constructor
                     * @param {org.jetbrains.kotlin.metadata.IFunction=} [properties] Properties to set
                     */
                    function Function(properties) {
                        this.typeParameter = [];
                        this.contextReceiverType = [];
                        this.contextReceiverTypeId = [];
                        this.contextParameter = [];
                        this.valueParameter = [];
                        this.versionRequirement = [];
                        this.compilerPluginData = [];
                        this.annotation = [];
                        this.extensionReceiverAnnotation = [];
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Function flags.
                     * @member {number} flags
                     * @memberof org.jetbrains.kotlin.metadata.Function
                     * @instance
                     */
                    Function.prototype.flags = 6;

                    /**
                     * Function oldFlags.
                     * @member {number} oldFlags
                     * @memberof org.jetbrains.kotlin.metadata.Function
                     * @instance
                     */
                    Function.prototype.oldFlags = 6;

                    /**
                     * Function name.
                     * @member {number} name
                     * @memberof org.jetbrains.kotlin.metadata.Function
                     * @instance
                     */
                    Function.prototype.name = 0;

                    /**
                     * Function returnType.
                     * @member {org.jetbrains.kotlin.metadata.IType|null|undefined} returnType
                     * @memberof org.jetbrains.kotlin.metadata.Function
                     * @instance
                     */
                    Function.prototype.returnType = null;

                    /**
                     * Function returnTypeId.
                     * @member {number} returnTypeId
                     * @memberof org.jetbrains.kotlin.metadata.Function
                     * @instance
                     */
                    Function.prototype.returnTypeId = 0;

                    /**
                     * Function typeParameter.
                     * @member {Array.<org.jetbrains.kotlin.metadata.ITypeParameter>} typeParameter
                     * @memberof org.jetbrains.kotlin.metadata.Function
                     * @instance
                     */
                    Function.prototype.typeParameter = $util.emptyArray;

                    /**
                     * Function receiverType.
                     * @member {org.jetbrains.kotlin.metadata.IType|null|undefined} receiverType
                     * @memberof org.jetbrains.kotlin.metadata.Function
                     * @instance
                     */
                    Function.prototype.receiverType = null;

                    /**
                     * Function receiverTypeId.
                     * @member {number} receiverTypeId
                     * @memberof org.jetbrains.kotlin.metadata.Function
                     * @instance
                     */
                    Function.prototype.receiverTypeId = 0;

                    /**
                     * Function contextReceiverType.
                     * @member {Array.<org.jetbrains.kotlin.metadata.IType>} contextReceiverType
                     * @memberof org.jetbrains.kotlin.metadata.Function
                     * @instance
                     */
                    Function.prototype.contextReceiverType = $util.emptyArray;

                    /**
                     * Function contextReceiverTypeId.
                     * @member {Array.<number>} contextReceiverTypeId
                     * @memberof org.jetbrains.kotlin.metadata.Function
                     * @instance
                     */
                    Function.prototype.contextReceiverTypeId = $util.emptyArray;

                    /**
                     * Function contextParameter.
                     * @member {Array.<org.jetbrains.kotlin.metadata.IValueParameter>} contextParameter
                     * @memberof org.jetbrains.kotlin.metadata.Function
                     * @instance
                     */
                    Function.prototype.contextParameter = $util.emptyArray;

                    /**
                     * Function valueParameter.
                     * @member {Array.<org.jetbrains.kotlin.metadata.IValueParameter>} valueParameter
                     * @memberof org.jetbrains.kotlin.metadata.Function
                     * @instance
                     */
                    Function.prototype.valueParameter = $util.emptyArray;

                    /**
                     * Function typeTable.
                     * @member {org.jetbrains.kotlin.metadata.ITypeTable|null|undefined} typeTable
                     * @memberof org.jetbrains.kotlin.metadata.Function
                     * @instance
                     */
                    Function.prototype.typeTable = null;

                    /**
                     * Function versionRequirement.
                     * @member {Array.<number>} versionRequirement
                     * @memberof org.jetbrains.kotlin.metadata.Function
                     * @instance
                     */
                    Function.prototype.versionRequirement = $util.emptyArray;

                    /**
                     * Function contract.
                     * @member {org.jetbrains.kotlin.metadata.IContract|null|undefined} contract
                     * @memberof org.jetbrains.kotlin.metadata.Function
                     * @instance
                     */
                    Function.prototype.contract = null;

                    /**
                     * Function compilerPluginData.
                     * @member {Array.<org.jetbrains.kotlin.metadata.ICompilerPluginData>} compilerPluginData
                     * @memberof org.jetbrains.kotlin.metadata.Function
                     * @instance
                     */
                    Function.prototype.compilerPluginData = $util.emptyArray;

                    /**
                     * Function annotation.
                     * @member {Array.<org.jetbrains.kotlin.metadata.IAnnotation>} annotation
                     * @memberof org.jetbrains.kotlin.metadata.Function
                     * @instance
                     */
                    Function.prototype.annotation = $util.emptyArray;

                    /**
                     * Function extensionReceiverAnnotation.
                     * @member {Array.<org.jetbrains.kotlin.metadata.IAnnotation>} extensionReceiverAnnotation
                     * @memberof org.jetbrains.kotlin.metadata.Function
                     * @instance
                     */
                    Function.prototype.extensionReceiverAnnotation = $util.emptyArray;

                    /**
                     * Decodes a Function message from the specified reader or buffer.
                     * @function decode
                     * @memberof org.jetbrains.kotlin.metadata.Function
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {org.jetbrains.kotlin.metadata.Function} Function
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Function.decode = function decode(reader, length, error) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.org.jetbrains.kotlin.metadata.Function();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            case 9: {
                                    message.flags = reader.int32();
                                    break;
                                }
                            case 1: {
                                    message.oldFlags = reader.int32();
                                    break;
                                }
                            case 2: {
                                    message.name = reader.int32();
                                    break;
                                }
                            case 3: {
                                    message.returnType = $root.org.jetbrains.kotlin.metadata.Type.decode(reader, reader.uint32());
                                    break;
                                }
                            case 7: {
                                    message.returnTypeId = reader.int32();
                                    break;
                                }
                            case 4: {
                                    if (!(message.typeParameter && message.typeParameter.length))
                                        message.typeParameter = [];
                                    message.typeParameter.push($root.org.jetbrains.kotlin.metadata.TypeParameter.decode(reader, reader.uint32()));
                                    break;
                                }
                            case 5: {
                                    message.receiverType = $root.org.jetbrains.kotlin.metadata.Type.decode(reader, reader.uint32());
                                    break;
                                }
                            case 8: {
                                    message.receiverTypeId = reader.int32();
                                    break;
                                }
                            case 10: {
                                    if (!(message.contextReceiverType && message.contextReceiverType.length))
                                        message.contextReceiverType = [];
                                    message.contextReceiverType.push($root.org.jetbrains.kotlin.metadata.Type.decode(reader, reader.uint32()));
                                    break;
                                }
                            case 11: {
                                    if (!(message.contextReceiverTypeId && message.contextReceiverTypeId.length))
                                        message.contextReceiverTypeId = [];
                                    if ((tag & 7) === 2) {
                                        let end2 = reader.uint32() + reader.pos;
                                        while (reader.pos < end2)
                                            message.contextReceiverTypeId.push(reader.int32());
                                    } else
                                        message.contextReceiverTypeId.push(reader.int32());
                                    break;
                                }
                            case 13: {
                                    if (!(message.contextParameter && message.contextParameter.length))
                                        message.contextParameter = [];
                                    message.contextParameter.push($root.org.jetbrains.kotlin.metadata.ValueParameter.decode(reader, reader.uint32()));
                                    break;
                                }
                            case 6: {
                                    if (!(message.valueParameter && message.valueParameter.length))
                                        message.valueParameter = [];
                                    message.valueParameter.push($root.org.jetbrains.kotlin.metadata.ValueParameter.decode(reader, reader.uint32()));
                                    break;
                                }
                            case 30: {
                                    message.typeTable = $root.org.jetbrains.kotlin.metadata.TypeTable.decode(reader, reader.uint32());
                                    break;
                                }
                            case 31: {
                                    if (!(message.versionRequirement && message.versionRequirement.length))
                                        message.versionRequirement = [];
                                    if ((tag & 7) === 2) {
                                        let end2 = reader.uint32() + reader.pos;
                                        while (reader.pos < end2)
                                            message.versionRequirement.push(reader.int32());
                                    } else
                                        message.versionRequirement.push(reader.int32());
                                    break;
                                }
                            case 32: {
                                    message.contract = $root.org.jetbrains.kotlin.metadata.Contract.decode(reader, reader.uint32());
                                    break;
                                }
                            case 33: {
                                    if (!(message.compilerPluginData && message.compilerPluginData.length))
                                        message.compilerPluginData = [];
                                    message.compilerPluginData.push($root.org.jetbrains.kotlin.metadata.CompilerPluginData.decode(reader, reader.uint32()));
                                    break;
                                }
                            case 12: {
                                    if (!(message.annotation && message.annotation.length))
                                        message.annotation = [];
                                    message.annotation.push($root.org.jetbrains.kotlin.metadata.Annotation.decode(reader, reader.uint32()));
                                    break;
                                }
                            case 34: {
                                    if (!(message.extensionReceiverAnnotation && message.extensionReceiverAnnotation.length))
                                        message.extensionReceiverAnnotation = [];
                                    message.extensionReceiverAnnotation.push($root.org.jetbrains.kotlin.metadata.Annotation.decode(reader, reader.uint32()));
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        if (!message.hasOwnProperty("name"))
                            throw $util.ProtocolError("missing required 'name'", { instance: message });
                        return message;
                    };

                    /**
                     * Decodes a Function message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof org.jetbrains.kotlin.metadata.Function
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {org.jetbrains.kotlin.metadata.Function} Function
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Function.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Creates a Function message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof org.jetbrains.kotlin.metadata.Function
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {org.jetbrains.kotlin.metadata.Function} Function
                     */
                    Function.fromObject = function fromObject(object) {
                        if (object instanceof $root.org.jetbrains.kotlin.metadata.Function)
                            return object;
                        let message = new $root.org.jetbrains.kotlin.metadata.Function();
                        if (object.flags != null)
                            message.flags = object.flags | 0;
                        if (object.oldFlags != null)
                            message.oldFlags = object.oldFlags | 0;
                        if (object.name != null)
                            message.name = object.name | 0;
                        if (object.returnType != null) {
                            if (typeof object.returnType !== "object")
                                throw TypeError(".org.jetbrains.kotlin.metadata.Function.returnType: object expected");
                            message.returnType = $root.org.jetbrains.kotlin.metadata.Type.fromObject(object.returnType);
                        }
                        if (object.returnTypeId != null)
                            message.returnTypeId = object.returnTypeId | 0;
                        if (object.typeParameter) {
                            if (!Array.isArray(object.typeParameter))
                                throw TypeError(".org.jetbrains.kotlin.metadata.Function.typeParameter: array expected");
                            message.typeParameter = [];
                            for (let i = 0; i < object.typeParameter.length; ++i) {
                                if (typeof object.typeParameter[i] !== "object")
                                    throw TypeError(".org.jetbrains.kotlin.metadata.Function.typeParameter: object expected");
                                message.typeParameter[i] = $root.org.jetbrains.kotlin.metadata.TypeParameter.fromObject(object.typeParameter[i]);
                            }
                        }
                        if (object.receiverType != null) {
                            if (typeof object.receiverType !== "object")
                                throw TypeError(".org.jetbrains.kotlin.metadata.Function.receiverType: object expected");
                            message.receiverType = $root.org.jetbrains.kotlin.metadata.Type.fromObject(object.receiverType);
                        }
                        if (object.receiverTypeId != null)
                            message.receiverTypeId = object.receiverTypeId | 0;
                        if (object.contextReceiverType) {
                            if (!Array.isArray(object.contextReceiverType))
                                throw TypeError(".org.jetbrains.kotlin.metadata.Function.contextReceiverType: array expected");
                            message.contextReceiverType = [];
                            for (let i = 0; i < object.contextReceiverType.length; ++i) {
                                if (typeof object.contextReceiverType[i] !== "object")
                                    throw TypeError(".org.jetbrains.kotlin.metadata.Function.contextReceiverType: object expected");
                                message.contextReceiverType[i] = $root.org.jetbrains.kotlin.metadata.Type.fromObject(object.contextReceiverType[i]);
                            }
                        }
                        if (object.contextReceiverTypeId) {
                            if (!Array.isArray(object.contextReceiverTypeId))
                                throw TypeError(".org.jetbrains.kotlin.metadata.Function.contextReceiverTypeId: array expected");
                            message.contextReceiverTypeId = [];
                            for (let i = 0; i < object.contextReceiverTypeId.length; ++i)
                                message.contextReceiverTypeId[i] = object.contextReceiverTypeId[i] | 0;
                        }
                        if (object.contextParameter) {
                            if (!Array.isArray(object.contextParameter))
                                throw TypeError(".org.jetbrains.kotlin.metadata.Function.contextParameter: array expected");
                            message.contextParameter = [];
                            for (let i = 0; i < object.contextParameter.length; ++i) {
                                if (typeof object.contextParameter[i] !== "object")
                                    throw TypeError(".org.jetbrains.kotlin.metadata.Function.contextParameter: object expected");
                                message.contextParameter[i] = $root.org.jetbrains.kotlin.metadata.ValueParameter.fromObject(object.contextParameter[i]);
                            }
                        }
                        if (object.valueParameter) {
                            if (!Array.isArray(object.valueParameter))
                                throw TypeError(".org.jetbrains.kotlin.metadata.Function.valueParameter: array expected");
                            message.valueParameter = [];
                            for (let i = 0; i < object.valueParameter.length; ++i) {
                                if (typeof object.valueParameter[i] !== "object")
                                    throw TypeError(".org.jetbrains.kotlin.metadata.Function.valueParameter: object expected");
                                message.valueParameter[i] = $root.org.jetbrains.kotlin.metadata.ValueParameter.fromObject(object.valueParameter[i]);
                            }
                        }
                        if (object.typeTable != null) {
                            if (typeof object.typeTable !== "object")
                                throw TypeError(".org.jetbrains.kotlin.metadata.Function.typeTable: object expected");
                            message.typeTable = $root.org.jetbrains.kotlin.metadata.TypeTable.fromObject(object.typeTable);
                        }
                        if (object.versionRequirement) {
                            if (!Array.isArray(object.versionRequirement))
                                throw TypeError(".org.jetbrains.kotlin.metadata.Function.versionRequirement: array expected");
                            message.versionRequirement = [];
                            for (let i = 0; i < object.versionRequirement.length; ++i)
                                message.versionRequirement[i] = object.versionRequirement[i] | 0;
                        }
                        if (object.contract != null) {
                            if (typeof object.contract !== "object")
                                throw TypeError(".org.jetbrains.kotlin.metadata.Function.contract: object expected");
                            message.contract = $root.org.jetbrains.kotlin.metadata.Contract.fromObject(object.contract);
                        }
                        if (object.compilerPluginData) {
                            if (!Array.isArray(object.compilerPluginData))
                                throw TypeError(".org.jetbrains.kotlin.metadata.Function.compilerPluginData: array expected");
                            message.compilerPluginData = [];
                            for (let i = 0; i < object.compilerPluginData.length; ++i) {
                                if (typeof object.compilerPluginData[i] !== "object")
                                    throw TypeError(".org.jetbrains.kotlin.metadata.Function.compilerPluginData: object expected");
                                message.compilerPluginData[i] = $root.org.jetbrains.kotlin.metadata.CompilerPluginData.fromObject(object.compilerPluginData[i]);
                            }
                        }
                        if (object.annotation) {
                            if (!Array.isArray(object.annotation))
                                throw TypeError(".org.jetbrains.kotlin.metadata.Function.annotation: array expected");
                            message.annotation = [];
                            for (let i = 0; i < object.annotation.length; ++i) {
                                if (typeof object.annotation[i] !== "object")
                                    throw TypeError(".org.jetbrains.kotlin.metadata.Function.annotation: object expected");
                                message.annotation[i] = $root.org.jetbrains.kotlin.metadata.Annotation.fromObject(object.annotation[i]);
                            }
                        }
                        if (object.extensionReceiverAnnotation) {
                            if (!Array.isArray(object.extensionReceiverAnnotation))
                                throw TypeError(".org.jetbrains.kotlin.metadata.Function.extensionReceiverAnnotation: array expected");
                            message.extensionReceiverAnnotation = [];
                            for (let i = 0; i < object.extensionReceiverAnnotation.length; ++i) {
                                if (typeof object.extensionReceiverAnnotation[i] !== "object")
                                    throw TypeError(".org.jetbrains.kotlin.metadata.Function.extensionReceiverAnnotation: object expected");
                                message.extensionReceiverAnnotation[i] = $root.org.jetbrains.kotlin.metadata.Annotation.fromObject(object.extensionReceiverAnnotation[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a Function message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof org.jetbrains.kotlin.metadata.Function
                     * @static
                     * @param {org.jetbrains.kotlin.metadata.Function} message Function
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Function.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.arrays || options.defaults) {
                            object.typeParameter = [];
                            object.valueParameter = [];
                            object.contextReceiverType = [];
                            object.contextReceiverTypeId = [];
                            object.annotation = [];
                            object.contextParameter = [];
                            object.versionRequirement = [];
                            object.compilerPluginData = [];
                            object.extensionReceiverAnnotation = [];
                        }
                        if (options.defaults) {
                            object.oldFlags = 6;
                            object.name = 0;
                            object.returnType = null;
                            object.receiverType = null;
                            object.returnTypeId = 0;
                            object.receiverTypeId = 0;
                            object.flags = 6;
                            object.typeTable = null;
                            object.contract = null;
                        }
                        if (message.oldFlags != null && message.hasOwnProperty("oldFlags"))
                            object.oldFlags = message.oldFlags;
                        if (message.name != null && message.hasOwnProperty("name"))
                            object.name = message.name;
                        if (message.returnType != null && message.hasOwnProperty("returnType"))
                            object.returnType = $root.org.jetbrains.kotlin.metadata.Type.toObject(message.returnType, options);
                        if (message.typeParameter && message.typeParameter.length) {
                            object.typeParameter = [];
                            for (let j = 0; j < message.typeParameter.length; ++j)
                                object.typeParameter[j] = $root.org.jetbrains.kotlin.metadata.TypeParameter.toObject(message.typeParameter[j], options);
                        }
                        if (message.receiverType != null && message.hasOwnProperty("receiverType"))
                            object.receiverType = $root.org.jetbrains.kotlin.metadata.Type.toObject(message.receiverType, options);
                        if (message.valueParameter && message.valueParameter.length) {
                            object.valueParameter = [];
                            for (let j = 0; j < message.valueParameter.length; ++j)
                                object.valueParameter[j] = $root.org.jetbrains.kotlin.metadata.ValueParameter.toObject(message.valueParameter[j], options);
                        }
                        if (message.returnTypeId != null && message.hasOwnProperty("returnTypeId"))
                            object.returnTypeId = message.returnTypeId;
                        if (message.receiverTypeId != null && message.hasOwnProperty("receiverTypeId"))
                            object.receiverTypeId = message.receiverTypeId;
                        if (message.flags != null && message.hasOwnProperty("flags"))
                            object.flags = message.flags;
                        if (message.contextReceiverType && message.contextReceiverType.length) {
                            object.contextReceiverType = [];
                            for (let j = 0; j < message.contextReceiverType.length; ++j)
                                object.contextReceiverType[j] = $root.org.jetbrains.kotlin.metadata.Type.toObject(message.contextReceiverType[j], options);
                        }
                        if (message.contextReceiverTypeId && message.contextReceiverTypeId.length) {
                            object.contextReceiverTypeId = [];
                            for (let j = 0; j < message.contextReceiverTypeId.length; ++j)
                                object.contextReceiverTypeId[j] = message.contextReceiverTypeId[j];
                        }
                        if (message.annotation && message.annotation.length) {
                            object.annotation = [];
                            for (let j = 0; j < message.annotation.length; ++j)
                                object.annotation[j] = $root.org.jetbrains.kotlin.metadata.Annotation.toObject(message.annotation[j], options);
                        }
                        if (message.contextParameter && message.contextParameter.length) {
                            object.contextParameter = [];
                            for (let j = 0; j < message.contextParameter.length; ++j)
                                object.contextParameter[j] = $root.org.jetbrains.kotlin.metadata.ValueParameter.toObject(message.contextParameter[j], options);
                        }
                        if (message.typeTable != null && message.hasOwnProperty("typeTable"))
                            object.typeTable = $root.org.jetbrains.kotlin.metadata.TypeTable.toObject(message.typeTable, options);
                        if (message.versionRequirement && message.versionRequirement.length) {
                            object.versionRequirement = [];
                            for (let j = 0; j < message.versionRequirement.length; ++j)
                                object.versionRequirement[j] = message.versionRequirement[j];
                        }
                        if (message.contract != null && message.hasOwnProperty("contract"))
                            object.contract = $root.org.jetbrains.kotlin.metadata.Contract.toObject(message.contract, options);
                        if (message.compilerPluginData && message.compilerPluginData.length) {
                            object.compilerPluginData = [];
                            for (let j = 0; j < message.compilerPluginData.length; ++j)
                                object.compilerPluginData[j] = $root.org.jetbrains.kotlin.metadata.CompilerPluginData.toObject(message.compilerPluginData[j], options);
                        }
                        if (message.extensionReceiverAnnotation && message.extensionReceiverAnnotation.length) {
                            object.extensionReceiverAnnotation = [];
                            for (let j = 0; j < message.extensionReceiverAnnotation.length; ++j)
                                object.extensionReceiverAnnotation[j] = $root.org.jetbrains.kotlin.metadata.Annotation.toObject(message.extensionReceiverAnnotation[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this Function to JSON.
                     * @function toJSON
                     * @memberof org.jetbrains.kotlin.metadata.Function
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Function.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for Function
                     * @function getTypeUrl
                     * @memberof org.jetbrains.kotlin.metadata.Function
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Function.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/org.jetbrains.kotlin.metadata.Function";
                    };

                    return Function;
                })();

                metadata.Property = (function() {

                    /**
                     * Properties of a Property.
                     * @memberof org.jetbrains.kotlin.metadata
                     * @interface IProperty
                     * @property {number|null} [flags] Property flags
                     * @property {number|null} [oldFlags] Property oldFlags
                     * @property {number} name Property name
                     * @property {org.jetbrains.kotlin.metadata.IType|null} [returnType] Property returnType
                     * @property {number|null} [returnTypeId] Property returnTypeId
                     * @property {Array.<org.jetbrains.kotlin.metadata.ITypeParameter>|null} [typeParameter] Property typeParameter
                     * @property {org.jetbrains.kotlin.metadata.IType|null} [receiverType] Property receiverType
                     * @property {number|null} [receiverTypeId] Property receiverTypeId
                     * @property {Array.<org.jetbrains.kotlin.metadata.IType>|null} [contextReceiverType] Property contextReceiverType
                     * @property {Array.<number>|null} [contextReceiverTypeId] Property contextReceiverTypeId
                     * @property {Array.<org.jetbrains.kotlin.metadata.IValueParameter>|null} [contextParameter] Property contextParameter
                     * @property {org.jetbrains.kotlin.metadata.IValueParameter|null} [setterValueParameter] Property setterValueParameter
                     * @property {number|null} [getterFlags] Property getterFlags
                     * @property {number|null} [setterFlags] Property setterFlags
                     * @property {Array.<number>|null} [versionRequirement] Property versionRequirement
                     * @property {Array.<org.jetbrains.kotlin.metadata.ICompilerPluginData>|null} [compilerPluginData] Property compilerPluginData
                     * @property {Array.<org.jetbrains.kotlin.metadata.IAnnotation>|null} [annotation] Property annotation
                     * @property {Array.<org.jetbrains.kotlin.metadata.IAnnotation>|null} [getterAnnotation] Property getterAnnotation
                     * @property {Array.<org.jetbrains.kotlin.metadata.IAnnotation>|null} [setterAnnotation] Property setterAnnotation
                     * @property {Array.<org.jetbrains.kotlin.metadata.IAnnotation>|null} [extensionReceiverAnnotation] Property extensionReceiverAnnotation
                     * @property {Array.<org.jetbrains.kotlin.metadata.IAnnotation>|null} [backingFieldAnnotation] Property backingFieldAnnotation
                     * @property {Array.<org.jetbrains.kotlin.metadata.IAnnotation>|null} [delegateFieldAnnotation] Property delegateFieldAnnotation
                     * @property {org.jetbrains.kotlin.metadata.IContract|null} [getterContract] Property getterContract
                     * @property {org.jetbrains.kotlin.metadata.IContract|null} [setterContract] Property setterContract
                     */

                    /**
                     * Constructs a new Property.
                     * @memberof org.jetbrains.kotlin.metadata
                     * @classdesc Represents a Property.
                     * @implements IProperty
                     * @constructor
                     * @param {org.jetbrains.kotlin.metadata.IProperty=} [properties] Properties to set
                     */
                    function Property(properties) {
                        this.typeParameter = [];
                        this.contextReceiverType = [];
                        this.contextReceiverTypeId = [];
                        this.contextParameter = [];
                        this.versionRequirement = [];
                        this.compilerPluginData = [];
                        this.annotation = [];
                        this.getterAnnotation = [];
                        this.setterAnnotation = [];
                        this.extensionReceiverAnnotation = [];
                        this.backingFieldAnnotation = [];
                        this.delegateFieldAnnotation = [];
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Property flags.
                     * @member {number} flags
                     * @memberof org.jetbrains.kotlin.metadata.Property
                     * @instance
                     */
                    Property.prototype.flags = 518;

                    /**
                     * Property oldFlags.
                     * @member {number} oldFlags
                     * @memberof org.jetbrains.kotlin.metadata.Property
                     * @instance
                     */
                    Property.prototype.oldFlags = 2054;

                    /**
                     * Property name.
                     * @member {number} name
                     * @memberof org.jetbrains.kotlin.metadata.Property
                     * @instance
                     */
                    Property.prototype.name = 0;

                    /**
                     * Property returnType.
                     * @member {org.jetbrains.kotlin.metadata.IType|null|undefined} returnType
                     * @memberof org.jetbrains.kotlin.metadata.Property
                     * @instance
                     */
                    Property.prototype.returnType = null;

                    /**
                     * Property returnTypeId.
                     * @member {number} returnTypeId
                     * @memberof org.jetbrains.kotlin.metadata.Property
                     * @instance
                     */
                    Property.prototype.returnTypeId = 0;

                    /**
                     * Property typeParameter.
                     * @member {Array.<org.jetbrains.kotlin.metadata.ITypeParameter>} typeParameter
                     * @memberof org.jetbrains.kotlin.metadata.Property
                     * @instance
                     */
                    Property.prototype.typeParameter = $util.emptyArray;

                    /**
                     * Property receiverType.
                     * @member {org.jetbrains.kotlin.metadata.IType|null|undefined} receiverType
                     * @memberof org.jetbrains.kotlin.metadata.Property
                     * @instance
                     */
                    Property.prototype.receiverType = null;

                    /**
                     * Property receiverTypeId.
                     * @member {number} receiverTypeId
                     * @memberof org.jetbrains.kotlin.metadata.Property
                     * @instance
                     */
                    Property.prototype.receiverTypeId = 0;

                    /**
                     * Property contextReceiverType.
                     * @member {Array.<org.jetbrains.kotlin.metadata.IType>} contextReceiverType
                     * @memberof org.jetbrains.kotlin.metadata.Property
                     * @instance
                     */
                    Property.prototype.contextReceiverType = $util.emptyArray;

                    /**
                     * Property contextReceiverTypeId.
                     * @member {Array.<number>} contextReceiverTypeId
                     * @memberof org.jetbrains.kotlin.metadata.Property
                     * @instance
                     */
                    Property.prototype.contextReceiverTypeId = $util.emptyArray;

                    /**
                     * Property contextParameter.
                     * @member {Array.<org.jetbrains.kotlin.metadata.IValueParameter>} contextParameter
                     * @memberof org.jetbrains.kotlin.metadata.Property
                     * @instance
                     */
                    Property.prototype.contextParameter = $util.emptyArray;

                    /**
                     * Property setterValueParameter.
                     * @member {org.jetbrains.kotlin.metadata.IValueParameter|null|undefined} setterValueParameter
                     * @memberof org.jetbrains.kotlin.metadata.Property
                     * @instance
                     */
                    Property.prototype.setterValueParameter = null;

                    /**
                     * Property getterFlags.
                     * @member {number} getterFlags
                     * @memberof org.jetbrains.kotlin.metadata.Property
                     * @instance
                     */
                    Property.prototype.getterFlags = 0;

                    /**
                     * Property setterFlags.
                     * @member {number} setterFlags
                     * @memberof org.jetbrains.kotlin.metadata.Property
                     * @instance
                     */
                    Property.prototype.setterFlags = 0;

                    /**
                     * Property versionRequirement.
                     * @member {Array.<number>} versionRequirement
                     * @memberof org.jetbrains.kotlin.metadata.Property
                     * @instance
                     */
                    Property.prototype.versionRequirement = $util.emptyArray;

                    /**
                     * Property compilerPluginData.
                     * @member {Array.<org.jetbrains.kotlin.metadata.ICompilerPluginData>} compilerPluginData
                     * @memberof org.jetbrains.kotlin.metadata.Property
                     * @instance
                     */
                    Property.prototype.compilerPluginData = $util.emptyArray;

                    /**
                     * Property annotation.
                     * @member {Array.<org.jetbrains.kotlin.metadata.IAnnotation>} annotation
                     * @memberof org.jetbrains.kotlin.metadata.Property
                     * @instance
                     */
                    Property.prototype.annotation = $util.emptyArray;

                    /**
                     * Property getterAnnotation.
                     * @member {Array.<org.jetbrains.kotlin.metadata.IAnnotation>} getterAnnotation
                     * @memberof org.jetbrains.kotlin.metadata.Property
                     * @instance
                     */
                    Property.prototype.getterAnnotation = $util.emptyArray;

                    /**
                     * Property setterAnnotation.
                     * @member {Array.<org.jetbrains.kotlin.metadata.IAnnotation>} setterAnnotation
                     * @memberof org.jetbrains.kotlin.metadata.Property
                     * @instance
                     */
                    Property.prototype.setterAnnotation = $util.emptyArray;

                    /**
                     * Property extensionReceiverAnnotation.
                     * @member {Array.<org.jetbrains.kotlin.metadata.IAnnotation>} extensionReceiverAnnotation
                     * @memberof org.jetbrains.kotlin.metadata.Property
                     * @instance
                     */
                    Property.prototype.extensionReceiverAnnotation = $util.emptyArray;

                    /**
                     * Property backingFieldAnnotation.
                     * @member {Array.<org.jetbrains.kotlin.metadata.IAnnotation>} backingFieldAnnotation
                     * @memberof org.jetbrains.kotlin.metadata.Property
                     * @instance
                     */
                    Property.prototype.backingFieldAnnotation = $util.emptyArray;

                    /**
                     * Property delegateFieldAnnotation.
                     * @member {Array.<org.jetbrains.kotlin.metadata.IAnnotation>} delegateFieldAnnotation
                     * @memberof org.jetbrains.kotlin.metadata.Property
                     * @instance
                     */
                    Property.prototype.delegateFieldAnnotation = $util.emptyArray;

                    /**
                     * Property getterContract.
                     * @member {org.jetbrains.kotlin.metadata.IContract|null|undefined} getterContract
                     * @memberof org.jetbrains.kotlin.metadata.Property
                     * @instance
                     */
                    Property.prototype.getterContract = null;

                    /**
                     * Property setterContract.
                     * @member {org.jetbrains.kotlin.metadata.IContract|null|undefined} setterContract
                     * @memberof org.jetbrains.kotlin.metadata.Property
                     * @instance
                     */
                    Property.prototype.setterContract = null;

                    /**
                     * Decodes a Property message from the specified reader or buffer.
                     * @function decode
                     * @memberof org.jetbrains.kotlin.metadata.Property
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {org.jetbrains.kotlin.metadata.Property} Property
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Property.decode = function decode(reader, length, error) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.org.jetbrains.kotlin.metadata.Property();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            case 11: {
                                    message.flags = reader.int32();
                                    break;
                                }
                            case 1: {
                                    message.oldFlags = reader.int32();
                                    break;
                                }
                            case 2: {
                                    message.name = reader.int32();
                                    break;
                                }
                            case 3: {
                                    message.returnType = $root.org.jetbrains.kotlin.metadata.Type.decode(reader, reader.uint32());
                                    break;
                                }
                            case 9: {
                                    message.returnTypeId = reader.int32();
                                    break;
                                }
                            case 4: {
                                    if (!(message.typeParameter && message.typeParameter.length))
                                        message.typeParameter = [];
                                    message.typeParameter.push($root.org.jetbrains.kotlin.metadata.TypeParameter.decode(reader, reader.uint32()));
                                    break;
                                }
                            case 5: {
                                    message.receiverType = $root.org.jetbrains.kotlin.metadata.Type.decode(reader, reader.uint32());
                                    break;
                                }
                            case 10: {
                                    message.receiverTypeId = reader.int32();
                                    break;
                                }
                            case 12: {
                                    if (!(message.contextReceiverType && message.contextReceiverType.length))
                                        message.contextReceiverType = [];
                                    message.contextReceiverType.push($root.org.jetbrains.kotlin.metadata.Type.decode(reader, reader.uint32()));
                                    break;
                                }
                            case 13: {
                                    if (!(message.contextReceiverTypeId && message.contextReceiverTypeId.length))
                                        message.contextReceiverTypeId = [];
                                    if ((tag & 7) === 2) {
                                        let end2 = reader.uint32() + reader.pos;
                                        while (reader.pos < end2)
                                            message.contextReceiverTypeId.push(reader.int32());
                                    } else
                                        message.contextReceiverTypeId.push(reader.int32());
                                    break;
                                }
                            case 17: {
                                    if (!(message.contextParameter && message.contextParameter.length))
                                        message.contextParameter = [];
                                    message.contextParameter.push($root.org.jetbrains.kotlin.metadata.ValueParameter.decode(reader, reader.uint32()));
                                    break;
                                }
                            case 6: {
                                    message.setterValueParameter = $root.org.jetbrains.kotlin.metadata.ValueParameter.decode(reader, reader.uint32());
                                    break;
                                }
                            case 7: {
                                    message.getterFlags = reader.int32();
                                    break;
                                }
                            case 8: {
                                    message.setterFlags = reader.int32();
                                    break;
                                }
                            case 31: {
                                    if (!(message.versionRequirement && message.versionRequirement.length))
                                        message.versionRequirement = [];
                                    if ((tag & 7) === 2) {
                                        let end2 = reader.uint32() + reader.pos;
                                        while (reader.pos < end2)
                                            message.versionRequirement.push(reader.int32());
                                    } else
                                        message.versionRequirement.push(reader.int32());
                                    break;
                                }
                            case 32: {
                                    if (!(message.compilerPluginData && message.compilerPluginData.length))
                                        message.compilerPluginData = [];
                                    message.compilerPluginData.push($root.org.jetbrains.kotlin.metadata.CompilerPluginData.decode(reader, reader.uint32()));
                                    break;
                                }
                            case 14: {
                                    if (!(message.annotation && message.annotation.length))
                                        message.annotation = [];
                                    message.annotation.push($root.org.jetbrains.kotlin.metadata.Annotation.decode(reader, reader.uint32()));
                                    break;
                                }
                            case 15: {
                                    if (!(message.getterAnnotation && message.getterAnnotation.length))
                                        message.getterAnnotation = [];
                                    message.getterAnnotation.push($root.org.jetbrains.kotlin.metadata.Annotation.decode(reader, reader.uint32()));
                                    break;
                                }
                            case 16: {
                                    if (!(message.setterAnnotation && message.setterAnnotation.length))
                                        message.setterAnnotation = [];
                                    message.setterAnnotation.push($root.org.jetbrains.kotlin.metadata.Annotation.decode(reader, reader.uint32()));
                                    break;
                                }
                            case 33: {
                                    if (!(message.extensionReceiverAnnotation && message.extensionReceiverAnnotation.length))
                                        message.extensionReceiverAnnotation = [];
                                    message.extensionReceiverAnnotation.push($root.org.jetbrains.kotlin.metadata.Annotation.decode(reader, reader.uint32()));
                                    break;
                                }
                            case 34: {
                                    if (!(message.backingFieldAnnotation && message.backingFieldAnnotation.length))
                                        message.backingFieldAnnotation = [];
                                    message.backingFieldAnnotation.push($root.org.jetbrains.kotlin.metadata.Annotation.decode(reader, reader.uint32()));
                                    break;
                                }
                            case 35: {
                                    if (!(message.delegateFieldAnnotation && message.delegateFieldAnnotation.length))
                                        message.delegateFieldAnnotation = [];
                                    message.delegateFieldAnnotation.push($root.org.jetbrains.kotlin.metadata.Annotation.decode(reader, reader.uint32()));
                                    break;
                                }
                            case 40: {
                                    message.getterContract = $root.org.jetbrains.kotlin.metadata.Contract.decode(reader, reader.uint32());
                                    break;
                                }
                            case 41: {
                                    message.setterContract = $root.org.jetbrains.kotlin.metadata.Contract.decode(reader, reader.uint32());
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        if (!message.hasOwnProperty("name"))
                            throw $util.ProtocolError("missing required 'name'", { instance: message });
                        return message;
                    };

                    /**
                     * Decodes a Property message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof org.jetbrains.kotlin.metadata.Property
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {org.jetbrains.kotlin.metadata.Property} Property
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Property.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Creates a Property message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof org.jetbrains.kotlin.metadata.Property
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {org.jetbrains.kotlin.metadata.Property} Property
                     */
                    Property.fromObject = function fromObject(object) {
                        if (object instanceof $root.org.jetbrains.kotlin.metadata.Property)
                            return object;
                        let message = new $root.org.jetbrains.kotlin.metadata.Property();
                        if (object.flags != null)
                            message.flags = object.flags | 0;
                        if (object.oldFlags != null)
                            message.oldFlags = object.oldFlags | 0;
                        if (object.name != null)
                            message.name = object.name | 0;
                        if (object.returnType != null) {
                            if (typeof object.returnType !== "object")
                                throw TypeError(".org.jetbrains.kotlin.metadata.Property.returnType: object expected");
                            message.returnType = $root.org.jetbrains.kotlin.metadata.Type.fromObject(object.returnType);
                        }
                        if (object.returnTypeId != null)
                            message.returnTypeId = object.returnTypeId | 0;
                        if (object.typeParameter) {
                            if (!Array.isArray(object.typeParameter))
                                throw TypeError(".org.jetbrains.kotlin.metadata.Property.typeParameter: array expected");
                            message.typeParameter = [];
                            for (let i = 0; i < object.typeParameter.length; ++i) {
                                if (typeof object.typeParameter[i] !== "object")
                                    throw TypeError(".org.jetbrains.kotlin.metadata.Property.typeParameter: object expected");
                                message.typeParameter[i] = $root.org.jetbrains.kotlin.metadata.TypeParameter.fromObject(object.typeParameter[i]);
                            }
                        }
                        if (object.receiverType != null) {
                            if (typeof object.receiverType !== "object")
                                throw TypeError(".org.jetbrains.kotlin.metadata.Property.receiverType: object expected");
                            message.receiverType = $root.org.jetbrains.kotlin.metadata.Type.fromObject(object.receiverType);
                        }
                        if (object.receiverTypeId != null)
                            message.receiverTypeId = object.receiverTypeId | 0;
                        if (object.contextReceiverType) {
                            if (!Array.isArray(object.contextReceiverType))
                                throw TypeError(".org.jetbrains.kotlin.metadata.Property.contextReceiverType: array expected");
                            message.contextReceiverType = [];
                            for (let i = 0; i < object.contextReceiverType.length; ++i) {
                                if (typeof object.contextReceiverType[i] !== "object")
                                    throw TypeError(".org.jetbrains.kotlin.metadata.Property.contextReceiverType: object expected");
                                message.contextReceiverType[i] = $root.org.jetbrains.kotlin.metadata.Type.fromObject(object.contextReceiverType[i]);
                            }
                        }
                        if (object.contextReceiverTypeId) {
                            if (!Array.isArray(object.contextReceiverTypeId))
                                throw TypeError(".org.jetbrains.kotlin.metadata.Property.contextReceiverTypeId: array expected");
                            message.contextReceiverTypeId = [];
                            for (let i = 0; i < object.contextReceiverTypeId.length; ++i)
                                message.contextReceiverTypeId[i] = object.contextReceiverTypeId[i] | 0;
                        }
                        if (object.contextParameter) {
                            if (!Array.isArray(object.contextParameter))
                                throw TypeError(".org.jetbrains.kotlin.metadata.Property.contextParameter: array expected");
                            message.contextParameter = [];
                            for (let i = 0; i < object.contextParameter.length; ++i) {
                                if (typeof object.contextParameter[i] !== "object")
                                    throw TypeError(".org.jetbrains.kotlin.metadata.Property.contextParameter: object expected");
                                message.contextParameter[i] = $root.org.jetbrains.kotlin.metadata.ValueParameter.fromObject(object.contextParameter[i]);
                            }
                        }
                        if (object.setterValueParameter != null) {
                            if (typeof object.setterValueParameter !== "object")
                                throw TypeError(".org.jetbrains.kotlin.metadata.Property.setterValueParameter: object expected");
                            message.setterValueParameter = $root.org.jetbrains.kotlin.metadata.ValueParameter.fromObject(object.setterValueParameter);
                        }
                        if (object.getterFlags != null)
                            message.getterFlags = object.getterFlags | 0;
                        if (object.setterFlags != null)
                            message.setterFlags = object.setterFlags | 0;
                        if (object.versionRequirement) {
                            if (!Array.isArray(object.versionRequirement))
                                throw TypeError(".org.jetbrains.kotlin.metadata.Property.versionRequirement: array expected");
                            message.versionRequirement = [];
                            for (let i = 0; i < object.versionRequirement.length; ++i)
                                message.versionRequirement[i] = object.versionRequirement[i] | 0;
                        }
                        if (object.compilerPluginData) {
                            if (!Array.isArray(object.compilerPluginData))
                                throw TypeError(".org.jetbrains.kotlin.metadata.Property.compilerPluginData: array expected");
                            message.compilerPluginData = [];
                            for (let i = 0; i < object.compilerPluginData.length; ++i) {
                                if (typeof object.compilerPluginData[i] !== "object")
                                    throw TypeError(".org.jetbrains.kotlin.metadata.Property.compilerPluginData: object expected");
                                message.compilerPluginData[i] = $root.org.jetbrains.kotlin.metadata.CompilerPluginData.fromObject(object.compilerPluginData[i]);
                            }
                        }
                        if (object.annotation) {
                            if (!Array.isArray(object.annotation))
                                throw TypeError(".org.jetbrains.kotlin.metadata.Property.annotation: array expected");
                            message.annotation = [];
                            for (let i = 0; i < object.annotation.length; ++i) {
                                if (typeof object.annotation[i] !== "object")
                                    throw TypeError(".org.jetbrains.kotlin.metadata.Property.annotation: object expected");
                                message.annotation[i] = $root.org.jetbrains.kotlin.metadata.Annotation.fromObject(object.annotation[i]);
                            }
                        }
                        if (object.getterAnnotation) {
                            if (!Array.isArray(object.getterAnnotation))
                                throw TypeError(".org.jetbrains.kotlin.metadata.Property.getterAnnotation: array expected");
                            message.getterAnnotation = [];
                            for (let i = 0; i < object.getterAnnotation.length; ++i) {
                                if (typeof object.getterAnnotation[i] !== "object")
                                    throw TypeError(".org.jetbrains.kotlin.metadata.Property.getterAnnotation: object expected");
                                message.getterAnnotation[i] = $root.org.jetbrains.kotlin.metadata.Annotation.fromObject(object.getterAnnotation[i]);
                            }
                        }
                        if (object.setterAnnotation) {
                            if (!Array.isArray(object.setterAnnotation))
                                throw TypeError(".org.jetbrains.kotlin.metadata.Property.setterAnnotation: array expected");
                            message.setterAnnotation = [];
                            for (let i = 0; i < object.setterAnnotation.length; ++i) {
                                if (typeof object.setterAnnotation[i] !== "object")
                                    throw TypeError(".org.jetbrains.kotlin.metadata.Property.setterAnnotation: object expected");
                                message.setterAnnotation[i] = $root.org.jetbrains.kotlin.metadata.Annotation.fromObject(object.setterAnnotation[i]);
                            }
                        }
                        if (object.extensionReceiverAnnotation) {
                            if (!Array.isArray(object.extensionReceiverAnnotation))
                                throw TypeError(".org.jetbrains.kotlin.metadata.Property.extensionReceiverAnnotation: array expected");
                            message.extensionReceiverAnnotation = [];
                            for (let i = 0; i < object.extensionReceiverAnnotation.length; ++i) {
                                if (typeof object.extensionReceiverAnnotation[i] !== "object")
                                    throw TypeError(".org.jetbrains.kotlin.metadata.Property.extensionReceiverAnnotation: object expected");
                                message.extensionReceiverAnnotation[i] = $root.org.jetbrains.kotlin.metadata.Annotation.fromObject(object.extensionReceiverAnnotation[i]);
                            }
                        }
                        if (object.backingFieldAnnotation) {
                            if (!Array.isArray(object.backingFieldAnnotation))
                                throw TypeError(".org.jetbrains.kotlin.metadata.Property.backingFieldAnnotation: array expected");
                            message.backingFieldAnnotation = [];
                            for (let i = 0; i < object.backingFieldAnnotation.length; ++i) {
                                if (typeof object.backingFieldAnnotation[i] !== "object")
                                    throw TypeError(".org.jetbrains.kotlin.metadata.Property.backingFieldAnnotation: object expected");
                                message.backingFieldAnnotation[i] = $root.org.jetbrains.kotlin.metadata.Annotation.fromObject(object.backingFieldAnnotation[i]);
                            }
                        }
                        if (object.delegateFieldAnnotation) {
                            if (!Array.isArray(object.delegateFieldAnnotation))
                                throw TypeError(".org.jetbrains.kotlin.metadata.Property.delegateFieldAnnotation: array expected");
                            message.delegateFieldAnnotation = [];
                            for (let i = 0; i < object.delegateFieldAnnotation.length; ++i) {
                                if (typeof object.delegateFieldAnnotation[i] !== "object")
                                    throw TypeError(".org.jetbrains.kotlin.metadata.Property.delegateFieldAnnotation: object expected");
                                message.delegateFieldAnnotation[i] = $root.org.jetbrains.kotlin.metadata.Annotation.fromObject(object.delegateFieldAnnotation[i]);
                            }
                        }
                        if (object.getterContract != null) {
                            if (typeof object.getterContract !== "object")
                                throw TypeError(".org.jetbrains.kotlin.metadata.Property.getterContract: object expected");
                            message.getterContract = $root.org.jetbrains.kotlin.metadata.Contract.fromObject(object.getterContract);
                        }
                        if (object.setterContract != null) {
                            if (typeof object.setterContract !== "object")
                                throw TypeError(".org.jetbrains.kotlin.metadata.Property.setterContract: object expected");
                            message.setterContract = $root.org.jetbrains.kotlin.metadata.Contract.fromObject(object.setterContract);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a Property message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof org.jetbrains.kotlin.metadata.Property
                     * @static
                     * @param {org.jetbrains.kotlin.metadata.Property} message Property
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Property.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.arrays || options.defaults) {
                            object.typeParameter = [];
                            object.contextReceiverType = [];
                            object.contextReceiverTypeId = [];
                            object.annotation = [];
                            object.getterAnnotation = [];
                            object.setterAnnotation = [];
                            object.contextParameter = [];
                            object.versionRequirement = [];
                            object.compilerPluginData = [];
                            object.extensionReceiverAnnotation = [];
                            object.backingFieldAnnotation = [];
                            object.delegateFieldAnnotation = [];
                        }
                        if (options.defaults) {
                            object.oldFlags = 2054;
                            object.name = 0;
                            object.returnType = null;
                            object.receiverType = null;
                            object.setterValueParameter = null;
                            object.getterFlags = 0;
                            object.setterFlags = 0;
                            object.returnTypeId = 0;
                            object.receiverTypeId = 0;
                            object.flags = 518;
                            object.getterContract = null;
                            object.setterContract = null;
                        }
                        if (message.oldFlags != null && message.hasOwnProperty("oldFlags"))
                            object.oldFlags = message.oldFlags;
                        if (message.name != null && message.hasOwnProperty("name"))
                            object.name = message.name;
                        if (message.returnType != null && message.hasOwnProperty("returnType"))
                            object.returnType = $root.org.jetbrains.kotlin.metadata.Type.toObject(message.returnType, options);
                        if (message.typeParameter && message.typeParameter.length) {
                            object.typeParameter = [];
                            for (let j = 0; j < message.typeParameter.length; ++j)
                                object.typeParameter[j] = $root.org.jetbrains.kotlin.metadata.TypeParameter.toObject(message.typeParameter[j], options);
                        }
                        if (message.receiverType != null && message.hasOwnProperty("receiverType"))
                            object.receiverType = $root.org.jetbrains.kotlin.metadata.Type.toObject(message.receiverType, options);
                        if (message.setterValueParameter != null && message.hasOwnProperty("setterValueParameter"))
                            object.setterValueParameter = $root.org.jetbrains.kotlin.metadata.ValueParameter.toObject(message.setterValueParameter, options);
                        if (message.getterFlags != null && message.hasOwnProperty("getterFlags"))
                            object.getterFlags = message.getterFlags;
                        if (message.setterFlags != null && message.hasOwnProperty("setterFlags"))
                            object.setterFlags = message.setterFlags;
                        if (message.returnTypeId != null && message.hasOwnProperty("returnTypeId"))
                            object.returnTypeId = message.returnTypeId;
                        if (message.receiverTypeId != null && message.hasOwnProperty("receiverTypeId"))
                            object.receiverTypeId = message.receiverTypeId;
                        if (message.flags != null && message.hasOwnProperty("flags"))
                            object.flags = message.flags;
                        if (message.contextReceiverType && message.contextReceiverType.length) {
                            object.contextReceiverType = [];
                            for (let j = 0; j < message.contextReceiverType.length; ++j)
                                object.contextReceiverType[j] = $root.org.jetbrains.kotlin.metadata.Type.toObject(message.contextReceiverType[j], options);
                        }
                        if (message.contextReceiverTypeId && message.contextReceiverTypeId.length) {
                            object.contextReceiverTypeId = [];
                            for (let j = 0; j < message.contextReceiverTypeId.length; ++j)
                                object.contextReceiverTypeId[j] = message.contextReceiverTypeId[j];
                        }
                        if (message.annotation && message.annotation.length) {
                            object.annotation = [];
                            for (let j = 0; j < message.annotation.length; ++j)
                                object.annotation[j] = $root.org.jetbrains.kotlin.metadata.Annotation.toObject(message.annotation[j], options);
                        }
                        if (message.getterAnnotation && message.getterAnnotation.length) {
                            object.getterAnnotation = [];
                            for (let j = 0; j < message.getterAnnotation.length; ++j)
                                object.getterAnnotation[j] = $root.org.jetbrains.kotlin.metadata.Annotation.toObject(message.getterAnnotation[j], options);
                        }
                        if (message.setterAnnotation && message.setterAnnotation.length) {
                            object.setterAnnotation = [];
                            for (let j = 0; j < message.setterAnnotation.length; ++j)
                                object.setterAnnotation[j] = $root.org.jetbrains.kotlin.metadata.Annotation.toObject(message.setterAnnotation[j], options);
                        }
                        if (message.contextParameter && message.contextParameter.length) {
                            object.contextParameter = [];
                            for (let j = 0; j < message.contextParameter.length; ++j)
                                object.contextParameter[j] = $root.org.jetbrains.kotlin.metadata.ValueParameter.toObject(message.contextParameter[j], options);
                        }
                        if (message.versionRequirement && message.versionRequirement.length) {
                            object.versionRequirement = [];
                            for (let j = 0; j < message.versionRequirement.length; ++j)
                                object.versionRequirement[j] = message.versionRequirement[j];
                        }
                        if (message.compilerPluginData && message.compilerPluginData.length) {
                            object.compilerPluginData = [];
                            for (let j = 0; j < message.compilerPluginData.length; ++j)
                                object.compilerPluginData[j] = $root.org.jetbrains.kotlin.metadata.CompilerPluginData.toObject(message.compilerPluginData[j], options);
                        }
                        if (message.extensionReceiverAnnotation && message.extensionReceiverAnnotation.length) {
                            object.extensionReceiverAnnotation = [];
                            for (let j = 0; j < message.extensionReceiverAnnotation.length; ++j)
                                object.extensionReceiverAnnotation[j] = $root.org.jetbrains.kotlin.metadata.Annotation.toObject(message.extensionReceiverAnnotation[j], options);
                        }
                        if (message.backingFieldAnnotation && message.backingFieldAnnotation.length) {
                            object.backingFieldAnnotation = [];
                            for (let j = 0; j < message.backingFieldAnnotation.length; ++j)
                                object.backingFieldAnnotation[j] = $root.org.jetbrains.kotlin.metadata.Annotation.toObject(message.backingFieldAnnotation[j], options);
                        }
                        if (message.delegateFieldAnnotation && message.delegateFieldAnnotation.length) {
                            object.delegateFieldAnnotation = [];
                            for (let j = 0; j < message.delegateFieldAnnotation.length; ++j)
                                object.delegateFieldAnnotation[j] = $root.org.jetbrains.kotlin.metadata.Annotation.toObject(message.delegateFieldAnnotation[j], options);
                        }
                        if (message.getterContract != null && message.hasOwnProperty("getterContract"))
                            object.getterContract = $root.org.jetbrains.kotlin.metadata.Contract.toObject(message.getterContract, options);
                        if (message.setterContract != null && message.hasOwnProperty("setterContract"))
                            object.setterContract = $root.org.jetbrains.kotlin.metadata.Contract.toObject(message.setterContract, options);
                        return object;
                    };

                    /**
                     * Converts this Property to JSON.
                     * @function toJSON
                     * @memberof org.jetbrains.kotlin.metadata.Property
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Property.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for Property
                     * @function getTypeUrl
                     * @memberof org.jetbrains.kotlin.metadata.Property
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Property.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/org.jetbrains.kotlin.metadata.Property";
                    };

                    return Property;
                })();

                metadata.ValueParameter = (function() {

                    /**
                     * Properties of a ValueParameter.
                     * @memberof org.jetbrains.kotlin.metadata
                     * @interface IValueParameter
                     * @property {number|null} [flags] ValueParameter flags
                     * @property {number} name ValueParameter name
                     * @property {org.jetbrains.kotlin.metadata.IType|null} [type] ValueParameter type
                     * @property {number|null} [typeId] ValueParameter typeId
                     * @property {org.jetbrains.kotlin.metadata.IType|null} [varargElementType] ValueParameter varargElementType
                     * @property {number|null} [varargElementTypeId] ValueParameter varargElementTypeId
                     * @property {Array.<org.jetbrains.kotlin.metadata.IAnnotation>|null} [annotation] ValueParameter annotation
                     * @property {org.jetbrains.kotlin.metadata.Annotation.Argument.IValue|null} [annotationParameterDefaultValue] ValueParameter annotationParameterDefaultValue
                     */

                    /**
                     * Constructs a new ValueParameter.
                     * @memberof org.jetbrains.kotlin.metadata
                     * @classdesc Represents a ValueParameter.
                     * @implements IValueParameter
                     * @constructor
                     * @param {org.jetbrains.kotlin.metadata.IValueParameter=} [properties] Properties to set
                     */
                    function ValueParameter(properties) {
                        this.annotation = [];
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ValueParameter flags.
                     * @member {number} flags
                     * @memberof org.jetbrains.kotlin.metadata.ValueParameter
                     * @instance
                     */
                    ValueParameter.prototype.flags = 0;

                    /**
                     * ValueParameter name.
                     * @member {number} name
                     * @memberof org.jetbrains.kotlin.metadata.ValueParameter
                     * @instance
                     */
                    ValueParameter.prototype.name = 0;

                    /**
                     * ValueParameter type.
                     * @member {org.jetbrains.kotlin.metadata.IType|null|undefined} type
                     * @memberof org.jetbrains.kotlin.metadata.ValueParameter
                     * @instance
                     */
                    ValueParameter.prototype.type = null;

                    /**
                     * ValueParameter typeId.
                     * @member {number} typeId
                     * @memberof org.jetbrains.kotlin.metadata.ValueParameter
                     * @instance
                     */
                    ValueParameter.prototype.typeId = 0;

                    /**
                     * ValueParameter varargElementType.
                     * @member {org.jetbrains.kotlin.metadata.IType|null|undefined} varargElementType
                     * @memberof org.jetbrains.kotlin.metadata.ValueParameter
                     * @instance
                     */
                    ValueParameter.prototype.varargElementType = null;

                    /**
                     * ValueParameter varargElementTypeId.
                     * @member {number} varargElementTypeId
                     * @memberof org.jetbrains.kotlin.metadata.ValueParameter
                     * @instance
                     */
                    ValueParameter.prototype.varargElementTypeId = 0;

                    /**
                     * ValueParameter annotation.
                     * @member {Array.<org.jetbrains.kotlin.metadata.IAnnotation>} annotation
                     * @memberof org.jetbrains.kotlin.metadata.ValueParameter
                     * @instance
                     */
                    ValueParameter.prototype.annotation = $util.emptyArray;

                    /**
                     * ValueParameter annotationParameterDefaultValue.
                     * @member {org.jetbrains.kotlin.metadata.Annotation.Argument.IValue|null|undefined} annotationParameterDefaultValue
                     * @memberof org.jetbrains.kotlin.metadata.ValueParameter
                     * @instance
                     */
                    ValueParameter.prototype.annotationParameterDefaultValue = null;

                    /**
                     * Decodes a ValueParameter message from the specified reader or buffer.
                     * @function decode
                     * @memberof org.jetbrains.kotlin.metadata.ValueParameter
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {org.jetbrains.kotlin.metadata.ValueParameter} ValueParameter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ValueParameter.decode = function decode(reader, length, error) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.org.jetbrains.kotlin.metadata.ValueParameter();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            case 1: {
                                    message.flags = reader.int32();
                                    break;
                                }
                            case 2: {
                                    message.name = reader.int32();
                                    break;
                                }
                            case 3: {
                                    message.type = $root.org.jetbrains.kotlin.metadata.Type.decode(reader, reader.uint32());
                                    break;
                                }
                            case 5: {
                                    message.typeId = reader.int32();
                                    break;
                                }
                            case 4: {
                                    message.varargElementType = $root.org.jetbrains.kotlin.metadata.Type.decode(reader, reader.uint32());
                                    break;
                                }
                            case 6: {
                                    message.varargElementTypeId = reader.int32();
                                    break;
                                }
                            case 7: {
                                    if (!(message.annotation && message.annotation.length))
                                        message.annotation = [];
                                    message.annotation.push($root.org.jetbrains.kotlin.metadata.Annotation.decode(reader, reader.uint32()));
                                    break;
                                }
                            case 8: {
                                    message.annotationParameterDefaultValue = $root.org.jetbrains.kotlin.metadata.Annotation.Argument.Value.decode(reader, reader.uint32());
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        if (!message.hasOwnProperty("name"))
                            throw $util.ProtocolError("missing required 'name'", { instance: message });
                        return message;
                    };

                    /**
                     * Decodes a ValueParameter message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof org.jetbrains.kotlin.metadata.ValueParameter
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {org.jetbrains.kotlin.metadata.ValueParameter} ValueParameter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ValueParameter.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Creates a ValueParameter message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof org.jetbrains.kotlin.metadata.ValueParameter
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {org.jetbrains.kotlin.metadata.ValueParameter} ValueParameter
                     */
                    ValueParameter.fromObject = function fromObject(object) {
                        if (object instanceof $root.org.jetbrains.kotlin.metadata.ValueParameter)
                            return object;
                        let message = new $root.org.jetbrains.kotlin.metadata.ValueParameter();
                        if (object.flags != null)
                            message.flags = object.flags | 0;
                        if (object.name != null)
                            message.name = object.name | 0;
                        if (object.type != null) {
                            if (typeof object.type !== "object")
                                throw TypeError(".org.jetbrains.kotlin.metadata.ValueParameter.type: object expected");
                            message.type = $root.org.jetbrains.kotlin.metadata.Type.fromObject(object.type);
                        }
                        if (object.typeId != null)
                            message.typeId = object.typeId | 0;
                        if (object.varargElementType != null) {
                            if (typeof object.varargElementType !== "object")
                                throw TypeError(".org.jetbrains.kotlin.metadata.ValueParameter.varargElementType: object expected");
                            message.varargElementType = $root.org.jetbrains.kotlin.metadata.Type.fromObject(object.varargElementType);
                        }
                        if (object.varargElementTypeId != null)
                            message.varargElementTypeId = object.varargElementTypeId | 0;
                        if (object.annotation) {
                            if (!Array.isArray(object.annotation))
                                throw TypeError(".org.jetbrains.kotlin.metadata.ValueParameter.annotation: array expected");
                            message.annotation = [];
                            for (let i = 0; i < object.annotation.length; ++i) {
                                if (typeof object.annotation[i] !== "object")
                                    throw TypeError(".org.jetbrains.kotlin.metadata.ValueParameter.annotation: object expected");
                                message.annotation[i] = $root.org.jetbrains.kotlin.metadata.Annotation.fromObject(object.annotation[i]);
                            }
                        }
                        if (object.annotationParameterDefaultValue != null) {
                            if (typeof object.annotationParameterDefaultValue !== "object")
                                throw TypeError(".org.jetbrains.kotlin.metadata.ValueParameter.annotationParameterDefaultValue: object expected");
                            message.annotationParameterDefaultValue = $root.org.jetbrains.kotlin.metadata.Annotation.Argument.Value.fromObject(object.annotationParameterDefaultValue);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a ValueParameter message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof org.jetbrains.kotlin.metadata.ValueParameter
                     * @static
                     * @param {org.jetbrains.kotlin.metadata.ValueParameter} message ValueParameter
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ValueParameter.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.arrays || options.defaults)
                            object.annotation = [];
                        if (options.defaults) {
                            object.flags = 0;
                            object.name = 0;
                            object.type = null;
                            object.varargElementType = null;
                            object.typeId = 0;
                            object.varargElementTypeId = 0;
                            object.annotationParameterDefaultValue = null;
                        }
                        if (message.flags != null && message.hasOwnProperty("flags"))
                            object.flags = message.flags;
                        if (message.name != null && message.hasOwnProperty("name"))
                            object.name = message.name;
                        if (message.type != null && message.hasOwnProperty("type"))
                            object.type = $root.org.jetbrains.kotlin.metadata.Type.toObject(message.type, options);
                        if (message.varargElementType != null && message.hasOwnProperty("varargElementType"))
                            object.varargElementType = $root.org.jetbrains.kotlin.metadata.Type.toObject(message.varargElementType, options);
                        if (message.typeId != null && message.hasOwnProperty("typeId"))
                            object.typeId = message.typeId;
                        if (message.varargElementTypeId != null && message.hasOwnProperty("varargElementTypeId"))
                            object.varargElementTypeId = message.varargElementTypeId;
                        if (message.annotation && message.annotation.length) {
                            object.annotation = [];
                            for (let j = 0; j < message.annotation.length; ++j)
                                object.annotation[j] = $root.org.jetbrains.kotlin.metadata.Annotation.toObject(message.annotation[j], options);
                        }
                        if (message.annotationParameterDefaultValue != null && message.hasOwnProperty("annotationParameterDefaultValue"))
                            object.annotationParameterDefaultValue = $root.org.jetbrains.kotlin.metadata.Annotation.Argument.Value.toObject(message.annotationParameterDefaultValue, options);
                        return object;
                    };

                    /**
                     * Converts this ValueParameter to JSON.
                     * @function toJSON
                     * @memberof org.jetbrains.kotlin.metadata.ValueParameter
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ValueParameter.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for ValueParameter
                     * @function getTypeUrl
                     * @memberof org.jetbrains.kotlin.metadata.ValueParameter
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    ValueParameter.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/org.jetbrains.kotlin.metadata.ValueParameter";
                    };

                    return ValueParameter;
                })();

                metadata.TypeAlias = (function() {

                    /**
                     * Properties of a TypeAlias.
                     * @memberof org.jetbrains.kotlin.metadata
                     * @interface ITypeAlias
                     * @property {number|null} [flags] TypeAlias flags
                     * @property {number} name TypeAlias name
                     * @property {Array.<org.jetbrains.kotlin.metadata.ITypeParameter>|null} [typeParameter] TypeAlias typeParameter
                     * @property {org.jetbrains.kotlin.metadata.IType|null} [underlyingType] TypeAlias underlyingType
                     * @property {number|null} [underlyingTypeId] TypeAlias underlyingTypeId
                     * @property {org.jetbrains.kotlin.metadata.IType|null} [expandedType] TypeAlias expandedType
                     * @property {number|null} [expandedTypeId] TypeAlias expandedTypeId
                     * @property {Array.<org.jetbrains.kotlin.metadata.IAnnotation>|null} [annotation] TypeAlias annotation
                     * @property {Array.<number>|null} [versionRequirement] TypeAlias versionRequirement
                     * @property {Array.<org.jetbrains.kotlin.metadata.ICompilerPluginData>|null} [compilerPluginData] TypeAlias compilerPluginData
                     */

                    /**
                     * Constructs a new TypeAlias.
                     * @memberof org.jetbrains.kotlin.metadata
                     * @classdesc Represents a TypeAlias.
                     * @implements ITypeAlias
                     * @constructor
                     * @param {org.jetbrains.kotlin.metadata.ITypeAlias=} [properties] Properties to set
                     */
                    function TypeAlias(properties) {
                        this.typeParameter = [];
                        this.annotation = [];
                        this.versionRequirement = [];
                        this.compilerPluginData = [];
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * TypeAlias flags.
                     * @member {number} flags
                     * @memberof org.jetbrains.kotlin.metadata.TypeAlias
                     * @instance
                     */
                    TypeAlias.prototype.flags = 6;

                    /**
                     * TypeAlias name.
                     * @member {number} name
                     * @memberof org.jetbrains.kotlin.metadata.TypeAlias
                     * @instance
                     */
                    TypeAlias.prototype.name = 0;

                    /**
                     * TypeAlias typeParameter.
                     * @member {Array.<org.jetbrains.kotlin.metadata.ITypeParameter>} typeParameter
                     * @memberof org.jetbrains.kotlin.metadata.TypeAlias
                     * @instance
                     */
                    TypeAlias.prototype.typeParameter = $util.emptyArray;

                    /**
                     * TypeAlias underlyingType.
                     * @member {org.jetbrains.kotlin.metadata.IType|null|undefined} underlyingType
                     * @memberof org.jetbrains.kotlin.metadata.TypeAlias
                     * @instance
                     */
                    TypeAlias.prototype.underlyingType = null;

                    /**
                     * TypeAlias underlyingTypeId.
                     * @member {number} underlyingTypeId
                     * @memberof org.jetbrains.kotlin.metadata.TypeAlias
                     * @instance
                     */
                    TypeAlias.prototype.underlyingTypeId = 0;

                    /**
                     * TypeAlias expandedType.
                     * @member {org.jetbrains.kotlin.metadata.IType|null|undefined} expandedType
                     * @memberof org.jetbrains.kotlin.metadata.TypeAlias
                     * @instance
                     */
                    TypeAlias.prototype.expandedType = null;

                    /**
                     * TypeAlias expandedTypeId.
                     * @member {number} expandedTypeId
                     * @memberof org.jetbrains.kotlin.metadata.TypeAlias
                     * @instance
                     */
                    TypeAlias.prototype.expandedTypeId = 0;

                    /**
                     * TypeAlias annotation.
                     * @member {Array.<org.jetbrains.kotlin.metadata.IAnnotation>} annotation
                     * @memberof org.jetbrains.kotlin.metadata.TypeAlias
                     * @instance
                     */
                    TypeAlias.prototype.annotation = $util.emptyArray;

                    /**
                     * TypeAlias versionRequirement.
                     * @member {Array.<number>} versionRequirement
                     * @memberof org.jetbrains.kotlin.metadata.TypeAlias
                     * @instance
                     */
                    TypeAlias.prototype.versionRequirement = $util.emptyArray;

                    /**
                     * TypeAlias compilerPluginData.
                     * @member {Array.<org.jetbrains.kotlin.metadata.ICompilerPluginData>} compilerPluginData
                     * @memberof org.jetbrains.kotlin.metadata.TypeAlias
                     * @instance
                     */
                    TypeAlias.prototype.compilerPluginData = $util.emptyArray;

                    /**
                     * Decodes a TypeAlias message from the specified reader or buffer.
                     * @function decode
                     * @memberof org.jetbrains.kotlin.metadata.TypeAlias
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {org.jetbrains.kotlin.metadata.TypeAlias} TypeAlias
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TypeAlias.decode = function decode(reader, length, error) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.org.jetbrains.kotlin.metadata.TypeAlias();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            case 1: {
                                    message.flags = reader.int32();
                                    break;
                                }
                            case 2: {
                                    message.name = reader.int32();
                                    break;
                                }
                            case 3: {
                                    if (!(message.typeParameter && message.typeParameter.length))
                                        message.typeParameter = [];
                                    message.typeParameter.push($root.org.jetbrains.kotlin.metadata.TypeParameter.decode(reader, reader.uint32()));
                                    break;
                                }
                            case 4: {
                                    message.underlyingType = $root.org.jetbrains.kotlin.metadata.Type.decode(reader, reader.uint32());
                                    break;
                                }
                            case 5: {
                                    message.underlyingTypeId = reader.int32();
                                    break;
                                }
                            case 6: {
                                    message.expandedType = $root.org.jetbrains.kotlin.metadata.Type.decode(reader, reader.uint32());
                                    break;
                                }
                            case 7: {
                                    message.expandedTypeId = reader.int32();
                                    break;
                                }
                            case 8: {
                                    if (!(message.annotation && message.annotation.length))
                                        message.annotation = [];
                                    message.annotation.push($root.org.jetbrains.kotlin.metadata.Annotation.decode(reader, reader.uint32()));
                                    break;
                                }
                            case 31: {
                                    if (!(message.versionRequirement && message.versionRequirement.length))
                                        message.versionRequirement = [];
                                    if ((tag & 7) === 2) {
                                        let end2 = reader.uint32() + reader.pos;
                                        while (reader.pos < end2)
                                            message.versionRequirement.push(reader.int32());
                                    } else
                                        message.versionRequirement.push(reader.int32());
                                    break;
                                }
                            case 32: {
                                    if (!(message.compilerPluginData && message.compilerPluginData.length))
                                        message.compilerPluginData = [];
                                    message.compilerPluginData.push($root.org.jetbrains.kotlin.metadata.CompilerPluginData.decode(reader, reader.uint32()));
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        if (!message.hasOwnProperty("name"))
                            throw $util.ProtocolError("missing required 'name'", { instance: message });
                        return message;
                    };

                    /**
                     * Decodes a TypeAlias message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof org.jetbrains.kotlin.metadata.TypeAlias
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {org.jetbrains.kotlin.metadata.TypeAlias} TypeAlias
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TypeAlias.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Creates a TypeAlias message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof org.jetbrains.kotlin.metadata.TypeAlias
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {org.jetbrains.kotlin.metadata.TypeAlias} TypeAlias
                     */
                    TypeAlias.fromObject = function fromObject(object) {
                        if (object instanceof $root.org.jetbrains.kotlin.metadata.TypeAlias)
                            return object;
                        let message = new $root.org.jetbrains.kotlin.metadata.TypeAlias();
                        if (object.flags != null)
                            message.flags = object.flags | 0;
                        if (object.name != null)
                            message.name = object.name | 0;
                        if (object.typeParameter) {
                            if (!Array.isArray(object.typeParameter))
                                throw TypeError(".org.jetbrains.kotlin.metadata.TypeAlias.typeParameter: array expected");
                            message.typeParameter = [];
                            for (let i = 0; i < object.typeParameter.length; ++i) {
                                if (typeof object.typeParameter[i] !== "object")
                                    throw TypeError(".org.jetbrains.kotlin.metadata.TypeAlias.typeParameter: object expected");
                                message.typeParameter[i] = $root.org.jetbrains.kotlin.metadata.TypeParameter.fromObject(object.typeParameter[i]);
                            }
                        }
                        if (object.underlyingType != null) {
                            if (typeof object.underlyingType !== "object")
                                throw TypeError(".org.jetbrains.kotlin.metadata.TypeAlias.underlyingType: object expected");
                            message.underlyingType = $root.org.jetbrains.kotlin.metadata.Type.fromObject(object.underlyingType);
                        }
                        if (object.underlyingTypeId != null)
                            message.underlyingTypeId = object.underlyingTypeId | 0;
                        if (object.expandedType != null) {
                            if (typeof object.expandedType !== "object")
                                throw TypeError(".org.jetbrains.kotlin.metadata.TypeAlias.expandedType: object expected");
                            message.expandedType = $root.org.jetbrains.kotlin.metadata.Type.fromObject(object.expandedType);
                        }
                        if (object.expandedTypeId != null)
                            message.expandedTypeId = object.expandedTypeId | 0;
                        if (object.annotation) {
                            if (!Array.isArray(object.annotation))
                                throw TypeError(".org.jetbrains.kotlin.metadata.TypeAlias.annotation: array expected");
                            message.annotation = [];
                            for (let i = 0; i < object.annotation.length; ++i) {
                                if (typeof object.annotation[i] !== "object")
                                    throw TypeError(".org.jetbrains.kotlin.metadata.TypeAlias.annotation: object expected");
                                message.annotation[i] = $root.org.jetbrains.kotlin.metadata.Annotation.fromObject(object.annotation[i]);
                            }
                        }
                        if (object.versionRequirement) {
                            if (!Array.isArray(object.versionRequirement))
                                throw TypeError(".org.jetbrains.kotlin.metadata.TypeAlias.versionRequirement: array expected");
                            message.versionRequirement = [];
                            for (let i = 0; i < object.versionRequirement.length; ++i)
                                message.versionRequirement[i] = object.versionRequirement[i] | 0;
                        }
                        if (object.compilerPluginData) {
                            if (!Array.isArray(object.compilerPluginData))
                                throw TypeError(".org.jetbrains.kotlin.metadata.TypeAlias.compilerPluginData: array expected");
                            message.compilerPluginData = [];
                            for (let i = 0; i < object.compilerPluginData.length; ++i) {
                                if (typeof object.compilerPluginData[i] !== "object")
                                    throw TypeError(".org.jetbrains.kotlin.metadata.TypeAlias.compilerPluginData: object expected");
                                message.compilerPluginData[i] = $root.org.jetbrains.kotlin.metadata.CompilerPluginData.fromObject(object.compilerPluginData[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a TypeAlias message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof org.jetbrains.kotlin.metadata.TypeAlias
                     * @static
                     * @param {org.jetbrains.kotlin.metadata.TypeAlias} message TypeAlias
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    TypeAlias.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.arrays || options.defaults) {
                            object.typeParameter = [];
                            object.annotation = [];
                            object.versionRequirement = [];
                            object.compilerPluginData = [];
                        }
                        if (options.defaults) {
                            object.flags = 6;
                            object.name = 0;
                            object.underlyingType = null;
                            object.underlyingTypeId = 0;
                            object.expandedType = null;
                            object.expandedTypeId = 0;
                        }
                        if (message.flags != null && message.hasOwnProperty("flags"))
                            object.flags = message.flags;
                        if (message.name != null && message.hasOwnProperty("name"))
                            object.name = message.name;
                        if (message.typeParameter && message.typeParameter.length) {
                            object.typeParameter = [];
                            for (let j = 0; j < message.typeParameter.length; ++j)
                                object.typeParameter[j] = $root.org.jetbrains.kotlin.metadata.TypeParameter.toObject(message.typeParameter[j], options);
                        }
                        if (message.underlyingType != null && message.hasOwnProperty("underlyingType"))
                            object.underlyingType = $root.org.jetbrains.kotlin.metadata.Type.toObject(message.underlyingType, options);
                        if (message.underlyingTypeId != null && message.hasOwnProperty("underlyingTypeId"))
                            object.underlyingTypeId = message.underlyingTypeId;
                        if (message.expandedType != null && message.hasOwnProperty("expandedType"))
                            object.expandedType = $root.org.jetbrains.kotlin.metadata.Type.toObject(message.expandedType, options);
                        if (message.expandedTypeId != null && message.hasOwnProperty("expandedTypeId"))
                            object.expandedTypeId = message.expandedTypeId;
                        if (message.annotation && message.annotation.length) {
                            object.annotation = [];
                            for (let j = 0; j < message.annotation.length; ++j)
                                object.annotation[j] = $root.org.jetbrains.kotlin.metadata.Annotation.toObject(message.annotation[j], options);
                        }
                        if (message.versionRequirement && message.versionRequirement.length) {
                            object.versionRequirement = [];
                            for (let j = 0; j < message.versionRequirement.length; ++j)
                                object.versionRequirement[j] = message.versionRequirement[j];
                        }
                        if (message.compilerPluginData && message.compilerPluginData.length) {
                            object.compilerPluginData = [];
                            for (let j = 0; j < message.compilerPluginData.length; ++j)
                                object.compilerPluginData[j] = $root.org.jetbrains.kotlin.metadata.CompilerPluginData.toObject(message.compilerPluginData[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this TypeAlias to JSON.
                     * @function toJSON
                     * @memberof org.jetbrains.kotlin.metadata.TypeAlias
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    TypeAlias.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for TypeAlias
                     * @function getTypeUrl
                     * @memberof org.jetbrains.kotlin.metadata.TypeAlias
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    TypeAlias.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/org.jetbrains.kotlin.metadata.TypeAlias";
                    };

                    return TypeAlias;
                })();

                metadata.EnumEntry = (function() {

                    /**
                     * Properties of an EnumEntry.
                     * @memberof org.jetbrains.kotlin.metadata
                     * @interface IEnumEntry
                     * @property {number|null} [name] EnumEntry name
                     * @property {Array.<org.jetbrains.kotlin.metadata.IAnnotation>|null} [annotation] EnumEntry annotation
                     */

                    /**
                     * Constructs a new EnumEntry.
                     * @memberof org.jetbrains.kotlin.metadata
                     * @classdesc Represents an EnumEntry.
                     * @implements IEnumEntry
                     * @constructor
                     * @param {org.jetbrains.kotlin.metadata.IEnumEntry=} [properties] Properties to set
                     */
                    function EnumEntry(properties) {
                        this.annotation = [];
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * EnumEntry name.
                     * @member {number} name
                     * @memberof org.jetbrains.kotlin.metadata.EnumEntry
                     * @instance
                     */
                    EnumEntry.prototype.name = 0;

                    /**
                     * EnumEntry annotation.
                     * @member {Array.<org.jetbrains.kotlin.metadata.IAnnotation>} annotation
                     * @memberof org.jetbrains.kotlin.metadata.EnumEntry
                     * @instance
                     */
                    EnumEntry.prototype.annotation = $util.emptyArray;

                    /**
                     * Decodes an EnumEntry message from the specified reader or buffer.
                     * @function decode
                     * @memberof org.jetbrains.kotlin.metadata.EnumEntry
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {org.jetbrains.kotlin.metadata.EnumEntry} EnumEntry
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    EnumEntry.decode = function decode(reader, length, error) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.org.jetbrains.kotlin.metadata.EnumEntry();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            case 1: {
                                    message.name = reader.int32();
                                    break;
                                }
                            case 2: {
                                    if (!(message.annotation && message.annotation.length))
                                        message.annotation = [];
                                    message.annotation.push($root.org.jetbrains.kotlin.metadata.Annotation.decode(reader, reader.uint32()));
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an EnumEntry message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof org.jetbrains.kotlin.metadata.EnumEntry
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {org.jetbrains.kotlin.metadata.EnumEntry} EnumEntry
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    EnumEntry.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Creates an EnumEntry message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof org.jetbrains.kotlin.metadata.EnumEntry
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {org.jetbrains.kotlin.metadata.EnumEntry} EnumEntry
                     */
                    EnumEntry.fromObject = function fromObject(object) {
                        if (object instanceof $root.org.jetbrains.kotlin.metadata.EnumEntry)
                            return object;
                        let message = new $root.org.jetbrains.kotlin.metadata.EnumEntry();
                        if (object.name != null)
                            message.name = object.name | 0;
                        if (object.annotation) {
                            if (!Array.isArray(object.annotation))
                                throw TypeError(".org.jetbrains.kotlin.metadata.EnumEntry.annotation: array expected");
                            message.annotation = [];
                            for (let i = 0; i < object.annotation.length; ++i) {
                                if (typeof object.annotation[i] !== "object")
                                    throw TypeError(".org.jetbrains.kotlin.metadata.EnumEntry.annotation: object expected");
                                message.annotation[i] = $root.org.jetbrains.kotlin.metadata.Annotation.fromObject(object.annotation[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from an EnumEntry message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof org.jetbrains.kotlin.metadata.EnumEntry
                     * @static
                     * @param {org.jetbrains.kotlin.metadata.EnumEntry} message EnumEntry
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    EnumEntry.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.arrays || options.defaults)
                            object.annotation = [];
                        if (options.defaults)
                            object.name = 0;
                        if (message.name != null && message.hasOwnProperty("name"))
                            object.name = message.name;
                        if (message.annotation && message.annotation.length) {
                            object.annotation = [];
                            for (let j = 0; j < message.annotation.length; ++j)
                                object.annotation[j] = $root.org.jetbrains.kotlin.metadata.Annotation.toObject(message.annotation[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this EnumEntry to JSON.
                     * @function toJSON
                     * @memberof org.jetbrains.kotlin.metadata.EnumEntry
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    EnumEntry.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for EnumEntry
                     * @function getTypeUrl
                     * @memberof org.jetbrains.kotlin.metadata.EnumEntry
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    EnumEntry.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/org.jetbrains.kotlin.metadata.EnumEntry";
                    };

                    return EnumEntry;
                })();

                /**
                 * Modality enum.
                 * @name org.jetbrains.kotlin.metadata.Modality
                 * @enum {number}
                 * @property {number} FINAL=0 FINAL value
                 * @property {number} OPEN=1 OPEN value
                 * @property {number} ABSTRACT=2 ABSTRACT value
                 * @property {number} SEALED=3 SEALED value
                 */
                metadata.Modality = (function() {
                    const valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "FINAL"] = 0;
                    values[valuesById[1] = "OPEN"] = 1;
                    values[valuesById[2] = "ABSTRACT"] = 2;
                    values[valuesById[3] = "SEALED"] = 3;
                    return values;
                })();

                /**
                 * Visibility enum.
                 * @name org.jetbrains.kotlin.metadata.Visibility
                 * @enum {number}
                 * @property {number} INTERNAL=0 INTERNAL value
                 * @property {number} PRIVATE=1 PRIVATE value
                 * @property {number} PROTECTED=2 PROTECTED value
                 * @property {number} PUBLIC=3 PUBLIC value
                 * @property {number} PRIVATE_TO_THIS=4 PRIVATE_TO_THIS value
                 * @property {number} LOCAL=5 LOCAL value
                 */
                metadata.Visibility = (function() {
                    const valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "INTERNAL"] = 0;
                    values[valuesById[1] = "PRIVATE"] = 1;
                    values[valuesById[2] = "PROTECTED"] = 2;
                    values[valuesById[3] = "PUBLIC"] = 3;
                    values[valuesById[4] = "PRIVATE_TO_THIS"] = 4;
                    values[valuesById[5] = "LOCAL"] = 5;
                    return values;
                })();

                /**
                 * MemberKind enum.
                 * @name org.jetbrains.kotlin.metadata.MemberKind
                 * @enum {number}
                 * @property {number} DECLARATION=0 DECLARATION value
                 * @property {number} FAKE_OVERRIDE=1 FAKE_OVERRIDE value
                 * @property {number} DELEGATION=2 DELEGATION value
                 * @property {number} SYNTHESIZED=3 SYNTHESIZED value
                 */
                metadata.MemberKind = (function() {
                    const valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "DECLARATION"] = 0;
                    values[valuesById[1] = "FAKE_OVERRIDE"] = 1;
                    values[valuesById[2] = "DELEGATION"] = 2;
                    values[valuesById[3] = "SYNTHESIZED"] = 3;
                    return values;
                })();

                /**
                 * ReturnValueStatus enum.
                 * @name org.jetbrains.kotlin.metadata.ReturnValueStatus
                 * @enum {number}
                 * @property {number} UNSPECIFIED=0 UNSPECIFIED value
                 * @property {number} MUST_USE=1 MUST_USE value
                 * @property {number} EXPLICITLY_IGNORABLE=2 EXPLICITLY_IGNORABLE value
                 */
                metadata.ReturnValueStatus = (function() {
                    const valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "UNSPECIFIED"] = 0;
                    values[valuesById[1] = "MUST_USE"] = 1;
                    values[valuesById[2] = "EXPLICITLY_IGNORABLE"] = 2;
                    return values;
                })();

                metadata.VersionRequirement = (function() {

                    /**
                     * Properties of a VersionRequirement.
                     * @memberof org.jetbrains.kotlin.metadata
                     * @interface IVersionRequirement
                     * @property {number|null} [version] VersionRequirement version
                     * @property {number|null} [versionFull] VersionRequirement versionFull
                     * @property {org.jetbrains.kotlin.metadata.VersionRequirement.Level|null} [level] VersionRequirement level
                     * @property {number|null} [errorCode] VersionRequirement errorCode
                     * @property {number|null} [message] VersionRequirement message
                     * @property {org.jetbrains.kotlin.metadata.VersionRequirement.VersionKind|null} [versionKind] VersionRequirement versionKind
                     */

                    /**
                     * Constructs a new VersionRequirement.
                     * @memberof org.jetbrains.kotlin.metadata
                     * @classdesc Represents a VersionRequirement.
                     * @implements IVersionRequirement
                     * @constructor
                     * @param {org.jetbrains.kotlin.metadata.IVersionRequirement=} [properties] Properties to set
                     */
                    function VersionRequirement(properties) {
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * VersionRequirement version.
                     * @member {number} version
                     * @memberof org.jetbrains.kotlin.metadata.VersionRequirement
                     * @instance
                     */
                    VersionRequirement.prototype.version = 0;

                    /**
                     * VersionRequirement versionFull.
                     * @member {number} versionFull
                     * @memberof org.jetbrains.kotlin.metadata.VersionRequirement
                     * @instance
                     */
                    VersionRequirement.prototype.versionFull = 0;

                    /**
                     * VersionRequirement level.
                     * @member {org.jetbrains.kotlin.metadata.VersionRequirement.Level} level
                     * @memberof org.jetbrains.kotlin.metadata.VersionRequirement
                     * @instance
                     */
                    VersionRequirement.prototype.level = 1;

                    /**
                     * VersionRequirement errorCode.
                     * @member {number} errorCode
                     * @memberof org.jetbrains.kotlin.metadata.VersionRequirement
                     * @instance
                     */
                    VersionRequirement.prototype.errorCode = 0;

                    /**
                     * VersionRequirement message.
                     * @member {number} message
                     * @memberof org.jetbrains.kotlin.metadata.VersionRequirement
                     * @instance
                     */
                    VersionRequirement.prototype.message = 0;

                    /**
                     * VersionRequirement versionKind.
                     * @member {org.jetbrains.kotlin.metadata.VersionRequirement.VersionKind} versionKind
                     * @memberof org.jetbrains.kotlin.metadata.VersionRequirement
                     * @instance
                     */
                    VersionRequirement.prototype.versionKind = 0;

                    /**
                     * Decodes a VersionRequirement message from the specified reader or buffer.
                     * @function decode
                     * @memberof org.jetbrains.kotlin.metadata.VersionRequirement
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {org.jetbrains.kotlin.metadata.VersionRequirement} VersionRequirement
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    VersionRequirement.decode = function decode(reader, length, error) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.org.jetbrains.kotlin.metadata.VersionRequirement();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            case 1: {
                                    message.version = reader.int32();
                                    break;
                                }
                            case 2: {
                                    message.versionFull = reader.int32();
                                    break;
                                }
                            case 3: {
                                    message.level = reader.int32();
                                    break;
                                }
                            case 4: {
                                    message.errorCode = reader.int32();
                                    break;
                                }
                            case 5: {
                                    message.message = reader.int32();
                                    break;
                                }
                            case 6: {
                                    message.versionKind = reader.int32();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a VersionRequirement message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof org.jetbrains.kotlin.metadata.VersionRequirement
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {org.jetbrains.kotlin.metadata.VersionRequirement} VersionRequirement
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    VersionRequirement.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Creates a VersionRequirement message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof org.jetbrains.kotlin.metadata.VersionRequirement
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {org.jetbrains.kotlin.metadata.VersionRequirement} VersionRequirement
                     */
                    VersionRequirement.fromObject = function fromObject(object) {
                        if (object instanceof $root.org.jetbrains.kotlin.metadata.VersionRequirement)
                            return object;
                        let message = new $root.org.jetbrains.kotlin.metadata.VersionRequirement();
                        if (object.version != null)
                            message.version = object.version | 0;
                        if (object.versionFull != null)
                            message.versionFull = object.versionFull | 0;
                        switch (object.level) {
                        case "WARNING":
                        case 0:
                            message.level = 0;
                            break;
                        default:
                            if (typeof object.level === "number") {
                                message.level = object.level;
                                break;
                            }
                            break;
                        case "ERROR":
                        case 1:
                            message.level = 1;
                            break;
                        case "HIDDEN":
                        case 2:
                            message.level = 2;
                            break;
                        }
                        if (object.errorCode != null)
                            message.errorCode = object.errorCode | 0;
                        if (object.message != null)
                            message.message = object.message | 0;
                        switch (object.versionKind) {
                        default:
                            if (typeof object.versionKind === "number") {
                                message.versionKind = object.versionKind;
                                break;
                            }
                            break;
                        case "LANGUAGE_VERSION":
                        case 0:
                            message.versionKind = 0;
                            break;
                        case "COMPILER_VERSION":
                        case 1:
                            message.versionKind = 1;
                            break;
                        case "API_VERSION":
                        case 2:
                            message.versionKind = 2;
                            break;
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a VersionRequirement message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof org.jetbrains.kotlin.metadata.VersionRequirement
                     * @static
                     * @param {org.jetbrains.kotlin.metadata.VersionRequirement} message VersionRequirement
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    VersionRequirement.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.defaults) {
                            object.version = 0;
                            object.versionFull = 0;
                            object.level = options.enums === String ? "ERROR" : 1;
                            object.errorCode = 0;
                            object.message = 0;
                            object.versionKind = options.enums === String ? "LANGUAGE_VERSION" : 0;
                        }
                        if (message.version != null && message.hasOwnProperty("version"))
                            object.version = message.version;
                        if (message.versionFull != null && message.hasOwnProperty("versionFull"))
                            object.versionFull = message.versionFull;
                        if (message.level != null && message.hasOwnProperty("level"))
                            object.level = options.enums === String ? $root.org.jetbrains.kotlin.metadata.VersionRequirement.Level[message.level] === undefined ? message.level : $root.org.jetbrains.kotlin.metadata.VersionRequirement.Level[message.level] : message.level;
                        if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                            object.errorCode = message.errorCode;
                        if (message.message != null && message.hasOwnProperty("message"))
                            object.message = message.message;
                        if (message.versionKind != null && message.hasOwnProperty("versionKind"))
                            object.versionKind = options.enums === String ? $root.org.jetbrains.kotlin.metadata.VersionRequirement.VersionKind[message.versionKind] === undefined ? message.versionKind : $root.org.jetbrains.kotlin.metadata.VersionRequirement.VersionKind[message.versionKind] : message.versionKind;
                        return object;
                    };

                    /**
                     * Converts this VersionRequirement to JSON.
                     * @function toJSON
                     * @memberof org.jetbrains.kotlin.metadata.VersionRequirement
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    VersionRequirement.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for VersionRequirement
                     * @function getTypeUrl
                     * @memberof org.jetbrains.kotlin.metadata.VersionRequirement
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    VersionRequirement.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/org.jetbrains.kotlin.metadata.VersionRequirement";
                    };

                    /**
                     * Level enum.
                     * @name org.jetbrains.kotlin.metadata.VersionRequirement.Level
                     * @enum {number}
                     * @property {number} WARNING=0 WARNING value
                     * @property {number} ERROR=1 ERROR value
                     * @property {number} HIDDEN=2 HIDDEN value
                     */
                    VersionRequirement.Level = (function() {
                        const valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "WARNING"] = 0;
                        values[valuesById[1] = "ERROR"] = 1;
                        values[valuesById[2] = "HIDDEN"] = 2;
                        return values;
                    })();

                    /**
                     * VersionKind enum.
                     * @name org.jetbrains.kotlin.metadata.VersionRequirement.VersionKind
                     * @enum {number}
                     * @property {number} LANGUAGE_VERSION=0 LANGUAGE_VERSION value
                     * @property {number} COMPILER_VERSION=1 COMPILER_VERSION value
                     * @property {number} API_VERSION=2 API_VERSION value
                     */
                    VersionRequirement.VersionKind = (function() {
                        const valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "LANGUAGE_VERSION"] = 0;
                        values[valuesById[1] = "COMPILER_VERSION"] = 1;
                        values[valuesById[2] = "API_VERSION"] = 2;
                        return values;
                    })();

                    return VersionRequirement;
                })();

                metadata.VersionRequirementTable = (function() {

                    /**
                     * Properties of a VersionRequirementTable.
                     * @memberof org.jetbrains.kotlin.metadata
                     * @interface IVersionRequirementTable
                     * @property {Array.<org.jetbrains.kotlin.metadata.IVersionRequirement>|null} [requirement] VersionRequirementTable requirement
                     */

                    /**
                     * Constructs a new VersionRequirementTable.
                     * @memberof org.jetbrains.kotlin.metadata
                     * @classdesc Represents a VersionRequirementTable.
                     * @implements IVersionRequirementTable
                     * @constructor
                     * @param {org.jetbrains.kotlin.metadata.IVersionRequirementTable=} [properties] Properties to set
                     */
                    function VersionRequirementTable(properties) {
                        this.requirement = [];
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * VersionRequirementTable requirement.
                     * @member {Array.<org.jetbrains.kotlin.metadata.IVersionRequirement>} requirement
                     * @memberof org.jetbrains.kotlin.metadata.VersionRequirementTable
                     * @instance
                     */
                    VersionRequirementTable.prototype.requirement = $util.emptyArray;

                    /**
                     * Decodes a VersionRequirementTable message from the specified reader or buffer.
                     * @function decode
                     * @memberof org.jetbrains.kotlin.metadata.VersionRequirementTable
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {org.jetbrains.kotlin.metadata.VersionRequirementTable} VersionRequirementTable
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    VersionRequirementTable.decode = function decode(reader, length, error) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.org.jetbrains.kotlin.metadata.VersionRequirementTable();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            case 1: {
                                    if (!(message.requirement && message.requirement.length))
                                        message.requirement = [];
                                    message.requirement.push($root.org.jetbrains.kotlin.metadata.VersionRequirement.decode(reader, reader.uint32()));
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a VersionRequirementTable message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof org.jetbrains.kotlin.metadata.VersionRequirementTable
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {org.jetbrains.kotlin.metadata.VersionRequirementTable} VersionRequirementTable
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    VersionRequirementTable.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Creates a VersionRequirementTable message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof org.jetbrains.kotlin.metadata.VersionRequirementTable
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {org.jetbrains.kotlin.metadata.VersionRequirementTable} VersionRequirementTable
                     */
                    VersionRequirementTable.fromObject = function fromObject(object) {
                        if (object instanceof $root.org.jetbrains.kotlin.metadata.VersionRequirementTable)
                            return object;
                        let message = new $root.org.jetbrains.kotlin.metadata.VersionRequirementTable();
                        if (object.requirement) {
                            if (!Array.isArray(object.requirement))
                                throw TypeError(".org.jetbrains.kotlin.metadata.VersionRequirementTable.requirement: array expected");
                            message.requirement = [];
                            for (let i = 0; i < object.requirement.length; ++i) {
                                if (typeof object.requirement[i] !== "object")
                                    throw TypeError(".org.jetbrains.kotlin.metadata.VersionRequirementTable.requirement: object expected");
                                message.requirement[i] = $root.org.jetbrains.kotlin.metadata.VersionRequirement.fromObject(object.requirement[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a VersionRequirementTable message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof org.jetbrains.kotlin.metadata.VersionRequirementTable
                     * @static
                     * @param {org.jetbrains.kotlin.metadata.VersionRequirementTable} message VersionRequirementTable
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    VersionRequirementTable.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.arrays || options.defaults)
                            object.requirement = [];
                        if (message.requirement && message.requirement.length) {
                            object.requirement = [];
                            for (let j = 0; j < message.requirement.length; ++j)
                                object.requirement[j] = $root.org.jetbrains.kotlin.metadata.VersionRequirement.toObject(message.requirement[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this VersionRequirementTable to JSON.
                     * @function toJSON
                     * @memberof org.jetbrains.kotlin.metadata.VersionRequirementTable
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    VersionRequirementTable.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for VersionRequirementTable
                     * @function getTypeUrl
                     * @memberof org.jetbrains.kotlin.metadata.VersionRequirementTable
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    VersionRequirementTable.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/org.jetbrains.kotlin.metadata.VersionRequirementTable";
                    };

                    return VersionRequirementTable;
                })();

                metadata.PackageFragment = (function() {

                    /**
                     * Properties of a PackageFragment.
                     * @memberof org.jetbrains.kotlin.metadata
                     * @interface IPackageFragment
                     * @property {org.jetbrains.kotlin.metadata.IStringTable|null} [strings] PackageFragment strings
                     * @property {org.jetbrains.kotlin.metadata.IQualifiedNameTable|null} [qualifiedNames] PackageFragment qualifiedNames
                     * @property {org.jetbrains.kotlin.metadata.IPackage|null} ["package"] PackageFragment package
                     * @property {Array.<org.jetbrains.kotlin.metadata.IClass>|null} ["class"] PackageFragment class
                     * @property {Array.<org.jetbrains.kotlin.metadata.IAnnotation>|null} [fileAnnotation] PackageFragment fileAnnotation
                     */

                    /**
                     * Constructs a new PackageFragment.
                     * @memberof org.jetbrains.kotlin.metadata
                     * @classdesc Represents a PackageFragment.
                     * @implements IPackageFragment
                     * @constructor
                     * @param {org.jetbrains.kotlin.metadata.IPackageFragment=} [properties] Properties to set
                     */
                    function PackageFragment(properties) {
                        this["class"] = [];
                        this.fileAnnotation = [];
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * PackageFragment strings.
                     * @member {org.jetbrains.kotlin.metadata.IStringTable|null|undefined} strings
                     * @memberof org.jetbrains.kotlin.metadata.PackageFragment
                     * @instance
                     */
                    PackageFragment.prototype.strings = null;

                    /**
                     * PackageFragment qualifiedNames.
                     * @member {org.jetbrains.kotlin.metadata.IQualifiedNameTable|null|undefined} qualifiedNames
                     * @memberof org.jetbrains.kotlin.metadata.PackageFragment
                     * @instance
                     */
                    PackageFragment.prototype.qualifiedNames = null;

                    /**
                     * PackageFragment package.
                     * @member {org.jetbrains.kotlin.metadata.IPackage|null|undefined} package
                     * @memberof org.jetbrains.kotlin.metadata.PackageFragment
                     * @instance
                     */
                    PackageFragment.prototype["package"] = null;

                    /**
                     * PackageFragment class.
                     * @member {Array.<org.jetbrains.kotlin.metadata.IClass>} class
                     * @memberof org.jetbrains.kotlin.metadata.PackageFragment
                     * @instance
                     */
                    PackageFragment.prototype["class"] = $util.emptyArray;

                    /**
                     * PackageFragment fileAnnotation.
                     * @member {Array.<org.jetbrains.kotlin.metadata.IAnnotation>} fileAnnotation
                     * @memberof org.jetbrains.kotlin.metadata.PackageFragment
                     * @instance
                     */
                    PackageFragment.prototype.fileAnnotation = $util.emptyArray;

                    /**
                     * Decodes a PackageFragment message from the specified reader or buffer.
                     * @function decode
                     * @memberof org.jetbrains.kotlin.metadata.PackageFragment
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {org.jetbrains.kotlin.metadata.PackageFragment} PackageFragment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PackageFragment.decode = function decode(reader, length, error) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.org.jetbrains.kotlin.metadata.PackageFragment();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            case 1: {
                                    message.strings = $root.org.jetbrains.kotlin.metadata.StringTable.decode(reader, reader.uint32());
                                    break;
                                }
                            case 2: {
                                    message.qualifiedNames = $root.org.jetbrains.kotlin.metadata.QualifiedNameTable.decode(reader, reader.uint32());
                                    break;
                                }
                            case 3: {
                                    message["package"] = $root.org.jetbrains.kotlin.metadata.Package.decode(reader, reader.uint32());
                                    break;
                                }
                            case 4: {
                                    if (!(message["class"] && message["class"].length))
                                        message["class"] = [];
                                    message["class"].push($root.org.jetbrains.kotlin.metadata.Class.decode(reader, reader.uint32()));
                                    break;
                                }
                            case 5: {
                                    if (!(message.fileAnnotation && message.fileAnnotation.length))
                                        message.fileAnnotation = [];
                                    message.fileAnnotation.push($root.org.jetbrains.kotlin.metadata.Annotation.decode(reader, reader.uint32()));
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a PackageFragment message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof org.jetbrains.kotlin.metadata.PackageFragment
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {org.jetbrains.kotlin.metadata.PackageFragment} PackageFragment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PackageFragment.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Creates a PackageFragment message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof org.jetbrains.kotlin.metadata.PackageFragment
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {org.jetbrains.kotlin.metadata.PackageFragment} PackageFragment
                     */
                    PackageFragment.fromObject = function fromObject(object) {
                        if (object instanceof $root.org.jetbrains.kotlin.metadata.PackageFragment)
                            return object;
                        let message = new $root.org.jetbrains.kotlin.metadata.PackageFragment();
                        if (object.strings != null) {
                            if (typeof object.strings !== "object")
                                throw TypeError(".org.jetbrains.kotlin.metadata.PackageFragment.strings: object expected");
                            message.strings = $root.org.jetbrains.kotlin.metadata.StringTable.fromObject(object.strings);
                        }
                        if (object.qualifiedNames != null) {
                            if (typeof object.qualifiedNames !== "object")
                                throw TypeError(".org.jetbrains.kotlin.metadata.PackageFragment.qualifiedNames: object expected");
                            message.qualifiedNames = $root.org.jetbrains.kotlin.metadata.QualifiedNameTable.fromObject(object.qualifiedNames);
                        }
                        if (object["package"] != null) {
                            if (typeof object["package"] !== "object")
                                throw TypeError(".org.jetbrains.kotlin.metadata.PackageFragment.package: object expected");
                            message["package"] = $root.org.jetbrains.kotlin.metadata.Package.fromObject(object["package"]);
                        }
                        if (object["class"]) {
                            if (!Array.isArray(object["class"]))
                                throw TypeError(".org.jetbrains.kotlin.metadata.PackageFragment.class: array expected");
                            message["class"] = [];
                            for (let i = 0; i < object["class"].length; ++i) {
                                if (typeof object["class"][i] !== "object")
                                    throw TypeError(".org.jetbrains.kotlin.metadata.PackageFragment.class: object expected");
                                message["class"][i] = $root.org.jetbrains.kotlin.metadata.Class.fromObject(object["class"][i]);
                            }
                        }
                        if (object.fileAnnotation) {
                            if (!Array.isArray(object.fileAnnotation))
                                throw TypeError(".org.jetbrains.kotlin.metadata.PackageFragment.fileAnnotation: array expected");
                            message.fileAnnotation = [];
                            for (let i = 0; i < object.fileAnnotation.length; ++i) {
                                if (typeof object.fileAnnotation[i] !== "object")
                                    throw TypeError(".org.jetbrains.kotlin.metadata.PackageFragment.fileAnnotation: object expected");
                                message.fileAnnotation[i] = $root.org.jetbrains.kotlin.metadata.Annotation.fromObject(object.fileAnnotation[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a PackageFragment message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof org.jetbrains.kotlin.metadata.PackageFragment
                     * @static
                     * @param {org.jetbrains.kotlin.metadata.PackageFragment} message PackageFragment
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    PackageFragment.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.arrays || options.defaults) {
                            object["class"] = [];
                            object.fileAnnotation = [];
                        }
                        if (options.defaults) {
                            object.strings = null;
                            object.qualifiedNames = null;
                            object["package"] = null;
                        }
                        if (message.strings != null && message.hasOwnProperty("strings"))
                            object.strings = $root.org.jetbrains.kotlin.metadata.StringTable.toObject(message.strings, options);
                        if (message.qualifiedNames != null && message.hasOwnProperty("qualifiedNames"))
                            object.qualifiedNames = $root.org.jetbrains.kotlin.metadata.QualifiedNameTable.toObject(message.qualifiedNames, options);
                        if (message["package"] != null && message.hasOwnProperty("package"))
                            object["package"] = $root.org.jetbrains.kotlin.metadata.Package.toObject(message["package"], options);
                        if (message["class"] && message["class"].length) {
                            object["class"] = [];
                            for (let j = 0; j < message["class"].length; ++j)
                                object["class"][j] = $root.org.jetbrains.kotlin.metadata.Class.toObject(message["class"][j], options);
                        }
                        if (message.fileAnnotation && message.fileAnnotation.length) {
                            object.fileAnnotation = [];
                            for (let j = 0; j < message.fileAnnotation.length; ++j)
                                object.fileAnnotation[j] = $root.org.jetbrains.kotlin.metadata.Annotation.toObject(message.fileAnnotation[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this PackageFragment to JSON.
                     * @function toJSON
                     * @memberof org.jetbrains.kotlin.metadata.PackageFragment
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    PackageFragment.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for PackageFragment
                     * @function getTypeUrl
                     * @memberof org.jetbrains.kotlin.metadata.PackageFragment
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    PackageFragment.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/org.jetbrains.kotlin.metadata.PackageFragment";
                    };

                    return PackageFragment;
                })();

                metadata.Contract = (function() {

                    /**
                     * Properties of a Contract.
                     * @memberof org.jetbrains.kotlin.metadata
                     * @interface IContract
                     * @property {Array.<org.jetbrains.kotlin.metadata.IEffect>|null} [effect] Contract effect
                     */

                    /**
                     * Constructs a new Contract.
                     * @memberof org.jetbrains.kotlin.metadata
                     * @classdesc Represents a Contract.
                     * @implements IContract
                     * @constructor
                     * @param {org.jetbrains.kotlin.metadata.IContract=} [properties] Properties to set
                     */
                    function Contract(properties) {
                        this.effect = [];
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Contract effect.
                     * @member {Array.<org.jetbrains.kotlin.metadata.IEffect>} effect
                     * @memberof org.jetbrains.kotlin.metadata.Contract
                     * @instance
                     */
                    Contract.prototype.effect = $util.emptyArray;

                    /**
                     * Decodes a Contract message from the specified reader or buffer.
                     * @function decode
                     * @memberof org.jetbrains.kotlin.metadata.Contract
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {org.jetbrains.kotlin.metadata.Contract} Contract
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Contract.decode = function decode(reader, length, error) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.org.jetbrains.kotlin.metadata.Contract();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            case 1: {
                                    if (!(message.effect && message.effect.length))
                                        message.effect = [];
                                    message.effect.push($root.org.jetbrains.kotlin.metadata.Effect.decode(reader, reader.uint32()));
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Contract message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof org.jetbrains.kotlin.metadata.Contract
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {org.jetbrains.kotlin.metadata.Contract} Contract
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Contract.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Creates a Contract message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof org.jetbrains.kotlin.metadata.Contract
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {org.jetbrains.kotlin.metadata.Contract} Contract
                     */
                    Contract.fromObject = function fromObject(object) {
                        if (object instanceof $root.org.jetbrains.kotlin.metadata.Contract)
                            return object;
                        let message = new $root.org.jetbrains.kotlin.metadata.Contract();
                        if (object.effect) {
                            if (!Array.isArray(object.effect))
                                throw TypeError(".org.jetbrains.kotlin.metadata.Contract.effect: array expected");
                            message.effect = [];
                            for (let i = 0; i < object.effect.length; ++i) {
                                if (typeof object.effect[i] !== "object")
                                    throw TypeError(".org.jetbrains.kotlin.metadata.Contract.effect: object expected");
                                message.effect[i] = $root.org.jetbrains.kotlin.metadata.Effect.fromObject(object.effect[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a Contract message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof org.jetbrains.kotlin.metadata.Contract
                     * @static
                     * @param {org.jetbrains.kotlin.metadata.Contract} message Contract
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Contract.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.arrays || options.defaults)
                            object.effect = [];
                        if (message.effect && message.effect.length) {
                            object.effect = [];
                            for (let j = 0; j < message.effect.length; ++j)
                                object.effect[j] = $root.org.jetbrains.kotlin.metadata.Effect.toObject(message.effect[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this Contract to JSON.
                     * @function toJSON
                     * @memberof org.jetbrains.kotlin.metadata.Contract
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Contract.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for Contract
                     * @function getTypeUrl
                     * @memberof org.jetbrains.kotlin.metadata.Contract
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Contract.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/org.jetbrains.kotlin.metadata.Contract";
                    };

                    return Contract;
                })();

                metadata.Effect = (function() {

                    /**
                     * Properties of an Effect.
                     * @memberof org.jetbrains.kotlin.metadata
                     * @interface IEffect
                     * @property {org.jetbrains.kotlin.metadata.Effect.EffectType|null} [effectType] Effect effectType
                     * @property {Array.<org.jetbrains.kotlin.metadata.IExpression>|null} [effectConstructorArgument] Effect effectConstructorArgument
                     * @property {org.jetbrains.kotlin.metadata.IExpression|null} [conclusionOfConditionalEffect] Effect conclusionOfConditionalEffect
                     * @property {org.jetbrains.kotlin.metadata.Effect.InvocationKind|null} [kind] Effect kind
                     * @property {org.jetbrains.kotlin.metadata.Effect.EffectConditionKind|null} [conditionKind] Effect conditionKind
                     */

                    /**
                     * Constructs a new Effect.
                     * @memberof org.jetbrains.kotlin.metadata
                     * @classdesc Represents an Effect.
                     * @implements IEffect
                     * @constructor
                     * @param {org.jetbrains.kotlin.metadata.IEffect=} [properties] Properties to set
                     */
                    function Effect(properties) {
                        this.effectConstructorArgument = [];
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Effect effectType.
                     * @member {org.jetbrains.kotlin.metadata.Effect.EffectType} effectType
                     * @memberof org.jetbrains.kotlin.metadata.Effect
                     * @instance
                     */
                    Effect.prototype.effectType = 0;

                    /**
                     * Effect effectConstructorArgument.
                     * @member {Array.<org.jetbrains.kotlin.metadata.IExpression>} effectConstructorArgument
                     * @memberof org.jetbrains.kotlin.metadata.Effect
                     * @instance
                     */
                    Effect.prototype.effectConstructorArgument = $util.emptyArray;

                    /**
                     * Effect conclusionOfConditionalEffect.
                     * @member {org.jetbrains.kotlin.metadata.IExpression|null|undefined} conclusionOfConditionalEffect
                     * @memberof org.jetbrains.kotlin.metadata.Effect
                     * @instance
                     */
                    Effect.prototype.conclusionOfConditionalEffect = null;

                    /**
                     * Effect kind.
                     * @member {org.jetbrains.kotlin.metadata.Effect.InvocationKind} kind
                     * @memberof org.jetbrains.kotlin.metadata.Effect
                     * @instance
                     */
                    Effect.prototype.kind = 0;

                    /**
                     * Effect conditionKind.
                     * @member {org.jetbrains.kotlin.metadata.Effect.EffectConditionKind} conditionKind
                     * @memberof org.jetbrains.kotlin.metadata.Effect
                     * @instance
                     */
                    Effect.prototype.conditionKind = 0;

                    /**
                     * Decodes an Effect message from the specified reader or buffer.
                     * @function decode
                     * @memberof org.jetbrains.kotlin.metadata.Effect
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {org.jetbrains.kotlin.metadata.Effect} Effect
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Effect.decode = function decode(reader, length, error) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.org.jetbrains.kotlin.metadata.Effect();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            case 1: {
                                    message.effectType = reader.int32();
                                    break;
                                }
                            case 2: {
                                    if (!(message.effectConstructorArgument && message.effectConstructorArgument.length))
                                        message.effectConstructorArgument = [];
                                    message.effectConstructorArgument.push($root.org.jetbrains.kotlin.metadata.Expression.decode(reader, reader.uint32()));
                                    break;
                                }
                            case 3: {
                                    message.conclusionOfConditionalEffect = $root.org.jetbrains.kotlin.metadata.Expression.decode(reader, reader.uint32());
                                    break;
                                }
                            case 4: {
                                    message.kind = reader.int32();
                                    break;
                                }
                            case 5: {
                                    message.conditionKind = reader.int32();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an Effect message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof org.jetbrains.kotlin.metadata.Effect
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {org.jetbrains.kotlin.metadata.Effect} Effect
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Effect.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Creates an Effect message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof org.jetbrains.kotlin.metadata.Effect
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {org.jetbrains.kotlin.metadata.Effect} Effect
                     */
                    Effect.fromObject = function fromObject(object) {
                        if (object instanceof $root.org.jetbrains.kotlin.metadata.Effect)
                            return object;
                        let message = new $root.org.jetbrains.kotlin.metadata.Effect();
                        switch (object.effectType) {
                        default:
                            if (typeof object.effectType === "number") {
                                message.effectType = object.effectType;
                                break;
                            }
                            break;
                        case "RETURNS_CONSTANT":
                        case 0:
                            message.effectType = 0;
                            break;
                        case "CALLS":
                        case 1:
                            message.effectType = 1;
                            break;
                        case "RETURNS_NOT_NULL":
                        case 2:
                            message.effectType = 2;
                            break;
                        case "RETURNS_RESULT_OF":
                        case 3:
                            message.effectType = 3;
                            break;
                        }
                        if (object.effectConstructorArgument) {
                            if (!Array.isArray(object.effectConstructorArgument))
                                throw TypeError(".org.jetbrains.kotlin.metadata.Effect.effectConstructorArgument: array expected");
                            message.effectConstructorArgument = [];
                            for (let i = 0; i < object.effectConstructorArgument.length; ++i) {
                                if (typeof object.effectConstructorArgument[i] !== "object")
                                    throw TypeError(".org.jetbrains.kotlin.metadata.Effect.effectConstructorArgument: object expected");
                                message.effectConstructorArgument[i] = $root.org.jetbrains.kotlin.metadata.Expression.fromObject(object.effectConstructorArgument[i]);
                            }
                        }
                        if (object.conclusionOfConditionalEffect != null) {
                            if (typeof object.conclusionOfConditionalEffect !== "object")
                                throw TypeError(".org.jetbrains.kotlin.metadata.Effect.conclusionOfConditionalEffect: object expected");
                            message.conclusionOfConditionalEffect = $root.org.jetbrains.kotlin.metadata.Expression.fromObject(object.conclusionOfConditionalEffect);
                        }
                        switch (object.kind) {
                        default:
                            if (typeof object.kind === "number") {
                                message.kind = object.kind;
                                break;
                            }
                            break;
                        case "AT_MOST_ONCE":
                        case 0:
                            message.kind = 0;
                            break;
                        case "EXACTLY_ONCE":
                        case 1:
                            message.kind = 1;
                            break;
                        case "AT_LEAST_ONCE":
                        case 2:
                            message.kind = 2;
                            break;
                        }
                        switch (object.conditionKind) {
                        default:
                            if (typeof object.conditionKind === "number") {
                                message.conditionKind = object.conditionKind;
                                break;
                            }
                            break;
                        case "CONCLUSION_CONDITION":
                        case 0:
                            message.conditionKind = 0;
                            break;
                        case "RETURNS_CONDITION":
                        case 1:
                            message.conditionKind = 1;
                            break;
                        case "HOLDSIN_CONDITION":
                        case 2:
                            message.conditionKind = 2;
                            break;
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from an Effect message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof org.jetbrains.kotlin.metadata.Effect
                     * @static
                     * @param {org.jetbrains.kotlin.metadata.Effect} message Effect
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Effect.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.arrays || options.defaults)
                            object.effectConstructorArgument = [];
                        if (options.defaults) {
                            object.effectType = options.enums === String ? "RETURNS_CONSTANT" : 0;
                            object.conclusionOfConditionalEffect = null;
                            object.kind = options.enums === String ? "AT_MOST_ONCE" : 0;
                            object.conditionKind = options.enums === String ? "CONCLUSION_CONDITION" : 0;
                        }
                        if (message.effectType != null && message.hasOwnProperty("effectType"))
                            object.effectType = options.enums === String ? $root.org.jetbrains.kotlin.metadata.Effect.EffectType[message.effectType] === undefined ? message.effectType : $root.org.jetbrains.kotlin.metadata.Effect.EffectType[message.effectType] : message.effectType;
                        if (message.effectConstructorArgument && message.effectConstructorArgument.length) {
                            object.effectConstructorArgument = [];
                            for (let j = 0; j < message.effectConstructorArgument.length; ++j)
                                object.effectConstructorArgument[j] = $root.org.jetbrains.kotlin.metadata.Expression.toObject(message.effectConstructorArgument[j], options);
                        }
                        if (message.conclusionOfConditionalEffect != null && message.hasOwnProperty("conclusionOfConditionalEffect"))
                            object.conclusionOfConditionalEffect = $root.org.jetbrains.kotlin.metadata.Expression.toObject(message.conclusionOfConditionalEffect, options);
                        if (message.kind != null && message.hasOwnProperty("kind"))
                            object.kind = options.enums === String ? $root.org.jetbrains.kotlin.metadata.Effect.InvocationKind[message.kind] === undefined ? message.kind : $root.org.jetbrains.kotlin.metadata.Effect.InvocationKind[message.kind] : message.kind;
                        if (message.conditionKind != null && message.hasOwnProperty("conditionKind"))
                            object.conditionKind = options.enums === String ? $root.org.jetbrains.kotlin.metadata.Effect.EffectConditionKind[message.conditionKind] === undefined ? message.conditionKind : $root.org.jetbrains.kotlin.metadata.Effect.EffectConditionKind[message.conditionKind] : message.conditionKind;
                        return object;
                    };

                    /**
                     * Converts this Effect to JSON.
                     * @function toJSON
                     * @memberof org.jetbrains.kotlin.metadata.Effect
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Effect.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for Effect
                     * @function getTypeUrl
                     * @memberof org.jetbrains.kotlin.metadata.Effect
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Effect.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/org.jetbrains.kotlin.metadata.Effect";
                    };

                    /**
                     * EffectType enum.
                     * @name org.jetbrains.kotlin.metadata.Effect.EffectType
                     * @enum {number}
                     * @property {number} RETURNS_CONSTANT=0 RETURNS_CONSTANT value
                     * @property {number} CALLS=1 CALLS value
                     * @property {number} RETURNS_NOT_NULL=2 RETURNS_NOT_NULL value
                     * @property {number} RETURNS_RESULT_OF=3 RETURNS_RESULT_OF value
                     */
                    Effect.EffectType = (function() {
                        const valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "RETURNS_CONSTANT"] = 0;
                        values[valuesById[1] = "CALLS"] = 1;
                        values[valuesById[2] = "RETURNS_NOT_NULL"] = 2;
                        values[valuesById[3] = "RETURNS_RESULT_OF"] = 3;
                        return values;
                    })();

                    /**
                     * InvocationKind enum.
                     * @name org.jetbrains.kotlin.metadata.Effect.InvocationKind
                     * @enum {number}
                     * @property {number} AT_MOST_ONCE=0 AT_MOST_ONCE value
                     * @property {number} EXACTLY_ONCE=1 EXACTLY_ONCE value
                     * @property {number} AT_LEAST_ONCE=2 AT_LEAST_ONCE value
                     */
                    Effect.InvocationKind = (function() {
                        const valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "AT_MOST_ONCE"] = 0;
                        values[valuesById[1] = "EXACTLY_ONCE"] = 1;
                        values[valuesById[2] = "AT_LEAST_ONCE"] = 2;
                        return values;
                    })();

                    /**
                     * EffectConditionKind enum.
                     * @name org.jetbrains.kotlin.metadata.Effect.EffectConditionKind
                     * @enum {number}
                     * @property {number} CONCLUSION_CONDITION=0 CONCLUSION_CONDITION value
                     * @property {number} RETURNS_CONDITION=1 RETURNS_CONDITION value
                     * @property {number} HOLDSIN_CONDITION=2 HOLDSIN_CONDITION value
                     */
                    Effect.EffectConditionKind = (function() {
                        const valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "CONCLUSION_CONDITION"] = 0;
                        values[valuesById[1] = "RETURNS_CONDITION"] = 1;
                        values[valuesById[2] = "HOLDSIN_CONDITION"] = 2;
                        return values;
                    })();

                    return Effect;
                })();

                metadata.Expression = (function() {

                    /**
                     * Properties of an Expression.
                     * @memberof org.jetbrains.kotlin.metadata
                     * @interface IExpression
                     * @property {number|null} [flags] Expression flags
                     * @property {number|null} [valueParameterReference] Expression valueParameterReference
                     * @property {org.jetbrains.kotlin.metadata.Expression.ConstantValue|null} [constantValue] Expression constantValue
                     * @property {org.jetbrains.kotlin.metadata.IType|null} [isInstanceType] Expression isInstanceType
                     * @property {number|null} [isInstanceTypeId] Expression isInstanceTypeId
                     * @property {Array.<org.jetbrains.kotlin.metadata.IExpression>|null} [andArgument] Expression andArgument
                     * @property {Array.<org.jetbrains.kotlin.metadata.IExpression>|null} [orArgument] Expression orArgument
                     */

                    /**
                     * Constructs a new Expression.
                     * @memberof org.jetbrains.kotlin.metadata
                     * @classdesc Represents an Expression.
                     * @implements IExpression
                     * @constructor
                     * @param {org.jetbrains.kotlin.metadata.IExpression=} [properties] Properties to set
                     */
                    function Expression(properties) {
                        this.andArgument = [];
                        this.orArgument = [];
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Expression flags.
                     * @member {number} flags
                     * @memberof org.jetbrains.kotlin.metadata.Expression
                     * @instance
                     */
                    Expression.prototype.flags = 0;

                    /**
                     * Expression valueParameterReference.
                     * @member {number} valueParameterReference
                     * @memberof org.jetbrains.kotlin.metadata.Expression
                     * @instance
                     */
                    Expression.prototype.valueParameterReference = 0;

                    /**
                     * Expression constantValue.
                     * @member {org.jetbrains.kotlin.metadata.Expression.ConstantValue} constantValue
                     * @memberof org.jetbrains.kotlin.metadata.Expression
                     * @instance
                     */
                    Expression.prototype.constantValue = 0;

                    /**
                     * Expression isInstanceType.
                     * @member {org.jetbrains.kotlin.metadata.IType|null|undefined} isInstanceType
                     * @memberof org.jetbrains.kotlin.metadata.Expression
                     * @instance
                     */
                    Expression.prototype.isInstanceType = null;

                    /**
                     * Expression isInstanceTypeId.
                     * @member {number} isInstanceTypeId
                     * @memberof org.jetbrains.kotlin.metadata.Expression
                     * @instance
                     */
                    Expression.prototype.isInstanceTypeId = 0;

                    /**
                     * Expression andArgument.
                     * @member {Array.<org.jetbrains.kotlin.metadata.IExpression>} andArgument
                     * @memberof org.jetbrains.kotlin.metadata.Expression
                     * @instance
                     */
                    Expression.prototype.andArgument = $util.emptyArray;

                    /**
                     * Expression orArgument.
                     * @member {Array.<org.jetbrains.kotlin.metadata.IExpression>} orArgument
                     * @memberof org.jetbrains.kotlin.metadata.Expression
                     * @instance
                     */
                    Expression.prototype.orArgument = $util.emptyArray;

                    /**
                     * Decodes an Expression message from the specified reader or buffer.
                     * @function decode
                     * @memberof org.jetbrains.kotlin.metadata.Expression
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {org.jetbrains.kotlin.metadata.Expression} Expression
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Expression.decode = function decode(reader, length, error) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.org.jetbrains.kotlin.metadata.Expression();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            case 1: {
                                    message.flags = reader.int32();
                                    break;
                                }
                            case 2: {
                                    message.valueParameterReference = reader.int32();
                                    break;
                                }
                            case 3: {
                                    message.constantValue = reader.int32();
                                    break;
                                }
                            case 4: {
                                    message.isInstanceType = $root.org.jetbrains.kotlin.metadata.Type.decode(reader, reader.uint32());
                                    break;
                                }
                            case 5: {
                                    message.isInstanceTypeId = reader.int32();
                                    break;
                                }
                            case 6: {
                                    if (!(message.andArgument && message.andArgument.length))
                                        message.andArgument = [];
                                    message.andArgument.push($root.org.jetbrains.kotlin.metadata.Expression.decode(reader, reader.uint32()));
                                    break;
                                }
                            case 7: {
                                    if (!(message.orArgument && message.orArgument.length))
                                        message.orArgument = [];
                                    message.orArgument.push($root.org.jetbrains.kotlin.metadata.Expression.decode(reader, reader.uint32()));
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an Expression message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof org.jetbrains.kotlin.metadata.Expression
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {org.jetbrains.kotlin.metadata.Expression} Expression
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Expression.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Creates an Expression message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof org.jetbrains.kotlin.metadata.Expression
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {org.jetbrains.kotlin.metadata.Expression} Expression
                     */
                    Expression.fromObject = function fromObject(object) {
                        if (object instanceof $root.org.jetbrains.kotlin.metadata.Expression)
                            return object;
                        let message = new $root.org.jetbrains.kotlin.metadata.Expression();
                        if (object.flags != null)
                            message.flags = object.flags | 0;
                        if (object.valueParameterReference != null)
                            message.valueParameterReference = object.valueParameterReference | 0;
                        switch (object.constantValue) {
                        default:
                            if (typeof object.constantValue === "number") {
                                message.constantValue = object.constantValue;
                                break;
                            }
                            break;
                        case "TRUE":
                        case 0:
                            message.constantValue = 0;
                            break;
                        case "FALSE":
                        case 1:
                            message.constantValue = 1;
                            break;
                        case "NULL":
                        case 2:
                            message.constantValue = 2;
                            break;
                        }
                        if (object.isInstanceType != null) {
                            if (typeof object.isInstanceType !== "object")
                                throw TypeError(".org.jetbrains.kotlin.metadata.Expression.isInstanceType: object expected");
                            message.isInstanceType = $root.org.jetbrains.kotlin.metadata.Type.fromObject(object.isInstanceType);
                        }
                        if (object.isInstanceTypeId != null)
                            message.isInstanceTypeId = object.isInstanceTypeId | 0;
                        if (object.andArgument) {
                            if (!Array.isArray(object.andArgument))
                                throw TypeError(".org.jetbrains.kotlin.metadata.Expression.andArgument: array expected");
                            message.andArgument = [];
                            for (let i = 0; i < object.andArgument.length; ++i) {
                                if (typeof object.andArgument[i] !== "object")
                                    throw TypeError(".org.jetbrains.kotlin.metadata.Expression.andArgument: object expected");
                                message.andArgument[i] = $root.org.jetbrains.kotlin.metadata.Expression.fromObject(object.andArgument[i]);
                            }
                        }
                        if (object.orArgument) {
                            if (!Array.isArray(object.orArgument))
                                throw TypeError(".org.jetbrains.kotlin.metadata.Expression.orArgument: array expected");
                            message.orArgument = [];
                            for (let i = 0; i < object.orArgument.length; ++i) {
                                if (typeof object.orArgument[i] !== "object")
                                    throw TypeError(".org.jetbrains.kotlin.metadata.Expression.orArgument: object expected");
                                message.orArgument[i] = $root.org.jetbrains.kotlin.metadata.Expression.fromObject(object.orArgument[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from an Expression message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof org.jetbrains.kotlin.metadata.Expression
                     * @static
                     * @param {org.jetbrains.kotlin.metadata.Expression} message Expression
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Expression.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.arrays || options.defaults) {
                            object.andArgument = [];
                            object.orArgument = [];
                        }
                        if (options.defaults) {
                            object.flags = 0;
                            object.valueParameterReference = 0;
                            object.constantValue = options.enums === String ? "TRUE" : 0;
                            object.isInstanceType = null;
                            object.isInstanceTypeId = 0;
                        }
                        if (message.flags != null && message.hasOwnProperty("flags"))
                            object.flags = message.flags;
                        if (message.valueParameterReference != null && message.hasOwnProperty("valueParameterReference"))
                            object.valueParameterReference = message.valueParameterReference;
                        if (message.constantValue != null && message.hasOwnProperty("constantValue"))
                            object.constantValue = options.enums === String ? $root.org.jetbrains.kotlin.metadata.Expression.ConstantValue[message.constantValue] === undefined ? message.constantValue : $root.org.jetbrains.kotlin.metadata.Expression.ConstantValue[message.constantValue] : message.constantValue;
                        if (message.isInstanceType != null && message.hasOwnProperty("isInstanceType"))
                            object.isInstanceType = $root.org.jetbrains.kotlin.metadata.Type.toObject(message.isInstanceType, options);
                        if (message.isInstanceTypeId != null && message.hasOwnProperty("isInstanceTypeId"))
                            object.isInstanceTypeId = message.isInstanceTypeId;
                        if (message.andArgument && message.andArgument.length) {
                            object.andArgument = [];
                            for (let j = 0; j < message.andArgument.length; ++j)
                                object.andArgument[j] = $root.org.jetbrains.kotlin.metadata.Expression.toObject(message.andArgument[j], options);
                        }
                        if (message.orArgument && message.orArgument.length) {
                            object.orArgument = [];
                            for (let j = 0; j < message.orArgument.length; ++j)
                                object.orArgument[j] = $root.org.jetbrains.kotlin.metadata.Expression.toObject(message.orArgument[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this Expression to JSON.
                     * @function toJSON
                     * @memberof org.jetbrains.kotlin.metadata.Expression
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Expression.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for Expression
                     * @function getTypeUrl
                     * @memberof org.jetbrains.kotlin.metadata.Expression
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Expression.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/org.jetbrains.kotlin.metadata.Expression";
                    };

                    /**
                     * ConstantValue enum.
                     * @name org.jetbrains.kotlin.metadata.Expression.ConstantValue
                     * @enum {number}
                     * @property {number} TRUE=0 TRUE value
                     * @property {number} FALSE=1 FALSE value
                     * @property {number} NULL=2 NULL value
                     */
                    Expression.ConstantValue = (function() {
                        const valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "TRUE"] = 0;
                        values[valuesById[1] = "FALSE"] = 1;
                        values[valuesById[2] = "NULL"] = 2;
                        return values;
                    })();

                    return Expression;
                })();

                metadata.CompilerPluginData = (function() {

                    /**
                     * Properties of a CompilerPluginData.
                     * @memberof org.jetbrains.kotlin.metadata
                     * @interface ICompilerPluginData
                     * @property {number} pluginId CompilerPluginData pluginId
                     * @property {Uint8Array} data CompilerPluginData data
                     */

                    /**
                     * Constructs a new CompilerPluginData.
                     * @memberof org.jetbrains.kotlin.metadata
                     * @classdesc Represents a CompilerPluginData.
                     * @implements ICompilerPluginData
                     * @constructor
                     * @param {org.jetbrains.kotlin.metadata.ICompilerPluginData=} [properties] Properties to set
                     */
                    function CompilerPluginData(properties) {
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * CompilerPluginData pluginId.
                     * @member {number} pluginId
                     * @memberof org.jetbrains.kotlin.metadata.CompilerPluginData
                     * @instance
                     */
                    CompilerPluginData.prototype.pluginId = 0;

                    /**
                     * CompilerPluginData data.
                     * @member {Uint8Array} data
                     * @memberof org.jetbrains.kotlin.metadata.CompilerPluginData
                     * @instance
                     */
                    CompilerPluginData.prototype.data = $util.newBuffer([]);

                    /**
                     * Decodes a CompilerPluginData message from the specified reader or buffer.
                     * @function decode
                     * @memberof org.jetbrains.kotlin.metadata.CompilerPluginData
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {org.jetbrains.kotlin.metadata.CompilerPluginData} CompilerPluginData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CompilerPluginData.decode = function decode(reader, length, error) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.org.jetbrains.kotlin.metadata.CompilerPluginData();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            case 1: {
                                    message.pluginId = reader.int32();
                                    break;
                                }
                            case 2: {
                                    message.data = reader.bytes();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        if (!message.hasOwnProperty("pluginId"))
                            throw $util.ProtocolError("missing required 'pluginId'", { instance: message });
                        if (!message.hasOwnProperty("data"))
                            throw $util.ProtocolError("missing required 'data'", { instance: message });
                        return message;
                    };

                    /**
                     * Decodes a CompilerPluginData message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof org.jetbrains.kotlin.metadata.CompilerPluginData
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {org.jetbrains.kotlin.metadata.CompilerPluginData} CompilerPluginData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CompilerPluginData.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Creates a CompilerPluginData message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof org.jetbrains.kotlin.metadata.CompilerPluginData
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {org.jetbrains.kotlin.metadata.CompilerPluginData} CompilerPluginData
                     */
                    CompilerPluginData.fromObject = function fromObject(object) {
                        if (object instanceof $root.org.jetbrains.kotlin.metadata.CompilerPluginData)
                            return object;
                        let message = new $root.org.jetbrains.kotlin.metadata.CompilerPluginData();
                        if (object.pluginId != null)
                            message.pluginId = object.pluginId | 0;
                        if (object.data != null)
                            if (typeof object.data === "string")
                                $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                            else if (object.data.length >= 0)
                                message.data = object.data;
                        return message;
                    };

                    /**
                     * Creates a plain object from a CompilerPluginData message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof org.jetbrains.kotlin.metadata.CompilerPluginData
                     * @static
                     * @param {org.jetbrains.kotlin.metadata.CompilerPluginData} message CompilerPluginData
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    CompilerPluginData.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.defaults) {
                            object.pluginId = 0;
                            if (options.bytes === String)
                                object.data = "";
                            else {
                                object.data = [];
                                if (options.bytes !== Array)
                                    object.data = $util.newBuffer(object.data);
                            }
                        }
                        if (message.pluginId != null && message.hasOwnProperty("pluginId"))
                            object.pluginId = message.pluginId;
                        if (message.data != null && message.hasOwnProperty("data"))
                            object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
                        return object;
                    };

                    /**
                     * Converts this CompilerPluginData to JSON.
                     * @function toJSON
                     * @memberof org.jetbrains.kotlin.metadata.CompilerPluginData
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    CompilerPluginData.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for CompilerPluginData
                     * @function getTypeUrl
                     * @memberof org.jetbrains.kotlin.metadata.CompilerPluginData
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    CompilerPluginData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/org.jetbrains.kotlin.metadata.CompilerPluginData";
                    };

                    return CompilerPluginData;
                })();

                return metadata;
            })();

            return kotlin;
        })();

        return jetbrains;
    })();

    return org;
})();

export const google = $root.google = (() => {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    const google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        const protobuf = {};

        protobuf.FileDescriptorSet = (function() {

            /**
             * Properties of a FileDescriptorSet.
             * @memberof google.protobuf
             * @interface IFileDescriptorSet
             * @property {Array.<google.protobuf.IFileDescriptorProto>|null} [file] FileDescriptorSet file
             */

            /**
             * Constructs a new FileDescriptorSet.
             * @memberof google.protobuf
             * @classdesc Represents a FileDescriptorSet.
             * @implements IFileDescriptorSet
             * @constructor
             * @param {google.protobuf.IFileDescriptorSet=} [properties] Properties to set
             */
            function FileDescriptorSet(properties) {
                this.file = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FileDescriptorSet file.
             * @member {Array.<google.protobuf.IFileDescriptorProto>} file
             * @memberof google.protobuf.FileDescriptorSet
             * @instance
             */
            FileDescriptorSet.prototype.file = $util.emptyArray;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileDescriptorSet.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileDescriptorSet();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.file && message.file.length))
                                message.file = [];
                            message.file.push($root.google.protobuf.FileDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileDescriptorSet.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
             */
            FileDescriptorSet.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FileDescriptorSet)
                    return object;
                let message = new $root.google.protobuf.FileDescriptorSet();
                if (object.file) {
                    if (!Array.isArray(object.file))
                        throw TypeError(".google.protobuf.FileDescriptorSet.file: array expected");
                    message.file = [];
                    for (let i = 0; i < object.file.length; ++i) {
                        if (typeof object.file[i] !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorSet.file: object expected");
                        message.file[i] = $root.google.protobuf.FileDescriptorProto.fromObject(object.file[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {google.protobuf.FileDescriptorSet} message FileDescriptorSet
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FileDescriptorSet.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.file = [];
                if (message.file && message.file.length) {
                    object.file = [];
                    for (let j = 0; j < message.file.length; ++j)
                        object.file[j] = $root.google.protobuf.FileDescriptorProto.toObject(message.file[j], options);
                }
                return object;
            };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @function toJSON
             * @memberof google.protobuf.FileDescriptorSet
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FileDescriptorSet.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for FileDescriptorSet
             * @function getTypeUrl
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            FileDescriptorSet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.FileDescriptorSet";
            };

            return FileDescriptorSet;
        })();

        protobuf.FileDescriptorProto = (function() {

            /**
             * Properties of a FileDescriptorProto.
             * @memberof google.protobuf
             * @interface IFileDescriptorProto
             * @property {string|null} [name] FileDescriptorProto name
             * @property {string|null} ["package"] FileDescriptorProto package
             * @property {Array.<string>|null} [dependency] FileDescriptorProto dependency
             * @property {Array.<number>|null} [publicDependency] FileDescriptorProto publicDependency
             * @property {Array.<number>|null} [weakDependency] FileDescriptorProto weakDependency
             * @property {Array.<google.protobuf.IDescriptorProto>|null} [messageType] FileDescriptorProto messageType
             * @property {Array.<google.protobuf.IEnumDescriptorProto>|null} [enumType] FileDescriptorProto enumType
             * @property {Array.<google.protobuf.IServiceDescriptorProto>|null} [service] FileDescriptorProto service
             * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [extension] FileDescriptorProto extension
             * @property {google.protobuf.IFileOptions|null} [options] FileDescriptorProto options
             * @property {google.protobuf.ISourceCodeInfo|null} [sourceCodeInfo] FileDescriptorProto sourceCodeInfo
             */

            /**
             * Constructs a new FileDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a FileDescriptorProto.
             * @implements IFileDescriptorProto
             * @constructor
             * @param {google.protobuf.IFileDescriptorProto=} [properties] Properties to set
             */
            function FileDescriptorProto(properties) {
                this.dependency = [];
                this.publicDependency = [];
                this.weakDependency = [];
                this.messageType = [];
                this.enumType = [];
                this.service = [];
                this.extension = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FileDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.name = "";

            /**
             * FileDescriptorProto package.
             * @member {string} package
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype["package"] = "";

            /**
             * FileDescriptorProto dependency.
             * @member {Array.<string>} dependency
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.dependency = $util.emptyArray;

            /**
             * FileDescriptorProto publicDependency.
             * @member {Array.<number>} publicDependency
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.publicDependency = $util.emptyArray;

            /**
             * FileDescriptorProto weakDependency.
             * @member {Array.<number>} weakDependency
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.weakDependency = $util.emptyArray;

            /**
             * FileDescriptorProto messageType.
             * @member {Array.<google.protobuf.IDescriptorProto>} messageType
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.messageType = $util.emptyArray;

            /**
             * FileDescriptorProto enumType.
             * @member {Array.<google.protobuf.IEnumDescriptorProto>} enumType
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.enumType = $util.emptyArray;

            /**
             * FileDescriptorProto service.
             * @member {Array.<google.protobuf.IServiceDescriptorProto>} service
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.service = $util.emptyArray;

            /**
             * FileDescriptorProto extension.
             * @member {Array.<google.protobuf.IFieldDescriptorProto>} extension
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.extension = $util.emptyArray;

            /**
             * FileDescriptorProto options.
             * @member {google.protobuf.IFileOptions|null|undefined} options
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.options = null;

            /**
             * FileDescriptorProto sourceCodeInfo.
             * @member {google.protobuf.ISourceCodeInfo|null|undefined} sourceCodeInfo
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.sourceCodeInfo = null;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileDescriptorProto.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileDescriptorProto();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.name = reader.string();
                            break;
                        }
                    case 2: {
                            message["package"] = reader.string();
                            break;
                        }
                    case 3: {
                            if (!(message.dependency && message.dependency.length))
                                message.dependency = [];
                            message.dependency.push(reader.string());
                            break;
                        }
                    case 10: {
                            if (!(message.publicDependency && message.publicDependency.length))
                                message.publicDependency = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.publicDependency.push(reader.int32());
                            } else
                                message.publicDependency.push(reader.int32());
                            break;
                        }
                    case 11: {
                            if (!(message.weakDependency && message.weakDependency.length))
                                message.weakDependency = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.weakDependency.push(reader.int32());
                            } else
                                message.weakDependency.push(reader.int32());
                            break;
                        }
                    case 4: {
                            if (!(message.messageType && message.messageType.length))
                                message.messageType = [];
                            message.messageType.push($root.google.protobuf.DescriptorProto.decode(reader, reader.uint32()));
                            break;
                        }
                    case 5: {
                            if (!(message.enumType && message.enumType.length))
                                message.enumType = [];
                            message.enumType.push($root.google.protobuf.EnumDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        }
                    case 6: {
                            if (!(message.service && message.service.length))
                                message.service = [];
                            message.service.push($root.google.protobuf.ServiceDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        }
                    case 7: {
                            if (!(message.extension && message.extension.length))
                                message.extension = [];
                            message.extension.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        }
                    case 8: {
                            message.options = $root.google.protobuf.FileOptions.decode(reader, reader.uint32());
                            break;
                        }
                    case 9: {
                            message.sourceCodeInfo = $root.google.protobuf.SourceCodeInfo.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
             */
            FileDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FileDescriptorProto)
                    return object;
                let message = new $root.google.protobuf.FileDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object["package"] != null)
                    message["package"] = String(object["package"]);
                if (object.dependency) {
                    if (!Array.isArray(object.dependency))
                        throw TypeError(".google.protobuf.FileDescriptorProto.dependency: array expected");
                    message.dependency = [];
                    for (let i = 0; i < object.dependency.length; ++i)
                        message.dependency[i] = String(object.dependency[i]);
                }
                if (object.publicDependency) {
                    if (!Array.isArray(object.publicDependency))
                        throw TypeError(".google.protobuf.FileDescriptorProto.publicDependency: array expected");
                    message.publicDependency = [];
                    for (let i = 0; i < object.publicDependency.length; ++i)
                        message.publicDependency[i] = object.publicDependency[i] | 0;
                }
                if (object.weakDependency) {
                    if (!Array.isArray(object.weakDependency))
                        throw TypeError(".google.protobuf.FileDescriptorProto.weakDependency: array expected");
                    message.weakDependency = [];
                    for (let i = 0; i < object.weakDependency.length; ++i)
                        message.weakDependency[i] = object.weakDependency[i] | 0;
                }
                if (object.messageType) {
                    if (!Array.isArray(object.messageType))
                        throw TypeError(".google.protobuf.FileDescriptorProto.messageType: array expected");
                    message.messageType = [];
                    for (let i = 0; i < object.messageType.length; ++i) {
                        if (typeof object.messageType[i] !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.messageType: object expected");
                        message.messageType[i] = $root.google.protobuf.DescriptorProto.fromObject(object.messageType[i]);
                    }
                }
                if (object.enumType) {
                    if (!Array.isArray(object.enumType))
                        throw TypeError(".google.protobuf.FileDescriptorProto.enumType: array expected");
                    message.enumType = [];
                    for (let i = 0; i < object.enumType.length; ++i) {
                        if (typeof object.enumType[i] !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.enumType: object expected");
                        message.enumType[i] = $root.google.protobuf.EnumDescriptorProto.fromObject(object.enumType[i]);
                    }
                }
                if (object.service) {
                    if (!Array.isArray(object.service))
                        throw TypeError(".google.protobuf.FileDescriptorProto.service: array expected");
                    message.service = [];
                    for (let i = 0; i < object.service.length; ++i) {
                        if (typeof object.service[i] !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.service: object expected");
                        message.service[i] = $root.google.protobuf.ServiceDescriptorProto.fromObject(object.service[i]);
                    }
                }
                if (object.extension) {
                    if (!Array.isArray(object.extension))
                        throw TypeError(".google.protobuf.FileDescriptorProto.extension: array expected");
                    message.extension = [];
                    for (let i = 0; i < object.extension.length; ++i) {
                        if (typeof object.extension[i] !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.extension: object expected");
                        message.extension[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.extension[i]);
                    }
                }
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.FileDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.FileOptions.fromObject(object.options);
                }
                if (object.sourceCodeInfo != null) {
                    if (typeof object.sourceCodeInfo !== "object")
                        throw TypeError(".google.protobuf.FileDescriptorProto.sourceCodeInfo: object expected");
                    message.sourceCodeInfo = $root.google.protobuf.SourceCodeInfo.fromObject(object.sourceCodeInfo);
                }
                return message;
            };

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {google.protobuf.FileDescriptorProto} message FileDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FileDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults) {
                    object.dependency = [];
                    object.messageType = [];
                    object.enumType = [];
                    object.service = [];
                    object.extension = [];
                    object.publicDependency = [];
                    object.weakDependency = [];
                }
                if (options.defaults) {
                    object.name = "";
                    object["package"] = "";
                    object.options = null;
                    object.sourceCodeInfo = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message["package"] != null && message.hasOwnProperty("package"))
                    object["package"] = message["package"];
                if (message.dependency && message.dependency.length) {
                    object.dependency = [];
                    for (let j = 0; j < message.dependency.length; ++j)
                        object.dependency[j] = message.dependency[j];
                }
                if (message.messageType && message.messageType.length) {
                    object.messageType = [];
                    for (let j = 0; j < message.messageType.length; ++j)
                        object.messageType[j] = $root.google.protobuf.DescriptorProto.toObject(message.messageType[j], options);
                }
                if (message.enumType && message.enumType.length) {
                    object.enumType = [];
                    for (let j = 0; j < message.enumType.length; ++j)
                        object.enumType[j] = $root.google.protobuf.EnumDescriptorProto.toObject(message.enumType[j], options);
                }
                if (message.service && message.service.length) {
                    object.service = [];
                    for (let j = 0; j < message.service.length; ++j)
                        object.service[j] = $root.google.protobuf.ServiceDescriptorProto.toObject(message.service[j], options);
                }
                if (message.extension && message.extension.length) {
                    object.extension = [];
                    for (let j = 0; j < message.extension.length; ++j)
                        object.extension[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.extension[j], options);
                }
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.FileOptions.toObject(message.options, options);
                if (message.sourceCodeInfo != null && message.hasOwnProperty("sourceCodeInfo"))
                    object.sourceCodeInfo = $root.google.protobuf.SourceCodeInfo.toObject(message.sourceCodeInfo, options);
                if (message.publicDependency && message.publicDependency.length) {
                    object.publicDependency = [];
                    for (let j = 0; j < message.publicDependency.length; ++j)
                        object.publicDependency[j] = message.publicDependency[j];
                }
                if (message.weakDependency && message.weakDependency.length) {
                    object.weakDependency = [];
                    for (let j = 0; j < message.weakDependency.length; ++j)
                        object.weakDependency[j] = message.weakDependency[j];
                }
                return object;
            };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FileDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for FileDescriptorProto
             * @function getTypeUrl
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            FileDescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.FileDescriptorProto";
            };

            return FileDescriptorProto;
        })();

        protobuf.DescriptorProto = (function() {

            /**
             * Properties of a DescriptorProto.
             * @memberof google.protobuf
             * @interface IDescriptorProto
             * @property {string|null} [name] DescriptorProto name
             * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [field] DescriptorProto field
             * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [extension] DescriptorProto extension
             * @property {Array.<google.protobuf.IDescriptorProto>|null} [nestedType] DescriptorProto nestedType
             * @property {Array.<google.protobuf.IEnumDescriptorProto>|null} [enumType] DescriptorProto enumType
             * @property {Array.<google.protobuf.DescriptorProto.IExtensionRange>|null} [extensionRange] DescriptorProto extensionRange
             * @property {google.protobuf.IMessageOptions|null} [options] DescriptorProto options
             */

            /**
             * Constructs a new DescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a DescriptorProto.
             * @implements IDescriptorProto
             * @constructor
             * @param {google.protobuf.IDescriptorProto=} [properties] Properties to set
             */
            function DescriptorProto(properties) {
                this.field = [];
                this.extension = [];
                this.nestedType = [];
                this.enumType = [];
                this.extensionRange = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.name = "";

            /**
             * DescriptorProto field.
             * @member {Array.<google.protobuf.IFieldDescriptorProto>} field
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.field = $util.emptyArray;

            /**
             * DescriptorProto extension.
             * @member {Array.<google.protobuf.IFieldDescriptorProto>} extension
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.extension = $util.emptyArray;

            /**
             * DescriptorProto nestedType.
             * @member {Array.<google.protobuf.IDescriptorProto>} nestedType
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.nestedType = $util.emptyArray;

            /**
             * DescriptorProto enumType.
             * @member {Array.<google.protobuf.IEnumDescriptorProto>} enumType
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.enumType = $util.emptyArray;

            /**
             * DescriptorProto extensionRange.
             * @member {Array.<google.protobuf.DescriptorProto.IExtensionRange>} extensionRange
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.extensionRange = $util.emptyArray;

            /**
             * DescriptorProto options.
             * @member {google.protobuf.IMessageOptions|null|undefined} options
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.options = null;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.DescriptorProto} DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DescriptorProto.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.name = reader.string();
                            break;
                        }
                    case 2: {
                            if (!(message.field && message.field.length))
                                message.field = [];
                            message.field.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        }
                    case 6: {
                            if (!(message.extension && message.extension.length))
                                message.extension = [];
                            message.extension.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        }
                    case 3: {
                            if (!(message.nestedType && message.nestedType.length))
                                message.nestedType = [];
                            message.nestedType.push($root.google.protobuf.DescriptorProto.decode(reader, reader.uint32()));
                            break;
                        }
                    case 4: {
                            if (!(message.enumType && message.enumType.length))
                                message.enumType = [];
                            message.enumType.push($root.google.protobuf.EnumDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        }
                    case 5: {
                            if (!(message.extensionRange && message.extensionRange.length))
                                message.extensionRange = [];
                            message.extensionRange.push($root.google.protobuf.DescriptorProto.ExtensionRange.decode(reader, reader.uint32()));
                            break;
                        }
                    case 7: {
                            message.options = $root.google.protobuf.MessageOptions.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.DescriptorProto} DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.DescriptorProto} DescriptorProto
             */
            DescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.DescriptorProto)
                    return object;
                let message = new $root.google.protobuf.DescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.field) {
                    if (!Array.isArray(object.field))
                        throw TypeError(".google.protobuf.DescriptorProto.field: array expected");
                    message.field = [];
                    for (let i = 0; i < object.field.length; ++i) {
                        if (typeof object.field[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.field: object expected");
                        message.field[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.field[i]);
                    }
                }
                if (object.extension) {
                    if (!Array.isArray(object.extension))
                        throw TypeError(".google.protobuf.DescriptorProto.extension: array expected");
                    message.extension = [];
                    for (let i = 0; i < object.extension.length; ++i) {
                        if (typeof object.extension[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.extension: object expected");
                        message.extension[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.extension[i]);
                    }
                }
                if (object.nestedType) {
                    if (!Array.isArray(object.nestedType))
                        throw TypeError(".google.protobuf.DescriptorProto.nestedType: array expected");
                    message.nestedType = [];
                    for (let i = 0; i < object.nestedType.length; ++i) {
                        if (typeof object.nestedType[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.nestedType: object expected");
                        message.nestedType[i] = $root.google.protobuf.DescriptorProto.fromObject(object.nestedType[i]);
                    }
                }
                if (object.enumType) {
                    if (!Array.isArray(object.enumType))
                        throw TypeError(".google.protobuf.DescriptorProto.enumType: array expected");
                    message.enumType = [];
                    for (let i = 0; i < object.enumType.length; ++i) {
                        if (typeof object.enumType[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.enumType: object expected");
                        message.enumType[i] = $root.google.protobuf.EnumDescriptorProto.fromObject(object.enumType[i]);
                    }
                }
                if (object.extensionRange) {
                    if (!Array.isArray(object.extensionRange))
                        throw TypeError(".google.protobuf.DescriptorProto.extensionRange: array expected");
                    message.extensionRange = [];
                    for (let i = 0; i < object.extensionRange.length; ++i) {
                        if (typeof object.extensionRange[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.extensionRange: object expected");
                        message.extensionRange[i] = $root.google.protobuf.DescriptorProto.ExtensionRange.fromObject(object.extensionRange[i]);
                    }
                }
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.DescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.MessageOptions.fromObject(object.options);
                }
                return message;
            };

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {google.protobuf.DescriptorProto} message DescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults) {
                    object.field = [];
                    object.nestedType = [];
                    object.enumType = [];
                    object.extensionRange = [];
                    object.extension = [];
                }
                if (options.defaults) {
                    object.name = "";
                    object.options = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.field && message.field.length) {
                    object.field = [];
                    for (let j = 0; j < message.field.length; ++j)
                        object.field[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.field[j], options);
                }
                if (message.nestedType && message.nestedType.length) {
                    object.nestedType = [];
                    for (let j = 0; j < message.nestedType.length; ++j)
                        object.nestedType[j] = $root.google.protobuf.DescriptorProto.toObject(message.nestedType[j], options);
                }
                if (message.enumType && message.enumType.length) {
                    object.enumType = [];
                    for (let j = 0; j < message.enumType.length; ++j)
                        object.enumType[j] = $root.google.protobuf.EnumDescriptorProto.toObject(message.enumType[j], options);
                }
                if (message.extensionRange && message.extensionRange.length) {
                    object.extensionRange = [];
                    for (let j = 0; j < message.extensionRange.length; ++j)
                        object.extensionRange[j] = $root.google.protobuf.DescriptorProto.ExtensionRange.toObject(message.extensionRange[j], options);
                }
                if (message.extension && message.extension.length) {
                    object.extension = [];
                    for (let j = 0; j < message.extension.length; ++j)
                        object.extension[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.extension[j], options);
                }
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.MessageOptions.toObject(message.options, options);
                return object;
            };

            /**
             * Converts this DescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.DescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for DescriptorProto
             * @function getTypeUrl
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            DescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.DescriptorProto";
            };

            DescriptorProto.ExtensionRange = (function() {

                /**
                 * Properties of an ExtensionRange.
                 * @memberof google.protobuf.DescriptorProto
                 * @interface IExtensionRange
                 * @property {number|null} [start] ExtensionRange start
                 * @property {number|null} [end] ExtensionRange end
                 */

                /**
                 * Constructs a new ExtensionRange.
                 * @memberof google.protobuf.DescriptorProto
                 * @classdesc Represents an ExtensionRange.
                 * @implements IExtensionRange
                 * @constructor
                 * @param {google.protobuf.DescriptorProto.IExtensionRange=} [properties] Properties to set
                 */
                function ExtensionRange(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ExtensionRange start.
                 * @member {number} start
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @instance
                 */
                ExtensionRange.prototype.start = 0;

                /**
                 * ExtensionRange end.
                 * @member {number} end
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @instance
                 */
                ExtensionRange.prototype.end = 0;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ExtensionRange.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto.ExtensionRange();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.start = reader.int32();
                                break;
                            }
                        case 2: {
                                message.end = reader.int32();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ExtensionRange.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                 */
                ExtensionRange.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.DescriptorProto.ExtensionRange)
                        return object;
                    let message = new $root.google.protobuf.DescriptorProto.ExtensionRange();
                    if (object.start != null)
                        message.start = object.start | 0;
                    if (object.end != null)
                        message.end = object.end | 0;
                    return message;
                };

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.ExtensionRange} message ExtensionRange
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ExtensionRange.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.start = 0;
                        object.end = 0;
                    }
                    if (message.start != null && message.hasOwnProperty("start"))
                        object.start = message.start;
                    if (message.end != null && message.hasOwnProperty("end"))
                        object.end = message.end;
                    return object;
                };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ExtensionRange.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for ExtensionRange
                 * @function getTypeUrl
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ExtensionRange.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.DescriptorProto.ExtensionRange";
                };

                return ExtensionRange;
            })();

            return DescriptorProto;
        })();

        protobuf.FieldDescriptorProto = (function() {

            /**
             * Properties of a FieldDescriptorProto.
             * @memberof google.protobuf
             * @interface IFieldDescriptorProto
             * @property {string|null} [name] FieldDescriptorProto name
             * @property {number|null} [number] FieldDescriptorProto number
             * @property {google.protobuf.FieldDescriptorProto.Label|null} [label] FieldDescriptorProto label
             * @property {google.protobuf.FieldDescriptorProto.Type|null} [type] FieldDescriptorProto type
             * @property {string|null} [typeName] FieldDescriptorProto typeName
             * @property {string|null} [extendee] FieldDescriptorProto extendee
             * @property {string|null} [defaultValue] FieldDescriptorProto defaultValue
             * @property {google.protobuf.IFieldOptions|null} [options] FieldDescriptorProto options
             */

            /**
             * Constructs a new FieldDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a FieldDescriptorProto.
             * @implements IFieldDescriptorProto
             * @constructor
             * @param {google.protobuf.IFieldDescriptorProto=} [properties] Properties to set
             */
            function FieldDescriptorProto(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FieldDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.name = "";

            /**
             * FieldDescriptorProto number.
             * @member {number} number
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.number = 0;

            /**
             * FieldDescriptorProto label.
             * @member {google.protobuf.FieldDescriptorProto.Label} label
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.label = 1;

            /**
             * FieldDescriptorProto type.
             * @member {google.protobuf.FieldDescriptorProto.Type} type
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.type = 1;

            /**
             * FieldDescriptorProto typeName.
             * @member {string} typeName
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.typeName = "";

            /**
             * FieldDescriptorProto extendee.
             * @member {string} extendee
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.extendee = "";

            /**
             * FieldDescriptorProto defaultValue.
             * @member {string} defaultValue
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.defaultValue = "";

            /**
             * FieldDescriptorProto options.
             * @member {google.protobuf.IFieldOptions|null|undefined} options
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.options = null;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FieldDescriptorProto.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FieldDescriptorProto();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.name = reader.string();
                            break;
                        }
                    case 3: {
                            message.number = reader.int32();
                            break;
                        }
                    case 4: {
                            message.label = reader.int32();
                            break;
                        }
                    case 5: {
                            message.type = reader.int32();
                            break;
                        }
                    case 6: {
                            message.typeName = reader.string();
                            break;
                        }
                    case 2: {
                            message.extendee = reader.string();
                            break;
                        }
                    case 7: {
                            message.defaultValue = reader.string();
                            break;
                        }
                    case 8: {
                            message.options = $root.google.protobuf.FieldOptions.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FieldDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
             */
            FieldDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FieldDescriptorProto)
                    return object;
                let message = new $root.google.protobuf.FieldDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.number != null)
                    message.number = object.number | 0;
                switch (object.label) {
                default:
                    if (typeof object.label === "number") {
                        message.label = object.label;
                        break;
                    }
                    break;
                case "LABEL_OPTIONAL":
                case 1:
                    message.label = 1;
                    break;
                case "LABEL_REQUIRED":
                case 2:
                    message.label = 2;
                    break;
                case "LABEL_REPEATED":
                case 3:
                    message.label = 3;
                    break;
                }
                switch (object.type) {
                default:
                    if (typeof object.type === "number") {
                        message.type = object.type;
                        break;
                    }
                    break;
                case "TYPE_DOUBLE":
                case 1:
                    message.type = 1;
                    break;
                case "TYPE_FLOAT":
                case 2:
                    message.type = 2;
                    break;
                case "TYPE_INT64":
                case 3:
                    message.type = 3;
                    break;
                case "TYPE_UINT64":
                case 4:
                    message.type = 4;
                    break;
                case "TYPE_INT32":
                case 5:
                    message.type = 5;
                    break;
                case "TYPE_FIXED64":
                case 6:
                    message.type = 6;
                    break;
                case "TYPE_FIXED32":
                case 7:
                    message.type = 7;
                    break;
                case "TYPE_BOOL":
                case 8:
                    message.type = 8;
                    break;
                case "TYPE_STRING":
                case 9:
                    message.type = 9;
                    break;
                case "TYPE_GROUP":
                case 10:
                    message.type = 10;
                    break;
                case "TYPE_MESSAGE":
                case 11:
                    message.type = 11;
                    break;
                case "TYPE_BYTES":
                case 12:
                    message.type = 12;
                    break;
                case "TYPE_UINT32":
                case 13:
                    message.type = 13;
                    break;
                case "TYPE_ENUM":
                case 14:
                    message.type = 14;
                    break;
                case "TYPE_SFIXED32":
                case 15:
                    message.type = 15;
                    break;
                case "TYPE_SFIXED64":
                case 16:
                    message.type = 16;
                    break;
                case "TYPE_SINT32":
                case 17:
                    message.type = 17;
                    break;
                case "TYPE_SINT64":
                case 18:
                    message.type = 18;
                    break;
                }
                if (object.typeName != null)
                    message.typeName = String(object.typeName);
                if (object.extendee != null)
                    message.extendee = String(object.extendee);
                if (object.defaultValue != null)
                    message.defaultValue = String(object.defaultValue);
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.FieldDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.FieldOptions.fromObject(object.options);
                }
                return message;
            };

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {google.protobuf.FieldDescriptorProto} message FieldDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FieldDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.name = "";
                    object.extendee = "";
                    object.number = 0;
                    object.label = options.enums === String ? "LABEL_OPTIONAL" : 1;
                    object.type = options.enums === String ? "TYPE_DOUBLE" : 1;
                    object.typeName = "";
                    object.defaultValue = "";
                    object.options = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.extendee != null && message.hasOwnProperty("extendee"))
                    object.extendee = message.extendee;
                if (message.number != null && message.hasOwnProperty("number"))
                    object.number = message.number;
                if (message.label != null && message.hasOwnProperty("label"))
                    object.label = options.enums === String ? $root.google.protobuf.FieldDescriptorProto.Label[message.label] === undefined ? message.label : $root.google.protobuf.FieldDescriptorProto.Label[message.label] : message.label;
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = options.enums === String ? $root.google.protobuf.FieldDescriptorProto.Type[message.type] === undefined ? message.type : $root.google.protobuf.FieldDescriptorProto.Type[message.type] : message.type;
                if (message.typeName != null && message.hasOwnProperty("typeName"))
                    object.typeName = message.typeName;
                if (message.defaultValue != null && message.hasOwnProperty("defaultValue"))
                    object.defaultValue = message.defaultValue;
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.FieldOptions.toObject(message.options, options);
                return object;
            };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FieldDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for FieldDescriptorProto
             * @function getTypeUrl
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            FieldDescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.FieldDescriptorProto";
            };

            /**
             * Type enum.
             * @name google.protobuf.FieldDescriptorProto.Type
             * @enum {number}
             * @property {number} TYPE_DOUBLE=1 TYPE_DOUBLE value
             * @property {number} TYPE_FLOAT=2 TYPE_FLOAT value
             * @property {number} TYPE_INT64=3 TYPE_INT64 value
             * @property {number} TYPE_UINT64=4 TYPE_UINT64 value
             * @property {number} TYPE_INT32=5 TYPE_INT32 value
             * @property {number} TYPE_FIXED64=6 TYPE_FIXED64 value
             * @property {number} TYPE_FIXED32=7 TYPE_FIXED32 value
             * @property {number} TYPE_BOOL=8 TYPE_BOOL value
             * @property {number} TYPE_STRING=9 TYPE_STRING value
             * @property {number} TYPE_GROUP=10 TYPE_GROUP value
             * @property {number} TYPE_MESSAGE=11 TYPE_MESSAGE value
             * @property {number} TYPE_BYTES=12 TYPE_BYTES value
             * @property {number} TYPE_UINT32=13 TYPE_UINT32 value
             * @property {number} TYPE_ENUM=14 TYPE_ENUM value
             * @property {number} TYPE_SFIXED32=15 TYPE_SFIXED32 value
             * @property {number} TYPE_SFIXED64=16 TYPE_SFIXED64 value
             * @property {number} TYPE_SINT32=17 TYPE_SINT32 value
             * @property {number} TYPE_SINT64=18 TYPE_SINT64 value
             */
            FieldDescriptorProto.Type = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "TYPE_DOUBLE"] = 1;
                values[valuesById[2] = "TYPE_FLOAT"] = 2;
                values[valuesById[3] = "TYPE_INT64"] = 3;
                values[valuesById[4] = "TYPE_UINT64"] = 4;
                values[valuesById[5] = "TYPE_INT32"] = 5;
                values[valuesById[6] = "TYPE_FIXED64"] = 6;
                values[valuesById[7] = "TYPE_FIXED32"] = 7;
                values[valuesById[8] = "TYPE_BOOL"] = 8;
                values[valuesById[9] = "TYPE_STRING"] = 9;
                values[valuesById[10] = "TYPE_GROUP"] = 10;
                values[valuesById[11] = "TYPE_MESSAGE"] = 11;
                values[valuesById[12] = "TYPE_BYTES"] = 12;
                values[valuesById[13] = "TYPE_UINT32"] = 13;
                values[valuesById[14] = "TYPE_ENUM"] = 14;
                values[valuesById[15] = "TYPE_SFIXED32"] = 15;
                values[valuesById[16] = "TYPE_SFIXED64"] = 16;
                values[valuesById[17] = "TYPE_SINT32"] = 17;
                values[valuesById[18] = "TYPE_SINT64"] = 18;
                return values;
            })();

            /**
             * Label enum.
             * @name google.protobuf.FieldDescriptorProto.Label
             * @enum {number}
             * @property {number} LABEL_OPTIONAL=1 LABEL_OPTIONAL value
             * @property {number} LABEL_REQUIRED=2 LABEL_REQUIRED value
             * @property {number} LABEL_REPEATED=3 LABEL_REPEATED value
             */
            FieldDescriptorProto.Label = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "LABEL_OPTIONAL"] = 1;
                values[valuesById[2] = "LABEL_REQUIRED"] = 2;
                values[valuesById[3] = "LABEL_REPEATED"] = 3;
                return values;
            })();

            return FieldDescriptorProto;
        })();

        protobuf.EnumDescriptorProto = (function() {

            /**
             * Properties of an EnumDescriptorProto.
             * @memberof google.protobuf
             * @interface IEnumDescriptorProto
             * @property {string|null} [name] EnumDescriptorProto name
             * @property {Array.<google.protobuf.IEnumValueDescriptorProto>|null} [value] EnumDescriptorProto value
             * @property {google.protobuf.IEnumOptions|null} [options] EnumDescriptorProto options
             */

            /**
             * Constructs a new EnumDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents an EnumDescriptorProto.
             * @implements IEnumDescriptorProto
             * @constructor
             * @param {google.protobuf.IEnumDescriptorProto=} [properties] Properties to set
             */
            function EnumDescriptorProto(properties) {
                this.value = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EnumDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.EnumDescriptorProto
             * @instance
             */
            EnumDescriptorProto.prototype.name = "";

            /**
             * EnumDescriptorProto value.
             * @member {Array.<google.protobuf.IEnumValueDescriptorProto>} value
             * @memberof google.protobuf.EnumDescriptorProto
             * @instance
             */
            EnumDescriptorProto.prototype.value = $util.emptyArray;

            /**
             * EnumDescriptorProto options.
             * @member {google.protobuf.IEnumOptions|null|undefined} options
             * @memberof google.protobuf.EnumDescriptorProto
             * @instance
             */
            EnumDescriptorProto.prototype.options = null;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumDescriptorProto.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumDescriptorProto();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.name = reader.string();
                            break;
                        }
                    case 2: {
                            if (!(message.value && message.value.length))
                                message.value = [];
                            message.value.push($root.google.protobuf.EnumValueDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        }
                    case 3: {
                            message.options = $root.google.protobuf.EnumOptions.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
             */
            EnumDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.EnumDescriptorProto)
                    return object;
                let message = new $root.google.protobuf.EnumDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.value) {
                    if (!Array.isArray(object.value))
                        throw TypeError(".google.protobuf.EnumDescriptorProto.value: array expected");
                    message.value = [];
                    for (let i = 0; i < object.value.length; ++i) {
                        if (typeof object.value[i] !== "object")
                            throw TypeError(".google.protobuf.EnumDescriptorProto.value: object expected");
                        message.value[i] = $root.google.protobuf.EnumValueDescriptorProto.fromObject(object.value[i]);
                    }
                }
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.EnumDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.EnumOptions.fromObject(object.options);
                }
                return message;
            };

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {google.protobuf.EnumDescriptorProto} message EnumDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.value = [];
                if (options.defaults) {
                    object.name = "";
                    object.options = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.value && message.value.length) {
                    object.value = [];
                    for (let j = 0; j < message.value.length; ++j)
                        object.value[j] = $root.google.protobuf.EnumValueDescriptorProto.toObject(message.value[j], options);
                }
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.EnumOptions.toObject(message.options, options);
                return object;
            };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.EnumDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EnumDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for EnumDescriptorProto
             * @function getTypeUrl
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            EnumDescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.EnumDescriptorProto";
            };

            return EnumDescriptorProto;
        })();

        protobuf.EnumValueDescriptorProto = (function() {

            /**
             * Properties of an EnumValueDescriptorProto.
             * @memberof google.protobuf
             * @interface IEnumValueDescriptorProto
             * @property {string|null} [name] EnumValueDescriptorProto name
             * @property {number|null} [number] EnumValueDescriptorProto number
             * @property {google.protobuf.IEnumValueOptions|null} [options] EnumValueDescriptorProto options
             */

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents an EnumValueDescriptorProto.
             * @implements IEnumValueDescriptorProto
             * @constructor
             * @param {google.protobuf.IEnumValueDescriptorProto=} [properties] Properties to set
             */
            function EnumValueDescriptorProto(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EnumValueDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @instance
             */
            EnumValueDescriptorProto.prototype.name = "";

            /**
             * EnumValueDescriptorProto number.
             * @member {number} number
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @instance
             */
            EnumValueDescriptorProto.prototype.number = 0;

            /**
             * EnumValueDescriptorProto options.
             * @member {google.protobuf.IEnumValueOptions|null|undefined} options
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @instance
             */
            EnumValueDescriptorProto.prototype.options = null;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumValueDescriptorProto.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumValueDescriptorProto();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.name = reader.string();
                            break;
                        }
                    case 2: {
                            message.number = reader.int32();
                            break;
                        }
                    case 3: {
                            message.options = $root.google.protobuf.EnumValueOptions.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumValueDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
             */
            EnumValueDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.EnumValueDescriptorProto)
                    return object;
                let message = new $root.google.protobuf.EnumValueDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.number != null)
                    message.number = object.number | 0;
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.EnumValueDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.EnumValueOptions.fromObject(object.options);
                }
                return message;
            };

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {google.protobuf.EnumValueDescriptorProto} message EnumValueDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumValueDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.name = "";
                    object.number = 0;
                    object.options = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.number != null && message.hasOwnProperty("number"))
                    object.number = message.number;
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.EnumValueOptions.toObject(message.options, options);
                return object;
            };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EnumValueDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for EnumValueDescriptorProto
             * @function getTypeUrl
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            EnumValueDescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.EnumValueDescriptorProto";
            };

            return EnumValueDescriptorProto;
        })();

        protobuf.ServiceDescriptorProto = (function() {

            /**
             * Properties of a ServiceDescriptorProto.
             * @memberof google.protobuf
             * @interface IServiceDescriptorProto
             * @property {string|null} [name] ServiceDescriptorProto name
             * @property {Array.<google.protobuf.IMethodDescriptorProto>|null} [method] ServiceDescriptorProto method
             * @property {google.protobuf.IServiceOptions|null} [options] ServiceDescriptorProto options
             */

            /**
             * Constructs a new ServiceDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a ServiceDescriptorProto.
             * @implements IServiceDescriptorProto
             * @constructor
             * @param {google.protobuf.IServiceDescriptorProto=} [properties] Properties to set
             */
            function ServiceDescriptorProto(properties) {
                this.method = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ServiceDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.ServiceDescriptorProto
             * @instance
             */
            ServiceDescriptorProto.prototype.name = "";

            /**
             * ServiceDescriptorProto method.
             * @member {Array.<google.protobuf.IMethodDescriptorProto>} method
             * @memberof google.protobuf.ServiceDescriptorProto
             * @instance
             */
            ServiceDescriptorProto.prototype.method = $util.emptyArray;

            /**
             * ServiceDescriptorProto options.
             * @member {google.protobuf.IServiceOptions|null|undefined} options
             * @memberof google.protobuf.ServiceDescriptorProto
             * @instance
             */
            ServiceDescriptorProto.prototype.options = null;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceDescriptorProto.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ServiceDescriptorProto();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.name = reader.string();
                            break;
                        }
                    case 2: {
                            if (!(message.method && message.method.length))
                                message.method = [];
                            message.method.push($root.google.protobuf.MethodDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        }
                    case 3: {
                            message.options = $root.google.protobuf.ServiceOptions.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
             */
            ServiceDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.ServiceDescriptorProto)
                    return object;
                let message = new $root.google.protobuf.ServiceDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.method) {
                    if (!Array.isArray(object.method))
                        throw TypeError(".google.protobuf.ServiceDescriptorProto.method: array expected");
                    message.method = [];
                    for (let i = 0; i < object.method.length; ++i) {
                        if (typeof object.method[i] !== "object")
                            throw TypeError(".google.protobuf.ServiceDescriptorProto.method: object expected");
                        message.method[i] = $root.google.protobuf.MethodDescriptorProto.fromObject(object.method[i]);
                    }
                }
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.ServiceDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.ServiceOptions.fromObject(object.options);
                }
                return message;
            };

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {google.protobuf.ServiceDescriptorProto} message ServiceDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ServiceDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.method = [];
                if (options.defaults) {
                    object.name = "";
                    object.options = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.method && message.method.length) {
                    object.method = [];
                    for (let j = 0; j < message.method.length; ++j)
                        object.method[j] = $root.google.protobuf.MethodDescriptorProto.toObject(message.method[j], options);
                }
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.ServiceOptions.toObject(message.options, options);
                return object;
            };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.ServiceDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ServiceDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ServiceDescriptorProto
             * @function getTypeUrl
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ServiceDescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.ServiceDescriptorProto";
            };

            return ServiceDescriptorProto;
        })();

        protobuf.MethodDescriptorProto = (function() {

            /**
             * Properties of a MethodDescriptorProto.
             * @memberof google.protobuf
             * @interface IMethodDescriptorProto
             * @property {string|null} [name] MethodDescriptorProto name
             * @property {string|null} [inputType] MethodDescriptorProto inputType
             * @property {string|null} [outputType] MethodDescriptorProto outputType
             * @property {google.protobuf.IMethodOptions|null} [options] MethodDescriptorProto options
             */

            /**
             * Constructs a new MethodDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a MethodDescriptorProto.
             * @implements IMethodDescriptorProto
             * @constructor
             * @param {google.protobuf.IMethodDescriptorProto=} [properties] Properties to set
             */
            function MethodDescriptorProto(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MethodDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.name = "";

            /**
             * MethodDescriptorProto inputType.
             * @member {string} inputType
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.inputType = "";

            /**
             * MethodDescriptorProto outputType.
             * @member {string} outputType
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.outputType = "";

            /**
             * MethodDescriptorProto options.
             * @member {google.protobuf.IMethodOptions|null|undefined} options
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.options = null;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MethodDescriptorProto.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MethodDescriptorProto();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.name = reader.string();
                            break;
                        }
                    case 2: {
                            message.inputType = reader.string();
                            break;
                        }
                    case 3: {
                            message.outputType = reader.string();
                            break;
                        }
                    case 4: {
                            message.options = $root.google.protobuf.MethodOptions.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MethodDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
             */
            MethodDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.MethodDescriptorProto)
                    return object;
                let message = new $root.google.protobuf.MethodDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.inputType != null)
                    message.inputType = String(object.inputType);
                if (object.outputType != null)
                    message.outputType = String(object.outputType);
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.MethodDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.MethodOptions.fromObject(object.options);
                }
                return message;
            };

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {google.protobuf.MethodDescriptorProto} message MethodDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MethodDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.name = "";
                    object.inputType = "";
                    object.outputType = "";
                    object.options = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.inputType != null && message.hasOwnProperty("inputType"))
                    object.inputType = message.inputType;
                if (message.outputType != null && message.hasOwnProperty("outputType"))
                    object.outputType = message.outputType;
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.MethodOptions.toObject(message.options, options);
                return object;
            };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MethodDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for MethodDescriptorProto
             * @function getTypeUrl
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            MethodDescriptorProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.MethodDescriptorProto";
            };

            return MethodDescriptorProto;
        })();

        protobuf.FileOptions = (function() {

            /**
             * Properties of a FileOptions.
             * @memberof google.protobuf
             * @interface IFileOptions
             * @property {string|null} [javaPackage] FileOptions javaPackage
             * @property {string|null} [javaOuterClassname] FileOptions javaOuterClassname
             * @property {boolean|null} [javaMultipleFiles] FileOptions javaMultipleFiles
             * @property {boolean|null} [javaGenerateEqualsAndHash] FileOptions javaGenerateEqualsAndHash
             * @property {google.protobuf.FileOptions.OptimizeMode|null} [optimizeFor] FileOptions optimizeFor
             * @property {string|null} [goPackage] FileOptions goPackage
             * @property {boolean|null} [ccGenericServices] FileOptions ccGenericServices
             * @property {boolean|null} [javaGenericServices] FileOptions javaGenericServices
             * @property {boolean|null} [pyGenericServices] FileOptions pyGenericServices
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] FileOptions uninterpretedOption
             */

            /**
             * Constructs a new FileOptions.
             * @memberof google.protobuf
             * @classdesc Represents a FileOptions.
             * @implements IFileOptions
             * @constructor
             * @param {google.protobuf.IFileOptions=} [properties] Properties to set
             */
            function FileOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FileOptions javaPackage.
             * @member {string} javaPackage
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.javaPackage = "";

            /**
             * FileOptions javaOuterClassname.
             * @member {string} javaOuterClassname
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.javaOuterClassname = "";

            /**
             * FileOptions javaMultipleFiles.
             * @member {boolean} javaMultipleFiles
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.javaMultipleFiles = false;

            /**
             * FileOptions javaGenerateEqualsAndHash.
             * @member {boolean} javaGenerateEqualsAndHash
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.javaGenerateEqualsAndHash = false;

            /**
             * FileOptions optimizeFor.
             * @member {google.protobuf.FileOptions.OptimizeMode} optimizeFor
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.optimizeFor = 1;

            /**
             * FileOptions goPackage.
             * @member {string} goPackage
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.goPackage = "";

            /**
             * FileOptions ccGenericServices.
             * @member {boolean} ccGenericServices
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.ccGenericServices = false;

            /**
             * FileOptions javaGenericServices.
             * @member {boolean} javaGenericServices
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.javaGenericServices = false;

            /**
             * FileOptions pyGenericServices.
             * @member {boolean} pyGenericServices
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.pyGenericServices = false;

            /**
             * FileOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FileOptions} FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileOptions.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileOptions();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.javaPackage = reader.string();
                            break;
                        }
                    case 8: {
                            message.javaOuterClassname = reader.string();
                            break;
                        }
                    case 10: {
                            message.javaMultipleFiles = reader.bool();
                            break;
                        }
                    case 20: {
                            message.javaGenerateEqualsAndHash = reader.bool();
                            break;
                        }
                    case 9: {
                            message.optimizeFor = reader.int32();
                            break;
                        }
                    case 11: {
                            message.goPackage = reader.string();
                            break;
                        }
                    case 16: {
                            message.ccGenericServices = reader.bool();
                            break;
                        }
                    case 17: {
                            message.javaGenericServices = reader.bool();
                            break;
                        }
                    case 18: {
                            message.pyGenericServices = reader.bool();
                            break;
                        }
                    case 999: {
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FileOptions} FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FileOptions} FileOptions
             */
            FileOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FileOptions)
                    return object;
                let message = new $root.google.protobuf.FileOptions();
                if (object.javaPackage != null)
                    message.javaPackage = String(object.javaPackage);
                if (object.javaOuterClassname != null)
                    message.javaOuterClassname = String(object.javaOuterClassname);
                if (object.javaMultipleFiles != null)
                    message.javaMultipleFiles = Boolean(object.javaMultipleFiles);
                if (object.javaGenerateEqualsAndHash != null)
                    message.javaGenerateEqualsAndHash = Boolean(object.javaGenerateEqualsAndHash);
                switch (object.optimizeFor) {
                default:
                    if (typeof object.optimizeFor === "number") {
                        message.optimizeFor = object.optimizeFor;
                        break;
                    }
                    break;
                case "SPEED":
                case 1:
                    message.optimizeFor = 1;
                    break;
                case "CODE_SIZE":
                case 2:
                    message.optimizeFor = 2;
                    break;
                case "LITE_RUNTIME":
                case 3:
                    message.optimizeFor = 3;
                    break;
                }
                if (object.goPackage != null)
                    message.goPackage = String(object.goPackage);
                if (object.ccGenericServices != null)
                    message.ccGenericServices = Boolean(object.ccGenericServices);
                if (object.javaGenericServices != null)
                    message.javaGenericServices = Boolean(object.javaGenericServices);
                if (object.pyGenericServices != null)
                    message.pyGenericServices = Boolean(object.pyGenericServices);
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.FileOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (let i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.FileOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {google.protobuf.FileOptions} message FileOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FileOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (options.defaults) {
                    object.javaPackage = "";
                    object.javaOuterClassname = "";
                    object.optimizeFor = options.enums === String ? "SPEED" : 1;
                    object.javaMultipleFiles = false;
                    object.goPackage = "";
                    object.ccGenericServices = false;
                    object.javaGenericServices = false;
                    object.pyGenericServices = false;
                    object.javaGenerateEqualsAndHash = false;
                }
                if (message.javaPackage != null && message.hasOwnProperty("javaPackage"))
                    object.javaPackage = message.javaPackage;
                if (message.javaOuterClassname != null && message.hasOwnProperty("javaOuterClassname"))
                    object.javaOuterClassname = message.javaOuterClassname;
                if (message.optimizeFor != null && message.hasOwnProperty("optimizeFor"))
                    object.optimizeFor = options.enums === String ? $root.google.protobuf.FileOptions.OptimizeMode[message.optimizeFor] === undefined ? message.optimizeFor : $root.google.protobuf.FileOptions.OptimizeMode[message.optimizeFor] : message.optimizeFor;
                if (message.javaMultipleFiles != null && message.hasOwnProperty("javaMultipleFiles"))
                    object.javaMultipleFiles = message.javaMultipleFiles;
                if (message.goPackage != null && message.hasOwnProperty("goPackage"))
                    object.goPackage = message.goPackage;
                if (message.ccGenericServices != null && message.hasOwnProperty("ccGenericServices"))
                    object.ccGenericServices = message.ccGenericServices;
                if (message.javaGenericServices != null && message.hasOwnProperty("javaGenericServices"))
                    object.javaGenericServices = message.javaGenericServices;
                if (message.pyGenericServices != null && message.hasOwnProperty("pyGenericServices"))
                    object.pyGenericServices = message.pyGenericServices;
                if (message.javaGenerateEqualsAndHash != null && message.hasOwnProperty("javaGenerateEqualsAndHash"))
                    object.javaGenerateEqualsAndHash = message.javaGenerateEqualsAndHash;
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (let j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                return object;
            };

            /**
             * Converts this FileOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.FileOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FileOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for FileOptions
             * @function getTypeUrl
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            FileOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.FileOptions";
            };

            /**
             * OptimizeMode enum.
             * @name google.protobuf.FileOptions.OptimizeMode
             * @enum {number}
             * @property {number} SPEED=1 SPEED value
             * @property {number} CODE_SIZE=2 CODE_SIZE value
             * @property {number} LITE_RUNTIME=3 LITE_RUNTIME value
             */
            FileOptions.OptimizeMode = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "SPEED"] = 1;
                values[valuesById[2] = "CODE_SIZE"] = 2;
                values[valuesById[3] = "LITE_RUNTIME"] = 3;
                return values;
            })();

            return FileOptions;
        })();

        protobuf.MessageOptions = (function() {

            /**
             * Properties of a MessageOptions.
             * @memberof google.protobuf
             * @interface IMessageOptions
             * @property {boolean|null} [messageSetWireFormat] MessageOptions messageSetWireFormat
             * @property {boolean|null} [noStandardDescriptorAccessor] MessageOptions noStandardDescriptorAccessor
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] MessageOptions uninterpretedOption
             * @property {boolean|null} [".org.jetbrains.kotlin.metadata.skipMessageInComparison"] MessageOptions .org.jetbrains.kotlin.metadata.skipMessageInComparison
             */

            /**
             * Constructs a new MessageOptions.
             * @memberof google.protobuf
             * @classdesc Represents a MessageOptions.
             * @implements IMessageOptions
             * @constructor
             * @param {google.protobuf.IMessageOptions=} [properties] Properties to set
             */
            function MessageOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageOptions messageSetWireFormat.
             * @member {boolean} messageSetWireFormat
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.messageSetWireFormat = false;

            /**
             * MessageOptions noStandardDescriptorAccessor.
             * @member {boolean} noStandardDescriptorAccessor
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.noStandardDescriptorAccessor = false;

            /**
             * MessageOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * MessageOptions .org.jetbrains.kotlin.metadata.skipMessageInComparison.
             * @member {boolean} .org.jetbrains.kotlin.metadata.skipMessageInComparison
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype[".org.jetbrains.kotlin.metadata.skipMessageInComparison"] = false;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.MessageOptions} MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageOptions.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MessageOptions();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.messageSetWireFormat = reader.bool();
                            break;
                        }
                    case 2: {
                            message.noStandardDescriptorAccessor = reader.bool();
                            break;
                        }
                    case 999: {
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        }
                    case 50100: {
                            message[".org.jetbrains.kotlin.metadata.skipMessageInComparison"] = reader.bool();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.MessageOptions} MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.MessageOptions} MessageOptions
             */
            MessageOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.MessageOptions)
                    return object;
                let message = new $root.google.protobuf.MessageOptions();
                if (object.messageSetWireFormat != null)
                    message.messageSetWireFormat = Boolean(object.messageSetWireFormat);
                if (object.noStandardDescriptorAccessor != null)
                    message.noStandardDescriptorAccessor = Boolean(object.noStandardDescriptorAccessor);
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.MessageOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (let i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.MessageOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                if (object[".org.jetbrains.kotlin.metadata.skipMessageInComparison"] != null)
                    message[".org.jetbrains.kotlin.metadata.skipMessageInComparison"] = Boolean(object[".org.jetbrains.kotlin.metadata.skipMessageInComparison"]);
                return message;
            };

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {google.protobuf.MessageOptions} message MessageOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (options.defaults) {
                    object.messageSetWireFormat = false;
                    object.noStandardDescriptorAccessor = false;
                    object[".org.jetbrains.kotlin.metadata.skipMessageInComparison"] = false;
                }
                if (message.messageSetWireFormat != null && message.hasOwnProperty("messageSetWireFormat"))
                    object.messageSetWireFormat = message.messageSetWireFormat;
                if (message.noStandardDescriptorAccessor != null && message.hasOwnProperty("noStandardDescriptorAccessor"))
                    object.noStandardDescriptorAccessor = message.noStandardDescriptorAccessor;
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (let j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                if (message[".org.jetbrains.kotlin.metadata.skipMessageInComparison"] != null && message.hasOwnProperty(".org.jetbrains.kotlin.metadata.skipMessageInComparison"))
                    object[".org.jetbrains.kotlin.metadata.skipMessageInComparison"] = message[".org.jetbrains.kotlin.metadata.skipMessageInComparison"];
                return object;
            };

            /**
             * Converts this MessageOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.MessageOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for MessageOptions
             * @function getTypeUrl
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            MessageOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.MessageOptions";
            };

            return MessageOptions;
        })();

        protobuf.FieldOptions = (function() {

            /**
             * Properties of a FieldOptions.
             * @memberof google.protobuf
             * @interface IFieldOptions
             * @property {google.protobuf.FieldOptions.CType|null} [ctype] FieldOptions ctype
             * @property {boolean|null} [packed] FieldOptions packed
             * @property {boolean|null} [lazy] FieldOptions lazy
             * @property {boolean|null} [deprecated] FieldOptions deprecated
             * @property {string|null} [experimentalMapKey] FieldOptions experimentalMapKey
             * @property {boolean|null} [weak] FieldOptions weak
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] FieldOptions uninterpretedOption
             * @property {boolean|null} [".org.jetbrains.kotlin.metadata.skipInComparison"] FieldOptions .org.jetbrains.kotlin.metadata.skipInComparison
             * @property {boolean|null} [".org.jetbrains.kotlin.metadata.nameIdInTable"] FieldOptions .org.jetbrains.kotlin.metadata.nameIdInTable
             * @property {boolean|null} [".org.jetbrains.kotlin.metadata.fqNameIdInTable"] FieldOptions .org.jetbrains.kotlin.metadata.fqNameIdInTable
             * @property {boolean|null} [".org.jetbrains.kotlin.metadata.stringIdInTable"] FieldOptions .org.jetbrains.kotlin.metadata.stringIdInTable
             * @property {boolean|null} [".org.jetbrains.kotlin.metadata.typeIdInTable"] FieldOptions .org.jetbrains.kotlin.metadata.typeIdInTable
             */

            /**
             * Constructs a new FieldOptions.
             * @memberof google.protobuf
             * @classdesc Represents a FieldOptions.
             * @implements IFieldOptions
             * @constructor
             * @param {google.protobuf.IFieldOptions=} [properties] Properties to set
             */
            function FieldOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FieldOptions ctype.
             * @member {google.protobuf.FieldOptions.CType} ctype
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.ctype = 0;

            /**
             * FieldOptions packed.
             * @member {boolean} packed
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.packed = false;

            /**
             * FieldOptions lazy.
             * @member {boolean} lazy
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.lazy = false;

            /**
             * FieldOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.deprecated = false;

            /**
             * FieldOptions experimentalMapKey.
             * @member {string} experimentalMapKey
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.experimentalMapKey = "";

            /**
             * FieldOptions weak.
             * @member {boolean} weak
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.weak = false;

            /**
             * FieldOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * FieldOptions .org.jetbrains.kotlin.metadata.skipInComparison.
             * @member {boolean} .org.jetbrains.kotlin.metadata.skipInComparison
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype[".org.jetbrains.kotlin.metadata.skipInComparison"] = false;

            /**
             * FieldOptions .org.jetbrains.kotlin.metadata.nameIdInTable.
             * @member {boolean} .org.jetbrains.kotlin.metadata.nameIdInTable
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype[".org.jetbrains.kotlin.metadata.nameIdInTable"] = false;

            /**
             * FieldOptions .org.jetbrains.kotlin.metadata.fqNameIdInTable.
             * @member {boolean} .org.jetbrains.kotlin.metadata.fqNameIdInTable
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype[".org.jetbrains.kotlin.metadata.fqNameIdInTable"] = false;

            /**
             * FieldOptions .org.jetbrains.kotlin.metadata.stringIdInTable.
             * @member {boolean} .org.jetbrains.kotlin.metadata.stringIdInTable
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype[".org.jetbrains.kotlin.metadata.stringIdInTable"] = false;

            /**
             * FieldOptions .org.jetbrains.kotlin.metadata.typeIdInTable.
             * @member {boolean} .org.jetbrains.kotlin.metadata.typeIdInTable
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype[".org.jetbrains.kotlin.metadata.typeIdInTable"] = false;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FieldOptions} FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FieldOptions.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FieldOptions();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.ctype = reader.int32();
                            break;
                        }
                    case 2: {
                            message.packed = reader.bool();
                            break;
                        }
                    case 5: {
                            message.lazy = reader.bool();
                            break;
                        }
                    case 3: {
                            message.deprecated = reader.bool();
                            break;
                        }
                    case 9: {
                            message.experimentalMapKey = reader.string();
                            break;
                        }
                    case 10: {
                            message.weak = reader.bool();
                            break;
                        }
                    case 999: {
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        }
                    case 50000: {
                            message[".org.jetbrains.kotlin.metadata.skipInComparison"] = reader.bool();
                            break;
                        }
                    case 50001: {
                            message[".org.jetbrains.kotlin.metadata.nameIdInTable"] = reader.bool();
                            break;
                        }
                    case 50002: {
                            message[".org.jetbrains.kotlin.metadata.fqNameIdInTable"] = reader.bool();
                            break;
                        }
                    case 50003: {
                            message[".org.jetbrains.kotlin.metadata.stringIdInTable"] = reader.bool();
                            break;
                        }
                    case 50004: {
                            message[".org.jetbrains.kotlin.metadata.typeIdInTable"] = reader.bool();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FieldOptions} FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FieldOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FieldOptions} FieldOptions
             */
            FieldOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FieldOptions)
                    return object;
                let message = new $root.google.protobuf.FieldOptions();
                switch (object.ctype) {
                default:
                    if (typeof object.ctype === "number") {
                        message.ctype = object.ctype;
                        break;
                    }
                    break;
                case "STRING":
                case 0:
                    message.ctype = 0;
                    break;
                case "CORD":
                case 1:
                    message.ctype = 1;
                    break;
                case "STRING_PIECE":
                case 2:
                    message.ctype = 2;
                    break;
                }
                if (object.packed != null)
                    message.packed = Boolean(object.packed);
                if (object.lazy != null)
                    message.lazy = Boolean(object.lazy);
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.experimentalMapKey != null)
                    message.experimentalMapKey = String(object.experimentalMapKey);
                if (object.weak != null)
                    message.weak = Boolean(object.weak);
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.FieldOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (let i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.FieldOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                if (object[".org.jetbrains.kotlin.metadata.skipInComparison"] != null)
                    message[".org.jetbrains.kotlin.metadata.skipInComparison"] = Boolean(object[".org.jetbrains.kotlin.metadata.skipInComparison"]);
                if (object[".org.jetbrains.kotlin.metadata.nameIdInTable"] != null)
                    message[".org.jetbrains.kotlin.metadata.nameIdInTable"] = Boolean(object[".org.jetbrains.kotlin.metadata.nameIdInTable"]);
                if (object[".org.jetbrains.kotlin.metadata.fqNameIdInTable"] != null)
                    message[".org.jetbrains.kotlin.metadata.fqNameIdInTable"] = Boolean(object[".org.jetbrains.kotlin.metadata.fqNameIdInTable"]);
                if (object[".org.jetbrains.kotlin.metadata.stringIdInTable"] != null)
                    message[".org.jetbrains.kotlin.metadata.stringIdInTable"] = Boolean(object[".org.jetbrains.kotlin.metadata.stringIdInTable"]);
                if (object[".org.jetbrains.kotlin.metadata.typeIdInTable"] != null)
                    message[".org.jetbrains.kotlin.metadata.typeIdInTable"] = Boolean(object[".org.jetbrains.kotlin.metadata.typeIdInTable"]);
                return message;
            };

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {google.protobuf.FieldOptions} message FieldOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FieldOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (options.defaults) {
                    object.ctype = options.enums === String ? "STRING" : 0;
                    object.packed = false;
                    object.deprecated = false;
                    object.lazy = false;
                    object.experimentalMapKey = "";
                    object.weak = false;
                    object[".org.jetbrains.kotlin.metadata.skipInComparison"] = false;
                    object[".org.jetbrains.kotlin.metadata.nameIdInTable"] = false;
                    object[".org.jetbrains.kotlin.metadata.fqNameIdInTable"] = false;
                    object[".org.jetbrains.kotlin.metadata.stringIdInTable"] = false;
                    object[".org.jetbrains.kotlin.metadata.typeIdInTable"] = false;
                }
                if (message.ctype != null && message.hasOwnProperty("ctype"))
                    object.ctype = options.enums === String ? $root.google.protobuf.FieldOptions.CType[message.ctype] === undefined ? message.ctype : $root.google.protobuf.FieldOptions.CType[message.ctype] : message.ctype;
                if (message.packed != null && message.hasOwnProperty("packed"))
                    object.packed = message.packed;
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.lazy != null && message.hasOwnProperty("lazy"))
                    object.lazy = message.lazy;
                if (message.experimentalMapKey != null && message.hasOwnProperty("experimentalMapKey"))
                    object.experimentalMapKey = message.experimentalMapKey;
                if (message.weak != null && message.hasOwnProperty("weak"))
                    object.weak = message.weak;
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (let j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                if (message[".org.jetbrains.kotlin.metadata.skipInComparison"] != null && message.hasOwnProperty(".org.jetbrains.kotlin.metadata.skipInComparison"))
                    object[".org.jetbrains.kotlin.metadata.skipInComparison"] = message[".org.jetbrains.kotlin.metadata.skipInComparison"];
                if (message[".org.jetbrains.kotlin.metadata.nameIdInTable"] != null && message.hasOwnProperty(".org.jetbrains.kotlin.metadata.nameIdInTable"))
                    object[".org.jetbrains.kotlin.metadata.nameIdInTable"] = message[".org.jetbrains.kotlin.metadata.nameIdInTable"];
                if (message[".org.jetbrains.kotlin.metadata.fqNameIdInTable"] != null && message.hasOwnProperty(".org.jetbrains.kotlin.metadata.fqNameIdInTable"))
                    object[".org.jetbrains.kotlin.metadata.fqNameIdInTable"] = message[".org.jetbrains.kotlin.metadata.fqNameIdInTable"];
                if (message[".org.jetbrains.kotlin.metadata.stringIdInTable"] != null && message.hasOwnProperty(".org.jetbrains.kotlin.metadata.stringIdInTable"))
                    object[".org.jetbrains.kotlin.metadata.stringIdInTable"] = message[".org.jetbrains.kotlin.metadata.stringIdInTable"];
                if (message[".org.jetbrains.kotlin.metadata.typeIdInTable"] != null && message.hasOwnProperty(".org.jetbrains.kotlin.metadata.typeIdInTable"))
                    object[".org.jetbrains.kotlin.metadata.typeIdInTable"] = message[".org.jetbrains.kotlin.metadata.typeIdInTable"];
                return object;
            };

            /**
             * Converts this FieldOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.FieldOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FieldOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for FieldOptions
             * @function getTypeUrl
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            FieldOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.FieldOptions";
            };

            /**
             * CType enum.
             * @name google.protobuf.FieldOptions.CType
             * @enum {number}
             * @property {number} STRING=0 STRING value
             * @property {number} CORD=1 CORD value
             * @property {number} STRING_PIECE=2 STRING_PIECE value
             */
            FieldOptions.CType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "STRING"] = 0;
                values[valuesById[1] = "CORD"] = 1;
                values[valuesById[2] = "STRING_PIECE"] = 2;
                return values;
            })();

            return FieldOptions;
        })();

        protobuf.EnumOptions = (function() {

            /**
             * Properties of an EnumOptions.
             * @memberof google.protobuf
             * @interface IEnumOptions
             * @property {boolean|null} [allowAlias] EnumOptions allowAlias
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] EnumOptions uninterpretedOption
             */

            /**
             * Constructs a new EnumOptions.
             * @memberof google.protobuf
             * @classdesc Represents an EnumOptions.
             * @implements IEnumOptions
             * @constructor
             * @param {google.protobuf.IEnumOptions=} [properties] Properties to set
             */
            function EnumOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EnumOptions allowAlias.
             * @member {boolean} allowAlias
             * @memberof google.protobuf.EnumOptions
             * @instance
             */
            EnumOptions.prototype.allowAlias = true;

            /**
             * EnumOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.EnumOptions
             * @instance
             */
            EnumOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.EnumOptions} EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumOptions.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumOptions();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 2: {
                            message.allowAlias = reader.bool();
                            break;
                        }
                    case 999: {
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.EnumOptions} EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.EnumOptions} EnumOptions
             */
            EnumOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.EnumOptions)
                    return object;
                let message = new $root.google.protobuf.EnumOptions();
                if (object.allowAlias != null)
                    message.allowAlias = Boolean(object.allowAlias);
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.EnumOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (let i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.EnumOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {google.protobuf.EnumOptions} message EnumOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (options.defaults)
                    object.allowAlias = true;
                if (message.allowAlias != null && message.hasOwnProperty("allowAlias"))
                    object.allowAlias = message.allowAlias;
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (let j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                return object;
            };

            /**
             * Converts this EnumOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.EnumOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EnumOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for EnumOptions
             * @function getTypeUrl
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            EnumOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.EnumOptions";
            };

            return EnumOptions;
        })();

        protobuf.EnumValueOptions = (function() {

            /**
             * Properties of an EnumValueOptions.
             * @memberof google.protobuf
             * @interface IEnumValueOptions
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] EnumValueOptions uninterpretedOption
             */

            /**
             * Constructs a new EnumValueOptions.
             * @memberof google.protobuf
             * @classdesc Represents an EnumValueOptions.
             * @implements IEnumValueOptions
             * @constructor
             * @param {google.protobuf.IEnumValueOptions=} [properties] Properties to set
             */
            function EnumValueOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EnumValueOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.EnumValueOptions
             * @instance
             */
            EnumValueOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumValueOptions.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumValueOptions();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 999: {
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumValueOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
             */
            EnumValueOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.EnumValueOptions)
                    return object;
                let message = new $root.google.protobuf.EnumValueOptions();
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.EnumValueOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (let i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.EnumValueOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {google.protobuf.EnumValueOptions} message EnumValueOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumValueOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (let j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                return object;
            };

            /**
             * Converts this EnumValueOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.EnumValueOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EnumValueOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for EnumValueOptions
             * @function getTypeUrl
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            EnumValueOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.EnumValueOptions";
            };

            return EnumValueOptions;
        })();

        protobuf.ServiceOptions = (function() {

            /**
             * Properties of a ServiceOptions.
             * @memberof google.protobuf
             * @interface IServiceOptions
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] ServiceOptions uninterpretedOption
             */

            /**
             * Constructs a new ServiceOptions.
             * @memberof google.protobuf
             * @classdesc Represents a ServiceOptions.
             * @implements IServiceOptions
             * @constructor
             * @param {google.protobuf.IServiceOptions=} [properties] Properties to set
             */
            function ServiceOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ServiceOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.ServiceOptions
             * @instance
             */
            ServiceOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.ServiceOptions} ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceOptions.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ServiceOptions();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 999: {
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.ServiceOptions} ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.ServiceOptions} ServiceOptions
             */
            ServiceOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.ServiceOptions)
                    return object;
                let message = new $root.google.protobuf.ServiceOptions();
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.ServiceOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (let i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.ServiceOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {google.protobuf.ServiceOptions} message ServiceOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ServiceOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (let j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                return object;
            };

            /**
             * Converts this ServiceOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.ServiceOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ServiceOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ServiceOptions
             * @function getTypeUrl
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ServiceOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.ServiceOptions";
            };

            return ServiceOptions;
        })();

        protobuf.MethodOptions = (function() {

            /**
             * Properties of a MethodOptions.
             * @memberof google.protobuf
             * @interface IMethodOptions
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] MethodOptions uninterpretedOption
             */

            /**
             * Constructs a new MethodOptions.
             * @memberof google.protobuf
             * @classdesc Represents a MethodOptions.
             * @implements IMethodOptions
             * @constructor
             * @param {google.protobuf.IMethodOptions=} [properties] Properties to set
             */
            function MethodOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MethodOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.MethodOptions
             * @instance
             */
            MethodOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.MethodOptions} MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MethodOptions.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MethodOptions();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 999: {
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.MethodOptions} MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MethodOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.MethodOptions} MethodOptions
             */
            MethodOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.MethodOptions)
                    return object;
                let message = new $root.google.protobuf.MethodOptions();
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.MethodOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (let i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.MethodOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {google.protobuf.MethodOptions} message MethodOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MethodOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (let j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                return object;
            };

            /**
             * Converts this MethodOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.MethodOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MethodOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for MethodOptions
             * @function getTypeUrl
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            MethodOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.MethodOptions";
            };

            return MethodOptions;
        })();

        protobuf.UninterpretedOption = (function() {

            /**
             * Properties of an UninterpretedOption.
             * @memberof google.protobuf
             * @interface IUninterpretedOption
             * @property {Array.<google.protobuf.UninterpretedOption.INamePart>|null} [name] UninterpretedOption name
             * @property {string|null} [identifierValue] UninterpretedOption identifierValue
             * @property {number|Long|null} [positiveIntValue] UninterpretedOption positiveIntValue
             * @property {number|Long|null} [negativeIntValue] UninterpretedOption negativeIntValue
             * @property {number|null} [doubleValue] UninterpretedOption doubleValue
             * @property {Uint8Array|null} [stringValue] UninterpretedOption stringValue
             * @property {string|null} [aggregateValue] UninterpretedOption aggregateValue
             */

            /**
             * Constructs a new UninterpretedOption.
             * @memberof google.protobuf
             * @classdesc Represents an UninterpretedOption.
             * @implements IUninterpretedOption
             * @constructor
             * @param {google.protobuf.IUninterpretedOption=} [properties] Properties to set
             */
            function UninterpretedOption(properties) {
                this.name = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UninterpretedOption name.
             * @member {Array.<google.protobuf.UninterpretedOption.INamePart>} name
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.name = $util.emptyArray;

            /**
             * UninterpretedOption identifierValue.
             * @member {string} identifierValue
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.identifierValue = "";

            /**
             * UninterpretedOption positiveIntValue.
             * @member {number|Long} positiveIntValue
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.positiveIntValue = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * UninterpretedOption negativeIntValue.
             * @member {number|Long} negativeIntValue
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.negativeIntValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * UninterpretedOption doubleValue.
             * @member {number} doubleValue
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.doubleValue = 0;

            /**
             * UninterpretedOption stringValue.
             * @member {Uint8Array} stringValue
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.stringValue = $util.newBuffer([]);

            /**
             * UninterpretedOption aggregateValue.
             * @member {string} aggregateValue
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.aggregateValue = "";

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UninterpretedOption.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UninterpretedOption();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 2: {
                            if (!(message.name && message.name.length))
                                message.name = [];
                            message.name.push($root.google.protobuf.UninterpretedOption.NamePart.decode(reader, reader.uint32()));
                            break;
                        }
                    case 3: {
                            message.identifierValue = reader.string();
                            break;
                        }
                    case 4: {
                            message.positiveIntValue = reader.uint64();
                            break;
                        }
                    case 5: {
                            message.negativeIntValue = reader.int64();
                            break;
                        }
                    case 6: {
                            message.doubleValue = reader.double();
                            break;
                        }
                    case 7: {
                            message.stringValue = reader.bytes();
                            break;
                        }
                    case 8: {
                            message.aggregateValue = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UninterpretedOption.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
             */
            UninterpretedOption.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.UninterpretedOption)
                    return object;
                let message = new $root.google.protobuf.UninterpretedOption();
                if (object.name) {
                    if (!Array.isArray(object.name))
                        throw TypeError(".google.protobuf.UninterpretedOption.name: array expected");
                    message.name = [];
                    for (let i = 0; i < object.name.length; ++i) {
                        if (typeof object.name[i] !== "object")
                            throw TypeError(".google.protobuf.UninterpretedOption.name: object expected");
                        message.name[i] = $root.google.protobuf.UninterpretedOption.NamePart.fromObject(object.name[i]);
                    }
                }
                if (object.identifierValue != null)
                    message.identifierValue = String(object.identifierValue);
                if (object.positiveIntValue != null)
                    if ($util.Long)
                        (message.positiveIntValue = $util.Long.fromValue(object.positiveIntValue)).unsigned = true;
                    else if (typeof object.positiveIntValue === "string")
                        message.positiveIntValue = parseInt(object.positiveIntValue, 10);
                    else if (typeof object.positiveIntValue === "number")
                        message.positiveIntValue = object.positiveIntValue;
                    else if (typeof object.positiveIntValue === "object")
                        message.positiveIntValue = new $util.LongBits(object.positiveIntValue.low >>> 0, object.positiveIntValue.high >>> 0).toNumber(true);
                if (object.negativeIntValue != null)
                    if ($util.Long)
                        (message.negativeIntValue = $util.Long.fromValue(object.negativeIntValue)).unsigned = false;
                    else if (typeof object.negativeIntValue === "string")
                        message.negativeIntValue = parseInt(object.negativeIntValue, 10);
                    else if (typeof object.negativeIntValue === "number")
                        message.negativeIntValue = object.negativeIntValue;
                    else if (typeof object.negativeIntValue === "object")
                        message.negativeIntValue = new $util.LongBits(object.negativeIntValue.low >>> 0, object.negativeIntValue.high >>> 0).toNumber();
                if (object.doubleValue != null)
                    message.doubleValue = Number(object.doubleValue);
                if (object.stringValue != null)
                    if (typeof object.stringValue === "string")
                        $util.base64.decode(object.stringValue, message.stringValue = $util.newBuffer($util.base64.length(object.stringValue)), 0);
                    else if (object.stringValue.length >= 0)
                        message.stringValue = object.stringValue;
                if (object.aggregateValue != null)
                    message.aggregateValue = String(object.aggregateValue);
                return message;
            };

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {google.protobuf.UninterpretedOption} message UninterpretedOption
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UninterpretedOption.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.name = [];
                if (options.defaults) {
                    object.identifierValue = "";
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.positiveIntValue = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.positiveIntValue = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.negativeIntValue = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.negativeIntValue = options.longs === String ? "0" : 0;
                    object.doubleValue = 0;
                    if (options.bytes === String)
                        object.stringValue = "";
                    else {
                        object.stringValue = [];
                        if (options.bytes !== Array)
                            object.stringValue = $util.newBuffer(object.stringValue);
                    }
                    object.aggregateValue = "";
                }
                if (message.name && message.name.length) {
                    object.name = [];
                    for (let j = 0; j < message.name.length; ++j)
                        object.name[j] = $root.google.protobuf.UninterpretedOption.NamePart.toObject(message.name[j], options);
                }
                if (message.identifierValue != null && message.hasOwnProperty("identifierValue"))
                    object.identifierValue = message.identifierValue;
                if (message.positiveIntValue != null && message.hasOwnProperty("positiveIntValue"))
                    if (typeof message.positiveIntValue === "number")
                        object.positiveIntValue = options.longs === String ? String(message.positiveIntValue) : message.positiveIntValue;
                    else
                        object.positiveIntValue = options.longs === String ? $util.Long.prototype.toString.call(message.positiveIntValue) : options.longs === Number ? new $util.LongBits(message.positiveIntValue.low >>> 0, message.positiveIntValue.high >>> 0).toNumber(true) : message.positiveIntValue;
                if (message.negativeIntValue != null && message.hasOwnProperty("negativeIntValue"))
                    if (typeof message.negativeIntValue === "number")
                        object.negativeIntValue = options.longs === String ? String(message.negativeIntValue) : message.negativeIntValue;
                    else
                        object.negativeIntValue = options.longs === String ? $util.Long.prototype.toString.call(message.negativeIntValue) : options.longs === Number ? new $util.LongBits(message.negativeIntValue.low >>> 0, message.negativeIntValue.high >>> 0).toNumber() : message.negativeIntValue;
                if (message.doubleValue != null && message.hasOwnProperty("doubleValue"))
                    object.doubleValue = options.json && !isFinite(message.doubleValue) ? String(message.doubleValue) : message.doubleValue;
                if (message.stringValue != null && message.hasOwnProperty("stringValue"))
                    object.stringValue = options.bytes === String ? $util.base64.encode(message.stringValue, 0, message.stringValue.length) : options.bytes === Array ? Array.prototype.slice.call(message.stringValue) : message.stringValue;
                if (message.aggregateValue != null && message.hasOwnProperty("aggregateValue"))
                    object.aggregateValue = message.aggregateValue;
                return object;
            };

            /**
             * Converts this UninterpretedOption to JSON.
             * @function toJSON
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UninterpretedOption.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for UninterpretedOption
             * @function getTypeUrl
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            UninterpretedOption.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.UninterpretedOption";
            };

            UninterpretedOption.NamePart = (function() {

                /**
                 * Properties of a NamePart.
                 * @memberof google.protobuf.UninterpretedOption
                 * @interface INamePart
                 * @property {string} namePart NamePart namePart
                 * @property {boolean} isExtension NamePart isExtension
                 */

                /**
                 * Constructs a new NamePart.
                 * @memberof google.protobuf.UninterpretedOption
                 * @classdesc Represents a NamePart.
                 * @implements INamePart
                 * @constructor
                 * @param {google.protobuf.UninterpretedOption.INamePart=} [properties] Properties to set
                 */
                function NamePart(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * NamePart namePart.
                 * @member {string} namePart
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @instance
                 */
                NamePart.prototype.namePart = "";

                /**
                 * NamePart isExtension.
                 * @member {boolean} isExtension
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @instance
                 */
                NamePart.prototype.isExtension = false;

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NamePart.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UninterpretedOption.NamePart();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.namePart = reader.string();
                                break;
                            }
                        case 2: {
                                message.isExtension = reader.bool();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    if (!message.hasOwnProperty("namePart"))
                        throw $util.ProtocolError("missing required 'namePart'", { instance: message });
                    if (!message.hasOwnProperty("isExtension"))
                        throw $util.ProtocolError("missing required 'isExtension'", { instance: message });
                    return message;
                };

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NamePart.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                 */
                NamePart.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.UninterpretedOption.NamePart)
                        return object;
                    let message = new $root.google.protobuf.UninterpretedOption.NamePart();
                    if (object.namePart != null)
                        message.namePart = String(object.namePart);
                    if (object.isExtension != null)
                        message.isExtension = Boolean(object.isExtension);
                    return message;
                };

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {google.protobuf.UninterpretedOption.NamePart} message NamePart
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                NamePart.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.namePart = "";
                        object.isExtension = false;
                    }
                    if (message.namePart != null && message.hasOwnProperty("namePart"))
                        object.namePart = message.namePart;
                    if (message.isExtension != null && message.hasOwnProperty("isExtension"))
                        object.isExtension = message.isExtension;
                    return object;
                };

                /**
                 * Converts this NamePart to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                NamePart.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for NamePart
                 * @function getTypeUrl
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                NamePart.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.UninterpretedOption.NamePart";
                };

                return NamePart;
            })();

            return UninterpretedOption;
        })();

        protobuf.SourceCodeInfo = (function() {

            /**
             * Properties of a SourceCodeInfo.
             * @memberof google.protobuf
             * @interface ISourceCodeInfo
             * @property {Array.<google.protobuf.SourceCodeInfo.ILocation>|null} [location] SourceCodeInfo location
             */

            /**
             * Constructs a new SourceCodeInfo.
             * @memberof google.protobuf
             * @classdesc Represents a SourceCodeInfo.
             * @implements ISourceCodeInfo
             * @constructor
             * @param {google.protobuf.ISourceCodeInfo=} [properties] Properties to set
             */
            function SourceCodeInfo(properties) {
                this.location = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SourceCodeInfo location.
             * @member {Array.<google.protobuf.SourceCodeInfo.ILocation>} location
             * @memberof google.protobuf.SourceCodeInfo
             * @instance
             */
            SourceCodeInfo.prototype.location = $util.emptyArray;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SourceCodeInfo.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.SourceCodeInfo();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.location && message.location.length))
                                message.location = [];
                            message.location.push($root.google.protobuf.SourceCodeInfo.Location.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SourceCodeInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
             */
            SourceCodeInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.SourceCodeInfo)
                    return object;
                let message = new $root.google.protobuf.SourceCodeInfo();
                if (object.location) {
                    if (!Array.isArray(object.location))
                        throw TypeError(".google.protobuf.SourceCodeInfo.location: array expected");
                    message.location = [];
                    for (let i = 0; i < object.location.length; ++i) {
                        if (typeof object.location[i] !== "object")
                            throw TypeError(".google.protobuf.SourceCodeInfo.location: object expected");
                        message.location[i] = $root.google.protobuf.SourceCodeInfo.Location.fromObject(object.location[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {google.protobuf.SourceCodeInfo} message SourceCodeInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SourceCodeInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.location = [];
                if (message.location && message.location.length) {
                    object.location = [];
                    for (let j = 0; j < message.location.length; ++j)
                        object.location[j] = $root.google.protobuf.SourceCodeInfo.Location.toObject(message.location[j], options);
                }
                return object;
            };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @function toJSON
             * @memberof google.protobuf.SourceCodeInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SourceCodeInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SourceCodeInfo
             * @function getTypeUrl
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SourceCodeInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.SourceCodeInfo";
            };

            SourceCodeInfo.Location = (function() {

                /**
                 * Properties of a Location.
                 * @memberof google.protobuf.SourceCodeInfo
                 * @interface ILocation
                 * @property {Array.<number>|null} [path] Location path
                 * @property {Array.<number>|null} [span] Location span
                 * @property {string|null} [leadingComments] Location leadingComments
                 * @property {string|null} [trailingComments] Location trailingComments
                 */

                /**
                 * Constructs a new Location.
                 * @memberof google.protobuf.SourceCodeInfo
                 * @classdesc Represents a Location.
                 * @implements ILocation
                 * @constructor
                 * @param {google.protobuf.SourceCodeInfo.ILocation=} [properties] Properties to set
                 */
                function Location(properties) {
                    this.path = [];
                    this.span = [];
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Location path.
                 * @member {Array.<number>} path
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 */
                Location.prototype.path = $util.emptyArray;

                /**
                 * Location span.
                 * @member {Array.<number>} span
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 */
                Location.prototype.span = $util.emptyArray;

                /**
                 * Location leadingComments.
                 * @member {string} leadingComments
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 */
                Location.prototype.leadingComments = "";

                /**
                 * Location trailingComments.
                 * @member {string} trailingComments
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 */
                Location.prototype.trailingComments = "";

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.SourceCodeInfo.Location} Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Location.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.SourceCodeInfo.Location();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                if (!(message.path && message.path.length))
                                    message.path = [];
                                if ((tag & 7) === 2) {
                                    let end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.path.push(reader.int32());
                                } else
                                    message.path.push(reader.int32());
                                break;
                            }
                        case 2: {
                                if (!(message.span && message.span.length))
                                    message.span = [];
                                if ((tag & 7) === 2) {
                                    let end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.span.push(reader.int32());
                                } else
                                    message.span.push(reader.int32());
                                break;
                            }
                        case 3: {
                                message.leadingComments = reader.string();
                                break;
                            }
                        case 4: {
                                message.trailingComments = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.SourceCodeInfo.Location} Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Location.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.SourceCodeInfo.Location} Location
                 */
                Location.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.SourceCodeInfo.Location)
                        return object;
                    let message = new $root.google.protobuf.SourceCodeInfo.Location();
                    if (object.path) {
                        if (!Array.isArray(object.path))
                            throw TypeError(".google.protobuf.SourceCodeInfo.Location.path: array expected");
                        message.path = [];
                        for (let i = 0; i < object.path.length; ++i)
                            message.path[i] = object.path[i] | 0;
                    }
                    if (object.span) {
                        if (!Array.isArray(object.span))
                            throw TypeError(".google.protobuf.SourceCodeInfo.Location.span: array expected");
                        message.span = [];
                        for (let i = 0; i < object.span.length; ++i)
                            message.span[i] = object.span[i] | 0;
                    }
                    if (object.leadingComments != null)
                        message.leadingComments = String(object.leadingComments);
                    if (object.trailingComments != null)
                        message.trailingComments = String(object.trailingComments);
                    return message;
                };

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {google.protobuf.SourceCodeInfo.Location} message Location
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Location.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults) {
                        object.path = [];
                        object.span = [];
                    }
                    if (options.defaults) {
                        object.leadingComments = "";
                        object.trailingComments = "";
                    }
                    if (message.path && message.path.length) {
                        object.path = [];
                        for (let j = 0; j < message.path.length; ++j)
                            object.path[j] = message.path[j];
                    }
                    if (message.span && message.span.length) {
                        object.span = [];
                        for (let j = 0; j < message.span.length; ++j)
                            object.span[j] = message.span[j];
                    }
                    if (message.leadingComments != null && message.hasOwnProperty("leadingComments"))
                        object.leadingComments = message.leadingComments;
                    if (message.trailingComments != null && message.hasOwnProperty("trailingComments"))
                        object.trailingComments = message.trailingComments;
                    return object;
                };

                /**
                 * Converts this Location to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Location.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Location
                 * @function getTypeUrl
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Location.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.SourceCodeInfo.Location";
                };

                return Location;
            })();

            return SourceCodeInfo;
        })();

        return protobuf;
    })();

    return google;
})();

export { $root as default };
