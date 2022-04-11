import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Avatar, Button, Divider, Typography } from '@mui/material';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import Paper from '@mui/material/Paper';
const useNewsboxStyles = makeStyles((theme) => createStyles({
    newsboxContainer: {
        minHeight: 500,
        height: '100%',
        minWidth: 280,
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        padding: '18px 24px',
        color: '#222',
    },
    titleDivider: {
        marginBottom: 8,
    },
    newsContainer: {
        margin: 24,
        display: 'flex',
    },
    newsAvatar: {
        height: 48,
        width: 48,
        backgroundColor: '#2196f3'
    },
    newsContent: {
        marginLeft: 24,
    },
    newsHeader: {
        color: '#222',
        marginBottom: 8,
    },
    newsBody: {
        color: '#222',
        marginBottom: 24,
    },
    newsCaptions: {
        letterSpacing: '0.4px',
    },
    newsDivider: {
        margin: '0 9px 0 24px',
    },
    loadMoreNewsButton: {
        margin: 'auto auto 24px',
        color: theme.palette.info.dark,
    },
}));
export const Newsbox = () => {
    const classes = useNewsboxStyles();
    return (_jsxs(Paper, Object.assign({ variant: "elevation", elevation: 3, className: classes.newsboxContainer }, { children: [_jsx(Typography, Object.assign({ variant: "subtitle2", className: classes.title }, { children: "Neuigkeiten" }), void 0), _jsx(Divider, { className: classes.titleDivider }, void 0), _jsxs("div", Object.assign({ className: classes.newsContainer }, { children: [_jsx(Avatar, Object.assign({ className: classes.newsAvatar }, { children: "TR" }), void 0), _jsxs("div", Object.assign({ className: classes.newsContent }, { children: [_jsx(Typography, Object.assign({ variant: "h3", className: classes.newsHeader }, { children: "Live Demo am 08.11.2021" }), void 0), _jsx(Typography, Object.assign({ variant: "body2", className: classes.newsBody }, { children: "Am Montag den 08.11.2021 wird das Demo Portal vorgestellt - also jetzt!" }), void 0), _jsx(Typography, Object.assign({ variant: "caption" }, { children: '15.09.2021  ∙  Vor 5 Minuten  ∙  Neu  ∙  Thomas Reinsch  ∙  Aclue GmbH' }), void 0)] }), void 0)] }), void 0), _jsx(Divider, { className: classes.newsDivider }, void 0), _jsxs("div", Object.assign({ className: classes.newsContainer }, { children: [_jsx(Avatar, Object.assign({ className: classes.newsAvatar }, { children: "RM" }), void 0), _jsxs("div", Object.assign({ className: classes.newsContent }, { children: [_jsx(Typography, Object.assign({ variant: "h3", className: classes.newsHeader }, { children: "Herzlich Willkommen im Portal!" }), void 0), _jsx(Typography, Object.assign({ variant: "body2", className: classes.newsBody }, { children: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet." }), void 0), _jsx(Typography, Object.assign({ variant: "caption" }, { children: '05.10.2021  ∙  15:15 Uhr  ∙  Wichtig  ∙  Robin Müller  ∙  Aclue GmbH' }), void 0)] }), void 0)] }), void 0), _jsx(Button, Object.assign({ variant: "text", className: classes.loadMoreNewsButton }, { children: "Weitere Neuigkeiten lesen" }), void 0)] }), void 0));
};
