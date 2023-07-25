import React from 'react';
import { useState } from 'react';
// MUI
import theme from './theme';
import { ThemeProvider } from '@emotion/react';
import * as Material from '@mui/material';
//Components

// This function renders main content of web app
function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <div className='App'>
                    <main>
                        <Material.Box></Material.Box>
                    </main>
                </div>
            </ThemeProvider>
        </>
    );
}

export default App;
