import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <div className='header-title'>
               <h2 > wahi dental<br /> <span>
                 <h3>Studio</h3>  </span>  </h2>
               
                   
                </div> 
            <div className='header-links'>
                <Link to="/home">Home</Link>
                <Link to="/services">Service</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/about">About</Link>
               
            </div> 
            <Link to="/login">Login</Link>
        </div>
    );
};

export default Header;