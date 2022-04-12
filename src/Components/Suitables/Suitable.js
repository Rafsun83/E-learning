import { Box, Button, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import learnimg from '../../Images/read.png'
import '../Suitables/Suitable.css'
import suitable1 from '../../Images/suitable1.png'
import suitable2 from '../../Images/suitable2.jpg'

const Suitable = () => {
    return (
        <div className='suitablesection'>
            <div className='container'>
                <div className='suitablehead'>
                    <Typography sx={{ color: 'rgb(255,103,82)' }} >Join With Us</Typography>
                    <Typography variant="h4">Which One is Suitable For You?</Typography>
                </div>
                <div className='suitablebox'>
                    <div className='suitablebox1'>
                        <div>
                            <Typography variant="h6">Do You Want to <br /> <span style={{ color: 'rgb(255,103,82)' }}>Learn</span> here? </Typography>
                            <Typography>Dramatically Supply transpa <br /> delivarables before and you..</Typography>
                            <Button sx={{ color: "red" }} variant="outlined">Join Now</Button>
                        </div>
                        <div>
                            <CardMedia
                                component="img"
                                height="200"


                                image={suitable1}
                                alt="Paella dish"
                            />
                        </div>
                    </div>
                    <div className='suitablebox1'>
                        <div>
                            <Typography variant="h6">Do You Want to <br /> <span style={{ color: 'rgb(255,103,82)' }}>Learn</span> here? </Typography>
                            <Typography>Dramatically Supply transpa <br /> delivarables before and you..</Typography>
                            <Button sx={{ color: "red" }} variant="outlined">Join Now</Button>
                        </div>
                        <div>
                            <CardMedia
                                component="img"
                                height="200"

                                image={suitable2}
                                alt="Paella dish"
                            />
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Suitable; 