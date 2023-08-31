import React, { useEffect, useState } from 'react'; // Importing useEffect and useRef
import anime from 'animejs/lib/anime.es.js';
// SCHOOL LOGOS
import CYCU from '../assets/CYCU.png';
import MC from '../assets/MC.png';
import UW from '../assets/UW.png';
// STYLING
import theme from '../theme';
import { ThemeProvider } from '@emotion/react';
import {
	orbitalContainer,
	orbitalBox,
	cardContainer,
	eduTitle,
	eduHeader,
	eduSlideshow,
	eduImage,
	myEduInactive,
	myEduActive,
	eduCardInactive,
	eduCardActive,
	eduDescriptionHeader,
	eduImageInactive,
	eduImageActive,
	pageContainer,
	eduButtonSpan,
	eduButton,
} from './Styles';
// ICON
import SchoolIcon from '@mui/icons-material/School';

// Function to render individual education images
function ImageIconRender({ props }) {
	return (
		<img
			src={props.element.src}
			className="eduImage"
			alt={props.element.name}
			style={
				props.index === props.educationState
					? { ...eduImage, ...eduImageActive }
					: {
							...eduImage,
							...eduImageInactive,
					  }
			}
		/>
	);
}
// Function to render educational card
function EduCard({ props }) {
	return (
		<ThemeProvider theme={theme}>
			<div className="cardContainer" style={cardContainer}>
				{/* Mapping through EducationArr to render education cards */}
				{props.EducationArr.map(function (element, index) {
					return (
						<div
							className={`eduCard${index} square`}
							onClick={() => props.rotatorClick(index)}
							key={`eduCard${index}`}
							style={
								props.educationState === index
									? eduCardActive
									: eduCardInactive
							}
						>
							<div
								className="eduHeader"
								onClick={() => props.setEducationState(index)}
								style={eduHeader}
							>
								{element.name}
							</div>
						</div>
					);
				})}

				<label style={eduDescriptionHeader}>
					ACCOLADES <SchoolIcon />
				</label>
				{/* Education description slideshow */}
				<div id="eduSlideshow" style={eduSlideshow}>
					{/* Mapping through EducationArr to render education descriptions */}
					{props.EducationArr.map(function (element, index) {
						return (
							<div
								className={`${
									props.educationState === index
										? `myEduActive`
										: `myEduInactive`
								} fade`}
								key={`myEdu${index}`}
								style={
									props.educationState === index
										? myEduActive
										: myEduInactive
								}
							>
								<div className="numbertext">
									{props.EducationArr[index].description.map(
										function (description, descIndex) {
											return (
												<li
													key={`desc-${index}-${descIndex}`}
												>
													{description}
												</li>
											);
										}
									)}
								</div>
							</div>
						);
					})}
				</div>
				{/* <!-- eduSlideshow --> */}
			</div>
		</ThemeProvider>
	);
}

// Main Edu component
function Edu({ props }) {
	// Array containing education data
	const EducationArr = [
		{
			name: 'Mississippi College',
			src: MC,
			description: [
				'2012-2016 | Clinton, MS',
				'Headerman Scholar',
				'Women in Business, Member & Speaker',
				'Outstanding Marketing Award',
				'Sandra Parks Award',
				"Who's Who",
				'Mortar Board',
				'Delta Mu Delta, Epsilon Iota Delta, Omicron Delta Kappa',
			],
		},
		{
			name: 'Chung Yuan Christian University',
			src: CYCU,
			description: [
				'Taipei, Taiwan',
				'Summer Business Program 2015',
				'Certificate of Completion',
			],
		},
		{
			name: 'University of Washington',
			src: UW,
			description: [
				'Full Stack Developer Coding Bootcamp',
				'Team Lead',
				'GPA: 98.27% / 100%',
			],
		},
	];

	// Animation and ORBIT related functions
	// Define initial positions for each object in the orbit
	let currentPosition = {
		object1: 0,
		object2: 1 / 3,
		object3: 2 / 3,
	};
	// Set the time it takes for a full rotation in milliseconds
	const rotationTime = 9000;

	// Function to perform the rotation animation
	function experienceRotation(endDeg, target, speedOverride) {
		// Ensure that endDeg is within valid bounds
		if (endDeg > 100) {
			endDeg = 100;
		}

		// Calculate the full duration of the rotation
		const fullRotation = rotationTime;
		const distTravel = endDeg - currentPosition[target];
		const duration = Math.abs(distTravel * (fullRotation / 100));

		// Get the DOM element of the target and apply animation
		const targetDiv = document.getElementById(target);
		targetDiv.animate(
			[
				{ offsetDistance: String(currentPosition[target]) + '%' },
				{ offsetDistance: String(endDeg) + '%' },
			],
			{
				duration:
					speedOverride !== undefined ? speedOverride : duration,
				easing: 'linear',
				iterations: 1,
				fill: 'forwards',
			}
		);

		// Update the current position of the object in the orbit
		if (endDeg === 100) {
			currentPosition[target] = 0;
		} else {
			currentPosition[target] = endDeg;
		}
	}

	// Define the current position of each object in the orbit
	let currentOrbit = {
		1: 1,
		2: 2,
		3: 3,
	};

	// Define the next position in degrees for each object
	let nextOrbitDeg = {
		1: (1 / 3) * 100,
		2: (2 / 3) * 100,
		3: 100,
	};

	// Function to move to the next position in the orbit
	function nextOrbit(target) {
		experienceRotation(
			nextOrbitDeg[currentOrbit[target]],
			`object${target}`
		);

		// Update the current position in the orbit
		if (currentOrbit[target] === 3) {
			currentOrbit[target] = 1;
		} else {
			currentOrbit[target] += 1;
		}
	}
	// Initialize variables for the orbit animation
	let orbit;
	// let stopRotator;

	// Function to start the constant orbit animation
	function constantOrbit() {
		orbitting = true;
		nextOrbit(1);
		nextOrbit(2);
		nextOrbit(3);

		// Start the orbit interval if not already started
		if (orbit === undefined) {
			orbit = setInterval(function () {
				nextOrbit(1);
				nextOrbit(2);
				nextOrbit(3);
			}, rotationTime / 3);
		}
	}

	// Function to initialize the rotation animation
	function initializeRotator() {
		// Start rotation for object2 and object3
		experienceRotation((1 / 3) * 100, 'object2', 1);
		experienceRotation((2 / 3) * 100, 'object3', 1);

		// Make the orbital container visible and start constant orbit
		document.getElementsByClassName(
			'orbitalContainer'
		)[0].style.opacity = 1;
		constantOrbit();
	}
	let orbitting = false;

	// State management for the education content
	const [educationState, setEducationState] = useState(0);

	// Function to handle clicking on the rotation
	function rotatorClick(target) {
		setEducationState(target);
	}
	// Initialize the rotation animation on component mount
	useEffect(() => {
		initializeRotator();
	}, []); // Empty dependency array means this effect will run after initial render

	// State management for education content and button styles
	const [eduButtonState, setEduButtonState] = React.useState({
		About: { boxShadow: '0 4px 10px rgba(255, 255, 255, 0.0)' },
		Projects: { boxShadow: '0 4px 10px rgba(255, 255, 255, 0.0)' },
	});
	// Edu button data
	const eduButtons = [
		{ target: 'About', span: 'Back', name: 'About' },
		{ target: 'Projects', span: 'Next', name: 'Projects' },
	];
	// Function to handle button hover animation
	function setEduHoverButton(name, style) {
		let obj = Object.assign({}, eduButtonState);
		obj[name] = style;
		setEduButtonState(obj);
	}
	// Component rendering
	return (
		<ThemeProvider theme={theme}>
			<div className="eduContainer pageContainer" style={pageContainer}>
				{/* Education content */}
				<div style={{ width: '50%', marginLeft: '100px' }}>
					<h1 className="eduTitle" style={eduTitle}>
						EDUCATION
					</h1>
					<div className="orbitalContainer" style={orbitalContainer}>
						{/* Mapping through EducationArr to render orbital boxes */}
						{EducationArr.map(function (element, index) {
							return (
								<div
									id={`object${index + 1}`}
									key={`object${index + 1}`}
									className={'orbitalBox'}
									onClick={() => rotatorClick(index)}
									style={orbitalBox}
								>
									<ImageIconRender
										props={{
											element: element,
											setEducationState:
												setEducationState,
											educationState: educationState,
											index: index,
										}}
									/>
								</div>
							);
						})}
					</div>
				</div>
				{/* <!-- cardContainer --> */}
				<div>
					<EduCard
						props={{
							setEducationState: setEducationState,
							educationState: educationState,
							EducationArr: EducationArr,
							rotatorClick: rotatorClick,
						}}
					/>

					<div id="eduButtonSpan" style={eduButtonSpan}>
						{eduButtons.map(function (element, index) {
							return (
								<button
									className="eduButton"
									key={`eduButton${index}`}
									name={element.name}
									style={{
										...eduButton,
										...eduButtonState[element.name],
									}}
									onMouseEnter={(event) => {
										setEduHoverButton(event.target.name, {
											boxShadow:
												'0 4px 10px rgba(255, 255, 255, 0.7)',
										});
									}}
									onMouseLeave={(event) => {
										setEduHoverButton(event.target.name, {
											boxShadow:
												'0 4px 10px rgba(255, 255, 255, 0.0)',
										});
									}}
									onClick={function () {
										props.setActivePage(element.target);
									}}
								>
									<span>{element.span}</span>
								</button>
							);
						})}
					</div>
				</div>
				{/* <!-- btn container --> */}
			</div>
		</ThemeProvider>
	);
}

export default Edu;
