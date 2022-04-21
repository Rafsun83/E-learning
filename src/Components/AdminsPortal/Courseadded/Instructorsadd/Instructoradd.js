import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import '../Instructorsadd/Instructor.css'

const Instructoradd = () => {
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [image, setImage] = useState(null);

    const handleformsubmit = e => {
        e.preventDefault()
        if (!image) {
            return
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('title', title);
        formData.append('image', image);

        fetch('http://localhost:5000/instructor', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('instructor added succesfully')
                    e.target.reset();
                }
            })
            .catch(error => {
                console.log("error", error)
            })
    }

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: '50%',
                    height: '50%',
                },
            }}
        >

            <Paper elevation={3}>
                <Box className='head'>
                    <Typography variant='h5'>
                        Please Add New Instructor
                    </Typography>
                </Box>
                <Box sx={{ padding: '1rem' }}>

                    <form onSubmit={handleformsubmit}>
                        <TextField
                            accept="image/*"
                            className='inputfield'
                            multiple type='file'
                            onChange={e => setImage(e.target.files[0])}
                            fullWidth id="fullWidth" />
                        <TextField
                            className='inputfield'
                            fullWidth label="Instructor Name:"
                            onChange={e => setName(e.target.value)}
                            id="fullWidth" />
                        <TextField
                            className='inputfield'
                            fullWidth label="Title: "
                            onChange={e => setTitle(e.target.value)}
                            id="fullWidth" />

                        <Button variant='contained' type='submit' fullWidth>Add Instructor</Button>

                    </form>


                </Box>
            </Paper>
        </Box>
    );
};

export default Instructoradd;