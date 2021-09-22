import Cookies from 'js-cookie';
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const VideoSquare = (props) => {

    const constraints = {
        video: {width: {exact: 480}, height: {exact: 320}},
        audio: true,
    }
    const configuration = { iceServers: [
        { urls: 'stun:stun.l.google.com:19302' },
        { urls: 'stun:stun1.l.google.com:19302' },
        { urls: 'stun:stun2.l.google.com:19302' },
        { urls: 'stun:stun3.l.google.com:19302' },
        { urls: 'stun:stun4.l.google.com:19302' },
    ]};
    const [socket] = useState(() => io(':8000'));
    let rtcPeerConnection;
    let localStream;
    let remoteStream;
    let roomId;
    let callHost;

    useEffect(() => {

        roomId = props.roomInfo._id;

        setLocalStream(constraints);

        socket.on('call', async () => {
            if (callHost === Cookies.get('userName')) {
                rtcPeerConnection = new RTCPeerConnection(configuration);
                addLocalTracks(rtcPeerConnection);
                rtcPeerConnection.ontrack = setRemoteStream;
                rtcPeerConnection.onicecandidate = sendIceCandidate;
                await createOffer(rtcPeerConnection);
            };
        });

        socket.on('offer', async (event) => {
            if(callHost !== Cookies.get('userName')) {
                rtcPeerConnection = new RTCPeerConnection(configuration);
                addLocalTracks(rtcPeerConnection);
                rtcPeerConnection.ontrack = setRemoteStream;
                rtcPeerConnection.onicecandidate = sendIceCandidate;
                rtcPeerConnection.setRemoteDescription(new RTCSessionDescription(event));
                await createAnswer(rtcPeerConnection);
            };
        });

        socket.on('answer', (event) => {
            rtcPeerConnection.setRemoteDescription(new RTCSessionDescription(event));
        });

        socket.on('ice_candidate', (event) => {
            var candidate = new RTCIceCandidate({
                sdpMLineIndex: event.label,
                candidate: event.candidate,
            });
        });

        // FUNCTIONS BELOW

        async function setLocalStream(constraints) {
            try {
                let stream = await navigator.mediaDevices.getUserMedia(constraints);
                let localVid = document.getElementById('localVid');
                localVid.srcObject = stream;
            } catch (err) {
                console.log('Error getting local media.', err);
            };
        };

        function addLocalTracks(rtcPeerConnection) {
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
          
            socket.emit('offer', {
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
          
            socket.emit('answer', {
                type: 'answer',
                sdp: sessionDescription,
                roomId,
            });
        };
          
        function setRemoteStream(event) {
            document.getElementById('remoteVid').srcObject = event.streams[0];
            remoteStream = event.stream;
        };
          
        function sendIceCandidate(event) {
            if (event.candidate) {
                socket.emit('ice_candidate', {
                    roomId,
                    label: event.candidate.sdpMLineIndex,
                    candidate: event.candidate.candidate,
              });
            };
        };

    }, []);

    return (
        <div>
            <video id='remoteVid' autoPlay>

            </video>

            <video id='localVid' autoPlay>

            </video>
        </div>
    );
};

export default VideoSquare;