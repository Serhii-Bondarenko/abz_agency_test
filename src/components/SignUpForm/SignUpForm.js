import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { joiResolver } from '@hookform/resolvers/joi';

import './signUpForm.css';
import { createUser, getUserPositions } from '../../store';
import { SuccessfulAuth } from '../SuccessfulAuth/SuccessfulAuth';
import { constants } from '../../configs';
import { authFormSchema } from '../../validator';
import { formDataBuilder } from '../../helpers';
import { AuthUserInfoFields } from './AuthUserInfoFields/AuthUserInfoFields';
import { AuthUserPosition } from './AuthUserPosition/AuthUserPosition';
import { AuthUploadPhoto } from './AuthUploadPhoto/AuthUploadPhoto';
import { Loader } from '../Loader/Loader';

const SignUpForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid }
    } = useForm({ resolver: joiResolver(authFormSchema), mode: 'onChange' });

    const invalidUpload = useRef();

    const [fileName, setFileName] = useState(constants.UPLOAD);
    const [uploadPrompt, setUploadPrompt] = useState(constants.NOPHOTO);
    const [flag, setFlag] = useState(false);
    const [creatingErr, setCreatingErr] = useState(null);

    const dispatch = useDispatch();
    const { status, error, positions, responseStatus } = useSelector(state => state[constants.REDUCER]);

    useEffect(() => {
        dispatch(getUserPositions());
    }, [])

    const submitHandler = () => {
        //  user was created, after send error - null and render success component
        if (responseStatus?.user_id) {
            setFlag(!flag);

            setTimeout(() => {
                setFlag(false);
            }, 10000);

            setCreatingErr(null);
            setFileName(constants.UPLOAD);
            setUploadPrompt(constants.NOPHOTO);
            reset();

            for (const child of invalidUpload.current.children) {
                child.classList.remove('invalid__upload');
            }

            return;
        }
        //  request was rejected, set error
        setCreatingErr(responseStatus);
        if (responseStatus?.fails) {
            for (const child of invalidUpload.current.children) {
                child.classList.add('invalid__upload');
            }
        }
    }

    useEffect(() => {
        submitHandler();
    }, [responseStatus])

    const chooseFile = (e) => {
        setFileName(e.target.files[0]?.name);
        setUploadPrompt('');
    }

    const errorDecoration = (e) => {
        // catch error
        if (errors[e.target.name]) {
            e.target.classList.add('error__border');
            e.target.previousElementSibling.style.color = '#CB3D40';

            return;
        }
        // clear field
        e.target.classList.remove('error__border');
        e.target.previousElementSibling.style.color = '#7E7E7E';
    }

    const inputStyling = (e) => {
        errorDecoration(e);

        if (e.target.value) {
            e.target.previousElementSibling.style.display = 'block';

            return;
        }

        e.target.previousElementSibling.style.display = 'none';
    }

    const submit = (data) => {
        const user = formDataBuilder(data);
        dispatch(createUser({ user }));
    }

    return (
        <div className='auth__container flex container'>
            <h2 id='auth'>Working with POST request</h2>
            {
                flag && !error ? <SuccessfulAuth/> :
                <form className='auth__form flex' onSubmit={ handleSubmit(submit) }>
                    <AuthUserInfoFields
                        register={ register }
                        inputStyling={ inputStyling }
                        errorDecoration={ errorDecoration }
                        errors={ errors }
                    />
                    <AuthUserPosition
                        positions={ positions }
                        register={ register }
                        errors={ errors }
                    />
                    <div className='server__error'>
                        {
                            status === constants.PENDING ? <Loader/> : creatingErr ?
                            <p className='error__txt'>{ creatingErr.fails ?
                                creatingErr.fails.photo : creatingErr.message }</p> : null
                        }
                    </div>
                    <AuthUploadPhoto
                        register={ register }
                        chooseFile={ chooseFile }
                        errorDecoration={ errorDecoration }
                        invalidUpload={ invalidUpload }
                        fileName={ fileName }
                        errors={ errors }
                        uploadPrompt={ uploadPrompt }
                    />
                    <button className='btn' disabled={ !isValid }>Sign up</button>
                </form>
            }
        </div>
    );
};

export { SignUpForm };