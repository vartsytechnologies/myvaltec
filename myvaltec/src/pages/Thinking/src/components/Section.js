
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CompanyOverview from '../../../../assets/companyOverview.jpg';

function Section({ title, content, extraContent }) {
  return (
    <Container className="my-5">
      <h2 className="text-danger">{title}</h2>
      <Row>
        <Col md={8}>
          <p>{content}</p>
        </Col>
        <Col md={4}>
          <img src={CompanyOverview} alt={title} className="img-fluid"/>
        </Col>
      </Row>
      <p>{extraContent}</p>
    </Container>
  );
}

export default Section;
