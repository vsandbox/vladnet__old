const child_process = require("child_process");
const path = require("path");

const addon = require("../build/Debug/addon.node");

const connector = new addon.Connector();
const connector2 = new addon.Connector();

connector.setValue(10);
console.log(connector2.getValue());

child_process.fork(path.join(__dirname, "worker.js"));
