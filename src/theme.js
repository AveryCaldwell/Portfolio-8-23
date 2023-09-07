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
		color: 'white',
	},
	h3: {
		color: 'white',
		fontSize: '25px',
	},

	'@global': {
		'*::-webkit-scrollbar': {
			width: '0.4em',
		},
		'*::-webkit-scrollbar-track': {
			'-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
		},
		'*::-webkit-scrollbar-thumb': {
			backgroundColor: 'rgba(0,0,0,.1)',
			outline: '1px solid slategrey',
		},
	},
});

export default theme;
