declare enum EKind {
    array = 0,
    struct = 1,
    int8 = 2,
    int16 = 3,
    float32 = 4,
    uint8 = 5,
    uint16 = 6
}
export declare const read: (buffer: ArrayBuffer, kind?: EKind, byteOffset?: number, byteLength?: number) => number;
export declare class Struct {
    private buffer;
    private offsetMap;
    get(key: string): void;
}
export {};
