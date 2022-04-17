import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div>
               <h2> Wahi Dental</h2>
                    <br /><span>Studio</span>
                </div> 
            <div>
                <Link to="/home">Home</Link>
                <Link to="/services">Service</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/about">About</Link>
                <Link to="/login">Login</Link>
            </div>
        </>
    );
};

export default Header;