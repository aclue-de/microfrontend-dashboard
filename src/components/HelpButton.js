import { jsx as _jsx } from "react/jsx-runtime";
import { IconButton } from '@mui/material';
import { HelpOutlineOutlined } from '@mui/icons-material';
export const HelpButton = props => {
    return (_jsx(IconButton, Object.assign({}, props, { size: "medium" }, { children: _jsx(HelpOutlineOutlined, {}, void 0) }), void 0));
};
