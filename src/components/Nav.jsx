import * as React from 'react';
import * as Material from '@mui/material';
import avesLogo from '../assets/aves.png';
import avery from '../assets/avery.png';

// MUI COMPONENT
import { Typography } from '@mui/material';
// React Responsive
import { useMediaQuery } from 'react-responsive';
// STYLING
import {
	navBox,
	avesImg,
	navTitleText,
	navSubtitleText,
	closeIcon,
	navTitle,
	navToolbar,
	menuIcon,
	toolbarImage,
	navLinks,
} from './Styles';
// ICONS
import {
	Article,
	School,
	PermContactCalendar,
	Menu,
	Close,
	FolderOpen,
	AlternateEmail,
	Home,
	Info,
} from '@mui/icons-material';

// Function that renders the navigation bar
function Nav({ props }) {
	// State for the drawer's open/close status
	const [state, setState] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});
	const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
	const mobileNavBox = {
		width: '100vw',
		textAlign: 'center',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		cursor: 'pointer',
		maxWidth: '768px',
		color: 'white',
		justifyContent: 'space-evenly',
		// position: 'absolute',
		// width: '100%',
		// height: '100vh',
	};
	const defaultNavBox = {
		// placeholder styling
		height: '100%',
		color: 'white',
		width: 250,
	};
	// const mobileNavLinks = {
	// 	display: 'flex',
	// 	color: '#EEE',
	// 	position: 'absolute',
	// 	alignItems: 'center',
	// 	width: '100%',
	// };
	const mobileNavIcons = {
		display: 'none',
	};
	const navIcons = {
		display: 'block',
	};
	const navList = { display: 'block' };
	const mobileNavList = {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
		padding: 0,
		marign: 0,
	};
	const responsiveNavList = isMobile ? mobileNavList : navList;
	const responsiveNavBox = isMobile ? mobileNavBox : defaultNavBox;
	// const responsiveNavLinks = isMobile ? mobileNavLinks : navLinks;
	const responsiveNavIcons = isMobile ? mobileNavIcons : navIcons;
	// Toggle the drawer's open/close status
	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}
		setState({ ...state, [anchor]: open });
	};

	// Render the drawer's content
	const iemsList = (anchor) => (
		<Material.Box
			id="navbarBox"
			sx={responsiveNavBox}
			// sx={{
			// 	width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
			// 	height: '100%',
			// 	color: 'white',
			// }}
			role="drawer"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			{/* Logo */}
			<Material.Box className="navBox" sx={navBox}>
				<img
					src={avesLogo}
					style={isMobile ? { display: 'none' } : avesImg}
					onClick={() => {
						handleClick('Landing');
						setOpen(false);
					}}
					alt="Aves Logo"
				/>
			</Material.Box>
			{/* Name and title */}
			<Typography sx={navTitleText}>Avery Caldwell</Typography>{' '}
			<Typography sx={navSubtitleText}>Full Stack Developer</Typography>
			<Material.Divider />
			{/* Navigation links */}
			<Material.List id="navList">
				<Material.ListItemButton
					onClick={() => props.setActivePage('Landing')}
				>
					<Material.ListItemIcon sx={responsiveNavIcons}>
						{<Home />}
					</Material.ListItemIcon>
					<Material.ListItemText
						primary={'Home'}
						sx={responsiveNavList}
						// sx={navLinks}
					/>
				</Material.ListItemButton>
				<Material.ListItemButton
					onClick={() => props.setActivePage('About')}
				>
					<Material.ListItemIcon sx={responsiveNavIcons}>
						{<Info />}
					</Material.ListItemIcon>
					<Material.ListItemText
						primary={'About'}
						sx={responsiveNavList}
						// sx={navLinks}
					/>
				</Material.ListItemButton>
				<Material.ListItemButton
					onClick={() => props.setActivePage('Edu')}
				>
					<Material.ListItemIcon sx={responsiveNavIcons}>
						{<School />}
					</Material.ListItemIcon>
					<Material.ListItemText
						primary={'Education'}
						sx={responsiveNavList}
						// sx={navLinks}
					/>
				</Material.ListItemButton>
				<Material.ListItemButton
					onClick={() => props.setActivePage('Projects')}
				>
					<Material.ListItemIcon sx={responsiveNavIcons}>
						{<FolderOpen />}
					</Material.ListItemIcon>
					<Material.ListItemText
						primary={'Projects'}
						sx={responsiveNavList}
						// sx={navLinks}
					/>
				</Material.ListItemButton>
				<Material.ListItemButton
					onClick={() => props.setActivePage('Resume')}
				>
					<Material.ListItemIcon sx={responsiveNavIcons}>
						{<Article />}
					</Material.ListItemIcon>
					<Material.ListItemText
						primary={'Resume'}
						sx={responsiveNavList}
						// sx={navLinks}
					/>
				</Material.ListItemButton>
				<Material.ListItemButton
					onClick={() => props.setActivePage('References')}
				>
					<Material.ListItemIcon sx={responsiveNavIcons}>
						{<PermContactCalendar />}
					</Material.ListItemIcon>
					<Material.ListItemText
						primary={'References'}
						sx={responsiveNavList}
						// sx={navLinks}
					/>
				</Material.ListItemButton>
				<Material.ListItemButton
					onClick={() => props.setActivePage('Contact')}
				>
					<Material.ListItemIcon sx={responsiveNavIcons}>
						{<AlternateEmail />}
					</Material.ListItemIcon>
					<Material.ListItemText
						primary={'Contact'}
						sx={responsiveNavList}
						// sx={navLinks}
					/>
				</Material.ListItemButton>
			</Material.List>
			<Material.Divider />
			{/* Close button */}
			<Close sx={closeIcon} onClick={toggleDrawer('left', false)} />
		</Material.Box>
	);

	// Render the top header
	return (
		<div>
			<Material.Toolbar
				sx={{
					...navToolbar,
					background: isMobile
						? 'transparent'
						: 'rgba(255, 255, 255, 0.3)',
				}}
			>
				{/* Menu icon */}
				<Menu
					sx={{
						...menuIcon,
						background: isMobile
							? 'rgba(0,0,0,0.3)'
							: 'transparent',
					}}
					onClick={toggleDrawer('left', true)}
				/>
				{/* Drawer */}
				<div
					style={{
						...navTitle,
						...{
							opacity: props.currentNavNameState ? '1' : '0',
							display: isMobile ? 'none' : 'block', // Hide on mobile
						},
					}}
				>
					<span> Avery Caldwell // Developer</span>

					<img
						alt="Avery Headshot"
						src={avery}
						style={toolbarImage}
					/>
				</div>
			</Material.Toolbar>
			{['left'].map((anchor) => (
				<React.Fragment key={anchor}>
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
