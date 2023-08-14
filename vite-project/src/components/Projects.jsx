import * as React from "react";
import {pageContainer} from "./Styles";

// This function renders main content of web app
function Projects() {
  return (
    <React.Fragment>
      <div className="projectContainer pageContainer">
        <h1 className="projectHeader">Projects</h1>
        <div className="projectContent">
          <div className="textSlideshow">
            <div className="projectSlides fade">
              <div id="slideTitle" className="numbertext">
                TasteBuds
              </div>
              <div className="projectDetails">
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
              <div className="iconContainer">
                <a href="https://github.com/AveryCaldwell/TasteBuds">
                  <i className="fa fa-github-square github" id="github"></i>
                </a>
              </div>
            </div>
            <div className="projectSlides fade">
              <div id="slideTitle" className="numbertext">
                CheersCheck
              </div>
              <div className="projectDetails">
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
              <div className="iconContainer">
                <a href="https://github.com/AveryCaldwell/CheersCheck">
                  <i className="fa fa-github-square github" id="github"></i>
                </a>
              </div>
            </div>

            <div className="projectSlides fade">
              <div id="slideTitle" className="numbertext">
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
              <div className="iconContainer">
                <a href="https://github.com/AveryCaldwell/WearYouWander">
                  <i className="fa fa-github-square github" id="github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="computerContainer">
          <img src="./assets/comp.png" alt="comp" className="computer" />
          <div className="slideshow-container">
            <div className="mySlides fade">
              <img
                src="/assets/buds.png"
                style={{ width: "100%" }}
                alt="Slide 1"
              />
            </div>

            <div className="mySlides fade">
              <img
                src="/assets/CC.png"
                style={{ width: "100%" }}
                alt="Slide 2"
              />
            </div>

            <div className="mySlides fade">
              <img
                src="/assets/WYW.png"
                style={{ width: "100%" }}
                alt="Slide 3"
              />
            </div>

            <a className="prev" onClick={() => plusSlides(-1)}>
              ❮
            </a>
            <a className="next" onClick={() => plusSlides(1)}>
              ❯
            </a>
          </div>
          <br />

          <div className="dotContainer">
            <div className="dot" onClick={() => currentSlide(1)}></div>
            <div className="dot" onClick={() => currentSlide(2)}></div>
            <div className="dot" onClick={() => currentSlide(3)}></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Projects;
