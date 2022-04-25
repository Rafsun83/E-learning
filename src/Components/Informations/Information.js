import { Grid, Typography } from '@mui/material';
import React from 'react';
import '../Informations/Information.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DateRangeIcon from '@mui/icons-material/DateRange';
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import UseAuth from '../../Context/UseAuth';

const Information = () => {
    const { courses } = UseAuth();
    return (
        <div className='informationsection'>
            <div className='container'>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <AccountCircleIcon sx={{ fontSize: 40, color: 'rgb(37,91,79)' }} />
                        <Typography variant="h6">276K</Typography>
                        <Typography>Worldwide Students</Typography>

                    </Grid>
                    <Grid item xs={3}>
                        <DateRangeIcon sx={{ fontSize: 40, color: 'rgb(37,91,79)' }} />
                        <Typography variant="h6">23+</Typography>
                        <Typography>Years Experience</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <CalendarViewMonthIcon sx={{ fontSize: 40, color: 'rgb(37,91,79)' }} />
                        <Typography variant="h6">{courses.length}+</Typography>
                        <Typography>Professional Courses</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <StarBorderIcon sx={{ fontSize: 40, color: 'rgb(37,91,79)' }} />
                        <Typography variant="h6">4.7K+</Typography>
                        <Typography>Beautiful Review</Typography>
                    </Grid>

                </Grid>
            </div>

        </div>
    );
};

export default Information;