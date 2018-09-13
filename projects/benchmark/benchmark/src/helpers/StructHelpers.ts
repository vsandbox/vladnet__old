export enum EStructMemberType {
    int8,
    float32,
    struct,
    string,
};

export interface IStructDescriptorMember {
    type: EStructMemberType;
    length?: number;
}

export interface IStructDescriptor { [key: string]: IStructDescriptorMember; };

export namespace StructHelpers {

    export const byteLengthMap = {
        [EStructMemberType.int8]: 1,
        [EStructMemberType.float32]: 4,
        [EStructMemberType.struct]: 4,
        [EStructMemberType.string]: 4,
    };

    export const countDescriptorByteLength = (descriptor: IStructDescriptor): number => {
        return Object
            .keys(descriptor)
            .reduce((acc, key) => {
                const memberType = descriptor[key].type;
                return acc + byteLengthMap[memberType];
            }, 0);
    };

}
