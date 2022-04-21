import React, { useRef, useState, reset } from 'react';
import { Box, Button, FormControl, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material';
import '../Courseadded/Courseadd.css'






const Courseadd = () => {
    const [courseData, setCourseData] = useState({});

    const [coursename, setCoursename] = useState('');
    const [classnumber, setClassnumber] = useState('');
    const [date, setDate] = useState('');
    const [catagori, setCatagori] = useState('');
    const [amount, setAmount] = useState('');
    const [image, setImage] = useState(null)

    const handlesubmit = e => {
        e.preventDefault();
        if (!image) {
            return
        }

        const formData = new FormData()
        formData.append('coursename', coursename);
        formData.append('classnumber', classnumber);
        formData.append('date', date);
        formData.append('catagori', catagori);
        formData.append('amount', amount);
        formData.append('image', image);

        fetch('http://localhost:5000/course', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Course added succesfully')
                    e.target.reset();
                }
            })
            .catch(error => {
                console.log("error", error)
            })


    }

    // const handleOnchange = (e) => {
    //     const field = e.target.name;
    //     const value = e.target.value;
    //     const newcourseData = { ...courseData }
    //     newcourseData[field] = value;
    //     setCourseData(newcourseData);
    //     console.log(newcourseData)

    // }




    // const handlesubmit = (e) => {

    //     console.log("coursedata", courseData)

    //     fetch('http://localhost:5000/course', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(courseData)

    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.insertedId) {

    //                 e.target.reset();
    //             }
    //         })
    //     e.preventDefault();





    // }





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
                        Please Add New Course For Your valuable Students
                    </Typography>
                </Box>
                <Box sx={{ padding: '1rem' }}>

                    <form onSubmit={handlesubmit}>
                        <TextField
                            className='inputfield'
                            fullWidth label="Add Course Name:"
                            name="coursename"
                            onChange={e => setCoursename(e.target.value)}
                            // onChange={handleOnchange}
                            id="fullWidth" />
                        <TextField
                            className='inputfield'
                            name="classnumber"
                            // onChange={handleOnchange}
                            onChange={e => setClassnumber(e.target.value)}
                            fullWidth
                            type='number'
                            label="Total Class Number: "
                            id="fullWidth" />

                        <TextField
                            className='inputfield'
                            name="date"
                            onChange={e => setDate(e.target.value)}
                            // onChange={handleOnchange}
                            fullWidth
                            type='datetime-local'
                            id="fullWidth" />
                        {/* <FormControl className='inputfield' fullWidth>
                            <InputLabel id="demo-simple-select-label">Categori</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                name="catagori"
                                onChange={handleChange}
                            >
                                <MenuItem >Apps Development</MenuItem>
                                <MenuItem>Graphics Design</MenuItem>
                                <MenuItem >Web Development</MenuItem>
                                <MenuItem >Networking</MenuItem>
                                <MenuItem >Music</MenuItem>
                            </Select>
                        </FormControl> */}
                        <TextField
                            className='inputfield'
                            fullWidth label="Course Catagori:"
                            name="catagori"
                            onChange={e => setCatagori(e.target.value)}
                            // onChange={handleOnchange}
                            id="fullWidth" />
                        <TextField
                            className='inputfield'
                            name="amount"
                            // onChange={handleOnchange}
                            onChange={e => setAmount(e.target.value)}
                            fullWidth
                            type='number'
                            label="Course Amount $: "
                            id="fullWidth" />
                        <TextField
                            accept="image/*"
                            className='inputfield'
                            multiple type='file'
                            onChange={e => setImage(e.target.files[0])}
                            fullWidth id="fullWidth" />


                        <Button variant='contained' type='submit' fullWidth>Submit</Button>

                    </form>


                </Box>
            </Paper>
        </Box>
    );
};

export default Courseadd;