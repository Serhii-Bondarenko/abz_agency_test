import React from 'react';
import { Link } from 'react-scroll';

import './header.css';
import Logo from '../../assets/img/Logo.svg';

const Header = () => {
    return (
        <div>
            <div className='header__nav'>
                <div className='container flex'>
                    <img className='header__logo' src={ Logo } alt='Logo'/>
                    <div className='header__btn flex'>
                        <Link smooth={ true } duration={ 1000 } to='users'>
                            <button className='btn'>Users</button>
                        </Link>
                        <Link smooth={ true } duration={ 1000 } to='auth'>
                            <button className='btn'>Sign up</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='header__caption flex container'>
                <div className='header__caption-inner'>
                    <h1>Test assignment for front-end developer</h1>
                    <p>
                        What defines a good front-end developer is one that has skilled knowledge
                        of HTML, CSS, JS with a vast understanding of User design thinking as they'll
                        be building web interfaces with accessibility in mind. They should also be excited to learn,
                        as the world of Front-End Development keeps evolving.
                    </p>
                    <Link smooth={ true } duration={ 1000 } to='auth'>
                        <button className='btn'>Sign up</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export { Header };