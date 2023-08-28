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

// -------------function that renders nav bar
function Nav({ props }) {
	// sets the active page shown

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
			role="drawer"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<Material.Box
				className="navBox"
				sx={{
					display: 'flex',
					paddingTop: '50px',
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
					alt="AvesLogo"
				/>
			</Material.Box>
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
				{/* FIXME: not working */}
			</Material.List>
			<Material.Divider />
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
	// --------------renders top header
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
				{/* TODO: add on click function to menu icon */}
				<Menu
					sx={{
						height: '50px',
						width: '50px',
						cursor: 'pointer',
					}}
					onClick={toggleDrawer('left', true)}
				/>
				{/* <Typography
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
                </Typography> */}
			</Material.Toolbar>
			{['left'].map((anchor) => (
				<React.Fragment key={anchor}>
					{/* <Material.Button onClick={toggleDrawer(anchor, true)}>
                        {anchor}
                    </Material.Button> */}
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
