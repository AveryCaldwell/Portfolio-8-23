import React, { useState } from 'react';
import * as Material from '@mui/material';

// IMPORT SUBCOMPONENTS
import { FirstAvatar, SecondAvatar, ThirdAvatar } from './ReferenceAvatars'; // Adjust the path accordingly

// IMPORT ICONS
import MailOutlineIcon from '@mui/icons-material/MailOutline';

// IMPORT STYLING
import {
	referencesContainer,
	referencesButtonSpan,
	pageContainer,
	referencesButton,
	referencesBox,
	referencesTitle,
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
	referencesSubtitle,
} from './Styles-Theme';

// This function renders References content of web app
function References({ props }) {
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
		transition: 'width 0.4s',
		overflow: 'hidden',
		zIndex: 2,
	};

	// State and buttons for controlling references page navigation
	const [referencesState, setReferencesButtonState] = React.useState({
		Resume: { boxShadow: '0 4px 10px rgba(255, 255, 255, 0.0)' },
		Contact: { boxShadow: '0 4px 10px rgba(255, 255, 255, 0.0)' },
	});
	const referencesButtons = [
		{ target: 'Resume', span: 'Back', name: 'Resume' },
		{ target: 'Contact', span: 'Next', name: 'Contact' },
	];

	// Function to set the button style when hovering
	function setReferencesHoverButton(name, style) {
		let obj = Object.assign({}, referencesState);
		obj[name] = style;
		setReferencesButtonState(obj);
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
			{/* References Container */}
			<Material.Box
				className="referencesContainer pageContainer"
				sx={{ ...pageContainer, ...referencesContainer }}
			>
				<Material.Box
					id="csslines"
					sx={{
						position: 'absolute',
						top: '255px',
						left: '600px',
					}}
				>
					<Material.Box
						sx={{
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
					<Material.Box
						sx={{
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
					<Material.Box
						sx={{
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
				</Material.Box>
				<Material.Box
					sx={{
						display: 'flex',
						width: '600px',
						height: '800px',
						alignItems: 'center',
						flexDirection: 'column',
						justifyContent: 'center',
					}}
				>
					<Material.Box
						className="referencesTitle"
						sx={referencesTitle}
					>
						REFERENCES
					</Material.Box>
					<Material.Typography sx={referencesSubtitle}>
						What's the sitch?
					</Material.Typography>
					<Material.Box sx={{ height: 100 }}></Material.Box>
				</Material.Box>

				<Material.Box className="referencesBox" sx={referencesBox}>
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
							<Material.Box className="card first" sx={card}>
								<Material.Box
									className="additional first"
									sx={{
										...additionalStyles,
										...background,
									}}
									onMouseEnter={() => handleMouseEnter(index)}
									onMouseLeave={() => handleMouseLeave(index)}
								>
									<Material.Box
										className="user-card"
										sx={userCard}
									>
										<Material.Box
											className="points center"
											sx={{
												...userCardStats,
												...center,
												...points,
											}}
										>
											Level {element.level}
										</Material.Box>
										{/* === CLIP ART === */}
										{element.avatar}
									</Material.Box>
									{/* BACKSIDE OF CARD */}
									<Material.Box
										sx={{
											color: 'white',
											textAlign: 'center',
											padding: '5px',
										}}
									>
										<Material.Box
											className="more-info"
											sx={moreInfo}
										>
											<Material.Typography
												sx={moreInfoTitle}
											>
												{element.name}
											</Material.Typography>
											<Material.Box id="title">
												{element.title}
											</Material.Box>
											<Material.Box
												className="coords"
												sx={coords}
											>
												<Material.Typography
													sx={coordsSpan}
												>
													{element.company}:
												</Material.Typography>
												<Material.Typography
													sx={coordsSpan}
												>
													{' '}
													Joined {element.dateJoined}
												</Material.Typography>
											</Material.Box>
											<Material.Box
												className="coords"
												sx={coords}
											>
												<Material.Typography
													sx={coordsSpan}
												>
													{element.location}
												</Material.Typography>
											</Material.Box>
											<Material.Box
												className="stats"
												sx={stats}
											>
												<Material.Box>
													<Material.Box
														sx={statsTitle}
													>
														<MailOutlineIcon
															sx={{
																verticalAlign:
																	'middle',
															}}
														/>{' '}
														Email:{' '}
														<Material.Typography
															sx={value}
														>
															{' '}
															{element.email}{' '}
														</Material.Typography>
													</Material.Box>
												</Material.Box>

												<Material.Box></Material.Box>
											</Material.Box>
										</Material.Box>
									</Material.Box>
								</Material.Box>
								{/* === FRONT BLERP ON CARD === */}
								<Material.Box className="general" sx={general}>
									<Material.Typography className="cardHeader">
										{element.name}
									</Material.Typography>
									<p>{element.about}</p>
									<Material.Typography
										className="more"
										sx={more}
									>
										Mouse over the avatar for more info
									</Material.Typography>
								</Material.Box>
							</Material.Box>
						);
					})}
					<Material.Box
						id="referencesButtonSpan"
						sx={referencesButtonSpan}
					>
						{referencesButtons.map(function (element, index) {
							return (
								<Material.Button
									className="referencesButton"
									key={`referencesButton${index}`}
									name={element.name}
									sx={{
										...referencesButton,
										...referencesState[element.name],
									}}
									onMouseEnter={(event) => {
										//console.log(event.target.name);
										setReferencesHoverButton(
											event.target.name,
											{
												boxShadow:
													'0 4px 10px rgba(255, 255, 255, 0.7)',
											}
										);
									}}
									onMouseLeave={(event) => {
										setReferencesHoverButton(
											event.target.name,
											{
												boxShadow:
													'0 4px 10px rgba(255, 255, 255, 0.0)',
											}
										);
									}}
									onClick={function () {
										props.setActivePage(element.target);
										setReferencesHoverButton(
											element.target,
											{
												boxShadow:
													'0 4px 10px rgba(255, 255, 255, 0.0)',
											}
										);
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
				{/* END OF CONTAINER DIV */}
			</Material.Box>{' '}
		</React.Fragment>
	);
}

export default References;
