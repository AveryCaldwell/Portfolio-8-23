import React, { useEffect, useState } from 'react'; // Importing useEffect and useRef

// import * as Material from '@mui/material';
import anime from 'animejs/lib/anime.es.js';
import CYCU from '../assets/CYCU.png';
import MC from '../assets/MC.png';
import UW from '../assets/UW.png';
import {
    orbitalContainer,
    orbitalBox,
    cardContainer,
    eduTitle,
    eduHeader,
    eduCard,
    eduSlideshow,
    eduImage,
    eduBtn,
    eduBtnContainer,
    mySlides,
} from './Styles';

// This function renders main content of web app
function Edu() {
    // Education Orbit animation
    let currentPosition = {
        object1: 0,
        object2: 1 / 3,
        object3: 2 / 3,
    };
    const rotationTime = 9000;
    function experienceRotation(endDeg, target, speedOverride) {
        if (endDeg > 100) {
            endDeg = 100;
        }
        const fullRotation = rotationTime;
        const distTravel = endDeg - currentPosition[target];
        const duration = Math.abs(distTravel * (fullRotation / 100));
        const targetDiv = document.getElementById(target);
        targetDiv.animate(
            [
                { offsetDistance: String(currentPosition[target]) + '%' },
                { offsetDistance: String(endDeg) + '%' },
            ],
            {
                duration:
                    speedOverride !== undefined ? speedOverride : duration,
                easing: 'linear',
                iterations: 1,
                fill: 'forwards',
            }
        );
        if (endDeg === 100) {
            currentPosition[target] = 0;
        } else {
            currentPosition[target] = endDeg;
        }
    }
    let currentOrbit = {
        1: 1,
        2: 2,
        3: 3,
    };
    let nextOrbitDeg = {
        1: (1 / 3) * 100,
        2: (2 / 3) * 100,
        3: 100,
    };
    function nextOrbit(target) {
        experienceRotation(
            nextOrbitDeg[currentOrbit[target]],
            `object${target}`
        );
        if (currentOrbit[target] === 3) {
            currentOrbit[target] = 1;
        } else {
            currentOrbit[target] += 1;
        }
    }
    let orbit;

    function constantOrbit() {
        orbitting = true;
        nextOrbit(1);
        nextOrbit(2);
        nextOrbit(3);
        orbit = setInterval(function () {
            nextOrbit(1);
            nextOrbit(2);
            nextOrbit(3);
        }, rotationTime / 3);
    }
    function initializeRotator() {
        experienceRotation((1 / 3) * 100, 'object2', 1);
        experienceRotation((2 / 3) * 100, 'object3', 1);
        document.getElementsByClassName(
            'orbitalContainer'
        )[0].style.opacity = 1;
        constantOrbit();
    }
    let orbitting = false;
    function rotatorClick(target) {
        if (!orbitting && currentOrbit[target] !== 1) {
            constantOrbit();
        }
        let stopRotator = setInterval(function () {
            if (currentOrbit[target] === 1) {
                clearInterval(stopRotator);
                clearInterval(orbit);
                orbitting = false;
            }
        }, 1000);
    }

    useEffect(() => {
        initializeRotator();
    }, []); // Empty dependency array means this effect will run after initial render

    return (
        <div
            className='eduContainer pageContainer'
            style={{ display: 'flex', minHeight: '100vh', overflow: 'hidden' }}
        >
            <h1 className='eduTitle' style={eduTitle}>
                Education
            </h1>

            <div className='orbitalContainer' style={orbitalContainer}>
                <div
                    id='object1'
                    className='orbitalBox'
                    onClick={() => rotatorClick(1)}
                    style={orbitalBox}
                >
                    <img
                        src={MC}
                        className='eduImage'
                        alt='Mississippi College'
                        style={eduImage}
                    />
                </div>
                <div
                    id='object2'
                    className='orbitalBox'
                    onClick={() => rotatorClick(2)}
                    style={orbitalBox}
                >
                    <img
                        src={CYCU}
                        className='eduImage'
                        alt='Chung Yuan Christian University'
                        style={eduImage}
                    />
                </div>
                <div
                    id='object3'
                    className='orbitalBox'
                    onClick={() => rotatorClick(3)}
                    style={orbitalBox}
                >
                    <img
                        src={UW}
                        className='eduImage'
                        alt='University of Washington'
                        style={eduImage}
                    />
                </div>
            </div>

            <div className='cardContainer' style={cardContainer}>
                <div
                    className='eduCard1 hide square'
                    onClick={() => rotatorClick(1)}
                    style={eduCard}
                >
                    <div
                        className='eduHeader'
                        onClick={() => currentSlide(1)}
                        style={eduHeader}
                    >
                        Mississippi College
                    </div>
                </div>
                <div
                    className='eduCard2 hide square'
                    onClick={() => rotatorClick(2)}
                    style={eduCard}
                >
                    <div
                        className='eduHeader'
                        onClick={() => currentSlide(2)}
                        style={eduHeader}
                    >
                        Chung Yuan Christian University
                    </div>
                </div>
                <div
                    className='eduCard3 hide square'
                    style={eduCard}
                    onClick={() => rotatorClick(3)}
                >
                    <div
                        className='eduHeader'
                        onClick={() => currentSlide(3)}
                        style={eduHeader}
                    >
                        University of Washington
                    </div>
                </div>

                <div id='eduSlideshow' style={eduSlideshow}>
                    {/* <!-- css similar to <div className="mySlides fade"> --> */}
                    <div className='mySlides fade' style={mySlides}>
                        <div className='numbertext'>
                            <li>2012-2016 | Clinton, MS</li>
                            <li>Headerman Scholar</li>
                            <li>Women in Business, Member & Speaker</li>
                            <li>Outstanding Marketing Award</li>
                            <li>Sandra Parks Award</li>
                            <li>Who's Who</li>
                            <li>Mortar Board</li>
                            <li>
                                Delta Mu Delta, Epsilon Iota Delta, Omicron
                                Delta Kappa
                            </li>
                        </div>
                        {/* <!-- numbertext --> */}
                    </div>
                    {/* <!-- mySlides --> */}
                    <div className='mySlides fade' style={mySlides}>
                        <div className='numbertext'>
                            <li>Taipei, Taiwan</li>

                            <li>Summer Business Program 2015</li>
                            <li>Certificate of Completion</li>
                        </div>
                        {/* <!-- numbertext --> */}
                    </div>
                    {/* <!-- mySlides --> */}
                    <div className='mySlides fade' style={mySlides}>
                        <div className='numbertext'>
                            <li>Full Stack Developer Coding Bootcamp</li>
                            <li>Team Lead</li>
                            <li>GPA: 98.27% / 100%</li>
                        </div>
                        {/* <!-- numbertext --> */}
                    </div>
                    {/* <!-- mySlides --> */}
                </div>
                {/* <!-- eduSlideshow --> */}
            </div>
            {/* <!-- cardContainer --> */}
            <div className='eduBtnContainer' style={eduBtnContainer}>
                <button
                    className='eduBtn'
                    style={eduBtn}
                    onClick={() => setActivePage('Projects')}
                >
                    <span> See Projects </span>
                </button>
                <button
                    className='tempBtn'
                    onClick={() => setActivePage('About')}
                >
                    <span>Back</span>
                </button>
            </div>
            {/* <!-- btn container --> */}
        </div>
    );
}

export default Edu;
