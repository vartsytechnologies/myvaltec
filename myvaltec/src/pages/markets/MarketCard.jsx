import React, { useEffect } from "react";
import { Card, Container } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
//market images
import oil1 from "../../assets/markets_img/oil_1.jpg";
import energy1 from "../../assets/markets_img/energy_1.jpg";
import tech1 from "../../assets/markets_img/new/tech1.jpg";
import power1 from "../../assets/markets_img/power_1.jpg";
import mine1 from "../../assets/markets_img/mine_1.jpg";
import gov1 from "../../assets/markets_img/gov_uk.jpg";
import health1 from "../../assets/markets_img/health_1.jpg";
//new images
import gov from "../../assets/markets_img/new/Skyscrappers.jpg";
import mine from "../../assets/markets_img/new/Miningpit.jpg";
import energy from "../../assets/markets_img/new/RoofPVSolar.jpg";
import power from "../../assets/markets_img/new/PowerPlant.jpg";
import oil from "../../assets/markets_img/new/Powerplantimg.jpeg";
import oilA from "../../assets/markets_img/new/oilA.JPG";

function MarketCard({ title }) {
  useEffect(() => {
    AOS.init({
      duration: 550,
      offset: 50,
    });
  });
  return (
    <Container>
      <Row
        xs={1}
        md={2}
        clamarketsssName="g-4"
      >
        <Col className="mt-3">
          <Card className="rounded-lg overflow-hidden">
            <Card.Body>
              <Card.Title
                className="text-danger fs-3 defheadFont"
                data-aos="fade-up"
              >
                Oil and Gas
              </Card.Title>
              <p
                className="text-gray defbodyFont"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                VALTEC undertakes projects in the OIl and Gas market.
              </p>
              <Card.Img
                variant="top"
                src={oilA}
                className="w-full h-40 object-cover rounded-t-lg"
                data-aos="fade-up"
                data-aos-delay="300"
              />
            </Card.Body>
          </Card>
        </Col>

        <Col className="mt-3">
          <Card className="rounded-lg overflow-hidden">
            <Card.Body>
              <Card.Title
                className="text-danger fs-3 defheadFont"
                data-aos="fade-up"
              >
                Energy
              </Card.Title>
              <p
                className="text-gray defbodyFont"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                We specialize in all projects in the energy sector.
              </p>
              <Card.Img
                variant="top"
                src={energy}
                className="w-full h-40 object-cover rounded-t-lg"
                data-aos="fade-up"
                data-aos-delay="300"
              />
            </Card.Body>
          </Card>
        </Col>

        <Col className="mt-2">
          <Card className="rounded-lg overflow-hidden">
            <Card.Body>
              <Card.Title
                className="text-danger fs-3 defheadFont"
                data-aos="fade-up"
              >
                Mining
              </Card.Title>
              <p
                className="text-gray defbodyFont"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                All your needs at the mining site will be catered for by VALTEC.
              </p>
              <Card.Img
                variant="top"
                src={mine}
                className="w-full h-40 object-cover rounded-t-lg"
                data-aos="fade-up"
                data-aos-delay="300"
              />
            </Card.Body>
          </Card>
        </Col>

        {/* <Col className="mt-2">
          <Card className="rounded-lg overflow-hidden">
            <Card.Body>
              <Card.Title
                className="text-danger fs-3 defheadFont"
                data-aos="fade-up"
              >
                Healthcare
              </Card.Title>
              <p
                className="text-gray defbodyFont"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                We provide sustainable healthcare solutions
              </p>
              <Card.Img
                variant="top"
                src={health1}
                className="w-full h-40 object-cover rounded-t-lg"
                data-aos="fade-up"
                data-aos-delay="300"
              />
            </Card.Body>
          </Card>
        </Col> */}

        <Col className="mt-2">
          <Card className="rounded-lg overflow-hidden">
            <Card.Body>
              <Card.Title
                className="text-danger fs-3 defheadFont"
                data-aos="fade-up"
              >
                Power
              </Card.Title>
              <p
                className="text-gray defbodyFont"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Powering Industries for Impact
              </p>
              <Card.Img
                variant="top"
                src={power}
                className="w-full h-40 object-cover rounded-t-lg"
                data-aos="fade-up"
                data-aos-delay="300"
              />
            </Card.Body>
          </Card>
        </Col>
        <Col className="mt-2">
          <Card className="rounded-lg overflow-hidden">
            <Card.Body>
              <Card.Title
                className="text-danger fs-3 defheadFont"
                data-aos="fade-up"
              >
                Technology
              </Card.Title>
              <p
                className="text-gray defbodyFont"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                We deliver value through technology
              </p>
              <Card.Img
                variant="top"
                src={tech1}
                className="w-full h-40 object-cover rounded-t-lg"
                data-aos="fade-up"
                data-aos-delay="300"
              />
            </Card.Body>
          </Card>
        </Col>
        <Col className="mt-2">
          <Card className="rounded-lg overflow-hidden">
            <Card.Body>
              <Card.Title
                className="text-danger fs-3 defheadFont"
                data-aos="fade-up"
              >
                Governments
              </Card.Title>
              <p
                className="text-gray defbodyFont"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                You can trust us for all government infrastructure
              </p>
              <Card.Img
                variant="top"
                src={gov}
                className="w-full h-40 object-cover rounded-t-lg"
                data-aos="fade-up"
                data-aos-delay="300"
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default MarketCard;
