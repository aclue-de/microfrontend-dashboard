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
exports.Newsbox = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var material_1 = require("@mui/material");
var createStyles_1 = __importDefault(require("@mui/styles/createStyles"));
var makeStyles_1 = __importDefault(require("@mui/styles/makeStyles"));
var Paper_1 = __importDefault(require("@mui/material/Paper"));
var useNewsboxStyles = (0, makeStyles_1.default)(function (theme) {
    return (0, createStyles_1.default)({
        newsboxContainer: {
            minHeight: 500,
            height: '100%',
            minWidth: 280,
            display: 'flex',
            flexDirection: 'column',
        },
        title: {
            padding: '18px 24px',
            color: '#222',
        },
        titleDivider: {
            marginBottom: 8,
        },
        newsContainer: {
            margin: 24,
            display: 'flex',
        },
        newsAvatar: {
            height: 48,
            width: 48,
            backgroundColor: '#2196f3'
        },
        newsContent: {
            marginLeft: 24,
        },
        newsHeader: {
            color: '#222',
            marginBottom: 8,
        },
        newsBody: {
            color: '#222',
            marginBottom: 24,
        },
        newsCaptions: {
            letterSpacing: '0.4px',
        },
        newsDivider: {
            margin: '0 9px 0 24px',
        },
        loadMoreNewsButton: {
            margin: 'auto auto 24px',
            color: theme.palette.info.dark,
            '&:hover': {
                backgroundColor: (0, material_1.alpha)('#1976d2', 0.04),
            },
        },
    });
});
var Newsbox = function () {
    var classes = useNewsboxStyles();
    return ((0, jsx_runtime_1.jsxs)(Paper_1.default, __assign({ variant: "elevation", elevation: 3, className: classes.newsboxContainer }, { children: [(0, jsx_runtime_1.jsx)(material_1.Typography, __assign({ variant: "subtitle2", className: classes.title }, { children: "Neuigkeiten" }), void 0), (0, jsx_runtime_1.jsx)(material_1.Divider, { className: classes.titleDivider }, void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ className: classes.newsContainer }, { children: [(0, jsx_runtime_1.jsx)(material_1.Avatar, __assign({ className: classes.newsAvatar }, { children: "TR" }), void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ className: classes.newsContent }, { children: [(0, jsx_runtime_1.jsx)(material_1.Typography, __assign({ variant: "h3", className: classes.newsHeader }, { children: "Live Demo am 08.11.2021" }), void 0), (0, jsx_runtime_1.jsx)(material_1.Typography, __assign({ variant: "body2", className: classes.newsBody }, { children: "Am Montag den 08.11.2021 wird das Demo Portal vorgestellt - also jetzt!" }), void 0), (0, jsx_runtime_1.jsx)(material_1.Typography, __assign({ variant: "caption" }, { children: '15.09.2021  ∙  Vor 5 Minuten  ∙  Neu  ∙  Thomas Reinsch  ∙  Aclue GmbH' }), void 0)] }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)(material_1.Divider, { className: classes.newsDivider }, void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ className: classes.newsContainer }, { children: [(0, jsx_runtime_1.jsx)(material_1.Avatar, __assign({ className: classes.newsAvatar }, { children: "RM" }), void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ className: classes.newsContent }, { children: [(0, jsx_runtime_1.jsx)(material_1.Typography, __assign({ variant: "h3", className: classes.newsHeader }, { children: "Herzlich Willkommen im Portal!" }), void 0), (0, jsx_runtime_1.jsx)(material_1.Typography, __assign({ variant: "body2", className: classes.newsBody }, { children: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet." }), void 0), (0, jsx_runtime_1.jsx)(material_1.Typography, __assign({ variant: "caption" }, { children: '05.10.2021  ∙  15:15 Uhr  ∙  Wichtig  ∙  Robin Müller  ∙  Aclue GmbH' }), void 0)] }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)(material_1.Button, __assign({ variant: "text", className: classes.loadMoreNewsButton }, { children: "Weitere Neuigkeiten lesen" }), void 0)] }), void 0));
};
exports.Newsbox = Newsbox;
