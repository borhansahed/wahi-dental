import React from 'react';
import { useState } from 'react';
import './Header.css'
import NavLinks from './NavLinks';
import {HiMenu } from "@react-icons/all-files/hi/HiMenu";

const Header = () => {
    const [open, setOpen] = useState(false)

    return (
        <div  className='header-container'>
            <div className='header-title'>
                <p className='lg:hidden menu'>
                  <HiMenu onClick={()=> setOpen(!open)}></HiMenu>

                </p>
               
               <h2 onClick={()=> setOpen(false)}> wahi dental<br /> <span>
                 <h3>Studio</h3>  </span> </h2>
               
                   
                </div> 
                <div className='navLink'>
                  <NavLinks/>  
                </div>
                
         <div className='hamburger-menu'>
    {open && <NavLinks/>}
</div>
            
    
       
    
              

           
          
            
        </div>
    );
};

export default Header;