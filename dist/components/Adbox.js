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
exports.Adbox = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var material_1 = require("@mui/material");
var createStyles_1 = __importDefault(require("@mui/styles/createStyles"));
var makeStyles_1 = __importDefault(require("@mui/styles/makeStyles"));
var Paper_1 = __importDefault(require("@mui/material/Paper"));
var useNewsboxStyles = (0, makeStyles_1.default)(function (theme) {
    return (0, createStyles_1.default)({
        adboxContainer: {
            minHeight: 500,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#1976d2',
        },
        title: {
            margin: '32px 16px 8px',
            color: '#fff',
        },
        text: {
            margin: '0px 16px',
            color: '#fff',
            letterSpacing: '0.14px',
        },
        button: {
            backgroundColor: '#fff',
            color: '#1976d2',
            margin: 'auto auto 16px',
            '&:hover': {
                backgroundColor: '#f6f6f6',
            },
        },
    });
});
var Adbox = function () {
    var classes = useNewsboxStyles();
    return ((0, jsx_runtime_1.jsxs)(Paper_1.default, __assign({ variant: "elevation", elevation: 3, className: classes.adboxContainer }, { children: [(0, jsx_runtime_1.jsx)(material_1.Typography, __assign({ variant: "h1", className: classes.title }, { children: "Hier k\u00F6nnte Ihre Werbung stehen!" }), void 0), (0, jsx_runtime_1.jsx)(material_1.Typography, __assign({ variant: "body2", className: classes.text }, { children: "Nutzen Sie Sponsored Product Ads, um die Sichtbarkeit und den Abverkauf Ihrer Produkte zu verbessern." }), void 0), (0, jsx_runtime_1.jsx)(material_1.Button, __assign({ variant: "contained", size: "medium", className: classes.button }, { children: "Jetzt informieren" }), void 0)] }), void 0));
};
exports.Adbox = Adbox;
