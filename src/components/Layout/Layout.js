import React from 'react';

import './layout.css';
import { Header } from '../Header/Header';
import { UserList } from '../UserList/UserList';
import { SignUpForm } from '../SignUpForm';

const Layout = () => {
    return (
        <div className='wrapper'>
            <header className='header'>
                <Header/>
            </header>
            <main className='main'>
                <UserList/>
                <SignUpForm/>
            </main>
        </div>
    );
};

export { Layout };