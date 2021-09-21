import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import { useHistory } from 'react-router';

const LoginDialog = (props) => {

    const [info, setInfo] = useState({ email: '', password: '' });
    const [error, setError] = useState('');

    const close = () => {
        setInfo({ email: '', password: '' });
        props.setLoginOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/user/login', info, { withCredentials: true })
            .then(res => {
                props.setCount(props.count + 1);
                props.setLoginOpen(false);
                console.log(res);
            })
            .catch(err => {
                setError(err.response.data);
            })
    }

    return (
        <Dialog open={props.loginOpen} onClose={close}>
            <DialogContent>
                <DialogTitle>Login</DialogTitle>
                <DialogContentText>
                    Login with your email and password to begin.<br></br>
                    <small style={{color: 'red'}}>{error}</small>
                </DialogContentText>
                <TextField
                    autoFocus
                    margin='dense'
                    id='email'
                    label='Email Address'
                    type='email'
                    variant='standard'
                    value={info.email}
                    onChange={e => setInfo({ ...info, email: e.target.value })}
                />
                <TextField
                    margin='dense'
                    id='password'
                    label='Password'
                    type='password'
                    variant='standard'
                    value={info.password}
                    onChange={e => setInfo({ ...info, password: e.target.value })}
                    style={{marginLeft: '10px'}}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={close}>Cancel</Button>
                <Button onClick={e => handleSubmit(e)} variant='contained'>Submit</Button>
            </DialogActions>
        </Dialog>
    );
};

export default LoginDialog;