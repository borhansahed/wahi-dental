import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './ServiceItems.css'
import logo1 from '../Images/teeth1.jpg'
import logo2 from '../Images/teeth2.jpg'
import logo3 from '../Images/teeth3.jpg'

const ServiceItems = () => {
    return (
        <div className='d-flex justify-content-center align-items-center gap-5 mt-5 mb-5  service-items-container'>
            <Card style={{ width: '21rem' }}>
  <Card.Img variant="top" src={logo1} />
  <Card.Body>
    <Card.Title>Cosmetic Tooth Bonding</Card.Title>
    <Card.Text>
    Because it does not involve dental laboratory work, tooth bonding can usually be accomplished in a single visit to the dental office. Expect the whole procedure to take 30 minutes to an hour.  Take some rest. Sleep well.
    </Card.Text>
    <h5>Price : 250$</h5>
    <Button variant="btn btn-outline-primary">Go somewhere</Button>
  </Card.Body>
</Card>
            <Card style={{ width: '21rem' }}>
  <Card.Img variant="top" src={logo2}/>
  <Card.Body>
    <Card.Title>Removable Dentures</Card.Title>
    <Card.Text>
    Having orthodontic treatment in childhood is ideal in order to take advantage of a youngster's natural growth processes to help move the teeth into proper alignment. Like the rest of the body, the teeth and jaws are now changing rapidly. 
    </Card.Text>
    <h5>Price : 350$</h5>
    <Button variant="btn btn-outline-primary">Go somewhere</Button>
  </Card.Body>
</Card>
            <Card style={{ width: '21rem' }}>
  <Card.Img variant="top" src={logo3} />
  <Card.Body>
    <Card.Title>Crowns & Bridgework</Card.Title>
    <Card.Text>
    Crowning or capping a tooth will usually take two to three visits. At the first visit, your tooth is prepared to receive its new crown. First, it is shaped to fit inside the new covering. This will involve some drilling to give the tooth a uniform shape.
    </Card.Text>
    <h5>Price : 450$</h5>
    <Button variant="btn btn-outline-primary">Go somewhere</Button>
  </Card.Body>
</Card>
        </div>
    );
};

export default ServiceItems;