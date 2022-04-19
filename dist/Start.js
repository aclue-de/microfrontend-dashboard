"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const createGenerateClassName_1 = __importDefault(require("@mui/styles/createGenerateClassName"));
const StylesProvider_1 = __importDefault(require("@mui/styles/StylesProvider"));
const components_1 = require("./components");
const theme_1 = require("./theme/theme");
const StartContainer = (0, material_1.styled)(material_1.Box)({
    margin: 32,
});
const HeaderContainer = (0, material_1.styled)(material_1.Box)({
    display: 'flex',
    alignItems: 'center',
    marginBottom: 16,
});
const Title = (0, material_1.styled)(material_1.Typography)({
    color: '#222',
});
const generateClassName = (0, createGenerateClassName_1.default)({
    productionPrefix: 'startpage',
    seed: 'startpage',
});
const Start = () => ((0, jsx_runtime_1.jsx)(StylesProvider_1.default, { generateClassName: generateClassName, children: (0, jsx_runtime_1.jsx)(material_1.ThemeProvider, { theme: theme_1.theme, children: (0, jsx_runtime_1.jsxs)(StartContainer, { children: [(0, jsx_runtime_1.jsxs)(HeaderContainer, { children: [(0, jsx_runtime_1.jsx)(Title, { variant: "h1", children: "\u00DCbersicht" }), (0, jsx_runtime_1.jsx)(components_1.HelpButton, {})] }), (0, jsx_runtime_1.jsx)(components_1.KeyFigures, {}), (0, jsx_runtime_1.jsxs)(material_1.Grid, { spacing: 1, container: true, children: [(0, jsx_runtime_1.jsx)(material_1.Grid, { item: true, xs: 12, sm: 6, md: 9, lg: 9, children: (0, jsx_runtime_1.jsx)(components_1.Newsbox, {}) }), (0, jsx_runtime_1.jsx)(material_1.Grid, { item: true, xs: 12, sm: 6, md: 3, lg: 3, children: (0, jsx_runtime_1.jsx)(components_1.Placement, {}) })] })] }) }) }));
exports.default = Start;
