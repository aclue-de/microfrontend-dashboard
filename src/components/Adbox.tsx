import { Button, createStyles, makeStyles, Theme, Typography } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'

const useNewsboxStyles = makeStyles((theme: Theme) =>
    createStyles({
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
    }),
)

export const Adbox: React.FC = () => {
    const classes = useNewsboxStyles()

    return (
        <Paper variant="elevation" elevation={3} className={classes.adboxContainer}>
            <Typography variant="h1" className={classes.title}>
                Hier könnte Ihre Werbung stehen!
            </Typography>
            <Typography variant="body2" className={classes.text}>
                Nutzen Sie Sponsored Product Ads, um die Sichtbarkeit und den Abverkauf Ihrer Produkte zu verbessern.
            </Typography>
            <Button variant="contained" size="medium" className={classes.button}>
                Jetzt informieren
            </Button>
        </Paper>
    )
}
