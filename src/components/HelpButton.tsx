import { HelpOutlineOutlined } from '@mui/icons-material'
import { alpha, IconButton, IconButtonProps, styled } from '@mui/material'

const StyledIconButton = styled(IconButton)({
    marginLeft: 'auto',
    '&:hover': {
        backgroundColor: alpha('#1976d2', 0.04),
        color: '#1976d2',
    },
})

const HelpButton: React.FC<IconButtonProps> = props => {
    return (
        <StyledIconButton {...props} size="medium">
            <HelpOutlineOutlined />
        </StyledIconButton>
    )
}

export default HelpButton
