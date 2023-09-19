import React, { useEffect, useState } from 'react'; // Importing useEffect and useRef
import * as Material from '@mui/material';
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
} from './Styles-Theme';

// ICON
import { School } from '@mui/icons-material';

// Function to render inBoxidual education images
function ImageIconRender({ props }) {
	return (
		<Material.ImageListItem>
			<img
				src={props.element.src}
				className="eduImage"
				alt={props.element.name}
				sx={
					props.index === props.educationState
						? { ...eduImage, ...eduImageActive }
						: {
								...eduImage,
								...eduImageInactive,
						  }
				}
			/>
		</Material.ImageListItem>
	);
}
// Function to render educational card
function EduCard({ props }) {
	// const isMobile = useMediaQuery({ query: '(max-width: 800px)' });
	// const responsiveCardContainer = isMobile
	// 	? mobileCardContainer
	// 	: cardContainer;

	return (
		<ThemeProvider theme={theme}>
			<Material.Box className="cardContainer" sx={cardContainer}>
				{/* Mapping through EducationArr to render education cards */}
				{props.EducationArr.map(function (element, index) {
					return (
						<Material.Box
							className={`eduCard${index} square`}
							onClick={() => props.rotatorClick(index)}
							key={`eduCard${index}`}
							sx={
								props.educationState === index
									? eduCardActive
									: eduCardInactive
							}
						>
							<Material.Box
								className="eduHeader"
								onClick={() => props.setEducationState(index)}
								sx={eduHeader}
							>
								{element.name}
							</Material.Box>
						</Material.Box>
					);
				})}

				<Material.Typography sx={eduDescriptionHeader}>
					ACCOLADES <School />
				</Material.Typography>
				{/* Education description slideshow */}
				<Material.Box id="eduSlideshow" sx={eduSlideshow}>
					{/* Mapping through EducationArr to render education descriptions */}
					{props.EducationArr.map(function (element, index) {
						return (
							<Material.Box
								className={`${
									props.educationState === index
										? `myEduActive`
										: `myEduInactive`
								}`}
								key={`myEdu${index}`}
								sx={
									props.educationState === index
										? myEduActive
										: myEduInactive
								}
							>
								<Material.Box className="numbertext">
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
								</Material.Box>
							</Material.Box>
						);
					})}
				</Material.Box>
				{/* <!-- eduSlideshow --> */}
			</Material.Box>
		</ThemeProvider>
	);
}

// Main Edu component
function Edu({ props }) {
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
				// 'Delta Mu Delta, Epsilon Iota Delta, Omicron Delta Kappa',
			],
		},
		{
			name: 'Chung Yuan Christian University',
			src: CYCU,
			description: [
				'Taipei, Taiwan',
				'Summer Business Program 2015',
				'Certificate of Completion',
				'GPA: 4.0/4.0',
				'1 of 3 students chosen',
			],
		},
		{
			name: 'University of Washington',
			src: UW,
			description: [
				'Coding Bootcamp',
				'Full Stack Developer',
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
		document.getElementsByClassName('orbitalContainer')[0].sx.opacity = 1;
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
	function setEduHoverButton(name, sx) {
		let obj = Object.assign({}, eduButtonState);
		obj[name] = sx;
		setEduButtonState(obj);
	}
	// Component rendering
	return (
		<ThemeProvider theme={theme}>
			<Material.Box
				className="eduContainer pageContainer"
				sx={pageContainer}
			>
				{/* Education content */}
				<Material.Box sx={{ width: '50%', marginLeft: '100px' }}>
					<Material.Typography
						component="h1"
						className="eduTitle"
						sx={eduTitle}
					>
						EDUCATION
					</Material.Typography>
					<Material.Box
						className="orbitalContainer"
						sx={orbitalContainer}
					>
						{/* Mapping through EducationArr to render orbital boxes */}
						{EducationArr.map(function (element, index) {
							return (
								<Material.Box
									id={`object${index + 1}`}
									key={`object${index + 1}`}
									className={'orbitalBox'}
									onClick={() => rotatorClick(index)}
									sx={orbitalBox}
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
								</Material.Box>
							);
						})}
					</Material.Box>
				</Material.Box>
				{/* <!-- cardContainer --> */}
				<Material.Box>
					<EduCard
						props={{
							setEducationState: setEducationState,
							educationState: educationState,
							EducationArr: EducationArr,
							rotatorClick: rotatorClick,
						}}
					/>

					<Material.Box id="eduButtonSpan" sx={eduButtonSpan}>
						{eduButtons.map(function (element, index) {
							return (
								<Material.Button
									className="eduButton"
									key={`eduButton${index}`}
									name={element.name}
									sx={{
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
									<Material.Typography>
										{element.span}
									</Material.Typography>
								</Material.Button>
							);
						})}
					</Material.Box>
				</Material.Box>
				{/* <!-- btn container --> */}
			</Material.Box>
		</ThemeProvider>
	);
}

export default Edu;
