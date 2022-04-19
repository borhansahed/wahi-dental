import React from 'react';
import { Button } from 'react-bootstrap';
import { FcGoogle } from "@react-icons/all-files/fc/FcGoogle";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../Firebase-init';
import { useNavigate } from 'react-router-dom';
import './SocialLogin.css'

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();



    if (error) {
        return (
          <div>
            <p className='text-danger'>Error: {error.message}</p>
          </div>
        );
      }
      if(user){
          navigate('/home')
      }




    return (
        <div className='mb-5'>
            <div className='d-flex align-items-center justify-content-center m-0'>
                <div style={{height:'1px' ,background:'lightblue' , width:'10rem'}} className=''>

                </div>
                <p className='mt-3 text-primary'> OR</p>
                <div style={{height:'1px' , width:'10rem' , background:'lightblue'}} className=''></div>
            </div>
       <div className='d-flex justify-content-center '>
       <Button onClick={() => signInWithGoogle()} variant="btn btn-outline-primary d-block  mb-3 d-flex justify-content-center align-items-center gap-2 social-button" type="submit">
    <FcGoogle></FcGoogle> Google Sign in
  </Button>
       </div>
        </div>
    );
};

export default SocialLogin;