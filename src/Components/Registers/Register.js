import { Avatar, Box, Button, CircularProgress, Grid, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link, useLocation, useHistory } from 'react-router-dom';
import UseAuth from '../../Context/UseAuth';

const Register = () => {
    const { signWithgoogle, registerUser, isloading } = UseAuth()
    const [loginData, setLoginData] = useState({})

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/'

    const handleSigninWithGoogle = () => {
        signWithgoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }




    const handleOnchange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newloginData = { ...loginData }
        newloginData[field] = value;
        setLoginData(newloginData);
        console.log(loginData)


    }

    const handlesubmitlogin = (e) => {
        if (loginData.password !== loginData.confirm_password) {
            alert('your password did not match')
        }
        registerUser(loginData.email, loginData.password, location, history)

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
                        height: 480,
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
                        <h3>Signup For <span style={{ color: 'rgb(255,103,82)' }}>Classroom</span></h3>
                        {
                            isloading && <CircularProgress />
                        }

                    </Grid>

                    <form onSubmit={handlesubmitlogin}>
                        <TextField
                            label='User Name'
                            name='name'
                            onChange={handleOnchange}
                            placeholder='Enter User Name'
                            variant="standard"
                            fullWidth required />
                        <TextField
                            label='User Email'
                            name='email'
                            type='email'
                            onChange={handleOnchange}
                            placeholder='Enter User email'
                            variant="standard"
                            fullWidth required />
                        <TextField
                            label='Password'
                            name='password'
                            onChange={handleOnchange}
                            type="password"
                            placeholder='password'
                            variant="standard"
                            fullWidth required />
                        <TextField
                            label='Confirm Password'
                            name='confirm_password'
                            onChange={handleOnchange}
                            type="password"
                            placeholder='Confirm password'
                            variant="standard"
                            fullWidth required />

                        <Box sx={{ paddingTop: '1.5rem' }}>
                            <Button type='submit' fullWidth variant="contained">Register</Button>
                        </Box>
                        <Box style={forgotStyle}>
                            <Typography>
                                You have an account? <Link to="/usersignup" >
                                    Sign in?
                                </Link>
                            </Typography>
                        </Box>
                    </form>

                    <Box>
                        <Button type='submit' onClick={handleSigninWithGoogle} fullWidth variant="contained">Signin with google</Button>
                    </Box>




                </Paper>
            </Box>
        </div>
    );
};

export default Register;