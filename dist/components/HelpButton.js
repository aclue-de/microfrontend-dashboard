"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const icons_material_1 = require("@mui/icons-material");
const material_1 = require("@mui/material");
const StyledIconButton = (0, material_1.styled)(material_1.IconButton)({
    marginLeft: 'auto',
    '&:hover': {
        backgroundColor: (0, material_1.alpha)('#1976d2', 0.04),
        color: '#1976d2',
    },
});
const HelpButton = props => {
    return ((0, jsx_runtime_1.jsx)(StyledIconButton, { ...props, size: "medium", children: (0, jsx_runtime_1.jsx)(icons_material_1.HelpOutlineOutlined, {}) }));
};
exports.default = HelpButton;
