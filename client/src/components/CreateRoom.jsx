import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useHistory } from 'react-router';

const CreateRoom = (props) => {

    const [roomName, setRoomName] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();

    const close = () => {
        props.setNewRoomOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get('http://localhost:8000/api/user/name/' + Cookies.get('userName'))
            .then(user => {
                axios.post('http://localhost:8000/room/create', { 
                    roomName: roomName, 
                    users: [user.data.user], 
                    isDm: false, 
                    host: user.data.user}, 
                    { withCredentials: true })
                .then(room => {
                    axios.put('http://localhost:8000/api/user/addroom', { room: room.data.room, userName: Cookies.get('userName') }, { withCredentials: true })
                        .then(rooms => console.log(rooms))
                        .catch(err => console.log(err.response));
                    history.push('/chatroom/'+room.data.room._id);
                    close();
                    setRoomName('');
                    props.setOpen(false);
                })
                .catch(err => setError(err.response))
            })
            .catch(err => console.log(err));
    };

    return (
        <Dialog open={props.newRoomOpen} onClose={close}>
            <DialogContent>
                <DialogTitle>Create a Room</DialogTitle>
                <DialogContentText>
                    Create a new chatroom to talk with your pals!<br></br>
                    <small style={{color: 'red'}}></small>
                </DialogContentText>
                <TextField
                    error={error === '' ? false : true}
                    helperText={error === '' ? '' : error.data}
                    fullWidth
                    autoFocus
                    margin='dense'
                    id='roomName'
                    label='Room Name'
                    type='text'
                    variant='standard'
                    value={roomName}
                    onChange={e => setRoomName(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={close}>Cancel</Button>
                <Button variant='contained' onClick={e => handleSubmit(e)}>Submit</Button>
            </DialogActions>
        </Dialog>
    );
};

export default CreateRoom;