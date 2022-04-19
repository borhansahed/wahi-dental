import React from 'react';
import { Button } from 'react-bootstrap';
import { FcGoogle } from "@react-icons/all-files/fc/FcGoogle";

const SocialLogin = () => {
    return (
        <div className='mb-5'>
            <div className='d-flex align-items-center justify-content-center m-0'>
                <div style={{height:'1px' ,background:'lightblue' , width:'10rem'}} className=''>

                </div>
                <p className='mt-3 text-primary'> OR</p>
                <div style={{height:'1px' , width:'10rem' , background:'lightblue'}} className=''></div>
            </div>
       <div className='d-flex justify-content-center '>
       <Button variant="btn btn-outline-primary d-block w-25 mb-3 d-flex justify-content-center align-items-center gap-2" type="submit">
    <FcGoogle></FcGoogle> Google Sign in
  </Button>
       </div>
        </div>
    );
};

export default SocialLogin;