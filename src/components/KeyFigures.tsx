import { TrendingDown, TrendingFlat, TrendingUp } from '@mui/icons-material'
import { Box, Grid, Paper, styled, Typography } from '@mui/material'

const KeyFigureContainer = styled(Paper)({
    display: 'flex',
    flexDirection: 'column',
    minHeight: 160,
    minWidth: 160,
    width: 'inherit',
    padding: '24px 0 10px 24px',
})

const Title = styled(Typography)({
    color: '#222',
})

const Value = styled(Typography)({    
    fontSize: '36px',
    color: '#000',
    lineBreak: 'anywhere',
})

const Trend = styled(Box)({
    marginTop: 'auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
})

const TrendUp = styled(TrendingUp)(({ theme }) => ({
    color: theme.palette.success.main,
}))

const TrendDown = styled(TrendingDown)(({ theme }) => ({
    color: theme.palette.error.main,
}))

const KeyFigures: React.FC = () => {
    return (
        <Grid container spacing={1} sx={{ mb: 0.5 }}>
            <Grid item xs={12} sm={6} md={3} lg={3}>
                <KeyFigureContainer variant="elevation" elevation={3}>
                    <Title variant="caption">
                        Ansprache
                    </Title>
                    <Value>€100.000,000</Value>
                    <Trend>
                        <TrendUp />
                        &nbsp;
                        <Typography sx={{ color: theme => theme.palette.success.main, fontWeight: 'bold' }} variant="caption">
                            +15%
                        </Typography>
                        &nbsp;
                        <Typography variant="caption">zum Vortag</Typography>
                    </Trend>
                </KeyFigureContainer>
            </Grid>

            <Grid item xs={12} sm={6} md={3} lg={3}>
                <KeyFigureContainer variant="elevation" elevation={3}>
                    <Title variant="caption">
                        Stornoquote
                    </Title>
                    <Value>5,00%</Value>
                    <Trend>
                        <TrendDown />
                        &nbsp;
                        <Typography  sx={{ color: theme => theme.palette.error.main, fontWeight: 'bold' }} variant="caption">
                            -2%
                        </Typography>
                        &nbsp;
                        <Typography variant="caption">zum Vortag</Typography>
                    </Trend>
                </KeyFigureContainer>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
                <KeyFigureContainer variant="elevation" elevation={3}>
                    <Title variant="caption">
                        Absatz
                    </Title>
                    <Value>15,000</Value>
                    <Trend>
                        <TrendDown />
                        &nbsp;
                        <Typography sx={{ color: theme => theme.palette.error.main, fontWeight: 'bold' }} variant="caption">
                            -10%
                        </Typography>
                        &nbsp;
                        <Typography variant="caption">zum Vortag</Typography>
                    </Trend>
                </KeyFigureContainer>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
                <KeyFigureContainer variant="elevation" elevation={3}>
                    <Title variant="caption">
                        Retourenquote
                    </Title>
                    <Value>3,0%</Value>
                    <Trend>
                        <TrendingFlat />
                        &nbsp;
                        <Typography sx={{ fontWeight: 'bold' }} variant="caption">
                            0%
                        </Typography>
                        &nbsp;
                        <Typography variant="caption">zum Vortag</Typography>
                    </Trend>
                </KeyFigureContainer>
            </Grid>
        </Grid>
    )
}

export default KeyFigures
