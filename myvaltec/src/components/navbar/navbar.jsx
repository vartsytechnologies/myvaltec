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
import { RiArrowRightSLine } from "react-icons/ri";
import { RiArrowDownSLine } from "react-icons/ri";
// Imports for form
import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";

export default function NavBar() {
  const [phone, setPhone] = useState("");
  const [showModal, setShowModal] = useState(false); // State for Modal
  const [showDropdown, setShowDropdown] = useState(false); // State for dropdown visibility
  const dropdownRef = useRef(null); // Ref to handle dropdown container
  const expertiseLinkRef = useRef(null); // Ref to expertise nav link

  // Functions to handle modal show and hide
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  // Show dropdown when hovering over the expertise link
  const handleMouseEnterExpertise = () => {
    setShowDropdown(true);
  };

  // Hide dropdown when leaving both the expertise link and dropdown
  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  // Detect clicks outside to hide the dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !expertiseLinkRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  //End of Navbar handling

  //Form handling
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
      className="py-1 sticky-top navbar"
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
              ref={expertiseLinkRef}
              className="text-dark dropdown mb-0 pb-0"
              onMouseEnter={handleMouseEnterExpertise} // Show dropdown
              onMouseLeave={handleMouseLeave} // Hide dropdow
            >
              Expertise
              <RiArrowDownSLine
                className={`ms-2 ${showDropdown ? "rotate" : ""}`} // Apply rotate when dropdown is shown
              />
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
            Contact Sales
          </Button>

          
          {showDropdown && (
            <div
              className={`container custom-dropdown bg-light ${
                showDropdown ? "show" : ""
              }`}
              ref={dropdownRef}
              onMouseEnter={handleMouseEnterExpertise} // Keep dropdown visible
              onMouseLeave={handleMouseLeave} // Hide dropdown
            >
              {/* <hr />s */}
              <div className="row justify-content-around">
                <div className="col col-md-3 d-flex align-items-start align-self-start justify-content-center flex-column">
                  <h1
                    className="mt-4 ms-1 secondary defheadFont"
                    style={{ fontSize: "1.4rem" }}
                  >
                    <Link to="/markets" className="text-decoration-none text-danger">Markets</Link>
                  </h1>
                  <p className="mt-3 text-black d-none d-md-block">
                    <p className="defbodyFont">
                      {" "}
                      <RiArrowRightSLine className="me-2 " /> Oil and Gas
                    </p>
                    <p className="defbodyFont">
                      {" "}
                      <RiArrowRightSLine className="me-2 " /> Energy
                    </p>
                    <p className="defbodyFont">
                      {" "}
                      <RiArrowRightSLine className="me-2 " /> Mining
                    </p>
                    <p className="defbodyFont">
                      {" "}
                      <RiArrowRightSLine className="me-2 " /> Power
                    </p>
                    <p className="defbodyFont">
                      {" "}
                      <RiArrowRightSLine className="me-2 " /> Technology
                    </p>
                    <p className="defbodyFont">
                      {" "}
                      <RiArrowRightSLine className="me-2 " /> Governments
                    </p>
                    <div className="mb-3 pt-3 d-flex align-items-center justify-content-center">
                      <Link
                        to="/markets"
                        className="px-3 py-1 bg-danger rounded"
                        style={{
                          fontSize: "1rem",
                          textDecoration: "none",
                          color: "white",
                        }}
                      >
                        All markets
                      </Link>
                    </div>
                  </p>
                </div>
                <div className="col col-md-4 d-flex align-items-start align-self-start justify-content-start flex-column">
                  <h1
                    className="mt-4 ms-1 secondary defheadFont"
                    style={{ fontSize: "1.4rem" }}
                  ><Link to="/projects" className="text-decoration-none text-danger">Projects</Link>
                    
                  </h1>
                  <p className="mt-3 text-black d-none d-md-block">
                    <p className="defbodyFont">
                      {" "}
                      <RiArrowRightSLine className="me-2 " /> ENI Ghana
                      Exploration & Production Limitd
                    </p>
                    <p className="defbodyFont">
                      {" "}
                      <RiArrowRightSLine className="me-2 " /> MODEC Ghana
                      Limited
                    </p>
                    <p className="defbodyFont">
                      {" "}
                      <RiArrowRightSLine className="me-2 " /> Yinson Productions West Africa Limited
                    </p>
                    <p className="defbodyFont">
                      {" "}
                      <RiArrowRightSLine className="me-2 " /> AngloGold Ashanti
                      Ghana Limited
                    </p>
                    <div className="mb-3 pt-3 d-flex align-items-start justify-content-start rounded">
                      <Link
                        to="/projects"
                        className="px-3 py-1 bg-danger rounded"
                        style={{
                          fontSize: "1rem",
                          textDecoration: "none",
                          color: "white",
                        }}
                      >
                        All projects
                      </Link>
                    </div>
                  </p>
                </div>
                <div className="col col-md-5 d-flex align-items-start align-self-start justify-content-start flex-column">
                  <h1
                    className="mt-4 ms-1 secondary defheadFont"
                    style={{ fontSize: "1.4rem" }}
                    
                  ><Link to="/service" className="text-decoration-none text-danger">Services</Link>
                  </h1>
                  <p className="mt-3 text-black d-none d-md-block">
                    <p className="defbodyFont">
                      {" "}
                      <RiArrowRightSLine className="me-2 " />
                      Engineering, Procument and Construction
                    </p>
                    <p className="defbodyFont">
                      {" "}
                      <RiArrowRightSLine className="me-2 " />
                      Calibration
                    </p>
                    <p className="defbodyFont">
                      {" "}
                      <RiArrowRightSLine className="me-2 " />
                      Additives : Fuel, Lubricants and Greases
                    </p>
                    <p className="defbodyFont">
                      {" "}
                      <RiArrowRightSLine className="me-2 " />
                      Infrastructure and Facilities
                    </p>
                    <p className="defbodyFont">
                      {" "}
                      <RiArrowRightSLine className="me-2 " />
                      Renewable Energy
                    </p>
                    <p className="defbodyFont">
                      {" "}
                      <RiArrowRightSLine className="me-2 " />
                      Digital Solutions
                    </p>
                    <p className="defbodyFont">
                      {" "}
                      <RiArrowRightSLine className="me-2 " />
                      Public Private Partnerships
                    </p>
                    <p className="defbodyFont">
                      {" "}
                      <RiArrowRightSLine className="me-2 " />
                      Sustainability
                    </p>
                    <div className="mb-3 pt-3 d-flex align-items-start justify-content-start rounded">
                      <Link
                        to="/service"
                        className="px-3 py-1 bg-danger rounded"
                        style={{
                          fontSize: "1rem",
                          textDecoration: "none",
                          color: "white",
                        }}
                      >
                        All services
                      </Link>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Request a Quote form modal */}
          <Modal
            show={showModal}
            onHide={handleClose}
            dialogClassName="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg"
          >
            <Modal.Header closeButton>
              <Modal.Title>Contact Sales</Modal.Title>
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
