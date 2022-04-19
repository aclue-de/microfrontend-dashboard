"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const icons_material_1 = require("@mui/icons-material");
const material_1 = require("@mui/material");
const KeyFigureContainer = (0, material_1.styled)(material_1.Paper)({
    display: 'flex',
    flexDirection: 'column',
    minHeight: 160,
    minWidth: 160,
    width: 'inherit',
    padding: '24px 0 10px 24px',
});
const Title = (0, material_1.styled)(material_1.Typography)({
    color: '#222',
});
const Value = (0, material_1.styled)(material_1.Typography)({
    fontSize: '36px',
    color: '#000',
    lineBreak: 'anywhere',
});
const Trend = (0, material_1.styled)(material_1.Box)({
    marginTop: 'auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
});
const TrendUp = (0, material_1.styled)(icons_material_1.TrendingUp)(({ theme }) => ({
    color: theme.palette.success.main,
}));
const TrendDown = (0, material_1.styled)(icons_material_1.TrendingDown)(({ theme }) => ({
    color: theme.palette.error.main,
}));
const KeyFigures = () => {
    return ((0, jsx_runtime_1.jsxs)(material_1.Grid, { container: true, spacing: 1, sx: { mb: 0.5 }, children: [(0, jsx_runtime_1.jsx)(material_1.Grid, { item: true, xs: 12, sm: 6, md: 3, lg: 3, children: (0, jsx_runtime_1.jsxs)(KeyFigureContainer, { variant: "elevation", elevation: 3, children: [(0, jsx_runtime_1.jsx)(Title, { variant: "caption", children: "Ansprache" }), (0, jsx_runtime_1.jsx)(Value, { children: "\u20AC100.000,000" }), (0, jsx_runtime_1.jsxs)(Trend, { children: [(0, jsx_runtime_1.jsx)(TrendUp, {}), "\u00A0", (0, jsx_runtime_1.jsx)(material_1.Typography, { sx: { color: theme => theme.palette.success.main, fontWeight: 'bold' }, variant: "caption", children: "+15%" }), "\u00A0", (0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "caption", children: "zum Vortag" })] })] }) }), (0, jsx_runtime_1.jsx)(material_1.Grid, { item: true, xs: 12, sm: 6, md: 3, lg: 3, children: (0, jsx_runtime_1.jsxs)(KeyFigureContainer, { variant: "elevation", elevation: 3, children: [(0, jsx_runtime_1.jsx)(Title, { variant: "caption", children: "Stornoquote" }), (0, jsx_runtime_1.jsx)(Value, { children: "5,00%" }), (0, jsx_runtime_1.jsxs)(Trend, { children: [(0, jsx_runtime_1.jsx)(TrendDown, {}), "\u00A0", (0, jsx_runtime_1.jsx)(material_1.Typography, { sx: { color: theme => theme.palette.error.main, fontWeight: 'bold' }, variant: "caption", children: "-2%" }), "\u00A0", (0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "caption", children: "zum Vortag" })] })] }) }), (0, jsx_runtime_1.jsx)(material_1.Grid, { item: true, xs: 12, sm: 6, md: 3, lg: 3, children: (0, jsx_runtime_1.jsxs)(KeyFigureContainer, { variant: "elevation", elevation: 3, children: [(0, jsx_runtime_1.jsx)(Title, { variant: "caption", children: "Absatz" }), (0, jsx_runtime_1.jsx)(Value, { children: "15,000" }), (0, jsx_runtime_1.jsxs)(Trend, { children: [(0, jsx_runtime_1.jsx)(TrendDown, {}), "\u00A0", (0, jsx_runtime_1.jsx)(material_1.Typography, { sx: { color: theme => theme.palette.error.main, fontWeight: 'bold' }, variant: "caption", children: "-10%" }), "\u00A0", (0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "caption", children: "zum Vortag" })] })] }) }), (0, jsx_runtime_1.jsx)(material_1.Grid, { item: true, xs: 12, sm: 6, md: 3, lg: 3, children: (0, jsx_runtime_1.jsxs)(KeyFigureContainer, { variant: "elevation", elevation: 3, children: [(0, jsx_runtime_1.jsx)(Title, { variant: "caption", children: "Retourenquote" }), (0, jsx_runtime_1.jsx)(Value, { children: "3,0%" }), (0, jsx_runtime_1.jsxs)(Trend, { children: [(0, jsx_runtime_1.jsx)(icons_material_1.TrendingFlat, {}), "\u00A0", (0, jsx_runtime_1.jsx)(material_1.Typography, { sx: { fontWeight: 'bold' }, variant: "caption", children: "0%" }), "\u00A0", (0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "caption", children: "zum Vortag" })] })] }) })] }));
};
exports.default = KeyFigures;
