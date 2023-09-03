import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='font-bold '>
            <Link className='mx-2' to="/">Home</Link>
            <Link className='mx-2' to="/review">Order Review</Link>
            <Link className='mx-2' to="/about">About</Link>
            <Link className='mx-2' to="/contact">Contact</Link>
        </nav>
    );
};

export default Header;