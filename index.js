//============================= SQUARE =============================
// let animation = anime({
//     targets: 'div',
//     // Properties
//     translateX: 100,
//     borderRadius: 50,
//     // Property Parameters
//     duration: 2000,
//     easing: 'linear',
//     // Animation Parameters
//     direction: 'alternate',
// });

// =============================PENDULUM=============================
// let animation = anime({
//     targets: '#rod',
//     rotate: [60, -60], // from 60 to -60 degrees
//     duration: 3000,
//     easing: 'easeInOutSine',
//     direction: 'alternate',
//     loop: true,
// });

// =============================BATTERY=============================
// let animation = anime({
//     targets: '.segment',
//     width: 20,
//     duration: 300,
//     delay: function (el, i, l) {
//         return i * 500;
//     },
//     endDelay: 500,
//     easing: 'linear',
//     loop: true,
// });
// =============================BATTERY BUT BETTER=============================
// let progress = document.querySelector('#progress');

// let battery = {
//     progress: '0%',
// };

// let icon = anime({
//     targets: '.segment',
//     width: 20,
//     duration: 300,
//     delay: anime.stagger(500),
//     endDelay: 500,
//     easing: 'linear',
//     loop: true,
// });

// let label = anime({
//     targets: battery,
//     progress: '100%',
//     duration: 30000,
//     easing: 'linear',
//     round: 1,
//     update: function () {
//         progress.innerHTML = battery.progress;
//     },
//     complete: function () {
//         icon.pause();
//         icon.seek(icon.duration);
//     },
// });

// =============================BOX=============================
// let box = document.querySelector('#box');

// let animation = anime({
//     targets: '#content',
//     translateY: [
//         { value: 50, duration: 500 },
//         { value: 0, duration: 500, delay: 1500 },
//         { value: -53, duration: 500, delay: 500 },
//         { value: 0, duration: 500, delay: 2500 },
//         { value: 50, duration: 500, delay: 500 },
//         { value: 0, duration: 500, delay: 1500 },
//     ],
//     translateX: [
//         { value: 53, duration: 500, delay: 1000 },
//         { value: 0, duration: 500, delay: 2500 },
//         { value: -53, duration: 500, delay: 500 },
//         { value: 0, duration: 500, delay: 2500 },
//     ],
//     easing: 'linear',
//     begin: function () {
//         box.style.borderBottom = 'none';
//     },
//     complete: function () {
//         box.style.borderBottom = 'solid darkorange 3px';
//     },
// });
// =============================TEXT=============================
// let animation = anime({
//     targets: '.letter',
//     opacity: 1,
//     translateY: 50,
//     rotate: {
//         value: 360,
//         duration: 2000,
//         easing: 'easeInExpo',
//     },
//     scale: anime.stagger([0.7, 1], { from: 'center' }),
//     delay: anime.stagger(100, { start: 1000 }),
//     translateX: [-10, 30],
// });

//  =============================TIMELINE ============================= -->
// let animation = anime.timeline({
//     duration: 1000,
//     easing: 'easeInOutSine',
//     loop: true,
// });

// animation
//     .add({
//         targets: '.one',
//         keyframes: [
//             { translateY: -50, backgroundColor: 'rgb(255, 0, 0)' },
//             { translateY: 0, backgroundColor: 'rgb(128, 128, 128)' },
//         ],
//     })
//     .add(
//         {
//             targets: '.two',
//             keyframes: [
//                 { translateY: -50, backgroundColor: 'rgb(0, 255, 0)' },
//                 { translateY: 0, backgroundColor: 'rgb(128, 128, 128)' },
//             ],
//         },
//         '-=900'
//     )
//     .add(
//         {
//             targets: '.three',
//             keyframes: [
//                 { translateY: -50, backgroundColor: 'rgb(0, 0, 255)' },
//                 { translateY: 0, backgroundColor: 'rgb(128, 128, 128)' },
//             ],
//         },
//         '-=800'
//     );
//  =============================PORTFOLIO ============================= -->

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

var homeImage = document.querySelector('.homeImage');
// homeImage.style.transform = 'translateY(0)';
var animateY = anime({
    targets: '.homeImage',
    translateY: ['0', '180px'], // Adjust the value as needed
    easing: 'easeInOutQuad',
    autoplay: false,
});
document.querySelector('.play-up').onclick = animateY.restart;
