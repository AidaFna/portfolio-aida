import React from 'react';
import { Button, Col, Row, Container } from 'react-bootstrap';
import ProfileImg from '../assets/images/profile.jpeg';

const Home = () => {
  return (
    <div className="p-5" id="home">
      <Container className="my-5">
        <Row>
          <Col lg={6} className="d-flex flex-column align-items-start py-5">
            <h3 className="text-secondary text-start fw-bold mb-3">Aida Amrina</h3>
            <h1 className="text-uppercase text-primary text-start lh-1 mb-5">
              Front End <br /> Web Developer
            </h1>
            <Button className="mt-md-5 my-lg-5">See My Works</Button>
          </Col>
          <Col lg={6}>
            <img src={ProfileImg} alt="profile img" className="img-fluid rounded-circle shadow w-75 my-3"></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
