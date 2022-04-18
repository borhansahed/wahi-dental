import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
        
            <div className='login-container'>
            <h3 className='text-center'>Please Register your account</h3>
          <div className='mx-auto'>
          <Form  className=' form-container ' >
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Your name</Form.Label>
    <Form.Control type="text" placeholder="Enter Name" />
   
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
   
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  
  
  <Button variant="btn btn-outline-primary d-block w-100 mb-3" type="submit">
    Register
  </Button>
  <Form.Text className=" register-text">
     Already have a account <Link to="/login">Login</Link>
    </Form.Text>
</Form>
          </div>
        </div>
        </div>
    );
};

export default Register;