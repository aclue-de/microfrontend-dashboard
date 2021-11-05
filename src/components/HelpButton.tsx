import { IconButton, IconButtonProps } from '@material-ui/core'
import { HelpOutlineOutlined } from '@material-ui/icons'

export const HelpButton: React.FC<IconButtonProps> = props => {
    return (
        <IconButton {...props} size="medium">
            <HelpOutlineOutlined />
        </IconButton>
    )
}
