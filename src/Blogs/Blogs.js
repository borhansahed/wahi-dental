import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
           <div className='blogs-card'>
               <h3>Difference between Authentication <br /> and Authorization</h3>
               <p> Simply put, authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to.</p>
               </div> 
           <div className='blogs-card'>
               <h3>Why we will useing firebase</h3>
               <p>Firebase by Google can be used for the following: Firebase manages all data real-time in the database. So, the exchange of data to and fro from the database is easy and quick.</p>
               </div> 
           <div className='blogs-card'>
               <h3>What we can do without Authentication in firebase</h3>
               <p>To use the Firebase Storage we need to authenticate a user via Firebase authentication. The default security rules require users to be authenticated. Firebase Storage is basically a powerful and simple object storage, in which you can store your files easily.</p>
               </div> 
        </div>
    );
};

export default Blogs;