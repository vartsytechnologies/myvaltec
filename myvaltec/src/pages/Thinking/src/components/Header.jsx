
import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="light" expand="lg" className="p-3">
      <Navbar.Brand href="#home">VALTEC</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#thinking">Thinking</Nav.Link>
          <Nav.Link href="#expertise">Expertise</Nav.Link>
          <Nav.Link href="#partners">Partners</Nav.Link>
          <Nav.Link href="#careers">Careers</Nav.Link>
          <Nav.Link href="#contact">Contact Us</Nav.Link>
        </Nav>
        <Button variant="danger">Request a Quote</Button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
