import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';

const RegisterDialog = (props) => {

    const [user, setUser] = useState({
        userName: '',
        email: '', 
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState({
        email: '',
        password: '',
        userName: '',
        confirmPassword: '',
    });

    const close = () => {
        props.setRegisterOpen(false);
        setUser({
            userName: '',
            email: '', 
            password: '',
            confirmPassword: '',
        });
    }

    const handleClose = (e) => {
        e.preventDefault();
        props.setRegisterOpen(false);
    };

    const handleRegister = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/user/register', user, { withCredentials: true })
            .then(res => {
                props.setCount(props.count + 1);
                close();
            })
            .catch(err => {
                var errorObj = {};
                var defaultErrors = {
                    email: '',
                    password: '',
                    userName: '',
                    confirmPassword: '',
                };
                for (const [error, message] of Object.entries(err.response.data.error.errors)) {
                    errorObj[error] = message.message;
                };
                setErrors({...defaultErrors, ...errorObj});
            });
    };

    return (
        <Dialog open={props.registerOpen} onClose={close}>
            <DialogContent>
                <DialogTitle>Get Registered</DialogTitle>
                    <DialogContentText>
                        Register below to get started and create your own rooms!
                    </DialogContentText>
                    <div style={{display: 'flex', flexFlow: 'row nowrap', justifyContent: 'space-evenly'}}>
                        <TextField
                            error={errors.userName === '' ? false : true}
                            helperText={errors.userName === '' ? '' : errors.userName}
                            autoFocus
                            margin='dense'
                            id='userName'
                            label='User Name'
                            type='text'
                            variant='standard'
                            value={user.userName}
                            onChange={e => setUser({ ...user, userName: e.target.value })}
                        />
                        <TextField
                            error={errors.email === '' ? false : true}
                            helperText={errors.email === '' ? '' : errors.email}
                            margin='dense'
                            id='email'
                            label='Email'
                            type='email'
                            variant='standard'
                            value={user.email}
                            onChange={e => setUser({...user, email: e.target.value})}
                        />
                    </div>
                    <div style={{display: 'flex', flexFlow: 'row nowrap', justifyContent: 'space-evenly'}}>
                        <TextField
                            error={errors.password === '' ? false : true}
                            helperText={errors.password === '' ? '' : errors.password}
                            margin='dense'
                            id='password'
                            label='Password'
                            type='password'
                            variant='standard'
                            value={user.password}
                            onChange={e => setUser({...user, password: e.target.value})}
                            style={{maxWidth: '200px'}}
                        />
                        <TextField
                            error={errors.confirmPassword === '' ? false : true}
                            helperText={errors.confirmPassword === '' ? '' : errors.confirmPassword}
                            margin='dense'
                            id='confirmPassword'
                            label='Confirm Password'
                            type='password'
                            variant='standard'
                            value={user.confirmPassword}
                            onChange={e => setUser({...user, confirmPassword: e.target.value})}
                        />
                    </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={e => handleClose(e)}>Cancel</Button>
                <Button variant='contained' onClick={e => handleRegister(e)}>Register</Button>
            </DialogActions>
        </Dialog>
    );
};

export default RegisterDialog;