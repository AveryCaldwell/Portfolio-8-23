import * as React from 'react';
import * as Material from '@mui/material';
import avesLogo from '../assets/aves.png';
import { Typography } from '@mui/material';

// ICONs
import MenuIcon from '@mui/icons-material/Menu';
import {
    CollectionsBookmark,
    Edit,
    Feedback,
    Help,
    PermMedia,
    UploadFile,
} from '@mui/icons-material';

// -------------function that renders nav bar
function Nav() {
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

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    // -------------rendersdrawer component
    const iemsList = (anchor) => (
        <Material.Box
            sx={{
                width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
                height: '100%',
                color: 'white',
            }}
            role='drawer'
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <Material.Box
                className='navBox'
                sx={{
                    display: 'flex',
                    cursor: 'pointer',
                }}
            >
                {/* // -------------LOGO */}
                <img
                    src={avesLogo}
                    style={{
                        height: '150px',
                        width: '150px',
                        borderRadius: 300,
                        border: '2px solid #e9f4e9',
                        boxShadow: 2,
                        cursor: 'pointer',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                    }}
                    onClick={() => {
                        handleClick('Landing');
                        setOpen(false);
                    }}
                    alt='AvesLogo'
                />
            </Material.Box>
            <Typography
                sx={{
                    fontFamily: 'Roboto',
                    textAlign: 'center',
                    pt: 4,
                    color: 'white',
                    fontSize: 20,
                    marginBottom: '20px',
                }}
            >
                Avery Caldwell
            </Typography>
            <Material.Divider />
            <Material.List>
                <Material.ListItemButton onClick={() => setActivePage('About')}>
                    <Material.ListItemIcon>{<Help />}</Material.ListItemIcon>
                    <Material.ListItemText primary={'About'} />
                </Material.ListItemButton>
                <Material.ListItemButton onClick={() => setActivePage('Edu')}>
                    <Material.ListItemIcon>
                        {<CollectionsBookmark />}
                    </Material.ListItemIcon>
                    <Material.ListItemText primary={'Education'} />
                </Material.ListItemButton>
                <Material.ListItemButton
                    onClick={() => setActivePage('Projects')}
                >
                    <Material.ListItemIcon>
                        {<UploadFile />}
                    </Material.ListItemIcon>
                    <Material.ListItemText primary={'Projects'} />
                </Material.ListItemButton>
                <Material.ListItemButton
                    onClick={() => setActivePage('Resume')}
                >
                    <Material.ListItemIcon>{<Edit />}</Material.ListItemIcon>
                    <Material.ListItemText primary={'Resume'} />
                </Material.ListItemButton>
            </Material.List>
            <Material.List>
                <Material.ListItemButton onClick={() => setActivePage('Ref')}>
                    <Material.ListItemIcon>{<Edit />}</Material.ListItemIcon>
                    <Material.ListItemText primary={'References'} />
                </Material.ListItemButton>
                <Material.ListItemButton
                    onClick={() => setActivePage('Contact')}
                >
                    <Material.ListItemIcon>
                        {<Feedback />}
                    </Material.ListItemIcon>
                    <Material.ListItemText primary={'Contact'} />
                </Material.ListItemButton>
                {/* FIXME: not working */}
                <Material.ListItemButton
                    onClick={() => setActivePage('Landing')}
                >
                    <Material.ListItemIcon>
                        {<PermMedia />}
                    </Material.ListItemIcon>
                    <Material.ListItemText primary={'Home'} />
                </Material.ListItemButton>
            </Material.List>
            <Material.Divider />
        </Material.Box>
    );
    // --------------renders top header
    return (
        <div>
            <Material.Toolbar
                sx={{
                    color: 'white',
                    p: 2,
                    display: 'flex',
                    alignContent: 'start',
                    alignItems: 'baseline',
                    marginLeft: '5px',
                }}
            >
                {/* TODO: add on click function to menu icon */}
                <MenuIcon
                    sx={{
                        height: '50px',
                        width: '50px',
                    }}
                />
                <Typography
                    variant='h3'
                    sx={{
                        fontFamily: 'Roboto',
                        marginLeft: '15px',
                        fontWeight: 'bold',
                    }}
                >
                    Avery Caldwell
                </Typography>
                <Typography
                    variant='h4'
                    sx={{
                        fontFamily: 'Roboto',
                        marginLeft: '15px',
                        fontWeight: 'light',
                    }}
                >
                    Full Stack Developer
                </Typography>
            </Material.Toolbar>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Material.Button onClick={toggleDrawer(anchor, true)}>
                        {anchor}
                    </Material.Button>
                    <Material.Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {iemsList(anchor)}
                    </Material.Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}

export default Nav;
