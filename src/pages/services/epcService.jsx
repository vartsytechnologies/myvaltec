import { React } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./services.css";
import { GiValve, GiOilPump } from "react-icons/gi";
import { FaTools } from "react-icons/fa";
import { MdOutlineElectricalServices, MdEngineering } from "react-icons/md";
import AnimatedElement from "../../components/motionComponent";

const EpcSection = () => {
  return (
    <AnimatedElement
      as={Container}
      fluid
      className="px-2 py-3"
      animation="fade-up"
    >
      <Row className="align-items-center">
        {/* Left side - Text Section */}
        <Col
          lg={6}
          sm={12}
          className="d-flex flex-column justify-content-center"
        >
          <div
            style={{ borderBottom: "2px solid rgba(255, 17, 67, 1);" }}
            className="d-flex align-items-center justify-content-start"
          >
            <MdEngineering className="mb-2 s-icon" />{" "}
            <p className="mx-3 text-danger defheadFont">
              Engineering, Procurement, Consulting <br />& Project Management
            </p>
          </div>

          <p className="pt-3 defbodyFont">
            VALTEC offers comprehensive Engineering, Procurement, Consulting &
            Project Management services, tailored to meet the complex needs of
            the energy, mining, oil, and gas sectors. Our team brings a wealth
            of experience, utilizing advanced technology and local expertise to
            streamline project execution from design to completion.
            <br />
          </p>
        </Col>

        {/* Right side - Product Grid */}
        <Col lg={6} sm={12}>
          <Row>
            {/* Top Row */}
            <Col md={6} className="mb-2">
              <Link to="/pvf" className="text-decoration-none">
                <Card
                  className="text-white text-center p-3"
                  style={{ backgroundColor: "#1a1a1a" }}
                >
                  <Card.Body>
                    <GiValve className="mb-2 b-icon" />

                    <p className="defbodyFont">
                      Pipe, Valves, Fittings & Flanges
                    </p>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col md={6} className="mb-2">
              <Link to="/pumps" className="text-decoration-none">
                <Card
                  className="text-white text-center p-3"
                  style={{ backgroundColor: "rgb(189, 14, 52)" }}
                >
                  <Card.Body>
                    <GiOilPump className="mb-2 b-icon" />
                    <p className="defbodyFont">Pumps, Production & Drilling</p>
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
                  style={{ backgroundColor: "rgb(189, 14, 52)" }}
                >
                  <Card.Body>
                    <FaTools className="mb-2 b-icon" />
                    <p className="defbodyFont">
                      Mill, Tools, MRO & Consumables
                    </p>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col md={6}>
              <Link to="/electrical" className="text-decoration-none">
                <Card
                  className="text-white text-center p-3 mt-2 mt-md-0"
                  style={{ backgroundColor: "#1a1a1a" }}
                >
                  <Card.Body>
                    <MdOutlineElectricalServices className="mb-2 b-icon" />
                    <p className="defbodyFont">Electrical Cable & Products</p>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </AnimatedElement>
  );
};

export default EpcSection;
