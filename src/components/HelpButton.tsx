import { IconButton, IconButtonProps } from '@mui/material'
import { HelpOutlineOutlined } from '@mui/icons-material'

export const HelpButton: React.FC<IconButtonProps> = props => {
    return (
        <IconButton {...props} size="medium">
            <HelpOutlineOutlined />
        </IconButton>
    )
}
