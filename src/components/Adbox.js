import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, createStyles, makeStyles, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
const useNewsboxStyles = makeStyles((theme) => createStyles({
    adboxContainer: {
        minHeight: 500,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#1976d2',
    },
    title: {
        margin: '32px 16px 8px',
        color: '#fff',
    },
    text: {
        margin: '0px 16px',
        color: '#fff',
        letterSpacing: '0.14px',
    },
    button: {
        backgroundColor: '#fff',
        color: '#1976d2',
        margin: 'auto auto 16px',
        '&:hover': {
            backgroundColor: '#f6f6f6',
        },
    },
}));
export const Adbox = () => {
    const classes = useNewsboxStyles();
    return (_jsxs(Paper, Object.assign({ variant: "elevation", elevation: 3, className: classes.adboxContainer }, { children: [_jsx(Typography, Object.assign({ variant: "h1", className: classes.title }, { children: "Hier k\u00F6nnte Ihre Werbung stehen!" }), void 0), _jsx(Typography, Object.assign({ variant: "body2", className: classes.text }, { children: "Nutzen Sie Sponsored Product Ads, um die Sichtbarkeit und den Abverkauf Ihrer Produkte zu verbessern." }), void 0), _jsx(Button, Object.assign({ variant: "contained", size: "medium", className: classes.button }, { children: "Jetzt informieren" }), void 0)] }), void 0));
};
