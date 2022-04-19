"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const Paper_1 = __importDefault(require("@mui/material/Paper"));
const NewsboxContainer = (0, material_1.styled)(Paper_1.default)({
    minHeight: 500,
    height: '100%',
    minWidth: 280,
    display: 'flex',
    flexDirection: 'column',
});
const NewsContainer = (0, material_1.styled)(material_1.Box)({
    margin: 24,
    display: 'flex',
});
const NewsAvatar = (0, material_1.styled)(material_1.Avatar)({
    height: 48,
    width: 48,
    backgroundColor: '#2196f3',
});
const NewsContent = (0, material_1.styled)(material_1.Box)({
    marginLeft: 24,
});
const NewsHeader = (0, material_1.styled)(material_1.Typography)({
    color: '#222',
    marginBottom: 8,
});
const NewsBody = (0, material_1.styled)(material_1.Typography)({
    color: '#222',
    marginBottom: 24,
});
const NewsCaptions = (0, material_1.styled)(material_1.Typography)({
    letterSpacing: '0.4px',
});
const Newsbox = () => {
    return ((0, jsx_runtime_1.jsxs)(NewsboxContainer, { variant: "elevation", elevation: 3, children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "subtitle2", sx: {
                    p: '18px 24px',
                    color: '#222',
                }, children: "Neuigkeiten" }), (0, jsx_runtime_1.jsx)(material_1.Divider, { sx: { mb: 1 } }), (0, jsx_runtime_1.jsxs)(NewsContainer, { children: [(0, jsx_runtime_1.jsx)(NewsAvatar, { children: "JN" }), (0, jsx_runtime_1.jsxs)(NewsContent, { children: [(0, jsx_runtime_1.jsx)(NewsHeader, { variant: "h3", children: "Live Demo am 02.05.2022" }), (0, jsx_runtime_1.jsx)(NewsBody, { variant: "body2", children: "Am Montag den 02.05.2022 wird das Demo Portal vorgestellt - also jetzt!" }), (0, jsx_runtime_1.jsx)(NewsCaptions, { variant: "caption", children: '02.05.2022  ∙  Vor 5 Minuten  ∙  Neu  ∙  Jörg Neumann  ∙  Aclue GmbH' })] })] }), (0, jsx_runtime_1.jsx)(material_1.Divider, { sx: { m: '0 9px 0 24px' } }), (0, jsx_runtime_1.jsxs)(NewsContainer, { children: [(0, jsx_runtime_1.jsx)(NewsAvatar, { children: "RM" }), (0, jsx_runtime_1.jsxs)(NewsContent, { children: [(0, jsx_runtime_1.jsx)(NewsHeader, { variant: "h3", children: "Herzlich Willkommen im Portal!" }), (0, jsx_runtime_1.jsx)(NewsBody, { variant: "body2", children: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet." }), (0, jsx_runtime_1.jsx)(NewsCaptions, { variant: "caption", children: '01.01.2022  ∙  15:15 Uhr  ∙  Wichtig  ∙  Robin Müller  ∙  Aclue GmbH' })] })] }), (0, jsx_runtime_1.jsx)(material_1.Button, { variant: "text", sx: {
                    m: 'auto auto 24px',
                    color: theme => theme.palette.info.dark,
                    '&:hover': {
                        backgroundColor: (0, material_1.alpha)('#1976d2', 0.04),
                    },
                }, children: "Weitere Neuigkeiten lesen" })] }));
};
exports.default = Newsbox;
