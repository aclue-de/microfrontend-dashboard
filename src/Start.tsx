import { Box, Grid, styled, ThemeProvider, Typography } from '@mui/material'
import createGenerateClassName from '@mui/styles/createGenerateClassName'
import StylesProvider from '@mui/styles/StylesProvider'
import React from 'react'
import { HelpButton, KeyFigures, Newsbox, Placement } from './components'
import { theme } from './theme/theme'

const StartContainer = styled(Box)({
    margin: 32,
})

const HeaderContainer = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    marginBottom: 16,
})

const Title = styled(Typography)({
    color: '#222',
})

const Start: React.FC = () => (
    <ThemeProvider theme={theme}>
        <StartContainer>
            <HeaderContainer>
                <Title variant="h1">
                    Übersicht
                </Title>
                <HelpButton />
            </HeaderContainer>
            <KeyFigures />
            <Grid spacing={1} container>
                <Grid item xs={12} sm={6} md={9} lg={9}>
                    <Newsbox />
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                    <Placement />
                </Grid>
            </Grid>
        </StartContainer>
    </ThemeProvider>
);

export default Start
