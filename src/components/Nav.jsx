import * as React from 'react';
import * as Material from '@mui/material';
import avesLogo from '../assets/aves.png';
import avery from '../assets/avery.png';

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
	navIcons,
} from './Styles-Theme';
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
			sx={navBox}
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
			<Material.Box component="nav" className="navBox" sx={navBox}>
				<Material.CardMedia
					component="img"
					image={avesLogo}
					sx={avesImg}
					onClick={() => {
						handleClick('Landing');
						setOpen(false);
					}}
					alt="Aves Logo"
				/>
			</Material.Box>
			{/* Name and title */}
			<Material.List>
				<Material.ListItem
					component="div"
					id="nested-list-subheader"
					sx={navTitleText}
				>
					Avery Caldwell
				</Material.ListItem>{' '}
				<Material.ListItem
					component="div"
					id="nested-list-subheader"
					sx={navSubtitleText}
				>
					Full Stack Developer
				</Material.ListItem>
			</Material.List>
			<Material.Divider />
			{/* Navigation links */}
			<Material.Box id="navList">
				<Material.ListItemButton
					onClick={() => props.setActivePage('Landing')}
				>
					<Material.ListItemIcon sx={navIcons}>
						{<Home />}
					</Material.ListItemIcon>
					<Material.ListItemText primary={'Home'} sx={navLinks} />
				</Material.ListItemButton>
				<Material.ListItemButton
					onClick={() => props.setActivePage('About')}
				>
					<Material.ListItemIcon sx={navIcons}>
						{<Info />}
					</Material.ListItemIcon>
					<Material.ListItemText primary={'About'} sx={navLinks} />
				</Material.ListItemButton>
				<Material.ListItemButton
					onClick={() => props.setActivePage('Edu')}
				>
					<Material.ListItemIcon sx={navIcons}>
						{<School />}
					</Material.ListItemIcon>
					<Material.ListItemText
						primary={'Education'}
						sx={navLinks}
					/>
				</Material.ListItemButton>
				<Material.ListItemButton
					onClick={() => props.setActivePage('Projects')}
				>
					<Material.ListItemIcon sx={navIcons}>
						{<FolderOpen />}
					</Material.ListItemIcon>
					<Material.ListItemText primary={'Projects'} sx={navLinks} />
				</Material.ListItemButton>
				<Material.ListItemButton
					onClick={() => props.setActivePage('Resume')}
				>
					<Material.ListItemIcon sx={navIcons}>
						{<Article />}
					</Material.ListItemIcon>
					<Material.ListItemText primary={'Resume'} sx={navLinks} />
				</Material.ListItemButton>
				<Material.ListItemButton
					onClick={() => props.setActivePage('References')}
				>
					<Material.ListItemIcon sx={navIcons}>
						{<PermContactCalendar />}
					</Material.ListItemIcon>
					<Material.ListItemText
						primary={'References'}
						sx={navLinks}
					/>
				</Material.ListItemButton>
				<Material.ListItemButton
					onClick={() => props.setActivePage('Contact')}
				>
					<Material.ListItemIcon sx={navIcons}>
						{<AlternateEmail />}
					</Material.ListItemIcon>
					<Material.ListItemText primary={'Contact'} sx={navLinks} />
				</Material.ListItemButton>
			</Material.Box>
			<Material.Divider />
			{/* Close button */}
			<Close sx={closeIcon} onClick={toggleDrawer('left', false)} />
		</Material.Box>
	);

	// Render the top header
	return (
		<Material.Box>
			<Material.Toolbar sx={navToolbar}>
				{/* Menu icon */}
				<Menu sx={menuIcon} onClick={toggleDrawer('left', true)} />

				{/* Drawer */}
				<Material.Box
					sx={{
						...navTitle,
						...{
							opacity: props.currentNavNameState ? '1' : '0',
						},
					}}
				>
					{/* // display: isMobile ? 'none' : 'block', // Hide on mobile */}
					<Material.Typography sx={navTitle}>
						Avery Caldwell // Developer
						<Material.CardMedia
							component="img"
							alt="Avery Headshot"
							image={avery}
							sx={toolbarImage}
						/>
					</Material.Typography>
				</Material.Box>
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
		</Material.Box>
	);
}

export default Nav;
