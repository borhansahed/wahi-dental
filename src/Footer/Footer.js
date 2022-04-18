import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
import { FaFacebook ,FaTwitter ,FaInstagram } from 'react-icons/fa';
const Footer = () => {

    const d = new Date();
    let year = d.getFullYear();
    return (
        <div className='footer-container'>
        
         <div className='footer-secondary-container'>
             <div className='first-section'>
              <p>It is so important to brush your teeth to look after your winning smile! <br /> Smiling is good for your health.</p>
              <div className='footer-icons'>
                  <p><a target='_blank' href="https://www.facebook.com/mohammad.sah.sahed.3"> <FaFacebook ></FaFacebook></a>   </p>
              <p><Link to="https://www.facebook.com/mohammad.sah.sahed.3"><FaTwitter ></FaTwitter></Link> </p>
              <p> <a target='_blank' href="https://www.facebook.com/mohammad.sah.sahed.3"> <FaInstagram></FaInstagram></a>  </p>
              </div>
             

             </div>
             <div className='second-section'>
              <h5 className='mb-3'><strong>Our Services</strong></h5>
              <p>For Woman</p>
              <p>For Men</p>
              <p>For Children</p>
              <p>Our Blogs</p>
             </div>
             <div className='third-section'>
              <h4><strong>WAHI DENTAL STUDIO</strong> </h4>
              <h6><Link to="/login">Login</Link></h6>
              <h6><Link to="/services">Services</Link></h6>
              
             </div>
             
            
        </div>
        <div className='copy-rights-section'>
            <p className='text-center'> &copy; {year} Wahi Dental Studio All rights reserved.</p>
        </div>
        
        
        </div>
       
    );
};

export default Footer;