export namespace ArrayHelpers {

    export const findIndex = <T = any>(arr: T[], filter: (value: T, index: number) => boolean) => {
        let index = -1;

        arr.some((v, i) => {
            if (filter(v, i)) index = i;
            return index > -1;
        });

        return index;
    };

    export const a = 12;

    export const splice = (arr: any[], index: number, value?: any) => {
        return [
            ...arr.slice(0, index),
            ...arr.slice(index + 1),
            ...(value ? [value] : []),
        ];
    }

}
