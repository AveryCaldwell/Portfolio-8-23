import { useEffect, useRef } from 'react';
// import * as Material from '@mui/material';
import anime from 'animejs/lib/anime.es.js';
import {
    landingHeader,
    landingTitle,
    landingText,
    landingSubtitle,
    landingButton,
    letter,
} from './Styles';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

// This function renders main content of web app
function Landing() {
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

    // Name/letter animation
    useEffect(() => {
        const animation = anime({
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
        return () => {
            // Clean up the animation when the component unmounts
            animation.pause();
        };
    }, []);
    // function to scroll to next page
    const containerRef = useRef(null);

    const handleClickScroll = () => {
        const lastChildElement = containerRef.current?.lastElementChild;
        lastChildElement?.scrollIntoView({ behavior: 'smooth' });
        console.log('Landing scroll successful');
    };

    // render landing page
    return (
        <>
            <div className='landingContainer pageContainer' ref={containerRef}>
                <div className='landingHeader' style={landingHeader}>
                    <span className='letter' style={letter}>
                        A
                    </span>
                    <span className='letter' style={letter}>
                        v
                    </span>
                    <span className='letter' style={letter}>
                        e
                    </span>
                    <span className='letter' style={letter}>
                        r
                    </span>
                    <span className='letter' style={letter}>
                        y
                    </span>
                    <div></div>
                    <span className='letter' style={letter}>
                        C
                    </span>
                    <span className='letter' style={letter}>
                        a
                    </span>
                    <span className='letter' style={letter}>
                        l
                    </span>
                    <span className='letter' style={letter}>
                        d
                    </span>
                    <span className='letter' style={letter}>
                        w
                    </span>
                    <span className='letter' style={letter}>
                        e
                    </span>
                    <span className='letter' style={letter}>
                        l
                    </span>
                    <span className='letter' style={letter}>
                        l
                    </span>
                </div>
                <div className='landingText' style={landingText}>
                    <div className='landingTitle' style={landingTitle}>
                        Portfolio 2022-2023
                    </div>
                    <div className='landingSubtitle' style={landingSubtitle}>
                        Full Stack Developer
                        <span>
                            <button
                                className='landingButton'
                                onClick={() => setActivePage('About')}
                                style={landingButton}
                            >
                                <ArrowCircleRightOutlinedIcon
                                    style={landingButton}
                                />
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Landing;
