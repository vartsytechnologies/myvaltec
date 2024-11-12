
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import valtecLogo from "../../assets/valtec_logo.png"
import {NavLink} from 'react-router-dom'

export default function NavBar(){
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
          <Nav className="m-auto defbodyFont">
            <Nav.Link><NavLink to="/thinking" className={({ isActive }) => isActive ? 'text-danger text-decoration-none' : 'text-dark text-decoration-none'}>Thinking</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/services" className={({ isActive }) => isActive ? 'text-danger text-decoration-none' : 'text-dark text-decoration-none'}>Expertise</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/projects" className={({ isActive }) => isActive ? 'text-danger text-decoration-none' : 'text-dark text-decoration-none'}>Partners</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/markets" className={({ isActive }) => isActive ? 'text-danger text-decoration-none' : 'text-dark text-decoration-none'}>Careers</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/contact" className={({ isActive }) => isActive ? 'text-danger text-decoration-none' : 'text-dark text-decoration-none'}>Contact</NavLink></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#request-quote">
              <div className='btn btn-danger defbodyFont'>Request a Quote</div>
              {/*<span className="btn btn-danger px-4">Request a Quote</span>*/}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
