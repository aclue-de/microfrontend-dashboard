import { Button, styled, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';

const PlacementContainer = styled(Paper)({    
    minHeight: 500,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#1976d2',
})

const InfoButton = styled(Button)({
    backgroundColor: '#fff',
    color: '#1976d2',
    margin: 'auto auto 16px',
    '&:hover': {
        backgroundColor: '#f6f6f6',
    },
})

const Placement: React.FC = () => {
    return (
        <PlacementContainer>
            <Typography variant="h1" sx={{
                margin: '32px 16px 8px',
                color: '#fff',
            }}>
                Hier könnte Ihre Werbung stehen!
            </Typography>
            <Typography variant="body2" sx={{
                margin: '0px 16px',
                color: '#fff',
                letterSpacing: '0.14px',
            }}>
                Nutzen Sie Sponsored Product Ads, um die Sichtbarkeit und den Abverkauf Ihrer Produkte zu verbessern.
            </Typography>
            <InfoButton variant="contained" size="medium">
                Jetzt informieren
            </InfoButton>
        </PlacementContainer>
    )
}

export default Placement
