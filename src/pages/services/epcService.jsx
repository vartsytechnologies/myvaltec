import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./services.css";
import { GiValve, GiOilPump } from "react-icons/gi";
import { FaTools } from "react-icons/fa";
import { MdOutlineElectricalServices, MdEngineering } from "react-icons/md";
// import ReadMorebtn from "./readMorebtn";

//the epc section on the services page

const EpcSection = () => {
  return (
    <Container fluid className="px-5 py-4">
      <Row className="align-items-center">
        {/* Left side - Text Section */}
        <Col md={6} className="d-flex flex-column justify-content-center">
          <p className="text-danger defheadFont">
            <MdEngineering className="mb-2 s-icon" /> Engineering Procurement
            and Construction
            <hr
              style={{
                borderTop: "2px solid rgba(255,17,67,1)",
                borderRadius: "4px",
                opacity: "1",
              }}
            />
          </p>
          <p className="defbodyFont">
            VALTEC Limited offers comprehensive EPC (Engineering, Procurement,
            and Construction) services, tailored to meet the complex needs of
            the energy, mining, oil, and gas sectors. Our team brings a wealth
            of experience, utilizing advanced technology and local expertise to
            streamline project execution from design to completion.
            <br />
            <br />
            {/* <ReadMorebtn/> */}
          </p>
        </Col>

        {/* Right side - Product Grid */}
        <Col md={6}>
          <Row>
            {/* Top Row */}
            <Col md={6} className="mb-2">
              <Link to="/pvf" className="text-decoration-none">
                <Card
                  className="text-white text-center p-3"
                  style={{ backgroundColor: "#f00" }}
                >
                  <Card.Body>
                    {/* <div className="mb-2">🔧</div>
                     */}
                    <GiValve className="mb-2 b-icon" />
                    <Card.Title>Pipe, Valves, Fittings & Flanges</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col md={6} className="mb-2">
              <Link to="/pumps" className="text-decoration-none">
                <Card
                  className="text-white text-center p-3"
                  style={{ backgroundColor: "#a00000" }}
                >
                  <Card.Body>
                    {/* <div className="mb-2">🔬</div> */}
                    <GiOilPump className="mb-2 b-icon" />
                    <Card.Title>Pumps, Production & Drilling</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          </Row>
          <Row>
            {/* Bottom Row */}
            <Col md={6}>
              <Link to="/mill" className="text-decoration-none">
                <Card
                  className="text-white text-center p-3"
                  style={{ backgroundColor: "#800000" }}
                >
                  <Card.Body>
                    {/* <div className="mb-2">🛠</div> */}
                    <FaTools className="mb-2 b-icon" />
                    <Card.Title>Mill, Tools, MRO & Consumables</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col md={6}>
              <Link to="/electrical" className="text-decoration-none">
                <Card
                  className="text-white text-center p-3"
                  style={{ backgroundColor: "#1a1a1a" }}
                >
                  <Card.Body>
                    {/* <div className="mb-2">⚡</div> */}
                    <MdOutlineElectricalServices className="mb-2 b-icon" />
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

export default EpcSection;
