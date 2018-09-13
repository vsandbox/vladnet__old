// kind     subkind     length
// uint8     uint8      uint16

export interface IBufferReadResult {
    value: any;
    byteLength: number;
}

export enum EKind {
    devnul,
    array,
    struct,
    int8, int16, int32,
    float32, float64,
    uint8, uint16, uint32,
    pointer,
}

export interface IStructType {
    // member: byteOffset
    [key: string]: number;
}

export namespace BufferHelpers {

    export const typeToByteLength: { [key: string]: number } = {
        [EKind.array]: 0,
        [EKind.struct]: 0,
        [EKind.int8]: 1,
        [EKind.int16]: 2,
        [EKind.float32]: 4,
        [EKind.uint8]: 1,
        [EKind.uint16]: 2,
    };

    export const typeToFactory: { [key: string]: string } = {
        [EKind.array]: "",
        [EKind.struct]: "",
        [EKind.int8]: "getInt8",
        [EKind.int16]: "getInt16",
        [EKind.float32]: "getFloat32",
        [EKind.uint8]: "getUint8",
        [EKind.uint16]: "getUint16",
    };

    export const readNumber = (buffer: ArrayBuffer, kind: EKind): number => {
        return (new DataView(buffer, 0, typeToByteLength[kind]) as any)[typeToFactory[kind]]();
    };

    export const read = (
        buffer: ArrayBuffer,
        kind?: EKind,
        structTypes: { [key: string]: IStructType } = {},
    ): IBufferReadResult => {
        let byteLength = 0;

        if (!kind) {
            kind = readNumber(buffer, EKind.uint8);
            buffer = buffer.slice(typeToByteLength[EKind.uint8]);
            byteLength += typeToByteLength[EKind.uint8];
        }

        switch (kind) {
            case EKind.array: {
                const elementKind = readNumber(buffer, EKind.uint8);
                buffer = buffer.slice(typeToByteLength[EKind.uint8]);
                byteLength += typeToByteLength[EKind.uint8];

                const length = readNumber(buffer, EKind.uint16);
                buffer = buffer.slice(typeToByteLength[EKind.uint16]);
                byteLength += typeToByteLength[EKind.uint8];

                let elements = [];
                for (let i = 0; i < length; i++) {
                    let result = read(buffer, elementKind);
                    elements[i] = result.value;
                    buffer = buffer.slice(result.byteLength);
                    byteLength += result.value;
                }

                return {
                    value: elements,
                    byteLength,
                };
            };
            case EKind.pointer: {
                const pointer = readNumber(buffer, EKind.uint32);
            };
            case EKind.struct: {
                const structTypeid = readNumber(buffer, EKind.uint16);
                const structType = structTypes[structTypeid];
                buffer = buffer.slice(typeToByteLength[EKind.uint16]);
                byteLength += typeToByteLength[EKind.uint16];

                const value = Object
                    .keys(structType)
                    .reduce((acc, key) => {
                        const memberOffset = structType[key];
                        buffer = buffer.slice(memberOffset);
                        const result = read(buffer);

                        acc[key] = result.value;

                        return acc;
                    }, {} as any);

                return {
                    value,
                    byteLength,
                };
            };
            case EKind.int8:
            case EKind.int16:
            case EKind.int32:
            case EKind.float32:
            case EKind.float64:
            case EKind.uint8:
            case EKind.uint16:
                return {
                    value: readNumber(buffer, kind),
                    byteLength: byteLength + typeToByteLength[kind],
                };

            default:
                break;
        }
    };

}
