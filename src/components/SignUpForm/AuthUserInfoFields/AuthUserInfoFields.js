import React from 'react';

import '../signUpForm.css';
import './authUserInfoFields.css';

const AuthUserInfoFields = (props) => {

    const { register, inputStyling, errorDecoration, errors } = props;

    return (
        <div className='auth__user-info flex'>
            <div className='auth__input'>
                <label htmlFor='name'>Your name</label>
                <input id='name' type='text' placeholder='Your name' {...register('name',
                    { onChange: e => inputStyling(e), onBlur: e => errorDecoration(e) })
                }/>
                {
                    errors.name && <p className='error__txt'>{ errors.name.message }</p>
                }
            </div>
            <div className='auth__input'>
                <label htmlFor='email'>Email</label>
                <input id='email' type='text' placeholder='Email' {...register('email',
                    { onChange: e => inputStyling(e), onBlur: e => errorDecoration(e) })
                }/>
                {
                    errors.email && <p className='error__txt'>{ errors.email.message }</p>
                }
            </div>
            <div className='auth__input'>
                <label htmlFor='phone'>Phone</label>
                <input id='phone' type='text' placeholder='Phone' {...register('phone',
                    { onChange: (e) => inputStyling(e), onBlur: e => errorDecoration(e) })
                }/>
                {
                    !errors.phone ? <p className='prompt__txt'>+380XXXXXXXXX</p> :
                    <p className='error__txt'>{ errors.phone.message }</p>
                }
            </div>
        </div>
    );
};

export { AuthUserInfoFields };