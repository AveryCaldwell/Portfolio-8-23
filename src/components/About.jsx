import * as React from 'react';
// Import styling
import {
	aboutContent,
	aboutTitle,
	techBox,
	aboutBubbleItem,
	skillBox,
	aboutButton,
	aboutText,
	aboutSubtitle,
	skillSubtitle,
	pageContainer,
	buttonSpan,
	fadeTransition,
} from './Styles';

// This function component represents the About section of the web app
function About({ props }) {
	// Arrays containing frontend and backend technology data
	const frontendData = [
		'HTML/CSS',
		'JavaScript',
		'React',
		'Responsive Design',
		'Angular',
		'Vue.js',
		'jQuery',
		'Bootstrap',
		'Material-UI',
		'Foundation',
		'Tailwind CSS',
		'UX/UI',
	];
	const backendData = [
		'Node.js',
		'Express.js, ',
		'MySQL/NoSQL',
		'RESTful/GraphQL',
		'Heroku/Git Pages',
		'Isomnia/Postman',
		'OAuth',
		'MongoDB',
		'Git',
		'Sequelize',
		'JWT, OAuth',
		'Jest',
		'Apollo',
	];
	// Render frontend and backend skills lists
	const renderedFrontendSkills = frontendData.map((skill, index) => (
		<li key={index} className="aboutBubbleItem" style={aboutBubbleItem}>
			{skill}
		</li>
	));
	const renderedBackendSkills = backendData.map((skill, index) => (
		<li key={index} className="aboutBubbleItem" style={aboutBubbleItem}>
			{skill}
		</li>
	));

	// State to manage button styles for hovering
	const [aboutButtonState, setAboutButtonState] = React.useState({
		Introduction: { boxShadow: '0 4px 10px rgba(255, 255, 255, 0.7)' },
		Skills: { boxShadow: '0 4px 10px rgba(255, 255, 255, 0.0)' },
		Landing: { boxShadow: '0 4px 10px rgba(255, 255, 255, 0.0)' },
		Next: { boxShadow: '0 4px 10px rgba(255, 255, 255, 0.0)' },
	});

	// State to manage button styles for hovering
	const aboutButtons = [
		{ target: 'Introduction', span: 'Introduction', name: 'Introduction' },
		{ target: 'Skills', span: 'Skills', name: 'Skills' },
		{ target: 'Landing', span: 'Back', name: 'Landing' },
		{ target: 'Edu', span: 'Next', name: 'Next' },
	];

	// Function to handle button hover animation
	function setAboutHoverButton(name, style) {
		let obj = Object.assign({}, aboutButtonState);
		obj[name] = style;
		setAboutButtonState(obj);
	}

	// State to manage currently active content
	const [aboutContentState, setAboutContentState] =
		React.useState('Introduction');
	// Function to set the active page when a button is clicked
	// function aboutButtonSetActivePage(target) {}

	return (
		<div className="aboutContainer pageContainer" style={pageContainer}>
			<div className="aboutTitle" style={aboutTitle}>
				ABOUT ME
			</div>
			{/* Content Container */}
			<div id="ContentContainer" style={{ marginLeft: '20px' }}>
				{/* About Content Sections */}
				<div className="aboutContent" style={aboutContent}>
					{/* Introduction Section */}
					<div
						id="Introduction"
						style={{
							...{
								opacity:
									aboutContentState === 'Introduction'
										? '1'
										: '0',
							},
							...fadeTransition,
						}}
					>
						{/* Introduction content */}
						<div className="aboutSubtitle" style={aboutSubtitle}>
							TLDR: Career changer, Adventurer, Woman in Business,
							Creative Thinker + Web Dev
						</div>
						<div className="aboutText" style={aboutText}>
							Born & raised in Mississippi. Officially a
							Washingtonian as of October 2022. Now a Full Stack
							Developer & recent grad of University of Washington
							Coding Bootcamp. I also have a Bachelors of Science
							in Marketing from Mississippi College.
						</div>
						<div className="aboutText" style={aboutText}>
							Previously in the Banking industry for six years. My
							analytical skills from working in compliance helps
							me troubleshoot and optimize code effectively, while
							my background in data-driven decision-making ensures
							that my coding choices are both innovative and
							valuable.{' '}
						</div>
						<div className="aboutText" style={aboutText}>
							I offer a unique blend of skills that encompasses
							both interpersonal expertise to full stack
							development proficiency. With a background in
							customer service, I bring strong communication,
							empathy, and problem-solving abilities to the
							table.This enables me to effectively engage with
							clients, understand their needs, and translate those
							insights into impactful solutions. My marketing
							degree equips me with a user-centric mindset,
							allowing me to create web applications that align
							with user needs and preferences. This well-rounded
							combination positions me as an adaptable and
							well-rounded professional, capable of contributing
							meaningfully across various dimensions of a project.
						</div>
						<div className="aboutSubtitle" style={aboutSubtitle}>
							Thanks for reading! - Avery
						</div>
					</div>
					{/* Skills Section */}
					<div
						id="Skills"
						style={{
							...{
								opacity:
									aboutContentState === 'Skills' ? '1' : '0',
							},
							...fadeTransition,
						}}
					>
						{/* Frontend and Backend skills */}
						<div style={{ overflow: 'scroll', maxHeight: '100%' }}>
							<div className="techBox" style={techBox}>
								<div
									className="aboutSubtitle"
									style={skillSubtitle}
								>
									Front End Skills
								</div>
								{renderedFrontendSkills}
							</div>
							<div className="skillBox" style={skillBox}>
								<div
									className="aboutSubtitle"
									style={skillSubtitle}
								>
									Back End Skills
								</div>
								{renderedBackendSkills}
								<div className="aboutBubble"></div>
							</div>
						</div>
					</div>
				</div>

				{/* Buttons to navigate between content sections */}
				<div id="buttonSpan" style={buttonSpan}>
					{aboutButtons.map(function (element, index) {
						return (
							<button
								className="aboutButton"
								key={`aboutButton${index}`}
								name={element.name}
								style={{
									...aboutButton,
									...aboutButtonState[element.name],
								}}
								onMouseEnter={(event) => {
									if (
										event.target.name !== aboutContentState
									) {
										//console.log(event.target.name);
										setAboutHoverButton(event.target.name, {
											boxShadow:
												'0 4px 10px rgba(255, 255, 255, 0.7)',
										});
									}
								}}
								onMouseLeave={(event) => {
									if (
										event.target.name !== aboutContentState
									) {
										setAboutHoverButton(event.target.name, {
											boxShadow:
												'0 4px 10px rgba(255, 255, 255, 0.0)',
										});
									}
								}}
								onClick={function () {
									if (
										element.target === 'Edu' ||
										element.target === 'Landing'
									) {
										props.setActivePage(element.target);
									} else {
										//TODO write logic for changing the data within the about content
										// console.log(
										// 	`This is meant to load the data of ${element.target}`
										// );
										if (
											element.target !== aboutContentState
										) {
											let inactive = 'Introduction';
											let active = 'Skills';
											if (
												element.target ===
												'Introduction'
											) {
												active = 'Introduction';
												inactive = 'Skills';
											}
											let obj = Object.assign(
												{},
												aboutButtonState
											);
											obj[active] = {
												boxShadow:
													'0 4px 10px rgba(255, 255, 255, 0.7)',
											};
											obj[inactive] = {
												boxShadow:
													'0 4px 10px rgba(255, 255, 255, 0.0)',
											};
											setAboutButtonState(obj);
										}
										setAboutContentState(element.target);
									}
								}}
							>
								<span>{element.span}</span>
							</button>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default About;
