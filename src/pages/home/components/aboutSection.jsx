import { React } from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import DefaultButton from "../../../components/defaultButton";
import aboutImg from "../../../assets/agamine_bollard.jpg";
import { Link } from "react-router-dom";

function AboutSection() {
  return (
    <>
      <Container className="defPt defPb mb-4">
        <Row className="mt-4 flex-column">
          <Col>
            <h1 className="defheadFont text-danger">About Us</h1>
          </Col>
          <Col>
            <Row className="justify-content-between align-items-start flex-column-reverse flex-lg-row">
              <Col className="mt-4 me-sm-1 me-md-3 me-lg-4 ps-0 defbodyFont text-justify text-justify-xs-start">
                <p>
                  Established in August 2015, VALTEC is a value-driven design,
                  engineering, procurement, consulting, and project management
                  company. Our mission is to deliver compelling value through
                  technology solutions to EPCM projects, existing plants, and
                  contractors in the energy, mining, manufacturing, refinery,
                  power, oil & gas industries. VALTEC's unique blend of locally
                  available expertise and a globalized affiliated support
                  network ensures specialized precision, real-time speed, and
                  reliable service quality across all projects in Africa.
                </p>
                <p className="mt-4">
                  <Link to="/thinking">
                    {" "}
                    <DefaultButton name="Read More" variant="danger" />
                  </Link>
                </p>
              </Col>
              <Col
                xs={12}
                lg={6}
                className="zoom-out-container"
                style={{
                  borderRadius: "0",
                  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
                }}
              >
                <Card>
                  <Card.Img
                    className="img-fluid w-100 h-auto"
                    src={aboutImg}
                    style={{ borderRadius: "0", maxHeight: "400px" }}
                  />
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default AboutSection;
