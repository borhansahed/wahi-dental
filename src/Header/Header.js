import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../Firebase-init';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);

    const handleLogout = () =>{
        signOut(auth);
    }
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
            {
                user ? <button onClick={handleLogout} className='btn btn-outline-primary'>Logout</button> :<Link to="/login">Login</Link>
            }
            
        </div>
    );
};

export default Header;