import React, { useState } from 'react';
// import * as Material from "@mui/material";

// IMPORT SUBCOMPONENTS
import { FirstAvatar, SecondAvatar, ThirdAvatar } from './TestimonialAvatars'; // Adjust the path accordingly

// IMPORT ICONS
import MailOutlineIcon from '@mui/icons-material/MailOutline';

// IMPORT STYLING
import {
	testimonialsContainer,
	testimonialsButtonSpan,
	pageContainer,
	testimonialsButton,
	testimonialsBox,
	testimonialsTitle,
	center,
	card,
	userCard,
	userCardStats,
	points,
	moreInfo,
	moreInfoTitle,
	coords,
	coordsSpan,
	stats,
	statsTitle,
	value,
	general,
	more,
	testimonialsSubtitle,
} from './Styles';

// This function renders Testimonials content of web app
function Testimonials({ props }) {
	// State to track hovering over the reference card
	const [hoverState, setHoverState] = useState({
		0: false,
		1: false,
		2: false,
	});
	// Event handler for mouse entering the reference card
	const handleMouseEnter = (target) => {
		let obj = Object.assign({}, hoverState);
		obj[target] = true;
		setHoverState(obj);
	};

	// Event handler for mouse leaving the reference card
	const handleMouseLeave = (target) => {
		let obj = Object.assign({}, hoverState);
		obj[target] = false;
		setHoverState(obj);
	};

	// Styling for when the user hovers over the reference card
	const additionalStyles = {
		position: 'absolute',

		height: '100%',
		// background:
		// 	'linear-gradient( rgba(63,94,251,1) 0%, rgba(134,70,252,1)100%)',
		transition: 'width 0.4s',
		overflow: 'hidden',
		zIndex: 2,
	};

	// State and buttons for controlling testimonials page navigation
	const [testimonialsState, setTestimonialsButtonState] = React.useState({
		Resume: { boxShadow: '0 4px 10px rgba(255, 255, 255, 0.0)' },
		Contact: { boxShadow: '0 4px 10px rgba(255, 255, 255, 0.0)' },
	});
	const testimonialsButtons = [
		{ target: 'Resume', span: 'Back', name: 'Resume' },
		{ target: 'Contact', span: 'Next', name: 'Contact' },
	];

	// Function to set the button style when hovering
	function setTestimonialsHoverButton(name, style) {
		let obj = Object.assign({}, testimonialsState);
		obj[name] = style;
		setTestimonialsButtonState(obj);
	}
	const cardInfo = [
		{
			name: 'Robert Baker',
			about: 'Specialized in VR applications, photogrammetry, and manipulations of scientific photographic equipment in an aerospace manufacturing environment.',
			level: 37,
			title: 'Software Architect',
			company: 'Boeing BR&T',
			dateJoined: '2015',
			location: 'Seattle, WA',
			email: 'robert.s.baker2@boeing.com',
			avatar: <FirstAvatar />,
			background:
				'linear-gradient( rgba(63,94,251,1) 0%, rgba(134,70,252,1)100%)',
		},
		{
			name: 'Kenneth Gottlieb',
			about: 'Principal Software Engineer with over 20 years of experience working across multiple development technologies and platforms.',
			level: 41,
			title: 'Senior Software Engineer',
			company: 'NinjaTrader',
			dateJoined: '2023',
			location: 'Houston, TX',
			email: 'kenneth.gottlieb@ninjatrader.com',
			avatar: <SecondAvatar />,
			background:
				'linear-gradient( rgba(63,255,251,1) 0%, rgba(134,70,252,1)100%)',
		},
		{
			name: 'Alexa Zylstra',
			about: 'Full Stack data scientist working on machine learning solutions for healthcare problems. Productionalizes models via cloud based deployment in GCP.',
			level: 29,
			title: 'Full Stack Data Analyst',
			company: 'HCA',
			dateJoined: '2018',
			location: 'Nashville, TN',
			email: 'zylstra.az@gmail.com',
			avatar: <ThirdAvatar />,
			background:
				'linear-gradient( rgba(255,94,251,1) 0%, rgba(134,70,252,1)100%)',
		},
	];

	return (
		<React.Fragment>
			{/* Testimonials Container */}
			<div
				className="testimonialsContainer pageContainer"
				style={{ ...pageContainer, ...testimonialsContainer }}
			>
				<div
					id="csslines"
					style={{
						position: 'absolute',
						top: '255px',
						left: '600px',
					}}
				>
					<div
						style={{
							borderBottom: '3px solid rgba(255, 255, 255,0.7)',
							borderImage:
								'linear-gradient(45deg, rgba(255, 255, 255,0.7), rgba(255, 255, 255,0.1)) 1',
							width: '150px',
							transform: 'rotate(125deg)',
							transformOrigin: 'left',
							position: 'relative',
							left: '10px',
							top: '-90px',
						}}
					/>
					<div
						style={{
							borderBottom: '3px solid rgba(255, 255, 255,0.7)',
							borderImage:
								'linear-gradient(45deg, rgba(255, 255, 255,0.7), rgba(255, 255, 255,0.1)) 1',
							width: '150px',
							transform: 'rotate(235deg)',
							transformOrigin: 'left',
							position: 'relative',
							left: '10px',
							top: '265px',
						}}
					/>
					<div
						style={{
							borderBottom: '3px solid rgba(255, 255, 255,0.7)',
							borderImage:
								'linear-gradient(45deg, rgba(255, 255, 255,0.7), rgba(255, 255, 255,0.1)) 1',
							width: '150px',
							transform: 'rotate(180deg)',
							transformOrigin: 'left',
							position: 'relative',
							left: '120px',
							top: '85px',
						}}
					/>
				</div>
				<div
					style={{
						display: 'flex',
						width: '600px',
						height: '800px',
						alignItems: 'center',
						flexDirection: 'column',
						justifyContent: 'center',
					}}
				>
					<div
						className="testimonialsTitle"
						style={testimonialsTitle}
					>
						REFERENCES
					</div>
					<span style={testimonialsSubtitle}>What's the sitch?</span>
					<div style={{ height: 100 }}></div>
				</div>

				<div className="testimonialsBox" style={testimonialsBox}>
					{/* === CARD 1 === */}
					{cardInfo.map(function (element, index) {
						let background = {
							background: element.background,
							width: hoverState[index] ? '100%' : '150px',
							borderRadius: hoverState[index]
								? '0 5px 5px 0'
								: 'none',
						};
						return (
							<div className="card first" style={card}>
								<div
									className="additional first"
									style={{
										...additionalStyles,
										...background,
									}}
									onMouseEnter={() => handleMouseEnter(index)}
									onMouseLeave={() => handleMouseLeave(index)}
								>
									<div className="user-card" style={userCard}>
										<div
											className="points center"
											style={{
												...userCardStats,
												...center,
												...points,
											}}
										>
											Level {element.level}
										</div>
										{/* === CLIP ART === */}
										{element.avatar}
									</div>
									{/* BACKSIDE OF CARD */}
									<div
										style={{
											color: 'white',
											textAlign: 'center',
											padding: '5px',
										}}
									>
										<div
											className="more-info"
											style={moreInfo}
										>
											<h1 style={moreInfoTitle}>
												{element.name}
											</h1>
											<div id="title">
												{element.title}
											</div>
											<div
												className="coords"
												style={coords}
											>
												<span style={coordsSpan}>
													{element.company}:
												</span>
												<span style={coordsSpan}>
													{' '}
													Joined {element.dateJoined}
												</span>
											</div>
											<div
												className="coords"
												style={coords}
											>
												<span style={coordsSpan}>
													{element.location}
												</span>
											</div>
											<div
												className="stats"
												style={stats}
											>
												<div>
													<div style={statsTitle}>
														<MailOutlineIcon
															style={{
																verticalAlign:
																	'middle',
															}}
														/>{' '}
														Email:{' '}
														<span style={value}>
															{' '}
															{element.email}{' '}
														</span>
													</div>
												</div>

												<div></div>
											</div>
										</div>
									</div>
								</div>
								{/* === FRONT BLERP ON CARD === */}
								<div className="general" style={general}>
									<h1 className="cardHeader">
										{element.name}
									</h1>
									<p>{element.about}</p>
									<span className="more" style={more}>
										Mouse over the avatar for more info
									</span>
								</div>
							</div>
						);
					})}
					<div
						id="testimonialsButtonSpan"
						style={testimonialsButtonSpan}
					>
						{testimonialsButtons.map(function (element, index) {
							return (
								<button
									className="testimonialsButton"
									key={`testimonialsButton${index}`}
									name={element.name}
									style={{
										...testimonialsButton,
										...testimonialsState[element.name],
									}}
									onMouseEnter={(event) => {
										//console.log(event.target.name);
										setTestimonialsHoverButton(
											event.target.name,
											{
												boxShadow:
													'0 4px 10px rgba(255, 255, 255, 0.7)',
											}
										);
									}}
									onMouseLeave={(event) => {
										setTestimonialsHoverButton(
											event.target.name,
											{
												boxShadow:
													'0 4px 10px rgba(255, 255, 255, 0.0)',
											}
										);
									}}
									onClick={function () {
										props.setActivePage(element.target);
										setTestimonialsHoverButton(
											element.target,
											{
												boxShadow:
													'0 4px 10px rgba(255, 255, 255, 0.0)',
											}
										);
									}}
								>
									<span>{element.span}</span>
								</button>
							);
						})}
					</div>
				</div>
				{/* END OF CONTAINER DIV */}
			</div>{' '}
			{/* BUTTON SPAN */}
			{/* <div id="testimonialsButtonSpan" style={testimonialsButtonSpan}>
				{testimonialsButtons.map(function (element, index) {
					return (
						<button
							className="testimonialsButton"
							key={`testimonialsButton${index}`}
							name={element.name}
							style={{
								...testimonialsButton,
								...testimonialsState[element.name],
							}}
							onMouseEnter={(event) => {
								//console.log(event.target.name);
								setTestimonialsHoverButton(event.target.name, {
									boxShadow:
										'0 4px 10px rgba(255, 255, 255, 0.7)',
								});
							}}
							onMouseLeave={(event) => {
								setTestimonialsHoverButton(event.target.name, {
									boxShadow:
										'0 4px 10px rgba(255, 255, 255, 0.0)',
								});
							}}
							onClick={function () {
								props.setActivePage(element.target);
								setTestimonialsHoverButton(element.target, {
									boxShadow:
										'0 4px 10px rgba(255, 255, 255, 0.0)',
								});
							}}
						>
							<span>{element.span}</span>
						</button>
					);
				})}
			</div> */}
		</React.Fragment>
	);
}

export default Testimonials;
