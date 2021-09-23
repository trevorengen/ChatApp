import React, { useState } from 'react';
import Chip from '@mui/material/Chip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useHistory } from 'react-router';
import { Snackbar } from '@mui/material';

const NameMenu = (props) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const [snack, setSnack] = useState(false);
    const open = Boolean(anchorEl);
    const history = useHistory();

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleSnackClose = () => {
        setSnack(false);
    };

    const handleDm = (targetUser) => {
        axios.get('http://localhost:8000/room/dmroom/' + Cookies.get('userName') + '/' + targetUser)
            .then(rooms => {
                if (rooms.data.room.length === 0) {
                axios.post('http://localhost:8000/room/create', { 
                    roomName: Math.random().toString(36).slice(2), 
                    users: [Cookies.get('userName'), targetUser], 
                    isDm: true,
                    host: Cookies.get('userName'),
                    })
                    .then(room => {
                        console.log();
                        axios.put('http://localhost:8000/api/user/addroom/', { room: room.data.room, userName: Cookies.get('userName') }, { withCredentials: true })
                            .then(rooms => console.log(rooms))
                            .catch(err => console.log(err.response));

                        axios.put('http://localhost:8000/api/user/addroom/', { room: room.data.room, userName: targetUser }, { withCredentials: true })
                            .then(rooms => console.log(rooms))
                            .catch(err => console.log(err.response));

                        history.push('/chatroom/' + room.data.room._id);
                    })
                    .catch(err => console.log(err.response));

                props.socket.emit('sendDm', targetUser)
                } else {
                    setSnack(true);
                    handleClose();
                    history.push('/chatroom/' + rooms.data.room[0]._id);
                }
            })
            .catch(err => console.log(err));
    };

    const handleCall = (targetUser) => {
        handleDm(targetUser);
        axios.get('http://localhost:8000/api/user/name/' + targetUser, { withCredentials: true })
            .then(user => {
                const userInfo = user.data.user;
                props.socket.emit('start_call', { userInfo: userInfo, caller: Cookies.get('userName') });

            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <Chip label={props.userName} 
                component="a" 
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                clickable 
                onClick={handleClick} />
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={() => handleDm(props.userName)}>Direct message</MenuItem>
                <MenuItem onClick={() => handleCall(props.userName)}>Call</MenuItem>
            </Menu>
            <Snackbar message='You already have a DM with this person!' 
                open={snack}
                onClose={handleSnackClose} />
        </div>
    );
};

export default NameMenu;