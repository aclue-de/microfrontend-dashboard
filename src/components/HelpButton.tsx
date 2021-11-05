import { alpha, IconButton, IconButtonProps, withStyles } from '@material-ui/core'
import { HelpOutlineOutlined } from '@material-ui/icons'

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
