// SeparateCodeSnippet.jsx
import React, { useEffect } from 'react';
import Prism from 'prismjs';
// Import Prism.js and the Prism Toolbar plugin
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/toolbar/prism-toolbar.css'; // Import the CSS if needed

// Import the chosen theme
// import 'prism-themes/themes/prism-z-touch.css';
import 'prism-themes/themes/prism-shades-of-purple.css';
// import 'prism-themes/themes/prism-synthwave84.css';

const codeSnippet = `
	import resumeJSON from '../assets/resume.json';
	import { GitHub, OpenInBrowser } from '@mui/icons-material/';
	import React, { useState, useEffect, useRef } from 'react';

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
			window.open(\`https://\${link}\`, '_blank');
	};

	return (
		<>
			{/* Main container div */}
			<div
				style={{
					...styles.containerHeaders,
					...styles.renderedTextContainer,
				}}
			>
			
			{/* Header section */}
				<div id="renderHeader">
					<h1>{resumeJSON.header.name}</h1>
					<div
						style={{
							...styles.contentBox,
							...styles.boxSize,
						}}
					>
						<div
							style={{
								...styles.contentTitleRow,
								...styles.centerAlign,
								...styles.bold,
							}}
						>
							<div>{resumeJSON.header.title}</div>
							<div>
								{/* Icons for GitHub and website */}
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
							<div style={styles.contactBox}>
								<div style={styles.contactSubBox}>
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
								</div>
								<div style={styles.contactSubBox}>
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
							{/* Summary section */}
							<h2>Summary</h2>
							<p>{resumeJSON.summary.text}</p>
						</div>
					</div>
				</div>
				
				{/* Education section title */}
				<div id="renderSummary"></div>
				<div>
					<h2>Education</h2>
					<div
						style={{
							...styles.renderedTextContainer,
							...styles.contentContainer,
						}}
					>
						{/* Map through the 'education' array from 'resumeJSON' */}
						{resumeJSON.education.map(function (element, index) {
							return (
								<div
									key={\`education\${index}\`}
									style={{
										...styles.contentBox,
										...styles.boxSize,
									}}
								>
									<div
										style={{
											...styles.contentTitleRow,
											...styles.flexRow,
											...styles.bold,
										}}
									>
										{/* Education title and date */}
										<div>{element.title}</div>
										<div>{element.date}</div>
									</div>
									<div
										style={{
											...styles.contentDetailsBox,
											...styles.lighter,
										}}
									>
										{/* School name and overview */}
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
					{/* Technical Skills section */}
					<h2>{resumeJSON.technicalSkills.title}</h2>
					<div style={{ ...styles.skillBox, ...styles.skillFlex }}>
						{/* Map through the 'values' array within 'technicalSkills' */}
						{resumeJSON.technicalSkills.values.map(function (
							element,
							index
						) {
							return (
								<div
									key={\`techSkill\${index}\`}
									style={{
										...styles.skill,
										...styles.lighter,
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
					{/* Personal Skills section */}
					<h2>{resumeJSON.personalSkills.title}</h2>
					<div style={{ ...styles.skillBox, ...styles.skillFlex }}>
						{/* Map through the 'values' array within 'personalSkills' */}
						{resumeJSON.personalSkills.values.map(function (
							element,
							index
						) {
							return (
								<div
									key={\`personalSkill\${index}\`}
									style={{
										...styles.skill,
										...styles.lighter,
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
					{/* Experience section title */}
					<h2>Experience</h2>
					<div
						style={{
							...styles.contentContainer,
							...styles.renderedTextContainer,
						}}
					>
						{/* Map through the 'experience' array from 'resumeJSON' */}
						{resumeJSON.experience.map(function (element, index) {
							return (
								<div
									key={\`experience\${index}\`}
									style={{
										...styles.contentBox,
										...styles.boxSize,
									}}
								>
									<div
										style={{
											...styles.contentTitleRow,
											...styles.flexColumn,
										}}
									>
										<div
											style={{
												...styles.titleRow,
												...styles.flexRow,
												...styles.bold,
											}}
										>
											{/* Experience title and date */}
											<div>{element.title}</div>
											<div>{element.date}</div>
										</div>
										<div
											style={{
												...styles.titleRow,
												...styles.flexRow,
												...styles.lighter,
											}}
										>
											{/* Employer and location */}
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
										{/* Responsibilities */}
										<h4>Responsibilities:</h4>
										{element.responsibilities.map(function (
											responsibility,
											responsibilityIndex
										) {
											return (
												<p
													key={\`responsibility-\${index}-\${responsibilityIndex}\`}
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
										{/* Key Accomplishments */}
										<h4>Key Accomplishments:</h4>
										{element.accomplishments.map(function (
											accomplishment,
											accomplishmentIndex
										) {
											return (
												<p
													key={\`accomplishment-\${index}-\${accomplishmentIndex}\`}
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
					<div
						style={{
							...styles.contentContainer,
							...styles.renderedTextContainer,
						}}
					>
						{/* Map through the 'projects' array from 'resumeJSON' */}
						{resumeJSON.projects.map(function (element, index) {
							return (
								<div
									key={\`experience\${index}\`}
									style={{
										...styles.contentBox,
										...styles.boxSize,
									}}
								>
									<div
										style={{
											...styles.contentTitleRow,
											...styles.centerAlign,
											...styles.bold,
										}}
									>
										{/* Project title */}
										<div>{element.title}</div>
										<div>
											{/* Icons for GitHub and website */}
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
										{/* Project overview */}
										<h4>Overview:</h4>
										<p style={styles.lighter}>
											{element.overview}
										</p>
										{/* Key technologies used */}
										<h4>Key Technologies:</h4>
										<div
											style={{
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
													<div
														key={\`responsibility-\${index}-\${technologyIndex}\`}
														style={{
															...styles.skill,
															...styles.lighter,
															...styles.techSkill,
														}}
													>
														{technology}
													</div>
												);
											})}
										</div>
										{/* Links to GitHub and site */}
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
`;

const CodeSnippet = () => {
	useEffect(() => {
		// Apply Prism.js syntax highlighting
		Prism.highlightAll();
	}, []);

	return (
		<>
			<pre>
				<code className="language-javascript">{codeSnippet}</code>
				{/* FIXME: get copy to clipboard button working */}
				{/* <pre
					data-src="plugins/toolbar/prism-toolbar.js"
					data-label="my-label-button"
				></pre>
				<template id="my-label-button">
					<button onclick="console.log('This is an inline-handler');">
						My button
					</button>
				</template> */}
			</pre>
		</>
	);
};

export default CodeSnippet;
