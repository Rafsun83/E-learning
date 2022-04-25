
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, Grid, IconButton, styled, Typography } from '@mui/material';
import React, { useState } from 'react';
import '../Explorecourse/Explorecours.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import img from '../../Images/readlap.jpg'
import { bgcolor } from '@mui/system';
import { Button } from 'react-bootstrap';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import PersonIcon from '@mui/icons-material/Person';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import data from '../Explorecourse/Explore.json'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import UseAuth from '../../Context/UseAuth';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const Explorecours = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const { courses } = UseAuth();



    // const [courses, setCourse] = useState(data)
    return (
        <div className='exploresection'>
            <div className='container' id="course">
                <div className='explorehead'>
                    <div>
                        <h2>Explore Popular Courses</h2>
                    </div>
                    <div className='exploresort'>
                        <strong>Sort by</strong>
                        <Button style={{ color: 'rgb(255,103,82)', backgroundColor: 'rgb(255, 239, 239)', border: 'none' }}>
                            All Category
                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </Button>
                    </div>
                </div>
                <div>
                    <Grid container spacing={2}>
                        {
                            courses.map(course => {
                                return (
                                    <Grid item xs={12} sm={6} md={4}>
                                        <Card sx={{ maxWidth: 345 }}>

                                            <Link to="/coursedetails">

                                                <CardMedia
                                                    component="img"
                                                    height="194"
                                                    image={`data:image/png;base64,${course.picture}`}
                                                    alt="Paella dish"
                                                />
                                            </Link>


                                            <CardHeader
                                                avatar={
                                                    <Avatar sx={{ bgcolor: " red[500]" }} aria-label="recipe">
                                                        R
                                                    </Avatar>
                                                }
                                                action={
                                                    <IconButton aria-label="settings">
                                                        <MoreVertIcon />
                                                    </IconButton>
                                                }
                                                title={course.coursename}
                                                subheader={course.date}
                                            />

                                            <CardContent className='cardContent'>
                                                <Typography variant="body2" color="text.secondary">
                                                    <SlowMotionVideoIcon sx={{ color: 'rgb(255,103,82)' }} />  {course.classnumber} Classes
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    <PersonIcon sx={{ color: 'rgb(255,103,82)' }} />  291 Students
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    <StarHalfIcon sx={{ color: 'rgb(255,103,82)' }} />  4.7
                                                </Typography>
                                            </CardContent> <Divider />
                                            <CardActions disableSpacing className='cardaction'>
                                                {/* <Typography variant="h6" className='cardtext'>Design</Typography> */}
                                                {/* <Typography variant="h6" className='cardtext'>{course.catagori}</Typography> */}
                                                <Link to="/coursedetails">
                                                    <Button >View Details</Button>
                                                </Link>


                                                <Typography variant="h6" >${course.amount}</Typography>
                                            </CardActions>

                                        </Card>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </div>
                <Button variant="contained" className='buttonexpo' >Browse All Courses</Button>
            </div>
        </div>
    );
};

export default Explorecours;