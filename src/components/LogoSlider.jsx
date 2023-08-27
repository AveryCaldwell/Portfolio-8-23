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
