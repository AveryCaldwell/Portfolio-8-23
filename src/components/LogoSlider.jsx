import * as React from 'react';
import * as Material from '@mui/material';
import anime from 'animejs/lib/anime.es.js';
import avesLogo from '../assets/aves.png';
import {
	logoSliderImage,
	logoSliderContainer,
	logoSliderCircle,
} from './Styles';

// This function renders main content of web app
function LogoSlider() {
	return (
		<div className="logoSliderContainer" style={logoSliderContainer}>
			<img
				src={avesLogo}
				alt="aves"
				className="logoSliderImage"
				style={logoSliderImage}
			/>
			<div className="logoSliderCircle" style={logoSliderCircle}></div>
		</div>
	);
}

export default LogoSlider;
