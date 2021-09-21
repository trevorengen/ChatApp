import React, { useState, useEffect } from 'react';

const VideoSquare = () => {

    const constraints = {
        video: {width: {exact: 480}, height: {exact: 320}},
        audio: true,
    }

    useEffect(() => {
        const video = document.querySelector("video");
        navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
            video.srcObject = stream;
        });

    }, []);

    return (
        <video autoPlay>
            
        </video>
    );
};

export default VideoSquare;