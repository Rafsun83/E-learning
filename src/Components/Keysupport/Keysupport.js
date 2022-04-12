import { Box, CardMedia, Paper } from '@mui/material';
import React from 'react';
import logo from '../../Images/logo.png'
import logo2 from '../../Images/logo2.png'
import logo3 from '../../Images/logo3.png'
import logo4 from '../../Images/logo4.png'
import '../Keysupport/Keysupport.css'

const Keysupport = () => {
    return (
        <div className='keysection'>
            <div className='container'>
                <div className='keyhead'>
                    <h2>Our Key Supporters</h2>
                </div>
                <div>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',

                            '& > :not(style)': {
                                m: 1,
                                width: 120,
                                height: 120,
                            },
                        }}
                    >
                        <Paper elevation={3}>
                            <div className='Keypaper'>
                                <CardMedia
                                    component="img"
                                    height="120px"
                                    image={logo}
                                    alt="Paella dish"
                                />

                            </div>
                        </Paper>
                        <Paper elevation={3}>
                            <div className='Keypaper'>
                                <CardMedia
                                    component="img"
                                    height="120px"
                                    image={logo2}
                                    alt="Paella dish"
                                />

                            </div>
                        </Paper>
                        <Paper elevation={3}>
                            <div className='Keypaper'>
                                <CardMedia
                                    component="img"
                                    height="120px"
                                    image={logo3}
                                    alt="Paella dish"
                                />

                            </div>
                        </Paper>
                        <Paper elevation={3}>
                            <div className='Keypaper'>
                                <CardMedia
                                    component="img"
                                    height="120px"
                                    image={logo4}
                                    alt="Paella dish"
                                />

                            </div>
                        </Paper>
                        <Paper elevation={3}>
                            <div className='Keypaper'>
                                <CardMedia
                                    component="img"
                                    height="120px"
                                    image={logo3}
                                    alt="Paella dish"
                                />

                            </div>
                        </Paper>
                        <Paper elevation={3}>
                            <div className='Keypaper'>
                                <CardMedia
                                    component="img"
                                    height="120px"
                                    image={logo3}
                                    alt="Paella dish"
                                />

                            </div>
                        </Paper>

                        <Paper elevation={3}>
                            <div className='Keypaper'>
                                <CardMedia
                                    component="img"
                                    height="120px"
                                    image={logo}
                                    alt="Paella dish"
                                />

                            </div>
                        </Paper>

                    </Box>
                </div>
            </div>
        </div>
    );
};

export default Keysupport;