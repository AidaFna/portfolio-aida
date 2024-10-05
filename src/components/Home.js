import React from 'react';
import { Button, Col, Row, Container } from 'react-bootstrap';
import ProfileImg from '../assets/images/profile.jpeg';

const Home = () => {
  return (
    <div className="p-5" id="home">
      <Container className="mt-5">
        <Row>
          <Col lg={6} className="d-flex flex-column align-items-start mt-5">
            <h3 className="text-light bg-primary xt-start fw-bolder mb-3 px-2">Aida F. N. Amrina</h3>
            <h1 className="text-uppercase text-primary text-start lh-1 mb-5">
              Front End <br /> Web Developer
            </h1>
            <Button className="mb-sm-5 mb-xs-5 mt-lg-5">See My Works</Button>
          </Col>
          <Col lg={6}>
            <img src={ProfileImg} alt="profile img" className="img-fluid rounded-circle shadow w-65 my-2"></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
