const addon = require('../build/Debug/rcjs.node');

let obj = {
    name: "Vasyl",
    age: 10,
    password: "Vasyl@mail.com",
    role: "Admin",
};

let objs = [];
for (let i = 0; i < 10000; i++) {
    objs.push(obj);
}

let newObj;
console.time("copy");
newObj = addon.copy(obj);
console.timeEnd("copy");

let newArr;
console.time("copyArray");
newArr = addon.copyArray(objs);
console.timeEnd("copyArray");

console.log("newObj", newObj);
console.log("newArr", newArr.length);
