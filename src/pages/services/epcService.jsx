import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom"; // Assuming you are using React Router
import ReadMorebtn from "./readMorebtn";


const ProductsSection = () => {
  return (
    <Container fluid className="px-5 py-4">
      <Row className="align-items-center">
        {/* Left side - Text Section */}
        <Col md={6} className="d-flex flex-column justify-content-center">
          <h2 className="fw-bold">
            Engineering Procurement and Construction
          </h2>
          <p>
          VALTEC Limited offers comprehensive EPC (Engineering, Procurement, and Construction) services, tailored to meet the complex needs of the energy, mining, oil, and gas sectors. Our team brings a wealth of experience, utilizing advanced technology and local expertise to streamline project execution from design to completion.
          <br /><br />
          {/* <ReadMorebtn/> */}
          </p>
          
        </Col>

        {/* Right side - Product Grid */}
        <Col md={6}>
          <Row>
            {/* Top Row */}
            <Col md={6} className="mb-2">
              <Link to="/pvf" className="text-decoration-none">
                <Card className="text-white text-center p-3" style={{ backgroundColor: "#f00" }}>
                  <Card.Body>
                    <div className="mb-2">🔧</div>
                    <Card.Title>Pipe, Valves, Fittings & Flanges</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col md={6} className="mb-2">
              <Link to="/pumps-drilling" className="text-decoration-none">
                <Card className="text-white text-center p-3" style={{ backgroundColor: "#a00000" }}>
                  <Card.Body>
                    <div className="mb-2">🔬</div>
                    <Card.Title>Pumps, Production & Drilling</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          </Row>
          <Row>
            {/* Bottom Row */}
            <Col md={6}>
              <Link to="/mro-tools" className="text-decoration-none">
                <Card className="text-white text-center p-3" style={{ backgroundColor: "#800000" }}>
                  <Card.Body>
                    <div className="mb-2">🛠</div>
                    <Card.Title>Mill, Tools, MRO & Consumables</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col md={6}>
              <Link to="/electrical-products" className="text-decoration-none">
                <Card className="text-white text-center p-3" style={{ backgroundColor: "#1a1a1a" }}>
                  <Card.Body>
                    <div className="mb-2">⚡</div>
                    <Card.Title>Electrical Cable & Products</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductsSection;
