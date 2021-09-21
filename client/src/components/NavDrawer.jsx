import React, { useEffect } from 'react';
import { Divider, Drawer, List, ListItem, Link } from '@mui/material';
import { IconButton } from '@mui/material'; 
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useHistory } from 'react-router';

const NavDrawer = (props) => {

    const history = useHistory();

    const close = () => {
        props.setOpen(false);
    };

    const handleAddOpen = (e) => {
        e.preventDefault();
        props.setNewRoomOpen(true);
    };

    const handleRoomLink = (e, roomId) => {
        e.preventDefault();
        history.push('/chatroom/' + roomId);
    }

    return (
        <Drawer 
            anchor='left'
            elevation={20}
            open={props.open}
            onClose={close}
        >
            <h1 style={{margin: '30px 80px'}}>Your Rooms
                {props.isLoggedIn ? 
                     (
                    <IconButton size='large' variant='contained' color='primary'
                        onClick={e => handleAddOpen(e)}>
                        <AddCircleOutlineIcon />
                    </IconButton>
                    ) : null}
            </h1>
            <Divider />
            <List>
                <h4 style={{margin: '10px'}}>Direct Messages</h4>
            </List>
            <Divider />
            <List>
                <h4 style={{margin: '10px'}}>Chat Rooms</h4>
                {props.userRooms.map((room, idx) => {
                    return (
                        <ListItem key={idx}>
                            <Link underline='hover' component='button' variant='h6'
                            onClick={e => handleRoomLink(e, room._id)}>{room.roomName}</Link>
                        </ListItem>
                    )
                })}
            </List>
        </Drawer>
    );
};

export default NavDrawer;