import React from 'react';
import { Container } from 'react-bootstrap';
import Copyright from '../assets/icons/copyright.svg';

const Footer = () => {
  return (
    <div className="py-3 bg-primary text-light" id="footer">
      <Container>
        <ul>
          <il className="mx-3">
            <a href="#home" className="text-decoration-none text-light fw-bold">
              Home
            </a>
          </il>
          <il className="mx-3">
            <a href="#about" className="text-decoration-none text-light fw-bold">
              About
            </a>
          </il>
          <il className="mx-3">
            <a href="#project" className="text-decoration-none text-light fw-bold">
              Projects
            </a>
          </il>
          <il className="mx-3">
            <a href="#contact" className="text-decoration-none text-light fw-bold">
              Contact
            </a>
          </il>
        </ul>
        <hr className="w-50 mx-auto"></hr>
        <p>
          Copyright<img src={Copyright} height={24} className="mx-2"></img>Aida Amrina
        </p>
      </Container>
    </div>
  );
};

export default Footer;
