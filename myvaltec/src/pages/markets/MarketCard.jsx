import React, {useEffect } from "react";
import { Card, NavDropdown, Container } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import cardImage from "../../assets/quality_assurance.jpg"
import CardImg from "../../assets/companyOverview.jpg"
import CardImg3 from "../../assets/aboutImg.png"
import CardImg4 from "../../assets/ethics_and_compliance.jpg"


function MarketCard({ title }) {
  useEffect(() => {
    AOS.init({
      duration: 1050,
      offset: 50,
    });
  });
   useEffect(() => {
     AOS.init({
       duration: 9650,
       offset: 50,  
     });
   }, []);;
  return (
    <Container>
      <div>
        <p
          style={{
            fontSize: "1.2rem",
            fontWeight: "500",
            color: "#333",
            marginBottom: "10px",
            alignItem: "center",
            textAlign: "center",
            marginTop: "10px",
          }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Exercitationem consequuntur sit, voluptate quam eaque, nihil sed
          laboriosam et deserunt perferendis doloribus illo, earum veniam
          asperiores voluptatem quis! Omnis, totam maiores?
        </p>
        <NavDropdown.Divider
          style={{
            width: "97%",
            margin: "0 auto",
            borderTop: "1px solid #333",
          }}
        />
      </div>
      <Row xs={1} md={2} clamarketsssName="g-4">
        <Col>
          <Card className="rounded-lg overflow-hidden shadow-lg">
            <Card.Body>
              <Card.Title className="text-danger fs-5">
                Energy Renewable Resources
              </Card.Title>
              <p className="text-gray-700">
                The renewable energy sector is one of our biggest markets.
              </p>
              <Card.Img
                variant="top"
                src={cardImage}
                className="w-full h-40 object-cover rounded-t-lg"
              />
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="rounded-lg overflow-hidden shadow-lg">
            <Card.Body>
              <Card.Title className="text-danger fs-5">
                Solar Innovations
              </Card.Title>
              <p className="text-gray-700">
                Our solar technologies are advancing energy independence.
              </p>
              <Card.Img
                variant="top"
                src={CardImg}
                className="w-full h-40 object-cover rounded-t-lg"
              />
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="rounded-lg overflow-hidden shadow-lg">
            <Card.Body>
              <Card.Title className="text-danger fs-5">
                Wind Power Solutions
              </Card.Title>
              <p className="text-gray-700">
                Harnessing the power of the wind for a cleaner future.
              </p>
              <Card.Img
                variant="top"
                src={CardImg4}
                className="w-full h-40 object-cover rounded-t-lg"
              />
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="rounded-lg overflow-hidden shadow-lg">
            <Card.Body>
              <Card.Title className="text-danger fs-5">
                Hydropower Initiatives
              </Card.Title>
              <p className="text-gray-700">
                Providing sustainable energy through hydropower.
              </p>
              <Card.Img
                variant="top"
                src={CardImg4}
                className="w-full h-40 object-cover rounded-t-lg"
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default MarketCard;
