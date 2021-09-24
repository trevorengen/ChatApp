import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button, Paper } from '@mui/material';
import { useHistory } from 'react-router';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Snackbar } from '@mui/material';
import TitleText from './TitleText';

const Greeting = (props) => {

    const [roomCode, setRoomCode] = useState('');
    const [noRoom, setNoRoom] = useState(false);
    const [error, setError] = useState('');
    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(roomCode);
        axios.get('http://localhost:8000/room/name/' + roomCode, { withCredentials: true })
            .then(room => {
                room = room.data.room;
                const payload = { room: room, userName: Cookies.get('userName') };
                console.log(payload);
                axios.put('http://localhost:8000/api/user/addroom', payload, { withCredentials: true })
                    .then(() => history.push('/chatroom/' + room._id))
                    .catch(err => {
                        if (err.response.data.error === undefined) {
                            setError('You have to be logged in to do that!');
                        } else {
                            setError(err.response.data.error);
                        }
                        setRoomCode('');
                        setNoRoom(true);
                    });
            })
            .catch(error => console.log(error));
    };

    const handleSnackClose = () => {
        setError('');
        setNoRoom(false);
    }

    return (
        <Paper elevation={4} style={{margin: '50px', padding: '100px 0'}}>
            <TitleText />
            <TextField 
                style={{minWidth: '400px', backgroundColor: 'rgba(166, 212, 250, 0.2)', borderRadius: '4px'}}
                type='text'
                value={roomCode}
                onChange={e => setRoomCode(e.target.value)}
                disabled={props.isLoggedIn ? false : true}
                placeholder={props.isLoggedIn ? 'Enter a Room Name' : 'Login or Signup!'}
            />
            <Button
                onClick={e => onSubmit(e)}
                variant='contained'
                style={{marginLeft: '15px', height: '53px', marginTop: '1px'}}
                disabled={props.isLoggedIn ? false : true}
            >Enter</Button>
            <Snackbar message='You are already in this room!' 
                open={noRoom}
                onClose={handleSnackClose} />
            <Snackbar message={error}
                open={noRoom}
                onClose={handleSnackClose} />
        </Paper>
    );
};

export default Greeting;