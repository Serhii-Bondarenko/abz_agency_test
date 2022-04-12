import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './userList.css';
import { getAllUsers, setNextPage } from '../../store';
import { UserCard } from '../UserCard/UserCard';
import { Loader } from '../Loader/Loader';
import { constants } from '../../configs';


const UserList = () => {
    const dispatch = useDispatch();
    const [flag, setFlag] = useState(false);

    const {
        users,
        status,
        currentPage,
        totalPages,
        responseStatus
    } = useSelector(state => state[constants.REDUCER]);

    useEffect(() => {
        dispatch(getAllUsers({page: currentPage}));
        currentPage === 1 && setFlag(false);
    }, [currentPage, responseStatus])

    const toNextPage = () => {
        if (currentPage === totalPages) {
            setFlag(!flag);

            return;
        }

        dispatch(setNextPage());
    }

    return (
        <div className='user__container flex container'>
            <h2 id='users'>Working with GET request</h2>
            <div className='user__list flex wrap'>
                {
                    users.map(user => <UserCard key={ user.id } user={ user }/>)
                }
            </div>
            {
                status === constants.PENDING && <Loader/>
            }
            <button disabled={ flag } className='btn' onClick={ toNextPage }>
                Show more
            </button>
        </div>
    );
};

export { UserList };