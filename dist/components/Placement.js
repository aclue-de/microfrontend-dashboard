"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const Paper_1 = __importDefault(require("@mui/material/Paper"));
const PlacementContainer = (0, material_1.styled)(Paper_1.default)({
    minHeight: 500,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#1976d2',
});
const InfoButton = (0, material_1.styled)(material_1.Button)({
    backgroundColor: '#fff',
    color: '#1976d2',
    margin: 'auto auto 16px',
    '&:hover': {
        backgroundColor: '#f6f6f6',
    },
});
const Placement = () => {
    return ((0, jsx_runtime_1.jsxs)(PlacementContainer, { children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "h1", sx: {
                    margin: '32px 16px 8px',
                    color: '#fff',
                }, children: "Hier k\u00F6nnte Ihre Werbung stehen!" }), (0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "body2", sx: {
                    margin: '0px 16px',
                    color: '#fff',
                    letterSpacing: '0.14px',
                }, children: "Nutzen Sie Sponsored Product Ads, um die Sichtbarkeit und den Abverkauf Ihrer Produkte zu verbessern." }), (0, jsx_runtime_1.jsx)(InfoButton, { variant: "contained", size: "medium", children: "Jetzt informieren" })] }));
};
exports.default = Placement;
