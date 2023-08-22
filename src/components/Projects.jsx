import React, { useState } from "react";
import * as Material from "@mui/material";

import {
  projectContainer,
  pageContainer,
  projectHeader,
  projectContent,
  textSlideshow,
  projectSlides,
  github,
  iconContainer,
  slideTitle,
  arrows,
  fade,
  dot,
  dotContainer,
  next,
  slideshowContainer,
  computerContainer,
  computer,
  mySlides,
  activeDot,
  computerImage,
  prev,
  mouseContainer,
  mouse,
  mouseBtn,
  mouseBtnText,
} from "./Styles";

import Tech from "../assets/Tech.png";
import Weather from "../assets/Weather.png";
import Team from "../assets/Weather.png";
import WYW from "../assets/WYW.png";
import buds from "../assets/buds.png";
import CC from "../assets/CC.png";
import Employee from "../assets/Employee.png";
import comp from "../assets/comp.png";
// ICON
import GitHubIcon from "@mui/icons-material/GitHub";

// This function renders main content of web app
function Projects() {
  const projects = [
    {
      title: "🍽️ TasteBuds",
      description:
        "A social media app that allows users to never dine alone again! This app allows the user to create a profile, see other users posts, create posts, and join other events!",
      technologies:
        "Technologies: Tailwind, React, MERN stack, Node.js/Express.js, Apollo, GraphQL, MongoDb, Mongoose, GitHub, Heroku",
      githubLink: "https://github.com/AveryCaldwell/TasteBuds",
      image: buds,
    },
    {
      title: "🌎 WearYouWander",
      description:
        "An application that analyzes the weather and suggests which type of outerwear would be most suitable.",
      technologies:
        "Technologies: HTML, CSS, JavaScript, Foundation Framework, jQuery, Server Side APIs, Node.js/Express.js, Git Pages",
      githubLink: "https://github.com/AveryCaldwell/WearYouWander",
      image: WYW,
    },
    {
      title: "🍻 Cheers Check",
      description:
        "A new liquor inventory application - the perfect tool for anyone who enjoys keeping track of their favorite spirits! You can easily organize your liquor collection, keep track of what you have on hand, and share it with your friends.",
      technologies:
        "Technologies: Bootstrap, HTML, CSS, JavaScript, MySql, Sequelize, Handlebars.js, Node.js/Express.js, Dotenv, Bycrypt, JSHint, Anime.js, Heroku",
      githubLink: "https://github.com/AveryCaldwell/CheersCheck",
      image: CC,
    },
    {
      title: "📋 Team Profile Generator",
      description:
        "An application that generates a webpage that displays a team's basic info for quick access to emails and GitHub profiles",
      technologies:
        "Technologies: HTML, CSS, JavaScript, Node.js, Inquierer, Jest",
      githubLink: "https://github.com/AveryCaldwell/Team-Profile-Generator",
      image: Team,
    },
    {
      title: "🖥️ Tech Blog MVC",
      description:
        "CMS-style blog site where developers can publish their blog posts & comment on other developers’ posts as well. Using Handlebars.js as the templating language, Sequelize as the ORM, and express-session npm package for authentication.",
      technologies:
        "Technologies:  HTML, CSS, Bootstrap, JavaScript, MySQL, Sequelize, Handlebars.js, Node.js, Express, Dotenv,Bycrypt, Heroku",
      githubLink: "https://github.com/AveryCaldwell/Tech-Blog-MVC",
      image: Tech,
    },
    {
      title: "🌦️ Weather Dashboard API",
      description:
        "A weather app that includes a search option, a list of cities, and a five-day forecast and current weather conditions for any city.",
      technologies:
        "Technologies: HTML, CSS, JavaScript, Node.js, MySQL, Inquirer, console.table",
      githubLink: "https://github.com/AveryCaldwell/weather-dashboard-API",
      image: Weather,
    },
    {
      title: "💼 Employee Tracker",
      description:
        "A command-line application that manages a company's employee database, using Node.js, Inquirer, and MySQL.",
      technologies:
        "Technologies: Tailwind, React, MERN stack, Node.js/Express.js, Apollo, GraphQL, MongoDb, Mongoose, GitHub, Heroku",
      githubLink: "https://github.com/AveryCaldwell/Employee-Tracker",
      image: Employee,
    },
  ];

  const [slideIndex, setSlideIndex] = useState(0);

  // Next/previous controls
  const plusSlides = (n) => {
    setSlideIndex(
      (prevIndex) => (prevIndex + n + projects.length) % projects.length
    );
  };

  // Thumbnail image controls
  const currentSlide = (n) => {
    setSlideIndex(n);
  };
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
  // Create a function to trigger the SVG animation

  return (
    <>
      <div
        className='projectContainer pageContainer'
        // style={Object.assign({}, projectContainer, pageContainer)}>
            style={projectContainer}>
        <h1 className='projectHeader' onClick={() => setActivePage('Resume')}style={projectHeader}>
          Projects
        </h1>

        <div className='projectContent' style={projectContent}>
          <div className='textSlideshow' style={textSlideshow}>
            {projects.map((project, index) => (
              <div
                key={index}
                className={`projectSlides fade ${
                  index === slideIndex ? "active" : ""
                }`}
                style={{
                  ...fade,
                  ...projectSlides,
                  display: index === slideIndex ? "block" : "none",
                }}>
                {/* Slide Title */}
                <div id='slideTitle' className='numbertext' style={slideTitle}>
                  {project.title}
                </div>
                {/* Project Details */}
                <div className='projectDetails'>
                  <p>{project.description}</p>
                  <p>{project.technologies}</p>
                  {/* Icons */}
                  <div className='iconContainer' style={iconContainer}>
                    <a href={project.githubLink}>
                      <GitHubIcon style={github} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* === COMPUTER === */}
        <div className='computerContainer' style={computerContainer}>
          <div className='slideshowContainer' style={slideshowContainer}>
            <img src={comp} alt='comp' class='computer' style={computer} />
            {projects.map((project, index) => (
              <div
                key={index}
                className={`mySlides fade ${
                  index === slideIndex ? "active" : ""
                }`}
                style={{
                  ...fade,
                  ...mySlides,
                  display: index === slideIndex ? "block" : "none",
                }}>
                <img
                  src={project.image}
                  style={computerImage}
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}

            {/* Next & previous buttons */}
            <a
              className='prev'
              style={Object.assign({}, arrows, prev)}
              onClick={() => plusSlides(1)}>
              ❮
            </a>
            <a
              className='next'
              style={Object.assign({}, arrows, next)}
              onClick={() => plusSlides(1)}>
              ❯
            </a>
          </div>

          <div className='dotContainer' style={dotContainer}>
            {projects.map((_, index) => (
              <div
                key={index}
                className={`dot ${index === slideIndex ? "active" : ""}`}
                onClick={() => currentSlide(index + 1)}
                style={{
                  ...dot,
                  ...(index === slideIndex ? activeDot : {}),
                }}></div>
            ))}
          </div>
        </div>



      </div>
    </>
  );
}

export default Projects;
