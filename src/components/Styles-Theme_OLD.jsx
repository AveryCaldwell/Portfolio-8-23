import styled, { keyframes, css } from 'styled-components';
//import theme from '../theme.js';
// Style thats on the app as a whole
const pulseAnimation = keyframes`
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
export const styles = (theme) => ({
	appContainer: {
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
	},
	// Variation of pageContainer
	pagesContainer: {
		height: '800px',
		display: 'flex',
		flexDirection: 'column',
		maxWidth: '1200px',
		minWidth: '1200px',
		marginTop: 'calc(50vh - 400px)',
		marginBottom: 'calc(50vh - 400px)',
	},
	// style that is on each component page
	pageContainer: {
		display: 'flex',
		minHeight: '800px',
		maxHeight: '800px',
		marginTop: 'calc(50vh - 400px)',
		marginBottom: 'calc(50vh - 400px)',
	},

	/* ============================== NAV SECTION ============================== */
	navTitle: {
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
	},
	navBox: {
		display: 'flex',
		paddingTop: '50px',
		cursor: 'pointer',
		width: 250,
		color: 'white',
	},
	navLinks: {
		display: 'inline-block',
		marginRight: '20px',
		lineHeight: 1.5,
		padding: 0,
	},
	navToolbar: {
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
	},
	toolbarImage: {
		height: '25px',
		width: '25px',
		borderRadius: '100%',
		transform: 'scale(2)',
		overflow: 'hidden',
		display: 'inline-block',
		// border: ' 1px solid white',
		// boxShadow: '0 0 10px 10px white',
		marginLeft: 25,
	},
	menuIcon: {
		height: '50px',
		width: '50px',
		cursor: 'pointer',
		textShadow: '2px 2px rgba(0,0,0,0.3)',
		minWidth: '30px', // Set a minimum width
		minHeight: '30px', // Set a minimum height
	},
	avesImg: {
		height: '150px',
		width: '150px',
		borderRadius: 300,
		border: '2px solid #e9f4e9',
		boxShadow: 2,
		cursor: 'pointer',
		marginLeft: 'auto',
		marginRight: 'auto',
	},

	navTitleText: {
		fontFamily: 'Roboto',
		textAlign: 'center',
		pt: 4,
		color: 'white',
		fontSize: 22,
		marginBottom: '5px',
	},
	navSubtitleText: {
		fontFamily: 'Roboto',
		textAlign: 'center',
		fontWeight: 'lighter',
		pt: 1,
		color: 'white',
		fontSize: 18,
		marginBottom: '20px',
	},

	closeIcon: {
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
	},
	/* ============================== LOGO SLIDING SECTION ============================== */
	logoSliderContainer: {
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
	},
	logoSliderImage: {
		pointerEvents: 'none',
		position: 'relative',
		width: '300px',
		height: '300px',
		display: 'inline-block',
		top: '15px',
		borderRadius: '50%',
		left: '24px',
		transition: 'all 1.5s ease',
	},
	logoSliderCircle: {
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
	},
	/* ============================== LANDING SECTION ============================== */
	landingContainer: {
		minHeight: '800px',
		overflow: 'hidden',
		marginBottom: 'calc(50vh - 400px)',
	},
	landingHeader: {
		position: 'relative',
		color: 'white',
		left: '40%',
		top: '26%',
		height: '50px',
		fontSize: '50px',
		fontFamily: 'Roboto',
	},
	landingText: {
		display: 'inline-block',
		fontSize: '32px',
		position: 'relative',
		left: '40%',
		top: '40%',
		color: 'white',
		marginTop: '15px',
		width: '400px',
	},
	landingTitle: {
		border: 'solid 1px white',
		borderRadius: '36px',
		padding: '5px',
		display: 'block',
		textAlign: 'center',
		letterSpacing: '5px',
		fontFamily: 'Roboto',
		fontSize: '1em',
	},
	landingSubtitle: {
		marginTop: '15px',
		marginBottom: '15px',
		borderRadius: '36px',
		width: '400px',
		padding: '5px',
		display: 'block',
		fontFamily: 'Roboto',
		position: 'absolute',
		fontSize: '1em',
	},

	landingButton: {
		color: 'white',
		backgroundColor: 'transparent',
		border: 'none',
		fontSize: '65px',
		cursor: 'pointer',
	},
	landingButtonSpan: {
		display: 'flex',
		justifyContent: 'space-evenly',
		flexDirection: 'row',
		width: '100%',
		height: '100px',
		alignItems: 'center',
	},
	// landingCTA : {
	// 	fontFamily: 'Space Mono, monospaced',
	// 	textShadow: `1px 1px rgba(0,0,0,0.3)`,
	// 	display: 'inline',
	// 	animation: css`
	// 		${pulseAnimation} 1.5s infinite
	// 	`,
	// }
	// =========PULSE ANIMATION ON BUTTONS
	// Define the keyframes for the pulse animation
	LandingCTA: styled.span`
		font-family: 'Space Mono', monospaced;
		text-shadow: 1px 1px rgba(0, 0, 0, 0.3);
		animation: ${pulseAnimation} 1.5s infinite;
		display: 'inline';
		transition: 'all .2s ease';
		width: 100%;
	`,
	PulseButton: styled.button`
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
	`,

	/* { ========= NAME ANIMATION } */
	letter: {
		display: 'inline-block',
		opacity: '0',
		pointerEvents: 'none',
		transition: 'all .2s ease',
		fontSize: '1em',
	},
	/* ============================== ABOUT SECTION ============================== */

	aboutTitle: {
		color: 'white',
		display: 'flex',
		fontSize: '80px',
		fontFamily: 'Roboto',
		textShadow: `4px 4px rgba(0,0,0,0.1)`,
		width: '440px',
		left: '2.5%',
		top: '65%',
		position: 'relative',
	},
	aboutContent: {
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
	},
	aboutIntroBox: {
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
	},
	aboutSubtitle: {
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
	},
	waveIcon: {
		fontSize: '40px',
		verticalAlign: 'middle',
	},
	aboutText: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		textShadow: `2px 2px rgba(0,0,0,0.1)`,
		fontSize: '24px',
		height: '150px',
		// fontWeight: 'lighter',
		textAlign: 'center',
	},
	aboutTextSub: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		textShadow: `2px 2px rgba(0,0,0,0.1)`,
		fontSize: '24px',
		height: '150px',
		textAlign: 'center',
	},
	aboutOverflow: {
		overflow: 'scroll',
		maxHeight: '100%',
	},
	// Skills portion of about page
	skillSubtitle: {
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
	},
	aboutSkill: {
		padding: 10,
		margin: 5,
		borderRadius: 5,
		fontWeight: 'lighter',
	},

	aboutFrontSkill: {
		background: 'rgba(157,228,245,0.18)',
	},
	aboutBackSkill: {
		background: 'rgba(228,161,205,0.18)',
	},

	techBox: {
		color: 'white',
		display: 'flex',
		flexDirection: 'column',
		border: '1px solid white',
		borderRadius: 5,
		overflow: 'hidden',
		background: 'rgba(0, 0, 0, 0.1)',
		fontSize: '16px',
	},
	skillBox: {
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
	},
	aboutBubbleItem: {
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
	},
	subSkillBox: {
		display: 'flex',
		flexWrap: 'wrap',
		alignItems: 'center',
		justifyContent: 'center',
		width: 600,
		overflow: 'hidden',
	},
	aboutButton: {
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
	},
	aboutButtonSpan: {
		display: 'flex',
		justifyContent: 'space-around',
		flexDirection: 'row',
		width: '700px',
		height: '150px',
	},
	fadeTransition: {
		transition: `ease 1s`,
		position: 'absolute',
		top: 0,
		left: 0,
		padding: '20px',
		height: '650px',
	},

	/* ============================== EDUCATION SECTION ============================== */
	eduButtonSpan: {
		display: 'flex',
		justifyContent: 'space-around',
		flexDirection: 'row',
		width: '380px',
		height: '150px',
	},

	eduButton: {
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
	},

	orbitalContainer: {
		height: '780px',
		width: '600px',
		opacity: '0',
		position: 'relative',
		transition: 'all 1s ease',
		display: 'flex',
		alignItems: 'center',
		left: '-120px',
		top: '50px',
	},

	orbitalBox: {
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
	},

	eduTitle: {
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
	},

	eduDescriptionHeader: {
		color: 'white',
		transition: 'all .2s ease',
		textAlign: 'center',
		fontSize: '25px',
		paddingTop: '20px',
		fontFamily: 'Roboto',
		textShadow: `2px 2px rgba(0,0,0,0.1)`,
	},

	cardContainer: {
		width: '400px',
		display: 'flex',
		transition: 'all 1s ease',
		flexDirection: 'column',
		overflow: 'hidden',
	},

	eduHeader: {
		transition: 'all 0.2s ease',
		padding: '5px',
		color: 'white',
		fontSize: '22px',
		textAlign: 'center',
		alignItems: 'center',
		display: 'flex',
		fontFamily: 'Roboto',
		textShadow: `2px 2px rgba(0,0,0,0.1)`,
	},

	eduCardActive: {
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
	},

	eduCardInactive: {
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
	},
	eduImage: {
		display: 'flex',
		marginLeft: 'auto',
		marginRight: 'auto',
		WebkitFilter: 'drop-shadow(5px 5px 5px #666666)',
		filter: 'drop-shadow(5px 5px 5px #666666)',
		transition: 'all .3s ease',
	},
	eduImageInactive: {
		width: '150px',
	},
	eduImageActive: {
		width: '250px',
	},
	eduSlideshow: {
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
	},
	myEduActive: {
		display: 'block',
		height: 275,
		textAlign: 'center',
		opacity: 1,
		position: 'absolute',
		transition: 'all 1s ease',
		marginTop: 10,
		// lineHeight: 1.25,
	},
	myEduInactive: {
		height: 275,
		display: 'block',
		textAlign: 'center',
		opacity: 0,
		position: 'absolute',
		transition: 'all 1s ease',
	},
	/* ============================== SVG PATH SECTION ============================== */
	svgContainer: {
		position: 'absolute',
		top: '345vh',
		left: '350px',
		cursor: 'pointer',
		zIndex: '-1',
	},

	svgCord: {
		//width: '600px',
		height: '120vh',
		pointerEvents: 'none',
		//opacity: 0,
	},

	animateSvgStroke1: {
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
	},

	svgButton: {
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
	},
	/* ============================== PROJECTS SECTION ============================== */
	projectsButtonSpan: {
		display: 'flex',
		justifyContent: 'space-around',
		flexDirection: 'row',
		width: '450px',
		height: '150px',
	},
	projectsButton: {
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
	},
	projectContainer: {
		display: 'flex',
		flexDirection: 'column', // Stack content vertically
		alignItems: 'center', // Center horizontally
		justifyContent: 'center', // Center vertically
		fontFamily: 'Roboto',
	},
	/* ========== LEFT SIDE COMPUTER SECTION STARTS*/
	/* Project page title */
	projectTitle: {
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
	},
	/* Project text blerb */
	projectContent: {
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
	},
	textSlideshow: {
		position: 'relative',
		padding: '15px',
		right: '5px',
	},
	/* Hide the images by default */
	mySlides: {
		display: 'block',
		transition: 'all 1.0s ease',
	},
	/* Hide the images by default */
	projectSlides: {
		display: 'block',
		position: 'absolute',
		top: 0,
		left: 15,
		height: '400px',
		width: '400px',
		transition: 'all 1.0s ease',
	},
	slideTitle: {
		fontSize: '26px',
		textAlign: 'center',
		fontWeight: 'bold',
	},
	/* project github icon */
	iconContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	github: {
		fontSize: '40px',
	},

	/* ===============RIGHT SIDE COMPUTER SECTION STARTS */
	/* computer image */
	computer: {
		pointerEvents: 'none',
		position: 'relative',
		width: '600px',
		height: '600px',
		display: 'inline-block',
		left: '15px',
		transition: 'all 1.5s ease',
	},
	computerImage: {
		width: '550px',
		height: '310px',
		left: '35px',
		top: '55px',
		position: 'absolute',
	},
	/* Computer container */
	computerContainer: {
		display: 'flex',
		position: 'relative',
		height: '600px',
		width: '600px',
		marginTop: '100px',
	},

	/* Next & previous buttons */
	arrows: {
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
	},
	/* Position the "next button" to the right */
	next: {
		right: '-75px',
		borderRadius: '3px 0 0 3px',
	},
	prev: {
		left: '-45px',
		borderRadius: '3px 0 0 3px',
	},
	/* Fading animation */
	// FIXME: add transition to all slides/img for smoother look
	fade: {
		animationName: 'fade',
		animationDuration: '1.5s',
	},
	/* ============================== RESUME SECTION ============================== */
	resumeContainer: {
		flexDirection: 'column',
	},

	resumeButtonSpan: {
		display: 'flex',
		justifyContent: 'space-around',
		flexDirection: 'row',
		width: '800px',
		height: '150px',
	},
	resumeButton: {
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
	},

	resumeTitle: {
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
	},
	resumeBox: {
		display: 'flex',
		width: '100%',
		height: '100px',
		flexDirection: 'horizontal',
		justifyContent: 'space-between',
	},

	/* typing animation */
	typingContainer: {
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
	},
	/* snippet of code for resume */
	codeBox: {
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
	},
	codeContent: {
		position: 'absolute',
		margin: '35px',
		minWidth: '1130px',
		maxWidth: '1130px',
		overflow: 'auto',
		height: '500px',
		whiteSpace: 'pre-wrap',
		overflowWrap: 'normal',
		//WordWrap: 'normal,',
	},
	resumePlainText: {
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
	},
	typedText: {
		fontWeight: 'normal',
		color: 'rgba(248, 201, 195, 1)',
	},

	// Define the blink keyframes
	// TODO: incorporate with code

	// Define your styles using styled-components syntax
	codeCursor: css`
		display: inline-block;
		background-color: #ccc;
		margin-left: 0.1rem;
		width: 3px;
		animation: ${blink} 1s infinite;
	`,

	text: {
		// font: 'bold 1.25rem/1 helvetica',
		// color: 'rgba(153, 179, 252, 1)',
		// position: 'absolute',
		// top: '50%',
		// transform: 'translateY(-52%)',
		// left: '0',
		// right: '0',
	},

	/* ============================== REFERNCES SECTION ============================== */
	referencesContainer: {
		display: 'flex',
		position: 'relative',
		alignItems: 'center',
		fontFamily: 'Roboto',
		flexDirection: 'row',
	},

	referencesTitle: {
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
	},
	referencesSubtitle: {
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
	},
	// box containing ref cards
	referencesBox: {
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'nowrap',
		alignItems: 'center',
		position: 'relative',
		height: '800px',
		maxWidth: '560px',
		//overflow: 'hidden',
	},
	// USED IN MULTIPLE PLACES ON CARD
	center: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		WebkitTransform: 'translate(-50%, -50%)',
	},
	// EACH CARD STYLING
	card: {
		width: '550px',
		height: '225px',
		background: 'linear-gradient(#f8f8f8, #fff)',
		boxShadow: '0 8px 16px -8px',
		borderRadius: '6px',
		overflow: 'hidden',
		position: 'relative',
		margin: '5px',
	},
	// NAME TEXT
	cardHeader: {
		textAlign: 'center',
	},
	// BACKGROUND COLOR AND CONTAINS AVATAR ON LEFT OF CARD
	additional: {
		position: 'initial',
		width: '110px',
		height: '100%',
		transition: 'width 0.4s',
		overflow: 'hidden',
		zIndex: '2',
		background: `radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(134,70,252,1) 100%)`,
	},

	// .card .additional .user-card::after {
	userCard: {
		width: '150px',
		height: '100%',
		position: 'relative',
		float: 'left',
		borderLeft: '2px solid rgba(0,0,0,0.025)',
	},
	userCardStats: {
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
	},
	// .card .additional .user-card .points
	points: {
		top: '85%',
		position: 'relative',
		textAlign: 'center',
		width: '50%',
		textShadow: `1px 1px rgba(0,0,0,0.1)`,
	},
	cardImage: {
		top: '50%',
		width: '110px',
		height: '110px',
	},
	moreInfo: {
		width: '350px',
		float: 'left',
		position: 'absolute',
		left: '150px',
		fontSize: '16px',
		color: 'white',
		height: '100%',
		textAlign: 'center',
		textShadow: `1px 1px rgba(0,0,0,0.1)`,
	},
	moreInfoTitle: {
		color: 'white',
		marginBottom: '30px',
		fontSize: '30px',
		textShadow: `1px 1px rgba(0,0,0,0.1)`,
	},
	coords: {
		margin: '0 1rem',
		color: 'white',
		fontSize: '18px',
		textShadow: `1px 1px rgba(0,0,0,0.1)`,
	},
	coordsSpan: {
		float: 'center',
		textAlign: 'center',
	},

	stats: {
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
	},
	statsTitle: {
		flex: '1',
		fontSize: '18px',
		textAlign: 'left',
		color: '#fff',
		textShadow: `1px 1px rgba(0,0,0,0.1)`,
		width: '100%',
	},

	value: {
		fontWeight: 'light',
		fontSize: '16px',
		textAlign: 'left',
		textShadow: `1px 1px rgba(0,0,0,0.1)`,
		width: '100%',
	},

	general: {
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
	},
	more: {
		position: 'absolute',
		bottom: '1rem',
		right: '1rem',
		fontSize: '0.9rem',
		color: 'gray',
	},
	referencesButtonSpan: {
		display: 'flex',
		justifyContent: 'space-around',
		flexDirection: 'row',
		width: '400px',
		marginTop: '25px',
		position: 'relative',
	},
	referencesButton: {
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
	},
	/* ============================== CONTACT SECTION ============================== */

	contactContainer: {
		display: 'flex',
		position: 'relative',
		fontFamily: 'Roboto',
		marginTop: 'calc(50vh - 400px)',
		marginBottom: 'calc(50vh - 400px)',
	},
	/*----------left side box---------> */
	contactTextBox: {
		maxWidth: '600px',
		color: 'white',
		textAlign: 'center',
		width: '600px',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
	contactTitle: {
		color: 'white',
		transition: 'all .2s ease',
		fontSize: '80px',
		textShadow: `4px 4px rgba(0,0,0,0.1)`,
		height: '100px',
	},
	contactSubtitle: {
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
	},
	/*---------------- Name drawing ---------> */
	// contains the text and svg animation image, does not include the buttons
	contactAnimation: {
		textAlign: 'center',
		fontSize: '26px',
		color: 'white',
		fontWeight: 'light',
		height: '550px',
	},
	thanksText: {
		textAlign: 'center',
		fontSize: '26px',
		color: 'white',
		fontWeight: 'light',
		height: '100px',
		textShadow: `1px 1px rgba(0,0,0,0.3)`,
	},
	myPath: {
		fill: 'none',
		stroke: 'white',
		strokeWidth: '4',
	},
	lineDrawing: {
		// background: 'green',
	},

	svgName: {
		height: '400px',
		transform: 'scale(1.5)',
	},
	// =============== contact buttons ===============
	contactButtonSpan: {
		display: 'flex',
		justifyContent: 'space-around',
		flexDirection: 'row',
		width: '600px',
		height: '125px',
		// background: 'purple',
	},
	contactButton: {
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
	},
	/*---------------- FORM ----------> */
	/*---------------- right side box ----------> */
	formDiv: {
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
	},

	feedbackInput: {
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
	},
	formText: {
		textAlign: 'left',
		backgroundPosition: '11px 8px',
		backgroundRepeat: 'no-repeat',
		fontSize: '26px',
		marginBottom: 10,
		display: 'block',
		color: '#EEE',
		textShadow: `1px 1px rgba(0,0,0,0.4)`,
	},
	name: {
		backgroundSize: '30px 30px',
		backgroundPosition: '11px 8px',
		backgroundRepeat: 'no-repeat',
		marginBottom: '20px',
	},
	email: {
		backgroundSize: '30px 30px',
		backgroundPosition: '11px 8px',
		backgroundRepeat: 'no-repeat',
		marginBottom: '20px',
	},
	comment: {
		backgroundSize: '30px 30px',
		backgroundPosition: '11px 8px',
		backgroundRepeat: 'no-repeat',
		padding: '10px',
	},

	textArea: {
		width: '100%',
		height: '150px',
		lineHeight: '22px',
		resize: 'vertical',
	},

	ease: {
		width: '0px',
		height: '74px',
		backgroundColor: '#fbfbfb',
		transition: '0.3s ease',
		WebkitTransition: '0.3s ease',
		MozTransition: '0.3s ease',
		OTransition: '0.3s ease',
		msTransition: '0.3s ease',
	},

	/* ============================== FOOTER SECTION ============================== */
	footerContainer: {
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
	},
	siteFooter: {
		padding: '45px 0 20px',
		fontSize: '15px',
		lineHeight: '24px',
		width: '100%',
		textAlign: 'center',
	},
});
