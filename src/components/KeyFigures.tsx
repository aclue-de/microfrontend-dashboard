import { Grid, Paper, Theme, Typography } from '@mui/material';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import { TrendingDown, TrendingFlat, TrendingUp } from '@mui/icons-material'

const useKeyFiguresStyles = makeStyles((theme: Theme) =>
    createStyles({
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
    }),
)

export const KeyFigures: React.FC = () => {
    const classes = useKeyFiguresStyles()

    return (
        <Grid container spacing={1} className={classes.keyFiguresContainer}>
            <Grid item xs={12} sm={6} md={3} lg={3}>
                <Paper variant="elevation" elevation={3} className={classes.keyFigureContainer}>
                    <Typography variant="caption" className={classes.title}>
                        Ansprache
                    </Typography>
                    <Typography className={classes.value}>€100.000,000</Typography>
                    <div className={classes.trend}>
                        <TrendingUp className={classes.trendUp} />
                        &nbsp;
                        <Typography className={`${classes.trendUp} ${classes.bold}`} variant="caption">
                            +15%
                        </Typography>
                        &nbsp;
                        <Typography variant="caption">zum Vortag</Typography>
                    </div>
                </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={3} lg={3}>
                <Paper variant="elevation" elevation={3} className={classes.keyFigureContainer}>
                    <Typography variant="caption" className={classes.title}>
                        Stornoquote
                    </Typography>
                    <Typography className={classes.value}>5,00%</Typography>
                    <div className={classes.trend}>
                        <TrendingDown className={classes.trendDown} />
                        &nbsp;
                        <Typography className={`${classes.trendDown} ${classes.bold}`} variant="caption">
                            -2%
                        </Typography>
                        &nbsp;
                        <Typography variant="caption">zum Vortag</Typography>
                    </div>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
                <Paper variant="elevation" elevation={3} className={classes.keyFigureContainer}>
                    <Typography variant="caption" className={classes.title}>
                        Absatz
                    </Typography>
                    <Typography className={classes.value}>15,000</Typography>
                    <div className={classes.trend}>
                        <TrendingDown className={classes.trendDown} />
                        &nbsp;
                        <Typography className={`${classes.trendDown} ${classes.bold}`} variant="caption">
                            -10%
                        </Typography>
                        &nbsp;
                        <Typography variant="caption">zum Vortag</Typography>
                    </div>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
                <Paper variant="elevation" elevation={3} className={classes.keyFigureContainer}>
                    <Typography variant="caption" className={classes.title}>
                        Retourenquote
                    </Typography>
                    <Typography className={classes.value}>3,0%</Typography>
                    <div className={classes.trend}>
                        <TrendingFlat />
                        &nbsp;
                        <Typography variant="caption" className={classes.bold}>
                            0%
                        </Typography>
                        &nbsp;
                        <Typography variant="caption">zum Vortag</Typography>
                    </div>
                </Paper>
            </Grid>
        </Grid>
    )
}
