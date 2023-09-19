import * as React from 'react';
import {} from './ResponsiveStyles';
import { useMediaQuery } from 'react-responsive';
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
	aboutOverflow,
} from './Styles';
import {
	mobileAboutContent,
	mobileAboutTitle,
	mobileAboutIntroBox,
	mobileAboutText,
	mobileWaveIcon,
	mobileAboutSubtitle,
	mobileAboutButtonSpan,
	mobileSkillSubtitle,
	mobileSubSkillBox,
	mobileAboutBubbleItem,
	mobileAboutSkill,
	mobileAboutButton,
	mobileBox,
	mobilePageContainer,
} from './ResponsiveStyles';
// ICON
import { WavingHand } from '@mui/icons-material';
// This function component represents the About section of the web app
function About({ props }) {
	// RESPONSIVE DESIGN
	const isMobile = useMediaQuery({ query: '(max-width: 800px)' });
	const responsiveAboutBubbleItem = isMobile
		? mobileAboutBubbleItem
		: aboutBubbleItem;
	// const responsiveAboutContainer = isMobile
	// 	? mobileAboutContainer
	// 	: pageContainer;
	const responsiveAboutContent = isMobile ? mobileAboutContent : aboutContent;
	const responsiveAboutTitle = isMobile ? mobileAboutTitle : aboutTitle;
	const responsiveAboutIntroBox = isMobile
		? mobileAboutIntroBox
		: aboutIntroBox;
	const responsiveAboutText = isMobile ? mobileAboutText : aboutText;
	const responsiveWaveIcon = isMobile ? mobileWaveIcon : waveIcon;

	const responsiveAboutSubtitle = isMobile
		? mobileAboutSubtitle
		: aboutSubtitle;
	const responsiveAboutButtonSpan = isMobile
		? mobileAboutButtonSpan
		: aboutButtonSpan;
	const responsiveTechBox = isMobile ? mobileBox : techBox;
	const responsiveSkillSubtitle = isMobile
		? mobileSkillSubtitle
		: skillSubtitle;
	const responsiveSkillBox = isMobile ? mobileBox : skillBox;
	const responsiveSubSkillBox = isMobile ? mobileSubSkillBox : subSkillBox;
	const responsiveAboutSkill = isMobile ? mobileAboutSkill : aboutSkill;
	const responsiveAboutButton = isMobile ? mobileAboutButton : aboutButton;
	const responsivePageContainer = isMobile
		? mobilePageContainer
		: pageContainer;
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
			style={{ ...responsiveAboutBubbleItem, ...aboutFrontSkill }}
		>
			{skill}
		</li>
	));
	const renderedBackendSkills = backendData.map((skill, index) => (
		<li
			key={index}
			className="aboutBubbleItem"
			style={{ ...responsiveAboutBubbleItem, ...aboutBackSkill }}
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
		<div
			className="aboutContainer pageContainer"
			// style={pageContainer}
			style={responsivePageContainer}
		>
			<div className="aboutTitle" style={responsiveAboutTitle}>
				ABOUT ME
			</div>
			{/* Content Container */}
			<div id="ContentContainer" style={{ marginLeft: '20px' }}>
				{/* About Content Sections */}
				<div className="aboutContent" style={responsiveAboutContent}>
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
						<div id="aboutIntroBox" style={responsiveAboutIntroBox}>
							<div
								id="aboutSubtitle"
								style={responsiveAboutSubtitle}
							>
								HI, I'M AVERY!{' '}
								<WavingHand sx={responsiveWaveIcon} />
								{/* TODO: add animation to wave? */}
							</div>
							<div id="aboutText1" style={responsiveAboutText}>
								Innovative Business Woman turned Developer
								currently based in Seattle, Washington, with
								over 6 years of professional experience.
							</div>
							<div id="aboutText2" style={responsiveAboutText}>
								I'm a Freelancer Front-end React & Full Stack
								Developer working in web development and content
								creation. I enjoy using my marketing knowledge
								to create user friendly UX/UI.
							</div>
							<div id="aboutText3" style={responsiveAboutText}>
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
						<div style={aboutOverflow}>
							<div className="techBox" style={responsiveTechBox}>
								<div
									className="aboutSubtitle"
									style={responsiveSkillSubtitle}
								>
									Front End Skills
								</div>
								<div style={responsiveAboutSkill}>
									<div style={responsiveSubSkillBox}>
										{renderedFrontendSkills}
									</div>
								</div>
							</div>
							<div
								className="skillBox"
								style={responsiveSkillBox}
							>
								<div
									className="aboutSubtitle"
									style={responsiveSkillSubtitle}
								>
									Back End Skills
								</div>
								<div style={responsiveAboutSkill}>
									<div style={responsiveSubSkillBox}>
										{renderedBackendSkills}
									</div>
								</div>
								<div className="aboutBubble"></div>
							</div>
						</div>
					</div>
				</div>

				{/* Buttons to navigate between content sections */}
				<div id="aboutButtonSpan" style={responsiveAboutButtonSpan}>
					{aboutButtons.map(function (element, index) {
						return (
							<button
								className="aboutButton"
								key={`aboutButton${index}`}
								name={element.name}
								style={{
									...responsiveAboutButton,
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
