import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//import { a } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Footer.css";
import footerLogo from "../../assets/valtec_logo_white.png";
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer pt-5 mt-5 defbodyFont">
      <Container>
        <Row className="mb-4">
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
              © 2024 VALTEC Limited. <br />
              All Rights Reserved
            </p>
          </Col>
          <Col
            xs={12}
            md={4}
            className="links-section  border-0 border-sm-start border-sm-2 ps-0 ps-sm-5"
          >
            <div className="footer-links-group mt-0 mt-sm-4">
              <Link to="/">Home</Link>
              <Link to="/thinking">About VALTEC</Link>
              <Link to="/markets">Markets</Link>
              
            </div>
          </Col>
          <Col
            xs={12}
            md={4}
            className="extra-links-section  border-0 border-sm-start border-sm-2 ps-0 ps-sm-5"
          >
            <div className="footer-links-group mt-0 mt-sm-4 ">
            <Link to="/service">Services</Link>
              <Link to="/projects">Projects</Link>
              {/* <a href="/">Expertise</a> */}
              <Link to="/contact">Contact Us</Link>
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
            style={{ border: "1px solid black", height: "60px" }}
          >
            <p className="text-center " style={{ fontSize: ".8rem" }}>
              Designed & developed by VartsySystems.com
            </p>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
