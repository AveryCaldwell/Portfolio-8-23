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

        // // FIXME: needs to references existing position in array to dictate ease
        // //     transition: all 1.5s ease;

        appContainer.style.top = `calc(0% - ${calculatedVH}vh)`;
    }
};
// setActivePage();

// for each page, we need to know the diff between the current page and all other pages {FIRST}
// need to create an object that houses the diff from the 1st page
// need to create a way of knowing which pages are between the current page and target page

let animation = anime({
    targets: '.letter',
    opacity: 1,
    translateY: 50,
    rotate: {
        value: 360,
        duration: 2000,
        easing: 'easeInExpo',
    },
    scale: anime.stagger([0.7, 1], { from: 'center' }),
    delay: anime.stagger(100, { start: 1000 }),
    translateX: [-10, 30],
});
let currentPosition = {
    object1: 0,
    object2: 1 / 3,
    object3: 2 / 3,
};
const rotationTime = 9000;
function experienceRotation(endDeg, target, speedOverride) {
    if (endDeg > 100) {
        endDeg = 100;
    }
    const fullRotation = rotationTime;
    const distTravel = endDeg - currentPosition[target];
    const duration = Math.abs(distTravel * (fullRotation / 100));
    targetDiv = document.getElementById(target);
    targetDiv.animate(
        [
            { offsetDistance: String(currentPosition[target]) + '%' },
            { offsetDistance: String(endDeg) + '%' },
        ],
        {
            //expects "33.33%"
            duration: speedOverride !== undefined ? speedOverride : duration,
            easing: 'linear',
            iterations: 1,
            fill: 'forwards',
        }
    );
    if (endDeg === 100) {
        currentPosition[target] = 0;
    } else {
        currentPosition[target] = endDeg;
    }
}
let currentOrbit = {
    1: 1,
    2: 2,
    3: 3,
};
let nextOrbitDeg = {
    1: (1 / 3) * 100,
    2: (2 / 3) * 100,
    3: 100,
};
function nextOrbit(target) {
    experienceRotation(nextOrbitDeg[currentOrbit[target]], `object${target}`);
    if (currentOrbit[target] === 3) {
        currentOrbit[target] = 1;
    } else {
        currentOrbit[target] += 1;
    }
}
let orbit;

function constantOrbit() {
    orbitting = true;
    // let degreeArr = [33, 66, 100];
    // let timing = {
    // 	33: 1320,
    // 	66: 1320,
    // 	100: 1360,
    // };
    nextOrbit(1);
    nextOrbit(2);
    nextOrbit(3);
    orbit = setInterval(function () {
        nextOrbit(1);
        nextOrbit(2);
        nextOrbit(3);
    }, rotationTime / 3);
}
function initializeRotator() {
    experienceRotation((1 / 3) * 100, 'object2', 1);
    experienceRotation((2 / 3) * 100, 'object3', 1);
    document.getElementsByClassName('orbital-container')[0].style.opacity = 1;
    constantOrbit();
}
let orbitting = false;
function rotatorClick(target) {
    if (!orbitting && currentOrbit[target] !== 1) {
        constantOrbit();
    }
    let stopRotator = setInterval(function () {
        if (currentOrbit[target] === 1) {
            clearInterval(stopRotator);
            clearInterval(orbit);
            orbitting = false;
        }
    }, 1000);
}
initializeRotator();
// setActivePage();

// PROJECT ARROWS
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('mySlides');
    let textSlides = document.getElementsByClassName('projectSlides');
    let dots = document.getElementsByClassName('dot');

    if (n > slides.length) {
        slideIndex = 1; // Reset to the first slide
    }
    if (n < 1) {
        slideIndex = slides.length; // Reset to the last slide
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    // Remove the 'active' class from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';

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
}
// svg path
const startButton = document.getElementById('startButton');
const svgPath = document.getElementById('svgPath');

startButton.addEventListener('click', function () {
    svgPath.style.animation =
        'animate-svg-stroke-1 0.25s cubic-bezier(0.47, 0, 0.745, 0.715) 0.25s both';
});
const tempBtn = document.getElementsByClassName('tempBtn')[0];
tempBtn.addEventListener('click', function () {
    svgPath.style.animation =
        'animate-svg-stroke-reverse 0.5s cubic-bezier(0.47, 0, 0.745, 0.715) 0.5s both';
});

// ====TYPING ANIMATION====
const typedTextSpan = document.querySelector('.typed-text');
const cursorSpan = document.querySelector('.cursor');
const textArray = ['hard', 'fun', 'a journey', 'LIFE']; // Array of text strings to be displayed and typed out
const typingDelay = 200; // Delay time in milliseconds between typing each character
const erasingDelay = 100; // Delay time in milliseconds between erasing each character
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0; // Index to keep track of the current text in the textArray
let charIndex = 0; // Index to keep track of the current character being typed or erased

// Function to perform the typing effect
function type() {
    // Check if there are more characters to type in the current text
    if (charIndex < textArray[textArrayIndex].length) {
        // Add the 'typing' class to the cursor element to make it blink
        if (!cursorSpan.classList.contains('typing'))
            cursorSpan.classList.add('typing');
        // Append the next character to the typedTextSpan
        typedTextSpan.textContent +=
            textArray[textArrayIndex].charAt(charIndex);

        // Move to the next character and call the 'type' function again after 'typingDelay' milliseconds
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        // When typing is completed for the current text, remove the 'typing' class from the cursor
        cursorSpan.classList.remove('typing');
        // Start the erasing effect by calling the 'erase' function after 'newTextDelay' milliseconds
        setTimeout(erase, newTextDelay);
    }
}

// Function to perform the erasing effect
function erase() {
    // Check if there are characters to erase in the current text
    if (charIndex > 0) {
        // Add the 'typing' class to the cursor element to make it blink
        if (!cursorSpan.classList.contains('typing'))
            cursorSpan.classList.add('typing');

        // Erase the last character from the typedTextSpan
        typedTextSpan.textContent = textArray[textArrayIndex].substring(
            0,
            charIndex - 1
        );

        // Move to the previous character and call the 'erase' function again after 'erasingDelay' milliseconds
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        // When erasing is completed, remove the 'typing' class from the cursor
        cursorSpan.classList.remove('typing');
        // Move to the next text in the textArray
        textArrayIndex++;
        // If all texts in the array have been shown, reset the index to show the first text again
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        // Start typing the next text after a delay of 'typingDelay' + 1100 milliseconds
        setTimeout(type, typingDelay + 1100);
    }
}
// Add an event listener to start the typing effect when the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    // On DOM Load initiate the effect
    // If there are texts in the array, start the typing effect after a delay of 'newTextDelay' + 250 milliseconds
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});

// ===BUTTON ANIMATION FOR DOWNLOAD===
function $(selector) {
    return document.querySelectorAll(selector);
}

// Helper function to set stroke-dashoffset for path elements
function setDashOffset(pathEl) {
    let length = pathEl.getTotalLength();
    pathEl.setAttribute('stroke-dasharray', length);
    return length;
}

// Create the animation function
function startAnimation() {
    let pathEls = $('.check');
    let offsets = [];
    for (let i = 0; i < pathEls.length; i++) {
        let pathEl = pathEls[i];
        let offset = setDashOffset(pathEl);
        offsets.push(offset);
        pathEl.setAttribute('stroke-dashoffset', offset);
    }

    // Create the animation timeline
    let basicTimeline = anime.timeline({
        autoplay: false,
    });

    basicTimeline
        .add({
            targets: '.text',
            duration: 1,
            opacity: '0',
        })
        .add({
            targets: '.downloadBtn',
            duration: 1300,
            height: 10,
            width: 300,
            backgroundColor: '#2B2D2F',
            border: '0',
            borderRadius: 100,
        })
        .add({
            targets: '.progress-bar',
            duration: 2000,
            width: 300,
            easing: 'linear',
        })
        .add({
            targets: '.downloadBtn',
            width: 0,
            duration: 1,
        })
        .add({
            targets: '.progress-bar',
            width: 80,
            height: 80,
            delay: 500,
            duration: 750,
            borderRadius: 80,
            backgroundColor: '#71DFBE',
        })
        .add({
            targets: pathEls,
            strokeDashoffset: function (el, i) {
                return [offsets[i], 0];
            },
            duration: 200,
            easing: 'easeInOutSine',
        });

    let downloadBtn = document.querySelector('.downloadBtn');
    downloadBtn.addEventListener('click', function () {
        basicTimeline.play();
    });

    let text = document.querySelector('.text');
    text.addEventListener('click', function () {
        basicTimeline.play();
    });
}

// Call the animation function
startAnimation();
