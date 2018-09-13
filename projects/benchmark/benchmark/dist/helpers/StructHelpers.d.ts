export declare enum EStructMemberType {
    int8 = 0,
    float32 = 1,
    struct = 2,
    string = 3
}
export interface IStructDescriptorMember {
    type: EStructMemberType;
    length?: number;
}
export interface IStructDescriptor {
    [key: string]: IStructDescriptorMember;
}
export declare namespace StructHelpers {
    const byteLengthMap: {
        [EStructMemberType.int8]: number;
        [EStructMemberType.float32]: number;
        [EStructMemberType.struct]: number;
        [EStructMemberType.string]: number;
    };
    const countDescriptorByteLength: (descriptor: IStructDescriptor) => number;
}
