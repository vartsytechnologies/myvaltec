import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//import CompanyOverview from "../../../../assets/companyOverview.jpg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the CSS styles
import "./thinking.css";

function Section({ title, content, extraContent = "", imgSrc, imgOrder }) {
  useEffect(() => {
    AOS.init({
      duration: 1050, // Animation duration in milliseconds
      offset: 50, // Trigger animations 50px before an element is in view
    });
  }, []);
  return (
    <Container className={`defPb`}>
      <h2
        className="text-danger defheadFont"
        data-aos="fade-down"
      >
        {title}
      </h2>
      <Row>
        <Col
          xs={12} md={6}
          className={`ps-0 order-1 order-md-${imgOrder}  defbodyFont`}
        >
          <p
            data-aos="zoom-in-right"
            className="text-md-justify pt-2"
          >
            {content}
          </p>
        </Col>
        <Col xs={12} md={6} className="justify-content-start ps-0">
          <img
            src={imgSrc}
            alt={title}
            className={"img-fluid mt-2"}
            data-aos="fade-up"
          />
        </Col>
      </Row>
      <p className="defbodyFont">{extraContent}</p>
    </Container>
  );
}

export default Section;
