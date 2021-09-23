import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import NavDrawer from '../components/NavDrawer';
import LoginDialog from '../components/LoginDialog';
import Greeting from '../components/Greeting';
import RegisterDialog from '../components/RegisterDialog';
import axios from 'axios';
import CreateRoom from '../components/CreateRoom';

const Dashboard = (props) => {

    const [open, setOpen] = useState(false);
    const [loginOpen, setLoginOpen] = useState(false);
    const [registerOpen, setRegisterOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [count, setCount] = useState(0);
    const [userRooms, setUserRooms] = useState([{
        roomName: 'Looks lonely!', isDm: true, host: 'Looks lonely!',
    }, {
        roomName: 'No friends?', isDm: false, host: 'NaN',
    }]);

    const whatLinks = () => {
        axios.get('http://localhost:8000/api/user/isloggedin', { withCredentials : true })
            .then(() => {
                setIsLoggedIn(true);
            })
            .catch(setIsLoggedIn(false));
    }

    useEffect(() => {
        whatLinks();
    }, [count]);

    return (
        <>
            <NavBar pageHeader={''} setOpen={setOpen} open={open} setLoginOpen={setLoginOpen} loginOpen={loginOpen} 
                registerOpen={registerOpen} setRegisterOpen={setRegisterOpen} isLoggedIn={isLoggedIn}
                count={count} setCount={setCount} userRooms={userRooms} setUserRooms={setUserRooms}  setLoggedIn={setIsLoggedIn}
                dashboard={true} />
            <NavDrawer open={open} setOpen={setOpen} isLoggedIn={isLoggedIn} 
                newRoomOpen={props.newRoomOpen} setNewRoomOpen={props.setNewRoomOpen}
                userRooms={userRooms} setUserRooms={setUserRooms} />
            <CreateRoom newRoomOpen={props.newRoomOpen} setNewRoomOpen={props.setNewRoomOpen} />
            <LoginDialog loginOpen={loginOpen} setLoginOpen={setLoginOpen} count={count} setCount={setCount}
                setUserName={props.setUserName} />
            <RegisterDialog registerOpen={registerOpen} setRegisterOpen={setRegisterOpen}
                count={count} setCount={setCount} />
            <Greeting />
        </>
        
    );
};

export default Dashboard;