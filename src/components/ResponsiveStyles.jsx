export const mobileAppContainer = {
	// display: 'flex',
	// position: 'absolute',
	// left: 'calc(50% - 300px)',
	// height: '100vh',
	// top: '0',
	// transition: 'all 1.5s ease',
	// maxWidth: '800px',
	// minWidth: '800px',
	// fontFamily: 'roboto',
	display: 'flex',
	position: 'relative', // Change to relative positioning
	margin: '0 auto', // Center the container horizontally
	height: '100vh',
	top: '0',
	transition: 'all 1.5s ease',
	maxWidth: '800px', // Adjust the max-width to 800px for the breakpoint
	width: '100%', // Set width to 100% to ensure responsiveness
	fontFamily: 'roboto',
};

// style that is on each component page
export const mobilePageContainer = {
	// display: 'flex',
	// flexDirection: 'column',
	// minHeight: '800px',
	// maxHeight: '800px',
	// marginTop: 'calc(50vh - 200px)',
	// marginBottom: 'calc(50vh - 200px)',
	// display: 'flex',
	// flexDirection: 'column',
	// alignItems: 'center',
	display: 'flex',
	minHeight: '800px',
	maxHeight: '800px',
	margin: 'auto', // Center the container horizontally
	marginTop: 'calc(50vh - 400px)', // Center vertically by calculating half
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
	width: '205px',
	// display: 'flex',
	position: 'absolute',
	// flexDirection: 'column',
	zIndex: 1,
	borderRadius: '250px',
	// left: '25%',
	marginLeft: '25%',
	marginTop: '15%',
	minHeight: '1200px',
	// top: '5%',
	height: '120vh',
	background: `linear-gradient(
	    rgba(255, 255, 255, 1),
	    rgba(255, 255, 255, 0.25)
	)`,
};
export const mobileLogoSliderImage = {
	width: '175px',
	height: '175px',
	position: 'relative',
	display: 'inline-block',
	top: '15px',
	borderRadius: '50%',
	left: '15px',
	transition: 'all 1.5s ease',
	// marginLeft: '8%',
	// marginTop: '6%',
};
export const mobileLogoSliderCircle = {
	position: 'absolute',
	color: 'white',
	border: ' 5px solid white',
	height: '200px',
	width: '200px',
	borderRadius: '50%',
	left: '2px',
	bottom: '135px',
	boxShadow: '0 0 15px 5px white',
	display: 'block',
	transition: 'all 0.5s ease',
	opacity: '0',
};
/* ============================== LANDING SECTION ============================== */
export const mobileLandingContainer = {
	// width: '100%',
	minHeight: '800px',
	// marginBottom: 'calc(50vh - 200px)',
	overflow: 'hidden',
	background: 'pink',
};
export const mobileLandingFont = {
	fontSize: '.75em',
	display: 'inline-block',
};
export const mobileLandingHeader = {
	fontSize: '2.75rem',
	position: 'relative',
	color: 'white',
	left: '40%',
	top: '26%',
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
// export const mobileAboutContainer = {
// 	height: '600px',
// 	display: 'flex',
// 	flexDirection: 'column',
// 	marginTop: 'calc(80vh + 200px)',
// 	marginBottom: 'calc(50vh + 20px)',
// 	marginLeft: '10%',
// 	minWidth: '300px',
// };
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
	width: '75vw',
	height: '125px',
	margin: '0px auto',
	alignItems: 'center',
};
export const mobileAboutButton = {
	borderRadius: '36px',
	border: '1px solid white',
	textAlign: 'center',
	listStyle: 'none',
	width: '100px',
	height: '45px',
	color: 'white',
	fontSize: '14px',
	lineHeight: '1.25',
	backgroundColor: 'transparent',
	cursor: 'pointer',
	marginTop: '30px',
};

export const mobileBox = {
	color: 'white',
	display: 'flex',
	flexDirection: 'column',
	border: '1px solid white',
	borderRadius: 5,
	overflow: 'hidden',
	background: 'rgba(0, 0, 0, 0.1)',
	fontSize: '14px',
	marginTop: '15px',
};
// Skills portion of about page
export const mobileSkillSubtitle = {
	fontSize: '18px',
	fontFamily: 'Roboto',
	display: 'flex',
	background:
		'linear-gradient(90deg, rgba(228,161,205,0.18) 0%, rgba(157,228,245,0.3) 100%)',
	padding: '10px 20px 10px 20px',
	justifyContent: 'center',
	fontWeight: 'bold',
	textShadow: '1px 1px rgba(0,0,0,0.3)',
};

export const mobileSubSkillBox = {
	display: 'flex',
	flexWrap: 'wrap',
	alignItems: 'center',
	justifyContent: 'center',
	padding: 5,
	margin: 2.5,
	borderRadius: 5,
	// overflow: 'scroll',
};

export const mobileAboutBubbleItem = {
	position: 'relative',
	display: 'inline-block',
	color: 'white',
	margin: 3,
	padding: 10,
	borderRadius: 5,
	border: '1px solid white',
	fontWeight: 'lighter',
	textAlign: 'center',
	textDecoration: 'none',
	textShadow: '1px 1px rgba(0,0,0,0.3)',
	//
};

export const mobileAboutSkill = {
	padding: 5,
	margin: 2.5,
	borderRadius: 5,
	fontWeight: 'lighter',
};
/* ============================== EDUCATION SECTION ============================== */
export const mobileEduContainer = {
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
};
export const mobileOrbitalContainer = {
	width: '50%',
	opacity: '0',
};
export const mobileCardContainer = {
	width: '200px',
	display: 'flex',
	transition: 'all 1s ease',
	flexDirection: 'column',
	overflow: 'hidden',
};
export const mobileEduTitle = {
	position: 'relative',
	justifyContent: 'center',
	// position: 'absolute',
	color: 'white',
	fontSize: '40px',
	textAlign: 'center',
	textShadow: `4px 4px rgba(0,0,0,0.1)`,
	left: '50px',
	bottom: '350px',
	height: '100px',
};

export const mobileOrbitalBox = {
	offsetPath: `path('M150,0 A150,150 0 1,1 150,300 A150,150 0 1,1 150,0')`,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	position: 'absolute',
	left: '300px',
	cursor: 'pointer',
	borderRadius: '36px',
	transition: 'all .2s ease',
	height: '300px',
};
