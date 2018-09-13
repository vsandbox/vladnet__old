(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Struct.ts":
/*!***********************!*\
  !*** ./src/Struct.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar _a, _b;\r\n// struct 9fieldName fieldType fieldValue fieldName2 fieldType2 fieldValue2\r\n[\r\n    0,\r\n    60,\r\n    // int8     value\r\n    1, 12,\r\n    // int16    value\r\n    2, 20,\r\n    // struct   value\r\n    0, 1, 12,\r\n    // array    value   length  0   1\r\n    20, 2, 2, 14, 23\r\n];\r\nvar d = [0, 20];\r\nvar EKind;\r\n(function (EKind) {\r\n    EKind[EKind[\"array\"] = 0] = \"array\";\r\n    EKind[EKind[\"struct\"] = 1] = \"struct\";\r\n    EKind[EKind[\"int8\"] = 2] = \"int8\";\r\n    EKind[EKind[\"int16\"] = 3] = \"int16\";\r\n    EKind[EKind[\"float32\"] = 4] = \"float32\";\r\n    EKind[EKind[\"uint8\"] = 5] = \"uint8\";\r\n    EKind[EKind[\"uint16\"] = 6] = \"uint16\";\r\n})(EKind || (EKind = {}));\r\nvar typeToByteLength = (_a = {},\r\n    _a[EKind.array] = 0,\r\n    _a[EKind.struct] = 0,\r\n    _a[EKind.int8] = 1,\r\n    _a[EKind.int16] = 2,\r\n    _a[EKind.float32] = 4,\r\n    _a[EKind.uint8] = 1,\r\n    _a[EKind.uint16] = 2,\r\n    _a);\r\nvar typeToFactory = (_b = {},\r\n    _b[EKind.array] = \"\",\r\n    _b[EKind.struct] = \"\",\r\n    _b[EKind.int8] = \"getInt8\",\r\n    _b[EKind.int16] = \"getInt16\",\r\n    _b[EKind.float32] = \"getFloat32\",\r\n    _b[EKind.uint8] = \"getUint8\",\r\n    _b[EKind.uint16] = \"getUint16\",\r\n    _b);\r\nvar descriptor = {\r\n    numbers: [EKind.array, EKind.int16, 20],\r\n};\r\nvar readValue = function (buffer, kind) {\r\n    return new DataView(buffer, 0, typeToByteLength[kind])[typeToFactory[kind]]();\r\n};\r\nexports.read = function (buffer, kind, byteOffset, byteLength) {\r\n    if (byteOffset === void 0) { byteOffset = 0; }\r\n    if (byteLength === void 0) { byteLength = buffer.byteLength; }\r\n    buffer = buffer.slice(byteOffset, byteOffset + byteLength);\r\n    if (typeof kind !== \"number\") {\r\n        kind = readValue(buffer, EKind.uint8);\r\n        buffer = buffer.slice(typeToByteLength[EKind.uint8]);\r\n    }\r\n    switch (kind) {\r\n        case EKind.int8:\r\n        case EKind.int16:\r\n        case EKind.float32:\r\n        case EKind.uint8:\r\n        case EKind.uint16:\r\n            return readValue(buffer, kind);\r\n        case EKind.array:\r\n            var elementKind = readValue(buffer, EKind.uint8);\r\n            buffer = buffer.slice(typeToByteLength[EKind.uint8]);\r\n            var length_1 = readValue(buffer, EKind.uint8);\r\n            buffer = buffer.slice(typeToByteLength[EKind.uint8]);\r\n            var elements = [];\r\n            for (var i = 0; i < length_1; i++) {\r\n                elements[i] = exports.read(buffer, elementKind);\r\n            }\r\n            return;\r\n        default:\r\n            break;\r\n    }\r\n};\r\nvar readBuffer = function (buffer, kind) {\r\n    var kindByteLength = typeToByteLength[EKind.uint8];\r\n    kind = typeof kind === \"number\" ? kind : new DataView(buffer, 0, kindByteLength).getUint8(0);\r\n    switch (kind) {\r\n        case EKind.array:\r\n            var subBuffer = buffer.slice(1);\r\n            var lastByte = 0;\r\n            var valueKind = new DataView(subBuffer, lastByte, kindByteLength).getUint8(0);\r\n            lastByte += kindByteLength;\r\n            var lengthByteLength = typeToByteLength[EKind.uint16];\r\n            var length_2 = new DataView(buffer, lastByte, lengthByteLength).getUint16(0);\r\n            lastByte += lengthByteLength;\r\n            var elementsBuffer = subBuffer.slice(lastByte);\r\n            var elements = [];\r\n            for (var i = 0; i < length_2; i++) {\r\n                // elements[i] = readBuffer();\r\n            }\r\n            break;\r\n        case EKind.int8:\r\n        case EKind.int16:\r\n        case EKind.float32:\r\n            return new DataView(buffer, 0, typeToByteLength[kind]);\r\n            break;\r\n        default:\r\n            break;\r\n    }\r\n};\r\nvar Struct = /** @class */ (function () {\r\n    function Struct() {\r\n    }\r\n    Struct.prototype.get = function (key) {\r\n        var offset = this.offsetMap[key];\r\n        var type = new DataView(this.buffer, offset, 1).getInt8(0);\r\n    };\r\n    return Struct;\r\n}());\r\nexports.Struct = Struct;\r\n\n\n//# sourceURL=webpack:///./src/Struct.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Struct_1 = __webpack_require__(/*! ./Struct */ \"./src/Struct.ts\");\r\n// const descriptor = {\r\n//     // [type(int8),     offset]\r\n//     age: new Int8Array(2),\r\n//     // [type(char),   offset, length, cycles]\r\n//     name: new Int8Array(4),\r\n//     // [type(child),    offset, length, cycles, structId]\r\n//     child: new Int8Array(5),\r\n// };\r\n// const buffer = new ArrayBuffer(2);\r\n// const struct = new Struct(descriptor, buffer);\r\n// descriptor.name.set([2,3,4,5]);\r\n// console.log(struct.get(\"name\"));\r\n// const buffer = new ArrayBuffer(2);\r\n// const view = new DataView(buffer, 0);\r\n// const view2 = new DataView(buffer, 0);\r\n// const a = view.getInt16(0);\r\n// view2.setInt16(0, 12);\r\nconsole.log(Struct_1.Struct);\r\nexports.default = undefined;\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

/******/ });
});