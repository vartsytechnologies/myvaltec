import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Modal,
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { PhoneInput } from "react-international-phone";
import { IoSendSharp } from "react-icons/io5";
import valtecLogo from "../../assets/valtec_logo.png";
import { NavLink } from "react-router-dom";

// Imports for form
import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";

export default function NavBar() {
  const [phone, setPhone] = useState("");
  // State for Modal
  const [showModal, setShowModal] = useState(false);

  // Functions to handle modal show and hide
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
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
          <Nav className="m-auto defbodyFont">
            <Nav.Link>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-danger text-decoration-none"
                    : "text-dark text-decoration-none"
                }
              >
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                to="/thinking"
                className={({ isActive }) =>
                  isActive
                    ? "text-danger text-decoration-none"
                    : "text-dark text-decoration-none"
                }
              >
                Thinking
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive
                    ? "text-danger text-decoration-none"
                    : "text-dark text-decoration-none"
                }
              >
                Expertise
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive
                    ? "text-danger text-decoration-none"
                    : "text-dark text-decoration-none"
                }
              >
                Projects
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                to="/markets"
                className={({ isActive }) =>
                  isActive
                    ? "text-danger text-decoration-none"
                    : "text-dark text-decoration-none"
                }
              >
                Careers
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-danger text-decoration-none"
                    : "text-dark text-decoration-none"
                }
              >
                Contact
              </NavLink>
            </Nav.Link>
          </Nav>

          <Button
            className="btn btn-danger"
            variant="primary"
            onClick={handleShow}
          >
            Request a quote
          </Button>

          <Modal
            show={showModal}
            onHide={handleClose}
            dialogClassName="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg"
          >
            <Modal.Header closeButton>
              <Modal.Title>Request a quote</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form autoComplete="off">
                <Row className="py-3">
                  <Col xs={12} lg={5}>
                    <Form.Group as={Col} className="mb-3">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="name"
                        placeholder="Enter your name"
                        required
                      />
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="formBasicEmail"
                    >
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        required
                      />
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="formPhoneNumber"
                    >
                      <Form.Label>Phone Number</Form.Label>
                      <div
                        className="phone-input-container w-100"
                        style={{ border: "1px solid black" }}
                      >
                        <PhoneInput
                          defaultCountry="gh" // Change to desired default country
                          value={phone}
                          onChange={setPhone}
                          inputClassName="field"
                          inputProps={{
                            required: true,
                            placeholder: "Enter your phone number",
                            pattern: "^\\+?[1-9][0-9]{7,14}$", // Pattern to support international numbers
                          }}
                        />
                      </div>
                    </Form.Group>
                    <Form.Group as={Col} md="12" className="mb-3">
                      <Form.Label>Location</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your location"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} lg={7}>
                    <Form.Group as={Col} md="12" className="mb-3">
                      <Form.Label>Select Institution: </Form.Label>
                      <Form.Control
                        as="select"
                        // value={market}
                        // onChange={handleChange}
                        custom
                      >
                        <option value="ind">Individual</option>
                        <option value="com">Company</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} md="12" className="mb-3">
                      <Form.Label>Name of institution</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter the name of your institution"
                        required
                      />
                    </Form.Group>
                    <Form.Group as={Col} md="12" className="mb-3">
                      <Form.Label>Details</Form.Label>
                      <Form.Control
                        style={{ resize: "none" }}
                        as="textarea"
                        rows={7}
                        placeholder="Write the details of the product or services needed here.."
                        required
                      />
                    </Form.Group>
                    <div className="d-flex align-items-center justify-content-center">
                      <Button
                        className="bg-danger mt-3 px-5 fs-5 ms-2"
                        variant="danger"
                        type="submit"
                      >
                        Send <IoSendSharp className="" />
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
