import React, { useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Renewable from "../../assets/services_img/renewable_energy.jpg";
import Bollard from "../../assets/services_img/renewable/bollard.jpg";
import Bollard2 from "../../assets/services_img/renewable/bollard2.jpg";
import Bollard_a from "../../assets/services_img/renewable/bollard_a.jpg";
import Field from "../../assets/services_img/renewable/field_installation.jpg";
import Gamma from "../../assets/services_img/renewable/gamma.jpg";
import Huawei from "../../assets/services_img/renewable/huawei.jpg";
import Parking from "../../assets/services_img/renewable/parking_lots_light_.jpg";
import Parking_2 from "../../assets/services_img/renewable/parking_lots_light_2.jpg";
import Rooftop from "../../assets/services_img/renewable/rooftop.png";
import Shem from "../../assets/services_img/renewable/shem.jpg";
import Shem2 from "../../assets/services_img/renewable/shem2.jpg";
import Traffic from "../../assets/services_img/renewable/traffic.jpg";
import Wifi from "../../assets/services_img/renewable/wifi_booster.jpg";
import Canadian from "../../assets/services_img/renewable/canadian_solar.jpg";

const PVFSection = () => {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        <Col md={7} className="text-center text-md-start">
          <h1 className="defheadFont">Building a Sustainable Future</h1>
          <p className="defbodyFont">
            VALTEC Limited is dedicated to building a sustainable future through
            renewable energy. We design and implement clean energy projects that
            reduce carbon footprints and lower energy costs. We meet
            residential, commercial, and utility energy demands with
            high-quality solar photovoltaic modules and reliable battery storage
            solutions for our projects. We utilize the Smart Design Technology
            to realize the vision of your solar PV power plant with full 3D
            rendition, design for maximum yield, high performance, and efficient
            operations. Our innovative solar street lighting solution
            distinguishes us with advanced technological advantages. We are not
            just an Energy Company. We are your renewable energy partner
            collaborating to support our valued clients in their journey toward
            sustainable future, delivering solutions that align with global
            energy goals and environmental standards.
          </p>
        </Col>
        <Col md={5} className="text-center">
          <img src={Renewable} alt="PVF Products" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

const ProductsSection = () => {
  const allProducts = [
    {
      name: "Residential Rooftop Installation",
      image: Rooftop,
      text: "",
      category: "all",
    },
    {
      name: "Field Installation",
      image: Field,
      text: "",
      category: "all",
    },
    {
      name: "SHEM SOLAR Double Arm Light",
      image: Shem,
      text: "",
      category: "all",
    },
    {
      name: "SHEM SOLAR Double Arm Light",
      image: Shem2,
      text: "",
      category: "tsm",
    },
    {
      name: "Gamma SOLAR Double and Single Arm",
      image: Gamma,
      text: "",
      category: "tsm",
    },
    {
      name: "Wifi-Booster SOLAR Pole",
      image: Wifi,
      text: "",
      category: "tsm",
    },
    {
      name: "Alpha SOLAR Parking Lots Light",
      image: Parking,
      text: "",
      category: "tsm",
    },
    {
      name: "Alpha SOLAR Parking Lots Light ",
      image: Parking_2,
      text: "",
      category: "tsm",
    },
    {
      name: "SOLAR Bollard",
      image: Bollard,
      text: "",
      category: "tsm",
    },
    {
      name: "SOLAR Bollard",
      image: Bollard2,
      text: "",
      category: "tsm",
    },
    {
      name: "SOLAR Bollard",
      image: Bollard_a,
      text: "",
      category: "tsm",
    },
    {
      name: "SMART SOLAR Traffic Light",
      image: Traffic,
      text: "",
      category: "tsm",
    },
    {
      name: "HUAWEI Batteries and Inverters",
      image: Huawei,
      text: "",
      category: "tsm",
    },
    {
      name: "Canadian Solar N-type Bifacial TOPCon Technology",
      image: Canadian,
      text: (
        <ul>
          <li>Module power up to 630 W</li>
          <li> Module efficiency up to 23.3 %</li>
          <li> Up to 85% Power Bifaciality, more power from the back side</li>
          <li> 12 Years Enhanced Product Material and Workmanship</li>
          <li> 30 Years Linear Power Performance Warranty</li>
        </ul>
      ),
      category: "all",
    },
  ];

  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  const filterProducts = (category) => {
    if (category === "all") {
      setFilteredProducts(allProducts);
    } else {
      setFilteredProducts(
        allProducts.filter((product) => product.category === category)
      );
    }
  };

  return (
    <Container
      fluid
      className="my-5 py-5"
      style={{ backgroundColor: "#f5f5f5" }}
    >
      <Container>
        <h2 className="text-center defheadFont mb-3">Products & Services</h2>
        <Row>
          {filteredProducts.map((product, index) => (
            <Col md={3} sm={6} key={index} className="mb-4">
              <Card className="shadow-sm">
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title className="defheadFont">
                    {product.name}
                  </Card.Title>
                  <Card.Text className="defbodyFont">{product.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

const RenewablePage = () => {
  return (
    <>
      <PVFSection />
      <ProductsSection />
    </>
  );
};

export default RenewablePage;
