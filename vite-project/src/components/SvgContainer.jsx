import * as React from 'react';
import * as Material from '@mui/material';
import anime from 'animejs/lib/anime.es.js';
import avesLogo from '../assets/aves.png';
import {} from './Styles';

// This function renders main content of web app
function SvgContainer() {
    return (
        
        <div className="svgContainer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="616.321 -210 744.3 1389 " className="svg-cord">
                <path id="svgPath" fill="none" stroke="#EEE" stroke-width="3"
                    d="M869-207q137 214-71 346-196 76-177-11 36-95 125 56c66 127-103 197-119 165-6-11-18-90 106-118a50 50 0 1 1 267 375" />
            </svg>
        </div>

    )
}

export default SvgContainer;
