const addon = require('../build/Debug/rcjs.node');

const buffer = addon.getBuffer();

console.log(buffer.toString());

// const MAX = 2;

// let arr = [];
// for (let i = 0; i < 20000; i++) {
//     arr.push({
//         name: Buffer.from("Username"),
//         x: Buffer.from("1"),
//         y: Buffer.from("1"),
//     });
// }

// console.log("before", arr[0].x[0]);

// console.time("time");
// addon.testFunction(arr);
// console.timeEnd("time");

// console.log("after", arr[0].x[0]);
