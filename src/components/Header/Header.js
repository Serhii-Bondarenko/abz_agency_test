import React from 'react';
import { Link } from 'react-scroll';

import './header.css';
import Logo from '../../img/Logo.svg';
import Caption from '../../img/pexels.jpeg';

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
                            <button className='btn'>Sign Up</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='header__caption flex container' style={
                {
                    backgroundImage: `linear-gradient(0deg, rgb(0, 0, 0, 0.5), rgb(0, 0, 0, 0.5)), url(${Caption})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }
            }>
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