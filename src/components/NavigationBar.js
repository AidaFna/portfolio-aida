import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Logo from '../assets/images/logo-primary.jpg';

const NavigationBar = () => {
  return (
    <Navbar expand="lg" fixed="top" className="bg-primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#" className="mx-auto d-flex align-items-center">
          <img alt="" src={Logo} height={40} className="d-inline-block align-top" />{' '}
          <span className="text-uppercase ms-2 fs-4">Aida Amrina</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto w-100 d-flex justify-content-end">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#project">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
