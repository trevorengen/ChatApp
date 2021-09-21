import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import axios from 'axios';
import Cookies from 'js-cookie';

const NavBar = (props) => {

    const handleDrawerClick = (e) => {
        e.preventDefault();
        props.setOpen(props.open ? false : true);
        axios.get('http://localhost:8000/api/user/name/' + Cookies.get('userName'), { withCredentials: true })
            .then(user => {
                props.setUserRooms(user.data.user.rooms);
            })
            .catch(err => console.log(err));
    }

    const handleLoginClick = (e) => {
        e.preventDefault();
        props.setLoginOpen(props.loginOpen ? false : true);
    };

    const handleRegisterClick = (e) => {
        e.preventDefault();
        props.setRegisterOpen(props.registerOpen ? false : true);
    };

    const handleLogoutClick = (e) => {
        e.preventDefault();
        axios.get('http://localhost:8000/api/user/logout', { withCredentials: true })
            .then(res => {
                props.setCount(props.count + 1);
            })
            .catch(err => console.log(err.response));
    };

    const deleteAll = (e) => {
        e.preventDefault();
        axios.delete('http://localhost:8000/api/user/deleteall', { withCredentials: true })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        onClick={e => handleDrawerClick(e)}
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {props.pageHeader}
                    </Typography>
                    {props.isLoggedIn ? (
                        <>
                            <Button color='inherit' onClick={e => deleteAll(e)}>DELETE ALL</Button>
                            <Button color="inherit" onClick={e => handleLogoutClick(e)}>Logout</Button>
                        </>
                    ) : (
                        <>
                            <Button color="inherit" onClick={e => handleRegisterClick(e)}>Register</Button>
                            <Button color="inherit" onClick={e => handleLoginClick(e)} style={{marginLeft: '50px'}}>Login</Button>
                        </>)}
                  
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default NavBar;