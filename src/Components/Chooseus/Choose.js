import { Box, Grid, List, ListItem, ListItemIcon, ListItemText, styled, Typography } from '@mui/material';
import React from 'react';
import { Button } from 'react-bootstrap';
import read from '../../Images/why.jpg'
import '../Chooseus/Choose.css'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';



function generate(element) {
    return [0, 1, 2].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));
const Choose = () => {
    const [dense, setDense] = React.useState(false);

    return (
        <div>
            <div className='choose'>
                <div className='aboutcoursesection'>
                    <div className='container Aboutcoursepart'>
                        <div className='reading'>
                            <img src={read} alt="" />
                        </div>
                        <div className='Aboutcourseline'>
                            <strong style={{ color: 'rgb(255,103,82)' }}>Why Choose Us</strong>
                            <h1>Why You Choose Our, <br /> Online Learning</h1>
                            <small>Dramatically supply transparent deliveravles before backward <br /> camp internal or "organic" sources. Competently leverage othet</small> <br />
                            <Box>
                                <Grid item xs={12} md={6}>

                                    <Demo>
                                        <List dense={dense}>
                                            {generate(
                                                <ListItem>
                                                    <ListItemIcon>
                                                        <CheckCircleIcon sx={{ color: 'rgb(37,91,79)' }} />
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primary="Increasing Your Learning Skills"

                                                    />
                                                </ListItem>,
                                            )}
                                        </List>
                                    </Demo>
                                </Grid>
                            </Box>
                            <Button className='buttonexpo' >More Details</Button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Choose;