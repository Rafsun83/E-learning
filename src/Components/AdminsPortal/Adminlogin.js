import { Box, Paper, Grid, Avatar, TextField, Button, IconButton } from '@mui/material';
import React, { useState } from 'react';
import '../AdminsPortal/Admin.css'
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import UseAuth from '../../Context/UseAuth';
import { useLocation, useHistory } from 'react-router-dom';

const Adminlogin = () => {

    const [loginData, setLoginData] = useState({})
    const { loginUser, admin } = UseAuth();
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





        // if (loginData.password === registerUser.password) {
        //     return loginUser
        // location, history

        // }



        e.preventDefault();
    }



    const avatarStyle = {
        backgroundColor: '#1bbd7e'
    }
    return (
        <div className='adminsection'>
            <Box

                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: 500,
                        height: 350,
                    },
                }}
            >

                <Paper
                    sx={{
                        bgcolor: 'rgb(255,239,239)',
                        position: 'absolute',
                        top: '30%',
                        right: '36.5%',
                        zIndex: '1',
                        padding: '2rem'
                    }}
                    elevation={10} >
                    <Grid align="center" padding='10px'>
                        <Avatar style={avatarStyle}>
                            <AdminPanelSettingsOutlinedIcon />

                        </Avatar>
                        <h3>Admin Panel</h3>

                    </Grid>
                    <form onSubmit={handlesubmitlogin}>
                        <TextField
                            label='Admin Email'
                            name="email"
                            onChange={handleOnchange}
                            placeholder='Enter admin email'
                            variant="standard"
                            fullWidth required />
                        <TextField
                            label='Admin Password'
                            type="password"
                            onChange={handleOnchange}
                            name="password"
                            placeholder='Enter admin password'
                            variant="standard"
                            fullWidth required />
                        <Box sx={{ paddingTop: '1rem' }}>
                            <Button type='submit' fullWidth variant="contained">Login</Button>

                        </Box>
                    </form>
                </Paper>
            </Box>
        </div>
    );
};

export default Adminlogin;