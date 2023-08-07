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
} from './Styles';

// This function renders main content of About section
function About() {
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
                    <div className='aboutText' style={aboutText}>
                        Born & raised in Mississippi. Officially a Washingtonian
                        as of October 2022. Now a Full Stack Developer & recent
                        grad of University of Washington Coding Bootcamp. I also
                        have a Bachelors of Science in Marketing from
                        Mississippi College. My marketing degree equips me with
                        a user-centric mindset, allowing me to create web
                        applications that align with user needs and preferences.
                    </div>
                    <div className='aboutText' style={aboutText}>
                        Previously in the Banking industry for six years. My
                        analytical skills from working in compliance helps me
                        troubleshoot and optimize code effectively, while my
                        background in data-driven decision-making ensures that
                        my coding choices are both innovative and valuable.{' '}
                    </div>
                    {/* TODO: finish updating text */}
                    <div className='aboutText' style={aboutText}>
                        I offer a unique blend of skills that encompasses both
                        interpersonal expertise to full stack development
                        proficiency. With a background in customer service, I
                        bring strong communication, empathy, and problem-solving
                        abilities to the table.This enables me to effectively
                        engage with clients, understand their needs, and
                        translate those insights into impactful solutions. This
                        well-rounded combination positions me as an adaptable
                        and well-rounded professional, capable of contributing
                        meaningfully across various dimensions of a project.
                        Proficient with Microsoft Office including: Microsoft
                        Word, Excel, PowerPoint, and Access.
                    </div>
                    <div className='techBox' style={techBox}>
                        <div>Technical Skills</div> Current coding experience
                        includes: HTML, CSS Frameworks, JavaScript, Node.js,
                        jQuery, APIs, Express, MySQL, Sequel, Handlebars,
                        Apollo, GraphQL, MongoDB, Heroku, Insomnia, and React.
                        <div>
                            <li
                                className='aboutBubbleItem'
                                style={aboutBubbleItem}
                            >
                                Software
                            </li>
                            <li
                                className='aboutBubbleItem'
                                style={aboutBubbleItem}
                            >
                                Software
                            </li>
                            <li
                                className='aboutBubbleItem'
                                style={aboutBubbleItem}
                            >
                                Software
                            </li>
                        </div>
                    </div>
                    <div className='skillBox' style={skillBox}>
                        <div className='aboutSubtitle'>Design Skills</div>
                        <div className='aboutBubble'>
                            <li
                                className='aboutBubbleItem'
                                style={aboutBubbleItem}
                            >
                                Design
                            </li>
                            <li
                                className='aboutBubbleItem'
                                style={aboutBubbleItem}
                            >
                                Design
                            </li>
                            <li
                                className='aboutBubbleItem'
                                style={aboutBubbleItem}
                            >
                                Design
                            </li>
                        </div>
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
