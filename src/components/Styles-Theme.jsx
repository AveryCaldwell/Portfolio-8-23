import styled, { keyframes, css } from 'styled-components';
// breakpoints
// [theme.breakpoints.up('xs')]: {  },
// [theme.breakpoints.up('sm')]: {  },
// [theme.breakpoints.up('md')]: {  },
// [theme.breakpoints.up('lg')]: {  },
// [theme.breakpoints.up('xl')]: {  },

// Style thats on the app as a whole
export const appContainer = (theme) => ({
	display: 'flex',
	position: 'absolute',
	height: '100vh',
	top: '0',
	transition: 'all 1.5s ease',
	[theme.breakpoints.up('xs')]: {
		left: 'calc(50% - 150px)',
		maxWidth: '300px',
		minWidth: '300px',
	},
	[theme.breakpoints.up('sm')]: {
		left: 'calc(50% - 300px)',
		maxWidth: '600px',
		minWidth: '600px',
	},
	[theme.breakpoints.up('md')]: {
		left: 'calc(50% - 450px)',
		maxWidth: '900px',
		minWidth: '900px',
	},
	[theme.breakpoints.up('lg')]: {
		left: 'calc(50% - 600px)',
		maxWidth: '1200px',
		minWidth: '1200px',
	},
	[theme.breakpoints.up('xl')]: {
		left: 'calc(50% - 600px)',
		maxWidth: '1200px',
		minWidth: '1200px',
	},
	fontFamily: 'roboto',
});
// Variation of pageContainer
export const pagesContainer = (theme) => ({
	display: 'flex',
	flexDirection: 'column',
	[theme.breakpoints.up('xs')]: {
		height: '400px',
		maxWidth: '400px',
		minWidth: '400px',
		marginTop: 'calc(50vh - 20px)',
		marginBottom: 'calc(50vh - 20px)',
	},
	[theme.breakpoints.up('sm')]: {
		height: '600px',
		maxWidth: '600px',
		minWidth: '600px',
		marginTop: 'calc(50vh - 300px)',
		marginBottom: 'calc(50vh - 300px)',
	},
	[theme.breakpoints.up('md')]: {
		height: '600px',
		maxWidth: '900px',
		minWidth: '900px',
		marginTop: 'calc(50vh - 300px)',
		marginBottom: 'calc(50vh - 300px)',
	},
	[theme.breakpoints.up('lg')]: {
		height: '800px',
		maxWidth: '1200px',
		minWidth: '1200px',
		marginTop: 'calc(50vh - 400px)',
		marginBottom: 'calc(50vh - 400px)',
	},
	[theme.breakpoints.up('xl')]: {
		height: '800px',
		maxWidth: '1200px',
		minWidth: '1200px',
		marginTop: 'calc(50vh - 400px)',
		marginBottom: 'calc(50vh - 400px)',
	},
});
// style that is on each component page
export const pageContainer = (theme) => ({
	display: 'flex',
	[theme.breakpoints.up('xs')]: {
		maxHeight: '400px',
		minHeight: '400px',
		maxWidth: '400px',
		minWidth: '400px',
		marginTop: 'calc(50vh - 20px)',
		marginBottom: 'calc(50vh - 20px)',
	},
	[theme.breakpoints.up('sm')]: {
		maxHeight: '600px',
		minHeight: '600px',
		maxWidth: '600px',
		minWidth: '600px',
		marginTop: 'calc(50vh - 300px)',
		marginBottom: 'calc(50vh - 300px)',
	},
	[theme.breakpoints.up('md')]: {
		maxHeight: '600px',
		minHeight: '600px',
		maxWidth: '900px',
		minWidth: '900px',
		marginTop: 'calc(50vh - 300px)',
		marginBottom: 'calc(50vh - 300px)',
	},
	[theme.breakpoints.up('lg')]: {
		maxHeight: '800px',
		minHeight: '800px',
		maxWidth: '1200px',
		minWidth: '1200px',
		marginTop: 'calc(50vh - 400px)',
		marginBottom: 'calc(50vh - 400px)',
	},
	[theme.breakpoints.up('xl')]: {
		maxHeight: '800px',
		minHeight: '800px',
		maxWidth: '1200px',
		minWidth: '1200px',
		marginTop: 'calc(50vh - 400px)',
		marginBottom: 'calc(50vh - 400px)',
	},
});

/* ============================== NAV SECTION ============================== */
export const navTitle = (theme) => ({
	fontSize: '1.75rem',
	// paddingRight: '24px',
	paddingRight: '3%',
	position: 'absolute',
	bottom: '10px',
	right: '10px',
	color: 'rgba(255,255,255,0.8)',
	transition: 'all 1.5s ease',
	textShadow: `2px 2px rgba(0,0,0,0.2)`,
	[theme.breakpoints.up('xs')]: { display: 'none' },
	[theme.breakpoints.up('sm')]: { display: 'none' },
	[theme.breakpoints.up('md')]: { display: 'block' },
	[theme.breakpoints.up('lg')]: { display: 'block' },
	[theme.breakpoints.up('xl')]: { display: 'block' },

	//opacity: 0.5,
});
export const navBox = (theme) => ({
	display: 'flex',
	paddingTop: '50px',
	cursor: 'pointer',
	width: 250,
	color: 'white',
	flexDirection: 'column',
	alignItems: 'center',
	[theme.breakpoints.up('xs')]: { width: '100vw' },
	[theme.breakpoints.up('sm')]: { width: '100vw' },
	[theme.breakpoints.up('md')]: { width: 250 },
	[theme.breakpoints.up('lg')]: { width: 250 },
	[theme.breakpoints.up('xl')]: { width: 250 },
});
export const navLinks = (theme) => ({
	display: 'flex',
	flexDirection: 'column',
	marginRight: '20px',
	lineHeight: 1.5,
	padding: 0,
	// textAlign: 'center',
	alignItems: 'center',
	textShadow: `2px 2px rgba(0,0,0,0.2)`,
});
export const navIcons = (theme) => ({
	display: 'block',
	// textAlign: 'center',
	color: 'white',
	textShadow: `2px 2px rgba(0,0,0,0.2)`,
});
export const navTitleText = (theme) => ({
	fontFamily: 'Roboto',
	// textAlign: 'center',
	pt: 4,
	color: 'white',
	fontSize: 24,
	fontWeight: 'bold',
	marginBottom: '5px',
	textShadow: `2px 2px rgba(0,0,0,0.3)`,
});
export const navToolbar = (theme) => ({
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
	[theme.breakpoints.up('xs')]: { background: 'transparent' },
	[theme.breakpoints.up('sm')]: { background: 'transparent' },
	[theme.breakpoints.up('md')]: { background: 'rgba(255, 255, 255, 0.3)' },
	[theme.breakpoints.up('lg')]: { background: 'rgba(255, 255, 255, 0.3)' },
	[theme.breakpoints.up('xl')]: { background: 'rgba(255, 255, 255, 0.3)' },
});
export const toolbarImage = (theme) => ({
	height: '25px',
	width: '25px',
	borderRadius: '100%',
	transform: 'scale(2)',
	overflow: 'hidden',
	display: 'inline-block',
	// border: ' 1px solid white',
	// boxShadow: '0 0 10px 10px white',
	marginLeft: 25,
});
export const menuIcon = (theme) => ({
	height: '50px',
	width: '50px',
	cursor: 'pointer',
	textShadow: '2px 2px rgba(0,0,0,0.3)',
	minWidth: '30px',
	minHeight: '30px',
	color: 'white',
	margin: 'auto 0',
	[theme.breakpoints.up('xs')]: {
		background: 'rgba(0,0,0,0.3)',
		borderRadius: '12px',
	},
	[theme.breakpoints.up('sm')]: {
		background: 'rgba(0,0,0,0.3)',
		borderRadius: '12px',
	},
	[theme.breakpoints.up('md')]: { background: 'transparent' },
	[theme.breakpoints.up('lg')]: { background: 'transparent' },
	[theme.breakpoints.up('xl')]: { background: 'transparent' },
});
export const avesImg = (theme) => ({
	height: '150px',
	width: '150px',
	borderRadius: 300,
	border: '2px solid #e9f4e9',
	boxShadow: 2,
	cursor: 'pointer',
	marginLeft: 'auto',
	marginRight: 'auto',
});

export const navSubtitleText = (theme) => ({
	fontFamily: 'Roboto',
	textAlign: 'center',
	fontWeight: 'lighter',
	pt: 1,
	color: 'white',
	fontSize: 18,
	marginBottom: '20px',
});

export const closeIcon = (theme) => ({
	textAlign: 'center',
	flexDirection: 'column',
	display: 'flex',
	height: '60px',
	width: '60px',
	margin: '50% auto',
	cursor: 'pointer',
	padding: '20px',
	borderRadius: 300,
	background: ' rgba(255, 255, 255, 0.2)',
	boxShadow: '0 2px 30px rgba(0, 0, 0, 0.1)',
	backdropFilter: 'blur(5px)',
	border: '1px solid rgba(255, 255, 255, 0.2)',
});
/* ============================== LOGO SLIDING SECTION ============================== */
export const logoSliderContainer = (theme) => ({
	position: 'absolute',
	height: '120vh',
	color: 'white',
	background: `linear-gradient(
        rgba(255, 255, 255, 1),
        rgba(255, 255, 255, 0.25)
    )`,
	borderRadius: '250px',

	top: '35%',
	display: 'flex',
	[theme.breakpoints.up('xs')]: { width: '0px', left: '1%' },
	[theme.breakpoints.up('sm')]: { width: '250px', left: '2%' },
	[theme.breakpoints.up('md')]: { width: '300px', left: '3%' },
	[theme.breakpoints.up('lg')]: { width: '350px', left: '4%' },
	[theme.breakpoints.up('xl')]: { width: '350px', left: '5%' },
});
export const logoSliderImage = (theme) => ({
	pointerEvents: 'none',
	position: 'relative',
	width: '300px',
	height: '300px',
	display: 'inline-block',
	top: '15px',
	borderRadius: '50%',
	left: '24px',
	transition: 'all 1.5s ease',
	[theme.breakpoints.up('xs')]: { width: '0px', height: '0px' },
	[theme.breakpoints.up('sm')]: { width: '200px', height: '200px' },
	[theme.breakpoints.up('md')]: { width: '250px', height: '250px' },
	[theme.breakpoints.up('lg')]: { width: '300px', height: '300px' },
	[theme.breakpoints.up('xl')]: { width: '300px', height: '300px' },
});
export const logoSliderCircle = (theme) => ({
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
});
/* ============================== LANDING SECTION ============================== */
export const landingContainer = (theme) => ({
	overflow: 'hidden',
	[theme.breakpoints.up('xs')]: {
		minHeight: '400px',
		marginTop: 'calc(50vh - 20px)',
	},
	[theme.breakpoints.up('sm')]: {
		minHeight: '600px',
		marginTop: 'calc(50vh - 300px)',
	},
	[theme.breakpoints.up('md')]: {
		minHeight: '600px',
		marginTop: 'calc(50vh - 300px)',
	},
	[theme.breakpoints.up('lg')]: {
		minHeight: '800px',
		marginTop: 'calc(50vh - 400px)',
	},
	[theme.breakpoints.up('xl')]: {
		minHeight: '800px',
		marginTop: 'calc(50vh - 400px)',
	},
});
export const landingHeader = (theme) => ({
	position: 'relative',
	color: 'white',
	left: '40%',
	top: '22%',
	height: '50px',
	fontFamily: 'Roboto',
	[theme.breakpoints.up('xs')]: {
		top: '-50px',
		fontSize: '45px',
		margin: 'auto',
		alignItems: 'center',
	},
	[theme.breakpoints.up('sm')]: {
		top: 0,
		fontSize: '40px',
		left: '50%',
	},
	[theme.breakpoints.up('md')]: {
		top: '5%',
		fontSize: '45px',
		left: '40%',
	},
	[theme.breakpoints.up('lg')]: {
		top: '15%',
		fontSize: '50px',
		left: '40%',
	},
	[theme.breakpoints.up('xl')]: {
		top: '22%',
		fontSize: '50px',
		left: '40%',
	},
});
export const landingText = (theme) => ({
	display: 'inline-block',
	position: 'relative',
	color: 'white',
	marginTop: '15px',
	width: '400px',
	[theme.breakpoints.up('xs')]: {
		top: '25%',
		fontSize: '24px',
		width: '300px',
		margin: 'auto',
		left: '30%',
	},
	[theme.breakpoints.up('sm')]: {
		top: '20%',
		fontSize: '26px',
		left: '50%',
		width: '300px',
	},
	[theme.breakpoints.up('md')]: {
		top: '30%',
		fontSize: '26px',
		left: '40%',
		width: '375px',
	},
	[theme.breakpoints.up('lg')]: {
		top: '35%',
		fontSize: '32px',
		left: '40%',
		width: '400px',
	},
	[theme.breakpoints.up('xl')]: {
		top: '35%',
		fontSize: '32px',
		left: '40%',
		width: '400px',
	},
});
export const landingTitle = (theme) => ({
	border: 'solid 1px white',
	borderRadius: '36px',
	padding: '5px',
	display: 'block',
	textAlign: 'center',
	letterSpacing: '5px',
	fontFamily: 'Roboto',
	fontSize: '1em',
});
export const landingSubtitle = (theme) => ({
	marginBottom: '15px',
	borderRadius: '36px',
	width: '400px',
	padding: '5px',
	display: 'block',
	fontFamily: 'Roboto',
	position: 'absolute',
	fontSize: '1em',
	[theme.breakpoints.up('xs')]: {
		fontSize: '1em',
		background: 'red',
		width: '300px',
		margin: 'auto',
		letterSpacing: '3px',
		marginTop: '10px',
	},
	[theme.breakpoints.up('sm')]: {
		fontSize: '.75em',
		background: 'orange',
		width: '300px',
		letterSpacing: '3px',
		marginTop: '15px',
	},
	[theme.breakpoints.up('md')]: {
		fontSize: '.80em',
		background: 'yellow',
		width: '375px',
		marginTop: '20px',
	},
	[theme.breakpoints.up('lg')]: {
		fontSize: '1em',
		background: 'green',
		width: '400px',
		marginTop: '25px',
	},
	[theme.breakpoints.up('xl')]: {
		fontSize: '1em',
		background: 'blue',
		width: '400px',
		marginTop: '20px',
	},
});

export const landingButton = (theme) => ({
	color: 'white',
	backgroundColor: 'transparent',
	border: 'none',
	fontSize: '65px',
	cursor: 'pointer',
});
export const landingButtonBox = (theme) => ({
	display: 'flex',
	justifyContent: 'space-evenly',
	flexDirection: 'row',
	width: '100%',
	height: '100px',
	alignItems: 'center',
});

// =========PULSE ANIMATION ON BUTTONS
// Define the keyframes for the pulse animation
export const pulseAnimation = (theme) => keyframes`
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
// export const LandingCTA = (theme) => styled.span`
// 	font-family: 'Space Mono', monospaced;
// 	text-shadow: 1px 1px rgba(0, 0, 0, 0.3);
// 	animation: ${pulseAnimation} 1.5s infinite;
// 	display: 'inline';
// 	transition: 'all .2s ease';
// 	width: 100%;
// `;
// export const PulseButton = (theme) => styled.span`
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// 	width: 50px;
// 	height: 50px;
// 	border: none;
// 	border-radius: 50%;
// 	background: white;
// 	cursor: pointer;
// 	box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
// 	animation: ${pulseAnimation} 1.5s infinite;
// `;

/* { ========= NAME ANIMATION } */
export const letter = (theme) => ({
	display: 'inline-block',
	opacity: '0',
	pointerEvents: 'none',
	transition: 'all .2s ease',
	fontSize: '1em',
});
/* ============================== ABOUT SECTION ============================== */

export const aboutTitle = (theme) => ({
	color: 'white',
	display: 'flex',
	fontSize: '80px',
	fontFamily: 'Roboto',
	textShadow: `4px 4px rgba(0,0,0,0.1)`,
	width: '440px',
	left: '2.5%',
	top: '67%',
	position: 'relative',
});
export const aboutContent = (theme) => ({
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
});
export const aboutIntroBox = (theme) => ({
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
});
export const aboutSubtitle = (theme) => ({
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
});
export const waveIcon = (theme) => ({
	fontSize: '40px',
	verticalAlign: 'middle',
});
export const aboutText = (theme) => ({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	textShadow: `2px 2px rgba(0,0,0,0.1)`,
	fontSize: '24px',
	height: '150px',
	// fontWeight: 'lighter',
	textAlign: 'center',
});
export const aboutTextSub = (theme) => ({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	textShadow: `2px 2px rgba(0,0,0,0.1)`,
	fontSize: '24px',
	height: '150px',
	textAlign: 'center',
});
export const aboutOverflow = (theme) => ({
	overflow: 'scroll',
	maxHeight: '100%',
});
// Skills portion of about page
export const skillSubtitle = (theme) => ({
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
});
export const aboutSkill = (theme) => ({
	padding: 10,
	margin: 5,
	borderRadius: 5,
	fontWeight: 'lighter',
});

export const aboutFrontSkill = (theme) => ({
	background: 'rgba(157,228,245,0.18)',
});
export const aboutBackSkill = (theme) => ({
	background: 'rgba(228,161,205,0.18)',
});

export const techBox = (theme) => ({
	color: 'white',
	display: 'flex',
	flexDirection: 'column',
	border: '1px solid white',
	borderRadius: 5,
	overflow: 'hidden',
	background: 'rgba(0, 0, 0, 0.1)',
	fontSize: '16px',
});
export const skillBox = (theme) => ({
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
});
export const aboutBubbleItem = (theme) => ({
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
});
export const subSkillBox = (theme) => ({
	display: 'flex',
	flexWrap: 'wrap',
	alignItems: 'center',
	justifyContent: 'center',
	width: 600,
	overflow: 'hidden',
});
export const aboutButton = (theme) => ({
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
});
export const aboutButtonSpan = (theme) => ({
	display: 'flex',
	justifyContent: 'space-around',
	flexDirection: 'row',
	width: '700px',
	height: '150px',
});
export const fadeTransition = (theme) => ({
	transition: `ease 1s`,
	position: 'absolute',
	top: 0,
	left: 0,
	padding: '20px',
	height: '650px',
});

/* ============================== EDUCATION SECTION ============================== */
export const eduButtonSpan = (theme) => ({
	display: 'flex',
	justifyContent: 'space-around',
	flexDirection: 'row',
	width: '380px',
	height: '150px',
});

export const eduButton = (theme) => ({
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
});

export const orbitalContainer = (theme) => ({
	height: '780px',
	width: '600px',
	opacity: '0',
	position: 'relative',
	transition: 'all 1s ease',
	display: 'flex',
	alignItems: 'center',
	left: '-120px',
	top: '50px',
});

export const orbitalBox = (theme) => ({
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
});

export const eduTitle = (theme) => ({
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
});

export const eduDescriptionHeader = (theme) => ({
	color: 'white',
	transition: 'all .2s ease',
	textAlign: 'center',
	fontSize: '25px',
	paddingTop: '20px',
	fontFamily: 'Roboto',
	textShadow: `2px 2px rgba(0,0,0,0.1)`,
});

export const cardContainer = (theme) => ({
	width: '400px',
	display: 'flex',
	transition: 'all 1s ease',
	flexDirection: 'column',
	overflow: 'hidden',
});

export const eduHeader = (theme) => ({
	transition: 'all 0.2s ease',
	padding: '5px',
	color: 'white',
	fontSize: '22px',
	textAlign: 'center',
	alignItems: 'center',
	display: 'flex',
	fontFamily: 'Roboto',
	textShadow: `2px 2px rgba(0,0,0,0.1)`,
});

export const eduCardActive = (theme) => ({
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
});

export const eduCardInactive = (theme) => ({
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
});
export const eduImage = (theme) => ({
	display: 'flex',
	marginLeft: 'auto',
	marginRight: 'auto',
	WebkitFilter: 'drop-shadow(5px 5px 5px #666666)',
	filter: 'drop-shadow(5px 5px 5px #666666)',
	transition: 'all .3s ease',
});
export const eduImageInactive = (theme) => ({
	width: '150px',
});
export const eduImageActive = (theme) => ({
	width: '250px',
});
export const eduSlideshow = (theme) => ({
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
});
export const myEduActive = (theme) => ({
	display: 'block',
	height: 275,
	textAlign: 'center',
	opacity: 1,
	position: 'absolute',
	transition: 'all 1s ease',
	marginTop: 10,
	// lineHeight: 1.25,
});
export const myEduInactive = (theme) => ({
	height: 275,
	display: 'block',
	textAlign: 'center',
	opacity: 0,
	position: 'absolute',
	transition: 'all 1s ease',
});
/* ============================== SVG PATH SECTION ============================== */
export const svgContainer = (theme) => ({
	position: 'absolute',
	top: '345vh',
	left: '350px',
	cursor: 'pointer',
	zIndex: '-1',
});

export const svgCord = (theme) => ({
	//width: '600px',
	height: '120vh',
	pointerEvents: 'none',
	//opacity: 0,
});

export const animateSvgStroke1 = (theme) => ({
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
});

export const svgButton = (theme) => ({
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
});
/* ============================== PROJECTS SECTION ============================== */
export const projectsButtonSpan = (theme) => ({
	display: 'flex',
	justifyContent: 'space-around',
	flexDirection: 'row',
	width: '450px',
	height: '150px',
});
export const projectsButton = (theme) => ({
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
});
export const projectContainer = (theme) => ({
	display: 'flex',
	flexDirection: 'column', // Stack content vertically
	alignItems: 'center', // Center horizontally
	justifyContent: 'center', // Center vertically
	fontFamily: 'Roboto',
});
/* ========== LEFT SIDE COMPUTER SECTION STARTS*/
/* Project page title */
export const projectTitle = (theme) => ({
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
});
/* Project text blerb */
export const projectContent = (theme) => ({
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
});
export const textSlideshow = (theme) => ({
	position: 'relative',
	padding: '15px',
	right: '5px',
});
/* Hide the images by default */
export const mySlides = (theme) => ({
	display: 'block',
	transition: 'all 1.0s ease',
});
/* Hide the images by default */
export const projectSlides = (theme) => ({
	display: 'block',
	position: 'absolute',
	top: 0,
	left: 15,
	height: '400px',
	width: '400px',
	transition: 'all 1.0s ease',
});
export const slideTitle = (theme) => ({
	fontSize: '26px',
	textAlign: 'center',
	fontWeight: 'bold',
});
/* project github icon */
export const iconContainer = (theme) => ({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
});
export const github = (theme) => ({
	fontSize: '40px',
});

/* ===============RIGHT SIDE COMPUTER SECTION STARTS */
/* computer image */
export const computer = (theme) => ({
	pointerEvents: 'none',
	position: 'relative',
	width: '600px',
	height: '600px',
	display: 'inline-block',
	left: '15px',
	transition: 'all 1.5s ease',
});
export const computerImage = (theme) => ({
	width: '550px',
	height: '310px',
	left: '35px',
	top: '55px',
	position: 'absolute',
});
/* Computer container */
export const computerContainer = (theme) => ({
	display: 'flex',
	position: 'relative',
	height: '600px',
	width: '600px',
	marginTop: '100px',
});

/* Next & previous buttons */
export const arrows = (theme) => ({
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
});
/* Position the "next button" to the right */
export const next = (theme) => ({
	right: '-75px',
	borderRadius: '3px 0 0 3px',
});
export const prev = (theme) => ({
	left: '-45px',
	borderRadius: '3px 0 0 3px',
});
/* Fading animation */
// FIXME: add transition to all slides/img for smoother look
export const fade = (theme) => ({
	animationName: 'fade',
	animationDuration: '1.5s',
});
/* ============================== RESUME SECTION ============================== */
export const resumeContainer = (theme) => ({
	flexDirection: 'column',
});

export const resumeButtonSpan = (theme) => ({
	display: 'flex',
	justifyContent: 'space-around',
	flexDirection: 'row',
	width: '800px',
	height: '150px',
});
export const resumeButton = (theme) => ({
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
});

export const resumeTitle = (theme) => ({
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
});
export const resumeBox = (theme) => ({
	display: 'flex',
	width: '100%',
	height: '100px',
	flexDirection: 'horizontal',
	justifyContent: 'space-between',
});

/* typing animation */
export const typingContainer = (theme) => ({
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
});
/* snippet of code for resume */
export const codeBox = (theme) => ({
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
});
export const codeContent = (theme) => ({
	position: 'absolute',
	margin: '35px',
	minWidth: '1130px',
	maxWidth: '1130px',
	overflow: 'auto',
	height: '500px',
	whiteSpace: 'pre-wrap',
	overflowWrap: 'normal',
	//WordWrap: 'normal,',
});
export const resumePlainText = (theme) => ({
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
});
export const typedText = (theme) => ({
	fontWeight: 'normal',
	color: 'rgba(248, 201, 195, 1)',
});

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

export const text = (theme) => ({
	// font: 'bold 1.25rem/1 helvetica',
	// color: 'rgba(153, 179, 252, 1)',
	// position: 'absolute',
	// top: '50%',
	// transform: 'translateY(-52%)',
	// left: '0',
	// right: '0',
});

/* ============================== REFERNCES SECTION ============================== */
export const referencesContainer = (theme) => ({
	display: 'flex',
	position: 'relative',
	alignItems: 'center',
	fontFamily: 'Roboto',
	flexDirection: 'row',
});

export const referencesTitle = (theme) => ({
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
});
export const referencesSubtitle = (theme) => ({
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
});
// box containing ref cards
export const referencesBox = (theme) => ({
	display: 'flex',
	flexDirection: 'column',
	flexWrap: 'nowrap',
	alignItems: 'center',
	position: 'relative',
	height: '800px',
	maxWidth: '560px',
	//overflow: 'hidden',
});
// USED IN MULTIPLE PLACES ON CARD
export const center = (theme) => ({
	position: 'absolute',
	top: '50%',
	left: '50%',
	WebkitTransform: 'translate(-50%, -50%)',
});
// EACH CARD STYLING
export const card = (theme) => ({
	width: '550px',
	height: '225px',
	background: 'linear-gradient(#f8f8f8, #fff)',
	boxShadow: '0 8px 16px -8px',
	borderRadius: '6px',
	overflow: 'hidden',
	position: 'relative',
	margin: '5px',
});
// NAME TEXT
export const cardHeader = (theme) => ({
	textAlign: 'center',
});
// BACKGROUND COLOR AND CONTAINS AVATAR ON LEFT OF CARD
export const additional = (theme) => ({
	position: 'initial',
	width: '110px',
	height: '100%',
	transition: 'width 0.4s',
	overflow: 'hidden',
	zIndex: '2',
	background: `radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(134,70,252,1) 100%)`,
});

// .card .additional .user-card::after {
export const userCard = (theme) => ({
	width: '150px',
	height: '100%',
	position: 'relative',
	float: 'left',
	borderLeft: '2px solid rgba(0,0,0,0.025)',
});
export const userCardStats = (theme) => ({
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
});
// .card .additional .user-card .points
export const points = (theme) => ({
	top: '85%',
	position: 'relative',
	textAlign: 'center',
	width: '50%',
	textShadow: `1px 1px rgba(0,0,0,0.1)`,
});
export const cardImage = (theme) => ({
	top: '50%',
	width: '110px',
	height: '110px',
});
export const moreInfo = (theme) => ({
	width: '350px',
	float: 'left',
	position: 'absolute',
	left: '150px',
	fontSize: '16px',
	color: 'white',
	height: '100%',
	textAlign: 'center',
	textShadow: `1px 1px rgba(0,0,0,0.1)`,
});
export const moreInfoTitle = (theme) => ({
	color: 'white',
	marginBottom: '30px',
	fontSize: '30px',
	textShadow: `1px 1px rgba(0,0,0,0.1)`,
});
export const coords = (theme) => ({
	margin: '0 1rem',
	color: 'white',
	fontSize: '18px',
	textShadow: `1px 1px rgba(0,0,0,0.1)`,
});
export const coordsSpan = (theme) => ({
	float: 'center',
	textAlign: 'center',
});

export const stats = (theme) => ({
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
});
export const statsTitle = (theme) => ({
	flex: '1',
	fontSize: '18px',
	textAlign: 'left',
	color: '#fff',
	textShadow: `1px 1px rgba(0,0,0,0.1)`,
	width: '100%',
});

export const value = (theme) => ({
	fontWeight: 'light',
	fontSize: '16px',
	textAlign: 'left',
	textShadow: `1px 1px rgba(0,0,0,0.1)`,
	width: '100%',
});

export const general = (theme) => ({
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
});
export const more = (theme) => ({
	position: 'absolute',
	bottom: '1rem',
	right: '1rem',
	fontSize: '0.9rem',
	color: 'gray',
});
export const referencesButtonSpan = (theme) => ({
	display: 'flex',
	justifyContent: 'space-around',
	flexDirection: 'row',
	width: '400px',
	marginTop: '25px',
	position: 'relative',
});
export const referencesButton = (theme) => ({
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
});
/* ============================== CONTACT SECTION ============================== */

export const contactContainer = (theme) => ({
	display: 'flex',
	position: 'relative',
	fontFamily: 'Roboto',
	marginTop: 'calc(50vh - 400px)',
	marginBottom: 'calc(50vh - 400px)',
});
/*----------left side box---------> */
export const contactTextBox = (theme) => ({
	maxWidth: '600px',
	color: 'white',
	textAlign: 'center',
	width: '600px',
	height: '100%',
	display: 'flex',
	flexDirection: 'column',
});
export const contactTitle = (theme) => ({
	color: 'white',
	transition: 'all .2s ease',
	fontSize: '80px',
	textShadow: `4px 4px rgba(0,0,0,0.1)`,
	height: '100px',
});
export const contactSubtitle = (theme) => ({
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
});
/*---------------- Name drawing ---------> */
// contains the text and svg animation image, does not include the buttons
export const contactAnimation = (theme) => ({
	textAlign: 'center',
	fontSize: '26px',
	color: 'white',
	fontWeight: 'light',
	height: '550px',
});
export const thanksText = (theme) => ({
	textAlign: 'center',
	fontSize: '26px',
	color: 'white',
	fontWeight: 'light',
	height: '100px',
	textShadow: `1px 1px rgba(0,0,0,0.3)`,
});
export const myPath = (theme) => ({
	fill: 'none',
	stroke: 'white',
	strokeWidth: '4',
});
export const lineDrawing = (theme) => ({
	// background: 'green',
});

export const svgName = (theme) => ({
	height: '400px',
	transform: 'scale(1.5)',
});
// =============== contact buttons ===============
export const contactButtonSpan = (theme) => ({
	display: 'flex',
	justifyContent: 'space-around',
	flexDirection: 'row',
	width: '600px',
	height: '125px',
	// background: 'purple',
});
export const contactButton = (theme) => ({
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
});
/*---------------- FORM ----------> */
/*---------------- right side box ----------> */
export const formDiv = (theme) => ({
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
});

export const feedbackInput = (theme) => ({
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
});
export const formText = (theme) => ({
	textAlign: 'left',
	backgroundPosition: '11px 8px',
	backgroundRepeat: 'no-repeat',
	fontSize: '26px',
	marginBottom: 10,
	display: 'block',
	color: '#EEE',
	textShadow: `1px 1px rgba(0,0,0,0.4)`,
});
export const name = (theme) => ({
	backgroundSize: '30px 30px',
	backgroundPosition: '11px 8px',
	backgroundRepeat: 'no-repeat',
	marginBottom: '20px',
});
export const email = (theme) => ({
	backgroundSize: '30px 30px',
	backgroundPosition: '11px 8px',
	backgroundRepeat: 'no-repeat',
	marginBottom: '20px',
});
export const comment = (theme) => ({
	backgroundSize: '30px 30px',
	backgroundPosition: '11px 8px',
	backgroundRepeat: 'no-repeat',
	padding: '10px',
});

export const textArea = (theme) => ({
	width: '100%',
	height: '150px',
	lineHeight: '22px',
	resize: 'vertical',
});

export const ease = (theme) => ({
	width: '0px',
	height: '74px',
	backgroundColor: '#fbfbfb',
	transition: '0.3s ease',
	WebkitTransition: '0.3s ease',
	MozTransition: '0.3s ease',
	OTransition: '0.3s ease',
	msTransition: '0.3s ease',
});

/* ============================== FOOTER SECTION ============================== */
export const footerContainer = (theme) => ({
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
});
export const siteFooter = (theme) => ({
	padding: '45px 0 20px',
	fontSize: '15px',
	lineHeight: '24px',
	width: '100%',
	textAlign: 'center',
});
