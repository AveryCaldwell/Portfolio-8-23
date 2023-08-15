import * as React from "react";
import { svgCord, svgContainer, animateSvgStroke1  } from "./Styles";

// This function renders main content of web app
function SvgContainer() {

  document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("startButton");
    const svgPath = document.getElementById("svgPath");
    const returnBtn = document.getElementsByClassName("returnBtn")[0];

    startButton.addEventListener("click", function () {
      svgPath.style.animation =
        "animateSvgStroke1 0.25s cubic-bezier(0.47, 0, 0.745, 0.715) 0.25s both";
    });
    returnBtn.addEventListener("click", function () {
      svgPath.style.animation =
        "animateSvgStrokeReverse 0.5s cubic-bezier(0.47, 0, 0.745, 0.715) 0.5s both";
    });
  });
  return (
    <div className="svgContainer" style={svgContainer}>
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

      <button
        id="startButton"
        class="aboutButton"
        onClick={() => setActivePage('Resume')}
      >
        <span>Read More</span>
      </button>
      <button class="returnBtn" onClick={() => setActivePage('Edu')}>
        <span> ^ </span>
      </button>
    </div>
  );
}

export default SvgContainer;
