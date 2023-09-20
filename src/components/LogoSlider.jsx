import * as React from 'react';
import * as Material from '@mui/material';
import avesLogo from '../assets/aves.png';
import {
	logoSliderImage,
	logoSliderContainer,
	logoSliderCircle,
} from './Styles-Theme';

// This function defines the LogoSlider component responsible for rendering the main content of the web app
function LogoSlider() {
	// Return JSX representing the LogoSlider component that floats between the Landing and About page
	return (
		<Material.Box className="logoSliderContainer" sx={logoSliderContainer}>
			<Material.CardMedia
				component="img"
				alt="aves"
				sx={logoSliderImage}
				image={avesLogo}
				className="logoSliderImage"
			/>
			{/* Display a circular element for logo animation */}
			<Material.Box
				className="logoSliderCircle"
				sx={logoSliderCircle}
			></Material.Box>
		</Material.Box>
	);
}

export default LogoSlider;
