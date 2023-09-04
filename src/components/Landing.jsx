import { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';
import {
	landingHeader,
	landingTitle,
	landingText,
	landingSubtitle,
	landingButton,
	letter,
	landingContainer,
} from './Styles';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

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

	// render landing page
	return (
		<>
			<div
				className="landingContainer pageContainer"
				style={landingContainer}
				ref={containerRef}
			>
				{/* Name animation by each letter */}
				<div className="landingHeader" style={landingHeader}>
					<span className="letter" style={letter}>
						A
					</span>
					<span className="letter" style={letter}>
						v
					</span>
					<span className="letter" style={letter}>
						e
					</span>
					<span className="letter" style={letter}>
						r
					</span>
					<span className="letter" style={letter}>
						y
					</span>
					<div></div>
					<span className="letter" style={letter}>
						C
					</span>
					<span className="letter" style={letter}>
						a
					</span>
					<span className="letter" style={letter}>
						l
					</span>
					<span className="letter" style={letter}>
						d
					</span>
					<span className="letter" style={letter}>
						w
					</span>
					<span className="letter" style={letter}>
						e
					</span>
					<span className="letter" style={letter}>
						l
					</span>
					<span className="letter" style={letter}>
						l
					</span>
				</div>
				<div className="landingText" style={landingText}>
					<div className="landingTitle" style={landingTitle}>
						Portfolio 2023
					</div>
					<div className="landingSubtitle" style={landingSubtitle}>
						React/Full Stack Developer
						<span>
							{/* Button to go to next page */}
							<button
								className="landingButton"
								onClick={() => props.setActivePage('About')}
								style={landingButton}
							>
								<ArrowCircleRightOutlinedIcon
									style={landingButton}
								/>
							</button>
						</span>
					</div>
				</div>
			</div>
		</>
	);
}

export default Landing;
