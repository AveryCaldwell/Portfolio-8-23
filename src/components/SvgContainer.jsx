import React, { useRef  } from 'react';
import MouseIcon from '@mui/icons-material/Mouse';
import * as Material from '@mui/material';
import anime from 'animejs'; // Import anime.js library
 import { mouseBtnText, mouse, mouseContainer, mouseBtn, pageContainer, svgContainer, svgCord } from './Styles'; // Adjust the path accordingly


function SvgContainer() {
    const svgPathRef = useRef(null);
  const handleStartClick = () => {
    anime({
      targets: svgPathRef.current,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'cubicBezier(0.47, 0, 0.745, 0.715)',
      duration: 1000,
      delay: 400,
      direction: 'both',
    });
  };
//  const handleTempBtnClick = () => {
//     anime({
//       targets: svgPathRef.current,
//       strokeDashoffset: [anime.setDashoffset, 800], // Adjust this value based on your SVG path length
//       easing: 'cubicBezier(0.47, 0, 0.745, 0.715)',
//       duration: 500,
//       delay: 500,
//       direction: 'both',
//     });
//   }

//array of pages
const pages = [
    'Landing',
    'About',
    'Edu',
    'Projects',
    'Resume',
    'References',
    'Contact',
];
// state
let currentPage = 'Landing';
let pageIndexObj = {
    Landing: 0,
    About: 1,
    Edu: 2,
    Projects: 3,
    Resume: 4,
    References: 5,
    Contact: 6,
};

// sets the active page shown
const setActivePage = (newPage) => {
    const appContainer = document.getElementsByClassName('appContainer')[0];
    const pageIndex = pages.indexOf(newPage);
    const currentPageIndex = pages.indexOf(currentPage);
    const calculatedVH = pageIndex * 100;
    if (newPage !== currentPage) {
        const pageDiff =
            pageIndex < currentPageIndex
                ? Math.abs(currentPageIndex - pageIndex)
                : Math.abs(pageIndex - currentPageIndex);
        pages.forEach(
            (element, index) =>
                (pageIndexObj[element] = index - pages.indexOf(newPage))
        );
        currentPage = newPage;
        console.log(pageIndexObj);
        console.log(pageDiff);
        appContainer.style.transition = `all ${pageDiff * 1.5}s ease`;
        const logoSliderImage =
            document.getElementsByClassName('logoSliderImage')[0];
        const logoSliderCircle =
            document.getElementsByClassName('logoSliderCircle')[0];
        // if > 0, then the page is moving upwards
        if (currentPageIndex - pageIndex > 0) {
            //  changing top prop value to move the image
            if (pageIndex === 0) {
                setTimeout(function () {
                    logoSliderImage.style.top = `15px`;
                }, 1200);
                logoSliderCircle.style.opacity = '0';
            }
        } else {
            if (pageIndex >= 1) {
                logoSliderImage.style.top = `calc(100% - 335px)`;
                setTimeout(function () {
                    logoSliderCircle.style.opacity = '1';
                }, 1000);
            }
        }
        appContainer.style.top = `calc(0% - ${calculatedVH}vh)`;
    }
};
// setActivePage();
  return (
//  <div className="svgContainer" style={Object.assign({}, svgContainer, pageContainer)}>
 <div className="svgContainer" style={svgContainer}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="616.321 -210 744.3 1389"
        className="svg-cord" style={svgCord}
      >
        <path
        ref={svgPathRef} // Use the ref to target the SVG path for animation
          id="svgPath"
          fill="none"
          stroke="#EEE"
          strokeWidth="3"
          d="M869-207q137 214-71 346-196 76-177-11 36-95 125 56c66 127-103 197-119 165-6-11-18-90 106-118a50 50 0 1 1 267 705"
        />
     </svg>

      <Material.Box style={mouseContainer}>
        <MouseIcon style={mouse}/>
        <Material.Button onClick={() => { handleStartClick(); setActivePage('Resume'); }} style={mouseBtn}>
          <span style={mouseBtnText}>Click Here!</span>
        </Material.Button>
        {/* <button className="tempBtn" onClick={handleTempBtnClick}>
          Reverse Animation
        </button> */}
      </Material.Box>
    </div>

  );
}

export default SvgContainer;
