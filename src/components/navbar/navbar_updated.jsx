import React, { useState, useEffect, useRef } from "react";
// import { useMediaQuery } from "react-responsive";
import {
  Navbar,
  Nav,
  NavDropdown,
  Offcanvas,
  Modal,
  Button,
  Container,
  Row,
  Collapse,
  Col,
} from "react-bootstrap";
import { PhoneInput } from "react-international-phone";
import { IoSendSharp } from "react-icons/io5";
import { IoIosArrowUp } from "react-icons/io";
import valtecLogo from "../../assets/valtec_logo.png";
import { NavLink } from "react-router-dom";
import navbar from "./navbar.css";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import { VscArrowSmallRight } from "react-icons/vsc";
import { RiArrowDownSLine } from "react-icons/ri";
// Imports for form
import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import { RxHamburgerMenu } from "react-icons/rx";
import AOS from "aos";
export default function NavBar() {
  const [phone, setPhone] = useState("");
  const [showModal, setShowModal] = useState(false); // State for Modal
  const [showDropdown, setShowDropdown] = useState(false); // State for dropdown visibility
  const dropdownRef = useRef(null); // Ref to handle dropdown container
  const expertiseLinkRef = useRef(null); // Ref to expertise nav link

  //New nav
  const [isOpen, setIsOpen] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // Functions to handle modal show and hide
  const handleSho = () => setShowModal(true);
  const handleClos = () => setShowModal(false);

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
  useEffect(() => {
    AOS.init({
      duration: 550, // Animation duration in milliseconds
      offset: 50, // Trigger animations 50px before an element is in view
    });
  }, []);
  //Form handling
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_REQ_A_QUOTE_SERVICE,
        process.env.REACT_APP_REQ_A_QUOTE_TEMP,
        e.target,
        process.env.REACT_APP_REQ_A_QUOTE_PUBK
      )
      .then(
        (result) => {
          alert("Message Sent Successfully. Thank you for contacting VALTEC!");
          e.target.reset(); // Reset form fields
          setPhone(""); // Clear phone input
          handleClose(); // Close modal
        },
        (error) => {
          alert("Failed to send the Message. Please try again Later.");
          console.error(error);
        }
      );
  };
  return (
    <>
      <style>
        {`:root {
  --bs-btn-color: red;
  --bs-btn-border-color: red;
  /* --bs-btn-hover-bg: red; */
}

/* Ensure the mega menu takes the full width of the parent container */
.mega-menu {
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  background: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px 0;
  z-index: 1000;
  display: none;
}

/* Display the mega menu on hover */
.mega-dropdown:hover .mega-menu {
  display: block;
}

/* Proper alignment of columns */
.mega-menu .row {
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap; /* Prevents columns from stacking */
}

/* Style headings inside the mega menu */
.mega-menu h6 {
  font-weight: bold;
  margin-bottom: 10px;
}
.sd {
  color: #525050;
}
/* Add spacing between items */
.mega-menu .col-md-4 {
  padding: 10px;
}

/* Ensure links are properly styled */
.mega-menu a {
  text-decoration: none;
  color: black;
  display: block;
  padding: 5px 0;
}
.custom {
  position: relative;
}

#expertise-dropdown::after {
  display: none !important;
}

.menu {
  display: none;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: auto;
  min-width: 300px;
  max-width: 650px;
  border-radius: 5px;
  padding: 10px;
}
.custom:hover .menu {
  display: block !important;
}

/* body {
    overflow-y: scroll;
  } */
.offcanvas {
  position: fixed;
}
.link {
  transition: all 0.2s linear;
}
.link:hover {
  color: rgba(255, 17, 67, 1);
}
.sticky-top {
  top: 0;
  position: sticky !important;
  z-index: 1030;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}
.arrow-icon {
  transition: transform 0.3s ease-in-out;
}

.rotate {
  transform: rotate(180deg);
}
.active-custom,
.active-custom:focus {
  background-color: transparent !important; /* No blue background */
  color: red !important; /* Keep text red */
}
/* Custom Dropdown Animation */
.dropdown-menu-custom {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  visibility: hidden;
  transition: max-height 2s ease-in-out, opacity 0.3s ease-in-out;
}

.dropdown-menu-custom.open {
  max-height: 400px;
  opacity: 1;
  visibility: visible;
}
/* Hide the menu by default */
.child {
  position: absolute;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.4s ease-in-out, visibility 0.4s ease-in-out;
  top: 74px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

}

.dropdowns:hover + .child,
.child:hover,
.dropdowns:focus + .child {
  visibility: visible;
  opacity: 1;
}
li {
  font-size: 0.95em;
}
.navlink {
  color: white !important;
}
.navlink:hover {
  color: rgb(185, 171, 171) !important;
}
:root {
  --bs-btn-color: red;
  --bs-btn-border-color: red;
  /* --bs-btn-hover-bg: red; */
}

/* Ensure the mega menu takes the full width of the parent container */
.mega-menu {
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  background: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px 0;
  z-index: 1000;
  display: none;
}

/* Display the mega menu on hover */
.mega-dropdown:hover .mega-menu {
  display: block;
}

/* Proper alignment of columns */
.mega-menu .row {
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap; /* Prevents columns from stacking */
}

/* Style headings inside the mega menu */
.mega-menu h6 {
  font-weight: bold;
  margin-bottom: 10px;
}
.sd {
  color: #525050;
}
/* Add spacing between items */
.mega-menu .col-md-4 {
  padding: 10px;
}

/* Ensure links are properly styled */
.mega-menu a {
  text-decoration: none;
  color: black;
  display: block;
  padding: 5px 0;
}
.custom {
  position: relative;
}

#expertise-dropdown::after {
  display: none !important;
}

.menu {
  display: none;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: auto;
  min-width: 300px;
  max-width: 650px;
  border-radius: 5px;
  padding: 10px;
}
.custom:hover .menu {
  display: block !important;
}

/* body {
  overflow-y: scroll;
} */
.offcanvas {
  position: fixed;
}
.link {
  transition: all 0.2s linear;
}
.link:hover {
  color: rgba(255, 17, 67, 1);
}
.sticky-top {
  top: 0;
  position: sticky !important;
  z-index: 1030;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}
.arrow-icon {
  transition: transform 0.3s ease-in-out;
}

.rotate {
  transform: rotate(180deg);
}
.active-custom,
.active-custom:focus {
  background-color: transparent !important; /* No blue background */
  color: red !important; /* Keep text red */
}
/* Custom Dropdown Animation */
.dropdown-menu-custom {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  visibility: hidden;
  transition: max-height 2s ease-in-out, opacity 0.3s ease-in-out;
}

.dropdown-menu-custom.open {
  max-height: 400px;
  opacity: 1;
  visibility: visible;
}
/* Hide the menu by default */
.child {
  position: absolute;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.4s ease-in-out, visibility 0.4s ease-in-out;
  top: 74px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: -1;
}

.dropdowns:hover + .child,
.child:hover,
.dropdowns:focus + .child {
  visibility: visible;
  opacity: 1;
}
li {
  font-size: 0.95em;
}
.navlink {
  color: white !important;
}
.navlink:hover {
  color: rgb(185, 171, 171) !important;
}
.all_s:hover {
  color: red !important;
  background-color: white !important;
}
.all_m:hover {
  color: #525050 !important;
  background-color: white !important;
}
.all_p:hover {
    color: #dee2e6 !important;
    background-color: rgb(59, 57, 57) !important;
  }

`}
      </style>
      <Navbar bg="light" expand="lg" className="sticky-top px-3">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={valtecLogo}
              alt="VALTEC Logo"
              width="100"
              height="auto"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>

          <Button
            variant="outline-dark"
            className="d-lg-none"
            onClick={handleShow}
          >
            <RxHamburgerMenu className="fs-3" />
          </Button>

          <Nav className="defbodyFont mx-auto d-none d-lg-flex align-items-between">
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

            <Nav.Link
              className="dropdowns mb-0 pb-0"
              onFocus={() => setShowDropdown(true)}
              onBlur={() => setShowDropdown(false)}
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              Expertise
              <RiArrowDownSLine
                className={`ms-2 ${showDropdown ? "rotate" : ""}`}
                style={{ transition: "transform 0.3s ease-in-out" }}
              />
            </Nav.Link>

            {/* Dropdown Menu */}
            <Row
              className="child container bg bg-light p-0"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <Col
                data-aos="fade-right"
                className="p-0 m-0 bg-danger text-white"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                <ul className="p-3 list-unstyled text-decoration-none">
                  <h3
                    className="p-2 m-3 defheadFont "
                    style={{ borderBottom: "1px solid linen" }}
                  >
                    Services
                  </h3>
                  <li className="mb-1 mt-4 ms-2">
                    <NavLink
                      to="/service/reliability_services"
                      className="navlink d-flex align-items-center text-decoration-underline"
                    >
                      <VscArrowSmallRight className="me-2" />
                      Reliability
                    </NavLink>
                  </li>
                  <li className="mb-1  ms-2">
                    <VscArrowSmallRight className="me-2 " />
                    Calibration
                  </li>
                  <li className="mb-1 ms-2">
                    <NavLink
                      to="/service/sustainability"
                      className="navlink d-flex align-items-center text-decoration-underline"
                    >
                      <VscArrowSmallRight className="me-2" />
                      Sustainability
                    </NavLink>
                  </li>
                  <li className="mb-1 ms-2">
                    <NavLink
                      to="/service/renewable_energy"
                      className="navlink d-flex align-items-center text-decoration-underline"
                    >
                      <VscArrowSmallRight className="me-2" />
                      Renewable Energy
                    </NavLink>
                  </li>
                  <li className="mb-1 ms-2">
                    <NavLink
                      to="/service/digital_solutions"
                      className="navlink d-flex align-items-center text-decoration-underline"
                    >
                      <VscArrowSmallRight className="me-2" />
                      Digital Solutions
                    </NavLink>
                  </li>
                  <li className="mb-1 ms-2">
                    <VscArrowSmallRight className="me-2 " />
                    Infrastructure & Facilities
                  </li>
                  <li className="mb-1 ms-2">
                    <VscArrowSmallRight className="me-2 " />
                    Public Private Partnerships
                  </li>
                  <li className="mb-1 ms-2">
                    <NavLink
                      to="/service/additives"
                      className="navlink d-flex align-items-center text-decoration-underline"
                    >
                      <VscArrowSmallRight className="me-2" />
                      Additives: Fuel, Lubricants & Greases
                    </NavLink>
                  </li>
                  <li className="mb-1 ms-2">
                    <NavLink
                      to="/service"
                      className="navlink d-flex align-items-center text-decoration-underline"
                    >
                      <VscArrowSmallRight className="me-2" />
                      Engineering, Procurement & Construction
                    </NavLink>
                  </li>
                  <li className="mt-4 mb-3 ms-2 d-flex align-items-center justify-content-between">
                    <NavLink
                      to="/service"
                      style={{ transition: "all 0.2s linear" }}
                      className="p-2 all_s border border-2 border-white text-white rounded d-flex align-items-center text-decoration-none"
                    >
                      All Services
                    </NavLink>
                    <NavLink
                      to="/service"
                      className=" d-none p-2 border border-2 border-white rounded d-flex align-items-center text-decoration-none"
                    ></NavLink>
                  </li>
                </ul>
              </Col>
              <Col
                data-aos="fade-right"
                className="text-white"
                style={{ backgroundColor: "#525050" }}
              >
                <ul className="p-3 list-unstyled text-decoration-none">
                  <h3
                    className="p-2 m-3 defheadFont "
                    style={{ borderBottom: "1px solid linen" }}
                  >
                    Markets
                  </h3>
                  <li className="mb-1 mt-4 ms-1">
                    <VscArrowSmallRight className="me-2 " />
                    Power
                  </li>
                  <li className="mb-1 ms-1">
                    <VscArrowSmallRight className="me-2 " />
                    Mining
                  </li>
                  <li className="mb-1 ms-1">
                    <VscArrowSmallRight className="me-2 " />
                    Energy{" "}
                  </li>
                  <li className="mb-1 ms-1">
                    <VscArrowSmallRight className="me-2 " />
                    Oil & Gas
                  </li>
                  <li className="mb-1 ms-1">
                    <VscArrowSmallRight className="me-2 " />
                    Technology
                  </li>
                  <li className="mb-1 ms-1">
                    <VscArrowSmallRight className="me-2 " />
                    Governments
                  </li>
                  <li className="mt-4 mb-3 ms-2 d-flex align-items-center justify-content-between">
                    <NavLink
                      to="/markets"
                      style={{ transition: "all 0.2s linear" }}
                      className="p-2 all_m  border border-2 border-white text-white rounded d-flex align-items-center text-decoration-none"
                    >
                      All Markets
                    </NavLink>
                    <NavLink
                      to="/markets"
                      className="d-none p-2 border border-white-2 rounded d-flex align-items-center text-decoration-none"
                    ></NavLink>
                  </li>
                </ul>
              </Col>
              <Col
                data-aos="fade-right "
                className="text-black"
                style={{ backgroundColor: "#dee2e6" }}
              >
                <ul className="p-3 list-unstyled text-decoration-none">
                  <h3
                    className="p-2 m-3 defheadFont "
                    style={{ borderBottom: "1px solid black" }}
                  >
                    Projects
                  </h3>
                  <li className="mb-1 mt-4 ms-1">
                    <VscArrowSmallRight className="me-2 " />
                    MODEC Ghana Limited
                  </li>
                  <li className="mb-1 ms-1">
                    <VscArrowSmallRight className="me-2 " />
                    AngloGold Ashanti Ghana Limited
                  </li>
                  <li className="mb-1 ms-1">
                    <VscArrowSmallRight className="me-2 " />
                    Yinson Productions West Africa Limited
                  </li>
                  <li className="mb-1 ms-1">
                    <VscArrowSmallRight className="me-2 " />
                    ENI Ghana Exploration & Production Limited
                  </li>
                  <li className="mt-4 mb-3 ms-2 d-flex align-items-center justify-content-between">
                    <NavLink
                      to="/projects"
                      style={{ transition: "all 0.2s linear" }}
                      className="all_p p-2 border border-2 border-dark text-dark rounded d-flex align-items-center text-decoration-none"
                    >
                      All Projects
                    </NavLink>
                    <NavLink
                      to="/projects"
                      className="d-none p-2 border border-white-2 rounded d-flex align-items-center text-decoration-none"
                    ></NavLink>
                  </li>
                </ul>
              </Col>
            </Row>

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
            className="d-none d-lg-block ms-0 ms-lg-3 btn btn-danger defbodyFont"
            variant="primary"
            onClick={handleSho}
          >
            Contact Sales
          </Button>
        </Container>
        {/* Request a Quote form modal */}
        <Modal
          show={showModal}
          onHide={handleClos}
          dialogClassName="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title>Contact Sales</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form autoComplete="off" onSubmit={sendEmail}>
              <Row className="py-3">
                <Col xs={12} lg={5}>
                  <Form.Group as={Col} className="mb-3">
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
                        required
                        placeholder="Enter your phone number"
                        name="sender_phone"
                      />
                    </div>
                  </Form.Group>
                  <Form.Group as={Col} md="12" className="mb-3">
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your location"
                      required
                      name="sender_location"
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} lg={7}>
                  <Form.Group as={Col} md="12" className="mb-3">
                    <Form.Label>Name of institution or Company</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter the name of your institution"
                      required
                      name="sender_institution"
                    />
                  </Form.Group>
                  <Form.Group as={Col} md="12" className="mb-3">
                    <Form.Label name="quote_details">Message</Form.Label>
                    <Form.Control
                      style={{ resize: "none" }}
                      as="textarea"
                      rows={7}
                      placeholder="Your Message here"
                      required
                      name="message"
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
            <Button variant="secondary" onClick={handleClos}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Navbar>

      {/* Offcanvas - Only for md, sm, xs screens */}
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        className="d-lg-none bg bg-danger .offcanvas"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="defbodyFont fs-3 text-white">
            Menu
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link>
              <NavLink
                onClick={handleClose}
                to="/thinking"
                className={({ isActive }) =>
                  isActive
                    ? "text-white text-decoration-none"
                    : "text-white text-decoration-none"
                }
              >
                Thinking
              </NavLink>
            </Nav.Link>

            {/* Expertise Dropdown */}
            <NavDropdown
              className="defbodyFont text-white"
              title={
                <span style={{ color: "white" }}>
                  Expertise{" "}
                  <RiArrowDownSLine
                    className={`arrow-icon ${isOpen ? "rotate" : ""}`}
                  />
                </span>
              }
              id="expertise-dropdown"
              onToggle={(isOpen) => setIsOpen(isOpen)}
            >
              <div className={`dropdown-menu-custom ${isOpen ? "open" : ""}`}>
                <NavDropdown.Item className="defbodyFont text-secondary">
                  <Nav.Link>
                    <NavLink
                      to="/service"
                      onClick={handleClose}
                      className={({ isActive }) =>
                        isActive
                          ? "text-danger text-decoration-none"
                          : "text-dark text-decoration-none"
                      }
                    >
                      Services
                    </NavLink>
                  </Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="defbodyFont text-secondary">
                  <Nav.Link>
                    <NavLink
                      onClick={handleClose}
                      to="/markets"
                      className={({ isActive }) =>
                        isActive
                          ? "text-danger text-decoration-none"
                          : "text-dark text-decoration-none"
                      }
                    >
                      Markets
                    </NavLink>
                  </Nav.Link>
                </NavDropdown.Item>

                <NavDropdown.Item className="defbodyFont text-secondary">
                  <Nav.Link>
                    <NavLink
                      onClick={handleClose}
                      to="/projects"
                      className={({ isActive }) =>
                        isActive
                          ? "text-danger text-decoration-none bg-transparent active-custom"
                          : "text-dark text-decoration-none bg-transparent"
                      }
                    >
                      Projects
                    </NavLink>
                  </Nav.Link>
                </NavDropdown.Item>
              </div>
            </NavDropdown>

            <Nav.Link>
              <NavLink
                onClick={handleClose}
                to="/careers"
                className={({ isActive }) =>
                  isActive
                    ? "text-white text-decoration-none"
                    : "text-white text-decoration-none"
                }
              >
                Careers
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                onClick={handleClose}
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-white text-decoration-none"
                    : "text-white text-decoration-none"
                }
              >
                Contact
              </NavLink>
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
