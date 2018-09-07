import { EntityManager } from "rcs";

const em = new EntityManager();

em.setComponent(Vector2D, 2, 3);
em.setComponent(Image, new Image("someUrl"));

em.createEntity();
em.removeEntity(entityId);


sm.addSystem({
    update(em) {
        console.log("em", em);
    },
});

