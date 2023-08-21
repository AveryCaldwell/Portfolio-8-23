import * as React from "react";
import { pageContainer, svgCord, svgContainer, animateSvgStroke1, mouseContainer, mouse, mouseBtnText, mouseBtn } from "./Styles";
import * as Material from '@mui/material';
import MouseIcon from "@mui/icons-material/Mouse";

// This function renders main content of web app
function SvgContainer() {

  const handleMouseBtnClick = () => {
    console.log("Mouse button worked");
    const svgPath = document.getElementById("svgPath");
    svgPath.style.animation =
      "animateSvgStroke1 0.25s cubic-bezier(0.47, 0, 0.745, 0.715) 0.25s both";
  };

  const handleReturnBtnClick = () => {
    console.log("Return button worked");
    const svgPath = document.getElementById("svgPath");
    svgPath.style.animation =
      "animateSvgStrokeReverse 0.5s cubic-bezier(0.47, 0, 0.745, 0.715) 0.5s both";
  };
  // document.addEventListener("DOMContentLoaded", function () {
  //   const mouseBtn = document.getElementById("mouseBtn");
  //   const svgPath = document.getElementById("svgPath");
  //   const returnBtn = document.getElementsByClassName("returnBtn")[0];

  //   mouseBtn.addEventListener("click", function () {
  //     svgPath.style.animation =
  //       "animateSvgStroke1 0.25s cubic-bezier(0.47, 0, 0.745, 0.715) 0.25s both";
  //   });
  //   returnBtn.addEventListener("click", function () {
  //     svgPath.style.animation =
  //       "animateSvgStrokeReverse 0.5s cubic-bezier(0.47, 0, 0.745, 0.715) 0.5s both";
  //   });
  // });

  return (

    // FIXME: get svg animation working
    <div className="svgContainer" style={Object.assign({}, svgContainer, pageContainer)}>
          <button class="returnBtn" onClick={handleReturnBtnClick}>
                <span> Back </span>
            </button>

{/* ===COMPUTER WIRE SVG=== */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="616.321 -210 744.3 1389 "
        className="svg-cord"
        style={svgCord}
      >
        <path style={animateSvgStroke1}
          id="svgPath"
          fill="none"
          stroke="#EEE"
          strokeWidth="3"
          d="M869-207q137 214-71 346-196 76-177-11 36-95 125 56c66 127-103 197-119 165-6-11-18-90 106-118a50 50 0 1 1 267 375"
      />
      </svg>

      {/* ===BUTTONS=== */}
        <Material.Box  sx={mouseContainer}>
        <MouseIcon sx={mouse}/>
        <Material.Button id="mouseBtn" sx={mouseBtn}> <span style={mouseBtnText} onClick={handleMouseBtnClick}> Click  Here! </span></Material.Button>
        </Material.Box>
    </div>
  );
}

export default SvgContainer;
