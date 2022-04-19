import { createTheme, } from "@mui/material";

export const theme = createTheme({
    typography: {
        fontFamily: 'roboto',
        button: {
            textTransform: 'none',
        },
        h1: {
            fontSize: '1.5rem',
            fontWeight: 400,
            letterSpacing: '0em',
            lineHeight: 1.334,
        },
        h2: {
            fontSize: '1.25rem',
            fontWeight: 700,
            letterSpacing: '0.0075em',
            lineHeight: 1.6,
        },
        h3: {
            fontSize: '1rem',
            fontWeight: 700,
            letterSpacing: '0.00938em',
            lineHeight: 1.75,
        },
        h4: {
            fontSize: '0.875rem',
            fontWeight: 700,
            letterSpacing: '0.01071em',
            lineHeight: 1.43,
        },
        h5: {
            color: '#333',
            fontSize: '1rem',
            fontWeight: 700,
            letterSpacing: '0.00938em',
            lineHeight: 1.75,
            textTransform: 'uppercase',
        },
        htmlFontSize: 16,
    },
    components: {
        MuiButton: {
            defaultProps: {                
                size: 'small',
                variant: 'text',
            }
        },
        MuiIconButton: {
            defaultProps: {                
                size: 'small',
            }
        }
    }
})
