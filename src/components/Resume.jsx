import React, { useState, useEffect, useRef } from 'react';
import CodeSnippet from './CodeSnippet'; // Import the CodeSnippet component
import resumeJSON from '../assets/resume.json';
import { GitHub, OpenInBrowser } from '@mui/icons-material/';
import * as Material from '@mui/material';
// STYLING
import {
	resumeContainer,
	pageContainer,
	resumeTitle,
	typingContainer,
	typedText,
	codeBox,
	resumePlainText,
	codeContent,
	resumeButton,
	resumeButtonSpan,
	resumeBox,
} from './Styles-Theme';
/*this needs to be absolutely clean */
function RenderedText({ props }) {
	const styles = {
		containerHeaders: {
			textAlign: 'center',
		},
		renderedTextContainer: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
		},
		contentContainer: {
			textShadow: '1px 1px rgba(0,0,0,0.3)',
		},
		contentBox: {
			display: 'flex',
			flexDirection: 'column',
			border: '1px solid white',
			borderRadius: 5,
			overflow: 'hidden',
			paddingBottom: 20,
			marginBottom: 20,
			background: 'rgba(255,255,255,0.1)',
		},
		contentTitleRow: {
			display: 'flex',
			background:
				'linear-gradient(90deg, rgba(228,161,205,0.18) 0%, rgba(157,228,245,0.3) 100%)',
			padding: '15px 25px 15px 25px',
			justifyContent: 'space-between',
		},

		centerAlign: {
			alignItems: 'center',
		},

		flexRow: {
			flexDirection: 'row',
		},
		flexColumn: {
			flexDirection: 'column',
		},
		titleRow: {
			display: 'flex',
			justifyContent: 'space-between',
		},
		contentDetailsBox: {
			paddingLeft: 45,
			paddingRight: 45,
		},
		boxSize: {
			width: 700,
		},
		experienceDetailsBox: {
			textAlign: 'left',
		},
		skillBox: {
			width: 900,
		},
		subSkillBox: {
			width: 600,
		},
		skillFlex: {
			display: 'flex',
			flexWrap: 'wrap',
			alignItems: 'center',
			justifyContent: 'center',
		},
		skill: {
			border: '1px solid white',
			padding: 10,
			margin: 5,
			borderRadius: 5,
		},
		personalSkill: {
			background: 'rgba(228,161,205,0.18)',
		},
		techSkill: {
			background: 'rgba(157,228,245,0.18)',
		},
		lighter: {
			fontWeight: 'lighter',
		},
		bold: {
			fontWeight: 'bold',
		},
		titleBarIcon: {
			fontSize: 32,
			marginLeft: 10,
			cursor: 'pointer',
		},
		contactInfo: {
			margin: 5,
		},
		contactBox: {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'space-around',
			marginTop: 20,
		},
		contactSubBox: {
			display: 'flex',
			flexDirection: 'column',
			width: '50%',
		},
	};
	// Function that opens the resume in a new browser window
	const openLink = function (link) {
		window.open(`https://${link}`, '_blank');
	};
	return (
		<>
			{/* Main container div */}
			<Material.Box
				sx={{
					...styles.containerHeaders,
					...styles.renderedTextContainer,
				}}
			>
				<Material.Box id="renderHeader">
					{/* Header section */}
					<Material.Typography>
						{resumeJSON.header.name}
					</Material.Typography>
					<Material.Box
						sx={{
							...styles.contentBox,
							...styles.boxSize,
						}}
					>
						<Material.Box
							sx={{
								...styles.contentTitleRow,
								...styles.centerAlign,
								...styles.bold,
							}}
						>
							<Material.Box>
								{resumeJSON.header.title}
							</Material.Box>
							<Material.Box>
								{/* Icons for GitHub and website */}
								<GitHub
									onClick={() =>
										openLink(resumeJSON.header.github)
									}
									sx={styles.titleBarIcon}
								/>
								<OpenInBrowser
									onClick={() =>
										openLink(resumeJSON.header.site)
									}
									sx={styles.titleBarIcon}
								/>
							</Material.Box>
						</Material.Box>
						<Material.Box
							sx={{
								...styles.contentDetailsBox,
								...styles.experienceDetailsBox,
								...styles.lighter,
							}}
						>
							<Material.Box sx={styles.contactBox}>
								<Material.Box sx={styles.contactSubBox}>
									{/* Contact information */}
									<p style={styles.contactInfo}>
										<strong>Location:</strong> <br />
										{resumeJSON.header.location}
									</p>
									<p style={styles.contactInfo}>
										<strong>Phone:</strong> <br />
										{resumeJSON.header.phone}
									</p>
									<p style={styles.contactInfo}>
										<strong>Portfolio:</strong> <br />
										{resumeJSON.header.site}
									</p>
								</Material.Box>
								<Material.Box sx={styles.contactSubBox}>
									<p style={styles.contactInfo}>
										<strong>Email: </strong>
										<br />
										{resumeJSON.header.email}
									</p>
									<p style={styles.contactInfo}>
										<strong>GitHub:</strong> <br />
										{resumeJSON.header.github}
									</p>
									<p style={styles.contactInfo}>
										<strong>LinkedIn:</strong> <br />
										{resumeJSON.header.linkedin}
									</p>
								</Material.Box>
							</Material.Box>
							{/* Summary section */}
							<h2>Summary</h2>
							<p>{resumeJSON.summary.text}</p>
						</Material.Box>
					</Material.Box>
				</Material.Box>
				<Material.Box id="renderSummary"></Material.Box>
				<Material.Box>
					{/* Education section title */}
					<h2>Education</h2>
					<Material.Box
						sx={{
							...styles.renderedTextContainer,
							...styles.contentContainer,
						}}
					>
						{/* Map through the 'education' array from 'resumeJSON' */}
						{resumeJSON.education.map(function (element, index) {
							return (
								<Material.Box
									key={`education${index}`}
									sx={{
										...styles.contentBox,
										...styles.boxSize,
									}}
								>
									<Material.Box
										sx={{
											...styles.contentTitleRow,
											...styles.flexRow,
											...styles.bold,
										}}
									>
										{/* Education title and date */}
										<Material.Box>
											{element.title}
										</Material.Box>
										<Material.Box>
											{element.date}
										</Material.Box>
									</Material.Box>
									<Material.Box
										sx={{
											...styles.contentDetailsBox,
											...styles.lighter,
										}}
									>
										{/* School name and overview */}
										<p>
											<strong>{element.school}</strong>
										</p>
										<p>{element.overview}</p>
									</Material.Box>
								</Material.Box>
							);
						})}
					</Material.Box>
				</Material.Box>
				<Material.Box>
					{/* Technical Skills section */}
					<h2>{resumeJSON.technicalSkills.title}</h2>
					<Material.Box
						sx={{ ...styles.skillBox, ...styles.skillFlex }}
					>
						{/* Map through the 'values' array within 'technicalSkills' */}
						{resumeJSON.technicalSkills.values.map(function (
							element,
							index
						) {
							return (
								<Material.Box
									key={`techSkill${index}`}
									sx={{
										...styles.skill,
										...styles.lighter,
										...styles.techSkill,
									}}
								>
									{element}
								</Material.Box>
							);
						})}
					</Material.Box>
				</Material.Box>
				<Material.Box>
					{/* Personal Skills section */}
					<h2>{resumeJSON.personalSkills.title}</h2>
					<Material.Box
						sx={{ ...styles.skillBox, ...styles.skillFlex }}
					>
						{/* Map through the 'values' array within 'personalSkills' */}
						{resumeJSON.personalSkills.values.map(function (
							element,
							index
						) {
							return (
								<Material.Box
									key={`personalSkill${index}`}
									sx={{
										...styles.skill,
										...styles.lighter,
										...styles.personalSkill,
									}}
								>
									{element}
								</Material.Box>
							);
						})}
					</Material.Box>
				</Material.Box>

				<Material.Box>
					{/* Experience section title */}
					<h2>Experience</h2>
					<Material.Box
						sx={{
							...styles.contentContainer,
							...styles.renderedTextContainer,
						}}
					>
						{/* Map through the 'experience' array from 'resumeJSON' */}
						{resumeJSON.experience.map(function (element, index) {
							return (
								<Material.Box
									key={`experience${index}`}
									sx={{
										...styles.contentBox,
										...styles.boxSize,
									}}
								>
									<Material.Box
										sx={{
											...styles.contentTitleRow,
											...styles.flexColumn,
										}}
									>
										<Material.Box
											sx={{
												...styles.titleRow,
												...styles.flexRow,
												...styles.bold,
											}}
										>
											{/* Experience title and date */}
											<Material.Box>
												{element.title}
											</Material.Box>
											<Material.Box>
												{element.date}
											</Material.Box>
										</Material.Box>
										<Material.Box
											sx={{
												...styles.titleRow,
												...styles.flexRow,
												...styles.lighter,
											}}
										>
											{/* Employer and location */}
											<Material.Box>
												{element.employer}
											</Material.Box>
											<Material.Box>
												{element.location}
											</Material.Box>
										</Material.Box>
									</Material.Box>

									<Material.Box
										sx={{
											...styles.contentDetailsBox,
											...styles.experienceDetailsBox,
										}}
									>
										{/* Responsibilities */}
										<h4>Responsibilities:</h4>
										{element.responsibilities.map(function (
											responsibility,
											responsibilityIndex
										) {
											return (
												<p
													key={`responsibility-${index}-${responsibilityIndex}`}
													style={styles.lighter}
												>
													&#x2022; {responsibility}
												</p>
											);
										})}
									</Material.Box>
									<Material.Box
										sx={{
											...styles.contentDetailsBox,
											...styles.experienceDetailsBox,
										}}
									>
										{/* Key Accomplishments */}
										<h4>Key Accomplishments:</h4>
										{element.accomplishments.map(function (
											accomplishment,
											accomplishmentIndex
										) {
											return (
												<p
													key={`accomplishment-${index}-${accomplishmentIndex}`}
													style={styles.lighter}
												>
													&#x2022; {accomplishment}
												</p>
											);
										})}
									</Material.Box>
								</Material.Box>
							);
						})}
					</Material.Box>
				</Material.Box>
				<Material.Box>
					<h2>Projects</h2>
					<Material.Box
						sx={{
							...styles.contentContainer,
							...styles.renderedTextContainer,
						}}
					>
						{/* Map through the 'projects' array from 'resumeJSON' */}
						{resumeJSON.projects.map(function (element, index) {
							return (
								<Material.Box
									key={`experience${index}`}
									sx={{
										...styles.contentBox,
										...styles.boxSize,
									}}
								>
									<Material.Box
										sx={{
											...styles.contentTitleRow,
											...styles.centerAlign,
											...styles.bold,
										}}
									>
										{/* Project title */}
										<Material.Box>
											{element.title}
										</Material.Box>
										<Material.Box>
											{/* Icons for GitHub and website */}
											<GitHub
												onClick={() =>
													openLink(element.github)
												}
												sx={styles.titleBarIcon}
											/>
											<OpenInBrowser
												onClick={() =>
													openLink(element.site)
												}
												sx={styles.titleBarIcon}
											/>
										</Material.Box>
									</Material.Box>
									<Material.Box
										sx={{
											...styles.contentDetailsBox,
											...styles.experienceDetailsBox,
										}}
									>
										{/* Project overview */}
										<h4>Overview:</h4>
										<p style={styles.lighter}>
											{element.overview}
										</p>
										{/* Key technologies used */}
										<h4>Key Technologies:</h4>
										<Material.Box
											sx={{
												...styles.subSkillBox,
												...styles.skillFlex,
											}}
										>
											{/* Map through the 'technologies' array */}
											{element.technologies.map(function (
												technology,
												technologyIndex
											) {
												return (
													<Material.Box
														key={`responsibility-${index}-${technologyIndex}`}
														sx={{
															...styles.skill,
															...styles.lighter,
															...styles.techSkill,
														}}
													>
														{technology}
													</Material.Box>
												);
											})}
										</Material.Box>
										{/* Links to GitHub and site */}
										<h4>Links:</h4>
										<p style={styles.lighter}>
											GitHub: {element.github}
										</p>
										<p style={styles.lighter}>
											Site: {element.site}
										</p>
									</Material.Box>
								</Material.Box>
							);
						})}
					</Material.Box>
				</Material.Box>
			</Material.Box>
		</>
	);
}
function Resume({ props }) {
	// State and refs for typing animation
	const [isTyping, setIsTyping] = useState(false);
	const typedTextRef = useRef(null);
	const cursorRef = useRef(null);

	// Start typing effect on component mount
	useEffect(() => {
		startTypingEffect();
	}, []);

	// Function to start typing effect
	const startTypingEffect = () => {
		if (textArray.length) setTimeout(type, newTextDelay + 250);
	};
	// ====TYPING ANIMATION====
	const textArray = ['hard.', 'cool.', 'a journey.', 'LIFE!'];
	const typingDelay = 200;
	const erasingDelay = 100;
	const newTextDelay = 2000;
	let textArrayIndex = 0;
	let charIndex = 0;

	// Function for typing effect
	function type() {
		const typedTextSpan = typedTextRef.current;
		const cursorSpan = cursorRef.current;
		if (charIndex < textArray[textArrayIndex].length) {
			if (!isTyping) {
				setIsTyping(true);
			}
			typedTextSpan.textContent +=
				textArray[textArrayIndex].charAt(charIndex);
			charIndex++; // Move to the next character and call the 'type' function again after 'typingDelay' milliseconds

			setTimeout(type, typingDelay);
		} else {
			cursorSpan.classList.remove('typing'); // When typing is completed for the current text, remove the 'typing' className from the cursor
			setTimeout(erase, newTextDelay); // Start the erasing effect by calling the 'erase' function after 'newTextDelay' milliseconds
		}
	}
	// Function for erasing effect
	function erase() {
		const typedTextSpan = typedTextRef.current;
		const cursorSpan = cursorRef.current;
		// Check if there are characters to erase in the current text
		if (charIndex > 0) {
			// Add the 'typing' className to the cursor element to make it blink
			if (!cursorSpan.classList.contains('typing'))
				cursorSpan.classList.add('typing');

			// Erase the last character from the typedTextSpan
			typedTextSpan.textContent = textArray[textArrayIndex].substring(
				0,
				charIndex - 1
			);

			// Move to the previous character and call the 'erase' function again after 'erasingDelay' milliseconds
			charIndex--;
			setTimeout(erase, erasingDelay);
		} else {
			// When erasing is completed, remove the 'typing' className from the cursor
			cursorSpan.classList.remove('typing');
			// Move to the next text in the textArray
			textArrayIndex++;
			// If all texts in the array have been shown, reset the index to show the first text again
			if (textArrayIndex >= textArray.length) textArrayIndex = 0;
			// Start typing the next text after a delay of 'typingDelay' + 1100 milliseconds
			setTimeout(type, typingDelay + 1100);
		}
	}
	// State for resume content and button styles
	const [resumeContentState, setResumeContentState] =
		React.useState('PlainText');
	const [resumeButtonState, setResumeButtonState] = React.useState({
		PlainText: { boxShadow: '0 4px 10px rgba(255, 255, 255, 0.7)' },
		//Ref: { boxShadow: '0 4px 10px rgba(255, 255, 255, 0.0)' },
	});
	// Array of resume buttons
	const resumeButtons = [
		{ target: 'PlainText', span: 'Render Text', name: 'PlainText' },
		{ target: 'Code', span: 'Code', name: 'Code' },
		{ target: 'Download', span: 'Download', name: 'Download' },
		{ target: 'Projects', span: 'Back', name: 'Projects' },
		{ target: 'References', span: 'Next', name: 'References' },
	];
	// Function to update button style on hover
	function setResumeHoverButton(name, style) {
		let obj = Object.assign({}, resumeButtonState);
		obj[name] = style;
		setResumeButtonState(obj);
	}
	return (
		<>
			<Material.Box
				className="resumeContainer pageContainer"
				sx={{ ...pageContainer, ...resumeContainer }}
			>
				{/* Resume container */}
				<Material.Box sx={resumeBox}>
					<Material.Typography
						className="resumeTitle"
						sx={resumeTitle}
					>
						RESUME
					</Material.Typography>

					{/* Typing effect container */}
					<Material.Box
						className="typingContainer"
						sx={typingContainer}
					>
						<p>
							Coding is{' '}
							<Material.Typography
								ref={typedTextRef}
								sx={typedText}
							></Material.Typography>
							<Material.Typography
								ref={cursorRef}
								className={isTyping ? 'typing' : ''}
							>
								&nbsp;
							</Material.Typography>
						</p>
					</Material.Box>
				</Material.Box>

				{/* === Resume Code Starts Here === */}
				<Material.Box className="codeBox" sx={codeBox}>
					{/* Code content */}
					<Material.Box
						id="codeContent"
						sx={{
							...codeContent,
							...{
								opacity:
									resumeContentState === 'Code' ? '1' : '0',
							},
						}}
					>
						{/* Render the CodeSnippet component here */}
						<CodeSnippet />
					</Material.Box>
					{/* <!-- PLAIN TEXT RESUME --> */}
					<Material.Box
						className="resumePlainText"
						sx={{
							...resumePlainText,
							...{
								opacity:
									resumeContentState === 'PlainText'
										? '1'
										: '0',
								pointerEvents:
									resumeContentState === 'PlainText'
										? 'auto'
										: 'none',
							},
						}}
					>
						<RenderedText />
					</Material.Box>{' '}
				</Material.Box>
				{/* Resume buttons */}
				<Material.Box id="resumeButtonSpan" sx={resumeButtonSpan}>
					{/* Map through the 'resumeButtons' array */}
					{resumeButtons.map(function (element, index) {
						return (
							<Material.Button
								className="resumeButton"
								key={`resumeButton${index}`}
								name={element.name}
								sx={{
									...resumeButton,
									...resumeButtonState[element.name],
								}}
								onMouseEnter={(event) => {
									// Handle mouse enter event
									if (
										event.target.name !== resumeContentState
									) {
										setResumeHoverButton(
											event.target.name,
											{
												boxShadow:
													'0 4px 10px rgba(255, 255, 255, 0.7)',
											}
										);
									}
								}}
								onMouseLeave={(event) => {
									// Handle mouse leave event
									if (
										event.target.name !== resumeContentState
									) {
										setResumeHoverButton(
											event.target.name,
											{
												boxShadow:
													'0 4px 10px rgba(255, 255, 255, 0.0)',
											}
										);
									}
								}}
								onClick={function () {
									// Handle button click event
									if (
										element.target === 'References' ||
										element.target === 'Projects'
									) {
										// Handle click for 'References' or 'Projects'
										props.setActivePage(element.target);
									} else if (element.target === 'Download') {
										// Handle click for 'Download'
										window.open(
											'./resume.pdf',
											'_blank' // <- This is what makes it open in a new window.
										);
										setResumeHoverButton(element.target, {
											boxShadow:
												'0 4px 10px rgba(255, 255, 255, 0.0)',
										});
									} else {
										if (
											// Handle click for other options
											element.target !==
											resumeContentState
										) {
											let inactive = 'PlainText';
											let active = 'Code';
											if (
												element.target === 'PlainText'
											) {
												active = 'PlainText';
												inactive = 'Code';
											}
											let obj = Object.assign(
												{},
												resumeButtonState
											);
											obj[active] = {
												boxShadow:
													'0 4px 10px rgba(255, 255, 255, 0.7)',
											};
											obj[inactive] = {
												boxShadow:
													'0 4px 10px rgba(255, 255, 255, 0.0)',
											};
											setResumeButtonState(obj);
										}
										setResumeContentState(element.target);
									}
								}}
							>
								<Material.Typography>
									{/* Conditional rendering for '<' and '>' based on 'resumeContentState' */}
									{resumeContentState === 'Code' ? '< ' : ''}
									{element.span}
									{resumeContentState === 'Code' ? ' />' : ''}
								</Material.Typography>
							</Material.Button>
						);
					})}
				</Material.Box>
			</Material.Box>
		</>
	);
}

export default Resume;
