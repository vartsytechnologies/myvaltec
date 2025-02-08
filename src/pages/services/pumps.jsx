import React, { useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

//new images
import Cent from "../../assets/services_img/pumps/Centrifugal_pumps_thumb.webp"
import ChemInj from "../../assets/services_img/pumps/Chemical_injection_pumps_thumb.webp"
import MechSeal from "../../assets/services_img/pumps/Mechanical_seals_thumb.webp"
import Positive from "../../assets/services_img/pumps/Positive-displacement-thumbnail.webp"
import Pumpserv from "../../assets/services_img/pumps/Pump_service_repair_thumb.jpg"
import Rent from "../../assets/services_img/pumps/Rental-pumps-thumbnail.webp"
import Swd from "../../assets/services_img/pumps/SWD-Turnkey-Package.webp"
import Pumpsthumb from "../../assets/services_img/pumps/Pumps_thumbnail.webp"


import Breadcrumb from 'react-bootstrap/Breadcrumb';

function BreadcrumbSection() {
  return (
    <Container><br/>
    <Breadcrumb>
      <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/service">
        Services
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Pumps</Breadcrumb.Item>
    </Breadcrumb>
    </Container>
  );
}


const PumpHeaderSection = () => {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        <Col md={6} className="text-center text-md-start">
          <h1 className="defheadFont">Industrial and Oilfield Pumps</h1>
          <h5 className="defbodyFont text-danger">Pump Solutions: Buy, Repair and Maintain Quality Pump Products</h5>
          <p className="defbodyFont">
          Are you searching for reliable, top-quality pump products and solutions for your business? Our DNOW U.S. Process Solutions group has years of experience in the industry, allowing us to become a trusted and leading provider of oilfield, industrial and municipal pumps that cater to various industries. Our pump stores give you access to a wide range of pump products as well as an extensive fleet of rental pump units, including centrifugal, positive displacement and surface pumps, to mention a few. Contact us today to learn more about how we can help you streamline your operations and improve your bottom line
          </p>
          <Link to='/contact'><p className="btn btn-danger defbodyFont">Contact Sales</p></Link>
        </Col>
        <Col md={6} className="text-center">
          <img src={Pumpsthumb} alt="PVF Products" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

const ProductsSection = () => {
  const allProducts = [
    {
      name: "Centrifugal Pumps",
      image: Cent,
      text: "VALTEC is your solution to transport fluids by converting rotational kinetic energy to the hydrodynamic energy of the fluid flow.",
      category: "all",
    },
    {
      name: "Chemical Dosing & Metering Pumps",
      image: ChemInj,
      text: "VALTEC is your solution for pumps that move precise volumes of flow under very high pressures and temperatures",
      category: "all",
    },
    {
      name: "Mechanical Seals",
      image: MechSeal,
      text: "VALTEC is your sealing solution for containing fluid within rotating equipment, pumps, and applications across all industries.",
      category: "all",
    },
    {
      name: "Positive Displacement Pumps",
      image: Positive,
      text: "VALTEC is your solution for pumps that deliver constant flow rates at a given speed (rpm) no matter the system discharge pressure",
      category: "all",
    },
    {
      name: "Pump Service & Repair",
      image: Pumpserv,
      text: "VALTEC offers an entire fleet of pump field services and maintenance programs for in-house repairs, upgrades, and replacement parts.",
      category: "tsm",
    },
    {
      name: "Rental Pumps",
      image: Rent,
      text: "VALTEC offers a diverse and comprehensive fleet of rental pumps to serve a wide range of pump applications for various markets.",
      category: "tsm",
    },
    {
      name: "Turnkey Pump & Control Packages",
      image: Swd,
      text: "VALTEC offers modularized turnkey pump packages mounted on a single skid and delivered to a customer site ready for installation",
      category: "tsm",
    },
  ];

  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  const filterProducts = (category) => {
    if (category === "all") {
      setFilteredProducts(allProducts);
    } else {
      setFilteredProducts(allProducts.filter((product) => product.category === category));
    }
  };

  return (
    <Container fluid className="my-5 py-5" style={{ backgroundColor: "#f5f5f5" }}>
      <Container>
        {/* initially a text - center */}
        <h2 className="defHeadFont">Industry-Leading Pump Products and Services for Superior Flow Management</h2>
        <p className="defBodyFont">
        Pump products are incredibly versatile and can resolve several issues related to the transportation and movement of fluids. We have various sizes and types of pumping products, each offering specific benefits and features that cater to multiple requirements. DNOW pump services are also available for all pumps and equipment, ensuring they are in prime condition. With this kind of support, individuals can have peace of mind knowing that their pump products will operate reliably and efficiently. Whether it's for municipal or industrial use, DNOW's pump products can make a significant difference in enhancing your fluid movement process
        </p>
        <div className="mb-4">
          <Button variant="primary" className="me-2" onClick={() => filterProducts("all")}>
            Show all
          </Button>
          <Button variant="secondary" className="me-2" onClick={() => filterProducts("tsm")}>
            Odessa Pumps
          </Button>
          <Button variant="secondary" onClick={() => filterProducts("tsm")}>
            Power Service
          </Button>
        </div>
        <Row>
          {filteredProducts.map((product, index) => (
            <Col md={3} sm={6} key={index} className="mb-4">
              <Card className="text-center shadow-sm">
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title className="defheadFont" style={{  }}>{product.name}</Card.Title>
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

const PumpServicePage = () => {
  return (
    <>
    <BreadcrumbSection/>
      <PumpHeaderSection />
      <ProductsSection />
    </>
  );
};

export default PumpServicePage;
