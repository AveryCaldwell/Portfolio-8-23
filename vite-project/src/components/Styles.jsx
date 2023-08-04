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
