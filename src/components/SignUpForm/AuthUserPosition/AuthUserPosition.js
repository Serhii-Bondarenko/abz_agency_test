import React from 'react';

import '../signUpForm.css';
import './authUserPosition.css';

const AuthUserPosition = (props) => {

    const { positions, register, errors } = props;

    return (
        <div className='auth__user-position flex'>
            <p>Select your position</p>
            {
                positions.map(position => <label className='flex' htmlFor={ position.name } key={ position.id }>
                    <input
                        type="radio"
                        id={ position.name }
                        value={ position.id }
                        {...register('position_id')}
                    />
                    { position.name }
                </label>)
            }
            {
                errors.position_id && <p className='error__txt'>{ errors.position_id.message }</p>
            }
        </div>
    );
};

export { AuthUserPosition };