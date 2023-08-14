export const appContainer = {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    left: 'calc(50% - 600px)',
    top: '0',
    transition: 'all 1.5s ease',
    width: '1200px',
};
export const pageContainer = {
    minHeight: '100vh',
    overflow: 'hidden',
};
/* ============================== LANDING SECTION ============================== */

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
    top: '40vh',
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
    left: '-30px',
    bottom: '-26px',
    boxShadow: '0 0 30px 15px white',
    display: 'block',
    transition: 'all 0.5s ease',
    opacity: '0',
};
export const landingHeader = {
    position: 'relative',
    color: 'white',
    left: '40%',
    top: '37vh',
    height: '12vh',
    fontSize: '50px',
    fontFamily: 'Roboto',
};
export const landingText = {
    display: 'inline-block',
    fontSize: '32px',
    position: 'relative',
    left: '40%',
    top: '38vh',
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

};
export const landingSubtitle = {
    marginTop: '15px',
    borderRadius: '36px',
    width: '400px',
    padding: '5px',
    display: 'block',
    fontFamily: 'Roboto',

};

export const landingButton = {
    color: 'white',
    padding: '7px',
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '50px',
    cursor: 'pointer',

};
/* { NAME ANIMATION } */
export const letter = {
    display: 'inline-block',
    opacity: '0',
};
/* ============================== ABOUT SECTION ============================== */
export const aboutContainer = {
    display: 'flex',
    fontSize: '50px',
    color: 'white',
    borderRadius: '250px',
    // left: '5%',
    // top: '0vh',
    // bottom: '145vh',
    fontFamily: 'Roboto',
    // position: 'absolute',
    width: '1200px',
    minHeight: '100vh',
    // overflow: 'hidden',
    //height: "100vh",
};
export const aboutHeader = {
    fontSize: '48px',
    color: 'white',
    borderRadius: '250px',
    left: '40%',
    top: '110vh',
    position: 'absolute',

};
export const aboutContent = {
    top: '118vh',
    left: '40%',
    width: '900px',
    height: 'fit-content',
    // position: 'relative',
    position: 'absolute',
    padding: '10px',
    borderRadius: '36px',
    background: ' rgba(255, 255, 255, 0.2)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(5px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    fontSize: '18px',
    color: 'white',
    lineHeight: '1.35',
    fontFamily: 'Roboto',
    overflow: 'scroll',
};
export const aboutSubtitle = {
    padding: '15px',
    fontSize: '20px',
    color: 'white',
    lineHeight: '1.35',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    textAlign: 'center',
};
export const skillSubtitle = {
    padding: '10px',
    fontSize: '18px',
    color: 'white',
    fontFamily: 'Roboto',
    textAlign: 'left',
    backgroundColor: '#99b3fc',
    width: 'fit-content',
    borderRadius: '36px',
    marginBottom: '5px',
    fontWeight: 'bold',
};
export const aboutText = {
    padding: '10px',
    textIndent: '35px',
};

export const techBox = {
    color: 'white',
    // position: 'absolute',
    top: '148vh',
    left: '55%',
    fontSize: '16px',
    marginTop: '15px',
};
export const skillBox = {
    color: 'white',
    // position: 'absolute',
    top: '155vh',
    left: '55%',
    fontSize: '16px',
    marginTop: '15px',
};
export const aboutBubbleItem = {
    textDecoration: 'none',
    borderRadius: '36px',
    border: '1px solid #EEEEEE',
    color: 'white',
    display: 'inline-block',
    position: 'relative',
    margin: '10px 10px 10px 10px',
    textAlign: 'center',
    listStyle: 'none',
    padding: '10px',
    width: 'fit-content',
    transition: '0.25s',
};

export const aboutButton = {
    borderRadius: '36px',
    border: '1px solid white',
    // position: 'relative',
    position: 'absolute',
    textAlign: 'center',
    listStyle: 'none',
    width: '125px',
    // top: '202vh',
    // left: '5%',
    height: '65px',
    color: 'white',
    fontSize: '18px',
    lineHeight: '1.25',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    marginTop: '30px',
};
export const backButton = {
    borderRadius: '36px',
    border: '1px solid white',
    position: 'absolute',
    textAlign: 'center',
    listStyle: 'none',
    width: '135px',
    // top: '202vh',
    left: '25%',
    height: '65px',
    color: 'white',
    fontSize: '18px',
    lineHeight: '1.25',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    marginTop: '30px',
};
/* ============================== EDUCATION SECTION ============================== */
export const orbitalContainer = {
    // height: '600px',
    height: '780px',
    opacity: '0',
    // position: 'relative',
    transition: 'all 1s ease',
    display: 'flex',
    // justifyContent: 'center',
    alignItems: 'center',
};
export const orbitalBox = {
    offsetPath: `path('M200,0 A200,200 0 1,1 200,400 A200,200 0 1,1 200,0')`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: '300px',
    height: '150px',
    overflow: 'hidden',
    cursor: 'pointer',
    borderRadius: '36px',
    margin: '15px',
    background: 'rgba(255, 255, 255, 0.2)',
    boxShadow: ' 0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: ' blur(5px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
};
export const eduTitle = {
    position: 'absolute',
    color: 'white',
    transition: 'all .2s ease',
    padding: '25px',
    textAlign: 'center',
    alignItems: 'center',
    display: 'flex',
    fontSize: '46px',
    marginTop: '75px', // navbar is 50px
    marginLeft: '90px',
    fontFamily: 'Roboto',
};
export const cardContainer = {
    top: '15vh',
    position: 'relative',
    left: '60%',
    // height: 'fit-content',
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
};
export const eduCard = {
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
    width: '150px',
    borderRadius: '100%',
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto',
};
export const eduSlideshow = {
    fontFamily: 'Roboto',
    listStyleType: 'circle',
    lineHeight: '20px',
    listStylePosition: 'inside',
    width: '350px',
    // height: '500px',
    color: 'white',
    maxWidth: '1000px',
    position: 'relative',
    top: '2vh',
    padding: '15px',
    textAlign: 'left',
    fontSize: '18x',
    background: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '16px',
    boxShadow: ' 0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: ' blur(5px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
};
// export const eduSlides = {
//     display: 'none',
// };
// export const eduList = {
//     textAlign: 'center',
//     listStyle: 'none',
//     padding: '8px',
//     fontSize: '20px',
//     alignItems: 'center',
// };
export const eduBtn = {
    borderRadius: '36px',
    border: 'solid 1px white',
    position: 'relative',
    textAlign: 'center',
    listStyle: 'none',
    width: '125px',
    top: '65vh',
    height: '65px',
    color: 'white',
    fontSize: '18px',
    backgroundColor: 'transparent',
    cursor: 'pointer',
};
export const eduBtnContainer = {
    marginTop: '50px',
};
// TODO: add keyframes
export const mySlides = {
    display: 'block',
    animationName: 'fade',
    animationDuration: ' 1.5s',
};
