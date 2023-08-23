import { color, textTransform } from "@mui/system";
import { css, keyframes } from "styled-components";

export const appContainer = {
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  left: "calc(50% - 600px)",
  top: "0",
  transition: "all 1.5s ease",
  width: "1200px",
};
export const pageContainer = {
  minHeight: "100vh",
  overflow: "hidden",
};
/* ============================== LANDING SECTION ============================== */

export const logoSliderContainer = {
  position: "absolute",
  color: "white",
  background: `linear-gradient(
        rgba(255, 255, 255, 1),
        rgba(255, 255, 255, 0.25)
    )`,
  height: "120vh",
  width: "350px",
  borderRadius: "250px",
  left: "5%",
  top: "40vh",
};
export const logoSliderImage = {
  pointerEvents: "none",
  position: "relative",
  width: "300px",
  height: "300px",
  display: "inline-block",
  top: "15px",
  borderRadius: "50%",
  left: "24px",
  transition: "all 1.5s ease",
};
export const logoSliderCircle = {
  position: "absolute",
  color: "white",
  border: " 5px solid white",
  height: "400px",
  width: "400px",
  borderRadius: "50%",
  left: "-30px",
  bottom: "-26px",
  boxShadow: "0 0 30px 15px white",
  display: "block",
  transition: "all 0.5s ease",
  opacity: "0",
};
export const landingHeader = {
  position: "relative",
  color: "white",
  left: "40%",
  top: "37vh",
  height: "12vh",
  fontSize: "50px",
  fontFamily: "Roboto",
};
export const landingText = {
  display: "inline-block",
  fontSize: "32px",
  position: "relative",
  left: "40%",
  top: "38vh",
  color: "white",
  marginTop: "15px",
  width: "400px",
};
export const landingTitle = {
  border: "solid 1px white",
  borderRadius: "36px",
  padding: "5px",
  display: "block",
  textAlign: "center",
  letterSpacing: "5px",
  fontFamily: "Roboto",
};
export const landingSubtitle = {
  marginTop: "15px",
  borderRadius: "36px",
  width: "400px",
  padding: "5px",
  display: "block",
  fontFamily: "Roboto",
};

export const landingButton = {
  color: "white",
  padding: "7px",
  backgroundColor: "transparent",
  border: "none",
  fontSize: "50px",
  cursor: "pointer",
};
/* { NAME ANIMATION } */
export const letter = {
  display: "inline-block",
  opacity: "0",
};
/* ============================== ABOUT SECTION ============================== */
export const aboutContainer = {
  display: "flex",
  fontSize: "50px",
  color: "white",
  borderRadius: "250px",
  // left: '5%',
  // top: '0vh',
  // bottom: '145vh',
  fontFamily: "Roboto",
  // position: 'absolute',
  width: "1200px",
  minHeight: "100vh",
  // overflow: 'hidden',
  //height: "100vh",
};
export const aboutHeader = {
  fontSize: "48px",
  color: "white",
  borderRadius: "250px",
  left: "40%",
  top: "110vh",
  position: "absolute",
};
export const aboutContent = {
  top: "118vh",
  left: "40%",
  width: "900px",
  height: "fit-content",
  // position: 'relative',
  position: "absolute",
  padding: "10px",
  borderRadius: "36px",
  background: " rgba(255, 255, 255, 0.2)",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(5px)",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  fontSize: "18px",
  color: "white",
  lineHeight: "1.35",
  fontFamily: "Roboto",
  overflow: "scroll",
};
export const aboutSubtitle = {
  padding: "15px",
  fontSize: "20px",
  color: "white",
  lineHeight: "1.35",
  fontFamily: "Roboto",
  fontWeight: "bold",
  textAlign: "center",
};
export const skillSubtitle = {
  padding: "10px",
  fontSize: "18px",
  color: "white",
  fontFamily: "Roboto",
  textAlign: "left",
  backgroundColor: "#99b3fc",
  width: "fit-content",
  borderRadius: "36px",
  marginBottom: "5px",
  fontWeight: "bold",
};
export const aboutText = {
  padding: "10px",
  textIndent: "35px",
};

export const techBox = {
  color: "white",
  // position: 'absolute',
  top: "148vh",
  left: "55%",
  fontSize: "16px",
  marginTop: "15px",
};
export const skillBox = {
  color: "white",
  // position: 'absolute',
  top: "155vh",
  left: "55%",
  fontSize: "16px",
  marginTop: "15px",
};
export const aboutBubbleItem = {
  textDecoration: "none",
  borderRadius: "36px",
  border: "1px solid #EEEEEE",
  color: "white",
  display: "inline-block",
  position: "relative",
  margin: "10px 10px 10px 10px",
  textAlign: "center",
  listStyle: "none",
  padding: "10px",
  width: "fit-content",
  transition: "0.25s",
};

export const aboutButton = {
  borderRadius: "36px",
  border: "1px solid white",
  // position: 'relative',
  position: "absolute",
  textAlign: "center",
  listStyle: "none",
  width: "125px",
  // top: '202vh',
  // left: '5%',
  height: "65px",
  color: "white",
  fontSize: "18px",
  lineHeight: "1.25",
  backgroundColor: "transparent",
  cursor: "pointer",
  marginTop: "30px",
};
export const backButton = {
  borderRadius: "36px",
  border: "1px solid white",
  position: "absolute",
  textAlign: "center",
  listStyle: "none",
  width: "135px",
  // top: '202vh',
  left: "25%",
  height: "65px",
  color: "white",
  fontSize: "18px",
  lineHeight: "1.25",
  backgroundColor: "transparent",
  cursor: "pointer",
  marginTop: "30px",
};
/* ============================== EDUCATION SECTION ============================== */
export const orbitalContainer = {
  // height: '600px',
  height: "780px",
  opacity: "0",
  // position: 'relative',
  transition: "all 1s ease",
  display: "flex",
  // justifyContent: 'center',
  alignItems: "center",
};
export const orbitalBox = {
  offsetPath: `path('M200,0 A200,200 0 1,1 200,400 A200,200 0 1,1 200,0')`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  width: "300px",
  height: "150px",
  overflow: "hidden",
  cursor: "pointer",
  borderRadius: "36px",
  margin: "15px",
  background: "rgba(255, 255, 255, 0.2)",
  boxShadow: " 0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: " blur(5px)",
  border: "1px solid rgba(255, 255, 255, 0.3)",
};
export const eduTitle = {
  position: "absolute",
  color: "white",
  transition: "all .2s ease",
  padding: "25px",
  textAlign: "center",
  alignItems: "center",
  display: "flex",
  fontSize: "46px",
  marginTop: "75px", // navbar is 50px
  marginLeft: "90px",
  fontFamily: "Roboto",
};
export const cardContainer = {
  top: "15vh",
  position: "relative",
  left: "60%",
  // height: 'fit-content',
  display: "flex",
  transition: "all 1s ease",
  flexDirection: "column",
  overflow: "hidden",
};

export const eduHeader = {
  transition: "all 0.2s ease",
  padding: "5px",
  color: "white",
  fontSize: "22px",
  textAlign: "center",
  alignItems: "center",
  display: "flex",
  fontFamily: "Roboto",
};
export const eduCard = {
  height: "fit-content",
  fontFamily: "Roboto",
  padding: "15px",
  justifyContent: "center",
  textAlign: "center",
  display: "flex",
  width: "350px",
  position: "relative",
  cursor: "pointer",
  borderRadius: "36px",
  margin: "15px",
  background: "rgba(255, 255, 255, 0.2)",
  boxShadow: " 0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: " blur(5px)",
  border: "1px solid rgba(255, 255, 255, 0.3)",
};
export const eduImage = {
  width: "150px",
  borderRadius: "100%",
  display: "flex",
  marginLeft: "auto",
  marginRight: "auto",
};
export const eduSlideshow = {
  fontFamily: "Roboto",
  listStyleType: "circle",
  lineHeight: "20px",
  listStylePosition: "inside",
  width: "350px",
  // height: '500px',
  color: "white",
  maxWidth: "1000px",
  position: "relative",
  top: "2vh",
  padding: "15px",
  textAlign: "left",
  fontSize: "18x",
  background: "rgba(255, 255, 255, 0.2)",
  borderRadius: "16px",
  boxShadow: " 0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: " blur(5px)",
  border: "1px solid rgba(255, 255, 255, 0.3)",
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
  borderRadius: "36px",
  border: "solid 1px white",
  position: "relative",
  textAlign: "center",
  listStyle: "none",
  width: "125px",
  top: "65vh",
  height: "65px",
  color: "white",
  fontSize: "18px",
  backgroundColor: "transparent",
  cursor: "pointer",
};
export const eduBtnContainer = {
  marginTop: "50px",
};
/* ============================== SVG PATH SECTION ============================== */
export const svgContainer = {
  position: "absolute",
  position: "relative",
  bottom: "-50vh",
  left: "250px",
  // pointerEvents: "none",
  cursor: "pointer",
  // marginTop: '550px'
};
/* Hide the images by default */
export const mySlides = {
  display: "block",
  animationName: "fade",
  animationDuration: " 1.5s",
};
export const svgCord = {
  width: "120vh",
  height: "120vh",
  pointerEvents: "none",
};

export const animateSvgStroke1 = {
  "@WebkitKeyframes animateSvgStroke1": {
    "0%": {
      strokeDashoffset: "2515.90478515625px",
      strokeDasharray: "2515.90478515625px",
    },
    "100%": {
      strokeDashoffset: "0",
      strokeDasharray: "2515.90478515625px",
    },
  },
  "@keyframes animateSvgStroke1": {
    "0%": {
      strokeDashoffset: "2515.90478515625px",
      strokeDasharray: "2515.90478515625px",
    },
    "100%": {
      strokeDashoffset: "0",
      strokeDasharray: "2515.90478515625px",
    },
  },
  "@keyframes animateSvgStrokeReverse": {
    "100%": {
      strokeDashoffset: "2515.90478515625px",
      strokeDasharray: "2515.90478515625px",
    },
    "0%": {
      strokeDashoffset: "0",
      strokeDasharray: "2515.90478515625px",
    },
  },
};
/* ============================== PROJECTS SECTION ============================== */
// export const projectContainer = {
//   display: "flex",
//   height: "100vh",
// };
export const projectContainer = {
  display: "flex",
  flexDirection: "column", // Stack content vertically
  alignItems: "center", // Center horizontally
  justifyContent: "center", // Center vertically
  // minHeight: "100vh",
  fontFamily: "Roboto",
  // position: 'absolute',
};
/* LEFT SIDE COMPUTER SECTION STARTS */
/* ABOUT ME page title */
export const projectHeader = {
  fontSize: "50px",
  color: "white",
  borderRadius: "250px",
  left: "5%",
  top: "310vh",
  position: "absolute",
};
/* about me text blerb */
export const projectContent = {
  position: "absolute",
  height: "400px",
  width: "450px",
  lineHeight: "1.25",
  left: "58px",
  top: "325vh",
  borderRadius: "36px",
  background: "rgba(255, 255, 255, 0.2)",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  border: " 1px solid rgba(255, 255, 255, 0.3)",
  fontSize: "20px",
  color: "white",
};
export const textSlideshow = {
  maxWidth: "1000px",
  position: "relative",
  padding: "15px",
  right: "5px",
};
/* Hide the images by default */
export const projectSlides = {
  display: "none",
};
export const slideTitle = {
  padding: "5px",
  fontSize: "26px",
  textAlign: "center",
  fontWeight: "bold",
  top: "5px",
};
/* project github icon */
export const iconContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
export const github = {
  cursor: "pointer",
  position: "relative",
  color: "white",
  fontSize: "50px",
  animation: "animate 3s linear infinite",
  textShadow: `0 0 50px #0072ff, 0 0 100px #0072ff, 0 0 150px #0072ff,
        0 0 200px #0072ff`,
};
// export const keyframes = {
//   "#github": {
//     animationDelay: "0.1s",
//   },
//   "@keyframes animate": {
//     from: {
//       filter: "hue-rotate(0deg)",
//     },
//     to: {
//       filter: "hue-rotate(360deg)",
//     },
//   },
// };
/* ===============RIGHT SIDE COMPUTER SECTION STARTS */
/* computer image */
export const computer = {
  pointerEvents: "none",
  position: "relative",
  width: "600px",
  height: "600px",
  display: "inline-block",
  // bottom: '1vh',
  // right: '130px',
  transition: "all 1.5s ease",
};
export const computerImage = {
  height: "325px",
  width: "575px",
  position: "relative",
  bottom: "42vh",
  right: "-15px",
};
/* Computer container */
export const computerContainer = {
  position: "absolute",
  height: "350px",
  width: "350px",
  left: "70%",
  top: "350vh",
};
/* Slideshow container */
export const slideshowContainer = {
  maxWidth: "1000px",
  position: "relative",
  bottom: "38vh",
  right: "125px",
  width: "587px",
  height: "385px",
};
/* Next & previous buttons */
export const arrows = {
  cursor: "pointer",
  position: "absolute",
  top: "50%",
  width: "auto",
  marginTop: "22px",
  padding: "16px",
  color: "white",
  fontSize: "40px",
  transition: "0.6s ease",
  borderRadius: "0 3px 3px 0",
  userSelect: "none",
};
/* Position the "next button" to the right */
export const next = {
  right: "-55px",
  top: "22vh",
  borderRadius: "3px 0 0 3px",
};
export const prev = {
  left: "-55px",
  top: "22vh",
  borderRadius: "3px 0 0 3px",
};
// export const textNext = {
//     left: '455px',
//     borderRadius: '3px 0 0 3px',
// }
/* The dots/bullets/indicators */
export const dotContainer = {
  textAlign: "center",
  marginTop: "-400px",
  marginRright: "35px",
};
export const dot = {
  cursor: "pointer",
  height: "15px",
  width: "15px",
  margin: "0 2px",
  backgroundColor: "#bbb",
  borderRadius: "50%",
  display: "inline-block",
  transition: "background-color 0.6s ease",
};
export const activeDot = {
  backgroundColor: "#0072ff",
};
/* Fading animation */
export const fade = {
  animationName: "fade",
  animationDuration: "1.5s",
};
// /* // TODO: add to styles.jsx */
// @keyframes fade {
//     from {
//         opacity: 0.4;
//     }
//     to {
//         opacity: 1;
//     }
// }
// export const startButton = {
//   borderRadius: "36px",
//   border: "solid 1px white",
//   position: "relative",
//   textAlign: "center",
//   listStyle: "none",
//   width: "125px",
//   top: "65vh",
//   left: "5",
//   height: "65px",
//   color: "white",
//   fontSize: "18px",
//   cursor: "pointer",
// };
export const mouseContainer = {
  // bottom: "-25vh",
  bottom: "125vh",
  // position: 'absolute',
  position: "relative",
  left: "25%",
  cursor: "pointer",
  // top: '5vh'
};
export const mouse = {
  posiiton: "absolute",
  color: "white",
  fontSize: "170px",
  // position: "static",
  cursor: "pointer",
  // marginRight: '100px',
};
export const mouseBtn = {
  wordBreak: "break-all",
  width: "100px",
  fontSize: "30px",
  cursor: "pointer",
};
export const mouseBtnText = {
  wordBreak: "break-all",
  width: "90px",
  fontSize: "26px",
  marginLeft: "-270px",
  marginBottom: "100px",
  lineHeight: "initial",
};
/* ============================== RESUME SECTION ============================== */
export const resumeContainer = {
  // backgroundColor: "purple",
  display: "flex",
  color: "white",
  height: "100vh",
  // position: "absolute",
  position: "relative",
  // top: "408vh",
  fontFamily: "Roboto",
  // width: "100%",
  // padding: "5px",
  bottom: "36vh",
};
export const resumeTitle = {
  position: "relative",
  fontSize: "40px",
  // pointerEvents: 'none',
};
export const resumeBox = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  bottom: "45vh",
  position: "relative",
  width: "100%",
};

/* typing animation */
export const typingContainer = {
  fontSize: "36px",
  padding: "5px",
  fontWeight: "light",
  letterSpacing: "0.1rem",
  textAlign: "right",
  overflow: "hidden",
  // marginTop: "75px",
  position: "absolute",
  display: "flex",
  justifyContent: "end",
  width: "100%",
  marginLeft: "auto",
  marginRight: "auto",
};
/* snippet of code for resume */
export const codeBox = {
  flexWrap: "wrap",
  display: "flex",
  position: "relative",
  padding: "20px",
  height: "fit-content",
  width: "100%",
  top: "38vh",
  // top: "32vh",
  right: "75px",
  fontSize: "18px",
  borderRadius: "36px",
  background: "rgba(255, 255, 255, 0.2)",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(5px)",
  WebkitBackdropFilter: "blur(5px)",
  border: "1px solid rgba(255, 255, 255, 0.3)",
};
export const typedText = {
  fontWeight: "normal",
  color: "rgba(248, 201, 195, 1)",
};

// Define the blink keyframes
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

export const downloadBtn = {
  // backgroundColor: "#ffffff",
  height: "80px",
  width: "175px",
  textAlign: "center",
  position: "relative",
  transform: "translateY(-50%)",
  cursor: "pointer",
  borderRadius: "36px",
  bottom: "-78vh",
  marginRight: "-849px",
};

export const text = {
  font: "bold 1.25rem/1 helvetica",
  color: "rgba(153, 179, 252, 1)",
  position: "absolute",
  top: "50%",
  transform: "translateY(-52%)",
  left: "0",
  right: "0",
};

export const progressBar = {
  position: "absolute",
  height: "10px",
  width: "0",
  right: "0",
  top: "50%",
  left: "50%",
  borderRadius: "200px",
  transform: "translateY(-50%) translateX(-50%)",
  background: "lighten(rgba(153, 179, 252, 1), 15%)",
};

export const downloadSvg = {
  width: "30px",
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%) translateX(-50%)",
  left: "50%",
  right: "0",
  enableBackground: "new 0 0 25 30",
};

export const check = {
  fill: "none",
  stroke: "#ffffff",
  strokeWidth: "3",
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const resumeLink = {
  textDecoration: "none",
  color: "rgba(153, 179, 252, 1)",
};
/* resume plain text */
export const resumePlainText = {
  display: "none",
  height: "100vh",
  overflow: "hidden",
  fontSize: "12px",
  marginTop: "150px",
  width: "1200px",
};
export const resumeBtn = {
  position: "relative",
  display: "inline-flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  textAlign: "center",
  padding: "10px",
  cursor: "pointer",
  borderRadius: "36px",
  top: "78vh",
  backgroundColor: "transparent",
  color: "white",
  border: "solid 1px white",
  width: "150px",
  height: "75px",
  fontSize: "18px",
};
export const resumeNextBtn = {
  position: "relative",
  display: "inline-flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  textAlign: "center",
  padding: "10px",
  cursor: "pointer",
  borderRadius: "36px",
  top: "78vh",
  backgroundColor: "transparent",
  color: "white",
  border: "solid 1px white",
  width: "150px",
  height: "75px",
  fontSize: "18px",
};
export const textBtn = {
  position: "relative",
  display: "inline-flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  textAlign: "center",
  padding: "10px",
  cursor: "pointer",
  borderRadius: "36px",
  top: "78vh",
  backgroundColor: "transparent",
  color: "white",
  border: "solid 1px white",
  width: "150px",
  height: "75px",
  fontSize: "18px",
};
/* ============================== REFERENCE SECTION ============================== */
export const refContainer = {
  backgroundColor: "navy",
  fontFamily: "Roboto",
  top: "-32vh",
  position: "relative",
};

export const refHeader = {
  position: "relative",
  color: "white",
  fontSize: "40px",
  textAlign: "center",
  padding: "10px",
};

// box containing ref cards
export const refBox = {
  position: "relative",
  display: "grid",
};

export const center = {
  positon: "absolute",
  top: "35vh",
  left: "50%",
  // WebkitTransform: "translate(-50%, -50%)",
};
// .card {
export const card = {
  width: "450px",
  height: "250px",
  backgroundColor: "#fff",
  background: "linear-gradient(#f8f8f8, #fff)",
  boxShadow: "0 8px 16px -8px rgba(0, 0, 0, 0.4)",
  borderRadius: "6px",
  overflow: "hidden",
  position: "relative",
  margin: "1.5rem",
};
export const refBtns = {
  position: "relative",
  display: "inline-flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  textAlign: "center",
  padding: "10px",
  cursor: "pointer",
  borderRadius: "36px",
  top: "78vh",
  backgroundColor: "transparent",
  color: "white",
  border: "sollid 1px white",
  width: "150px",
  height: "75px",
  fontSize: "18px",
};
// .card h1
export const cardHeader = {
  textAlign: "center",
};

// .card .additional {
// .card:hover .additional {
export const additional = {
  // position: "absolute",
  position: "initial",
  width: "150px",
  height: "100%",
  background: `radial-gradient(
        circle,
        rgba(255, 221, 112, 1) 0%,
        rgba(255, 157, 112, 1) 100%
    )`,
  background: "rgb(255, 221, 112)",
  transition: "width 0.4s",
  overflow: "hidden",
  zIndex: "2",
  "&:hover": {
    width: "100%",
    borderRadius: "0 5px 5px 0",
  },
};
// .card.green .additional {
export const secondAdd = {
  background: "reg(255,221,112)",
  background: `radial-gradient(
        circle,
        rgba(255, 221, 112, 1) 0%,
        rgba(101, 230, 181, 1) 100%
    )`,
};
export const secondCoords = {
  color: "#325c46",
};
// .card .additional .user-card::after {
export const userCard = {
  width: "150px",
  height: "100%",
  position: "relative",
  float: "left",
  "&::after": {
    content: "",
    display: "block",
    position: "absolute",
    top: "10%",
    right: "-2px",
    height: "80%",
    borderLeft: "2px solid rgba(0,0,0,0.025)",
  },
};
// .card .additional .user-card .level,
// .card .additional .user-card .points
export const userCardStats = {
  top: "15%",
  color: "#fff",
  textTransform: "uppercase",
  fontSize: "0.75rem",
  fontWeight: "bold",
  background: "rgba(0, 0, 0, 0.15)",
  padding: "0.125rem 0.75rem",
  borderRadius: "100px",
  whiteSpace: "nowrap",
};
// .card .additional .user-card .points
export const points = {
  top: "85%",
  position: "relative",
};
// .card .additional .user-card svg {
export const cardImage = {
  top: "50%",
  width: "110px",
  height: "110px",
};
// .card .additional .more-info {
export const moreInfo = {
  width: "300px",
  float: "left",
  position: "absolute",
  left: "150px",
  height: "100%",
};
// .card .additional .more-info h1 {
export const moreInfoTitle = {
  color: "white",
  marginBottom: "0",
};
// .card .additional .coords {
export const coords = {
  margin: "0 1rem",
  color: "white",
  fontSize: "1rem",
};
// .card .additional .coords span + span {
export const coordsSpan = {
  float: "right",
};

// .card .additional .stats {
export const stats = {
  fontSize: "2rem",
  display: "flex",
  position: "absolute",
  bottom: "1rem",
  left: "1rem",
  right: "1rem",
  top: "auto",
  color: "#fff",
};
// .card .additional .stats > div {
export const statsTitle = {
  flex: "1",
  textAlign: "center",
  fontSize: "0.75rem",
  fontWeight: "bold",
  textTransform: "uppercase",
};
// .card .additional .stats i {
export const statsTrophy = {
  display: "block",
};
// .card .additional .stats div.value {
export const value = {
  fontSize: "1.5rem",
  fontWeight: "bold",
  lineHeight: "1.5rem",
};
// .card .general {
export const general = {
  width: "300px",
  height: "100%",
  position: "absolute",
  right: "0",
  top: "0",
  zIndex: "1",
  boxSizing: "border-box",
  padding: "1rem",
  paddingTop: "0",
};
// .card .general .more {
export const more = {
  position: "absolute",
  bottom: "1rem",
  right: "1rem",
  fontSize: "0.9rem",
};
