//array of pages
const pages = ["Landing", "About", "Edu"];
// state
let currentPage = "Landing";
let pageIndexObj = {
	Landing: 0,
	About: 1,
	Edu: 2,
};

// sets the active page shown
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

		// // FIXME: needs to references existing position in array to dictate ease
		// //     transition: all 1.5s ease;

		appContainer.style.top = `calc(0% - ${calculatedVH}vh)`;
	}
};
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
			{ offsetDistance: String(currentPosition[target]) + "%" },
			{ offsetDistance: String(endDeg) + "%" },
		],
		{
			//expects "33.33%"
			duration: speedOverride !== undefined ? speedOverride : duration,
			easing: "linear",
			iterations: 1,
			fill: "forwards",
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
	console.log(nextOrbitDeg[currentOrbit[target]]);
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
		console.log(currentOrbit);
	}, rotationTime / 3);
}
function initializeRotator() {
	experienceRotation((1 / 3) * 100, "object2", 1);
	experienceRotation((2 / 3) * 100, "object3", 1);
	document.getElementsByClassName("orbital-container")[0].style.opacity = 1;
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

// for each page, we need to know the diff between the current page and all other pages {FIRST}
// need to create an object that houses the diff from the 1st page
// need to create a way of knowing which pages are between the current page and target page
