import React from 'react';

import './userCard.css';
import { Tooltip } from '../Tooltip/Tooltip';

const UserCard = ({ user }) => {
    const {
        name,
        email,
        phone,
        position,
        photo
    } = user;

    return (
        <div className='user__card flex'>
            <img src={ photo } alt={ name }/>
            <p>{ name }</p>
            <div className='user__info'>
                <p>{ position }</p>
                <Tooltip content={ email }>
                    <p className='user__email'>{ email }</p>
                </Tooltip>
                <p>{ phone }</p>
            </div>
        </div>
    );
};

export { UserCard };