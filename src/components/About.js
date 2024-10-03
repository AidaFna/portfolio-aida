import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import AboutImg from '../assets/images/logo512.png';

const About = () => {
  return (
    <div className="p-5 bg-primary" id="about">
      <Container className="my-5">
        <Row className="flex-column-reverse flex-lg-row mt-5 mt-md-0">
          <Col lg={6} className="flex-column center-position align-items-center">
            <div className="center-position">
              <img src={AboutImg} alt="about img" className="img-fluid shadow w-75"></img>
            </div>
          </Col>
          <Col lg={6} className="flex-column center-position py-5">
            <h2 className="text-white fw-bold text-uppercase mb-5">About Me</h2>
            <p className="text-white text-start">
              I am a front-end developer with over 2.5 years of experience, primarily working with React.js as my
              framework of choice. I am comfortable using Bootstrap and CSS to create responsive, user-friendly
              interfaces, and I confidently work within agile environments to ensure project goals are met efficiently
              and collaboratively.
            </p>
            <p className="text-white text-start mb-5">
              Recently, I have developed a strong interest in UI/UX design and have been learning to use Figma for
              designing websites and mobile apps. Looking forward, I am eager to expand my expertise in both front-end
              development and UI/UX design, seeking opportunities where I can combine these skills to create seamless,
              engaging digital experiences.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
