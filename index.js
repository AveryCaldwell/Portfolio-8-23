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

let homeImage = document.querySelector('.homeImage');
// homeImage.style.transform = 'translateY(0)';
let animateY = anime({
    targets: '.homeImage',
    translateY: ['180px', '480px'], // Adjust the value as needed
    easing: 'easeInOutQuad',
    autoplay: false,
});
document.querySelector('.play-down').onclick = animateY.restart;

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
            (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to play the animation when the element is in the viewport
function playAnimationOnScroll() {
    let aboutHeader = document.querySelector('.aboutHeader');
    let timeline = anime.timeline({ autoplay: false, loop: false }).add({
        targets: '.aboutHeader ',
        opacity: [0, 1],
        translateY: ['180px', '480px'],
        easing: 'easeInOutQuad',
        duration: 1400,
        delay: (el, i) => 50 * (i + 1),
        endDelay: 500,
    });

    if (isInViewport(aboutHeader)) {
        aboutHeader.innerHTML = aboutHeader.textContent.replace(
            /\S/g,
            "<span style='display: inline-block'>$&</span>"
        );
        timeline.play();
        window.removeEventListener('scroll', playAnimationOnScroll);
    }
}

// Function to play the animation on button click
function playAnimation() {
    let aboutHeader = document.querySelector('.aboutHeader');
    aboutHeader.innerHTML = aboutHeader.textContent.replace(
        /\S/g,
        "<span style='display: inline-block'>$&</span>"
    );

    let timeline = anime.timeline({ autoplay: false, loop: false }).add({
        targets: '.aboutHeader ',
        opacity: [0, 1],
        translateY: ['180px', '480px'],
        easing: 'easeInOutQuad',
        duration: 1400,
        delay: (el, i) => 50 * (i + 1),
        endDelay: 500,
        complete: done,
    });

    timeline.play();
}

// Add click event listener to the button
let playButton = document.querySelector('.play-down');
playButton.addEventListener('click', playAnimation);

// Add the scroll event listener to trigger the animation
window.addEventListener('scroll', playAnimationOnScroll);

// animate circl in about section
anime({
    targets: '#aboutCircle',
    duration: 1600,
    loop: true,
    easing: 'linear',
    direction: 'alternate',
});
