import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//import CompanyOverview from "../../../../assets/companyOverview.jpg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the CSS styles

function Section({ title, content, extraContent, imgSrc }) {
  useEffect(() => {
    AOS.init({
      duration: 950, // Animation duration in milliseconds
      offset: 50, // Trigger animations 50px before an element is in view
    });
  }, []);
  return (
    <Container className="my-5">
      <h2 className="text-danger" data-aos="fade-down">
        {title}
      </h2>
      <Row>
        <Col md={7} className="ps-0">
          <p data-aos="zoom-in-right">{content}</p>
        </Col>
        <Col md={5}>
          <img
            src={imgSrc}
            alt={title}
            className="img-fluid"
            data-aos="fade-up"
          />
        </Col>
      </Row>
      <p>{extraContent}</p>
    </Container>
  );
}

export default Section;
