import React from 'react';
import Prism from 'prismjs'; // Import Prism.js
// import 'prismjs/themes/your-theme.css'; // Import your chosen theme
// MUI
import theme from './theme';
import { ThemeProvider } from '@emotion/react';
import * as Material from '@mui/material';
import anime from 'animejs'; // Import anime.js library
//Components
import Nav from './components/Nav';
import Landing from './components/Landing';
import About from './components/About';
import Edu from './components/Edu';
import Projects from './components/Projects';
import Resume from './components/Resume';
import References from './components/References';
import Contact from './components/Contact';
import LogoSlider from './components/LogoSlider';
import Footer from './components/Footer';
// import SvgContainer from './components/SvgContainer';
// Styling
import { appContainer, pagesContainer } from './components/Styles';

// Function to set the active page and perform page transition animations
function App() {
	Prism.highlightAll();
	const [currentCordState, setCurrentCordState] = React.useState(false);
	const [currentNavNameState, setCurrentNavNameState] = React.useState(false);

	// The "useState" hook is used to declare a state variable called "currentPageState" which is initially set to "Landing".
	const [currentPageState, setCurrentPageState] = React.useState('Landing');
	const setActivePage = (newPage) => {
		// Array of page names
		const pages = [
			'Landing',
			'About',
			'Edu',
			'Projects',
			'Resume',
			'References',
			'Contact',
		];
		// Object mapping page names to their index
		let pageIndexObj = {
			Landing: 0,
			About: 1,
			Edu: 2,
			Projects: 3,
			Resume: 4,
			References: 5,
			Contact: 6,
		};

		// Get the container element for the app
		const appContainer = document.getElementsByClassName('appContainer')[0];
		// Calculate the index of the new and current page
		const pageIndex = pages.indexOf(newPage);
		const currentPageIndex = pages.indexOf(currentPageState); // Assumes currentPageState is defined elsewhere
		const calculatedVH = pageIndex * 100; //Calculate the vertical height for the transition
		// Check if the new page is different from the current page
		if (newPage !== currentPageState) {
			// Calculate the difference in pages for animation duration
			const pageDiff =
				pageIndex < currentPageIndex
					? Math.abs(currentPageIndex - pageIndex)
					: Math.abs(pageIndex - currentPageIndex);
			// Update the page index object to reflect the new active page
			pages.forEach(
				(element, index) =>
					(pageIndexObj[element] = index - pages.indexOf(newPage))
			);
			// Set the new current page state
			setCurrentPageState(newPage);

			appContainer.style.transition = `all ${pageDiff * 1.5}s ease`; // Apply transition to the app container with calculated animation durations
			// Get elements for logo animation
			const logoSliderImage =
				document.getElementsByClassName('logoSliderImage')[0];
			const logoSliderCircle =
				document.getElementsByClassName('logoSliderCircle')[0];
			// Check the direction of the page transition
			if (currentPageIndex - pageIndex > 0) {
				// Animate the logo slider image for upward transition
				if (pageIndex === 0) {
					setTimeout(function () {
						logoSliderImage.style.top = `15px`;
						logoSliderImage.style.border = `0px`;
					}, 1200);
					logoSliderCircle.style.opacity = '0';
				}
				// Moving downwards
			} else {
				// Animate the logo slider image for downward transition
				if (pageIndex >= 1) {
					logoSliderImage.style.top = `calc(100% - 320px)`;
					logoSliderImage.style.border =
						'5px solid rgba(255, 255, 255, 1)';
					setTimeout(function () {
						logoSliderCircle.style.opacity = '1';
					}, 1200);
				}
			}

			if (pageIndex >= 4) {
				setCurrentCordState(true);
			} else {
				setCurrentCordState(false);
			}
			if (pageIndex > 0) {
				setCurrentNavNameState(true);
			} else {
				setCurrentNavNameState(false);
			}
			// Apply the vertical transition to the app container
			appContainer.style.top = `calc(0% - ${calculatedVH}vh)`;
		}
	};

	return (
		<>
			<ThemeProvider theme={theme}>
				<Nav
					id={'Header'}
					props={{ setActivePage, currentNavNameState }}
				/>
				<Material.Box></Material.Box>
				<div className="App appContainer" style={appContainer}>
					<main className="pagesContainer" style={pagesContainer}>
						<LogoSlider props={{ setActivePage }} />
						<Landing
							props={{ setActivePage, currentNavNameState }}
						/>
						<About props={{ setActivePage }} />
						<Edu props={{ setActivePage }} />
						{/* <SvgContainer props={{ setActivePage }} /> */}
						<Projects props={{ setActivePage, currentCordState }} />
						<Resume props={{ setActivePage }} />
						<References props={{ setActivePage }} />
						<Contact props={{ setActivePage }} />
						<Footer props={{ setActivePage }} />
					</main>
				</div>
			</ThemeProvider>
		</>
	);
}

export default App;
