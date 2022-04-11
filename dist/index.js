"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Start = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
require("./index.css");
var Start_1 = require("./pages/Start");
Object.defineProperty(exports, "Start", { enumerable: true, get: function () { return Start_1.Start; } });
react_dom_1.default.render((0, jsx_runtime_1.jsx)(react_1.default.StrictMode, { children: (0, jsx_runtime_1.jsx)(Start_1.Start, {}, void 0) }, void 0), document.getElementById('root'));
