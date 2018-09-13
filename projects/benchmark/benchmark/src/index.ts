import { Struct } from "./Struct";

// const descriptor = {
//     // [type(int8),     offset]
//     age: new Int8Array(2),
//     // [type(char),   offset, length, cycles]
//     name: new Int8Array(4),
//     // [type(child),    offset, length, cycles, structId]
//     child: new Int8Array(5),
// };

// const buffer = new ArrayBuffer(2);
// const struct = new Struct(descriptor, buffer);

// descriptor.name.set([2,3,4,5]);

// console.log(struct.get("name"));

// const buffer = new ArrayBuffer(2);
// const view = new DataView(buffer, 0);
// const view2 = new DataView(buffer, 0);

// const a = view.getInt16(0);
// view2.setInt16(0, 12);
console.log(Struct);

export default undefined;
