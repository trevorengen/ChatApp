import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useHistory } from 'react-router';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Snackbar } from '@mui/material';

const Greeting = () => {

    const [roomCode, setRoomCode] = useState('');
    const [noRoom, setNoRoom] = useState(false);
    const [error, setError] = useState('');
    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
        axios.get('http://localhost:8000/room/name/' + roomCode)
            .then(room => {
                room = room.data.room;
                const payload = { room: room, userName: Cookies.get('userName') };
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
        <div>
            <h1 style={{marginTop: '150px'}}>Sign Up Then Enter a Room Code to Get Started</h1>
            <TextField 
                style={{minWidth: '400px'}}
                type='text'
                value={roomCode}
                onChange={e => setRoomCode(e.target.value)}
            />
            <Button
                onClick={e => onSubmit(e)}
                variant='contained'
                style={{marginLeft: '15px', height: '53px', marginTop: '1px'}}
            >Enter</Button>
            <Snackbar message='You are already in this room!' 
                open={noRoom}
                onClose={handleSnackClose} />
            <Snackbar message={error}
                open={noRoom}
                onClose={handleSnackClose} />
        </div>
    );
};

export default Greeting;