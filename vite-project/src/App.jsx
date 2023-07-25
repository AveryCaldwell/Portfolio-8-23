import React from 'react';
// MUI
import theme from './theme';
import { ThemeProvider } from '@emotion/react';
import * as Material from '@mui/material';
//Components
import Nav from './components/Nav';

// This function renders main content of web app
function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <div className='App'>
                    <main>
                        <Nav />
                        <Material.Box></Material.Box>
                    </main>
                </div>
            </ThemeProvider>
        </>
    );
}

export default App;
