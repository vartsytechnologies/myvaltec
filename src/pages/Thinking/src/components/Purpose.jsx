import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import purpose from '../../../../assets/purpose.jpg';
import './thinking.css'

function Purpose() {
  useEffect(() => {
    AOS.init({
      duration: 1050, // Animation duration in milliseconds
      offset: 50, // Trigger animations 50px before an element is in view
    });
  }, []);

  return (
    <Container fluid className="defPb defPt mb-5" style={{background:'rgb(240, 240, 240)'}}>
      <Container>
      <Row>
        <Col md={5}>
          <img
            src={purpose}
            alt="Purpose"
            className="img-fluid pb-2"
            data-aos="fade-left"
          />
        </Col>
        <Col md={7} >
          <h2 className="text-danger ps-2 defheadFont" data-aos="fade-up">
            Our Purpose
          </h2>
          <ul className="defbodyFont">
            <li data-aos="fade-up">Deliver value through technology.</li>
            <li data-aos="fade-up">Demonstrate leadership with excellence.</li>
            <li data-aos="fade-up">
              Think innovatively while embracing new ideas.
            </li>
            <li data-aos="fade-up">
              Operate ethically and with integrity, prioritizing safety and
              security.
            </li>
            <li data-aos="fade-up">
              Collaborate with unrivaled expertise to solve complex challenges.
            </li>
            <li data-aos="fade-up">Share success with our stakeholders.</li>
          </ul>
        </Col>
      </Row>
      </Container>
    </Container>
  );
}

export default Purpose;
