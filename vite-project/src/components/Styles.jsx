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
export const logoSliderImage = {
    pointerEvents: 'none',
    position: 'relative',
    width: '320px',
    height: '320px',
    display: 'inline-block',
    top: '15px',
    borderRadius: '50%',
    left: '15px',
    transition: 'all 1.5s ease',
};
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
    left: '20%',
    top: '40vh',
};
export const logoSliderCircle = {
    position: 'absolute',
    color: 'white',
    border: ' 5px solid white',
    height: '400px',
    width: '400px',
    borderRadius: '50%',
    left: '-30px',
    bottom: '-34px',
    boxShadow: '0 0 30px 15px white',
    display: 'block',
    transition: 'all 0.5s ease',
    opacity: '0',
};
export const landingHeader = {
    position: 'relative',
    color: 'white',
    left: '50%',
    top: '37vh',
    height: '12vh',
    fontSize: '50px',
    fontFamily: 'Roboto',
};
export const landingText = {
    display: 'inline-block',
    fontSize: '32px',
    position: 'relative',
    left: '50%',
    top: '37vh',
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
    padding: '15px',
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
    backgroundColor: 'green',
    fontSize: '50px',
    color: 'white',
    borderRadius: '250px',
    left: '60%',
    top: '80vh',
    // position: 'relative',
};
export const aboutHeader = {
    fontSize: '50px',
    color: 'white',
    borderRadius: '250px',
    left: '55%',
    top: '125vh',
    position: 'absolute',
};
export const aboutContent = {
    top: '133vh',
    left: '55%',
    width: '750px',
    height: '400px',
    // position: 'relative',
    position: 'absolute',
    padding: '15px',
    borderRadius: '36px',
    background: ' rgba(255, 255, 255, 0.2)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(5px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    fontSize: '20px',
    color: 'white',
    lineHeight: '1.35',
    fontFamily: 'Roboto',
};
export const aboutText = {
    padding: '10px',
    textIndent: '25px',
};

export const techBox = {
    color: 'white',
    position: 'absolute',
    top: '148vh',
    left: '55%',
    fontSize: '20px',
    marginTop: '15px',
};
export const skillBox = {
    color: 'white',
    position: 'absolute',
    top: '155vh',
    left: '55%',
    fontSize: '20px',
    marginTop: '15px',
};
export const aboutBubbleItem = {
    textDecoration: 'none',
    borderRadius: '36px',
    border: '1px solid white',
    color: 'white',
    display: 'inline-block',
    position: 'relative',
    margin: '10px 10px 10px 10px',
    textAlign: 'center',
    listStyle: 'none',
    padding: '5px',
    width: '100px',
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
    top: '165vh',
    left: '55%',
    height: '65px',
    color: 'white',
    fontSize: '18px',
    lineHeight: '1.25',
    backgroundColor: 'transparent',
    pointer: 'cursor',
};
export const backButton = {
    borderRadius: '36px',
    border: '1px solid white',
    position: 'absolute',
    textAlign: 'center',
    listStyle: 'none',
    width: '135px',
    top: '165vh',
    left: '70%',
    height: '65px',
    color: 'white',
    fontSize: '18px',
    lineHeight: '1.25',
    backgroundColor: 'transparent',
    pointer: 'cursor',
};
