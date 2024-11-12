import React, { useEffect } from "react";
import { Card, Container, NavDropdown } from "react-bootstrap";
import AOS from "aos";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function MarketCard({ title }) {
  useEffect(() => {
    AOS.init({
      duration: 1050,
      offset: 50,
    });
  });
  return (
    <Container>
      <div>
        <NavDropdown.Divider />
      </div>
      <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 6 }).map((_, idx) => (
          <Col xs={12} lg={6} xl={4} key={idx}>
            <Card data-aos="fade-up"
              style={{
                border: "3px solid #ddd",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <Card.Body>
                <Card.Title className="defheadFont text-danger" data-aos="fade-up">
                  Energy and Renewables
                </Card.Title>
                <Card.Text className="defbodyFont" data-aos="fade-up" data-aos-delay="200">
                  The Renewable energy sector is one of our biggest markets.
                </Card.Text>
                <Card.Img data-aos="fade-up" data-aos-delay="300"
                  variant="top"
                  src="holder.js/200px180"
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "cover",
                    borderRadius: "5px",
                  }}
                />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default MarketCard;
