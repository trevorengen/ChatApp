import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useHistory } from 'react-router';
import { Switch, FormGroup, FormControlLabel } from '@mui/material';

const NavBar = (props) => {

    const history = useHistory();

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
            .then(() => {
                props.setLoggedIn(false);
                history.push('/');
            })
            .catch(err => console.log(err.response));
    };

    const goHome = (e) => {
        e.preventDefault();
        history.push('/');
    };

    const handleSwitch = (e) => {
        if (props.darkMode) {
            props.setDarkMode(false);
        } else {
            props.setDarkMode(true);
        }
    }

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
                    <FormGroup>
                        <FormControlLabel style={{fontFamily: 'Open Sans', paddingTop: '1px', marginRight: '30px'}} 
                        control={<Switch color='secondary' defaultChecked={false}
                        checked={props.darkMode} onChange={e => handleSwitch(e)} />} label="DARKMODE" />
                    </FormGroup>
                    {props.isLoggedIn ? (
                        <>
                            {props.dashboard ? '' : <Button color='inherit' onClick={e => goHome(e)} style={{marginRight: '30px'}}>Home</Button>}
                            <Button color="inherit" onClick={e => handleLogoutClick(e)}>Logout</Button>
                        </>
                    ) : (
                        <>
                            {props.dashboard ? '' : <Button color='inherit' onClick={e => goHome(e)}>Home</Button>}
                            <Button color="inherit" onClick={e => handleRegisterClick(e)}>Register</Button>
                            <Button color="inherit" onClick={e => handleLoginClick(e)} style={{marginLeft: '50px'}}>Login</Button>
                        </>)}
                  
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default NavBar;