
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import companyOverview from '../../../../assets/companyOverview.jpg';

function CompanyOverview() {
  return (
    <Container className="my-5">
      <h2 className="text-danger">Company Overview</h2>
      <Row>
        <Col md={7}>
          <p>Established in August 2015, VALTEC is a value-driven design, engineering, procurement, construction, and management consulting company. Our locally available expertise and globally affiliated support network will provide your projects, plants, and operations in Africa with specialized precision, real-time speed, reliability, and sustainable solutions.
            Delivering value through technology solutions is the core principle that drives our innovation and commitments to our clients.</p>
        </Col>
        <Col md={5}>
          <img src={companyOverview} alt="Company" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
}

export default CompanyOverview;
