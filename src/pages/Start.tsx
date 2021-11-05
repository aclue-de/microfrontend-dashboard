import React from 'react'
import { createStyles, Grid, makeStyles, Theme, ThemeProvider, Typography } from '@material-ui/core'
import { Adbox, HelpButton, KeyFigures, Newsbox } from '../components'
import { theme } from '../theme/theme'

const useStartStyles = makeStyles((theme: Theme) =>
    createStyles({
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
    }),
)

export const Start: React.FC = () => {
    const classes = useStartStyles()

    return (
        <ThemeProvider theme={theme}>
                <div className={classes.root}>
                    <div className={classes.headerContainer}>
                        <Typography variant="h1" className={classes.title}>
                            Übersicht
                        </Typography>
                        <HelpButton className={classes.helpButton} />
                    </div>
                    <KeyFigures />
                    <Grid spacing={1} container>
                        <Grid item xs={12} sm={6} md={9} lg={9}>
                            <Newsbox />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} lg={3}>
                            <Adbox />
                        </Grid>
                    </Grid>
                </div>
        </ThemeProvider>
    )
}
