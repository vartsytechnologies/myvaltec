import React, { useEffect } from "react";
import { Card, NavDropdown } from "react-bootstrap";
import AOS from "aos";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function MarketCard({ title }) {
  useEffect(() => {
    AOS.init({
      duration: 950,
      offset: 50,
    });
  });
  return (
    <div>
      <div>
        <p>Hello welcome to the world of react with boostrap</p>
        <NavDropdown.Divider />
      </div>
      <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col key={idx}>
            <Card
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <Card.Body>
                <Card.Title style={{ color: "red", fontWeight: "bold" }}>
                  Energy and Renewables
                </Card.Title>
                <Card.Text>
                  The Renewable energy sector is one of our biggest markets.
                </Card.Text>
                <Card.Img
                  variant="top"
                  src="holder.js/200px180"
                  style={{
                    width: "100%",
                    height: "300px",
                    objectFit: "cover",
                    borderRadius: "5px",
                  }}
                />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default MarketCard;
