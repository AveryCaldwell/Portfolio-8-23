import React, { useEffect, useState } from 'react'; // Importing useEffect and useRef
import { ThemeProvider } from '@emotion/react';
import theme from '../theme';
// import * as Material from '@mui/material';
import anime from 'animejs/lib/anime.es.js';
import CYCU from '../assets/CYCU.png';
import MC from '../assets/MC.png';
import UW from '../assets/UW.png';
import {
	orbitalContainer,
	orbitalBox,
	cardContainer,
	eduTitle,
	eduHeader,
	eduSlideshow,
	eduImage,
	eduBtn,
	eduBtnContainer,
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
import SchoolIcon from '@mui/icons-material/School';
function ImageIconRender({ props }) {
	// React.useEffect(() => {
	// 	setEducationState(activeRotator.current);
	// 	console.log(educationState);
	// }, [activeRotator.current]); // Empty dependency array means this effect will run after initial render
	//console.log(educationState);
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
// This function renders main content of web app
function EduCard({ props }) {
	return (
		<ThemeProvider theme={theme}>
			<div className="cardContainer" style={cardContainer}>
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
				<div id="eduSlideshow" style={eduSlideshow}>
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
function Edu({ props }) {
	//array of pages

	// sets the active page shown
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

	// Education Orbit animation
	//const [rotatorState, setRotatorState] = useState(0);
	let currentPosition = {
		object1: 0,
		object2: 1 / 3,
		object3: 2 / 3,
	};
	const rotationTime = 9000;
	function experienceRotation(endDeg, target, speedOverride) {
		if (endDeg > 100) {
			endDeg = 100;
		}
		const fullRotation = rotationTime;
		const distTravel = endDeg - currentPosition[target];
		const duration = Math.abs(distTravel * (fullRotation / 100));
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
		if (endDeg === 100) {
			currentPosition[target] = 0;
		} else {
			currentPosition[target] = endDeg;
		}
	}
	let currentOrbit = {
		1: 1,
		2: 2,
		3: 3,
	};
	let nextOrbitDeg = {
		1: (1 / 3) * 100,
		2: (2 / 3) * 100,
		3: 100,
	};
	function nextOrbit(target) {
		experienceRotation(
			nextOrbitDeg[currentOrbit[target]],
			`object${target}`
		);
		if (currentOrbit[target] === 3) {
			currentOrbit[target] = 1;
		} else {
			currentOrbit[target] += 1;
		}
	}
	let orbit;
	let stopRotator;
	function constantOrbit() {
		//clearInterval(orbit);
		orbitting = true;
		nextOrbit(1);
		nextOrbit(2);
		nextOrbit(3);
		if (orbit === undefined) {
			orbit = setInterval(function () {
				nextOrbit(1);
				nextOrbit(2);
				nextOrbit(3);
			}, rotationTime / 3);
		}
	}
	function initializeRotator() {
		//clearInterval(orbit);
		experienceRotation((1 / 3) * 100, 'object2', 1);
		experienceRotation((2 / 3) * 100, 'object3', 1);
		document.getElementsByClassName(
			'orbitalContainer'
		)[0].style.opacity = 1;
		constantOrbit();
	}
	let orbitting = false;
	const [educationState, setEducationState] = useState(0);
	function rotatorClick(target) {
		setEducationState(target);
	}

	useEffect(() => {
		initializeRotator();
	}, []); // Empty dependency array means this effect will run after initial render
	const [eduButtonState, setEduButtonState] = React.useState({
		About: { boxShadow: '0 4px 10px rgba(255, 255, 255, 0.0)' },
		Projects: { boxShadow: '0 4px 10px rgba(255, 255, 255, 0.0)' },
	});
	//TODO: Make it so the introduction button highlights and then it is based off of the current active about content
	const eduButtons = [
		{ target: 'About', span: 'Back', name: 'About' },
		{ target: 'Projects', span: 'Next', name: 'Projects' },
	];
	function setEduHoverButton(name, style) {
		let obj = Object.assign({}, eduButtonState);
		obj[name] = style;
		setEduButtonState(obj);
	}
	return (
		<ThemeProvider theme={theme}>
			<div className="eduContainer pageContainer" style={pageContainer}>
				<div style={{ width: '50%', marginLeft: '100px' }}>
					<h1 className="eduTitle" style={eduTitle}>
						EDUCATION
					</h1>
					<div className="orbitalContainer" style={orbitalContainer}>
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
										//console.log(event.target.name);
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
