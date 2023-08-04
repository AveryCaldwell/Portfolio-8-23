import * as React from 'react';
import * as Material from '@mui/material';
import anime from 'animejs/lib/anime.es.js';
import avesLogo from '../assets/aves.png';
import {
    logoSliderImage,
    logoSliderContainer,
    logoSliderCircle,
    landingHeader,
} from './Styles';

// This function renders main content of web app
function Landing() {
    // Name animation
    let animation = anime({
        targets: '.letter',
        opacity: 1,
        translateY: 50,
        rotate: {
            value: 360,
            duration: 2000,
            easing: 'easeInExpo',
        },
        scale: anime.stagger([0.7, 1], { from: 'center' }),
        delay: anime.stagger(100, { start: 1000 }),
        translateX: [-10, 30],
    });
    return (
        <>
            <div className='logoSliderContainer' style={logoSliderContainer}>
                <img
                    src={avesLogo}
                    style={logoSliderImage}
                    alt='aves'
                    className='logoSliderImage'
                />
                <div
                    className='logoSliderCircle'
                    style={logoSliderCircle}
                ></div>
            </div>
            <div className='landingContainer pageContainer'>
                <div className='landingHeader' style={landingHeader}>
                    <span className='letter'>A</span>
                    <span className='letter'>v</span>
                    <span className='letter'>e</span>
                    <span className='letter'>r</span>
                    <span className='letter'>y</span>
                    <div></div>
                    <span className='letter'>C</span>
                    <span className='letter'>a</span>
                    <span className='letter'>l</span>
                    <span className='letter'>d</span>
                    <span className='letter'>w</span>
                    <span className='letter'>e</span>
                    <span className='letter'>l</span>
                    <span className='letter'>l</span>
                </div>
                <div className='landingText'>
                    <div className='landingTitle'>Portfolio 2022-2023</div>
                    <div className='landingSubtitle'>
                        Full Stack Developer
                        <span>
                            <button
                                className='landingButton'
                                onclick="setActivePage('About')"
                            >
                                Next
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Landing;
