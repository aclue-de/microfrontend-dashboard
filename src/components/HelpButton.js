import { jsx as _jsx } from "react/jsx-runtime";
import { IconButton } from '@material-ui/core';
import { HelpOutlineOutlined } from '@material-ui/icons';
export const HelpButton = props => {
    return (_jsx(IconButton, Object.assign({}, props, { size: "medium" }, { children: _jsx(HelpOutlineOutlined, {}, void 0) }), void 0));
};
