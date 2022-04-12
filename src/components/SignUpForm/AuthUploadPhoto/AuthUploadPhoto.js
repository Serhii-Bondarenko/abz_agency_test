import React from 'react';

import '../signUpForm.css';
import './authUploadPhoto.css';

const AuthUploadPhoto = (props) => {

    const {
        register,
        chooseFile,
        errorDecoration,
        invalidUpload,
        fileName,
        errors,
        uploadPrompt
    } = props;

    return (
        <div className='auth__user-photo'>
            <input className='auth__upload' id='file' type='file' placeholder='Upload your photo' {
                ...register('photo', {
                    onChange: e => chooseFile(e),
                    onBlur: e => errorDecoration(e),
                    value: true
                })}/>
            <label ref={ invalidUpload } htmlFor='file' className='flex'>
                <div className='upload__btn'>Upload</div>
                <div className='upload__input'>{ fileName }</div>
            </label>
            {
                !errors.photo ? <p className='error__txt'>{ uploadPrompt }</p> :
                <p className='error__txt'>{ errors.photo.message }</p>
            }
        </div>
    );
};

export { AuthUploadPhoto };