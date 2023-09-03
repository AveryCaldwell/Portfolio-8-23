import React, { useState, useEffect, useRef } from 'react';
// import anime from 'animejs/lib/anime.es.js';
import resumeJSON from '../assets/resume.json';
import { GitHub, OpenInBrowser } from '@mui/icons-material/';
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
} from './Styles';
function RenderedText({ props }) {
	const styles = {
		resumeContainer: {
			display: 'flex',
			flexDirection: 'column',
			textAlign: 'center',
			justifyContent: 'center',
			alignItems: 'center',
		},
		contentContainer: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
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
		projectTitleRow: {
			fontWeight: 'bold',
			alignItems: 'center',
		},
		educationTitleRow: {
			fontWeight: 'bold',
			flexDirection: 'row',
		},
		experienceTitleRow: {
			flexDirection: 'column',
		},
		experienceTitleSuperRow: {
			display: 'flex',
			fontWeight: 'bold',
			flexDirection: 'row',
			justifyContent: 'space-between',
		},
		experienceTitleSubRow: {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'space-between',
			fontWeight: 'lighter',
		},
		headerBox: {
			width: 700,
		},
		experienceBox: {
			width: 700,
		},
		educationBox: {
			width: 700,
		},

		contentDetailsBox: {
			paddingLeft: 45,
			paddingRight: 45,
		},
		experienceDetailsBox: {
			textAlign: 'left',
		},
		skillBox: {
			display: 'flex',
			flexWrap: 'wrap',
			alignItems: 'center',
			justifyContent: 'center',
			width: 900,
		},
		subSkillBox: {
			display: 'flex',
			flexWrap: 'wrap',
			alignItems: 'center',
			justifyContent: 'center',
			width: 600,
		},
		skill: {
			border: '1px solid white',
			padding: 10,
			margin: 5,
			borderRadius: 5,
			fontWeight: 'lighter',
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
	};
	const openLink = function (link) {
		window.open(`https://${link}`, '_blank');
	};
	return (
		<>
			<div style={styles.resumeContainer}>
				<div id="renderHeader">
					<h1>{resumeJSON.header.name}</h1>
					<div
						style={{
							...styles.contentBox,
							...styles.headerBox,
						}}
					>
						<div
							style={{
								...styles.contentTitleRow,
								...styles.projectTitleRow,
							}}
						>
							<div>{resumeJSON.header.title}</div>
							<div>
								<GitHub
									onClick={() =>
										openLink(resumeJSON.header.github)
									}
									style={styles.titleBarIcon}
								/>
								<OpenInBrowser
									onClick={() =>
										openLink(resumeJSON.header.site)
									}
									style={styles.titleBarIcon}
								/>
							</div>
						</div>
						<div
							style={{
								...styles.contentDetailsBox,
								...styles.experienceDetailsBox,
								...styles.lighter,
							}}
						>
							<div
								style={{
									display: 'flex',
									flexDirection: 'row',
									justifyContent: 'space-around',
									marginTop: 20,
								}}
							>
								<div
									style={{
										display: 'flex',
										flexDirection: 'column',
										width: '50%',
									}}
								>
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
								</div>
								<div
									style={{
										display: 'flex',
										flexDirection: 'column',
										width: '50%',
									}}
								>
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
								</div>
							</div>
							<h2>Summary</h2>
							<p>{resumeJSON.summary.text}</p>
						</div>
					</div>
				</div>
				<div id="renderSummary"></div>
				<div>
					<h2>Education</h2>
					<div style={styles.contentContainer}>
						{resumeJSON.education.map(function (element, index) {
							return (
								<div
									key={`education${index}`}
									style={{
										...styles.contentBox,
										...styles.educationBox,
									}}
								>
									<div
										style={{
											...styles.contentTitleRow,
											...styles.educationTitleRow,
										}}
									>
										<div>{element.title}</div>
										<div>{element.date}</div>
									</div>
									<div
										style={{
											...styles.contentDetailsBox,
											...styles.lighter,
										}}
									>
										<p>
											<strong>{element.school}</strong>
										</p>
										<p>{element.overview}</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
				<div>
					<h2>{resumeJSON.technicalSkills.title}</h2>
					<div style={styles.skillBox}>
						{resumeJSON.technicalSkills.values.map(function (
							element,
							index
						) {
							return (
								<div
									key={`techSkill${index}`}
									style={{
										...styles.skill,
										...styles.techSkill,
									}}
								>
									{element}
								</div>
							);
						})}
					</div>
				</div>
				<div>
					<h2>{resumeJSON.personalSkills.title}</h2>
					<div style={styles.skillBox}>
						{resumeJSON.personalSkills.values.map(function (
							element,
							index
						) {
							return (
								<div
									key={`personalSkill${index}`}
									style={{
										...styles.skill,
										...styles.personalSkill,
									}}
								>
									{element}
								</div>
							);
						})}
					</div>
				</div>
				<div>
					<h2>Experience</h2>
					<div style={{ ...styles.contentContainer }}>
						{resumeJSON.experience.map(function (element, index) {
							return (
								<div
									key={`experience${index}`}
									style={{
										...styles.contentBox,
										...styles.experienceBox,
									}}
								>
									{/* <div key={`experience${index}`}> */}
									<div
										style={{
											...styles.contentTitleRow,
											...styles.experienceTitleRow,
										}}
									>
										<div
											style={
												styles.experienceTitleSuperRow
											}
										>
											<div>{element.title}</div>
											<div>{element.date}</div>
										</div>
										<div
											style={styles.experienceTitleSubRow}
										>
											<div>{element.employer}</div>
											<div>{element.location}</div>
										</div>
									</div>

									<div
										style={{
											...styles.contentDetailsBox,
											...styles.experienceDetailsBox,
										}}
									>
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
									</div>
									<div
										style={{
											...styles.contentDetailsBox,
											...styles.experienceDetailsBox,
										}}
									>
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
									</div>
								</div>
							);
						})}
					</div>
				</div>
				<div>
					<h2>Projects</h2>
					<div style={{ ...styles.contentContainer }}>
						{resumeJSON.projects.map(function (element, index) {
							return (
								<div
									key={`experience${index}`}
									style={{
										...styles.contentBox,
										...styles.experienceBox,
									}}
								>
									<div
										style={{
											...styles.contentTitleRow,
											...styles.projectTitleRow,
										}}
									>
										<div>{element.title}</div>
										<div>
											<GitHub
												onClick={() =>
													openLink(element.github)
												}
												style={styles.titleBarIcon}
											/>
											<OpenInBrowser
												onClick={() =>
													openLink(element.site)
												}
												style={styles.titleBarIcon}
											/>
										</div>
									</div>
									<div
										style={{
											...styles.contentDetailsBox,
											...styles.experienceDetailsBox,
										}}
									>
										<h4>Overview:</h4>
										<p style={styles.lighter}>
											{element.overview}
										</p>
										<h4>Key Technologies:</h4>
										<div style={styles.subSkillBox}>
											{element.technologies.map(function (
												technology,
												technologyIndex
											) {
												return (
													<div
														key={`responsibility-${index}-${technologyIndex}`}
														style={{
															...styles.skill,
															...styles.techSkill,
														}}
													>
														{technology}
													</div>
												);
											})}
										</div>
										<h4>Links:</h4>
										<p style={styles.lighter}>
											GitHub: {element.github}
										</p>
										<p style={styles.lighter}>
											Site: {element.site}
										</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
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
	// Add an event listener to start the typing effect when the DOM is loaded
	document.addEventListener('DOMContentLoaded', function () {
		// On DOM Load initiate the effect
		// If there are texts in the array, start the typing effect after a delay of newTextDelay' + 250 milliseconds
	});
	// State for resume content and button styles
	const [resumeContentState, setResumeContentState] = React.useState('Code');
	const [resumeButtonState, setResumeButtonState] = React.useState({
		Code: { boxShadow: '0 4px 10px rgba(255, 255, 255, 0.7)' },
		Ref: { boxShadow: '0 4px 10px rgba(255, 255, 255, 0.0)' },
	});
	// Array of resume buttons
	const resumeButtons = [
		{ target: 'Code', span: 'Code', name: 'Code' },
		{ target: 'PlainText', span: 'Render Text', name: 'PlainText' },
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
			<div
				className="resumeContainer pageContainer"
				style={{ ...pageContainer, ...resumeContainer }}
			>
				<div style={resumeBox}>
					{/* ... (resume header) */}
					<h1 className="resumeTitle" style={resumeTitle}>
						RESUME
					</h1>

					<div className="typingContainer" style={typingContainer}>
						<p>
							Coding is{' '}
							<span ref={typedTextRef} style={typedText}></span>
							<span
								ref={cursorRef}
								className={isTyping ? 'typing' : ''}
							>
								&nbsp;
							</span>
						</p>
					</div>
				</div>

				{/* === Resume Code Starts Here === */}
				<div className="codeBox" style={codeBox}>
					{/* Code content */}
					<div
						id="codeContent"
						style={{
							...codeContent,
							...{
								opacity:
									resumeContentState === 'Code' ? '1' : '0',
							},
						}}
					>
						<code style={{ color: 'cyan' }}>
							<span
								style={{
									color: 'lime',
								}}
							>
								className
							</span>{' '}
							AveryCaldwell
							<span
								style={{
									color: 'lime',
								}}
							>
								{' {'}
							</span>
						</code>

						<pre style={{ color: 'lime' }}>
							{`    constructor() {
    this.name = 'Avery Caldwell';
    this.dayOfBirthTimestamp = 12071993;
    this.email = 'averycaldwell7@gmail.com';
    }`}
						</pre>
						<pre style={{ color: 'lime' }}>
							{`workExperience() {
        return [
        {'2020-2023': 'Suspicious Activity Investigator - BSA/AML at BankPlus'},
        {'2018-2020': 'Analyst and Regulatory Specialist - CIP/QA at BankPlus'},
        {'2017-2018': 'Lending Assistant at BankPlus'}
        ];
    }
`}
						</pre>
						<pre style={{ color: 'lime' }}>
							{`   Education() {
        return [
        {'2022-2023': 'University of Washington - Certificate in Full Stack Development'},
        {'2012-2016': 'Mississippi College - Bachelors of Science in Marketing'},
        {'2015': 'Chung Yuan Christian University - Business Program Certificate'}
        ];
    }`}
						</pre>

						<code
							style={{
								color: 'lime',
								width: '1000px',
								whiteSpace: 'pre-wrap',
								overflowWrap: 'normal',
							}}
						>
							{`    skills() {
        return [
        'HTML/CSS/JS', 'React', 'Vue', 'Node.js/Express.js', 'Bootstrap, Tailwind, Material UI', 'Vite', 'SCSS',
        'npm', 'PWA', 'SPA', 'Git/Github/Github Pages', 'NativeScript', 'Web-extensions', 'Web Sockets',
        'Firebase', 'PHP', 'MySQL, MongoDB, ORM', 'Wordpress', 'Photoshop, Canva, Davinci Resolve', 'UX/UI',
        'NestJS', 'Jest', 'Apollo', 'Heroku, Insomnia'
        ];
    }
}`}
						</code>
						{/* <!-- code box --> */}
					</div>
					{/* <!-- PLAIN TEXT RESUME --> */}
					<div
						className="resumePlainText"
						style={{
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
						{/* <h1>AVERY CALDWELL</h1>
						<ul>
							<li>Seattle, WA </li>
							<li>Phone: 601-506-1057 </li>
							<li>Email: averycaldwell7@gmail.com </li>
							<li>Github: https://github.com/AveryCaldwelll </li>
							<li>
								Portfolio:
								https://github.com/AveryCaldwell/postgrad-portfolio
							</li>
						</ul>
						<h2>SUMMARY</h2>
						<p>
							Full Stack web developer with a background in
							banking. Trained at University of Washington Coding
							Bootcamp & earned a certificate in full-stack web
							development. Versatile problem-solver excited about
							expanding knowledge; focused on adaptive design and
							development. Strengths in creativity, teamwork, and
							building projects effectively on all accounts.
						</p>

						<h2>TECHNICAL SKILLS</h2>
						<ul>
							<strong>Technologies:</strong>
							<li>
								{' '}
								JavaScript, HTML, CSS,, React, MERN, MySQL,
								NoSQL, GraphQL, Apollo, MongoDB, Insomnia,
								Heroku, Postman, OAth, Restful APIs, Jest, Git,
								Github, Gitlab, JSON Web Tokens, Wordpress,
								Passport.js
							</li>
							<strong>Frameworks and Libraries:</strong>
							<li>
								Angular, Vue.js, Anime.js, Material-UI,
								Bootstrap, Vite, Express, jQuery, SASS,
								Handlebars.js, bcrypt, Node.js, Tailwind CSS,
								Bulma, Next.js, Foundation, Chart.js, D3.js
							</li>
						</ul>

						<h2>PROJECTS</h2>
						<ul>
							<h3>
								<strong>Wear You Wander | </strong>
								https://github.com/AveryCaldwell/WearYouWander |
								https://averycaldwell.github.io/WearYouWander/
							</h3>
							<li>
								Wear You Wander is an application that uses 2
								server-side APIs with client-side storage to
								analyze historical weather conditions to suggest
								accommodating outerwear.
							</li>
							<li>
								As Team Lead for this project, I assigned tasks,
								created the concept of the application, worked
								with both APIs, and integrated the team’s work.
							</li>
							<li>
								{' '}
								HTML, CSS, Foundation Framework, JavaScript, and
								jQuery
							</li>

							<h3>
								<strong>Cheers Check |</strong>{' '}
								https://github.com/AveryCaldwell/CheersCheck |
								https://averycaldwell.github.io/CheersCheck/
							</h3>
							<li>
								{' '}
								A new liquor inventory application - the perfect
								tool for anyone who enjoys keeping track of
								their favorite spirits! You can easily organize
								your liquor collection, keep track of what you
								have on hand.
							</li>
							<li>
								{' '}
								As Team Lead for this project, I assigned tasks,
								created the concept of the application, worked
								with both APIs, and integrated the team’s work.
							</li>
							<li>
								HTML, CSS, Bootstrap, JavaScript, MySQL,
								Sequelize, Handlebars.js. Node, Express, Heroku,
								and Anime.js jQuery
							</li>

							<h3>
								<strong> TasteBuds | </strong>
								https://github.com/AveryCaldwell/TasteBuds |
								https://taste-buds.herokuapp.com/
							</h3>
							<li>
								A social media app that allows users to never
								dine alone again! This app allows the user to
								create a profile, see other users posts, create
								posts and comments, and join other events!
							</li>
							<li>
								As a Team Member, I ensured app functionality
								and that acceptance criteria was met, as well
								as, created the concept of the application and
								integrated the front to the backend.
							</li>
							<li>
								{' '}
								HTML, CSS, Javascript, Tailwind, Express, Node,
								Heroku, MongoDB, Mongoose, MongoCompass, Apollo,
								GraphQL, React
							</li>
						</ul>
						<h2>EXPERIENCE</h2>

						<h3>
							<strong>
								Suspicious Activity Investigator - BSA/AML{' '}
							</strong>
							June 2018 - Aug 2023 BankPlus Ridgeland, MS{' '}
						</h3>
						<ul>
							<li>
								{' '}
								Streamlined operations by developing and
								implementing compliance procresumeres and
								guidelines for cross-functional operations
								teams, resulting in an increase in process
								efficiency and improved collaboration among
								departments.
							</li>
							<li>
								{' '}
								Utilized critical thinking skills to evaluate
								risk levels of customer behavior, including
								transactional trends and historical statistics,
								effectively preventing money laundering and
								ensuring regulatory compliance.
							</li>
							<li>
								{' '}
								Protected the company's reputation and financial
								well-being by leading investigations into
								systemwide suspicious activities
							</li>

							<em>Key Accomplishments:</em>
							<li>
								{' '}
								Played a pivotal role as a liaison to newly
								acquired banks, driving successful training and
								transition processes.
							</li>
							<li>
								{' '}
								Selected as a distinguished representative to
								attend the esteemed BSA/AML Conference,
								showcasing the Bank's commitment to regulatory
								compliance and industry best practices.
							</li>
						</ul>

						<h2>EDUCATION</h2>
						<ul>
							<h3>
								Certificate in Full Stack Development:
								University of Washington, Seattle, WA May 2023
							</h3>
							<li>
								A 24 week intensive program focused on gaining
								skills in front end and back end technologies.
							</li>
							<h3>
								Bachelors of Science in Marketing: Mississippi
								College, Clinton, MS 2012-2016
							</h3>
							<h3>
								Business Program Certificate: Chung Yuan
								Christian University, Taipei, Taiwan 2015
							</h3>
							<li>
								{' '}
								A 2 month program focused on gaining
								international business skills and adapting to
								new environments.
							</li>
						</ul> */}
					</div>{' '}
				</div>
				{/* Resume buttons */}
				<div id="resumeButtonSpan" style={resumeButtonSpan}>
					{resumeButtons.map(function (element, index) {
						return (
							<button
								className="resumeButton"
								key={`resumeButton${index}`}
								name={element.name}
								style={{
									...resumeButton,
									...resumeButtonState[element.name],
								}}
								onMouseEnter={(event) => {
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
									if (
										element.target === 'References' ||
										element.target === 'Projects'
									) {
										props.setActivePage(element.target);
									} else if (element.target === 'Download') {
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
								<span>
									{resumeContentState === 'Code' ? '< ' : ''}
									{element.span}
									{resumeContentState === 'Code' ? ' />' : ''}
								</span>
							</button>
						);
					})}
				</div>
			</div>
		</>
	);
}

export default Resume;
