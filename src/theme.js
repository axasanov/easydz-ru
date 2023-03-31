import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1E88E5',
        },
        secondary: {
            main: '#1565C0',
        },
        text: {
            primary: '#424242',
            secondary: '#757575',
        },
        background: {
            default: '#FFFFFF',
            paper: '#F5F5F5',
        },
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
        h1: {
            fontWeight: 700,
            fontSize: '3.5rem',
            lineHeight: 1.2,
        },
        h2: {
            fontWeight: 600,
            fontSize: '2.5rem',
            lineHeight: 1.2,
        },
        h3: {
            fontWeight: 500,
            fontSize: '2rem',
            lineHeight: 1.2,
        },
        h4: {
            fontWeight: 500,
            fontSize: '1.5rem',
            lineHeight: 1.2,
        },
        h5: {
            fontWeight: 500,
            fontSize: '1.25rem',
            lineHeight: 1.2,
        },
        h6: {
            fontWeight: 500,
            fontSize: '1rem',
            lineHeight: 1.2,
        },
        subtitle1: {
            fontWeight: 500,
            fontSize: '1.25rem',
            lineHeight: 1.2,
        },
        subtitle2: {
            fontWeight: 500,
            fontSize: '1rem',
            lineHeight: 1.2,
        },
        body1: {
            fontWeight: 400,
            fontSize: '1rem',
            lineHeight: 1.5,
        },
        body2: {
            fontWeight: 400,
            fontSize: '0.875rem',
            lineHeight: 1.5,
        },
        button: {
            fontWeight: 500,
            fontSize: '1rem',
            lineHeight: 1.5,
            textTransform: 'none',
        },
        caption: {
            fontWeight: 400,
            fontSize: '0.75rem',
            lineHeight: 1.2,
        },
        overline: {
            fontWeight: 500,
            fontSize: '0.75rem',
            lineHeight: 1.2,
            textTransform: 'uppercase',
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        borderRadius: '50px', // или любое другое значение, которое вам нравится
                    },
                },
            },
        },
    },
});

export default theme;
