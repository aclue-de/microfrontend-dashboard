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
exports.Start = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var material_1 = require("@mui/material");
var createGenerateClassName_1 = __importDefault(require("@mui/styles/createGenerateClassName"));
var createStyles_1 = __importDefault(require("@mui/styles/createStyles"));
var makeStyles_1 = __importDefault(require("@mui/styles/makeStyles"));
var StylesProvider_1 = __importDefault(require("@mui/styles/StylesProvider"));
var components_1 = require("../components");
var theme_1 = require("../theme/theme");
var useStartStyles = (0, makeStyles_1.default)(function (theme) {
    return (0, createStyles_1.default)({
        root: {
            margin: 32,
        },
        headerContainer: {
            display: 'flex',
            alignItems: 'center',
            marginBottom: 16,
        },
        title: {
            color: '#222',
        },
        helpButton: {
            marginLeft: 'auto',
        },
    });
});
var generateClassName = (0, createGenerateClassName_1.default)({
    seed: 'startpage',
});
var Start = function () {
    var classes = useStartStyles();
    return ((0, jsx_runtime_1.jsx)(StylesProvider_1.default, __assign({ generateClassName: generateClassName }, { children: (0, jsx_runtime_1.jsx)(material_1.StyledEngineProvider, __assign({ injectFirst: true }, { children: (0, jsx_runtime_1.jsx)(material_1.ThemeProvider, __assign({ theme: theme_1.theme }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: classes.root }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: classes.headerContainer }, { children: [(0, jsx_runtime_1.jsx)(material_1.Typography, __assign({ variant: "h1", className: classes.title }, { children: "\u00DCbersicht" }), void 0), (0, jsx_runtime_1.jsx)(components_1.HelpButton, { className: classes.helpButton }, void 0)] }), void 0), (0, jsx_runtime_1.jsx)(components_1.KeyFigures, {}, void 0), (0, jsx_runtime_1.jsxs)(material_1.Grid, __assign({ spacing: 1, container: true }, { children: [(0, jsx_runtime_1.jsx)(material_1.Grid, __assign({ item: true, xs: 12, sm: 6, md: 9, lg: 9 }, { children: (0, jsx_runtime_1.jsx)(components_1.Newsbox, {}, void 0) }), void 0), (0, jsx_runtime_1.jsx)(material_1.Grid, __assign({ item: true, xs: 12, sm: 6, md: 3, lg: 3 }, { children: (0, jsx_runtime_1.jsx)(components_1.Adbox, {}, void 0) }), void 0)] }), void 0)] }), void 0) }), void 0) }), void 0) }), void 0));
};
exports.Start = Start;
