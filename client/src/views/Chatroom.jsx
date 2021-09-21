import { Button, Container, Grid, Stack } from '@mui/material';
import { Box } from '@mui/system';
import { TextField } from '@mui/material';
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { InputAdornment } from '@mui/material';
import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import NavDrawer from '../components/NavDrawer';
import axios from 'axios';
import io from 'socket.io-client';
import Cookies from 'js-cookie';
import { useParams } from 'react-router';
import VideoSquare from '../components/VideoSquare';

const Chatroom = (props) => {

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    }));

    const [socket] = useState(() => io(':8000'));
    const [message, setMessage] = useState('');
    const [allMessages, setAllMessages] = useState([]);
    const [open, setOpen] = useState(false);
    const [loginOpen, setLoginOpen] = useState(false);
    const [registerOpen, setRegisterOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [count, setCount] = useState(0);
    const [userRooms, setUserRooms] = useState([]);
    const { id } = useParams();

    const handleSubmit = (e) => {
        const messageObj = {userName: Cookies.get('userName'), message: message, roomId: id};
        e.preventDefault();
        socket.emit('sendMessage', messageObj);
        setAllMessages([messageObj, ...allMessages]);
        setMessage('');
        axios.post('http://localhost:8000/message/create', messageObj, {withCredentials: true})
            .then(res => res)
            .catch(err => console.log(err.response));
    };

    useEffect(() => {
        axios.get('http://localhost:8000/message/getmessages/' + id, {withCredentials: true})
            .then(messages => {
                setAllMessages(messages.data.messages.reverse())
            })
            .catch(err => console.log(err.response));

        socket.disconnect(true);
        socket.connect();
        socket.on('recieveMessage', (data) => {
            console.log(data);
            axios.get('http://localhost:8000/message/getmessages/' + data, {withCredentials: true})
                .then(messages => {
                    setAllMessages([...messages.data.messages.reverse()])
                })
                .catch(err => console.log(err.response));
        });
        socket.emit('join', id);

        return () => socket.disconnect(true);
    }, [id, socket]);

    return (
        <>
            <NavBar pageHeader={''} setOpen={setOpen} open={open} setLoginOpen={setLoginOpen} loginOpen={loginOpen} 
            registerOpen={registerOpen} setRegisterOpen={setRegisterOpen} isLoggedIn={isLoggedIn}
            count={count} setCount={setCount} userRooms={userRooms} setUserRooms={setUserRooms}
            pageHeader={'test'} />

            <NavDrawer open={open} setOpen={setOpen} userRooms={userRooms} setUserRooms={setUserRooms} />
            <Container maxWidth='xlg'>
                <Grid container spacing={2}>
                    <Grid item xs={6} lg={4} xlg={2}>
                        <Stack style={{minHeight: '600px', minWidth: '400px',
                        backgroundColor: '#dce7e8', maxHeight: '600px',
                        marginTop: '40px', overflowY: 'auto',
                        borderRadius: '10px', padding: '30px', display: 'flex',
                        flexDirection: 'column-reverse'}}>
                            <VideoSquare />
                        </Stack>
                    </Grid>
                    <Grid item xs={6} lg={8} xlg={10}> 
                        <Box 
                        style={{minHeight: '600px', minWidth: '300px',
                        backgroundColor: '#dce7e8', maxHeight: '600px',
                        marginTop: '40px', overflowY: 'auto',
                        borderRadius: '10px', padding: '30px', display: 'flex',
                        flexDirection: 'column-reverse'}}>
                            <Stack
                                direction='column-reverse'
                                justifyContent='space-evenly'
                                alignItems='stretch'
                                spacing={2}
                                style={{}}>
                                    {allMessages.slice(0,40).map((message, index) => {
                                        return (<Item key={index}>
                                            <h4 style={{marginLeft: '5px'}}>{message.userName} - <small>{message.createdAt ? new Date(message.createdAt).toLocaleString() : new Date().toLocaleString()}</small></h4>
                                            <p style={{marginLeft: '10px'}}>{message.message}</p>
                                        </Item>)
                                    })}

                            </Stack>
                        </Box>
                        <TextField
                            focused
                            fullWidth
                            id="outlined-multiline-flexible"
                            multiline
                            maxRows={4}
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">
                                    <Button variant='contained' onClick={e => handleSubmit(e)}>Submit</Button>
                                    </InputAdornment>,
                            }}
                        />
                    
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Chatroom;