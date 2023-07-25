import React from 'react';
import { useState } from 'react';
// MUI
import theme from './theme';
import { ThemeProvider } from '@emotion/react';
import * as Material from '@mui/material';
//Components
// import Landing from './components/Landing';
// import About from './components/About';
// import Education from './components/Education';
// import Projects from './components/Projects';
// import Resume from './components/Resume';
// import References from './components/Skills';
// import Contact from './components/Contact';
// import Nav from './components/Nav';

// This function renders main content of web app
function App() {
    const [currentPage, setCurrentPage] = React.useState('Landing');

    return (
        <>
            <ThemeProvider theme={theme}>
                <div className='App'>
                    {/* <Nav
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                    /> */}
                    <main>
                        <Material.Box>
                            {/* <Landing
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                            /> */}
                            {/* <About
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                            />

                            <Education
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                            />
                            <Projects
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                            />
                            <Resume
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                            />
                            <References
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                            />
                            <Contact
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                            /> */}
                        </Material.Box>
                    </main>
                </div>
            </ThemeProvider>
        </>
    );
}

export default App;
