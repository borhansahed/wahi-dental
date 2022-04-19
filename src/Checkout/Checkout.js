import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './Checkout.css';

const Checkout = () => {
    const navigate = useNavigate();
   
    const handleCheckout = event =>{
        event.preventDefault();
        Swal.fire(
            'Good job!',
            'We will contract to you soon!',
            'success'
          )
          navigate('/home');
    }
    
    return (
        <div>
             <Form onSubmit={handleCheckout} className=' form-container ' >
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Your name</Form.Label>
    <Form.Control type="text" placeholder="Enter Name" />
   
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Address</Form.Label>
    <Form.Control type="text"  placeholder="Address"  />
   
  </Form.Group>

  <Form.Group className="mb-3 phone-text" controlId="formBasicPassword">
    <Form.Label>Phone</Form.Label>
    <Form.Control type="tel" placeholder="" required />
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>About Your Problem</Form.Label>
    <Form.Control  type="text" placeholder="" required />
  </Form.Group>
  
  
  {/* <Button variant="btn btn-outline-primary d-block w-100 mb-3 d-flex justify-content-center align-items-center gap-2" type="submit">
  Register With  <FcGoogle></FcGoogle> 
  </Button> */}
  <Button variant="btn btn-outline-primary d-block w-100 mb-3" type="submit">
    Checkout
  </Button>
  <Form.Text>
    
    </Form.Text>
</Form>

        </div>
    );
};

export default Checkout;