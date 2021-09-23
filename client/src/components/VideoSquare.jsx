import { Button, Grid, MenuItem, Select } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { TextField } from '@mui/material';
import { Box } from '@mui/system';

const VideoSquare = (props) => {

    const constraints = {
        video: { width: 480, height: 320},
        audio: true,
    }
    const configuration = { iceServers: [
        { urls: 'stun:stun.l.google.com:19302' },
        { urls: 'stun:stun1.l.google.com:19302' },
    ]};
    const [roomId, setRoomId] = useState(props.roomInfo._id);
    const [effect, setEffect] = useState('');
    const [effectValue, setEffectValue] = useState(1);

    const handleChange = (event) => {
        setEffectValue(1);
        setEffect(event.target.value);
    };

    const handleValueChange = (event) => {
        setEffectValue(event.target.value);
    }

    const handleCall = async (e) => {
        e.preventDefault();
        var localVid = document.getElementById('localVid');
        try {
            var stream = await navigator.mediaDevices.getUserMedia(constraints)
            localVid.srcObject = stream;
        } catch (err) {
            console.log('Error getting local media.', err);
        };
        props.socket.emit('call', roomId);
    }

    useEffect(() => {
        var rtcPeerConnection = new RTCPeerConnection(configuration);
        var localStream;
        const remoteStream = document.getElementById('remoteVid');
        setRoomId(props.roomInfo._id);

        props.socket.on('call', async () => {
            await setLocalStream(constraints);
            console.log('client call');
            rtcPeerConnection.ontrack = setRemoteStream;
            rtcPeerConnection.onicecandidate = sendIceCandidate;
            await createOffer(rtcPeerConnection);
            console.log('Client call event end.');
        });

        props.socket.on('offer', async (event) => {
            console.log('Client offer event start.');
            await setLocalStream(constraints);
            rtcPeerConnection.ontrack = setRemoteStream;
            await rtcPeerConnection.setRemoteDescription(new RTCSessionDescription(event));
            rtcPeerConnection.onicecandidate = sendIceCandidate;                
            await createAnswer(rtcPeerConnection);
            console.log('Client offer event end.');
            
        });

        props.socket.on('answer', (event) => {
            console.log('Client answer event start.');
            rtcPeerConnection.setRemoteDescription(new RTCSessionDescription(event));
            console.log('Client answer event end.');
        });

        props.socket.on('ice_candidate', (event) => {
            console.log('Client ice candidate event start.');
            var candidate = new RTCIceCandidate({
                sdpMLineIndex: event.label,
                candidate: event.candidate,
            });
            console.log(candidate);
            rtcPeerConnection.addIceCandidate(candidate);
        });

        // FUNCTIONS BELOW

        async function setLocalStream(constraints) {
            let stream;
            let localVid = document.getElementById('localVid');
            try {
                stream = await navigator.mediaDevices.getUserMedia(constraints)
                localStream = stream;
                localVid.srcObject = stream;
            } catch (err) {
                console.log('Error getting local media.', err);
            };
            addLocalTracks(rtcPeerConnection);
            localVid.srcObject = stream;
        };

        function addLocalTracks(rtcPeerConnection) {
            console.log(localStream);
            localStream.getTracks().forEach((track) => {
                rtcPeerConnection.addTrack(track, localStream);
            });
        };
          
        async function createOffer(rtcPeerConnection) {
            let sessionDescription;
            try {
                sessionDescription = await rtcPeerConnection.createOffer();
                rtcPeerConnection.setLocalDescription(sessionDescription);
            } catch (error) {
                console.error(error);
            };
          
            props.socket.emit('offer', {
                type: 'offer',
                sdp: sessionDescription,
                roomId,
            });
        };
          
        async function createAnswer(rtcPeerConnection) {
            let sessionDescription;
            try {
                sessionDescription = await rtcPeerConnection.createAnswer();
                rtcPeerConnection.setLocalDescription(sessionDescription);
            } catch (error) {
                console.error(error);
            };
          
            props.socket.emit('answer', {
                type: 'answer',
                sdp: sessionDescription,
                roomId,
            });
        };
          
        function setRemoteStream(event) {
            remoteStream.srcObject = event.streams[0];
            console.log(event);
        };
          
        function sendIceCandidate(event) {
            if (event.candidate) {
                props.socket.emit('ice_candidate', {
                    roomId,
                    label: event.candidate.sdpMLineIndex,
                    candidate: event.candidate.candidate,
              });
            };
        };

    }, []);

    return (
        <Box 
            style={{minHeight: '65vh', minWidth: '300px',
            backgroundColor: '#dce7e8', maxHeight: '600px',
            marginTop: '40px', overflowY: 'none', alignItems: 'space-evenly',
            borderRadius: '10px', padding: '30px', display: 'flex', justifyContent: 'space-evenly',
            flexDirection: 'column'}}
        >
            <video id='remoteVid' autoPlay preload='auto' controls style={{margin: '10px 0', borderRadius: '15px'}}>
            </video>

            <video id='localVid' autoPlay preload='auto' controls 
                style={{margin: '10px 0', borderRadius: '15px', 
                WebkitFilter: effect === 'blur' ? 'blur('+effectValue+'px)' :  
                effect === 'grayscale' ? 'grayscale('+effectValue+')' : 
                effect === 'saturate' ? 'saturate('+effectValue+')' :
                effect === 'negative' ? 'invert('+effectValue+')' : 
                effect === 'sepia' ? 'sepia('+effectValue+')' :
                effect === 'contrast' ? 'contrast('+effectValue+')' : ''}}
            >
            </video>
            <Grid container spacing={1}>
                <Grid item xs={9}>
                    <Select
                        style={{width: '100%'}}
                        value={effect}
                        onChange={handleChange}
                        label='Effects'
                        id='select-effects'
                        variant='filled'
                    >
                        <MenuItem value='' defaultChecked>None</MenuItem>
                        <MenuItem value='blur'>Blur</MenuItem>
                        <MenuItem value='grayscale'>Black & White</MenuItem>
                        <MenuItem value='saturate'>Saturate</MenuItem>
                        <MenuItem value='negative'>Negative</MenuItem>
                        <MenuItem value='contrast'>Contrast</MenuItem>
                    </Select>
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        id="standard-number"
                        value={effectValue}
                        onChange={handleValueChange}
                        label="Value"
                        type="number"
                        inputProps={{min: '0', max: '50', step: '0.1'}}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        style={{width: '90%'}}
                        variant="filled"
                    />
                </Grid>
            </Grid>
            <Button onClick={e => handleCall(e)} variant='contained' color='secondary'>Call</Button>
        </Box>
    );
};

export default VideoSquare;