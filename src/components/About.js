import React from 'react';
import { Col, Row, Container, Button } from 'react-bootstrap';
import AboutImg from '../assets/images/logo512.png';
import { skills } from '../helper/constants';

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
            <h4 className="text-white text-start mb-2">My Skills</h4>
            <p className="text-white text-start">
              {skills.map((skill) => (
                <Button
                  key={skill}
                  style={{ cursor: 'default' }}
                  className="mx-1 mb-2"
                  variant="white"
                  size="sm"
                  active
                >
                  {skill}
                </Button>
              ))}
            </p>
          </Col>
        </Row>
        <Row className="text-start mx-5">
          <h4 className="text-light mt-5 mb-3">Work Experience</h4>
          <div className="list-group">
            <div className="list-group-item list-group-item-action flex-lg-column align-items-start p-4">
              <div className="d-lg-flex w-100 justify-content-between">
                <h5 className="mb-lg-1">Front End Engineer at PT Oto Klix Indonesia</h5>
                <small>
                  <Button style={{ cursor: 'default' }} variant="primary" size="sm" active>
                    March 2022 - July 2024
                  </Button>
                </small>
              </div>
              <small className="text-secondary">Jakarta Selatan</small>
              <p className="mb-0 mt-3 w-75">
                Responsible for maintaining a back office website built with React.js, developing new features like a
                PDF generator for B2B transactions, also creating new websites for workshop management and B2B
                client-side.
              </p>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default About;
