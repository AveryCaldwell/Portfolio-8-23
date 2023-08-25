import { useEffect, useRef } from "react";
// import * as Material from '@mui/material';
import anime from "animejs/lib/anime.es.js";
import {
	landingHeader,
	landingTitle,
	landingText,
	landingSubtitle,
	landingButton,
	letter,
	landingContainer,
} from "./Styles";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

// This function renders main content of web app
function Landing({ props }) {
	// Name/letter animation
	useEffect(() => {
		const animation = anime({
			targets: ".letter",
			opacity: 1,
			translateY: 50,
			rotate: {
				value: 360,
				duration: 2000,
				easing: "easeInExpo",
			},
			scale: anime.stagger([0.7, 1], { from: "center" }),
			delay: anime.stagger(100, { start: 1000 }),
			translateX: [-10, 30],
		});
		return () => {
			// Clean up the animation when the component unmounts
			animation.pause();
		};
	}, []);
	// function to scroll to next page
	const containerRef = useRef(null);

	const handleClickScroll = () => {
		const lastChildElement = containerRef.current?.lastElementChild;
		lastChildElement?.scrollIntoView({ behavior: "smooth" });
		console.log("Landing scroll successful");
	};

	// render landing page
	return (
		<>
			<div
				className='landingContainer pageContainer'
				style={landingContainer}
				ref={containerRef}>
				<div className='landingHeader' style={landingHeader}>
					<span className='letter' style={letter}>
						A
					</span>
					<span className='letter' style={letter}>
						v
					</span>
					<span className='letter' style={letter}>
						e
					</span>
					<span className='letter' style={letter}>
						r
					</span>
					<span className='letter' style={letter}>
						y
					</span>
					<div></div>
					<span className='letter' style={letter}>
						C
					</span>
					<span className='letter' style={letter}>
						a
					</span>
					<span className='letter' style={letter}>
						l
					</span>
					<span className='letter' style={letter}>
						d
					</span>
					<span className='letter' style={letter}>
						w
					</span>
					<span className='letter' style={letter}>
						e
					</span>
					<span className='letter' style={letter}>
						l
					</span>
					<span className='letter' style={letter}>
						l
					</span>
				</div>
				<div className='landingText' style={landingText}>
					<div className='landingTitle' style={landingTitle}>
						Portfolio 2023
					</div>
					<div className='landingSubtitle' style={landingSubtitle}>
						React/Full Stack Developer
						<span>
							<button
								className='landingButton'
								onClick={() => props.setActivePage("About")}
								style={landingButton}>
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
