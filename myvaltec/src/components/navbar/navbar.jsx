import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import valtecLogo from "../../assets/valtec_logo.png";
import "./Navbar.css"; // Import CSS for external styling

export default function NavBar() {
  return (
    <Navbar bg="light" expand="lg" className="py-1 sticky-top">
      <Container className="d-flex justify-content-between align-items-center mynavbar">
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
            <Nav.Link
              as={NavLink}
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-danger text-decoration-none"
                  : "text-dark text-decoration-none"
              }
            >
              Home
            </Nav.Link>

            {/* Thinking Dropdown */}
            <NavDropdown
              title="Thinking"
              id="thinking-dropdown"
              className="text-dark"
              style={{ fontWeight: "bold" }}
            >
              <div className="thinking-dropdown-container">
                <div className="thinking-column">
                  <NavDropdown.Item as={NavLink} to="/leadership">
                    Our Leadership
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/purpose">
                    Our Purpose
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/sustainability">
                    Sustainability
                  </NavDropdown.Item>
                </div>
                <div className="thinking-column">
                  <NavDropdown.Item as={NavLink} to="/innovation">
                    Digital Innovation
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/excellence">
                    Technical Excellence
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/equity">
                    Equity, Diversity & Inclusion
                  </NavDropdown.Item>
                </div>
                <div className="thinking-column">
                  <NavDropdown.Item as={NavLink} to="/ethics">
                    Ethics & Compliance
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/relations">
                    External Relations
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/safety">
                    Safety
                  </NavDropdown.Item>
                </div>
              </div>
            </NavDropdown>

            {/* Expertise Dropdown */}
            <NavDropdown
              title="Expertise"
              id="expertise-dropdown"
              className="text-dark"
              style={{ fontWeight: "bold" }}
            >
              <div className="expertise-dropdown-container">
                <NavDropdown.Item as={NavLink} to="/markets">
                  Markets
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/services">
                  Services
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/projects">
                  Projects
                </NavDropdown.Item>
              </div>
            </NavDropdown>

            <Nav.Link
              as={NavLink}
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? "text-danger text-decoration-none"
                  : "text-dark text-decoration-none"
              }
            >
              Partners
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/markets"
              className={({ isActive }) =>
                isActive
                  ? "text-danger text-decoration-none"
                  : "text-dark text-decoration-none"
              }
            >
              Careers
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-danger text-decoration-none"
                  : "text-dark text-decoration-none"
              }
            >
              Contact
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#request-quote">
              <div className="btn btn-danger">Request a Quote</div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
