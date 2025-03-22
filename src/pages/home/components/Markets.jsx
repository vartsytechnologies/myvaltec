import React, { useState } from "react";
import { Container, Row, Col, Image, Tab, Nav } from "react-bootstrap";
import "../home.css";
import { FaIndustry, FaBuilding, FaLandmark, FaRecycle } from "react-icons/fa";

import AnimatedElement from "../../../components/motionComponent";

//market images
import oil_1 from "../../../assets/markets_img/new/oilA.JPG";
import oil_2 from "../../../assets/markets_img/new/oilC.JPG";
import energy_1 from "../../../assets/markets_img/new/RoofPVSolar.jpg";
import lights from "../../../assets/markets_img/new/solar.webp";
import gov_ger from "../../../assets/markets_img/new/Skyscrappers.jpg";
import gov_uk from "../../../assets/markets_img/new/Eco-building.jpg";
import mine_1 from "../../../assets/markets_img/new/Miningpit.jpg";
import mine_2 from "../../../assets/markets_img/new/Mineplant.jpg";
import power_1 from "../../../assets/markets_img/new/PowerPlant1.jpg";
import power_2 from "../../../assets/markets_img/new/PowerPlant2.jpg";
import tech_1 from "../../../assets/markets_img/new/tech1.jpg";
import tech_drone from "../../../assets/markets_img/new/tech2.jpg";

const Markets = () => {
  const [activeTab, setActiveTab] = useState("oilGas");

  const tabContent = {
    oilGas: [
      [{ sectionTitle: "Oil & Gas" }],
      [
        {
          title: "Oil & Gas Infrastructure",
          description: "Lorem ipsum dolor sit amet...",
          img: oil_1,
        },
        {
          title: "Oil & Gas Infrastructure",
          description: "Lorem ipsum dolor sit amet...",
          img: oil_2,
        },
      ],
    ],
    renewableEnergy: [
      [{ sectionTitle: "Energy " }],
      [
        {
          title: "Renewable Energy",
          description: "Lorem ipsum dolor sit amet...",
          img: lights,
        },
        {
          title: "Renewable Energy",
          description: "Lorem ipsum dolor sit amet...",
          img: energy_1,
        },
      ],
    ],
    mining: [
      [{ sectionTitle: "Mining" }],
      [
        {
          title: "Mining",
          description: "Lorem ipsum dolor sit amet...",
          img: mine_1,
        },
        {
          title: "Oil and Gas Infrastructure",
          description: "Lorem ipsum dolor sit amet...",
          img: mine_2,
        },
      ],
    ],
    power: [
      [{ sectionTitle: "Power " }],
      [
        {
          title: "Power ",
          description: "Lorem ipsum dolor sit amet...",
          img: power_1,
        },
        {
          title: "Oil and Gas Infrastructure",
          description: "Lorem ipsum dolor sit amet...",
          img: power_2,
        },
      ],
    ],
    tech: [
      [{ sectionTitle: "Technology " }],
      [
        {
          title: "Technology ",
          description: "Lorem ipsum dolor sit amet...",
          img: tech_1,
        },
        {
          title: "Oil and Gas Infrastructure",
          description: "Lorem ipsum dolor sit amet...",
          img: tech_drone,
        },
      ],
    ],
    gov: [
      [{ sectionTitle: "Governments " }],
      [
        {
          title: "Power ",
          description: "Lorem ipsum dolor sit amet...",
          img: gov_ger,
        },
        {
          title: "Oil ",
          description: "Lorem ipsum dolor sit amet...",
          img: gov_uk,
        },
      ],
    ],
  };

  return (
    <Container fluid className="mt-5 marketSection mt-5">
      <h1 className="marketTitle text-center mb-3 defheadFont text-danger">
        <AnimatedElement as="span" animation="fade-up" delay={0.5}>
          <FaIndustry />
        </AnimatedElement>
        <AnimatedElement
          as="span"
          className="ms-3"
          animation="fade-up"
          delay={0.6}
        >
          Markets
        </AnimatedElement>
      </h1>
      <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
        <Nav
          className="justify-content-center my-2 mx-auto marketTitle"
          variant="pills"
          style={{
            backgroundColor: "#ff1143",
            borderRadius: "30px",
            padding: "10px",
            width: "70%",
          }}
        >
          <Nav.Item className="defbodyFont">
            <Nav.Link eventKey="oilGas" style={{ color: "#ffffff" }}>
              <FaIndustry
                className="me-2"
                color={activeTab === "oilGas" ? "#ff416c" : "white"}
              />{" "}
              Oil & Gas
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="defbodyFont">
            <Nav.Link eventKey="renewableEnergy" style={{ color: "#fff" }}>
              <FaRecycle
                className="me-2"
                color={activeTab === "renewableEnergy" ? "#ff416c" : "white"}
              />{" "}
              Energy
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="defbodyFont">
            <Nav.Link eventKey="mining" style={{ color: "#fff" }}>
              <FaBuilding
                className="me-2"
                color={activeTab === "mining" ? "#ff416c" : "white"}
              />{" "}
              Mining
            </Nav.Link>
          </Nav.Item>

          <Nav.Item className="defbodyFont">
            <Nav.Link eventKey="power" style={{ color: "#fff" }}>
              <FaLandmark
                className="me-2"
                color={activeTab === "power" ? "#ff416c" : "white"}
              />{" "}
              Power
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="defbodyFont">
            <Nav.Link eventKey="tech" style={{ color: "#fff" }}>
              <FaLandmark
                className="me-2"
                color={activeTab === "tech" ? "#ff416c" : "white"}
              />{" "}
              Technology
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="defbodyFont">
            <Nav.Link eventKey="gov" style={{ color: "#fff" }}>
              <FaLandmark
                className="me-2"
                color={activeTab === "gov" ? "#ff416c" : "white"}
              />{" "}
              Governments
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Container className="marketTitle">
          <Tab.Content>
            <Tab.Pane eventKey={activeTab}>
              <AnimatedElement animation="fade-up" delay={0.01}>
                <h3 className="text-center mt-3 mb-1 defheadFont">
                  {tabContent[activeTab][0][0].sectionTitle}
                </h3>
              </AnimatedElement>
              <Row className="justify-content-around">
                {tabContent[activeTab][1].map((content, index) => (
                  <Col sm={12} md={6} className="mt-4 mt-sm-0" key={index}>
                    <AnimatedElement
                      animation="fade-up"
                      delay={0.1 + index * 0.09}
                    >
                      <Image src={content.img} className="img-fluids" rounded />
                    </AnimatedElement>
                  </Col>
                ))}
              </Row>
            </Tab.Pane>
          </Tab.Content>
        </Container>
      </Tab.Container>
    </Container>
  );
};

export default Markets;
