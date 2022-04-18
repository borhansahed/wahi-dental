import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <> 
        
        <div className='login-container'>
            <h3 className='text-center'>Welcome to Login</h3>
          <div className='mx-auto'>
          <Form  className=' form-container ' >
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
   
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  
  
  <Button variant="btn btn-outline-primary d-block w-100 mb-3" type="submit">
    Submit
  </Button>
  <Form.Text className=" register-text">
     Not a member <Link to="/register">Register</Link>
    </Form.Text>
</Form>
          </div>
        </div>
        
        </>
        
    );
};

export default Login;