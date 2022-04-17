import { Box, Grid, Paper, styled } from '@mui/material';
import { fontSize } from '@mui/system';
import React from 'react';
import '../Categories/Categori.css'
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import ApiIcon from '@mui/icons-material/Api';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import WorkIcon from '@mui/icons-material/Work';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import Data from '../Categories/Categori.json'



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    fontWeight: 'bold',
    fontSize: '20px'
}));



const Categori = () => {

    return (
        <div className='Categorisection'>
            <div className='container'>
                <div className='categoritext'>
                    <h1>Top Categories</h1>
                </div>
                <div>
                    <Box sx={{ width: '100%' }}>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                            {
                                Data.map(catagori => {
                                    return (

                                        <Grid item xs={6} sm={4} md={3}>

                                            <Item sx={{ padding: '1.5rem' }}> <DesignServicesIcon sx={{ fontSize: 30, color: 'rgb(255,103,82)' }} /> {catagori.name}</Item>
                                        </Grid>
                                    )
                                })
                            }

                            {/* <Grid item xs={6} sm={4} md={3}>

                                <Item sx={{ padding: '1.5rem' }}> <DesignServicesIcon sx={{ fontSize: 30, color: 'rgb(255,103,82)' }} /> Design Deve</Item>
                            </Grid>
                            <Grid item xs={6} sm={4} md={3}>
                                <Item sx={{ padding: '1.5rem' }}><DeveloperBoardIcon sx={{ fontSize: 30, color: 'rgb(255,103,82)' }} /> Development</Item>
                            </Grid>
                            <Grid item xs={6} sm={4} md={3}>
                                <Item sx={{ padding: '1.5rem' }}><KeyboardVoiceIcon sx={{ fontSize: 30, color: 'rgb(255,103,82)' }} /> Marketing</Item>
                            </Grid>
                            <Grid item xs={6} sm={4} md={3}>
                                <Item sx={{ padding: '1.5rem' }}><ApiIcon sx={{ fontSize: 30, color: 'rgb(255,103,82)' }} /> It Software</Item>
                            </Grid>
                            <Grid item xs={6} sm={4} md={3}>
                                <Item sx={{ padding: '1.5rem' }}><VideoCameraFrontIcon sx={{ fontSize: 30, color: 'rgb(255,103,82)' }} /> Videography</Item>
                            </Grid>
                            <Grid item xs={6} sm={4} md={3}>
                                <Item sx={{ padding: '1.5rem' }}><WorkIcon sx={{ fontSize: 30, color: 'rgb(255,103,82)' }} /> Business Sys</Item>
                            </Grid>
                            <Grid item xs={6} sm={4} md={3}>
                                <Item sx={{ padding: '1.5rem' }}><AddAPhotoIcon sx={{ fontSize: 30, color: 'rgb(255,103,82)' }} /> Photography</Item>
                            </Grid>
                            <Grid item xs={6} sm={4} md={3}>
                                <Item sx={{ padding: '1.5rem' }}><QueueMusicIcon sx={{ fontSize: 30, color: 'rgb(255,103,82)' }} /> Music Intru</Item>
                            </Grid> */}
                        </Grid>
                    </Box>
                </div>
            </div>
        </div>
    );
};

export default Categori;