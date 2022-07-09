import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../Firebase-init';
import './Header.css'

const NavLinks = () => {
    const [user] = useAuthState(auth)

    
    const handleLogout = () =>{
        signOut(auth);
    }
    return (
        <div className='header-container header-links-container lg:shadow-none shadow-xl'>
        

        
        <div className='header-links'>
                <Link to="/home">Home</Link>
                <Link to="/services">Service</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/about">About</Link>
               
            </div> 
           
            <div className='login-button'>
            {
                user ? <button onClick={handleLogout} className='btn btn-outline-primary '>Logout</button> :<Link to="/login">Login</Link>
            }
            </div>

      
           
        </div>
              
        
    );
};

export default NavLinks;