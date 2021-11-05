import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createStyles, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import { TrendingDown, TrendingFlat, TrendingUp } from '@material-ui/icons';
const useKeyFiguresStyles = makeStyles((theme) => createStyles({
    keyFiguresContainer: {
        marginBottom: 4,
    },
    keyFigureContainer: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: 160,
        minWidth: 160,
        width: 'inherit',
        padding: '24px 0 10px 24px',
    },
    title: {
        color: '#222',
    },
    value: {
        fontSize: '36px',
        color: '#000',
        lineBreak: 'anywhere',
    },
    trend: {
        marginTop: 'auto',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    trendUp: {
        color: theme.palette.success.main,
    },
    trendDown: {
        color: theme.palette.error.main,
    },
    bold: {
        fontWeight: 'bold',
    },
}));
export const KeyFigures = () => {
    const classes = useKeyFiguresStyles();
    return (_jsxs(Grid, Object.assign({ container: true, spacing: 1, className: classes.keyFiguresContainer }, { children: [_jsx(Grid, Object.assign({ item: true, xs: 12, sm: 6, md: 3, lg: 3 }, { children: _jsxs(Paper, Object.assign({ variant: "elevation", elevation: 3, className: classes.keyFigureContainer }, { children: [_jsx(Typography, Object.assign({ variant: "caption", className: classes.title }, { children: "Ansprache" }), void 0), _jsx(Typography, Object.assign({ className: classes.value }, { children: "\u20AC100.000,000" }), void 0), _jsxs("div", Object.assign({ className: classes.trend }, { children: [_jsx(TrendingUp, { className: classes.trendUp }, void 0), "\u00A0", _jsx(Typography, Object.assign({ className: `${classes.trendUp} ${classes.bold}`, variant: "caption" }, { children: "+15%" }), void 0), "\u00A0", _jsx(Typography, Object.assign({ variant: "caption" }, { children: "zum Vortag" }), void 0)] }), void 0)] }), void 0) }), void 0), _jsx(Grid, Object.assign({ item: true, xs: 12, sm: 6, md: 3, lg: 3 }, { children: _jsxs(Paper, Object.assign({ variant: "elevation", elevation: 3, className: classes.keyFigureContainer }, { children: [_jsx(Typography, Object.assign({ variant: "caption", className: classes.title }, { children: "Stornoquote" }), void 0), _jsx(Typography, Object.assign({ className: classes.value }, { children: "5,00%" }), void 0), _jsxs("div", Object.assign({ className: classes.trend }, { children: [_jsx(TrendingDown, { className: classes.trendDown }, void 0), "\u00A0", _jsx(Typography, Object.assign({ className: `${classes.trendDown} ${classes.bold}`, variant: "caption" }, { children: "-2%" }), void 0), "\u00A0", _jsx(Typography, Object.assign({ variant: "caption" }, { children: "zum Vortag" }), void 0)] }), void 0)] }), void 0) }), void 0), _jsx(Grid, Object.assign({ item: true, xs: 12, sm: 6, md: 3, lg: 3 }, { children: _jsxs(Paper, Object.assign({ variant: "elevation", elevation: 3, className: classes.keyFigureContainer }, { children: [_jsx(Typography, Object.assign({ variant: "caption", className: classes.title }, { children: "Absatz" }), void 0), _jsx(Typography, Object.assign({ className: classes.value }, { children: "15,000" }), void 0), _jsxs("div", Object.assign({ className: classes.trend }, { children: [_jsx(TrendingDown, { className: classes.trendDown }, void 0), "\u00A0", _jsx(Typography, Object.assign({ className: `${classes.trendDown} ${classes.bold}`, variant: "caption" }, { children: "-10%" }), void 0), "\u00A0", _jsx(Typography, Object.assign({ variant: "caption" }, { children: "zum Vortag" }), void 0)] }), void 0)] }), void 0) }), void 0), _jsx(Grid, Object.assign({ item: true, xs: 12, sm: 6, md: 3, lg: 3 }, { children: _jsxs(Paper, Object.assign({ variant: "elevation", elevation: 3, className: classes.keyFigureContainer }, { children: [_jsx(Typography, Object.assign({ variant: "caption", className: classes.title }, { children: "Retourenquote" }), void 0), _jsx(Typography, Object.assign({ className: classes.value }, { children: "3,0%" }), void 0), _jsxs("div", Object.assign({ className: classes.trend }, { children: [_jsx(TrendingFlat, {}, void 0), "\u00A0", _jsx(Typography, Object.assign({ variant: "caption", className: classes.bold }, { children: "0%" }), void 0), "\u00A0", _jsx(Typography, Object.assign({ variant: "caption" }, { children: "zum Vortag" }), void 0)] }), void 0)] }), void 0) }), void 0)] }), void 0));
};
