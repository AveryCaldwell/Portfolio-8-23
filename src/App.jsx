import React from 'react';
// MUI
import theme from './theme';
import { ThemeProvider } from '@emotion/react';
import * as Material from '@mui/material';
//Components
import Nav from './components/Nav';
import Landing from './components/Landing';
import About from './components/About';
import Edu from './components/Edu';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Ref from './components/Ref';
import Contact from './components/Contact';
import LogoSlider from './components/LogoSlider';
import Footer from './components/Footer';
import SvgContainer from './components/SvgContainer';
// Styling
import { appContainer, pagesContainer } from './components/Styles';

// This function renders main content of web app
function App() {
	const [currentPageState, setCurrentPageState] = React.useState('Landing');
	const setActivePage = (newPage) => {
		// The "useState" hook is used to declare a state variable called "currentPageState" which is initially set to "About".
		//array of pages
		console.log('active page fired');
		const pages = [
			'Landing',
			'About',
			'Edu',
			'Projects',
			'Resume',
			'Ref',
			'Contact',
		];
		//setCurrentPage(newPage);
		// state
		let pageIndexObj = {
			Landing: 0,
			About: 1,
			Edu: 2,
			Projects: 3,
			Resume: 4,
			Ref: 5,
			Contact: 6,
		};
		const appContainer = document.getElementsByClassName('appContainer')[0];
		const pageIndex = pages.indexOf(newPage);
		const currentPageIndex = pages.indexOf(currentPageState);
		const calculatedVH = pageIndex * 100;
		if (newPage !== currentPageState) {
			const pageDiff =
				pageIndex < currentPageIndex
					? Math.abs(currentPageIndex - pageIndex)
					: Math.abs(pageIndex - currentPageIndex);
			pages.forEach(
				(element, index) =>
					(pageIndexObj[element] = index - pages.indexOf(newPage))
			);
			setCurrentPageState(newPage);
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

	return (
		<>
			<ThemeProvider theme={theme}>
				<Nav id={'Header'} props={{ setActivePage }} />
				<Material.Box></Material.Box>
				<div className="App appContainer" style={appContainer}>
					<main className="pagesContainer" style={pagesContainer}>
						<LogoSlider props={{ setActivePage }} />
						<Landing props={{ setActivePage }} />
						<About props={{ setActivePage }} />
						<Edu props={{ setActivePage }} />
						<SvgContainer props={{ setActivePage }} />
						<Projects props={{ setActivePage }} />
						<Resume props={{ setActivePage }} />
						<Ref props={{ setActivePage }} />
						<Contact props={{ setActivePage }} />
						<Footer props={{ setActivePage }} />
					</main>
				</div>
			</ThemeProvider>
		</>
	);
}

export default App;
