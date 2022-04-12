import { Divider, IconButton, Link, Typography } from '@mui/material';
import React from 'react';
import '../Footer/Footers.css'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
const Footers = () => {
    return (
        <div className='footersection'>
            <div className='container'>
                <div className='footercontent'>
                    <div className='content'>
                        <Typography variant="h6">About</Typography>
                        <Typography variant="body2">About Us</Typography>
                        <Typography variant="body2">Blog</Typography>
                        <Typography variant="body2">careers</Typography>
                        <Typography variant="body2">Jobs</Typography>
                        <Typography variant="body2">In Press</Typography>

                    </div>
                    <div className='content'>
                        <Typography variant="h6">Quick Links</Typography>
                        <Typography variant="body2">Refund Policy</Typography>
                        <Typography variant="body2">Documentation</Typography>
                        <Typography variant="body2">Chat Online</Typography>
                        <Typography variant="body2">Order Cencel</Typography>
                        <Typography variant="body2">Privacy Policy</Typography>
                    </div>
                    <div className='content'>
                        <Typography variant="h6">Support</Typography>
                        <Typography variant="body2">Contact Us</Typography>
                        <Typography variant="body2">Online Chat</Typography>
                        <Typography variant="body2">Whatsapp</Typography>
                        <Typography variant="body2">Telegram</Typography>
                        <Typography variant="body2">Ticketing</Typography>
                    </div>
                    <div className='content'>
                        <Typography variant="h6">Subscribe For Newsletter</Typography>
                        <small>
                            Be the first one to know about disc ounts, offers and events. Unsuscribe whenevery you like.
                        </small>
                        <form action="/" method="get" className='search'>
                            <label htmlFor="header-search">
                                <span className="visually-hidden">Search blog posts</span>
                            </label>
                            <input
                                type="text"
                                id="header-search"
                                placeholder="Enter Your email"
                                name="s"

                            />
                            <button type="submit">Subscribe Now</button>

                        </form>
                        <IconButton sx={{ gap: '1rem' }}>
                            <WhatsAppIcon sx={{ fontSize: 35, bgcolor: 'white', borderRadius: 50, padding: '5px', color: 'rgb(255,103,82)' }} />
                            <YouTubeIcon sx={{ fontSize: 35, bgcolor: 'white', borderRadius: 50, padding: '5px', color: 'rgb(255,103,82)' }} />
                            <FacebookIcon sx={{ fontSize: 35, bgcolor: 'white', borderRadius: 50, padding: '5px', color: 'rgb(255,103,82)' }} />
                            <TwitterIcon sx={{ fontSize: 35, bgcolor: 'white', borderRadius: 50, padding: '5px', color: 'rgb(255,103,82)' }} />
                        </IconButton>

                    </div>
                </div>

            </div>

            <Divider sx={{ color: 'white', width: '100%' }}></Divider>

            <div>
                <Typography sx={{ color: 'white', paddingTop: '1rem' }}>
                    Copyright@Uxaction 2022, All Rights Reserved
                </Typography>
            </div>
        </div>
    );
};

export default Footers;