import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/hospital.jpg'
import ServiceItems from '../ServiceItems/ServiceItems';
import './Home.css'

const Home = () => {
    return (
        <>
        <div className='home-container'>
            <img className='' src={logo} alt="" />
            <div className='home-title'>
                <h1 className='main-title'>Where your smile means <br />more.</h1>
               <div>
               <h3 className=''>
                Treat your smile, treat your soul.
                </h3>
                <button className='btn btn-outline-primary mt-4 home-button '><Link to="/services">Book An Service</Link> </button>
               </div>
            </div>
        </div>
        <div>
            <h2 className='text-center mt-5 fw-bold'>Services</h2>
            <ServiceItems></ServiceItems>
        </div>
        </>
        
    );
};

export default Home;