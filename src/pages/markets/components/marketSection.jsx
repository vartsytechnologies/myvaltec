import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MarketCard from "./MarketCards.jsx";

// Market images
import tech1 from "../../../assets/markets_img/new/tech1.jpg";
import gov from "../../../assets/markets_img/new/Skyscrappers.jpg";
import mine from "../../../assets/markets_img/new/Miningpit.jpg";
import energy from "../../../assets/markets_img/new/RoofPVSolar.jpg";
import power from "../../../assets/markets_img/new/PowerPlant.jpg";
import oilA from "../../../assets/markets_img/new/oilA.JPG";

const markets = [
  {
    title: "Energy",
    description: " We specialize in all projects in the energy sector.",
    imgSrc: energy,
  },
  {
    title: "Oil & Gas",
    description: "VALTEC undertakes projects in the Oil & Gas markets.",
    imgSrc: oilA,
  },

  {
    title: "Mining",
    description:
      "All your needs at the mining site will be catered for by VALTEC.",
    imgSrc: mine,
  },

  {
    title: "Power",
    description: " Powering Industries for Impact.",
    imgSrc: power,
  },
  {
    title: "Technology",
    description: "We deliver value through technology.",
    imgSrc: tech1,
  },

  {
    title: "Governments",
    description: "You can trust us for all government infrastructure.",
    imgSrc: gov,
  },
];

function MarketSection() {
  return (
    <>
      <Container className="py-5">
        <Row>
          {markets.map((market, index) => (
            <Col xs={12} md={6} lg={4} className="mb-4" key={index}>
              <MarketCard
                title={market.title}
                description={market.description}
                imgSrc={market.imgSrc}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default MarketSection;
