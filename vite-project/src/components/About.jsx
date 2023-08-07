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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                    ab harum minus vitae praesentium maxime, veniam fugiat
                    dolor. Sed quaerat quo molestiae distinctio optio quidem
                    tenetur veritatis laboriosam, corrupti repudiandae?
                </div>
                <div className='techBox' style={techBox}>
                    <div>Technical Skills</div>
                    <div>
                        <li className='aboutBubbleItem' style={aboutBubbleItem}>
                            Software
                        </li>
                        <li className='aboutBubbleItem' style={aboutBubbleItem}>
                            Software
                        </li>
                        <li className='aboutBubbleItem' style={aboutBubbleItem}>
                            Software
                        </li>
                    </div>
                </div>
                <div className='skillBox' style={skillBox}>
                    <div className='aboutSubtitle'>Design Skills</div>
                    <div className='aboutBubble'>
                        <li className='aboutBubbleItem' style={aboutBubbleItem}>
                            Design
                        </li>
                        <li className='aboutBubbleItem' style={aboutBubbleItem}>
                            Design
                        </li>
                        <li className='aboutBubbleItem' style={aboutBubbleItem}>
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
    );
}

export default About;
