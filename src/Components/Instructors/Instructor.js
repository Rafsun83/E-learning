import { Box, CardMedia, Grid, IconButton, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import '../Instructors/Instructor.css'
import { Button } from 'react-bootstrap';
import Data from '../Instructors/Instructor.json'

const Instructor = () => {
    const [instructor, setInstructor] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/instructor')
            .then(res => res.json())
            .then(data => setInstructor(data))

    }, [])
    return (
        <div className='instructorsection' id="instructor">
            <div className='container'>
                <div className='instructorhead'>
                    <Typography variant="h4">Our Expart Instructor</Typography>
                    <div>
                        <IconButton>
                            <KeyboardArrowLeftIcon sx={{ fontSize: 30, bgcolor: 'rgb(255,239,239)', borderRadius: 50 }} />
                        </IconButton>
                        <IconButton>
                            <ChevronRightIcon sx={{ fontSize: 30, bgcolor: 'rgb(255,103,82)', borderRadius: 50 }} />
                        </IconButton>
                    </div>
                </div>
                <div className='Instructorpaperbox'>
                    <Grid container spacing={1}>
                        {
                            instructor.map(instructor => {
                                return (
                                    <Grid item xs={12} sm={6} md={3}>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                flexWrap: 'wrap',

                                                '& > :not(style)': {
                                                    m: 1,
                                                    width: 240,
                                                    height: 280,
                                                },
                                            }}
                                        >
                                            <Paper elevation={3}>
                                                <div className='instructorpaper'>
                                                    <CardMedia
                                                        component="img"
                                                        height="194"
                                                        image={`data:image/png;base64,${instructor.picture}`}
                                                        alt="Paella dish"
                                                    />
                                                    <h5> {instructor.name}</h5>
                                                    <small>{instructor.title}</small>
                                                </div>
                                            </Paper>
                                        </Box>
                                    </Grid>
                                )
                            })

                        }

                    </Grid>

                    {/* <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',

                            '& > :not(style)': {
                                m: 1,
                                width: 240,
                                height: 280,
                            },
                        }}

                    >


                        <Paper elevation={3}>
                            <div className='instructorpaper'>
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image={instructor1}
                                    alt="Paella dish"
                                />
                                <h5> Jane Cooper</h5>
                                <small>INSTRUCTOR</small>
                            </div>
                        </Paper>
                        <Paper elevation={3}>
                            <div className='instructorpaper'>
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image={instructor2}
                                    alt="Paella dish"
                                />
                                <h5> Courteny Henry</h5>
                                <small>INSTRUCTOR</small>
                            </div>
                        </Paper>
                        <Paper elevation={3}>
                            <div className='instructorpaper'>
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image={instructor3}
                                    alt="Paella dish"
                                />
                                <h5> Devon lane</h5>
                                <small>INSTRUCTOR</small>
                            </div>
                        </Paper>
                        <Paper elevation={3}>
                            <div className='instructorpaper'>
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image={instructor4}
                                    alt="Paella dish"
                                />
                                <h5> Henry pink</h5>
                                <small>INSTRUCTOR</small>
                            </div>
                        </Paper>


                    </Box> */}
                </div>
                <Button className='buttonexpo'>All Instructor</Button>
            </div>
        </div>
    );
};

export default Instructor;