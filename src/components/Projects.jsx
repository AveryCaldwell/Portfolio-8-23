// Import necessary libraries and styles
import React, { useRef, useEffect, useState } from 'react';
import anime from 'animejs'; // Import anime.js library
// import * as Material from '@mui/material';

// STYLING
import {
	svgContainer,
	svgCord,
	animateSvgStroke1,
	svgButton,
	pageContainer,
	projectTitle,
	projectContent,
	textSlideshow,
	projectSlides,
	github,
	iconContainer,
	slideTitle,
	arrows,
	fade,
	next,
	computerContainer,
	computer,
	mySlides,
	computerImage,
	prev,
	projectsButtonSpan,
	projectsButton,
} from './Styles';

// Import images and icons
import Tech from '../assets/Tech.png';
import Weather from '../assets/Weather.png';
import Team from '../assets/Weather.png';
import WYW from '../assets/WYW.png';
import buds from '../assets/buds.png';
import CC from '../assets/CC.png';
import Employee from '../assets/Employee.png';
import comp from '../assets/comp.png';
// ICON
import GitHubIcon from '@mui/icons-material/GitHub';
// import SvgContainer from './SvgContainer';

// This function renders the PROJECT content of web app
function Projects({ props }) {
	// Ref for SVG animation
	const svgPathRef = useRef(null);

	// Function to animate SVG stroke
	const animateSvgStroke = () => {
		//let direction;
		const animeProps = {
			targets: svgPathRef.current,
			strokeDashoffset: [anime.setDashoffset, 0],
			easing: 'cubicBezier(0.47, 0, 0.745, 0.715)',
			duration: 1200,
		};
		if (!props.currentCordState) {
			animeProps.direction = 'reverse';
		}
		anime(animeProps);
	};
	// Trigger animation on component mount
	useEffect(() => {
		//console.log('fired');
		animateSvgStroke();
	}, [props.currentCordState]); // Empty dependency array to run once after initial render

	// Trigger animation on component mount
	const projects = [
		{
			title: '🍽️ TasteBuds',
			description:
				'A social media app that allows users to never dine alone again! This app allows the user to create a profile, see other users posts, create posts, and join other events!',
			technologies:
				'Technologies: Tailwind, React, MERN stack, Node.js/Express.js, Apollo, GraphQL, MongoDb, Mongoose, GitHub, Heroku',
			githubLink: 'https://github.com/AveryCaldwell/TasteBuds',
			image: buds,
		},
		{
			title: '🌎 WearYouWander',
			description:
				'An application that analyzes the weather and suggests which type of outerwear would be most suitable.',
			technologies:
				'Technologies: HTML, CSS, JavaScript, Foundation Framework, jQuery, Server Side APIs, Node.js/Express.js, Git Pages',
			githubLink: 'https://github.com/AveryCaldwell/WearYouWander',
			image: WYW,
		},
		{
			title: '🍻 Cheers Check',
			description:
				'A new liquor inventory application - the perfect tool for anyone who enjoys keeping track of their favorite spirits! You can easily organize your liquor collection, keep track of what you have on hand, and share it with your friends.',
			technologies:
				'Technologies: Bootstrap, HTML, CSS, JavaScript, MySql, Sequelize, Handlebars.js, Node.js/Express.js, Dotenv, Bycrypt, JSHint, Anime.js, Heroku',
			githubLink: 'https://github.com/AveryCaldwell/CheersCheck',
			image: CC,
		},
		{
			title: '📋 Team Profile Generator',
			description:
				"An application that generates a webpage that displays a team's basic info for quick access to emails and GitHub profiles",
			technologies:
				'Technologies: HTML, CSS, JavaScript, Node.js, Inquierer, Jest',
			githubLink:
				'https://github.com/AveryCaldwell/Team-Profile-Generator',
			image: Team,
		},
		{
			title: '🖥️ Tech Blog MVC',
			description:
				'CMS-style blog site where developers can publish their blog posts & comment on other developers’ posts as well. Using Handlebars.js as the templating language, Sequelize as the ORM, and express-session npm package for authentication.',
			technologies:
				'Technologies:  HTML, CSS, Bootstrap, JavaScript, MySQL, Sequelize, Handlebars.js, Node.js, Express, Dotenv,Bycrypt, Heroku',
			githubLink: 'https://github.com/AveryCaldwell/Tech-Blog-MVC',
			image: Tech,
		},
		{
			title: '🌦️ Weather Dashboard API',
			description:
				'A weather app that includes a search option, a list of cities, and a five-day forecast and current weather conditions for any city.',
			technologies:
				'Technologies: HTML, CSS, JavaScript, Node.js, MySQL, Inquirer, console.table',
			githubLink:
				'https://github.com/AveryCaldwell/weather-dashboard-API',
			image: Weather,
		},
		{
			title: '💼 Employee Tracker',
			description:
				"A command-line application that manages a company's employee database, using Node.js, Inquirer, and MySQL.",
			technologies:
				'Technologies: Tailwind, React, MERN stack, Node.js/Express.js, Apollo, GraphQL, MongoDb, Mongoose, GitHub, Heroku',
			githubLink: 'https://github.com/AveryCaldwell/Employee-Tracker',
			image: Employee,
		},
	];

	// State to manage slide index
	const [slideIndex, setSlideIndex] = useState(0);

	// Function to change slide index
	const plusSlides = (n) => {
		setSlideIndex(
			(prevIndex) => (prevIndex + n + projects.length) % projects.length
		);
	};

	// Function to set current slide
	const currentSlide = (n) => {
		setSlideIndex(n);
	};

	const [projectsButtonState, setProjectsButtonState] = React.useState({
		Edu: { boxShadow: '0 4px 10px rgba(255, 255, 255, 0.0)' },
		Resume: { boxShadow: '0 4px 10px rgba(255, 255, 255, 0.0)' },
	});
	const projectsButtons = [
		{
			target: 'GitHub',
			span: <GitHubIcon style={github} />,
			name: 'GitHub',
		},
		{ target: 'Edu', span: 'Back', name: 'Edu' },
		{ target: 'Resume', span: 'Next', name: 'Resume' },
	];
	function setProjectsHoverButton(name, style) {
		let obj = Object.assign({}, projectsButtonState);
		obj[name] = style;
		setProjectsButtonState(obj);
	}
	return (
		<>
			<div
				className="projectContainer pageContainer"
				style={pageContainer}
			>
				<div style={{ width: '500px' }}>
					<h1 className="projectTitle" style={projectTitle}>
						PROJECTS
					</h1>
					{/* Slideshow */}
					<div className="projectContent" style={projectContent}>
						<div className="textSlideshow" style={textSlideshow}>
							{projects.map((project, index) => (
								// Project slide
								<div
									key={index}
									className={`projectSlides fade ${
										index === slideIndex ? 'active' : ''
									}`}
									style={{
										...fade,
										...projectSlides,
										display:
											index === slideIndex
												? 'block'
												: 'none',
									}}
								>
									{/* Slide Title */}
									<div
										id="slideTitle"
										className="numbertext"
										style={slideTitle}
									>
										{project.title}
									</div>
									{/* Project Details */}
									<div className="projectDetails">
										<p>{project.description}</p>
										<p>{project.technologies}</p>
										{/* Icons */}
										<div
											className="iconContainer"
											style={iconContainer}
										></div>
									</div>
								</div>
							))}
						</div>
					</div>
					{/* Buttons */}
					<div id="projectsButtonSpan" style={projectsButtonSpan}>
						{/* Other Buttons */}
						{projectsButtons.map(function (element, index) {
							return (
								<button
									className="projectsButton"
									key={`projectsButton${index}`}
									name={element.name}
									style={{
										...projectsButton,
										...projectsButtonState[element.name],
									}}
									onMouseEnter={(event) => {
										setProjectsHoverButton(
											event.target.name,
											{
												boxShadow:
													'0 4px 10px rgba(255, 255, 255, 0.7)',
											}
										);
									}}
									onMouseLeave={(event) => {
										setProjectsHoverButton(
											event.target.name,
											{
												boxShadow:
													'0 4px 10px rgba(255, 255, 255, 0.0)',
											}
										);
									}}
									onClick={function () {
										if (element.target === 'GitHub') {
											window.open(
												projects[slideIndex].githubLink,
												'_blank' // <- This is what makes it open in a new window.
											);
											setProjectsHoverButton(
												element.target,
												{
													boxShadow:
														'0 4px 10px rgba(255, 255, 255, 0.0)',
												}
											);
										} else {
											props.setActivePage(element.target);
										}
									}}
								>
									<span>{element.span}</span>
								</button>
							);
						})}
					</div>
				</div>

				{/* Computer and Slideshow */}
				<div className="computerContainer" style={computerContainer}>
					<div className="slideshowContainer">
						{projects.map((project, index) => (
							<div
								key={index}
								className={`mySlides fade ${
									index === slideIndex ? 'active' : ''
								}`}
								style={{
									...fade,
									...mySlides,
									display:
										index === slideIndex ? 'block' : 'none',
								}}
							>
								<img
									src={project.image}
									style={computerImage}
									alt={`Slide ${index + 1}`}
								/>
							</div>
						))}

						{/* Next & previous buttons */}
						<a
							className="prev"
							style={{ ...arrows, ...prev }}
							onClick={() => plusSlides(1)}
						>
							❮
						</a>
						<a
							className="next"
							style={{ ...arrows, ...next }}
							onClick={() => plusSlides(1)}
						>
							❯
						</a>
					</div>
					<img
						src={comp}
						alt="comp"
						className="computer"
						style={computer}
					/>
				</div>
			</div>

			{/* SVG Container */}
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
						style={animateSvgStroke1} // Apply the animateSvgStroke1 styling
					/>
				</svg>
			</div>
		</>
	);
}

export default Projects;
