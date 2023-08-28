import React, { useState } from 'react';
import { FirstAvatar, SecondAvatar, ThirdAvatar } from './TestimonialAvatars'; // Adjust the path accordingly

// import * as Material from "@mui/material";
// import anime from "animejs/lib/anime.es.js";
// import avesLogo from "../assets/aves.png";
import {
	refContainer,
	pageContainer,
	refBox,
	refTitle,
	center,
	card,
	userCard,
	userCardStats,
	points,
	cardImage,
	moreInfo,
	moreInfoTitle,
	coords,
	coordsSpan,
	stats,
	statsTitle,
	statsTrophy,
	value,
	general,
	more,
	secondAdd,
	thirdAdd,
	refSubtitle,
	firstAdd,
} from './Styles';

// This function renders main content of web app
function Testimonials({ props }) {
	const [hover, setHover] = useState(false);

	const handleMouseEnter = () => {
		setHover(true);
	};

	const handleMouseLeave = () => {
		setHover(false);
	};
	// styling for when user hovers over reference card
	const additionalStyles = {
		position: 'absolute',
		width: hover ? '100%' : '150px',
		height: '100%',
		background: hover
			? 'linear-gradient(#92bCa6, #A2CCB6)'
			: 'linear-gradient(#dE685E, #EE786E)',
		transition: 'width 0.4s',
		overflow: 'hidden',
		zIndex: 2,
		borderRadius: hover ? '0 5px 5px 0' : 'none',
	};

	return (
		<React.Fragment>
			<div
				className="refContainer pageContainer"
				style={{ ...refContainer, ...pageContainer }}
			>
				<div
					style={{
						display: 'flex',
						width: '100%',
						height: '100px',
						flexDirection: 'horizontal',
						justifyContent: 'space-between',
					}}
				>
					<div className="refTitle" style={refTitle}>
						REFERENCES:{' '}
						<span style={refSubtitle}>What's the sitch?</span>
					</div>
				</div>

				<div className="refBox" style={refBox}>
					{/* <div className="center" style={center}> */}
					{/* === CARD 1 === */}
					<div className="card first" style={{ ...card }}>
						<div
							className="additional first"
							style={{ ...additionalStyles }}
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
						>
							<div
								className="user-card"
								style={{ ...userCard, ...firstAdd }}
							>
								<div
									className="level center"
									style={{
										...userCardStats,
										...center,
									}}
								>
									References 1
								</div>
								<div
									className="points center"
									style={{
										...userCardStats,
										...points,
									}}
								>
									Level 37
								</div>
								{/* === CLIP ART === */}
								<FirstAvatar />
							</div>
							{/* <!-- user-card --> */}
							{/* BACKSIDE OF CARD */}
							<div
								style={{
									color: 'white',
									textAlign: 'center',
									padding: '5px',
								}}
							>
								<div className="more-info" style={moreInfo}>
									<h1 style={moreInfoTitle}>Robert Baker</h1>
									<div id="title">Software Architect</div>
									<div className="coords" style={coords}>
										<span style={coordsSpan}>Boeing</span>
										<span style={coordsSpan}>
											Joined 2015
										</span>
									</div>
									<div className="coords" style={coords}>
										<span style={coordsSpan}>
											Software Architect
										</span>
										<span style={coordsSpan}>
											Seattle, WA
										</span>
									</div>
									<div className="stats" style={stats}>
										<div>
											<div
												className="title"
												style={statsTitle}
											>
												Contact:
											</div>
											<i
												className="fa fa-trophy"
												style={statsTrophy}
											></i>
											<div
												className="value"
												style={value}
											>
												nasakab@gmail.com{' '}
											</div>
										</div>

										<div>
											<div
												className="title"
												style={statsTitle}
											>
												Phone
											</div>
											<i className="fa fa-gamepad"></i>
											<div
												className="value"
												style={value}
											>
												541-300-0887
											</div>
										</div>

										<div>
											<div
												className="title"
												style={statsTitle}
											>
												Pals
											</div>
											<i className="fa fa-group"></i>
											<div
												className="value"
												style={value}
											>
												123
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* === FRONT BLERP ON CARD === */}
						<div className="general" style={general}>
							<h1 className="cardHeader">Robert Baker</h1>
							<p>
								Specialized in VR applications, photogrammetry,
								and manipulations of scientific photographic
								equipment in an aerospace manufacturing
								environment.
							</p>
							<span className="more" style={more}>
								Mouse over the card for more info
							</span>
						</div>
					</div>

					{/* <!-- CARD 2 --> */}
					<div className="card second" style={card}>
						<div
							className="additional secondAdd"
							style={{ ...additionalStyles, ...secondAdd }}
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
						>
							<div className="user-card" style={userCard}>
								<div
									className="level center"
									style={{
										...userCardStats,
										...center,
									}}
								>
									References 2
								</div>
								<div
									className="points center"
									style={Object.assign(
										{},
										userCardStats,
										center,
										points
									)}
								>
									Level 41
								</div>
								{/* === CLIP ART === */}
								<SecondAvatar />
							</div>
							{/* <!-- user-card --> */}
							{/* BACKSIDE OF CARD */}
							<div id="title">NextTrader</div>
							<div className="more-info" style={moreInfo}>
								<h1 style={{ color: '#224c36' }}>2nd person</h1>
								<div
									className="coords"
									style={{ color: '#325c46' }}
								>
									<span style={coordsSpan}>NextTrader</span>
									<span style={coordsSpan}>Joined 2016</span>
								</div>
								<div className="coords" style={coords}>
									<span style={coordsSpan}>
										Software Architect
									</span>
									<span style={coordsSpan}>Houston, TX</span>
								</div>
								<div
									className="stats"
									style={{
										color: 'white',
										flex: '1',
										textAlign: 'center',
									}}
								>
									<div>
										<div
											className="title"
											style={statsTitle}
										>
											Awards
										</div>
										<i
											className="fa fa-trophy"
											style={statsTrophy}
										></i>
										<div className="value" style={value}>
											20{' '}
										</div>
									</div>

									<div>
										<div
											className="title"
											style={statsTitle}
										>
											Matches
										</div>
										<i className="fa fa-gamepad"></i>
										<div className="value" style={value}>
											27
										</div>
									</div>

									<div>
										<div
											className="title"
											style={statsTitle}
										>
											Pals
										</div>
										<i className="fa fa-group"></i>
										<div className="value" style={value}>
											123
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* === FRONT BLERP ON CARD === */}
						<div className="general" style={general}>
							<h1 className="cardHeader">Kenneth Gottlieb</h1>
							<p>
								Principal Software Engineer with over 20 years
								of experience working across multiple
								development technologies and platforms.
							</p>
							<span className="more" style={more}>
								Mouse over the card for more info
							</span>
						</div>
					</div>
					{/* breaking up divs, dont mind me */}

					{/* <!-- CARD 3 --> */}
					<div className="card third" style={card}>
						<div
							className="additional thirdAdd"
							style={{ ...additionalStyles, ...thirdAdd }}
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
						>
							<div className="user-card" style={userCard}>
								<div
									className="level center"
									style={{
										...userCardStats,
										...center,
									}}
								>
									References 3
								</div>
								<div
									className="points center"
									style={Object.assign(
										{},
										userCardStats,
										center,
										points
									)}
								>
									Level 29
								</div>
								{/* === CLIP ART === */}
								<ThirdAvatar />
							</div>
							{/* <!-- user-card --> */}
							{/* BACKSIDE OF CARD */}
							<div id="title">Job</div>
							<div className="more-info" style={moreInfo}>
								<h1 style={{ color: '#224c36' }}>
									Alexa Zylstra
								</h1>
								<div
									className="coords"
									style={{ color: '#325c46' }}
								>
									<span style={coordsSpan}>Healthcare</span>
									<span style={coordsSpan}>Joined 2021</span>
								</div>
								<div className="coords" style={coords}>
									<span style={coordsSpan}>QA </span>
									<span style={coordsSpan}>
										Nashville, TN
									</span>
								</div>
								<div
									className="stats"
									style={{
										color: 'white',
										flex: '1',
										textAlign: 'center',
									}}
								>
									<div>
										<div
											className="title"
											style={statsTitle}
										>
											Awards
										</div>
										<i
											className="fa fa-trophy"
											style={statsTrophy}
										></i>
										<div className="value" style={value}>
											2{' '}
										</div>
									</div>

									<div>
										<div
											className="title"
											style={statsTitle}
										>
											Matches
										</div>
										<i className="fa fa-gamepad"></i>
										<div className="value" style={value}>
											27
										</div>
									</div>

									<div>
										<div
											className="title"
											style={statsTitle}
										>
											Known
										</div>
										<i className="fa fa-group"></i>
										<div className="value" style={value}>
											10+ years
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* === FRONT BLERP ON CARD === */}
						<div className="general" style={general}>
							<h1 className="cardHeader">Alexa Zylstra</h1>
							<p>Badass Bish</p>
							<span className="more" style={more}>
								Mouse over the card for more info
							</span>
						</div>
					</div>
					{/* breaking up divs, dont mind me */}
				</div>
				{/* </div> */}
			</div>
			{/* end div */}
		</React.Fragment>
	);
}

export default Testimonials;
