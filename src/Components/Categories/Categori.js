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
                            <Grid item xs={3}>

                                <Item> <DesignServicesIcon />Design Deve</Item>
                            </Grid>
                            <Grid item xs={3}>
                                <Item><DeveloperBoardIcon /> Development</Item>
                            </Grid>
                            <Grid item xs={3}>
                                <Item><KeyboardVoiceIcon /> Marketing</Item>
                            </Grid>
                            <Grid item xs={3}>
                                <Item><ApiIcon /> It Software</Item>
                            </Grid>
                            <Grid item xs={3}>
                                <Item><VideoCameraFrontIcon /> Videography</Item>
                            </Grid>
                            <Grid item xs={3}>
                                <Item><WorkIcon /> Business Sys</Item>
                            </Grid>
                            <Grid item xs={3}>
                                <Item><AddAPhotoIcon /> Photography</Item>
                            </Grid>
                            <Grid item xs={3}>
                                <Item><QueueMusicIcon /> Music Intru</Item>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </div>
        </div>
    );
};

export default Categori;