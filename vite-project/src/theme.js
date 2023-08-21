import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#3f51b5',
        },
        secondary: {
            main: '#f50057',
        },
        background: {
            default: '#f8c9c3',
            paper: '#99b3fc',
        },
        text: {
            primary: '#f5f5f5',
        },
    },
    typography: {
        fontFamily: 'Roboto',
    },
});

export default theme;
