import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const Greeting = () => {

    const [roomCode, setRoomCode] = useState('');

    return (
        <div>
            <h1 style={{marginTop: '150px'}}>Sign in or Enter a Room Code to Get Started</h1>
            <TextField 
                style={{minWidth: '400px'}}
                type='text'
                value={roomCode}
                onChange={e => setRoomCode(e.target.value)}
            />
            <Button
                variant='contained'
                style={{marginLeft: '15px', height: '53px', marginTop: '1px'}}
            >Enter</Button>
        </div>
    );
};

export default Greeting;