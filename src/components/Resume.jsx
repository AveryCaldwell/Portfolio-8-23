import React, { useState, useEffect, useRef } from "react";
// import * as Material from '@mui/material';
// import anime from 'animejs/lib/anime.es.js';
// import avesLogo from '../assets/aves.png';
import { resumeContainer, pageContainer } from "./Styles";

function Resume() {
  const [showPlainText, setShowPlainText] = useState(false);
  const typedTextRef = useRef(null);
  const cursorRef = useRef(null);

  const togglePlainText = () => {
    setShowPlainText(!showPlainText);
  };

  useEffect(() => {
    if (textArray.length) setTimeout(type, newTextDelay + 250);
    // Add event listener on component mount
    document.addEventListener("DOMContentLoaded", startTypingEffect);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("DOMContentLoaded", startTypingEffect);
    };
  }, []);

  const startTypingEffect = () => {
    if (textArray.length) setTimeout(type, newTextDelay + 250);
  };

  const textArray = ["hard", "fun", "a journey", "LIFE"];
  const typingDelay = 200;
  const erasingDelay = 100;
  const newTextDelay = 2000;
  let textArrayIndex = 0;
  let charIndex = 0;

  function type() {
    const typedTextSpan = typedTextRef.current;
    const cursorSpan = cursorRef.current;

    if (charIndex < textArray[textArrayIndex].length) {
      if (!cursorSpan.classList.contains("typing"))
        cursorSpan.classList.add("typing");
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } else {
      cursorSpan.classList.remove("typing");
      setTimeout(erase, newTextDelay);
    }
  }

  function erase() {
    const typedTextSpan = typedTextRef.current;
    const cursorSpan = cursorRef.current;
    if (charIndex > 0) {
      if (!cursorSpan.classList.contains("typing"))
        cursorSpan.classList.add("typing");
      typedTextSpan.textContent = textArray[textArrayIndex].substring(
        0,
        charIndex - 1
      );
      charIndex--;
      setTimeout(erase, erasingDelay);
    } else {
      cursorSpan.classList.remove("typing");
      textArrayIndex++;
      if (textArrayIndex >= textArray.length) textArrayIndex = 0;
      setTimeout(type, typingDelay + 1100);
    }
  }

  return (
    <div
      className='resumeContainer pageContainer'
      style={Object.assign({}, resumeContainer, pageContainer)}>
      <h1 className='resumeTitle'>Resume</h1>
      <div className='typingContainer'>
        <p>
          Coding is <span className='typed-text' ref={typedTextRef}></span>
          <span className='cursor' ref={cursorRef}>
            &nbsp;
          </span>
        </p>
      </div>
      <div className='resumeBox'>
        <button
          className='resumeBtn'
          onClick={() => {
            setActivePage("Projects");
          }}>
          Back{" "}
        </button>
        <button className='textBtn' id='showPlainTextBtn'>
          Show Plain Text
        </button>

        <button
          className='resumeNextBtn'
          onClick={() => {
            setActivePage("References");
          }}>
          Next
        </button>
        <div className='downloadBtn'>
          <div className='text'>
            <a
              href='/assets/resume.pdf'
              download='resume'
              className='resumeLink'>
              <pre>
                <code> Download </code>
              </pre>
            </a>
          </div>
        </div>
        <div className='progress-bar'>
          <svg
            className='downloadSvg'
            x='0px'
            y='0px'
            viewBox='0 0 25 30'
            style={{ enableBackground: "new 0 0 25 30" }}>
            <path
              className='check st0'
              d='M2,19.2C5.9,23.6,9.4,28,9.4,28L23,2'
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Resume;
