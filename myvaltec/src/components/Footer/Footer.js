import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//import { a } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Footer.css";
import footerLogo from "../../assets/valtec_logo_white.png";

function Footer() {
  return (
    <footer className="footer pt-5 pb-5 mt-5 defbodyFont">
      <Container>
        <Row>
          <Col
            xs={12}
            md={4}
            className="logo-section text-center"
          >
            <img
              src={footerLogo}
              alt="Valtec Logo"
              className="footer-logo"
            />
            <Row className="social-icons-row ">
              <Col className="social-icons">
                <a
                  href="https://facebook.com"
                  aria-label="Facebook"
                >
                  <FaFacebook size={30} />
                </a>
                <a
                  href="https://instagram.com"
                  aria-label="Instagram"
                >
                  <FaInstagram size={30} />
                </a>
                <a
                  href="https://twitter.com"
                  aria-label="X"
                >
                  <FaTwitter size={30} />
                </a>
              </Col>
            </Row>
            <p>
              © 2024 VALTEC Ltd. <br />
              All Rights Reserved
            </p>
          </Col>
          <Col
            xs={12}
            md={4}
            className="links-section  border-0 border-sm-start border-sm-2 ps-0 ps-sm-5"
          >
            <div className="footer-links-group mt-0 mt-sm-4">
              <a href="/blog">Home</a>
              <a href="/about">About VALTEC</a>
              <a href="/markets">Markets</a>
              <a href="/services">Services</a>
            </div>
          </Col>
          <Col
            xs={12}
            md={4}
            className="extra-links-section  border-0 border-sm-start border-sm-2 ps-0 ps-sm-5"
          >
            <div className="footer-links-group mt-0 mt-sm-4 ">
              <a href="/offices">Partners</a>
              <a href="/projects">Projects</a>
              <a href="/careers">Expertise</a>
              <a href="/contact">Contact Us</a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
