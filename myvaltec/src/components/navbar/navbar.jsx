
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import valtecLogo from '../../assets/valtec_logo.png'

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="py-1 sticky-top">
      <Container className="d-flex justify-content-between align-items-center mynavbar" >
        <Navbar.Brand href="/">
          <img
            src={valtecLogo}
            alt="VALTEC Logo"
            width="100"
            height="auto"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="flex-grow-1">
          <Nav className="m-auto">
            <Nav.Link href="#home" className="text-danger">Home</Nav.Link>
            <Nav.Link href="#thinking" className="text-dark">Thinking</Nav.Link>
            <Nav.Link href="#expertise" className="text-dark">Expertise</Nav.Link>
            <Nav.Link href="#partners" className="text-dark">Partners</Nav.Link>
            <Nav.Link href="#careers" className="text-dark">Careers</Nav.Link>
            <Nav.Link href="#contact" className="text-dark">Contact Us</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#request-quote">
              <span className="btn btn-danger px-4">Request a Quote</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
