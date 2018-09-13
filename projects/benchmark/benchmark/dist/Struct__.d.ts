export declare enum EStructMemberType {
    int8 = "int8",
    int16 = "int16",
    int32 = "int32",
    float32 = "float32",
    float64 = "float64",
    string = "string"
}
export interface IStructDescriptor {
    [member: string]: {
        type: EStructMemberType;
        length?: number;
        isArray?: boolean;
    };
}
export declare class Struct {
    private buffer;
    private members;
    constructor(structDescriptor: IStructDescriptor);
    get(key: string): string | number;
    getArray(key: string): void;
    set(key: string, value: number | string): void;
    getOffset(key: string): void;
}
