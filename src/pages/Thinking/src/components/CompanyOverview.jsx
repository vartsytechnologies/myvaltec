import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import companyOverview from "../../../../assets/aboutImg.jpg";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css"; // Import the CSS styles
import "./thinking.css";

function CompanyOverview() {
  useEffect(() => {
    AOS.init({
      duration: 1050, // Animation duration in milliseconds
      offset: 50, // Trigger animations 50px before an element is in view
    });
  }, []);
  return (
    <Container className="defPt defPb">
      
      <Row className="align-items-center">
        <Col
          md={6}
        >
          <h2
        className="text-danger defheadFont"
        data-aos="fade-left"
      >
        Company Overview
      </h2>
          <p
            data-aos="fade-left"
            className="mt-3 me-sm-1 me-md-3 me-lg-4 defbodyFont"
          >
            Established in August 2015, VALTEC is a value-driven design,
            engineering, procurement, construction, and management consulting
            company. Our locally available expertise and globally affiliated
            support network will provide your projects, plants, and operations
            in Africa with specialized precision, real-time speed, reliability,
            and sustainable solutions. Delivering value through technology
            solutions is the core principle that drives our innovation and
            commitments to our clients.
          </p>
        </Col>
        <Col
          md={6}
          className="zoom-out-container"
        >
          <img
            src={companyOverview}
            alt="Company"
            // className="img-fluid"
            data-aos="fade-right"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default CompanyOverview;
