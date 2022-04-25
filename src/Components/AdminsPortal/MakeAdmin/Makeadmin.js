
import { Box, Grid, Paper, Avatar, TextField, Button, Alert } from '@mui/material';
import React, { useState } from 'react';

const Makeadmin = () => {
    const [email, setEmail] = useState('')
    const [sucsess, setSuccess] = useState(false)
    const handleonblure = (e) => {
        setEmail(e.target.value)

    }
    const handlesubmit = e => {
        const user = { email }
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json)
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data)
                    setEmail('')
                    setSuccess(true)

                }

            })
        e.preventDefault();
    }

    return (
        <div>
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


                    <form onSubmit={handlesubmit}>

                        <TextField
                            label='Admin Email'
                            type='email'

                            onBlur={handleonblure}
                            placeholder='Enter Admin email'
                            variant="standard"
                            fullWidth required />
                        {/* <TextField
                            name='password'

                            label='Admin Password'
                            type="password"
                            placeholder='Enter Amin password'
                            variant="standard"
                            fullWidth required /> */}
                        <Box sx={{ paddingTop: '1.5rem' }}>
                            <Button type='submit' fullWidth variant="contained">Add Admin</Button>
                        </Box>

                    </form>
                    {
                        sucsess && <Alert>Admin added succesfylly</Alert>
                    }
                </Paper>
            </Box>



        </div >
    );
};

export default Makeadmin;