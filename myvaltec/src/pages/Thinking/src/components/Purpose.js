
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
//import placeholderImg from './placeholder.jpg';
import CompanyOverview from '../../../../assets/companyOverview.jpg';

function Purpose() {
  return (
    <Container className="my-5">
      <Row>
        <Col md={4}>
          <img src={CompanyOverview} alt="Purpose" className="img-fluid" />
        </Col>
        <Col md={8}>
          <h2 className="text-danger">Our Purpose</h2>
          <ul>
            <li>Deliver value through technology.</li>
            <li>Demonstrate leadership with excellence.</li>
            <li>Think innovatively while embracing new ideas.</li>
            <li>Operate ethically and with integrity, prioritizing safety and security.</li>
            <li>Collaborate with unrivaled expertise to solve complex challenges.</li>
            <li>Share success with our stakeholders.</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Purpose;
