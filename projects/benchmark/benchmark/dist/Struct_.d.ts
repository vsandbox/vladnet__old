export declare enum EStructMemberType {
    int8 = 0,
    int16 = 1,
    int32 = 2,
    float32 = 3,
    float64 = 4,
    string = 5
}
export interface IStructDescriptor {
    [member: string]: EStructMemberType;
}
interface IStructOffsets {
    [member: string]: number;
}
export declare class Struct {
    buffer: ArrayBuffer;
    byteLength: number;
    descriptor: IStructDescriptor;
    offsets: IStructOffsets;
    constructor(descriptor: IStructDescriptor);
    get(key: string): void;
    static countByteLength(descriptor: IStructDescriptor): number;
    static typeToByteLengthMap: {
        [type: string]: number;
    };
    static typeToArrayType: {
        [type: string]: any;
    };
}
export {};
