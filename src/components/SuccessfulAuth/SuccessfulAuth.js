import React from 'react';

import './successfulAuth.css';
import img from '../../assets/img/success-image.svg';

const SuccessfulAuth = () => {
    return (
        <div className='auth__success'>
            <h2>User successfully registered</h2>
            <img src={ img } alt='success-image'/>
        </div>
    );
};

export { SuccessfulAuth };