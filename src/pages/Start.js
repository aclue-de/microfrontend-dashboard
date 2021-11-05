import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createStyles, Grid, makeStyles, ThemeProvider, Typography } from '@material-ui/core';
import { Adbox, HelpButton, KeyFigures, Newsbox } from '../components';
import { theme } from '../theme/theme';
const useStartStyles = makeStyles((theme) => createStyles({
    root: {
        margin: 32,
    },
    headerContainer: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 16,
    },
    title: {
        color: '#222',
    },
    helpButton: {
        marginLeft: 'auto',
    },
}));
export const Start = () => {
    const classes = useStartStyles();
    return (_jsx(ThemeProvider, Object.assign({ theme: theme }, { children: _jsxs("div", Object.assign({ className: classes.root }, { children: [_jsxs("div", Object.assign({ className: classes.headerContainer }, { children: [_jsx(Typography, Object.assign({ variant: "h1", className: classes.title }, { children: "\u00DCbersicht" }), void 0), _jsx(HelpButton, { className: classes.helpButton }, void 0)] }), void 0), _jsx(KeyFigures, {}, void 0), _jsxs(Grid, Object.assign({ spacing: 1, container: true }, { children: [_jsx(Grid, Object.assign({ item: true, xs: 12, sm: 6, md: 9, lg: 9 }, { children: _jsx(Newsbox, {}, void 0) }), void 0), _jsx(Grid, Object.assign({ item: true, xs: 12, sm: 6, md: 3, lg: 3 }, { children: _jsx(Adbox, {}, void 0) }), void 0)] }), void 0)] }), void 0) }), void 0));
};
