import styled, { keyframes, css } from 'styled-components';

// Style thats on the app as a whole
export const appContainer = {
	display: 'flex',
	position: 'absolute',
	left: 'calc(50% - 600px)',
	height: '100vh',
	top: '0',
	transition: 'all 1.5s ease',
	maxWidth: '1200px',
	minWidth: '1200px',
	fontFamily: 'roboto',
};
// Variation of pageContainer
export const pagesContainer = {
	height: '800px',
	display: 'flex',
	flexDirection: 'column',
	maxWidth: '1200px',
	minWidth: '1200px',
	marginTop: 'calc(50vh - 400px)',
	marginBottom: 'calc(50vh - 400px)',
};
// style that is on each component page
export const pageContainer = {
	display: 'flex',
	minHeight: '800px',
	maxHeight: '800px',
	marginTop: 'calc(50vh - 400px)',
	marginBottom: 'calc(50vh - 400px)',
};

/* ============================== NAV SECTION ============================== */
export const navTitle = {
	fontSize: '1.75rem',
	// paddingRight: '24px',
	paddingRight: '3%',
	position: 'absolute',
	bottom: '10px',
	right: '10px',
	color: 'rgba(255,255,255,0.8)',
	transition: 'all 1.5s ease',
	textShadow: `2px 2px rgba(0,0,0,0.2)`,
	//opacity: 0.5,
};
export const navBox = {
	display: 'flex',
	paddingTop: '50px',
	cursor: 'pointer',
	width: 250,
	color: 'white',
};
export const navLinks = {
	display: 'inline-block',
	marginRight: '20px',
	lineHeight: 1.5,
	padding: 0,
};
export const navToolbar = {
	color: 'white',
	display: 'flex',
	alignContent: 'start',
	alignItems: 'baseline',
	marginLeft: '5px',
	background: ' rgba(255, 255, 255, 0.3)',
	textShadow: `2px 2px rgba(0,0,0,0.2)`,
	zIndex: '5',
	padding: '5px',
	width: '100vw',
};
export const toolbarImage = {
	height: '25px',
	width: '25px',
	borderRadius: '100%',
	transform: 'scale(2)',
	overflow: 'hidden',
	display: 'inline-block',
	// border: ' 1px solid white',
	// boxShadow: '0 0 10px 10px white',
	marginLeft: 25,
};
export const menuIcon = {
	height: '50px',
	width: '50px',
	cursor: 'pointer',
	textShadow: '2px 2px rgba(0,0,0,0.3)',
	minWidth: '30px', // Set a minimum width
	minHeight: '30px', // Set a minimum height
};
export const avesImg = {
	height: '150px',
	width: '150px',
	borderRadius: 300,
	border: '2px solid #e9f4e9',
	boxShadow: 2,
	cursor: 'pointer',
	marginLeft: 'auto',
	marginRight: 'auto',
};

export const navTitleText = {
	fontFamily: 'Roboto',
	textAlign: 'center',
	pt: 4,
	color: 'white',
	fontSize: 22,
	marginBottom: '5px',
};
export const navSubtitleText = {
	fontFamily: 'Roboto',
	textAlign: 'center',
	fontWeight: 'lighter',
	pt: 1,
	color: 'white',
	fontSize: 18,
	marginBottom: '20px',
};

export const closeIcon = {
	display: 'block',
	textAlign: 'center',
	height: '75px',
	width: '75px',
	margin: '20px auto auto auto',
	cursor: 'pointer',
	padding: '20px',
	borderRadius: 300,
	background: ' rgba(255, 255, 255, 0.2)',
	boxShadow: '0 2px 30px rgba(0, 0, 0, 0.1)',
	backdropFilter: 'blur(5px)',
	border: '1px solid rgba(255, 255, 255, 0.2)',
};
/* ============================== LOGO SLIDING SECTION ============================== */
export const logoSliderContainer = {
	position: 'absolute',
	color: 'white',
	background: `linear-gradient(
        rgba(255, 255, 255, 1),
        rgba(255, 255, 255, 0.25)
    )`,
	height: '120vh',
	width: '350px',
	borderRadius: '250px',
	left: '5%',
	top: '35%',
};
export const logoSliderImage = {
	pointerEvents: 'none',
	position: 'relative',
	width: '300px',
	height: '300px',
	display: 'inline-block',
	top: '15px',
	borderRadius: '50%',
	left: '24px',
	transition: 'all 1.5s ease',
};
export const logoSliderCircle = {
	position: 'absolute',
	color: 'white',
	border: ' 5px solid white',
	height: '400px',
	width: '400px',
	borderRadius: '50%',
	left: '-26px',
	bottom: '-30px',
	boxShadow: '0 0 30px 15px white',
	display: 'block',
	transition: 'all 0.5s ease',
	opacity: '0',
};
/* ============================== LANDING SECTION ============================== */
export const landingContainer = {
	minHeight: '800px',
	overflow: 'hidden',
	marginBottom: 'calc(50vh - 400px)',
};
export const landingHeader = {
	position: 'relative',
	color: 'white',
	left: '40%',
	top: '26%',
	height: '50px',
	fontSize: '50px',
	fontFamily: 'Roboto',
};
export const landingText = {
	display: 'inline-block',
	fontSize: '32px',
	position: 'relative',
	left: '40%',
	top: '40%',
	color: 'white',
	marginTop: '15px',
	width: '400px',
};
export const landingTitle = {
	border: 'solid 1px white',
	borderRadius: '36px',
	padding: '5px',
	display: 'block',
	textAlign: 'center',
	letterSpacing: '5px',
	fontFamily: 'Roboto',
	fontSize: '1em',
};
export const landingSubtitle = {
	marginTop: '15px',
	marginBottom: '15px',
	borderRadius: '36px',
	width: '400px',
	padding: '5px',
	display: 'block',
	fontFamily: 'Roboto',
	position: 'absolute',
	fontSize: '1em',
};

export const landingButton = {
	color: 'white',
	backgroundColor: 'transparent',
	border: 'none',
	fontSize: '65px',
	cursor: 'pointer',
};
export const landingButtonSpan = {
	display: 'flex',
	justifyContent: 'space-evenly',
	flexDirection: 'row',
	width: '100%',
	height: '100px',
	alignItems: 'center',
};
// export const landingCTA = {
// 	fontFamily: 'Space Mono, monospaced',
// 	textShadow: `1px 1px rgba(0,0,0,0.3)`,
// 	display: 'inline',
// 	animation: css`
// 		${pulseAnimation} 1.5s infinite
// 	`,
// }
// =========PULSE ANIMATION ON BUTTONS
// Define the keyframes for the pulse animation
export const pulseAnimation = keyframes`
  0% {
    transform: scale(0.9);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 50px rgba(90, 153, 212, 0);
  }
  100% {
    transform: scale(0.9);
    box-shadow: 0 0 0 0 rgba(90, 153, 212, 0);
  }
`;
export const LandingCTA = styled.span`
	font-family: 'Space Mono', monospaced;
	text-shadow: 1px 1px rgba(0, 0, 0, 0.3);
	animation: ${pulseAnimation} 1.5s infinite;
	display: 'inline';
	transition: 'all .2s ease';
	width: 100%;
`;
export const PulseButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 50px;
	height: 50px;
	border: none;
	border-radius: 50%;
	background: white;
	cursor: pointer;
	box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
	animation: ${pulseAnimation} 1.5s infinite;
`;

/* { ========= NAME ANIMATION } */
export const letter = {
	display: 'inline-block',
	opacity: '0',
	pointerEvents: 'none',
	transition: 'all .2s ease',
	fontSize: '1em',
};
/* ============================== ABOUT SECTION ============================== */

export const aboutTitle = {
	color: 'white',
	display: 'flex',
	fontSize: '80px',
	fontFamily: 'Roboto',
	textShadow: `4px 4px rgba(0,0,0,0.1)`,
	width: '440px',
	left: '2.5%',
	top: '65%',
	position: 'relative',
};
export const aboutContent = {
	width: '700px',
	height: '650px',
	position: 'relative',
	padding: '15px',
	borderRadius: '36px',
	background: ' rgba(255, 255, 255, 0.2)',
	boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
	backdropFilter: 'blur(5px)',
	border: '1px solid rgba(255, 255, 255, 0.3)',
	color: 'white',
	lineHeight: '1.35',
	fontFamily: 'Roboto',
	textShadow: `1px 1px rgba(0,0,0,0.1)`,
	overflow: 'hidden',
};
export const aboutIntroBox = {
	width: '600px',
	height: '100%',
	// position: 'relative',
	padding: '15px',
	color: 'white',
	textShadow: `1px 1px rgba(0,0,0,0.1)`,
	display: 'flex',
	flexDirection: 'column',
	textAlign: 'center',
	justifyContent: 'center',
	alignItems: 'center',
	// FIXME: fadeTransition has 'left:0', left margin is to compensate
	margin: ' 0px 0px 0px 20px',
};
export const aboutSubtitle = {
	padding: '15px 25px 15px 25px',
	fontSize: '40px',
	color: 'white',
	lineHeight: '1.25',
	fontFamily: 'Roboto',
	textAlign: 'center',
	textShadow: '1px 1px rgba(0,0,0,0.3)',
	transition: 'all .2s ease',
	margin: '0 0 10px 0',
	minWidth: '50%',
	background:
		'linear-gradient(90deg, rgba(228,161,205,0.18) 0%, rgba(157,228,245,0.3) 100%)',
	// height: '150px',
	fontWeight: 'bold',
	border: '1px solid white',
	borderRadius: 5,
};
export const waveIcon = {
	fontSize: '40px',
	verticalAlign: 'middle',
};
export const aboutText = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	textShadow: `2px 2px rgba(0,0,0,0.1)`,
	fontSize: '24px',
	height: '150px',
	// fontWeight: 'lighter',
	textAlign: 'center',
};
export const aboutTextSub = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	textShadow: `2px 2px rgba(0,0,0,0.1)`,
	fontSize: '24px',
	height: '150px',
	textAlign: 'center',
};
export const aboutOverflow = {
	overflow: 'scroll',
	maxHeight: '100%',
};
// Skills portion of about page
export const skillSubtitle = {
	fontSize: '24px',
	fontFamily: 'Roboto',
	display: 'flex',
	background:
		'linear-gradient(90deg, rgba(228,161,205,0.18) 0%, rgba(157,228,245,0.3) 100%)',
	padding: '15px 25px 15px 25px',
	justifyContent: 'center',
	width: 650,
	fontWeight: 'bold',
	textShadow: '1px 1px rgba(0,0,0,0.3)',
};
export const aboutSkill = {
	padding: 10,
	margin: 5,
	borderRadius: 5,
	fontWeight: 'lighter',
};

export const aboutFrontSkill = {
	background: 'rgba(157,228,245,0.18)',
};
export const aboutBackSkill = {
	background: 'rgba(228,161,205,0.18)',
};

export const techBox = {
	color: 'white',
	display: 'flex',
	flexDirection: 'column',
	border: '1px solid white',
	borderRadius: 5,
	overflow: 'hidden',
	background: 'rgba(0, 0, 0, 0.1)',
	fontSize: '16px',
};
export const skillBox = {
	display: 'flex',
	flexDirection: 'column',
	flexWrap: 'wrap',
	alignItems: 'center',
	justifyContent: 'center',
	color: 'white',
	fontWeight: 'lighter',
	fontSize: '16px',
	marginTop: '15px',
	border: '1px solid white',
	borderRadius: 5,
	overflow: 'hidden',
	background: 'rgba(0, 0, 0, 0.1)',
};
export const aboutBubbleItem = {
	position: 'relative',
	display: 'inline-block',
	color: 'white',
	margin: 5,
	padding: 15,
	borderRadius: 5,
	border: '1px solid white',
	fontWeight: 'lighter',
	textAlign: 'center',
	textDecoration: 'none',
	textShadow: '1px 1px rgba(0,0,0,0.3)',
	//
};
export const subSkillBox = {
	display: 'flex',
	flexWrap: 'wrap',
	alignItems: 'center',
	justifyContent: 'center',
	width: 600,
	overflow: 'hidden',
};
export const aboutButton = {
	borderRadius: '36px',
	border: '1px solid white',
	textAlign: 'center',
	listStyle: 'none',
	width: '150px',
	height: '65px',
	color: 'white',
	fontSize: '18px',
	lineHeight: '1.25',
	backgroundColor: 'transparent',
	cursor: 'pointer',
	marginTop: '30px',
};
export const aboutButtonSpan = {
	display: 'flex',
	justifyContent: 'space-around',
	flexDirection: 'row',
	width: '700px',
	height: '150px',
};
export const fadeTransition = {
	transition: `ease 1s`,
	position: 'absolute',
	top: 0,
	left: 0,
	padding: '20px',
	height: '650px',
};

/* ============================== EDUCATION SECTION ============================== */
export const eduButtonSpan = {
	display: 'flex',
	justifyContent: 'space-around',
	flexDirection: 'row',
	width: '380px',
	height: '150px',
};

export const eduButton = {
	borderRadius: '36px',
	border: '1px solid white',
	textAlign: 'center',
	listStyle: 'none',
	width: '150px',
	height: '65px',
	color: 'white',
	fontSize: '18px',
	lineHeight: '1.25',
	backgroundColor: 'transparent',
	cursor: 'pointer',
	marginTop: '30px',
};

export const orbitalContainer = {
	height: '780px',
	width: '600px',
	opacity: '0',
	position: 'relative',
	transition: 'all 1s ease',
	display: 'flex',
	alignItems: 'center',
	left: '-120px',
	top: '50px',
};

export const orbitalBox = {
	offsetPath: `path('M150,0 A150,150 0 1,1 150,300 A150,150 0 1,1 150,0')`,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	position: 'absolute',
	width: '600px',
	height: '150px',
	left: '190px',
	marginBottom: '150px',
	cursor: 'pointer',
	borderRadius: '36px',
	transition: 'all .2s ease',
};

export const eduTitle = {
	position: 'absolute',
	color: 'white',
	transition: 'all .2s ease',
	paddingBottom: '125px',
	textAlign: 'center',
	margin: '0',
	alignItems: 'center',
	display: 'flex',
	fontSize: '80px',
	fontFamily: 'Roboto',
	textShadow: `4px 4px rgba(0,0,0,0.1)`,
};

export const eduDescriptionHeader = {
	color: 'white',
	transition: 'all .2s ease',
	textAlign: 'center',
	fontSize: '25px',
	paddingTop: '20px',
	fontFamily: 'Roboto',
	textShadow: `2px 2px rgba(0,0,0,0.1)`,
};

export const cardContainer = {
	width: '400px',
	display: 'flex',
	transition: 'all 1s ease',
	flexDirection: 'column',
	overflow: 'hidden',
};

export const eduHeader = {
	transition: 'all 0.2s ease',
	padding: '5px',
	color: 'white',
	fontSize: '22px',
	textAlign: 'center',
	alignItems: 'center',
	display: 'flex',
	fontFamily: 'Roboto',
	textShadow: `2px 2px rgba(0,0,0,0.1)`,
};

export const eduCardActive = {
	height: 'fit-content',
	fontFamily: 'Roboto',
	padding: '15px',
	justifyContent: 'center',
	textAlign: 'center',
	display: 'flex',
	width: '350px',
	position: 'relative',
	cursor: 'pointer',
	borderRadius: '36px',
	margin: '15px',
	background: 'rgba(255, 255, 255, 0.2)',
	boxShadow: ' 0 4px 20px rgba(255, 255, 255, 0.5)',
	backdropFilter: ' blur(5px)',
	border: '1px solid rgba(255, 255, 255, 0.8)',
};

export const eduCardInactive = {
	height: 'fit-content',
	fontFamily: 'Roboto',
	padding: '15px',
	justifyContent: 'center',
	textAlign: 'center',
	display: 'flex',
	width: '350px',
	position: 'relative',
	cursor: 'pointer',
	borderRadius: '36px',
	margin: '15px',
	background: 'rgba(255, 255, 255, 0.2)',
	boxShadow: ' 0 4px 30px rgba(0, 0, 0, 0.1)',
	backdropFilter: ' blur(5px)',
	border: '1px solid rgba(255, 255, 255, 0.3)',
};
export const eduImage = {
	display: 'flex',
	marginLeft: 'auto',
	marginRight: 'auto',
	WebkitFilter: 'drop-shadow(5px 5px 5px #666666)',
	filter: 'drop-shadow(5px 5px 5px #666666)',
	transition: 'all .3s ease',
};
export const eduImageInactive = {
	width: '150px',
};
export const eduImageActive = {
	width: '250px',
};
export const eduSlideshow = {
	height: '275px',
	fontFamily: 'Roboto',
	fontSize: '20px',
	padding: '15px',
	justifyContent: 'center',
	color: 'white',
	display: 'flex',
	width: '350px',
	position: 'relative',
	cursor: 'pointer',
	borderRadius: '36px',
	margin: '15px',
	background: 'rgba(255, 255, 255, 0.2)',
	boxShadow: ' 0 4px 30px rgba(0, 0, 0, 0.1)',
	backdropFilter: ' blur(5px)',
	border: '1px solid rgba(255, 255, 255, 0.3)',
	textShadow: `1px 1px rgba(0,0,0,0.1)`,
	listStyleType: 'none',
	transition: 'all .2s ease',
};
export const myEduActive = {
	display: 'block',
	height: 275,
	textAlign: 'center',
	opacity: 1,
	position: 'absolute',
	transition: 'all 1s ease',
	marginTop: 10,
	// lineHeight: 1.25,
};
export const myEduInactive = {
	height: 275,
	display: 'block',
	textAlign: 'center',
	opacity: 0,
	position: 'absolute',
	transition: 'all 1s ease',
};
/* ============================== SVG PATH SECTION ============================== */
export const svgContainer = {
	position: 'absolute',
	top: '345vh',
	left: '350px',
	cursor: 'pointer',
	zIndex: '-1',
};

export const svgCord = {
	//width: '600px',
	height: '120vh',
	pointerEvents: 'none',
	//opacity: 0,
};

export const animateSvgStroke1 = {
	'@WebkitKeyframes animateSvgStroke1': {
		'0%': {
			strokeDashoffset: '2515.90478515625px',
			strokeDasharray: '2515.90478515625px',
		},
		'100%': {
			strokeDashoffset: '0',
			strokeDasharray: '2515.90478515625px',
		},
	},
	'@keyframes animateSvgStroke1': {
		'0%': {
			strokeDashoffset: '2515.90478515625px',
			strokeDasharray: '2515.90478515625px',
		},
		'100%': {
			strokeDashoffset: '0',
			strokeDasharray: '2515.90478515625px',
		},
	},
	'@keyframes animateSvgStrokeReverse': {
		'100%': {
			strokeDashoffset: '2515.90478515625px',
			strokeDasharray: '2515.90478515625px',
		},
		'0%': {
			strokeDashoffset: '0',
			strokeDasharray: '2515.90478515625px',
		},
	},
};

export const svgButton = {
	borderRadius: '36px',
	border: '1px solid white',
	textAlign: 'center',
	listStyle: 'none',
	width: '130px',
	height: '65px',
	color: 'white',
	fontSize: '16px',
	lineHeight: '1.25',
	backgroundColor: 'transparent',
	cursor: 'pointer',
	marginTop: '30px',
};
/* ============================== PROJECTS SECTION ============================== */
export const projectsButtonSpan = {
	display: 'flex',
	justifyContent: 'space-around',
	flexDirection: 'row',
	width: '450px',
	height: '150px',
};
export const projectsButton = {
	borderRadius: '36px',
	border: '1px solid white',
	textAlign: 'center',
	listStyle: 'none',
	width: '120px',
	height: '65px',
	color: 'white',
	fontSize: '18px',
	lineHeight: '1.25',
	backgroundColor: 'transparent',
	cursor: 'pointer',
	marginTop: '30px',
};
export const projectContainer = {
	display: 'flex',
	flexDirection: 'column', // Stack content vertically
	alignItems: 'center', // Center horizontally
	justifyContent: 'center', // Center vertically
	fontFamily: 'Roboto',
};
/* ========== LEFT SIDE COMPUTER SECTION STARTS*/
/* Project page title */
export const projectTitle = {
	position: 'relative',
	color: 'white',
	transition: 'all .2s ease',
	textAlign: 'center',
	marginTop: '50px',
	marginBottom: '25px',
	alignItems: 'center',
	display: 'flex',
	fontSize: '80px',
	textShadow: `4px 4px rgba(0,0,0,0.1)`,
};
/* Project text blerb */
export const projectContent = {
	fontFamily: 'roboto',
	position: 'relative',
	height: '400px',
	width: '450px',
	lineHeight: '1.25',
	borderRadius: '36px',
	background: 'rgba(255, 255, 255, 0.2)',
	boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
	border: ' 1px solid rgba(255, 255, 255, 0.3)',
	fontSize: '20px',
	color: 'white',
	padding: '15px',
	textShadow: `1px 1px rgba(0,0,0,0.1)`,
};
export const textSlideshow = {
	position: 'relative',
	padding: '15px',
	right: '5px',
};
/* Hide the images by default */
export const mySlides = {
	display: 'block',
	transition: 'all 1.0s ease',
};
/* Hide the images by default */
export const projectSlides = {
	display: 'block',
	position: 'absolute',
	top: 0,
	left: 15,
	height: '400px',
	width: '400px',
	transition: 'all 1.0s ease',
};
export const slideTitle = {
	fontSize: '26px',
	textAlign: 'center',
	fontWeight: 'bold',
};
/* project github icon */
export const iconContainer = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
};
export const github = {
	fontSize: '40px',
};

/* ===============RIGHT SIDE COMPUTER SECTION STARTS */
/* computer image */
export const computer = {
	pointerEvents: 'none',
	position: 'relative',
	width: '600px',
	height: '600px',
	display: 'inline-block',
	left: '15px',
	transition: 'all 1.5s ease',
};
export const computerImage = {
	width: '550px',
	height: '310px',
	left: '35px',
	top: '55px',
	position: 'absolute',
};
/* Computer container */
export const computerContainer = {
	display: 'flex',
	position: 'relative',
	height: '600px',
	width: '600px',
	marginTop: '100px',
};

/* Next & previous buttons */
export const arrows = {
	cursor: 'pointer',
	position: 'absolute',
	top: '30%',
	width: 'auto',
	marginTop: '22px',
	padding: '16px',
	color: 'white',
	fontSize: '60px',
	transition: '0.6s ease',
	borderRadius: '0 3px 3px 0',
	userSelect: 'none',
};
/* Position the "next button" to the right */
export const next = {
	right: '-75px',
	borderRadius: '3px 0 0 3px',
};
export const prev = {
	left: '-45px',
	borderRadius: '3px 0 0 3px',
};
/* Fading animation */
// FIXME: add transition to all slides/img for smoother look
export const fade = {
	animationName: 'fade',
	animationDuration: '1.5s',
};
/* ============================== RESUME SECTION ============================== */
export const resumeContainer = {
	flexDirection: 'column',
};

export const resumeButtonSpan = {
	display: 'flex',
	justifyContent: 'space-around',
	flexDirection: 'row',
	width: '800px',
	height: '150px',
};
export const resumeButton = {
	borderRadius: '36px',
	border: '1px solid white',
	textAlign: 'center',
	listStyle: 'none',
	width: '150px',
	height: '65px',
	color: 'white',
	fontSize: '18px',
	lineHeight: '1.25',
	backgroundColor: 'transparent',
	cursor: 'pointer',
	marginTop: '30px',
};

export const resumeTitle = {
	color: 'white',
	transition: 'all .2s ease',
	textAlign: 'center',
	margin: '0',
	alignItems: 'center',
	display: 'flex',
	fontSize: '80px',
	fontFamily: 'Roboto',
	minWidth: '50%',
	textShadow: `4px 4px rgba(0,0,0,0.1)`,
};
export const resumeBox = {
	display: 'flex',
	width: '100%',
	height: '100px',
	flexDirection: 'horizontal',
	justifyContent: 'space-between',
};

/* typing animation */
export const typingContainer = {
	textShadow: `2px 2px rgba(0,0,0,0.1)`,
	fontSize: '36px',
	color: 'white',
	padding: '5px',
	fontWeight: 'light',
	letterSpacing: '0.1rem',
	textAlign: 'right',
	display: 'flex',
	justifyContent: 'end',
	minWidth: '50%',
	height: '50px',
	maxWidth: '50%',
};
/* snippet of code for resume */
export const codeBox = {
	textShadow: `2px 2px rgba(0,0,0,0.1)`,
	flexWrap: 'wrap',
	display: 'flex',
	position: 'relative',
	height: '600px',
	width: '100%',
	overflow: 'hidden',
	fontSize: '18px',
	borderRadius: '36px',
	background: 'rgba(0, 0, 0, 0.4)',
	boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
	backdropFilter: 'blur(5px)',
	WebkitBackdropFilter: 'blur(5px)',
	border: '1px solid rgba(255, 255, 255, 0.6)',
};
export const codeContent = {
	position: 'absolute',
	margin: '35px',
	minWidth: '1130px',
	maxWidth: '1130px',
	overflow: 'auto',
	height: '500px',
	whiteSpace: 'pre-wrap',
	overflowWrap: 'normal',
	//WordWrap: 'normal,',
};
export const resumePlainText = {
	color: 'white',
	fontFamily: 'roboto',
	borderRadius: '25px',
	position: 'absolute',
	margin: '35px',
	minWidth: '1130px',
	maxWidth: '1130px',
	overflow: 'auto',
	height: '500px',
	whiteSpace: 'pre-wrap',
	overflowWrap: 'normal',
};
export const typedText = {
	fontWeight: 'normal',
	color: 'rgba(248, 201, 195, 1)',
};

// Define the blink keyframes
// TODO: incorporate with code
const blink = keyframes`
  0% {
    background-color: #ccc;
  }
  49% {
    background-color: #ccc;
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
  100% {
    background-color: #ccc;
  }
`;
// Define your styles using styled-components syntax
export const codeCursor = css`
	display: inline-block;
	background-color: #ccc;
	margin-left: 0.1rem;
	width: 3px;
	animation: ${blink} 1s infinite;
`;

export const text = {
	// font: 'bold 1.25rem/1 helvetica',
	// color: 'rgba(153, 179, 252, 1)',
	// position: 'absolute',
	// top: '50%',
	// transform: 'translateY(-52%)',
	// left: '0',
	// right: '0',
};

/* ============================== REFERNCES SECTION ============================== */
export const referencesContainer = {
	display: 'flex',
	position: 'relative',
	alignItems: 'center',
	fontFamily: 'Roboto',
	flexDirection: 'row',
};

export const referencesTitle = {
	color: 'white',
	transition: 'all .2s ease',
	display: 'flex',
	fontSize: '80px',
	textShadow: `4px 4px rgba(0,0,0,0.1)`,
	textAlign: 'center',
	margin: '0',
	marginTop: 50,
	//minWidth: '50%',
	alignItems: 'center',
	//marginBottom: 30,
};
export const referencesSubtitle = {
	fontSize: '36px',
	color: 'white',
	fontFamily: 'Roboto',
	textAlign: 'right',
	textShadow: `4px 4px rgba(0,0,0,0.1)`,
	minWidth: '50%',
	padding: '5px',
	fontWeight: 'light',
	display: 'flex',
	justifyContent: 'end',
	maxWidth: '50%',
};
// box containing ref cards
export const referencesBox = {
	display: 'flex',
	flexDirection: 'column',
	flexWrap: 'nowrap',
	alignItems: 'center',
	position: 'relative',
	height: '800px',
	maxWidth: '560px',
	//overflow: 'hidden',
};
// USED IN MULTIPLE PLACES ON CARD
export const center = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	WebkitTransform: 'translate(-50%, -50%)',
};
// EACH CARD STYLING
export const card = {
	width: '550px',
	height: '225px',
	background: 'linear-gradient(#f8f8f8, #fff)',
	boxShadow: '0 8px 16px -8px',
	borderRadius: '6px',
	overflow: 'hidden',
	position: 'relative',
	margin: '5px',
};
// NAME TEXT
export const cardHeader = {
	textAlign: 'center',
};
// BACKGROUND COLOR AND CONTAINS AVATAR ON LEFT OF CARD
export const additional = {
	position: 'initial',
	width: '110px',
	height: '100%',
	transition: 'width 0.4s',
	overflow: 'hidden',
	zIndex: '2',
	background: `radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(134,70,252,1) 100%)`,
};

// .card .additional .user-card::after {
export const userCard = {
	width: '150px',
	height: '100%',
	position: 'relative',
	float: 'left',
	borderLeft: '2px solid rgba(0,0,0,0.025)',
};
export const userCardStats = {
	top: '15%',
	color: '#fff',
	textTransform: 'uppercase',
	fontSize: '0.75rem',
	fontWeight: 'bold',
	background: 'rgba(0, 0, 0, 0.15)',
	padding: '0.125rem 0.75rem',
	borderRadius: '100px',
	whiteSpace: 'nowrap',
	textShadow: `1px 1px rgba(0,0,0,0.1)`,
};
// .card .additional .user-card .points
export const points = {
	top: '85%',
	position: 'relative',
	textAlign: 'center',
	width: '50%',
	textShadow: `1px 1px rgba(0,0,0,0.1)`,
};
export const cardImage = {
	top: '50%',
	width: '110px',
	height: '110px',
};
export const moreInfo = {
	width: '350px',
	float: 'left',
	position: 'absolute',
	left: '150px',
	fontSize: '16px',
	color: 'white',
	height: '100%',
	textAlign: 'center',
	textShadow: `1px 1px rgba(0,0,0,0.1)`,
};
export const moreInfoTitle = {
	color: 'white',
	marginBottom: '30px',
	fontSize: '30px',
	textShadow: `1px 1px rgba(0,0,0,0.1)`,
};
export const coords = {
	margin: '0 1rem',
	color: 'white',
	fontSize: '18px',
	textShadow: `1px 1px rgba(0,0,0,0.1)`,
};
export const coordsSpan = {
	float: 'center',
	textAlign: 'center',
};

export const stats = {
	fontSize: '18px',
	display: 'inline-block',
	textAlign: 'center',
	position: 'absolute',
	bottom: '1rem',
	left: '1rem',
	right: '1rem',
	top: 'auto',
	color: '#fff',
	padding: '10px',
	width: '100%',
	textShadow: `2px 2px rgba(0,0,0,0.1)`,
};
export const statsTitle = {
	flex: '1',
	fontSize: '18px',
	textAlign: 'left',
	color: '#fff',
	textShadow: `1px 1px rgba(0,0,0,0.1)`,
	width: '100%',
};

export const value = {
	fontWeight: 'light',
	fontSize: '16px',
	textAlign: 'left',
	textShadow: `1px 1px rgba(0,0,0,0.1)`,
	width: '100%',
};

export const general = {
	width: '400px',
	height: '100%',
	position: 'absolute',
	right: '10px',
	top: '0',
	zIndex: '1',
	boxSizing: 'border-box',
	padding: '1rem',
	paddingTop: '0',
	textAlign: 'center',
	color: '#333333',
	textShadow: `1px 1px rgba(0,0,0,0.1)`,
};
export const more = {
	position: 'absolute',
	bottom: '1rem',
	right: '1rem',
	fontSize: '0.9rem',
	color: 'gray',
};
export const referencesButtonSpan = {
	display: 'flex',
	justifyContent: 'space-around',
	flexDirection: 'row',
	width: '400px',
	marginTop: '25px',
	position: 'relative',
};
export const referencesButton = {
	borderRadius: '36px',
	border: '1px solid white',
	textAlign: 'center',
	listStyle: 'none',
	width: '120px',
	height: '65px',
	color: 'white',
	fontSize: '18px',
	lineHeight: '1.25',
	backgroundColor: 'transparent',
	cursor: 'pointer',
};
/* ============================== CONTACT SECTION ============================== */

export const contactContainer = {
	display: 'flex',
	position: 'relative',
	fontFamily: 'Roboto',
	marginTop: 'calc(50vh - 400px)',
	marginBottom: 'calc(50vh - 400px)',
};
/*----------left side box---------> */
export const contactTextBox = {
	maxWidth: '600px',
	color: 'white',
	textAlign: 'center',
	width: '600px',
	height: '100%',
	display: 'flex',
	flexDirection: 'column',
};
export const contactTitle = {
	color: 'white',
	transition: 'all .2s ease',
	fontSize: '80px',
	textShadow: `4px 4px rgba(0,0,0,0.1)`,
	height: '100px',
};
export const contactSubtitle = {
	display: 'flex',
	justifyContent: 'space-between',
	padding: '10px',
	width: '100%',
	marginBottom: '20px',
	borderRadius: 7,
	textAlign: 'center',
	color: '#EEE',
	transition: 'all .2s ease',
	fontSize: '26px',
	fontWeight: 'normal',
	textShadow: `2px 2px rgba(0,0,0,0.3)`,
	background:
		'linear-gradient(90deg, rgba(228,161,205,0.18) 0%, rgba(157,228,245,0.3) 100%)',
};
/*---------------- Name drawing ---------> */
// contains the text and svg animation image, does not include the buttons
export const contactAnimation = {
	textAlign: 'center',
	fontSize: '26px',
	color: 'white',
	fontWeight: 'light',
	height: '550px',
};
export const thanksText = {
	textAlign: 'center',
	fontSize: '26px',
	color: 'white',
	fontWeight: 'light',
	height: '100px',
	textShadow: `1px 1px rgba(0,0,0,0.3)`,
};
export const myPath = {
	fill: 'none',
	stroke: 'white',
	strokeWidth: '4',
};
export const lineDrawing = {
	// background: 'green',
};

export const svgName = {
	height: '400px',
	transform: 'scale(1.5)',
};
// =============== contact buttons ===============
export const contactButtonSpan = {
	display: 'flex',
	justifyContent: 'space-around',
	flexDirection: 'row',
	width: '600px',
	height: '125px',
	// background: 'purple',
};
export const contactButton = {
	borderRadius: '36px',
	border: '1px solid white',
	textAlign: 'center',
	listStyle: 'none',
	width: '150px',
	height: '65px',
	color: 'white',
	fontSize: '18px',
	lineHeight: '1.25',
	backgroundColor: 'transparent',
	cursor: 'pointer',
	marginTop: '30px',
};
/*---------------- FORM ----------> */
/*---------------- right side box ----------> */
export const formDiv = {
	backgroundColor: 'rgba(72, 72, 72, 0.1)',
	WebkitBorderRadius: '7px',
	alignItems: 'center',
	textAlign: 'center',
	width: '600px',
	height: '100%',
	padding: '15px 25px 15px 25px',
	textShadow: '1px 1px rgba(0,0,0,0.3)',
	justifyContent: 'space-between',
	display: 'flex',
	flexDirection: 'column',
	border: '1px solid white',
	overflow: 'hidden',
};

export const feedbackInput = {
	color: '#3c3c3c',
	fontFamily: 'Helvetica, Arial, sans-serif',
	fontWeight: '500',
	fontSize: '24px',
	lineHeight: '24px',
	backgroundColor: '#fbfbfb',
	padding: '10px',
	textAlign: 'left',
	width: '100%',
	border: '3px solid rgba(0, 0, 0, 0)',
	borderRadius: '8px',
};
export const formText = {
	textAlign: 'left',
	backgroundPosition: '11px 8px',
	backgroundRepeat: 'no-repeat',
	fontSize: '26px',
	marginBottom: 10,
	display: 'block',
	color: '#EEE',
	textShadow: `1px 1px rgba(0,0,0,0.4)`,
};
export const name = {
	backgroundSize: '30px 30px',
	backgroundPosition: '11px 8px',
	backgroundRepeat: 'no-repeat',
	marginBottom: '20px',
};
export const email = {
	backgroundSize: '30px 30px',
	backgroundPosition: '11px 8px',
	backgroundRepeat: 'no-repeat',
	marginBottom: '20px',
};
export const comment = {
	backgroundSize: '30px 30px',
	backgroundPosition: '11px 8px',
	backgroundRepeat: 'no-repeat',
	padding: '10px',
};

export const textArea = {
	width: '100%',
	height: '150px',
	lineHeight: '22px',
	resize: 'vertical',
};

export const ease = {
	width: '0px',
	height: '74px',
	backgroundColor: '#fbfbfb',
	transition: '0.3s ease',
	WebkitTransition: '0.3s ease',
	MozTransition: '0.3s ease',
	OTransition: '0.3s ease',
	msTransition: '0.3s ease',
};

/* ============================== FOOTER SECTION ============================== */
export const footerContainer = {
	position: 'static',
	left: '0',
	right: '0',
	bottom: '0',
	background: 'rgba(255, 255, 255, 0.2)',
	boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
	backdropFilter: 'blur(5px)',
	WebkitBackdropFilter: 'blur(5px)',
	marginBottom: 'auto',
	width: '100%',
};
export const siteFooter = {
	padding: '45px 0 20px',
	fontSize: '15px',
	lineHeight: '24px',
	width: '100%',
	textAlign: 'center',
};
