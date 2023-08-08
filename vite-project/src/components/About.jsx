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
} from './Styles';

// 'HTML',
//         'CSS',
//         'JavaScript',
//         'Node.js',
//         'jQuery',
//         'APIs',
//         'Express',
//         'MySQL',
//         'Sequel',
//         'Handlebars',
//         'Apollo',
//         'GraphQL',
//         'MongoDB',
//         'Heroku',
//         'Insomnia',
//         'React',
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
        ' Node.js',
        'Express.js, ',
        'MySQL/NoSQL',
        'RESTful/GraphQL',
        'OAuth',
        'Heroku/Git Pages',
        'Isomnia/Postman',
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
    return (
        <div style={{ minHeight: '100vh', overflow: 'hidden' }}>
            <div
                className='aboutContainer pageContainer'
                style={aboutContainer}
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
                    <div className='techBox' style={techBox}>
                        <div className='aboutSubtitle' style={aboutSubtitle}>
                            Front End Skills
                        </div>

                        {renderedFrontendSkills}
                    </div>
                    <div className='skillBox' style={skillBox}>
                        <div className='aboutSubtitle' style={aboutSubtitle}>
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
        </div>
    );
}

export default About;
