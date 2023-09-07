import * as React from 'react';
import avesLogo from '../assets/aves.png';

import {
	logoSliderImage,
	logoSliderContainer,
	logoSliderCircle,
} from './Styles';

// This function defines the LogoSlider component responsible for rendering the main content of the web app
function LogoSlider() {
	// Return JSX representing the LogoSlider component that floats between the Landing and About page
	return (
		<div className="logoSliderContainer" style={logoSliderContainer}>
			<img
				src={avesLogo}
				alt="aves"
				className="logoSliderImage"
				style={logoSliderImage}
			/>
			{/* Display a circular element for logo animation */}
			<div className="logoSliderCircle" style={logoSliderCircle}></div>
		</div>
	);
}

export default LogoSlider;
