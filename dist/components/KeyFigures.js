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
exports.KeyFigures = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var material_1 = require("@mui/material");
var createStyles_1 = __importDefault(require("@mui/styles/createStyles"));
var makeStyles_1 = __importDefault(require("@mui/styles/makeStyles"));
var icons_material_1 = require("@mui/icons-material");
var useKeyFiguresStyles = (0, makeStyles_1.default)(function (theme) {
    return (0, createStyles_1.default)({
        keyFiguresContainer: {
            marginBottom: 4,
        },
        keyFigureContainer: {
            display: 'flex',
            flexDirection: 'column',
            minHeight: 160,
            minWidth: 160,
            width: 'inherit',
            padding: '24px 0 10px 24px',
        },
        title: {
            color: '#222',
        },
        value: {
            fontSize: '36px',
            color: '#000',
            lineBreak: 'anywhere',
        },
        trend: {
            marginTop: 'auto',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
        },
        trendUp: {
            color: theme.palette.success.main,
        },
        trendDown: {
            color: theme.palette.error.main,
        },
        bold: {
            fontWeight: 'bold',
        },
    });
});
var KeyFigures = function () {
    var classes = useKeyFiguresStyles();
    return ((0, jsx_runtime_1.jsxs)(material_1.Grid, __assign({ container: true, spacing: 1, className: classes.keyFiguresContainer }, { children: [(0, jsx_runtime_1.jsx)(material_1.Grid, __assign({ item: true, xs: 12, sm: 6, md: 3, lg: 3 }, { children: (0, jsx_runtime_1.jsxs)(material_1.Paper, __assign({ variant: "elevation", elevation: 3, className: classes.keyFigureContainer }, { children: [(0, jsx_runtime_1.jsx)(material_1.Typography, __assign({ variant: "caption", className: classes.title }, { children: "Ansprache" }), void 0), (0, jsx_runtime_1.jsx)(material_1.Typography, __assign({ className: classes.value }, { children: "\u20AC100.000,000" }), void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ className: classes.trend }, { children: [(0, jsx_runtime_1.jsx)(icons_material_1.TrendingUp, { className: classes.trendUp }, void 0), "\u00A0", (0, jsx_runtime_1.jsx)(material_1.Typography, __assign({ className: classes.trendUp + " " + classes.bold, variant: "caption" }, { children: "+15%" }), void 0), "\u00A0", (0, jsx_runtime_1.jsx)(material_1.Typography, __assign({ variant: "caption" }, { children: "zum Vortag" }), void 0)] }), void 0)] }), void 0) }), void 0), (0, jsx_runtime_1.jsx)(material_1.Grid, __assign({ item: true, xs: 12, sm: 6, md: 3, lg: 3 }, { children: (0, jsx_runtime_1.jsxs)(material_1.Paper, __assign({ variant: "elevation", elevation: 3, className: classes.keyFigureContainer }, { children: [(0, jsx_runtime_1.jsx)(material_1.Typography, __assign({ variant: "caption", className: classes.title }, { children: "Stornoquote" }), void 0), (0, jsx_runtime_1.jsx)(material_1.Typography, __assign({ className: classes.value }, { children: "5,00%" }), void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ className: classes.trend }, { children: [(0, jsx_runtime_1.jsx)(icons_material_1.TrendingDown, { className: classes.trendDown }, void 0), "\u00A0", (0, jsx_runtime_1.jsx)(material_1.Typography, __assign({ className: classes.trendDown + " " + classes.bold, variant: "caption" }, { children: "-2%" }), void 0), "\u00A0", (0, jsx_runtime_1.jsx)(material_1.Typography, __assign({ variant: "caption" }, { children: "zum Vortag" }), void 0)] }), void 0)] }), void 0) }), void 0), (0, jsx_runtime_1.jsx)(material_1.Grid, __assign({ item: true, xs: 12, sm: 6, md: 3, lg: 3 }, { children: (0, jsx_runtime_1.jsxs)(material_1.Paper, __assign({ variant: "elevation", elevation: 3, className: classes.keyFigureContainer }, { children: [(0, jsx_runtime_1.jsx)(material_1.Typography, __assign({ variant: "caption", className: classes.title }, { children: "Absatz" }), void 0), (0, jsx_runtime_1.jsx)(material_1.Typography, __assign({ className: classes.value }, { children: "15,000" }), void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ className: classes.trend }, { children: [(0, jsx_runtime_1.jsx)(icons_material_1.TrendingDown, { className: classes.trendDown }, void 0), "\u00A0", (0, jsx_runtime_1.jsx)(material_1.Typography, __assign({ className: classes.trendDown + " " + classes.bold, variant: "caption" }, { children: "-10%" }), void 0), "\u00A0", (0, jsx_runtime_1.jsx)(material_1.Typography, __assign({ variant: "caption" }, { children: "zum Vortag" }), void 0)] }), void 0)] }), void 0) }), void 0), (0, jsx_runtime_1.jsx)(material_1.Grid, __assign({ item: true, xs: 12, sm: 6, md: 3, lg: 3 }, { children: (0, jsx_runtime_1.jsxs)(material_1.Paper, __assign({ variant: "elevation", elevation: 3, className: classes.keyFigureContainer }, { children: [(0, jsx_runtime_1.jsx)(material_1.Typography, __assign({ variant: "caption", className: classes.title }, { children: "Retourenquote" }), void 0), (0, jsx_runtime_1.jsx)(material_1.Typography, __assign({ className: classes.value }, { children: "3,0%" }), void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ className: classes.trend }, { children: [(0, jsx_runtime_1.jsx)(icons_material_1.TrendingFlat, {}, void 0), "\u00A0", (0, jsx_runtime_1.jsx)(material_1.Typography, __assign({ variant: "caption", className: classes.bold }, { children: "0%" }), void 0), "\u00A0", (0, jsx_runtime_1.jsx)(material_1.Typography, __assign({ variant: "caption" }, { children: "zum Vortag" }), void 0)] }), void 0)] }), void 0) }), void 0)] }), void 0));
};
exports.KeyFigures = KeyFigures;
