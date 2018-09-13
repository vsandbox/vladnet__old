import { TextEncoder, TextDecoder } from "text-encoding";

export enum EStructMemberType {
    int8 = "int8", int16 = "int16", int32 = "int32",
    float32 = "float32", float64 = "float64",
    string = "string",
}

export interface IStructDescriptor {
    [member: string]: {
        type: EStructMemberType;
        length?: number; // > 0
        isArray?: boolean;
    };
}

interface IStructMembers {
    [member: string]: {
        type: EStructMemberType;
        isArray: boolean;
        length: number; // length in elements
        byteLength: number; // length in bytes
        byteOffset: number;
    };
}

const byteLengthMap = {
    int8: 1,
    int16: 2,
    int32: 4,
    float32: 4,
    float64: 8,
    string: 1,
};

const arrayTypeMap = {
    int8: Int8Array,
    int16: Int16Array,
    int32: Int32Array,
    float32: Float32Array,
    float64: Float64Array,
    string: Uint8Array,
};

export class Struct {

    private buffer: ArrayBuffer;
    private members: IStructMembers;

    constructor(structDescriptor: IStructDescriptor) {
        let lastMemberByteOffset = 0;
        this.members = Object
            .keys(structDescriptor)
            .reduce<IStructMembers>((acc, key) => {
                const memberDescriptor = structDescriptor[key];
                const byteLength = byteLengthMap[memberDescriptor.type];
                const length = memberDescriptor.length || 0;

                acc[key] = {
                    isArray: memberDescriptor.type === EStructMemberType.string || memberDescriptor.isArray,
                    type: memberDescriptor.type,
                    byteLength: byteLength,
                    byteOffset: lastMemberByteOffset,
                    length,
                };

                lastMemberByteOffset += (length * byteLength);

                return acc;
            }, {});
    }

    public get(key: string) {
        const member = this.members[key];

        if (!member) return;

        const view = new DataView(this.buffer, member.byteOffset, member.byteLength);

        switch (member.type) {
            case EStructMemberType.int8:
                return view.getInt8(0);
            case EStructMemberType.int16:
                return view.getInt16(0);
            case EStructMemberType.int32:
                return view.getInt32(0);
            case EStructMemberType.float32:
                return view.getFloat32(0);
            case EStructMemberType.float64:
                return view.getFloat64(0);
            case EStructMemberType.string: {
                const decoder = new TextDecoder("utf-8");
                const source = this.buffer.slice(member.byteOffset, member.byteOffset + member.byteLength);
                return decoder.decode(source);
            }

            default:
                break;
        }
    }

    public getArray(key: string) {
        const member = this.members[key];

        if (!member) return;

        const ArrayType = arrayTypeMap[member.type];
        const array = new ArrayType(this.buffer, member.byteOffset, member.length);

        if (member.type === EStructMemberType.string) {

        }
    }

    public set(key: string, value: number | string) {
        const member = this.members[key];

        if (!member) return;

        const view = new DataView(this.buffer, member.byteOffset, member.byteLength);

        switch (member.type) {
            case EStructMemberType.int8:
                view.setInt8(0, <number>value);
                break;
            case EStructMemberType.int16:
                view.setInt16(0, <number>value);
                break;
            case EStructMemberType.int32:
                view.setInt32(0, <number>value);
                break;
            case EStructMemberType.float32:
                view.setFloat32(0, <number>value);
                break;
            case EStructMemberType.float64:
                view.setFloat64(0, <number>value);
                break;
            case EStructMemberType.string: {
                const encoder = new TextEncoder();
                const encodedString = encoder.encode(<string>value);
                const uint8Array = new Uint8Array(this.buffer, member.byteOffset);
                uint8Array.set(encodedString);
                break;
            }

            default:
                break;
        }
    }

    public getOffset(key: string) {

    }

}
