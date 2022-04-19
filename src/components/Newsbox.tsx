import { alpha, Avatar, Box, Button, Divider, styled, Typography } from '@mui/material'
import Paper from '@mui/material/Paper'

const NewsboxContainer = styled(Paper)({
    minHeight: 500,
    height: '100%',
    minWidth: 280,
    display: 'flex',
    flexDirection: 'column',
})

const NewsContainer = styled(Box)({
    margin: 24, 
    display: 'flex',
})

const NewsAvatar = styled(Avatar)({
    height: 48,
    width: 48,
    backgroundColor: '#2196f3',
})

const NewsContent = styled(Box)({
    marginLeft: 24,
})

const NewsHeader = styled(Typography)({
    color: '#222',
    marginBottom: 8,
})

const NewsBody = styled(Typography)({
    color: '#222',
    marginBottom: 24,
})

const NewsCaptions = styled(Typography)({
    letterSpacing: '0.4px',
})

const Newsbox: React.FC = () => {
    return (
        <NewsboxContainer variant="elevation" elevation={3}>
            <Typography variant="subtitle2" sx={{
                p: '18px 24px',
                color: '#222',
            }}>
                Neuigkeiten
            </Typography>
            <Divider sx={{ mb: 1 }} />
            <NewsContainer>
                <NewsAvatar>JN</NewsAvatar>
                <NewsContent>
                    <NewsHeader variant="h3">
                        Live Demo am 02.05.2022
                    </NewsHeader>
                    <NewsBody variant="body2">
                        Am Montag den 02.05.2022 wird das Demo Portal vorgestellt - also jetzt!
                    </NewsBody>
                    <NewsCaptions variant="caption">
                        {'02.05.2022  ∙  Vor 5 Minuten  ∙  Neu  ∙  Jörg Neumann  ∙  Aclue GmbH'}
                    </NewsCaptions>
                </NewsContent>
            </NewsContainer>
            <Divider sx={{ m: '0 9px 0 24px' }} />
            <NewsContainer>
                <NewsAvatar>RM</NewsAvatar>
                <NewsContent>
                    <NewsHeader variant="h3">
                        Herzlich Willkommen im Portal!
                    </NewsHeader>
                    <NewsBody variant="body2">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
                        sit amet.
                    </NewsBody>
                    <NewsCaptions variant="caption">
                        {'01.01.2022  ∙  15:15 Uhr  ∙  Wichtig  ∙  Robin Müller  ∙  Aclue GmbH'}
                    </NewsCaptions>
                </NewsContent>
            </NewsContainer>
            <Button variant="text" sx={{
                m: 'auto auto 24px',
                color: theme => theme.palette.info.dark,
                '&:hover': {
                    backgroundColor: alpha('#1976d2', 0.04),
                },
            }}>
                Weitere Neuigkeiten lesen
            </Button>
        </NewsboxContainer>
    )
}

export default Newsbox
