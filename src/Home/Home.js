import React from 'react';
import logo from '../Images/hospital.jpg'
import './Home.css'

const Home = () => {
    return (
        <div className='home-container'>
            <img className='' src={logo} alt="" />
            <div>
                <h1 className='main-title'>Where your smile means <br />more.</h1>
               <div>
               <h3 className='mt-4'>
                Treat your smile, treat your soul.
                </h3>
                <button>Book An Service</button>
               </div>
            </div>
        </div>
    );
};

export default Home;