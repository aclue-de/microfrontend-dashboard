import { alpha, IconButton, IconButtonProps } from '@mui/material';
import withStyles from '@mui/styles/withStyles';
import { HelpOutlineOutlined } from '@mui/icons-material'

const StyledIconButton = withStyles(() => ({
    root: {
        '&:hover': {
            backgroundColor: alpha('#1976d2', 0.04),
            color: '#1976d2',
        },
    },
}))(IconButton)

export const HelpButton: React.FC<IconButtonProps> = props => {
    return (
        <StyledIconButton {...props} size="medium">
            <HelpOutlineOutlined />
        </StyledIconButton>
    )
}
