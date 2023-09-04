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
	aboutButtonSpan,
	fadeTransition,
	aboutBackSkill,
	aboutFrontSkill,
	aboutSkill,
	subSkillBox,
	waveIcon,
	aboutIntroBox,
	aboutTextSub,
} from './Styles';

// ICON
import { WavingHand } from '@mui/icons-material';
// IMAGE
import avesHi from '../assets/aves_hi.png';
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
		<li
			key={index}
			className="aboutBubbleItem"
			style={{ ...aboutBubbleItem, ...aboutFrontSkill }}
		>
			{skill}
		</li>
	));
	const renderedBackendSkills = backendData.map((skill, index) => (
		<li
			key={index}
			className="aboutBubbleItem"
			style={{ ...aboutBubbleItem, ...aboutBackSkill }}
		>
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
						<div id="aboutIntroBox" style={aboutIntroBox}>
							<div id="aboutSubtitle" style={aboutSubtitle}>
								HI, I'M AVERY! <WavingHand sx={waveIcon} />
								{/* TODO: add animation to wave? */}
							</div>
							<div id="aboutText1" style={aboutText}>
								Innovative Business Woman turned Developer
								currently based in Seattle, Washington, with
								over 6 years of professional experience.
							</div>
							<div id="aboutText2" style={aboutText}>
								I'm a Freelancer Front-end React & Full Stack
								Developer working in web development and content
								creation. I enjoy using my marketing knowledge
								to create user friendly UX/UI.
							</div>
							<div id="aboutText3" style={aboutTextSub}>
								Career Changer, Adventurer, Woman in Business,
								Creative Thinker + Web Dev
							</div>
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
						<div
							style={{
								overflow: 'scroll',
								maxHeight: '100%',
							}}
						>
							<div className="techBox" style={techBox}>
								<div
									className="aboutSubtitle"
									style={{ ...skillSubtitle }}
								>
									Front End Skills
								</div>
								<div
									style={{
										...aboutSkill,
									}}
								>
									<div style={{ ...subSkillBox }}>
										{renderedFrontendSkills}
									</div>
								</div>
							</div>
							<div className="skillBox" style={skillBox}>
								<div
									className="aboutSubtitle"
									style={{ ...skillSubtitle }}
								>
									Back End Skills
								</div>
								<div
									style={{
										...aboutSkill,
									}}
								>
									<div
										style={{
											...subSkillBox,
										}}
									>
										{renderedBackendSkills}
									</div>
								</div>
								<div className="aboutBubble"></div>
							</div>
						</div>
					</div>
				</div>

				{/* Buttons to navigate between content sections */}
				<div id="aboutButtonSpan" style={aboutButtonSpan}>
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
