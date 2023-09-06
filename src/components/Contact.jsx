import React, { useEffect, useState, useRef } from 'react';

// import * as Material from '@mui/material';
// LIBRARY
import anime from 'animejs/lib/anime.es.js';
// ICON
// import MoodIcon from '@mui/icons-material/Mood';
// STYLING
import {
	contactContainer,
	pageContainer,
	contactTitle,
	feedbackInput,
	name,
	textArea,
	comment,
	contactButton,
	thanksText,
	myPath,
	lineDrawing,
	formText,
	contactSubtitle,
	formDiv,
	svgName,
	email,
	contactButtonSpan,
	contactTextBox,
	contactAnimation,
} from './Styles';

// This function renders Content component of the app
function Contact({ props }) {
	// State management for education content and button styles
	const [contactButtonState, setContactButtonState] = React.useState({
		References: { boxShadow: '0 4px 10px rgba(255, 255, 255, 0.0)' },
		Landing: { boxShadow: '0 4px 10px rgba(255, 255, 255, 0.0)' },
	});

	const contactAlert = () => {
		alert(
			"The contact form is currently disabled until Avery's site has officially launched. I apologize for the inconvenience."
		);
		return false;
	};
	// Edu button data
	const contactButtons = [
		{ target: 'References', span: 'Back', name: 'References' },
		{ target: 'Landing', span: 'Top', name: 'Landing' },
	];
	// Function to handle button hover animation
	function setContactHoverButton(name, style) {
		let obj = Object.assign({}, contactButtonState);
		obj[name] = style;
		setContactButtonState(obj);
	}
	// Function to start the name drawing animation
	const svgPathRef = useRef(null);

	useEffect(() => {
		const svgPath = svgPathRef.current;
		if (!svgPath) {
			console.error('SVG path element not found');
			return;
		}

		const animateSvgPath = () => {
			anime({
				targets: svgPath,
				strokeDashoffset: [anime.setDashoffset, 0],
				easing: 'easeInOutSine',
				duration: 3000,
				delay: (el, i) => i * 250,
				direction: 'alternate',
				loop: true,
			});
		};

		animateSvgPath(); // Call the function to start the animation
	}, []);

	return (
		<>
			<div
				id="contactContainer"
				style={{ ...pageContainer, ...contactContainer }}
			>
				<div id="contactTextBox" style={contactTextBox}>
					<h1 className="contactTitle" style={contactTitle}>
						LET'S CHAT!
					</h1>

					<div id="contactAnimation" style={contactAnimation}>
						<div className="thanksText" style={thanksText}>
							<div style={thanksText}>
								Thank you for visiting my portfolio!
								<div id="nameTitle">Sincerely,</div>
							</div>

							{/* Name drawing animation */}
							<div id="lineDrawing">
								<svg viewBox="0 0 1000 1500" style={svgName}>
									<g className="lines" style={myPath}></g>
									<path
										ref={svgPathRef}
										className="my-path"
										fill="none"
										strokeWidth="4"
										style={myPath}
										d="M62.74 785.333c80.105-48.063 172.21-433.607 209.06-513.451 11.577-25.083 23.856-48.272 33.077-74.09 1.327-3.715 1.55-9.338 5.292-10.585 1.808-.602 3.856 41.207 3.97 42.338 2.932 29.327 3.188 59.194 5.291 88.643 7.379 103.296 3.97 207.377 3.97 310.915 0 10.133-1.207 50.033 7.938 56.891 17.433 13.075 20.878-14.916 22.492-25.137 8.725-55.264 6.615-112.082 6.615-168.027v-59.537c0-13.23-2.205-17.2 0-17.2 2.248 0 8.446 20.425 8.905 22.626 10.72 51.408 9.646 45.34 10.126 47.695 7.906 38.774 6.99 36.116 7.906 38.774 3.723 10.812 9.976 27.865 9.976 23.21 0-18.523 0-33.076 16.202-78.947 1.622-4.594 10.49-34.976 15.216-36.158 1.03-.257-7.396 37.325 11.051 41.014 16.544 3.31 39.88 5.062 51.599-9.26.45-.551 9.95-11.681 9.95-11.681 5.182-9.13-9.95-20.073-27.388-9.13-18.521 11.623-24.64 87.41 6.854 92.254 68.402 10.524 133.888-98.543 80.705-148.18-3.48-3.249-17.728-15.323-23.815-15.877-42.183-1.414-40.924 58.497-23.314 43.66 19.316-16.273 94.423-16.46 97.405 0 5.69 31.409-26.691 92.784-14.554 120.397 2.256 5.132 11.078 13.716 17.2 11.908 20.312-5.998 8.246-20.049 17.2-51.599 2.28-8.034 4.006-17.054 10.296-22.492 13.518-4.856 17.61 9.49 17.61 22.492 0 6.566-5.232 53.22 6.493 67.475 15.86 19.284 31.41-13.857 31.753-34.399.468-28.05 7.643-45.455 6.615-14.553-.252 7.566.038 21.956 0 25.6-.84 81.042 9.104 130.192-48.953 178.148-8.744 7.223-7.243 4.6-19.503 8.286-19.523 5.872-51.42-24.156-49.466-41.362 9.779-86.076 110.947-37.826 154.967-34.399 106.209 8.27 203.136 26.569 240.794-93.936 6.371-20.388 11.907-39.201 11.907-60.86 0-99.579-174.62-130.76-242.117-138.92-126.917-15.341-262.16-34.71-388.974-15.876-56.966 8.46-108.873 31.784-164.058 46.307-70.87 18.65-163.471 31.753-236.824 31.753"
									/>
								</svg>
							</div>
						</div>
					</div>

					{/* CONTACT BUTTONS */}
					<div id="contactButtonSpan" style={contactButtonSpan}>
						{contactButtons.map(function (element, index) {
							return (
								<button
									className="contactButton"
									key={`contactButton${index}`}
									name={element.name}
									style={{
										...contactButton,
										...contactButtonState[element.name],
									}}
									onMouseEnter={(event) => {
										setContactHoverButton(
											event.target.name,
											{
												boxShadow:
													'0 4px 10px rgba(255, 255, 255, 0.7)',
											}
										);
									}}
									onMouseLeave={(event) => {
										setContactHoverButton(
											event.target.name,
											{
												boxShadow:
													'0 4px 10px rgba(255, 255, 255, 0.0)',
											}
										);
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
					{/* <!-- btn container --> */}
				</div>

				{/* Form section */}
				<div id="formDiv" style={formDiv}>
					<div id="contactForm">
						<form method="post" className="form" id="form1">
							{/* Privacy note */}
							<h1 style={contactSubtitle}>
								** The contact form is currently disabled until
								Avery's site has officially launched. I
								apologize for the inconvenience. **
								{/* <MoodIcon
									style={{
										verticalAlign: 'middle',
									}}
								/>{' '} */}
							</h1>
							{/* Name input */}
							<div className="name" style={name}>
								<span style={formText}>Name: </span>
								<input
									style={feedbackInput}
									name="name"
									type="text"
									className="validate[required,custom[onlyLetter],length[0,100]] feedback-input"
									placeholder="Name"
									id="name"
								/>
							</div>
							{/* Email input */}
							<div className="email" style={email}>
								<span style={formText}> Email: </span>

								<input
									style={feedbackInput}
									name="email"
									type="text"
									className="validate[required,custom[email]] feedback-input"
									id="email"
									placeholder="Email"
								/>
							</div>
							{/* Message input */}
							<div className="formText">
								<span style={formText}>Message:</span>
								<textarea
									style={{
										...comment,
										...textArea,
										...feedbackInput,
									}}
									name="text"
									className="validate[required,length[6,300]] feedback-input"
									id="comment"
									placeholder="Comment"
								></textarea>
							</div>
							{/* Submit button */}
							{/* <!-- TODO: make email functional --> */}
							{/* <button className="submit" >
								<input
									action="mailto:averycaldwell7@gmail.com"
									encType="text/plain"
									style={contactButton}
									type="submit"
									value="Send"
									id="button-blue"
									onClick={contactAlert}
								/>
							</button> */}
						</form>
					</div>
					{/* <!-- form-div  --> */}
				</div>
			</div>
		</>
	);
}

export default Contact;
