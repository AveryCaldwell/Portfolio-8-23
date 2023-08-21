import * as React from 'react';
// import * as Material from '@mui/material';
// import anime from 'animejs/lib/anime.es.js';
// import avesLogo from '../assets/aves.png';
import {
    aboutContent,
    aboutHeader,
    techBox,
    aboutBubbleItem,
    skillBox,
    aboutButton,
    aboutContainer,
    backButton,
    aboutText,
    aboutSubtitle,
    skillSubtitle,
    pageContainer
} from './Styles';

// This function renders main content of About section
function About() {
    const frontendData = [
        'HTML/CSS',
        'JavaScript',
        'React',
        'Responsive Design',
        'Angular',
        'Vue.js',
        'jQuery',
        'Bootstrap',
        'Material-UI',
        'Foundation',
        'Tailwind CSS',
        'UX/UI',
    ];
    const backendData = [
        'Node.js',
        'Express.js, ',
        'MySQL/NoSQL',
        'RESTful/GraphQL',
        'Heroku/Git Pages',
        'Isomnia/Postman',
        'OAuth',
        'MongoDB',
        'Git',
        'Sequelize',
        'JWT, OAuth',
        'Jest',
        'Apollo',
    ];
    const renderedFrontendSkills = frontendData.map((skill, index) => (
        <li key={index} className='aboutBubbleItem' style={aboutBubbleItem}>
            {skill}
        </li>
    ));

    const renderedBackendSkills = backendData.map((skill, index) => (
        <li key={index} className='aboutBubbleItem' style={aboutBubbleItem}>
            {skill}
        </li>
    ));

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
    let currentPage = 'Landing';
    let pageIndexObj = {
        Landing: 0,
        About: 1,
        Edu: 2,
        Projects: 3,
        Resume: 4,
        References: 5,
        Contact: 6,
    };
    const setActivePage = (newPage) => {
        const appContainer = document.getElementsByClassName('appContainer')[0];
        const pageIndex = pages.indexOf(newPage);
        const currentPageIndex = pages.indexOf(currentPage);
        const calculatedVH = pageIndex * 100;
        if (newPage !== currentPage) {
            const pageDiff =
                pageIndex < currentPageIndex
                    ? Math.abs(currentPageIndex - pageIndex)
                    : Math.abs(pageIndex - currentPageIndex);
            pages.forEach(
                (element, index) =>
                    (pageIndexObj[element] = index - pages.indexOf(newPage))
            );
            currentPage = newPage;
            console.log(pageIndexObj);
            console.log(pageDiff);
            appContainer.style.transition = `all ${pageDiff * 1.5}s ease`;
            const logoSliderImage =
                document.getElementsByClassName('logoSliderImage')[0];
            const logoSliderCircle =
                document.getElementsByClassName('logoSliderCircle')[0];
            // if > 0, then the page is moving upwards
            if (currentPageIndex - pageIndex > 0) {
                //  changing top prop value to move the image
                if (pageIndex === 0) {
                    setTimeout(function () {
                        logoSliderImage.style.top = `15px`;
                    }, 1200);
                    logoSliderCircle.style.opacity = '0';
                }
            } else {
                if (pageIndex >= 1) {
                    logoSliderImage.style.top = `calc(100% - 335px)`;
                    setTimeout(function () {
                        logoSliderCircle.style.opacity = '1';
                    }, 1000);
                }
            }

            appContainer.style.top = `calc(0% - ${calculatedVH}vh)`;
        }
    };

    return (
        // <div
        //     style={{
        //         minHeight: '100vh',
        //         overflow: 'hidden',
        //     }}
        // >
            <div
                className='aboutContainer pageContainer'
                style={Object.assign({},aboutContainer,pageContainer)}
            >
                <div className='aboutHeader' style={aboutHeader}>
                    About Me
                </div>
                <div className='aboutContent' style={aboutContent}>
                    <div class='aboutSubtitle' style={aboutSubtitle}>
                        Tldr: Career changer, Adventurer, Woman in Business,
                        Creative Thinker + Web Dev
                    </div>
                    <div className='aboutText' style={aboutText}>
                        Born & raised in Mississippi. Officially a Washingtonian
                        as of October 2022. Now a Full Stack Developer & recent
                        grad of University of Washington Coding Bootcamp. I also
                        have a Bachelors of Science in Marketing from
                        Mississippi College.
                    </div>
                    <div className='aboutText' style={aboutText}>
                        Previously in the Banking industry for six years. My
                        analytical skills from working in compliance helps me
                        troubleshoot and optimize code effectively, while my
                        background in data-driven decision-making ensures that
                        my coding choices are both innovative and valuable.{' '}
                    </div>
                    <div className='aboutText' style={aboutText}>
                        I offer a unique blend of skills that encompasses both
                        interpersonal expertise to full stack development
                        proficiency. With a background in customer service, I
                        bring strong communication, empathy, and problem-solving
                        abilities to the table.This enables me to effectively
                        engage with clients, understand their needs, and
                        translate those insights into impactful solutions. My
                        marketing degree equips me with a user-centric mindset,
                        allowing me to create web applications that align with
                        user needs and preferences. This well-rounded
                        combination positions me as an adaptable and
                        well-rounded professional, capable of contributing
                        meaningfully across various dimensions of a project.
                    </div>
                    <div class='aboutSubtitle' style={aboutSubtitle}>
                        Thanks for reading! - Avery
                    </div>
                    {/* TODO: add animation on skill hover */}
                    <div className='techBox' style={techBox}>
                        <div className='aboutSubtitle' style={skillSubtitle}>
                            Front End Skills
                        </div>
                        {renderedFrontendSkills}
                    </div>
                    <div className='skillBox' style={skillBox}>
                        <div className='aboutSubtitle' style={skillSubtitle}>
                            Back End Skills
                        </div>
                        {renderedBackendSkills}
                        <div className='aboutBubble'></div>
                    </div>
                    <button
                        className='aboutButton'
                        style={aboutButton}
                        onClick={() => setActivePage('Edu')}
                    >
                        <span>Show More</span>
                    </button>
                    <button
                        className='tempBtn'
                        style={backButton}
                        onClick={() => setActivePage('Landing')}
                    >
                        <span>Back to Home</span>
                    </button>
                </div>
            </div>
        // </div>
    );
}

export default About;
