import * as React from 'react';
import * as Material from '@mui/material';
import avesLogo from '../assets/aves.png';
import avery from '../assets/avery.png';

// MUI COMPONENT
import { Typography, useMediaQuery } from '@mui/material';

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

	const isMobile = useMediaQuery((theme) => theme.breakpoints.down('mobile'));

	// Define styles for the title and image based on screen size
	const titleStyle = {
		opacity: props.currentNavNameState ? '1' : '0',
		...(isMobile && {
			fontSize: '16px', // Adjust as needed for mobile
		}),
		...(!isMobile && {
			fontSize: '24px', // Adjust as needed for desktop
		}),
	};
	const imageStyle = {
		...(isMobile && {
			width: '50px', // Adjust as needed for mobile
		}),
		...(!isMobile && {
			width: '100px', // Adjust as needed for desktop
		}),
	};
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
					style={avesImg}
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
					<Material.ListItemText primary={'Home'} />
				</Material.ListItemButton>
				<Material.ListItemButton
					onClick={() => props.setActivePage('About')}
				>
					<Material.ListItemIcon>{<Info />}</Material.ListItemIcon>
					<Material.ListItemText primary={'About'} />
				</Material.ListItemButton>
				<Material.ListItemButton
					onClick={() => props.setActivePage('Edu')}
				>
					<Material.ListItemIcon>{<School />}</Material.ListItemIcon>
					<Material.ListItemText primary={'Education'} />
				</Material.ListItemButton>
				<Material.ListItemButton
					onClick={() => props.setActivePage('Projects')}
				>
					<Material.ListItemIcon>
						{<FolderOpen />}
					</Material.ListItemIcon>
					<Material.ListItemText primary={'Projects'} />
				</Material.ListItemButton>
				<Material.ListItemButton
					onClick={() => props.setActivePage('Resume')}
				>
					<Material.ListItemIcon>{<Article />}</Material.ListItemIcon>
					<Material.ListItemText primary={'Resume'} />
				</Material.ListItemButton>
				<Material.ListItemButton
					onClick={() => props.setActivePage('References')}
				>
					<Material.ListItemIcon>
						{<PermContactCalendar />}
					</Material.ListItemIcon>
					<Material.ListItemText primary={'References'} />
				</Material.ListItemButton>
				<Material.ListItemButton
					onClick={() => props.setActivePage('Contact')}
				>
					<Material.ListItemIcon>
						{<AlternateEmail />}
					</Material.ListItemIcon>
					<Material.ListItemText primary={'Contact'} />
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
			<Material.Toolbar sx={navToolbar}>
				{/* Menu icon */}
				<Menu sx={menuIcon} onClick={toggleDrawer('left', true)} />
				{/* Drawer */}
				<div
					style={{
						...titleStyle,
						...navTitle,
						...{
							opacity: props.currentNavNameState ? '1' : '0',
						},
					}}
				>
					<span> Avery Caldwell // Developer</span>

					<img
						alt="Avery Headshot"
						src={avery}
						style={{ ...toolbarImage, ...imageStyle }}
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
