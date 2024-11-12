
import React from 'react';
import { Navbar, Nav, Container, NavDropdown, } from 'react-bootstrap';
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
            <NavDropdown
              title="Expertise"
              menuVariant="dark"
            ><div className='bg-danger m-0'>
              <NavDropdown.Item><NavLink to="/service" className={({ isActive }) => isActive ? 'text-danger text-decoration-none' : 'text-dark text-decoration-none'}>Markets</NavLink></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Projects</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">services</NavDropdown.Item>
              </div>
            </NavDropdown>
            <Nav.Link><NavLink to="/service" className={({ isActive }) => isActive ? 'text-decoration-none' : 'text-dark text-decoration-none'}>Expertise</NavLink></Nav.Link>
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
