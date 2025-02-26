import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Solar from "../../../../assets/solars.jpeg";
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
        <Col md={6}>
          <h2 className="text-danger defheadFont" data-aos="fade-left">
            Company Overview
          </h2>
          <p
            data-aos="fade-left"
            className="mt-3 me-sm-1 me-md-3 me-lg-4 defbodyFont"
          >
            Established in August 2015, VALTEC is a value-driven design,
            engineering, procurement, consulting, and project management
            company. Our mission is to deliver compelling value through
            technology solutions to deliver compelling EPCM projects, existing
            plants, and contractors in the energy, mining, manufacturing,
            refinery, power, oil & gas industries. VALTEC's unique blend of
            locally available expertise and a globalized affiliated support
            network ensures specialized precision, real-time speed, and reliable
            service quality across all projects in Africa.
          </p>
        </Col>
        <Col md={6} className="zoom-out-container">
          <img
            src={Solar}
            alt="Overview"
            // className="img-fluid"
            data-aos="fade-right"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default CompanyOverview;
