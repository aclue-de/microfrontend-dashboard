"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelpButton = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var material_1 = require("@mui/material");
var withStyles_1 = __importDefault(require("@mui/styles/withStyles"));
var icons_material_1 = require("@mui/icons-material");
var StyledIconButton = (0, withStyles_1.default)(function () { return ({
    root: {
        '&:hover': {
            backgroundColor: (0, material_1.alpha)('#1976d2', 0.04),
            color: '#1976d2',
        },
    },
}); })(material_1.IconButton);
var HelpButton = function (props) {
    return ((0, jsx_runtime_1.jsx)(StyledIconButton, __assign({}, props, { size: "medium" }, { children: (0, jsx_runtime_1.jsx)(icons_material_1.HelpOutlineOutlined, {}, void 0) }), void 0));
};
exports.HelpButton = HelpButton;
