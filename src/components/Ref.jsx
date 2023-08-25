import * as React from "react";
// import * as Material from "@mui/material";
// import anime from "animejs/lib/anime.es.js";
// import avesLogo from "../assets/aves.png";
import {
	refContainer,
	pageContainer,
	refBox,
	refHeader,
	center,
	card,
	refBtns,
	additional,
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
	secondCoords,
	thirdAdd,
} from "./Styles";

// This function renders main content of web app
function Ref({ props }) {
	const limits = 15.0;

	document.querySelectorAll(".card").forEach((card) => {
		card.addEventListener("mousemove", (e) => {
			const rect = e.target.getBoundingClientRect();
			const x = e.clientX - rect.left; //x position within the element.
			const y = e.clientY - rect.top; //y position within the element.
			const offsetX = x / rect.width;
			const offsetY = y / rect.height;

			const rotateY = offsetX * (limits * 2) - limits;
			const rotateX = offsetY * (limits * 2) - limits;

			const shadowOffsetX = offsetX * 32 - 16;
			const shadowOffsetY = offsetY * 32 - 16;

			card.style.boxShadow = `${(1 / 6) * -shadowOffsetX}px ${
				(1 / 6) * -shadowOffsetY
			}px 3px rgba(0, 0, 0, 0.051),
      ${(2 / 6) * -shadowOffsetX}px ${
				(2 / 6) * -shadowOffsetY
			}px 7.2px rgba(0, 0, 0, 0.073),
      ${(3 / 6) * -shadowOffsetX}px ${
				(3 / 6) * -shadowOffsetY
			}px 13.6px rgba(0, 0, 0, 0.09),
      ${(4 / 6) * -shadowOffsetX}px ${
				(4 / 6) * -shadowOffsetY
			}px 24.3px rgba(0, 0, 0, 0.107),
      ${(5 / 6) * -shadowOffsetX}px ${
				(5 / 6) * -shadowOffsetY
			}px 45.5px rgba(0, 0, 0, 0.129),
      ${-shadowOffsetX}px ${-shadowOffsetY}px 109px rgba(0, 0, 0, 0.18)`;
			card.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;

			const glarePos = rotateX + rotateY + 90;
			const glare = card.querySelector(".glare");
			glare.style.left = `${glarePos}%`;
		});

		card.addEventListener("mouseleave", () => {
			card.style.boxShadow =
				"0px 0px 3px rgba(0, 0, 0, 0.051), 0px 0px 7.2px rgba(0, 0, 0, 0.073), 0px 0px 13.6px rgba(0, 0, 0, 0.09), 0px 0px 24.3px rgba(0, 0, 0, 0.107), 0px 0px 45.5px rgba(0, 0, 0, 0.129), 0px 0px 109px rgba(0, 0, 0, 0.18)";
			card.style.transform = "scale(1.0)";
			const glare = card.querySelector(".glare");
			glare.style.left = "100%";
		});
	});

	return (
		<React.Fragment>
			<div
				className='refContainer pageContainer'
				style={Object.assign({}, refContainer, pageContainer)}>
				<button
					style={refBtns}
					className='refBtn'
					onClick={() => props.setActivePage("Resume")}>
					Back{" "}
				</button>

				<button
					style={refBtns}
					className='refNextBtn'
					onClick={() => props.setActivePage("Contact")}>
					Next
				</button>

				<div className='refHeader' style={refHeader}>
					Whats the sitch?
				</div>

				<div className='refBox' style={refBox}>
					<div
						className='center'
						style={{
							position: "absolute",
							top: "35vh",
							left: "50%",
							WebkitTransform: "translate(-50%, -50%)",
						}}>
						{/* === CARD 1 === */}
						<div className='card first' style={card}>
							<div
								className='additional first'
								style={additional}>
								<div className='user-card' style={userCard}>
									<div
										className='level center'
										style={{ ...userCardStats, ...center }}>
										Ref 1
									</div>
									<div
										className='points center'
										style={Object.assign(
											{},
											userCardStats,
											center,
											points
										)}>
										Level 37
									</div>
									{/* === CLIP ART === */}
									<svg
										className='center'
										style={{ ...cardImage, ...center }}
										viewBox='0 0 250 250'
										xmlns='http://www.w3.org/2000/svg'
										role='img'
										aria-labelledby='title desc'>
										<title id='title'>
											Software Architect
										</title>
										<desc id='desc'>
											Cartoon of a Caucasian woman
											smiling, and wearing black glasses
											and a purple shirt with white collar
											drawn by Alvaro Montoro.
										</desc>
										<defs>
											<clipPath id='scene'>
												<circle
													cx='125'
													cy='125'
													r='115'
												/>
											</clipPath>
											<clipPath id='lips'>
												<path d='M 106,132 C 113,127 125,128 125,132 125,128 137,127 144,132 141,142  134,146  125,146  116,146 109,142 106,132 Z' />
											</clipPath>
										</defs>
										<circle
											cx='125'
											cy='125'
											r='120'
											fill='rgba(0,0,0,0.15)'
										/>
										<g
											stroke='none'
											strokeWidth='0'
											clipPath='url(#scene)'>
											<rect
												x='0'
												y='0'
												width='250'
												height='250'
												fill='#b0d2e5'
											/>
											<g id='head'>
												<path
													fill='none'
													stroke='#111111'
													strokeWidth='2'
													d='M 68,103 83,103.5'
												/>
												<circle
													cx='125'
													cy='100'
													r='55'
													fill='#EFDECD'
													className='skin'
												/>
												<ellipse
													cx='102'
													cy='107'
													rx='5'
													ry='5'
													className='eyes'
													id='eye-left'
												/>
												<ellipse
													cx='148'
													cy='107'
													rx='5'
													ry='5'
													className='eyes'
													id='eye-right'
												/>
												<rect
													x='119'
													y='140'
													width='12'
													height='40'
													className='skin'
													fill='#EFDECD'
												/>
												<path
													className='line eyebrow'
													fill='#5C4033'
													d='M 90,98 C 93,90 103,89 110,94'
													id='eyebrow-left'
												/>
												<path
													className='line eyebrow'
													fill='#5C4033'
													d='M 160,98 C 157,90 147,89 140,94'
													id='eyebrow-right'
												/>
												<path
													stroke='#111111'
													strokeWidth='4'
													d='M 68,103 83,102.5'
												/>
												<path
													stroke='#111111'
													strokeWidth='4'
													d='M 182,103 167,102.5'
												/>
												<path
													stroke='#050505'
													strokeWidth='3'
													fill='none'
													d='M 119,102 C 123,99 127,99 131,102'
												/>
												<path
													fill='#050505'
													d='M 92,97 C 85,97 79,98 80,101 81,104 84,104 85,102'
												/>
												<path
													fill='#050505'
													d='M 158,97 C 165,97 171,98 170,101 169,104 166,104 165,102'
												/>
												<path
													stroke='#050505'
													strokeWidth='3'
													fill='rgba(240,240,255,0.4)'
													d='M 119,102 C 118,111 115,119 98,117 85,115 84,108 84,104 84,97 94,96 105,97 112,98 117,98 119,102 Z'
												/>
												<path
													stroke='#050505'
													strokeWidth='3'
													fill='rgba(240,240,255,0.4)'
													d='M 131,102 C 132,111 135,119 152,117 165,115 166,108 166,104 166,97 156,96 145,97 138,98 133,98 131,102 Z'
												/>
												<path
													className='hair'
													fill='#050505'
													d='M 60,109 C 59,39 118,40 129,40 139,40 187,43 189,99 135,98 115,67 115,67 115,67 108,90 80,109 86,101 91,92 92,87 85,99 65,108 60,109'
												/>
												<path
													id='mouth'
													fill='#daa37f'
													d='M 106,132 C 113,127 125,128 125,132 125,128 137,127 144,132 141,142  134,146  125,146  116,146 109,142 106,132 Z'
												/>
												<path
													id='smile'
													fill='white'
													d='M125,141 C 140,141 143,132 143,132 143,132 125,133 125,133 125,133 106.5,132 106.5,132 106.5,132 110,141 125,141 Z'
													clipPath='url(#lips)'
												/>
											</g>
											<g id='shirt'>
												<path
													fill='#5D8AA8'
													d='M 132,170 C 146,170 154,200 154,200 154,200 158,250 158,250 158,250 92,250 92,250 92,250 96,200 96,200 96,200 104,170 118,170 118,170 125,172 125,172 125,172 132,170 132,170 Z'
												/>
												<path
													id='arm-left'
													className='arm'
													stroke='#5D8AA8'
													fill='none'
													strokeWidth='14'
													d='M 118,178 C 94,179 66,220 65,254'
												/>
												<path
													id='arm-right'
													className='arm'
													stroke='#5D8AA8'
													fill='none'
													strokeWidth='14'
													d='M 132,178 C 156,179 184,220 185,254'
												/>
												<path
													fill='white'
													d='M 117,166 C 117,166 125,172 125,172 125,182 115,182 109,170 Z'
												/>
												<path
													fill='white'
													d='M 133,166 C 133,166 125,172 125,172 125,182 135,182 141,170 Z'
												/>
												<circle
													cx='125'
													cy='188'
													r='4'
													fill='#003262'
												/>
												<circle
													cx='125'
													cy='202'
													r='4'
													fill='#003262'
												/>
												<circle
													cx='125'
													cy='216'
													r='4'
													fill='#003262'
												/>
												<circle
													cx='125'
													cy='230'
													r='4'
													fill='#003262'
												/>
												<circle
													cx='125'
													cy='244'
													r='4'
													fill='#003262'
												/>
												<path
													stroke='#daa37f'
													strokeWidth='1'
													className='skin hand'
													id='hand-left'
													d='M 51,270 C 46,263 60,243 63,246 65,247 66,248 61,255 72,243 76,238 79,240 82,243 72,254 69,257 72,254 82,241 86,244 89,247 75,261 73,263 77,258 84,251 86,253 89,256 70,287 59,278'
												/>
												<path
													stroke='#daa37f'
													strokeWidth='1'
													className='skin hand'
													id='hand-right'
													d='M 199,270 C 204,263 190,243 187,246 185,247 184,248 189,255 178,243 174,238 171,240 168,243 178,254 181,257 178,254 168,241 164,244 161,247 175,261 177,263 173,258 166,251 164,253 161,256 180,287 191,278'
												/>
											</g>
										</g>
									</svg>
								</div>
								{/* <!-- user-card --> */}
								{/* BACKSIDE OF CARD */}
								<div id='title'>Software Architect</div>
								<div className='more-info' style={moreInfo}>
									<h1 style={moreInfoTitle}>Robert Baker</h1>
									<div className='coords' style={coords}>
										<span style={coordsSpan}>Boeing</span>
										<span style={coordsSpan}>
											Joined 2015
										</span>
									</div>
									<div className='coords' style={coords}>
										<span style={coordsSpan}>
											Software Architect
										</span>
										<span style={coordsSpan}>
											Seattle, WA
										</span>
									</div>
									<div className='stats' style={stats}>
										<div>
											<div
												className='title'
												style={statsTitle}>
												Patents
											</div>
											<i
												className='fa fa-trophy'
												style={statsTrophy}></i>
											<div
												className='value'
												style={value}>
												7{" "}
											</div>
										</div>

										<div>
											<div
												className='title'
												style={statsTitle}>
												Matches
											</div>
											<i className='fa fa-gamepad'></i>
											<div
												className='value'
												style={value}>
												27
											</div>
										</div>

										<div>
											<div
												className='title'
												style={statsTitle}>
												Pals
											</div>
											<i className='fa fa-group'></i>
											<div
												className='value'
												style={value}>
												123
											</div>
										</div>
									</div>
								</div>
							</div>
							{/* === FRONT BLERP ON CARD === */}
							<div className='general' style={general}>
								<h1 className='cardHeader'>Robert Baker</h1>
								<p>
									Specialized in VR applications,
									photogrammetry, and manipulations of
									scientific photographic equipment in an
									aerospace manufacturing environment.
								</p>
								<span className='more' style={more}>
									Mouse over the card for more info
								</span>
							</div>
						</div>

						{/* <!-- CARD 2 --> */}
						<div className='card second' style={card}>
							<div
								className='additional secondAdd'
								style={{ ...additional, ...secondAdd }}>
								<div className='user-card' style={userCard}>
									<div
										className='level center'
										style={{ ...userCardStats, ...center }}>
										Ref 2
									</div>
									<div
										className='points center'
										style={Object.assign(
											{},
											userCardStats,
											center,
											points
										)}>
										Level 41
									</div>
									{/* === CLIP ART === */}
									<svg
										className='center'
										style={{ ...cardImage, ...center }}
										viewBox='0 0 250 250'
										xmlns='http://www.w3.org/2000/svg'
										role='img'
										aria-labelledby='title desc'>
										<title id='title'>
											Software Engineer
										</title>
										<desc id='desc'>
											Cartoon of a Caucasian man smiling
										</desc>
										<defs>
											<clipPath id='scene'>
												<circle
													cx='125'
													cy='125'
													r='115'
												/>
											</clipPath>
											<clipPath id='lips'>
												<path d='M 106,132 C 113,127 125,128 125,132 125,128 137,127 144,132 141,142  134,146  125,146  116,146 109,142 106,132 Z' />
											</clipPath>
										</defs>
										<circle
											cx='125'
											cy='125'
											r='120'
											fill='rgba(0,0,0,0.15)'
										/>
										<g
											stroke='none'
											strokeWidth='0'
											clipPath='url(#scene)'>
											<rect
												x='0'
												y='0'
												width='250'
												height='250'
												fill='#b0d2e5'
											/>
											<g id='head'>
												<path
													fill='none'
													stroke='#111111'
													strokeWidth='2'
													d='M 68,103 83,103.5'
												/>
												<circle
													cx='125'
													cy='100'
													r='55'
													fill='#daa37f'
													className='skin'
												/>
												<ellipse
													cx='102'
													cy='107'
													rx='5'
													ry='5'
													className='eyes'
													id='eye-left'
												/>
												<ellipse
													cx='148'
													cy='107'
													rx='5'
													ry='5'
													className='eyes'
													id='eye-right'
												/>
												<rect
													x='119'
													y='140'
													width='12'
													height='40'
													className='skin'
													fill='#daa37f'
												/>
												<path
													className='line eyebrow'
													fill='##4a3934'
													d='M 90,98 C 93,90 103,89 110,94'
													id='eyebrow-left'
												/>
												<path
													className='line eyebrow'
													fill='##4a3934'
													d='M 160,98 C 157,90 147,89 140,94'
													id='eyebrow-right'
												/>
												<path
													className='hair'
													fill='##4a3934'
													d='M 60,109 C 59,39 118,40 129,40 139,40 187,43 189,99 135,98 115,67 115,67 115,67 108,90 80,109 86,101 91,92 92,87 85,99 65,108 60,109'
												/>
												<path
													id='mouth'
													fill='#daa37f'
													d='M 106,132 C 113,127 125,128 125,132 125,128 137,127 144,132 141,142  134,146  125,146  116,146 109,142 106,132 Z'
												/>
												<path
													id='smile'
													fill='white'
													d='M125,141 C 140,141 143,132 143,132 143,132 125,133 125,133 125,133 106.5,132 106.5,132 106.5,132 110,141 125,141 Z'
													clipPath='url(#lips)'
												/>
											</g>
											<g id='shirt'>
												<path
													fill='#AB274F'
													d='M 132,170 C 146,170 154,200 154,200 154,200 158,250 158,250 158,250 92,250 92,250 92,250 96,200 96,200 96,200 104,170 118,170 118,170 125,172 125,172 125,172 132,170 132,170 Z'
												/>
												<path
													id='arm-left'
													className='arm'
													stroke='#AB274F'
													fill='none'
													strokeWidth='14'
													d='M 118,178 C 94,179 66,220 65,254'
												/>
												<path
													id='arm-right'
													className='arm'
													stroke='#AB274F'
													fill='none'
													strokeWidth='14'
													d='M 132,178 C 156,179 184,220 185,254'
												/>
												<path
													fill='white'
													d='M 117,166 C 117,166 125,172 125,172 125,182 115,182 109,170 Z'
												/>
												<path
													fill='white'
													d='M 133,166 C 133,166 125,172 125,172 125,182 135,182 141,170 Z'
												/>
												<circle
													cx='125'
													cy='188'
													r='4'
													fill='#7C0902'
												/>
												<circle
													cx='125'
													cy='202'
													r='4'
													fill='#7C0902'
												/>
												<circle
													cx='125'
													cy='216'
													r='4'
													fill='#7C0902'
												/>
												<circle
													cx='125'
													cy='230'
													r='4'
													fill='#7C0902'
												/>
												<circle
													cx='125'
													cy='244'
													r='4'
													fill='#7C0902'
												/>
												<path
													stroke='#daa37f'
													strokeWidth='1'
													className='skin hand'
													id='hand-left'
													d='M 51,270 C 46,263 60,243 63,246 65,247 66,248 61,255 72,243 76,238 79,240 82,243 72,254 69,257 72,254 82,241 86,244 89,247 75,261 73,263 77,258 84,251 86,253 89,256 70,287 59,278'
												/>
												<path
													stroke='#daa37f'
													strokeWidth='1'
													className='skin hand'
													id='hand-right'
													d='M 199,270 C 204,263 190,243 187,246 185,247 184,248 189,255 178,243 174,238 171,240 168,243 178,254 181,257 178,254 168,241 164,244 161,247 175,261 177,263 173,258 166,251 164,253 161,256 180,287 191,278'
												/>
											</g>
										</g>
									</svg>
								</div>
								{/* <!-- user-card --> */}
								{/* BACKSIDE OF CARD */}
								<div id='title'>NextTrader</div>
								<div className='more-info' style={moreInfo}>
									<h1 style={{ color: "#224c36" }}>
										2nd person
									</h1>
									<div
										className='coords'
										style={{ color: "#325c46" }}>
										<span style={coordsSpan}>
											NextTrader
										</span>
										<span style={coordsSpan}>
											Joined 2016
										</span>
									</div>
									<div className='coords' style={coords}>
										<span style={coordsSpan}>
											Software Architect
										</span>
										<span style={coordsSpan}>
											Houston, TX
										</span>
									</div>
									<div
										className='stats'
										style={{
											color: "white",
											flex: "1",
											textAlign: "center",
										}}>
										<div>
											<div
												className='title'
												style={statsTitle}>
												Awards
											</div>
											<i
												className='fa fa-trophy'
												style={statsTrophy}></i>
											<div
												className='value'
												style={value}>
												20{" "}
											</div>
										</div>

										<div>
											<div
												className='title'
												style={statsTitle}>
												Matches
											</div>
											<i className='fa fa-gamepad'></i>
											<div
												className='value'
												style={value}>
												27
											</div>
										</div>

										<div>
											<div
												className='title'
												style={statsTitle}>
												Pals
											</div>
											<i className='fa fa-group'></i>
											<div
												className='value'
												style={value}>
												123
											</div>
										</div>
									</div>
								</div>
							</div>
							{/* === FRONT BLERP ON CARD === */}
							<div className='general' style={general}>
								<h1 className='cardHeader'>Kenneth Gottlieb</h1>
								<p>
									Principal Software Engineer with over 20
									years of experience working across multiple
									development technologies and platforms.
								</p>
								<span className='more' style={more}>
									Mouse over the card for more info
								</span>
							</div>
						</div>
						{/* breaking up divs, dont mind me */}

						{/* <!-- CARD 3 --> */}
						<div className='card third' style={card}>
							<div
								className='additional thirdAdd'
								style={{ ...additional, ...thirdAdd }}>
								<div className='user-card' style={userCard}>
									<div
										className='level center'
										style={{ ...userCardStats, ...center }}>
										Ref 1
									</div>
									<div
										className='points center'
										style={Object.assign(
											{},
											userCardStats,
											center,
											points
										)}>
										Level 29
									</div>
									{/* === CLIP ART === */}
									<svg
										className='center'
										style={{ ...cardImage, ...center }}
										viewBox='0 0 250 250'
										xmlns='http://www.w3.org/2000/svg'
										role='img'
										aria-labelledby='title desc'>
										<title id='title'>Job</title>
										<desc id='desc'>
											Cartoon of a Caucasian woman smiling
										</desc>
										<defs>
											<clipPath id='scene'>
												<circle
													cx='125'
													cy='125'
													r='115'
												/>
											</clipPath>
											<clipPath id='lips'>
												<path d='M 106,132 C 113,127 125,128 125,132 125,128 137,127 144,132 141,142  134,146  125,146  116,146 109,142 106,132 Z' />
											</clipPath>
										</defs>
										<circle
											cx='125'
											cy='125'
											r='120'
											fill='rgba(0,0,0,0.15)'
										/>
										<g
											stroke='none'
											strokeWidth='0'
											clipPath='url(#scene)'>
											<rect
												x='0'
												y='0'
												width='250'
												height='250'
												fill='#b0d2e5'
											/>
											<g id='head'>
												<path
													fill='none'
													stroke='#111111'
													strokeWidth='2'
													d='M 68,103 83,103.5'
												/>
												<path
													fill='#F8DE7E'
													className='hair'
													d='M 67,90 67,169 78,164 89,169 100,164 112,169 125,164 138,169 150,164 161,169 172,164 183,169 183,90 Z'
												/>
												<circle
													cx='125'
													cy='100'
													r='55'
													fill='#EDCDC2'
													className='skin'
												/>
												<ellipse
													cx='102'
													cy='107'
													rx='5'
													ry='5'
													className='eyes'
													id='eye-left'
												/>
												<ellipse
													cx='148'
													cy='107'
													rx='5'
													ry='5'
													className='eyes'
													id='eye-right'
												/>
												<rect
													x='119'
													y='140'
													width='12'
													height='40'
													className='skin'
													fill='#EDCDC2'
												/>
												<path
													className='line eyebrow'
													fill='#F8DE7E'
													d='M 90,98 C 93,90 103,89 110,94'
													id='eyebrow-left'
												/>
												<path
													className='line eyebrow'
													fill='#F8DE7E'
													d='M 160,98 C 157,90 147,89 140,94'
													id='eyebrow-right'
												/>
												<path
													className='hair'
													fill='#F8DE7E'
													d='M 60,109 C 59,39 118,40 129,40 139,40 187,43 189,99 135,98 115,67 115,67 115,67 108,90 80,109 86,101 91,92 92,87 85,99 65,108 60,109'
												/>
												<path
													id='mouth'
													fill='#CA1F7B'
													d='M 106,132 C 113,127 125,128 125,132 125,128 137,127 144,132 141,142  134,146  125,146  116,146 109,142 106,132 Z'
												/>
												<path
													id='smile'
													fill='white'
													d='M125,141 C 140,141 143,132 143,132 143,132 125,133 125,133 125,133 106.5,132 106.5,132 106.5,132 110,141 125,141 Z'
													clipPath='url(#lips)'
												/>
											</g>
											<g id='shirt'>
												<path
													fill='#7BA05B'
													d='M 132,170 C 146,170 154,200 154,200 154,200 158,250 158,250 158,250 92,250 92,250 92,250 96,200 96,200 96,200 104,170 118,170 118,170 125,172 125,172 125,172 132,170 132,170 Z'
												/>
												<path
													id='arm-left'
													className='arm'
													stroke='#7BA05B'
													fill='none'
													strokeWidth='14'
													d='M 118,178 C 94,179 66,220 65,254'
												/>
												<path
													id='arm-right'
													className='arm'
													stroke='#7BA05B'
													fill='none'
													strokeWidth='14'
													d='M 132,178 C 156,179 184,220 185,254'
												/>
												<path
													fill='white'
													d='M 117,166 C 117,166 125,172 125,172 125,182 115,182 109,170 Z'
												/>
												<path
													fill='white'
													d='M 133,166 C 133,166 125,172 125,172 125,182 135,182 141,170 Z'
												/>
												<circle
													cx='125'
													cy='188'
													r='4'
													fill='#1E4D2B'
												/>
												<circle
													cx='125'
													cy='202'
													r='4'
													fill='#1E4D2B'
												/>
												<circle
													cx='125'
													cy='216'
													r='4'
													fill='#1E4D2B'
												/>
												<circle
													cx='125'
													cy='230'
													r='4'
													fill='#1E4D2B'
												/>
												<circle
													cx='125'
													cy='244'
													r='4'
													fill='#1E4D2B'
												/>
												<path
													stroke='#daa37f'
													strokeWidth='1'
													className='skin hand'
													id='hand-left'
													d='M 51,270 C 46,263 60,243 63,246 65,247 66,248 61,255 72,243 76,238 79,240 82,243 72,254 69,257 72,254 82,241 86,244 89,247 75,261 73,263 77,258 84,251 86,253 89,256 70,287 59,278'
												/>
												<path
													stroke='#daa37f'
													strokeWidth='1'
													className='skin hand'
													id='hand-right'
													d='M 199,270 C 204,263 190,243 187,246 185,247 184,248 189,255 178,243 174,238 171,240 168,243 178,254 181,257 178,254 168,241 164,244 161,247 175,261 177,263 173,258 166,251 164,253 161,256 180,287 191,278'
												/>
											</g>
										</g>
									</svg>
								</div>
								{/* <!-- user-card --> */}
								{/* BACKSIDE OF CARD */}
								<div id='title'>Job</div>
								<div className='more-info' style={moreInfo}>
									<h1 style={{ color: "#224c36" }}>
										Alexa Zylstra
									</h1>
									<div
										className='coords'
										style={{ color: "#325c46" }}>
										<span style={coordsSpan}>
											Healthcare
										</span>
										<span style={coordsSpan}>
											Joined 2021
										</span>
									</div>
									<div className='coords' style={coords}>
										<span style={coordsSpan}>QA </span>
										<span style={coordsSpan}>
											Nashville, TN
										</span>
									</div>
									<div
										className='stats'
										style={{
											color: "white",
											flex: "1",
											textAlign: "center",
										}}>
										<div>
											<div
												className='title'
												style={statsTitle}>
												Awards
											</div>
											<i
												className='fa fa-trophy'
												style={statsTrophy}></i>
											<div
												className='value'
												style={value}>
												2{" "}
											</div>
										</div>

										<div>
											<div
												className='title'
												style={statsTitle}>
												Matches
											</div>
											<i className='fa fa-gamepad'></i>
											<div
												className='value'
												style={value}>
												27
											</div>
										</div>

										<div>
											<div
												className='title'
												style={statsTitle}>
												Known
											</div>
											<i className='fa fa-group'></i>
											<div
												className='value'
												style={value}>
												10+ years
											</div>
										</div>
									</div>
								</div>
							</div>
							{/* === FRONT BLERP ON CARD === */}
							<div className='general' style={general}>
								<h1 className='cardHeader'>Alexa Zylstra</h1>
								<p>Badass Bish</p>
								<span className='more' style={more}>
									Mouse over the card for more info
								</span>
							</div>
						</div>
						{/* breaking up divs, dont mind me */}
					</div>
				</div>
			</div>
			{/* end div */}
		</React.Fragment>
	);
}

export default Ref;
