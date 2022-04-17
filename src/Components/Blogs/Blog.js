import { Box, CardMedia, Paper } from '@mui/material';
import React from 'react';
import '../Blogs/Blog.css'
import News from '../../Images/readlap.jpg'
import News1 from '../../Images/news.jpg'
import News2 from '../../Images/news1.jpg'
import { Button } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className='blogsection' id="blog">
            <div className='container'>
                <div className='Newshead'>
                    <h2>Latest Blogs and News</h2>
                </div>
                <div>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',

                            '& > :not(style)': {
                                m: 1,
                                width: 260,
                                height: 350,
                            },
                        }}
                    >
                        <Paper elevation={3}>
                            <div className='Blogspaper'>
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image={News}
                                    alt="Paella dish"
                                />
                                <div className='blogsheadline'>
                                    <small style={{ color: 'rgb(255,103,82)' }} >EDUCATION - JAN 21, 2022</small>
                                    <h5>Educational Technology and Mobile Learning</h5>
                                    <small>Dramatically supply transparent deliverab before and you backward.</small>
                                </div>
                            </div>
                        </Paper>
                        <Paper elevation={3}>
                            <div className='Blogspaper'>
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image={News1}
                                    alt="Paella dish"
                                />
                                <div className='blogsheadline'>
                                    <small style={{ color: 'rgb(255,103,82)' }} >EDUCATION - JAN 21, 2022</small>
                                    <h5>Educational Technology and Mobile Learning</h5>
                                    <small>Dramatically supply transparent deliverab before and you backward.</small>
                                </div>
                            </div>
                        </Paper>
                        <Paper elevation={3}>
                            <div className='Blogspaper'>
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image={News2}
                                    alt="Paella dish"
                                />
                                <div className='blogsheadline'>
                                    <small style={{ color: 'rgb(255,103,82)' }} >EDUCATION - JAN 21, 2022</small>
                                    <h5>Educational Technology and Mobile Learning</h5>
                                    <small>Dramatically supply transparent deliverab before and you backward.</small>
                                </div>
                            </div>
                        </Paper>

                    </Box>
                </div>
                <Button className='buttonexpo'>Learn More</Button>
            </div>
        </div>
    );
};

export default Blog;