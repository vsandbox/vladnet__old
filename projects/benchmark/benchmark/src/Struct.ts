// struct 9fieldName fieldType fieldValue fieldName2 fieldType2 fieldValue2
[
    0, // struct
    60, // byteLength

    // int8     value
        1,        12,
    // int16    value
        2,        20,
    // struct   value
        0,        1,    12, ///...
    // array    value   length  0   1
        20,       2,       2,   14, 23
]

const d = [0, 20];

enum EKind {
    array,
    struct,
    int8,
    int16,
    float32,
    uint8,
    uint16
}

const typeToByteLength = {
    [EKind.array]: 0,
    [EKind.struct]: 0,
    [EKind.int8]: 1,
    [EKind.int16]: 2,
    [EKind.float32]: 4,
    [EKind.uint8]: 1,
    [EKind.uint16]: 2,
};

const typeToFactory = {
    [EKind.array]: "",
    [EKind.struct]: "",
    [EKind.int8]: "getInt8",
    [EKind.int16]: "getInt16",
    [EKind.float32]: "getFloat32",
    [EKind.uint8]: "getUint8",
    [EKind.uint16]: "getUint16",
};

type arrayType = [number, number];  // type, byteLength
type structType = [number, number]; // type, byteLength

const descriptor = {
    numbers: [EKind.array, EKind.int16, 20],
};

const readValue = (buffer: ArrayBuffer, kind: EKind): number => {
    return (new DataView(buffer, 0, typeToByteLength[kind]) as any)[typeToFactory[kind]]();
};

export const read = (buffer: ArrayBuffer, kind?: EKind, byteOffset: number = 0, byteLength: number = buffer.byteLength) => {
    buffer = buffer.slice(byteOffset, byteOffset + byteLength);

    if (typeof kind !== "number") {
        kind = readValue(buffer, EKind.uint8);
        buffer = buffer.slice(typeToByteLength[EKind.uint8]);
    }

    switch (kind) {
        case EKind.int8:
        case EKind.int16:
        case EKind.float32:
        case EKind.uint8:
        case EKind.uint16:
            return readValue(buffer, kind);

        case EKind.array:
            const elementKind = readValue(buffer, EKind.uint8);

            buffer = buffer.slice(typeToByteLength[EKind.uint8]);

            const length = readValue(buffer, EKind.uint8);

            buffer = buffer.slice(typeToByteLength[EKind.uint8]);

            let elements = [];
            for (let i = 0; i < length; i++) {
                elements[i] = read(buffer, elementKind);

            }
            return;
        default:
            break;
    }

};

const readBuffer = (buffer: ArrayBuffer, kind: EKind) => {
    const kindByteLength = typeToByteLength[EKind.uint8];
    kind = typeof kind === "number" ? kind : new DataView(buffer, 0, kindByteLength).getUint8(0);

    switch (kind) {
        case EKind.array:
            const subBuffer = buffer.slice(1);
            let lastByte = 0;
            const valueKind = new DataView(subBuffer, lastByte, kindByteLength).getUint8(0);
            lastByte += kindByteLength;

            const lengthByteLength = typeToByteLength[EKind.uint16];
            const length = new DataView(buffer, lastByte, lengthByteLength).getUint16(0);
            lastByte += lengthByteLength;

            const elementsBuffer = subBuffer.slice(lastByte);
            let elements = [];
            for (let i = 0; i < length; i++) {
                // elements[i] = readBuffer();
            }
            break;

        case EKind.int8:
        case EKind.int16:
        case EKind.float32:
            return new DataView(buffer, 0, typeToByteLength[kind]);
            break;

        default:
            break;
    }
};

export class Struct {

    private buffer: ArrayBuffer;
    private offsetMap: { [key: string]: number; };

    public get(key: string) {
        const offset = this.offsetMap[key];
        const type = new DataView(this.buffer, offset, 1).getInt8(0);
    }
}
