// import React, { useRef, useEffect } from 'react';
// import * as Material from '@mui/material';
// import anime from 'animejs'; // Import anime.js library
// import { svgContainer, svgCord, animateSvgStroke1 } from './Styles'; // Adjust the path accordingly

// function SvgContainer({ props }) {
// 	const svgPathRef = useRef(null);

// 	const handleStartClick = () => {
// 		anime({
// 			targets: svgPathRef.current,
// 			strokeDashoffset: [anime.setDashoffset, 0],
// 			easing: 'cubicBezier(0.47, 0, 0.745, 0.715)',
// 			duration: 1000,
// 			delay: 400,
// 			direction: 'both',
// 		});
// 	};
// 	//  const handleTempBtnClick = () => {
// 	//     anime({
// 	//       targets: svgPathRef.current,
// 	//       strokeDashoffset: [anime.setDashoffset, 800], // Adjust this value based on your SVG path length
// 	//       easing: 'cubicBezier(0.47, 0, 0.745, 0.715)',
// 	//       duration: 500,
// 	//       delay: 500,
// 	//       direction: 'both',
// 	//     });
// 	//   }

// 	useEffect(() => {
// 		handleStartClick(); // Trigger animation on component mount
// 	}, []); // Empty dependency array to run once after initial render

// 	return (
// 		<div className="svgContainer" style={svgContainer}>
// 			<button
// 				id="svgbuttonstyle"
// 				style={{ zIndex: 4, position: 'relative' }}
// 				onClick={handleStartClick}
// 			>
// 				Animate SVG
// 			</button>
// 			<svg
// 				xmlns="http://www.w3.org/2000/svg"
// 				viewBox="616.321 -210 744.3 1389"
// 				className="svg-cord"
// 				style={svgCord}
// 			>
// 				<path
// 					ref={svgPathRef} // Use the ref to target the SVG path for animation
// 					id="svgPath"
// 					fill="none"
// 					stroke="#EEE"
// 					strokeWidth="3"
// 					d="M869-207q137 214-71 346-196 76-177-11 36-95 125 56c66 127-103 197-119 165-6-11-18-90 106-118a50 50 0 1 1 267 705"
// 					style={animateSvgStroke1} // Apply the animateSvgStroke1 styling
// 				/>
// 			</svg>
// 		</div>
// 	);
// }

// export default SvgContainer;
