// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';

// export default function TemporaryDrawer() {
//     const [state, setState] = React.useState({
//         top: false,
//         bottom: false,
//     });

//     const toggleDrawer = (anchor, open) => (event) => {
//         if (
//             event.type === 'keydown' &&
//             (event.key === 'Tab' || event.key === 'Shift')
//         ) {
//             return;
//         }

//         setState({ ...state, [anchor]: open });
//     };

//     const list = (anchor) => (
//         <Box
//             sx={{
//                 width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
//             }}
//             role='presentation'
//             onClick={toggleDrawer(anchor, false)}
//             onKeyDown={toggleDrawer(anchor, false)}
//         >
//             <List>
//                 {['Inbox', 'Starred', 'Send email', 'Drafts'].map(
//                     (text, index) => (
//                         <ListItem key={text} disablePadding>
//                             <ListItemButton>
//                                 <ListItemText primary={text} />
//                             </ListItemButton>
//                         </ListItem>
//                     )
//                 )}
//             </List>
//             <Divider />
//             <List>
//                 {[
//                     'About',
//                     'Education',
//                     'Projects',
//                     'Resume',
//                     'References',
//                     'Contact',
//                 ].map((text, index) => (
//                     <ListItem key={text} disablePadding>
//                         <ListItemButton>
//                             <ListItemText primary={text} />
//                         </ListItemButton>
//                     </ListItem>
//                 ))}
//             </List>
//         </Box>
//     );

//     return (
//         <div>
//             {['Avery Caldwell', 'Full Stack Developer'].map((anchor) => (
//                 <React.Fragment key={anchor}>
//                     <Button onClick={toggleDrawer(anchor, true)}>
//                         {anchor}
//                     </Button>
//                     <Drawer
//                         anchor={anchor}
//                         open={state[anchor]}
//                         onClose={toggleDrawer(anchor, false)}
//                     >
//                         {list(anchor)}
//                     </Drawer>
//                 </React.Fragment>
//             ))}
//         </div>
//     );
// }

import React from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import {
    CollectionsBookmark,
    Edit,
    Feedback,
    Help,
    PermMedia,
    UploadFile,
    Work,
} from '@mui/icons-material';

function App() {
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

    const iemsList = (anchor) => (
        <Box
            sx={{
                width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
                backgroundColor: '#09212E',
                height: '100%',
            }}
            role='drawer'
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <Typography
                sx={{
                    textAlign: 'center',
                    pt: 4,
                    color: 'green',
                    fontSize: 20,
                }}
            >
                Avery Caldwell
            </Typography>
            <List>
                <ListItemButton>
                    <ListItemIcon>{<Help />}</ListItemIcon>
                    <ListItemText primary={'How to write'} />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>{<CollectionsBookmark />}</ListItemIcon>
                    <ListItemText primary={'Posts'} />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>{<UploadFile />}</ListItemIcon>
                    <ListItemText primary={'Pick Article'} />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>{<Edit />}</ListItemIcon>
                    <ListItemText primary={'Improve'} />
                </ListItemButton>
            </List>
            <Divider />
            <List>
                <ListItemButton>
                    <ListItemIcon>{<Edit />}</ListItemIcon>
                    <ListItemText primary={'Suggest'} />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>{<Work />}</ListItemIcon>
                    <ListItemText primary={'Work with us'} />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>{<PermMedia />}</ListItemIcon>
                    <ListItemText primary={'Media'} />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>{<Feedback />}</ListItemIcon>
                    <ListItemText primary={'Contact us'} />
                </ListItemButton>
            </List>
        </Box>
    );

    return (
        <div>
            <div>
                <h1>Avery Caldwell</h1>
                <h2>Full Stack Developer</h2>
            </div>
            <center>
                {['left', 'right', 'top', 'bottom'].map((anchor) => (
                    <React.Fragment key={anchor}>
                        <Button onClick={toggleDrawer(anchor, true)}>
                            {anchor}
                        </Button>
                        <Drawer
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                        >
                            {iemsList(anchor)}
                        </Drawer>
                    </React.Fragment>
                ))}
            </center>
        </div>
    );
}

export default App;
