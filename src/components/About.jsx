import * as React from 'react';
import * as Material from '@mui/material';
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
} from './Styles-Theme';

// ICON
import { WavingHand } from '@mui/icons-material';
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
		<Material.List
			key={index}
			className="aboutBubbleItem"
			sx={{ ...aboutBubbleItem, ...aboutFrontSkill }}
		>
			<Material.ListItem>{skill}</Material.ListItem>
		</Material.List>
	));
	const renderedBackendSkills = backendData.map((skill, index) => (
		<Material.List
			key={index}
			className="aboutBubbleItem"
			sx={{ ...aboutBubbleItem, ...aboutBackSkill }}
		>
			<Material.ListItem>{skill}</Material.ListItem>
		</Material.List>
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
		<Material.Box
			className="aboutContainer pageContainer"
			sx={pageContainer}
		>
			<Material.Box className="aboutTitle" sx={aboutTitle}>
				ABOUT ME
			</Material.Box>
			{/* Content Container */}
			<Material.Box id="ContentContainer" sx={{ marginLeft: '20px' }}>
				{/* About Content Sections */}
				<Material.Box className="aboutContent" sx={aboutContent}>
					{/* Introduction Section */}
					<Material.Box
						id="Introduction"
						sx={{
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
						<Material.Box id="aboutIntroBox" sx={aboutIntroBox}>
							<Material.Typography
								id="aboutSubtitle"
								sx={aboutSubtitle}
							>
								HI, I'M AVERY! <WavingHand sx={waveIcon} />
								{/* TODO: add animation to wave? */}
							</Material.Typography>
							<Material.Typography id="aboutText1" sx={aboutText}>
								Innovative Business Woman turned Developer
								currently based in Seattle, Washington, with
								over 6 years of professional experience.
							</Material.Typography>
							<Material.Typography id="aboutText2" sx={aboutText}>
								I'm a Freelancer Front-end React & Full Stack
								Developer working in web development and content
								creation. I enjoy using my marketing knowledge
								to create user friendly UX/UI.
							</Material.Typography>
							<Material.Typography id="aboutText3" sx={aboutText}>
								Career Changer, Adventurer, Woman in Business,
								Creative Thinker + Web Dev
							</Material.Typography>
						</Material.Box>
					</Material.Box>
					{/* Skills Section */}
					<Material.Box
						id="Skills"
						sx={{
							...{
								opacity:
									aboutContentState === 'Skills' ? '1' : '0',
							},
							...fadeTransition,
						}}
					>
						{/* Frontend and Backend skills */}
						<Material.Box sx={aboutOverflow}>
							<Material.Box className="techBox" sx={techBox}>
								<Material.Typography
									className="aboutSubtitle"
									sx={skillSubtitle}
								>
									Front End Skills
								</Material.Typography>
								<Material.Box sx={aboutSkill}>
									<Material.Typography sx={subSkillBox}>
										{renderedFrontendSkills}
									</Material.Typography>
								</Material.Box>
							</Material.Box>
							<Material.Box className="skillBox" sx={skillBox}>
								<Material.Typography
									className="aboutSubtitle"
									sx={skillSubtitle}
								>
									Back End Skills
								</Material.Typography>
								<Material.Box sx={aboutSkill}>
									<Material.Typography sx={subSkillBox}>
										{renderedBackendSkills}
									</Material.Typography>
								</Material.Box>
								<Material.Typography className="aboutBubble"></Material.Typography>
							</Material.Box>
						</Material.Box>
					</Material.Box>
				</Material.Box>

				{/* Buttons to navigate between content sections */}
				<Material.Box id="aboutButtonSpan" sx={aboutButtonSpan}>
					{aboutButtons.map(function (element, index) {
						return (
							<Material.Button
								className="aboutButton"
								key={`aboutButton${index}`}
								name={element.name}
								sx={{
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
								<Material.Typography>
									{element.span}
								</Material.Typography>
							</Material.Button>
						);
					})}
				</Material.Box>
			</Material.Box>
		</Material.Box>
	);
}

export default About;
