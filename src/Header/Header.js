import React from 'react';
import { useState } from 'react';
import './Header.css'
import NavLinks from './NavLinks';
import {HiMenu } from "@react-icons/all-files/hi/HiMenu";
import { useRef } from 'react';
import UseClickOutSide from './UseClickOutside';
import { useEffect } from 'react';

const Header = () => {
    const [open, setOpen] = useState(false)
    const buttonRef = useRef(null);
    const hamburgerMenu = useRef(null);

// UseClickOutSide(buttonRef , ()=> setOpen(false))
useEffect(()=>{
   let handler = event =>{
    if(hamburgerMenu.current.contains(event.target)){
         setOpen(true)
    }
   else if(!buttonRef.current.contains(event.target)){
      setOpen(false)
    }

   }
  document.body.addEventListener('click', handler);
  
  return()=>{
    document.body.removeEventListener('click', handler)
  }
},[])

    

    return (
        <div  className='header-container'>
            <div className='header-title'>
              <div ref={buttonRef} >
              <p  onClick={()=> setOpen(!open)} className='lg:hidden menu'>
                  <HiMenu></HiMenu>
                  
                </p>
              </div>
               
               <h2 onClick={()=> setOpen(false)}> wahi dental<br /> <span>
                 <h3>Studio</h3>  </span> </h2>
               
                   
                </div> 
                <div className='navLink'>
                  <NavLinks/>  
                </div>
                
         <div ref={hamburgerMenu} className='hamburger-menu'>
    {open && <NavLinks/>}
</div>
            
    
       
    
              

           
          
            
        </div>
    );
};

export default Header;