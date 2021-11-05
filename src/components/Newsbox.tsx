import { alpha, Avatar, Button, createStyles, Divider, makeStyles, Theme, Typography } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'

const useNewsboxStyles = makeStyles((theme: Theme) =>
    createStyles({
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
            '&:hover': {
                backgroundColor: alpha('#1976d2', 0.04),
            },
        },
    }),
)

export const Newsbox: React.FC = () => {
    const classes = useNewsboxStyles()

    return (
        <Paper variant="elevation" elevation={3} className={classes.newsboxContainer}>
            <Typography variant="subtitle2" className={classes.title}>
                Neuigkeiten
            </Typography>
            <Divider className={classes.titleDivider} />
            <div className={classes.newsContainer}>
                <Avatar className={classes.newsAvatar}>TR</Avatar>
                <div className={classes.newsContent}>
                    <Typography variant="h3" className={classes.newsHeader}>
                        Live Demo am 08.11.2021
                    </Typography>
                    <Typography variant="body2" className={classes.newsBody}>
                        Am Montag den 08.11.2021 wird das Demo Portal vorgestellt - also jetzt!
                    </Typography>
                    <Typography variant="caption">
                        {'15.09.2021  ∙  Vor 5 Minuten  ∙  Neu  ∙  Thomas Reinsch  ∙  Aclue GmbH'}
                    </Typography>
                </div>
            </div>
            <Divider className={classes.newsDivider} />
            <div className={classes.newsContainer}>
                <Avatar className={classes.newsAvatar}>RM</Avatar>
                <div className={classes.newsContent}>
                    <Typography variant="h3" className={classes.newsHeader}>
                        Herzlich Willkommen im Portal!
                    </Typography>
                    <Typography variant="body2" className={classes.newsBody}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
                        sit amet.
                    </Typography>
                    <Typography variant="caption">
                        {'05.10.2021  ∙  15:15 Uhr  ∙  Wichtig  ∙  Robin Müller  ∙  Aclue GmbH'}
                    </Typography>
                </div>
            </div>
            <Button variant="text" className={classes.loadMoreNewsButton}>
                Weitere Neuigkeiten lesen
            </Button>
        </Paper>
    )
}
