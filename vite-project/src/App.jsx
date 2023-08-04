import React from 'react';
// MUI
import theme from './theme';
import { ThemeProvider } from '@emotion/react';
import * as Material from '@mui/material';
//Components
import Nav from './components/Nav';
import Landing from './components/Landing';

// This function renders main content of web app
function App() {
    // The "useState" hook is used to declare a state variable called "currentPage" which is initially set to "About".
    const [currentPage, setCurrentPage] = React.useState('Landing');
    //array of pages
    const pages = [
        'Landing',
        'About',
        'Edu',
        'Projects',
        'Resume',
        'References',
        'Contact',
    ];
    // state
    let pageIndexObj = {
        Landing: 0,
        About: 1,
        Edu: 2,
        Projects: 3,
        Resume: 4,
        References: 5,
        Contact: 6,
    };

    return (
        <>
            <ThemeProvider theme={theme}>
                <div
                    className='App'
                    style={{
                        fontFamily: 'Roboto',
                        backgroundColor: 'gray',
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'absolute',
                        left: 'calc(50% - 600px)',
                        top: '0',
                        transition: ' all 1.5s ease',
                        width: '1200px',
                        minHeight: '100vh',
                        overflow: 'hidden',
                    }}
                >
                    <main
                        className='pageContainer'
                        style={{
                            minHeight: '100vh',
                            overflow: 'hidden',
                        }}
                    >
                        <Nav />
                        <Material.Box></Material.Box>
                        <Landing />
                    </main>
                </div>
            </ThemeProvider>
        </>
    );
}

export default App;
