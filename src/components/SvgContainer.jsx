import React, { useRef } from 'react';
import MouseIcon from '@mui/icons-material/Mouse';
import * as Material from '@mui/material';
import anime from 'animejs'; // Import anime.js library
import {
	mouseBtnText,
	mouse,
	mouseContainer,
	mouseBtn,
	svgContainer,
	svgCord,
	pageContainer,
} from './Styles'; // Adjust the path accordingly

function SvgContainer({ props }) {
	const svgPathRef = useRef(null);
	const handleStartClick = () => {
		anime({
			targets: svgPathRef.current,
			strokeDashoffset: [anime.setDashoffset, 0],
			easing: 'cubicBezier(0.47, 0, 0.745, 0.715)',
			duration: 1000,
			delay: 400,
			direction: 'both',
		});
	};
	//  const handleTempBtnClick = () => {
	//     anime({
	//       targets: svgPathRef.current,
	//       strokeDashoffset: [anime.setDashoffset, 800], // Adjust this value based on your SVG path length
	//       easing: 'cubicBezier(0.47, 0, 0.745, 0.715)',
	//       duration: 500,
	//       delay: 500,
	//       direction: 'both',
	//     });
	//   }

	//array of pages

	return (
		//  <div className="svgContainer" style={Object.assign({}, svgContainer, pageContainer)}>
		<div className="svgContainer" style={svgContainer}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="616.321 -210 744.3 1389"
				className="svg-cord"
				style={svgCord}
			>
				<path
					ref={svgPathRef} // Use the ref to target the SVG path for animation
					id="svgPath"
					fill="none"
					stroke="#EEE"
					strokeWidth="3"
					d="M869-207q137 214-71 346-196 76-177-11 36-95 125 56c66 127-103 197-119 165-6-11-18-90 106-118a50 50 0 1 1 267 705"
				/>
			</svg>
		</div>
	);
}

export default SvgContainer;
