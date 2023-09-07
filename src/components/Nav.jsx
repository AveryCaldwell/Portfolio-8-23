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
		width: '100vh',
		color: 'black',
		display: 'block',
		textAlign: 'center',
	};
	const defaultNavBox = {
		// placeholder styling
		height: '100%',
		color: 'white',
		width: 250,
	};
	const mobileNavLinks = {
		display: 'inline-block',
		padding: 0,
		color: '#EEE',
		textAlign: 'center',
		width: 50,
	};
	// const navLinks = {
	// 	display: 'inline-block',
	// 	marginRight: '20px',
	// 	lineHeight: 1.5,
	// 	padding: 0,
	// };
	const responsiveNavBox = isMobile ? mobileNavBox : defaultNavBox;
	const responsiveNavLinks = isMobile ? mobileNavLinks : navLinks;
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
			// sx={responsiveNavBox}
			sx={{
				width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
				height: '100%',
				color: 'white',
			}}
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
			<Material.List>
				<Material.ListItemButton
					onClick={() => props.setActivePage('Landing')}
				>
					<Material.ListItemIcon>{<Home />}</Material.ListItemIcon>
					<Material.ListItemText
						primary={'Home'}
						// sx={responsiveNavLinks}
						sx={navLinks}
					/>
				</Material.ListItemButton>
				<Material.ListItemButton
					onClick={() => props.setActivePage('About')}
				>
					<Material.ListItemIcon>{<Info />}</Material.ListItemIcon>
					<Material.ListItemText
						primary={'About'}
						// sx={responsiveNavLinks}
						sx={navLinks}
					/>
				</Material.ListItemButton>
				<Material.ListItemButton
					onClick={() => props.setActivePage('Edu')}
				>
					<Material.ListItemIcon>{<School />}</Material.ListItemIcon>
					<Material.ListItemText
						primary={'Education'}
						// sx={responsiveNavLinks}
						sx={navLinks}
					/>
				</Material.ListItemButton>
				<Material.ListItemButton
					onClick={() => props.setActivePage('Projects')}
				>
					<Material.ListItemIcon>
						{<FolderOpen />}
					</Material.ListItemIcon>
					<Material.ListItemText
						primary={'Projects'}
						// sx={responsiveNavLinks}
						sx={navLinks}
					/>
				</Material.ListItemButton>
				<Material.ListItemButton
					onClick={() => props.setActivePage('Resume')}
				>
					<Material.ListItemIcon>{<Article />}</Material.ListItemIcon>
					<Material.ListItemText
						primary={'Resume'}
						// sx={responsiveNavLinks}
						sx={navLinks}
					/>
				</Material.ListItemButton>
				<Material.ListItemButton
					onClick={() => props.setActivePage('References')}
				>
					<Material.ListItemIcon>
						{<PermContactCalendar />}
					</Material.ListItemIcon>
					<Material.ListItemText
						primary={'References'}
						// sx={responsiveNavLinks}
						sx={navLinks}
					/>
				</Material.ListItemButton>
				<Material.ListItemButton
					onClick={() => props.setActivePage('Contact')}
				>
					<Material.ListItemIcon>
						{<AlternateEmail />}
					</Material.ListItemIcon>
					<Material.ListItemText
						primary={'Contact'}
						// sx={responsiveNavLinks}
						sx={navLinks}
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
