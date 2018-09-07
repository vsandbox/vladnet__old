export class IEntity {
    id: symbol;
    version: number;
}

export class IPosition {
    x: number;
    y: number;
}

export default {

    init(sm: any) {
        sm.setGroup("components", {
            positions: [IPosition],
            entities: [IEntity],
        });
    },

    update(sm: any) {
        const { positions, entities } = sm.getGroup("components");
    },

};
