//array of pages
const pages = ['Landing', 'About', 'Edu'];
// state
let currentPage = 'Landing';
let pageIndexObj = {
    Landing: 0,
    About: 1,
    Edu: 2,
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
