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
    Work,
} from '@mui/icons-material';

// -------------function that renders nav bar
function Nav() {
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
                <Material.ListItemButton>
                    <Material.ListItemIcon>{<Help />}</Material.ListItemIcon>
                    <Material.ListItemText primary={'About'} />
                </Material.ListItemButton>
                <Material.ListItemButton>
                    <Material.ListItemIcon>
                        {<CollectionsBookmark />}
                    </Material.ListItemIcon>
                    <Material.ListItemText primary={'Education'} />
                </Material.ListItemButton>
                <Material.ListItemButton>
                    <Material.ListItemIcon>
                        {<UploadFile />}
                    </Material.ListItemIcon>
                    <Material.ListItemText primary={'Projects'} />
                </Material.ListItemButton>
                <Material.ListItemButton>
                    <Material.ListItemIcon>{<Edit />}</Material.ListItemIcon>
                    <Material.ListItemText primary={'Resume'} />
                </Material.ListItemButton>
            </Material.List>
            <Material.List>
                <Material.ListItemButton>
                    <Material.ListItemIcon>{<Edit />}</Material.ListItemIcon>
                    <Material.ListItemText primary={'References'} />
                </Material.ListItemButton>
                <Material.ListItemButton>
                    <Material.ListItemIcon>
                        {<Feedback />}
                    </Material.ListItemIcon>
                    <Material.ListItemText primary={'Contact'} />
                </Material.ListItemButton>
                <Material.ListItemButton>
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
                        marginLeft: '15px',
                        fontWeight: 'bold',
                    }}
                >
                    Avery Caldwell
                </Typography>
                <Typography
                    variant='h4'
                    sx={{
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
