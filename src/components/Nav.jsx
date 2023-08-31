import * as React from 'react';
import * as Material from '@mui/material';
import avesLogo from '../assets/aves.png';
import { Typography } from '@mui/material';

// ICONs
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";
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
			<Material.Box
				className="navBox"
				sx={{
					display: 'flex',
					paddingTop: '50px',
					cursor: 'pointer',
				}}
			>
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
					alt="AvesLogo"
				/>
			</Material.Box>
			{/* Name and title */}
			<Typography
				sx={{
					fontFamily: 'Roboto',
					textAlign: 'center',
					pt: 4,
					color: 'white',
					fontSize: 22,
					marginBottom: '5px',
				}}
			>
				Avery Caldwell
			</Typography>{' '}
			<Typography
				sx={{
					fontFamily: 'Roboto',
					textAlign: 'center',
					pt: 1,
					color: 'white',
					fontSize: 20,
					marginBottom: '20px',
				}}
			>
				Full Stack Developer
			</Typography>
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
					onClick={() => props.setActivePage('Testimonials')}
				>
					<Material.ListItemIcon>
						{<PermContactCalendar />}
					</Material.ListItemIcon>
					<Material.ListItemText primary={'Testimonials'} />
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
			<Close
				sx={{
					display: 'block',
					height: '50px',
					width: '50px',
					// FIXME: reposition close button
					marginTop: '50px',
					marginLeft: 'auto',
					marginRight: 'auto',
					cursor: 'pointer',
				}}
				onClick={toggleDrawer('left', false)}
			/>
		</Material.Box>
	);

	// Render the top header
	return (
		<div>
			<Material.Toolbar
				sx={{
					color: 'white',
					//p: 2,
					display: 'flex',
					alignContent: 'start',
					alignItems: 'baseline',
					marginLeft: '5px',
					background: ' rgba(255, 255, 255, 0.2)',
					zIndex: '5',
					padding: '5px',
				}}
			>
				{/* Menu icon */}
				<Menu
					sx={{
						height: '50px',
						width: '50px',
						cursor: 'pointer',
					}}
					onClick={toggleDrawer('left', true)}
				/>
				{/* Drawer */}
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
