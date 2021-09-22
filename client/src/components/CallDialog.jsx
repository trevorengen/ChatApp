import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import { useHistory } from 'react-router';
import Cookies from 'js-cookie';
import io from 'socket.io-client';

const CallDialog = (props) => {

    const history = useHistory();
    const [socket] = useState(() => io(':8000'));

    const handleClose = (e) => {
        e.preventDefault();
        props.setCallOpen(false);
    };

    const handleAccept = (e) => {
        e.preventDefault();
        axios.get('http://localhost:8000/room/' + props.caller + '/' + Cookies.get('userName'), { withCredentials: true })
            .then(room => {
                history.push('/chatroom/' + room.data.room[0]._id);
                socket.emit('call', room.data.room[0]._id);
            })
            .catch(err => console.log(err));
        props.setCallOpen(false);
    };
    
    return (
        <Dialog open={props.open} onClose={e => handleClose(e)}>
            <DialogTitle>You're recieving a call from {props.caller}!</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Answer it or decline it, the choice is yours.
                </DialogContentText>
            </DialogContent>
            <DialogActions style={{margin: '0 auto'}}>
                <Button onClick={e => handleClose(e)} style={{marginRight: '15px'}}>Decline</Button>
                <Button variant='contained' onClick={e => handleAccept(e)}>Accept</Button>
            </DialogActions>
        </Dialog>
    );
};

export default CallDialog;