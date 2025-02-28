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
import DownloadButton from "./Profile";
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
        {`
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
            className="d-lg-none border border-2 border-danger bg-transparent"
            onClick={handleShow}
          >
            <RxHamburgerMenu className="fs-3 text-danger fw-bolder" />
          </Button>

          <Nav className=" defbodyFont mx-auto d-none d-lg-flex align-items-between">
            <Nav.Link>
              <NavLink
                to="/thinking"
                className={({ isActive }) =>
                  isActive ? "mainlink active" : "mainlink"
                }
              >
                Thinking
              </NavLink>
            </Nav.Link>

            <Nav.Link
              className={`dropdowns text-black ${
                showDropdown ? "active-dropdown" : ""
              }`}
              onFocus={() => setShowDropdown(true)}
              onBlur={() => setShowDropdown(false)}
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <span className={`mainlink ${showDropdown ? "text-danger" : ""}`}>
                Expertise
              </span>
              <RiArrowDownSLine
                className="ms-2"
                style={{
                  transform: showDropdown ? "rotate(180deg)" : "rotate(0deg)",
                  color: showDropdown ? "red" : "inherit",
                  transition:
                    "transform 0.3s ease-in-out, color 0.3s ease-in-out",
                }}
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

                  <li className="listnav mb-1 mt-4 ms-2">
                    <VscArrowSmallRight className="me-2 " />
                    Calibration
                  </li>
                  <li className="listnav mb-1 ms-2">
                    <NavLink
                      to="/service/sustainability"
                      className="navlink d-flex align-items-center text-decoration-underline"
                    >
                      <VscArrowSmallRight className="me-2" />
                      Sustainability
                    </NavLink>
                  </li>
                  <li className="listnav mb-1 ms-2">
                    <NavLink
                      to="/service/digital_solutions"
                      className="navlink d-flex align-items-center text-decoration-underline"
                    >
                      <VscArrowSmallRight className="me-2" />
                      Data & Analytics
                    </NavLink>
                  </li>
                  <li className="listnav mb-1 ms-2">
                    <NavLink
                      to="/service/renewable_energy"
                      className="navlink d-flex align-items-center text-decoration-underline"
                    >
                      <VscArrowSmallRight className="me-2" />
                      Renewable Energy
                    </NavLink>
                  </li>
                  <li className="listnav mb-1  ms-2">
                    <NavLink
                      to="/service/reliability_services"
                      className="navlink d-flex align-items-center text-decoration-underline"
                    >
                      <VscArrowSmallRight className="me-2" />
                      Precison & Reliability
                    </NavLink>
                  </li>
                  <li className="listnav mb-1 ms-2">
                    <VscArrowSmallRight className="me-2 " />
                    Infrastructure & Facilities
                  </li>
                  <li className="listnav mb-1 ms-2">
                    <VscArrowSmallRight className="me-2 " />
                    Public Private Partnerships
                  </li>
                  <li className="listnav mb-1 ms-2">
                    <NavLink
                      to="/service/additives"
                      className="navlink d-flex align-items-center text-decoration-underline"
                    >
                      <VscArrowSmallRight className="me-2" />
                      Additives: Fuel, Lubricants & Greases
                    </NavLink>
                  </li>
                  <li className="listnav mb-1 ms-2">
                    <NavLink
                      to="/service"
                      className="navlink d-flex align-items-center text-decoration-underline"
                    >
                      <VscArrowSmallRight className="me-2" />
                      Engineering, Procurement, Consulting & Project Management
                    </NavLink>
                  </li>
                  <li className="listnav mt-4 mb-3 ms-2 d-flex align-items-center justify-content-between">
                    <NavLink
                      to="/service"
                      style={{ transition: "all 0.2s linear" }}
                      className="p-2 px-3 all_s border border-2 border-white text-white rounded d-flex align-items-center text-decoration-none"
                    >
                      Services
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
                  <li className="listnav mb-1 mt-4 ms-1">
                    <VscArrowSmallRight className="me-2 " />
                    Power
                  </li>
                  <li className="listnav mb-1 ms-1">
                    <VscArrowSmallRight className="me-2 " />
                    Mining
                  </li>
                  <li className="listnav mb-1 ms-1">
                    <VscArrowSmallRight className="me-2 " />
                    Energy{" "}
                  </li>
                  <li className="listnav mb-1 ms-1">
                    <VscArrowSmallRight className="me-2 " />
                    Oil & Gas
                  </li>
                  <li className="listnav mb-1 ms-1">
                    <VscArrowSmallRight className="me-2 " />
                    Technology
                  </li>
                  <li className="listnav mb-1 ms-1">
                    <VscArrowSmallRight className="me-2 " />
                    Governments
                  </li>
                  <li className="listnav mt-4 mb-3 ms-2 d-flex align-items-center justify-content-between">
                    <NavLink
                      to="/markets"
                      style={{ transition: "all 0.2s linear" }}
                      className="p-2 px-3 all_m  border border-2 border-white text-white rounded d-flex align-items-center text-decoration-none"
                    >
                      Markets
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
                  <li className="listnav mb-1 mt-4 ms-1">
                    <VscArrowSmallRight className="me-2 " />
                    MODEC Ghana Limited
                  </li>
                  <li className="listnav mb-1 ms-1">
                    <VscArrowSmallRight className="me-2 " />
                    AngloGold Ashanti Ghana Limited
                  </li>
                  <li className="listnav mb-1 ms-1">
                    <VscArrowSmallRight className="me-2 " />
                    Yinson Productions West Africa Limited
                  </li>
                  <li className="listnav mb-1 ms-1">
                    <VscArrowSmallRight className="me-2 " />
                    ENI Ghana Exploration & Production Limited
                  </li>
                  <li className="listnav mt-4 mb-3 ms-2 d-flex align-items-center justify-content-between">
                    <NavLink
                      to="/projects"
                      style={{ transition: "all 0.2s linear" }}
                      className="all_p p-2 px-3 border border-2 border-dark text-dark rounded d-flex align-items-center text-decoration-none"
                    >
                      Projects
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
                  isActive ? "mainlink active" : "mainlink"
                }
              >
                Careers
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "mainlink active" : "mainlink"
                }
              >
                Contact
              </NavLink>
            </Nav.Link>
          </Nav>
          <DownloadButton className="defbodyFont mx-3 nav_btn d-lg-block d-none me-2" />
          <Button
            className="navy_btn d-none d-lg-block ms-0 ms-lg-3 btn btn-danger defbodyFont"
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
        <Offcanvas.Header closeButton className="btn-close-white">
          <Offcanvas.Title className="defbodyFont fs-3 text-white">
            Menu
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link className="offlinks">
              <NavLink
                onClick={handleClose}
                to="/"
                className=" text-white text-decoration-none"
              >
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link className="offlinks">
              <NavLink
                onClick={handleClose}
                to="/thinking"
                className="text-white text-decoration-none"
              >
                Thinking
              </NavLink>
            </Nav.Link>

            {/* Expertise Dropdown */}
            <NavDropdown
              className="offlinks defbodyFont text-white"
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
                <NavDropdown.Item className="bg-white defbodyFont text-secondary">
                  <Nav.Link className="offlinks">
                    <NavLink
                      to="/service"
                      onClick={handleClose}
                      className={({ isActive }) =>
                        isActive
                          ? "text-danger text-decoration-none"
                          : "text-dark text-decoration-none bg-white"
                      }
                    >
                      Services
                    </NavLink>
                  </Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="bg-white defbodyFont text-secondary">
                  <Nav.Link className="offlinks">
                    <NavLink
                      onClick={handleClose}
                      to="/markets"
                      className={({ isActive }) =>
                        isActive
                          ? "  text-danger text-decoration-none"
                          : "text-dark text-decoration-none"
                      }
                    >
                      Markets
                    </NavLink>
                  </Nav.Link>
                </NavDropdown.Item>

                <NavDropdown.Item className="bg-white defbodyFont text-secondary">
                  <Nav.Link className="offlinks">
                    <NavLink
                      onClick={handleClose}
                      to="/projects"
                      className={({ isActive }) =>
                        isActive
                          ? "text-danger text-decoration-none active-custom"
                          : "text-dark text-decoration-none "
                      }
                    >
                      Projects
                    </NavLink>
                  </Nav.Link>
                </NavDropdown.Item>
              </div>
            </NavDropdown>

            <Nav.Link className="offlinks">
              <NavLink
                onClick={handleClose}
                to="/careers"
                className="text-white text-decoration-none"
              >
                Careers
              </NavLink>
            </Nav.Link>
            <Nav.Link className="offlinks">
              <NavLink
                onClick={handleClose}
                to="/contact"
                className="text-white text-decoration-none"
              >
                Contact
              </NavLink>
            </Nav.Link>
          </Nav>
          <DownloadButton className="defbodyFont mt-3 offcanvas_btn d-md-block d-lg-none me-2" />
          <hr className="text-white mt-5" />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
