import React from 'react';
// MUI
import theme from './theme';
import { ThemeProvider } from '@emotion/react';
import * as Material from '@mui/material';
//Components
import Nav from './components/Nav';
import Landing from './components/Landing';
import About from './components/About';
import Edu from './components/Edu';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Ref from './components/Ref';
import Contact from './components/Contact';
import LogoSlider from './components/LogoSlider';
import Footer from './components/Footer';
import SvgContainer from './components/SvgContainer';
import { appContainer, pageContainer } from './components/Styles';

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
                <Nav />
                <Material.Box></Material.Box>
                <div className='App appContainer' style={appContainer}>
                    <main className='pageContainer' style={pageContainer}>
                        <LogoSlider />
                        <Landing />
                        <About />
                        <Edu />
                        <SvgContainer />
                        <Projects />
                        <Resume />
                        <Ref />
                        <Contact />
                        <Footer />
                    </main>
                </div>
            </ThemeProvider>
        </>
    );
}

export default App;
