import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//import { a } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Footer.css";
import footerLogo from "../../assets/valtec_logo_white.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer pt-5 mt-5 defbodyFont">
      <Container>
        <Row className="mb-5">
          <Col xs={12} md={4} className="logo-section text-center">
            <img src={footerLogo} alt="Valtec Logo" className="footer-logo" />
            <Row className="social-icons-row ">
              <Col className="social-icons">
                <a href="https://facebook.com" aria-label="Facebook">
                  <FaFacebook size={30} />
                </a>
                <a href="https://instagram.com" aria-label="Instagram">
                  <FaInstagram size={30} />
                </a>
                <a href="https://twitter.com" aria-label="X">
                  <FaTwitter size={30} />
                </a>
              </Col>
            </Row>
            <p>
              © 2025 VALTEC. <br />
              All Rights Reserved.
            </p>
          </Col>
          <Col
            xs={12}
            md={4}
            className="links-section text-start text-xs-center border-0 border-sm-start border-sm-2 ps-0 ps-sm-5"
          >
            <div className="footer-links-group">
              <p className=" m-0 pb-0 fw-bolder">Quick Links</p>
              <Link to="/">Home</Link>
              <Link to="/thinking">About VALTEC</Link>
              <Link to="/markets">Markets</Link>
              <Link to="/service">Services</Link>
              <Link to="/projects">Projects</Link>
            </div>
          </Col>
          <Col
            xs={12}
            md={4}
            className="extra-links-section text-start text-xs-center border-0 border-sm-start border-sm-2 ps-0 ps-sm-5"
          >
            <div className="footer-links-group">
              <p className=" m-0 pb-0 fw-bolder ">Contact Us</p>
              <p className="pt-1">
                Email :{" "}
                <a href="mailto:sales@myvaltec.com">sales@myvaltec.com</a>
                <br />
              </p>
              <p className="call">Call : (+233) 534 404 0014</p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row
          style={{
            backgroundColor: "rgba(19, 18, 18, 0.842)",
          }}
        >
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ height: "70px" }}
          >
            <p className="mt-3 text-center " style={{ fontSize: ".8rem" }}>
              Designed & developed by Vartsy Systems
            </p>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
