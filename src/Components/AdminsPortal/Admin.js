import { Box, Paper, Grid, Avatar, TextField, Button, IconButton } from '@mui/material';
import React from 'react';
import '../AdminsPortal/Admin.css'
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';

const Admin = () => {
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
                    <TextField label='Admin Email' placeholder='Enter admin email' variant="standard" fullWidth required />
                    <TextField label='Admin Password' type="password" placeholder='Enter admin password' variant="standard" fullWidth required />
                    <Box sx={{ paddingTop: '1rem' }}>
                        <Button type='submit' fullWidth variant="contained">Login</Button>

                    </Box>
                </Paper>
            </Box>
        </div>
    );
};

export default Admin;