import React, { useState } from 'react';

import {projectContainer, pageContainer,projectHeader, projectContent, textSlideshow, projectSlides, github, iconContainer, slideTitle, arrows, fade, dot, dotContainer, next,slideshowContainer, computerContainer, computer, mySlides } from "./Styles";

import Tech from "../assets/Tech.png"
import Weather from "../assets/Weather.png"
import Team from "../assets/Weather.png"
import WYW from "../assets/WYW.png"
import buds from "../assets/buds.png"
import CC from "../assets/CC.png"
import Employee from "../assets/Employee.png"
import comp from "../assets/comp.png"

// This function renders main content of web app
function Projects() {
    const [slideIndex, setSlideIndex] = useState(1);

// Next/previous controls
function plusSlides(n) {
    showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
    setSlideIndex(n);
}

function showSlides(n) {

    let i;
    let slides = document.getElementsByClassName('mySlides');
    let textSlides = document.getElementsByClassName('projectSlides');
    let dots = document.getElementsByClassName('dot');
  // debugging
      console.log("Value of n:", n);
    console.log("Number of textSlides:", textSlides.length);
    console.log("Number of slides:", slides.length);
    
    // Ensure slideIndex stays within valid range
    if (n > slides.length) {
        slideIndex = 1; // Reset to the first slide
    }
    if (n < 1) {
        slideIndex = slides.length; // Reset to the last slide
    } else {
        slideIndex = n;
    }
      // Hide all slides and remove 'active' class from dots
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    // Remove the 'active' class from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }
      // Display the current slide and update active dot
   slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
    textSlides[slideIndex - 1].style.display = 'block';
    // project side
    // Add the same reset logic for the textSlides
    if (n > textSlides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = textSlides.length;
    }
    for (i = 0; i < textSlides.length; i++) {
        textSlides[i].style.display = 'none';
    }
    textSlides[slideIndex - 1].style.display = 'block';
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
}
  //  style={Object.assign({},aboutContainer,pageContainer)}
  return (
    <React.Fragment>
      <div className="projectContainer pageContainer" style={Object.assign({},projectContainer,pageContainer)}>
        <h1 className="projectHeader" style={projectHeader}>Projects</h1>
        <div className="projectContent" style={projectContent}>
          <div className="textSlideshow" style={textSlideshow}>
            <div className="projectSlides fade" style={Object.assign({},fade,projectSlides)}>
              <div id="slideTitle" className="numbertext" style={slideTitle}>
                TasteBuds
              </div>
              <div className="projectDetails" >
                <p>
                  A social media app that allows users to never dine alone
                  again! This app allows the user to create a profile, see other
                  users posts, create posts, and join other events!
                </p>
                <p>
                  Technologies: Tailwind, React, MERN stack, Node.js/Express.js,
                  Apollo, GraphQL, MongoDb, Mongoose, GitHub, Heroku
                </p>
              </div>
              <div className="iconContainer" style={iconContainer}>
                <a href="https://github.com/AveryCaldwell/TasteBuds">
                  <i className="fa fa-github-square github" id="github"></i>
                </a>
              </div>
            </div>
            <div className="projectSlides fade" style={Object.assign({},fade,projectSlides)}>
              <div id="slideTitle" className="numbertext"  style={slideTitle}>
                CheersCheck
              </div>
              <div className="projectDetails" >
                <p>
                  An application that allows the user to easily organize their
                  liquor collection, keep track of what inventory have on hand,
                  and share it with friends.
                </p>
                <p>
                  Technologies: HTML, CSS, Bootstrap, JavaScript, MySQL,
                  Sequelize, Handlebars.js, Node.js, Express, Dotenv, Bycrypt,
                  Heroku, GitHub, JSHint, Masonry, Anime.js
                </p>
              </div>
              <div className="iconContainer" style={iconContainer}>
                <a href="https://github.com/AveryCaldwell/CheersCheck">
                  <i className="fa fa-github-square github" id="github" style={github}></i>
                </a>
              </div>
            </div>

            <div className="projectSlides fade" style={Object.assign({},fade,projectSlides)}>
              <div id="slideTitle" className="numbertext" style={slideTitle}>
                Wear You Wander
              </div>
              <div className="projectDetails">
                <p>
                  An application that analyzes the weather and suggests which
                  type of outerwear would be most suitable.
                </p>
                <p>
                  Technologies: HTML, CSS, Foundation Framework, JavaScript,
                  jQuery, Server Side APIs, Git Pages, GitHub
                </p>
              </div>
              <div className="iconContainer" style={iconContainer}>
                <a href="https://github.com/AveryCaldwell/WearYouWander">
                  <i className="fa fa-github-square github" id="github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="computerContainer" style={computerContainer}>
          <img src={comp} alt="comp" className="computer" style={computer}/>
          <div className="slideshowContainer" style={slideshowContainer}>
            <div className="mySlides fade" style={Object.assign({}, fade, mySlides)}>
              <img
                src={buds}
                style={{ width: "100%" }}
                alt="Slide 1"
              />
            </div>
            <div className="mySlides fade" style={Object.assign({}, fade, mySlides)}>
              <img
                src={CC}
                style={{ width: "100%" }}
                alt="Slide 2"
              />
            </div>
            <div className="mySlides fade" style={Object.assign({}, fade, mySlides)}>
              <img
                src={WYW}
                style={{ width: "100%" }}
                alt="Slide 3"
              />
            </div>
            <div className="mySlides fade" style={Object.assign({}, fade, mySlides)}>
              <img
                src={Employee}
                style={{ width: "100%" }}
                alt="Slide 4"
              />
            </div>
            <div className="mySlides fade" style={Object.assign({}, fade, mySlides)}>
              <img
                src={Team}
                style={{ width: "100%" }}
                alt="Slide 5"
              />
            </div>
            <div className="mySlides fade" style={Object.assign({}, fade, mySlides)}>
              <img
                src={Tech}
                style={{ width: "100%" }}
                alt="Slide 6"
              />
            </div>
            <div className="mySlides fade" style={Object.assign({}, fade, mySlides)}>
              <img
                src={Weather}
                style={{ width: "100%" }}
                alt="Slide 7"
              />
            </div>

            <a className="prev" style={arrows} onClick={() => plusSlides(-1)}>
              ❮
            </a>
            <a className="next" style={Object.assign({},arrows,next)} onClick={() => plusSlides(1)}>
              ❯
            </a>
          </div>
          <br />

          <div className="dotContainer" style={dotContainer}>
            <div className="dot" onClick={() => currentSlide(1)} style={dot}></div>
            <div className="dot" onClick={() => currentSlide(2)} style={dot}></div>
            <div className="dot" onClick={() => currentSlide(3)} style={dot}></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Projects;
