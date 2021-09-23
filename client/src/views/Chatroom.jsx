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
import CreateRoom from '../components/CreateRoom';
import Cookies from 'js-cookie';
import { useParams } from 'react-router';
import NameMenu from '../components/NameMenu';
import VideoSquare from '../components/VideoSquare';
import CallDialog from '../components/CallDialog';

const Chatroom = (props) => {

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    }));

    const [socket] = useState(() => io('http://localhost:8000'));
    const [allMessages, setAllMessages] = useState([]);
    const [open, setOpen] = useState(false);
    const [loginOpen, setLoginOpen] = useState(false);
    const [registerOpen, setRegisterOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [count, setCount] = useState(0);
    const [userRooms, setUserRooms] = useState([]);
    const [roomInfo, setRoomInfo] = useState('');
    const [caller, setCaller] = useState('');
    const [callOpen, setCallOpen] = useState(false);
    const { id } = useParams();

    const handleSubmit = (e) => {
        var messageBox = document.getElementById('messageBox');
        if (messageBox.value === '') {
            e.preventDefault();
            return;
        }
        const messageObj = { userName: Cookies.get('userName'), message: messageBox.value, roomId: id };
        e.preventDefault();
        socket.emit('sendMessage', messageObj);
        setAllMessages([messageObj, ...allMessages]);
        messageBox.value = '';
        axios.post('http://localhost:8000/message/create', messageObj, { withCredentials: true })
            .then(res => res)
            .catch(err => console.log(err.response));
    };

    useEffect(() => {

        socket.disconnect(true);
        socket.connect();

        axios.get('http://localhost:8000/room/' + id, { withCredentials: true })
            .then(room => {
                setRoomInfo(room.data.room);
            })
            .catch(err => console.log(err));

        axios.get('http://localhost:8000/message/getmessages/' + id, { withCredentials: true })
            .then(messages => {
                setAllMessages(messages.data.messages.reverse())
            })
            .catch(err => console.log(err.response));
        
        socket.on('connect', () => {
            console.log(socket.id);
            axios.put('http://localhost:8000/api/user/updatesocket', { userName: Cookies.get('userName'), socket: socket.id }, { withCredentials: true })
                .then(user => user)
                .catch(err => console.log(err));
        })

        socket.on('recieveMessage', (data) => {
            axios.get('http://localhost:8000/message/getmessages/' + data, { withCredentials: true })
                .then(messages => {
                    setAllMessages([...messages.data.messages.reverse()])
                })
                .catch(err => console.log(err.response));
        });

        socket.on('recieving_call', (caller) => {
            setCaller(caller);
            setCallOpen(true);
        })

        socket.emit('join', id);

        return () => socket.disconnect(true);
    }, [id, socket]);

    return (
        <>
            <NavBar setOpen={setOpen} open={open} setLoginOpen={setLoginOpen} loginOpen={loginOpen} 
            registerOpen={registerOpen} setRegisterOpen={setRegisterOpen} isLoggedIn={isLoggedIn}
            count={count} setCount={setCount} userRooms={userRooms} setUserRooms={setUserRooms} setLoggedIn={setIsLoggedIn}
            pageHeader={roomInfo.isDm ? (roomInfo.host === Cookies.get('userName') ? roomInfo.users[1] : roomInfo.host) : roomInfo.roomName} />
            <CreateRoom newRoomOpen={props.newRoomOpen} setNewRoomOpen={props.setNewRoomOpen} setOpen={setOpen} />
            <NavDrawer open={open} setOpen={setOpen} userRooms={userRooms} setUserRooms={setUserRooms}
                isLoggedIn={isLoggedIn} newRoomOpen={props.newRoomOpen} setNewRoomOpen={props.setNewRoomOpen} />
            <Container maxWidth='xlg'>
                <Grid container spacing={3} alignItems='stretch'>
                    {roomInfo.isDm ? (<Grid item xlg={2} lg={4} md={6} sm={12} xs={12}><VideoSquare socket={socket} style={{marginRight: '30px'}} roomInfo={roomInfo} /></Grid>) : ''}
                    <Grid item xlg={roomInfo.isDm ? 12 : 10} lg={roomInfo.isDm ? 8 : 12} md={roomInfo.isDm ? 6 : 12} sm={roomInfo.isDm ? 12 : 12} xs={roomInfo.isDm ? 12 : 12}>
                    <Box 
                        style={{backgroundColor: '#dce7e8', maxHeight: '500px',
                        marginTop: '40px', overflowY: 'auto', minHeight: '60vh',
                        borderRadius: '10px', padding: '30px', display: 'flex',
                        flexDirection: 'column-reverse'}}>
                            <Stack
                                direction='column-reverse'
                                justifyContent='space-evenly'
                                alignItems='stretch'
                                spacing={2}
                            >
                                    {allMessages.slice(0,40).map((message, index) => {
                                        return (<Item key={index}>
                                            <h4 style={{marginLeft: '5px', display: 'flex', flexFlow: 'row nowrap', alignItems: 'center'}}>
                                                <NameMenu userName={message.userName} socket={socket} />  
                                                <small> - {message.createdAt ? new Date(message.createdAt).toLocaleString() : new Date().toLocaleString()}</small>
                                            </h4>
                                            <p style={{marginLeft: '15px', color: 'black'}}>{message.message}</p>
                                        </Item>)
                                    })}

                            </Stack>
                        </Box>
                        <TextField
                            focused
                            fullWidth
                            multiline
                            id='messageBox'
                            onKeyPress={e => e.key === 'Enter' ? handleSubmit(e) : null}
                            maxRows={4}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">
                                    <Button variant='contained' onClick={e => handleSubmit(e)}>Submit</Button>
                                    </InputAdornment>,
                            }}
                            style={{marginBottom: '40px'}}
                        />   
                        </Grid>        
                </Grid>
            </Container>
            <CallDialog
                open={callOpen}
                caller={caller}
                setCallOpen={setCallOpen}
            />
        </>
    );
};

export default Chatroom;