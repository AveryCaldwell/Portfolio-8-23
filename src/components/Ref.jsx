import * as React from "react";
import * as Material from "@mui/material";
import anime from "animejs/lib/anime.es.js";
import avesLogo from "../assets/aves.png";
import { refContainer, pageContainer } from "./Styles";

// This function renders main content of web app
function Ref() {
  const pages = [
    "Landing",
    "About",
    "Edu",
    "Projects",
    "Resume",
    "References",
    "Contact",
  ];
  // state
  let currentPage = "Landing";
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
    const appContainer = document.getElementsByClassName("appContainer")[0];
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
        document.getElementsByClassName("logoSliderImage")[0];
      const logoSliderCircle =
        document.getElementsByClassName("logoSliderCircle")[0];
      // if > 0, then the page is moving upwards
      if (currentPageIndex - pageIndex > 0) {
        //  changing top prop value to move the image
        if (pageIndex === 0) {
          setTimeout(function () {
            logoSliderImage.style.top = `15px`;
          }, 1200);
          logoSliderCircle.style.opacity = "0";
        }
      } else {
        if (pageIndex >= 1) {
          logoSliderImage.style.top = `calc(100% - 335px)`;
          setTimeout(function () {
            logoSliderCircle.style.opacity = "1";
          }, 1000);
        }
      }
      appContainer.style.top = `calc(0% - ${calculatedVH}vh)`;
    }
  };

  return (
    <>
      <div
        class='refContainer pageContainer'
        style={Object.assign({}, refContainer, pageContainer)}></div>
    </>
  );
}

export default Ref;
