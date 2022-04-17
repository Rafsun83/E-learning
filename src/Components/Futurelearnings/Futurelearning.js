
import { Box, Paper } from '@mui/material';
import React from 'react';
import '../Futurelearnings/Futurelearning.css'
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArticleIcon from '@mui/icons-material/Article';
import EventNoteIcon from '@mui/icons-material/EventNote';


const Futurelearning = () => {
    return (
        <div className='Futuresection' id="pages">
            <div className='container futurelearn'>
                <div className='futuretext'>
                    <small style={{ color: "orange", fontWeight: "bold" }}>What We Offer</small>
                    <h1>For Your Future Learning.</h1>
                </div>
                <div className='paperbox'>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',

                            '& > :not(style)': {
                                m: 1,
                                width: 240,
                                height: 240,
                            },
                        }}

                    >


                        <Paper elevation={3}>
                            <div className='coursepaper'>
                                <BookmarkAddIcon
                                    sx={{ fontSize: 50, background: 'rgb(37,91,79)', borderRadius: '50px', padding: '7px', color: 'white' }}
                                ></BookmarkAddIcon>
                                <h5> Online Courses</h5>
                                <small>Interactively provide access world class materials for unique catalysts for change my ocardint</small>
                            </div>
                        </Paper>
                        <Paper elevation={3}>
                            <div className='coursepaper'>
                                <AccountCircleIcon
                                    sx={{ fontSize: 50, background: 'rgb(255,103,82)', borderRadius: '50px', padding: '7px', color: 'white' }}
                                ></AccountCircleIcon>
                                <h5>Expert Trainer</h5>
                                <small>Interactively provide access world class materials for unique catalysts for change my ocardint</small>
                            </div>
                        </Paper>
                        <Paper elevation={3}>
                            <div className='coursepaper'>
                                <ArticleIcon
                                    sx={{ fontSize: 50, background: 'rgb(37,91,79)', borderRadius: '50px', padding: '7px', color: 'white' }}
                                ></ArticleIcon>
                                <h5>Get Certificate</h5>
                                <small>Interactively provide access world class materials for unique catalysts for change my ocardint</small>
                            </div>
                        </Paper>
                        <Paper elevation={3}>
                            <div className='coursepaper'>
                                <EventNoteIcon
                                    sx={{ fontSize: 50, background: 'rgb(37,91,79)', borderRadius: '50px', padding: '7px', color: 'white' }}
                                ></EventNoteIcon>
                                <h5>Life Time Access</h5>
                                <small>Interactively provide access world class materials for unique catalysts for change my ocardint</small>
                            </div>
                        </Paper>
                    </Box>
                </div>
            </div>
        </div>
    );
};

export default Futurelearning;