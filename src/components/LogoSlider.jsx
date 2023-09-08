import * as React from 'react';
import avesLogo from '../assets/aves.png';
import {
	mobileLogoSliderContainer,
	mobileLogoSliderImage,
} from './ResponsiveStyles';
import { useMediaQuery } from 'react-responsive';
import {
	logoSliderImage,
	logoSliderContainer,
	logoSliderCircle,
} from './Styles';

// This function defines the LogoSlider component responsible for rendering the main content of the web app
function LogoSlider() {
	const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
	// Return JSX representing the LogoSlider component that floats between the Landing and About page
	return (
		<div
			className="logoSliderContainer"
			// style={logoSliderContainer}
			style={isMobile ? mobileLogoSliderContainer : logoSliderContainer}
		>
			<img
				src={avesLogo}
				alt="aves"
				className="logoSliderImage"
				style={logoSliderImage}
			/>
			{/* Display a circular element for logo animation */}
			<div
				className="logoSliderCircle"
				// style={logoSliderCircle}
				style={isMobile ? mobileLogoSliderImage : logoSliderCircle}
			></div>
		</div>
	);
}

export default LogoSlider;
