import { Box, Paper, Slider } from '@mui/material';
import React from 'react';
import '../Coursedetails/coursedetails.css'
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

const Coursedetails = () => {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <div className='coursedetaissection'>
            <div className='container coursedetail'>
                <div>

                    <h5>Networking Course View with xyz</h5>
                    <div>
                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                '& > :not(style)': {
                                    m: 1,
                                    width: 700,
                                    height: 480,
                                },
                            }}
                        >
                            <Paper elevation={3} />
                        </Box>
                    </div>
                </div>
                <div>
                    <div className='content'>
                        <h5>Course Content </h5>
                        <Slider sx={{ width: '135px' }} defaultValue={30} aria-label="Disabled slider" />
                    </div>
                    <div>
                        <Box>
                            <List
                                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                                component="nav"
                                aria-labelledby="nested-list-subheader"
                            // subheader={
                            //     <ListSubheader component="div" id="nested-list-subheader">
                            //         Nested List Items
                            //     </ListSubheader>
                            // }
                            >
                                <ListItemButton>
                                    <ListItemText primary="Networking lacture-1" />
                                </ListItemButton>
                                <ListItemButton>
                                    <ListItemText primary="Networking lacture-2" />
                                </ListItemButton>
                                <ListItemButton>
                                    <ListItemText primary="Networking lacture-3" />
                                </ListItemButton>

                                <ListItemButton>
                                    <ListItemText primary="Networking lacture-4" />
                                </ListItemButton>

                                <ListItemButton onClick={handleClick}>
                                    <ListItemText primary="Networking Intermediat" />
                                    {open ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>
                                <Collapse in={open} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        <ListItemButton sx={{ pl: 4 }}>

                                            <ListItemText primary="Intermadiet lacture-1" />
                                        </ListItemButton>
                                    </List>
                                </Collapse>
                            </List>
                        </Box>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coursedetails;