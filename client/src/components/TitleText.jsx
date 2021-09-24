import { Typography } from '@mui/material';
import React, { useEffect } from 'react'
import Typical from 'react-typical'

const TitleText = () => {

    return (
        <Typography variant='h1' style={{height: '150px', margin: '50px 0'}}>
            <Typical 
                steps={['Hi', 1000, 'Welcome to viddy chat', 2000]}
                loop={1}
                wrapper='p'
            />
        </Typography>);
};

export default TitleText;