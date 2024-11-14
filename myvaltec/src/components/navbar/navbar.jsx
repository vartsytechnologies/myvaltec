import React, { useState, useEffect, useRef } from "react";
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
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";

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

  // Handling navbar dropdown
  const [showDropdown, setShowDropdown] = useState(false);

  // Ref to the dropdown container
  const dropdownRef = useRef(null);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    // Function to handle clicks outside the dropdown
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    // Add event listener on mount
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  //End of Navbar handling
  //Receiving form details via emal
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_i6g7h88",
        "template_5tlbi6m",
        e.target,
        "yuJupxGb9q30_RgV8"
      )
      .then(
        (result) => {
          alert("Email sent successfully!");
          e.target.reset(); // Reset form fields
          setPhone(""); // Clear phone input
          handleClose(); // Close modal
        },
        (error) => {
          alert("Failed to send email. Please try again.");
          console.error(error);
        }
      );
  };
  return (
    <Navbar
      bg="light"
      expand="lg"
      className="py-1 sticky-top"
    >
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
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="flex-grow-1"
        >
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

            {/* Menu Link for Dropdown */}
            <Nav.Link
              onClick={toggleDropdown}
              className="text-dark dropdown-toggle"
            >
              Expertise
            </Nav.Link>

            <Nav.Link>
              <NavLink
                to="/careers"
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

          {/* Dropdown Items - Positioned Outside Navbar */}
          {showDropdown && (
            <div
              className="custom-dropdown"
              ref={dropdownRef}
            >
              <Link
                to="/markets"
                className="dropdown-item defbodyFont"
                onClick={() => setShowDropdown(false)}
              >
                Markets
              </Link>
              <Link
                to="/projects"
                className="dropdown-item defbodyFont"
                onClick={() => setShowDropdown(false)}
              >
                Projects
              </Link>
              <Link
                to="/service"
                className="dropdown-item defbodyFont"
                onClick={() => setShowDropdown(false)}
              >
                Services
              </Link>
            </div>
          )}

          {/* Request a Quote form modal */}
          <Modal
            show={showModal}
            onHide={handleClose}
            dialogClassName="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg"
          >
            <Modal.Header closeButton>
              <Modal.Title>Request a quote</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form
                autoComplete="off"
                onSubmit={sendEmail}
              >
                <Row className="py-3">
                  <Col
                    xs={12}
                    lg={5}
                  >
                    <Form.Group
                      as={Col}
                      className="mb-3"
                    >
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="name"
                        placeholder="Enter your name"
                        required
                        name="sender_name"
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
                        name="sender_email"
                      />
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="formPhoneNumber"
                    >
                      <Form.Label name="sender_phone">Phone Number</Form.Label>
                      <div
                        className="phone-input-container w-100"
                        style={{ border: "1px solid black" }}
                      >
                        <PhoneInput
                          defaultCountry="gh" // Change to desired default country
                          value={phone}
                          onChange={setPhone}
                          inputClassName="field"
                          required
                          placeholder="Enter your phone number"
                          // inputProps={{
                          //   required: false,
                          //   placeholder: "Enter your phone number",
                          //   pattern: "^\\+?[1-9][0-9]{7,14}$", // Pattern to support international numbers
                          // }}
                        />
                      </div>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="12"
                      className="mb-3"
                    >
                      <Form.Label>Location</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your location"
                        required
                        name="sender_location"
                      />
                    </Form.Group>
                  </Col>
                  <Col
                    xs={12}
                    lg={7}
                  >
                    <Form.Group
                      as={Col}
                      md="12"
                      className="mb-3"
                    >
                      <Form.Label>Select Institution: </Form.Label>
                      <Form.Control
                        as="select"
                        // value={market}
                        // onChange={handleChange}
                        custom
                        name="sender_institution"
                      >
                        <option value="ind">Individual</option>
                        <option value="com">Company</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="12"
                      className="mb-3"
                    >
                      <Form.Label name="sender_institution">
                        Name of institution
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter the name of your institution"
                        required
                      />
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="12"
                      className="mb-3"
                    >
                      <Form.Label name="quote_details">Details</Form.Label>
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
              <Button
                variant="secondary"
                onClick={handleClose}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
