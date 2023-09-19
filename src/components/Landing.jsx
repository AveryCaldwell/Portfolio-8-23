import { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';
import { PulseButton, LandingCTA } from './Styles-Theme';
import * as Material from '@mui/material';

import {
	landingHeader,
	landingTitle,
	landingText,
	landingSubtitle,
	landingButton,
	letter,
	landingContainer,
	landingButtonSpan,
} from './Styles-Theme';
import { ArrowCircleRightOutlined } from '@mui/icons-material';

// This function component represents the Landing page of the web app
function Landing({ props }) {
	// Animation effect using the useEffect hook
	useEffect(() => {
		// Define an animation using the anime.js library
		const animate = anime({
			targets: '.letter', // Targets elements with the 'letter' class
			opacity: {
				value: props.currentNavNameState ? 0 : 1,
				duration: 500,
			},
			translateY: 50, // Move vertically by 50 units
			rotate: {
				value: 360, // Rotate by 360 degrees
				duration: 2000, // Animation duration of 2000ms
			},
			delay: props.currentNavNameState
				? 500
				: anime.stagger(100, { start: 1000 }), // Apply staggered delays
			translateX: [-10, 26], // Move horizontally between -10 and 30 units
			direction: props.currentNavNameState ? 'reverse' : 'both',
		});
		//Return a cleanup function to pause the animation when the component unmounts
	}, [props.currentNavNameState]);
	// Reference to the container element for scrolling
	const containerRef = useRef(null);

	return (
		<>
			<Material.Box
				className="landingContainer pageContainer"
				sx={landingContainer}
				ref={containerRef}
			>
				{/* Name animation by each letter */}
				<Material.Box className="landingHeader" sx={landingHeader}>
					<Material.Typography className="letter" sx={letter}>
						A
					</Material.Typography>
					<Material.Typography className="letter" sx={letter}>
						v
					</Material.Typography>
					<Material.Typography className="letter" sx={letter}>
						e
					</Material.Typography>
					<Material.Typography className="letter" sx={letter}>
						r
					</Material.Typography>
					<Material.Typography className="letter" sx={letter}>
						y
					</Material.Typography>
					<Material.Box></Material.Box>
					<Material.Typography className="letter" sx={letter}>
						C
					</Material.Typography>
					<Material.Typography className="letter" sx={letter}>
						a
					</Material.Typography>
					<Material.Typography className="letter" sx={letter}>
						l
					</Material.Typography>
					<Material.Typography className="letter" sx={letter}>
						d
					</Material.Typography>
					<Material.Typography className="letter" sx={letter}>
						w
					</Material.Typography>
					<Material.Typography className="letter" sx={letter}>
						e
					</Material.Typography>
					<Material.Typography className="letter" sx={letter}>
						l
					</Material.Typography>
					<Material.Typography className="letter" sx={letter}>
						l
					</Material.Typography>
				</Material.Box>
				<Material.Box className="landingText" sx={landingText}>
					<Material.Box className="landingTitle" sx={landingTitle}>
						Portfolio 2023
					</Material.Box>
					<Material.Box
						className="landingSubtitle"
						sx={landingSubtitle}
					>
						React/Full Stack Developer
						{/* Button to go to next page */}
						<Material.Box sx={landingButtonSpan}>
							<LandingCTA>Show me more! </LandingCTA>{' '}
							<PulseButton
								id="pulseButton"
								onClick={() => props.setActivePage('About')}
								sx={landingButton}
							>
								<ArrowCircleRightOutlined sx={landingButton} />
							</PulseButton>
						</Material.Box>
					</Material.Box>
				</Material.Box>
			</Material.Box>
		</>
	);
}

export default Landing;
