import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Navigations/Navigation.css';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import { Avatar, Divider, IconButton, ListItemButton, Popover, Typography } from '@mui/material';
import RedeemIcon from '@mui/icons-material/Redeem';
import { Box } from '@mui/system';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import UseAuth from '../../Context/UseAuth';




const Navigation = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const { user, LogOut } = UseAuth()

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <Navbar className='navbar' bg="rgb(37,91,79)" expand="lg" >
                <Container className='navcolor'>
                    <Navbar.Brand className='catagorinav' href="#">Categories</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#pages">Pages</Nav.Link>
                            <NavDropdown title="Instructor" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#instructor">Instructor</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#course" >
                                Course
                            </Nav.Link>
                            <Nav.Link href='#blog' >
                                Blog
                            </Nav.Link>

                            <Link className='navlist' to="/contact">
                                Contact
                            </Link>

                        </Nav>
                        <Form className="d-flex">
                            <FormControl

                                type="search"
                                placeholder="Search Courses"
                                className="me-2"
                                aria-label="Search"
                            >

                            </FormControl>
                            <SearchIcon sx={{
                                position: "absolute",
                                top: "1.2rem",
                                zIndex: '1',
                                marginLeft: '5px',
                                color: "rgb(255,103,82)"
                            }} />
                            <Box>
                                <IconButton sx={{ display: 'flex', gap: '1rem' }}>
                                    {
                                        user?.email && <Avatar
                                            aria-describedby={id}
                                            onClick={handleClick}
                                            sx={{ color: 'white', bgcolor: 'rgb(36,69,61)', padding: '3px', borderRadius: '50%', width: 30, height: 30 }}
                                            alt="Remy Sharp"
                                            src={user.photoURL}

                                        />
                                    }

                                    {/* <Popover
                                        id={id}
                                        open={open}
                                        anchorEl={anchorEl}
                                        onClose={handleClose}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'left',
                                        }}


                                    >
                                        <Box className='profile'>
                                            <Box className='useravatar'>
                                                <Avatar alt="Cindy Baker" sx={{ width: 70, height: 70 }} src={user.photoURL} />
                                            </Box>
                                            <Typography>{user.displayName}</Typography>
                                            <Typography>Staudent ID: 125eget</Typography>
                                            <Button className='buttonProfile' >View Profile</Button>
                                        </Box>
                                        <Divider />
                                        <Box>
                                            <ListItemButton><AnalyticsOutlinedIcon /> Students Analytics</ListItemButton>
                                            <ListItemButton><EmojiEventsOutlinedIcon /> Leader Board</ListItemButton>
                                            <ListItemButton onClick={LogOut} ><LogoutOutlinedIcon /> LogOut</ListItemButton>
                                        </Box>
                                    </Popover> */}

                                </IconButton>
                            </Box>

                            {
                                !user.email ? <Box>
                                    <Link to="/usersignup" style={{ textDecoration: "none" }} >
                                        <Button className='loginbtn' variant="contained" color="white"> Login</Button>
                                    </Link>
                                </Box> :
                                    <Box>
                                        <Link style={{ textDecoration: "none" }} >
                                            <Button onClick={LogOut} className='loginbtn' variant="contained" color="white">LogOut</Button>
                                        </Link>
                                    </Box>

                            }
                            <IconButton>
                                <RedeemIcon sx={{ color: 'white', fontSize: 30, bgcolor: 'rgb(36,69,61)', padding: '3px', borderRadius: '50px' }} />
                            </IconButton>

                        </Form>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation; 