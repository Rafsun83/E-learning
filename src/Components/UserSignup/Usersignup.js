import { Avatar, Box, Button, CircularProgress, Grid, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import '../UserSignup/Usersignup.css'

import { Link, useLocation, useHistory } from 'react-router-dom';
import UseAuth from '../../Context/UseAuth';





const Usersignup = () => {
    const { loginUser, isloading } = UseAuth()
    const [loginData, setLoginData] = useState({})
    const location = useLocation();
    const history = useHistory();

    const handleOnchange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newloginData = { ...loginData }
        newloginData[field] = value;
        setLoginData(newloginData);


    }

    const handlesubmitlogin = (e) => {
        loginUser(loginData.email, loginData.password, location, history)

        e.preventDefault();
    }


    const avatarStyle = {
        backgroundColor: '#1bbd7e'
    }
    const forgotStyle = {
        paddingTop: '15px'
    }
    return (
        <div className='usersection'>
            <Box

                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: 500,
                        height: 450,
                    },
                }}
            >

                <Paper
                    sx={{
                        bgcolor: 'rgb(255,239,239)',
                        position: 'absolute',
                        top: '18%',
                        right: '36.5%',
                        zIndex: '1',
                        padding: '2rem'
                    }}
                    elevation={10} >

                    <Grid align="center" padding='10px'>
                        <Avatar style={avatarStyle}>
                            <AccountCircleOutlinedIcon />

                        </Avatar>
                        <h3>Login Your <span style={{ color: 'rgb(255,103,82)' }}>Classroom</span></h3>
                        {
                            isloading && <CircularProgress></CircularProgress>
                        }

                    </Grid>
                    <form onSubmit={handlesubmitlogin}>

                        <TextField
                            label='User Email'
                            type='email'
                            name='email'
                            onChange={handleOnchange}
                            placeholder='Enter User email'
                            variant="standard"
                            fullWidth required />
                        <TextField
                            name='password'
                            onChange={handleOnchange}
                            label='User Password'
                            type="password"
                            placeholder='Enter User password'
                            variant="standard"
                            fullWidth required />
                        <Box sx={{ paddingTop: '1.5rem' }}>
                            <Button type='submit' fullWidth variant="contained">Login</Button>
                        </Box>
                    </form>
                    <Link to="">
                        Forgot password?
                    </Link>
                    <Box style={forgotStyle}>
                        <Typography>
                            Do you have no account? <Link to="/register">
                                Sign Up?
                            </Link>
                        </Typography>

                    </Box>





                </Paper>

            </Box>
        </div >
    );
};

export default Usersignup;