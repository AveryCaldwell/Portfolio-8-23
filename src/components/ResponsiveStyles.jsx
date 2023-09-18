// style that is on each component page
export const mobilePageContainer = {
	display: 'block',
	// maxWidth: '600px',
	// minWidth: '600px',
	marginTop: 'calc(50vh - 200px)',
	marginBottom: 'calc(50vh - 200px)',
	// display: 'flex',
	// flexDirection: 'column',
	// alignItems: 'center',
};
/* ============================== NAV SECTION ============================== */
export const mobileMenuIcon = {
	height: '25px',
	width: '25x',
	cursor: 'pointer',
	textShadow: '1px 1px rgba(0,0,0,0.3)',
	minWidth: '15px',
	minHeight: '15px',
	background: 'transparent',
};
// export const mobileNavBox = {
// 	display: 'flex',
// 	textAlign: 'center',
// 	alignItems: 'center',
// 	position: 'absolute',
// 	cursor: 'pointer',
// 	width: '100%',
// 	height: '100vh',
// 	color: 'white',
// };

// export const mobileNavLinks = {
// 	display: 'inline-block',
// 	padding: 0,
// 	color: '#EEE',
// 	textAlign: 'center',
// 	width: 50,
// };

/* ============================== LOGO SLIDING SECTION ============================== */
export const mobileLogoSliderContainer = {
	width: '215px',
	display: 'block',
	position: 'absolute',
	zIndex: 1,
	borderRadius: '250px',
	left: '25%',
	top: '25%',
	height: '120vh',
	background: `linear-gradient(
        rgba(255, 255, 255, 1),
        rgba(255, 255, 255, 0.25)
    )`,
};
export const mobileLogoSliderImage = {
	width: '175px',
	height: '175px',
	// left: '25%',
	position: 'relative',
	display: 'inline-block',
	// top: '15px',
	top: 'calc( 100% - 190px)',
	borderRadius: '50%',
	left: '20px',
	transition: 'all 1.5s ease',
};
export const mobileLogoSliderCircle = {
	height: '210px',
	width: '210px',
	opacity: 1,
	boxShadow: '0 0 15px 5px white',
	borderRadius: '50%',
	// boxShadow: '0 0 30px 15px white',
	display: 'block',
	transition: 'all 0.5s ease',
	left: '0px',
	bottom: '0px',
	position: 'absolute',
	// opacity: '0',
};
/* ============================== LANDING SECTION ============================== */
export const mobileLandingContainer = {
	display: 'block',
	position: 'absolute',
	left: '7%',
	top: 0,
	width: '100%',
	minHeight: '400px',
	marginBottom: 'calc(50vh - 200px)',
	// background: 'pink',
	overflow: 'hidden',
};
export const mobileLandingFont = {
	fontSize: '.75em! important',
	display: 'block',
};
export const mobileLandingHeader = {
	fontSize: '2.75rem',
	position: 'relative',
	color: 'white',
	left: '40%',
	height: '150px',
	fontFamily: 'Roboto',
};
export const mobileLandingText = {
	display: 'inline-block',
	fontSize: '1.5rem',
	position: 'relative',
	left: '40%',
	top: '40%',
	color: 'white',
	marginTop: '15px',
	width: '275px',
};
export const mobileLandingButtonSpan = {
	display: 'block',
	width: '80%',
	height: '80px',
	alignItems: 'left',
};
/* ============================== ABOUT SECTION ============================== */
export const mobileAboutContainer = {
	height: '600px',
	display: 'flex',
	flexDirection: 'column',
	marginBottom: 'calc(100vh - 20px)',
	marginTop: 'calc(100vh - 20px)',
	marginLeft: '10%',
};
export const mobileAboutContent = {
	width: '70vw',
	height: '600px',
	position: 'relative',
	borderRadius: '36px',
	background: ' rgba(255, 255, 255, 0.2)',
	boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
	backdropFilter: 'blur(5px)',
	border: '1px solid rgba(255, 255, 255, 0.3)',
	color: 'white',
	textShadow: `1px 1px rgba(0,0,0,0.1)`,
	overflow: 'hidden',
	marginLeft: '400px',
	padding: '10px',
	lineHeight: '1.35',
};
export const mobileAboutTitle = {
	fontSize: '40px',
	color: 'white',
	display: 'flex',
	fontFamily: 'Roboto',
	textShadow: `4px 4px rgba(0,0,0,0.1)`,
	width: '100%',
	left: '17.5%',
	top: '65%',
	position: 'relative',
	margin: ' 0px 0px 0px 0px',
};
export const mobileAboutIntroBox = {
	width: '65vw',
	height: '100%',
	padding: '5px',
	color: 'white',
	textShadow: `1px 1px rgba(0,0,0,0.1)`,
	display: 'flex',
	flexDirection: 'column',
	textAlign: 'center',
	justifyContent: 'center',
	alignItems: 'center',
	margin: ' 0px 0px 0px 0px',
};
export const mobileAboutText = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	textShadow: `2px 2px rgba(0,0,0,0.1)`,
	fontSize: '1.25rem',
	textAlign: 'center',
	width: '95%',
	overflow: 'scroll',
	padding: '5px',
	marginTop: '15px',
};
export const mobileAboutSubtitle = {
	padding: '15px 25px 15px 25px',
	fontSize: '32px',
	color: 'white',
	lineHeight: '1.0',
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
export const mobileWaveIcon = {
	fontSize: '28px',
	verticalAlign: 'middle',
	display: 'inline-block',
};
export const mobileAboutButtonSpan = {
	display: 'flex',
	justifyContent: 'space-evenly',
	flexDirection: 'row',
	width: '80vw',
	height: '125px',
	margin: '0px 10% 0px 10%',
	alignItems: 'center',
};
export const mobileTechBox = {
	color: 'white',
	display: 'flex',
	flexDirection: 'column',
	border: '1px solid white',
	borderRadius: 5,
	overflow: 'hidden',
	background: 'rgba(0, 0, 0, 0.1)',
	fontSize: '12px',
};
/* ============================== EDUCATION SECTION ============================== */
export const mobileOrbitalContainer = {
	// height: '780px',
	// width: '600px',
	// opacity: '0',
	// position: 'relative',
	// transition: 'all 1s ease',
	// display: 'flex',
	// alignItems: 'center',
	// left: '-120px',
	// top: '50px',
};
export const mobileCardContainer = {
	display: 'block',
	minHeight: 'auto',
	maxHeight: 'none',
	marginTop: 0,
	marginBottom: 0,
	padding: 20,
	overflow: 'auto',
};
