const addon = require("../build/Debug/addon.node");

const connector = new addon.Connector();

console.log(connector.getValue());
