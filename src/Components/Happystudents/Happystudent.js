import { Avatar, Box, CardMedia, IconButton, Paper, Rating, Typography } from '@mui/material';
import React from 'react';
import '../Happystudents/Happystudent.css'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import student1 from '../../Images/instructor1.jpg'
import student2 from '../../Images/student.jpg'
import student3 from '../../Images/Instructor3.jpg'

const Happystudent = () => {
    return (
        <div className='studentsection'>
            <div className='container'>
                <div className='happystudenthead'>
                    <Typography variant="h3">4700+ Happy Students</Typography>
                    <div>
                        <IconButton>
                            <KeyboardArrowLeftIcon sx={{ fontSize: 30, bgcolor: 'rgb(255,239,239)', borderRadius: 50 }} />
                        </IconButton>
                        <IconButton>
                            <ChevronRightIcon sx={{ fontSize: 30, bgcolor: 'rgb(255,103,82)', borderRadius: 50 }} />
                        </IconButton>
                    </div>
                </div>
                <div>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',

                            '& > :not(style)': {
                                m: 1,
                                width: 300,
                                height: 280,
                            },
                        }}
                    >
                        <Paper elevation={3}>
                            <div className='happystudentpaper'>
                                <div className='students'>
                                    <div className='Studentavatar'>
                                        <Avatar
                                            alt="Remy Sharp"
                                            src={student1}
                                            sx={{ width: 100, height: 100 }}
                                        />
                                    </div>
                                    <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                                </div>
                                <div>
                                    <Typography disable>
                                        Dramatically supply transparent deliverab before and you backward comp internal or "organic" sources.
                                    </Typography>
                                    <div className='studentname'>
                                        <h5> Jane Cooper</h5>
                                        <small>Sr. UX/UI designer</small>
                                    </div>
                                </div>
                            </div>
                        </Paper>
                        <Paper elevation={3}>
                            <div className='happystudentpaper'>
                                <div className='students'>
                                    <div className='Studentavatar'>
                                        <Avatar
                                            alt="Remy Sharp"
                                            src={student2}
                                            sx={{ width: 100, height: 100 }}
                                        />
                                    </div>
                                    <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                                </div>
                                <div>
                                    <Typography disable>
                                        Dramatically supply transparent deliverab before and you backward comp internal or "organic" sources.
                                    </Typography>
                                    <div className='studentname'>
                                        <h5>Denim Cooper</h5>
                                        <small>Software Engineer</small>
                                    </div>
                                </div>
                            </div>
                        </Paper>
                        <Paper elevation={3}>
                            <div className='happystudentpaper'>
                                <div className='students'>
                                    <div className='Studentavatar'>
                                        <Avatar
                                            alt="Remy Sharp"
                                            src={student3}
                                            sx={{ width: 100, height: 100 }}
                                        />
                                    </div>
                                    <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                                </div>
                                <div>
                                    <Typography disable>
                                        Dramatically supply transparent deliverab before and you backward comp internal or "organic" sources.
                                    </Typography>
                                    <div className='studentname'>
                                        <h5> Devil Cooper</h5>
                                        <small>Content Writer</small>
                                    </div>
                                </div>
                            </div>
                        </Paper>
                    </Box>
                </div>
            </div>
        </div>
    );
};

export default Happystudent;