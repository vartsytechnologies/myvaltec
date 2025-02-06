import React, { useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Pvf from "../../assets/services_img/PVF.jpg";
import Pipe from "../../assets/services_img/pvf/Pipe_and_Tube_Thumbnail.jpg";
import Valves from "../../assets/services_img/pvf/Valves_Thumbnails.jpg";
import Act from "../../assets/services_img/pvf/Actuation_Thumbnails.jpg";
import Fit from "../../assets/services_img/pvf/Fittings_Thumbnails.jpg";
import Flanges from "../../assets/services_img/pvf/Flanges_Thumbnails.jpg";
import Fasteners from "../../assets/services_img/pvf/Fasteners_thumbnail.jpg";
import Gaskets from "../../assets/services_img/pvf/Gaskets_Thumbnails.jpg";
import Pipe_accessories from "../../assets/services_img/pvf/Pipe_piping_accessories_thumbnail.jpg";

const PVFHeaderSection = () => {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        <Col md={6} className="text-center text-md-start">
          <h1>Industrial and Oilfield Pumps</h1>
          <h5>Pump Solutions: Buy, Repair and Maintain Quality Pump Products</h5>
          <p>
          Are you searching for reliable, top-quality pump products and solutions for your business? Our DNOW U.S. Process Solutions group has years of experience in the industry, allowing us to become a trusted and leading provider of oilfield, industrial and municipal pumps that cater to various industries. Our pump stores give you access to a wide range of pump products as well as an extensive fleet of rental pump units, including centrifugal, positive displacement and surface pumps, to mention a few. Contact us today to learn more about how we can help you streamline your operations and improve your bottom line
          </p>
        </Col>
        <Col md={6} className="text-center">
          <img src={Pvf} alt="PVF Products" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

const ProductsSection = () => {
  const allProducts = [
    {
      name: "Pipe and Tube",
      image: Pipe,
      text: "We stock and sell pipe and tube products in a variety of materials and sizes. Choose from a wide selection of steel, alloy, brass and copper pipe and tube products in all sizes.",
      category: "all",
    },
    {
      name: "Valves",
      image: Valves,
      text: "We stock and distribute a variety of valves with numerous designs, materials and sizes. Choose from a wide selection of ball valves, globe valves, gate valves, check valves and more.",
      category: "all",
    },
    {
      name: "Actuators",
      image: Act,
      text: "We stock and sell a variety of actuators, including linear actuators, rotary actuators and custom built actuators. Our accessories include limit switches, relief valves and regulators.",
      category: "all",
    },
    {
      name: "Fittings",
      image: Fit,
      text: "If you need a pipe fittings supplier, we have everything from elbows and tees to couplings and reducers. Our materials include stainless steel, PE-Xa, carbon steel and fiberglass.",
      category: "all",
    },
    {
      name: "Flanges",
      image: Flanges,
      text: "We stock and sell a large stock inventory of flanges in a variety of sizes and materials, such as carbon steel, stainless steel, nickel alloy, fiberglass and composite for all industries.",
      category: "tsm",
    },
    {
      name: "Fasteners",
      image: Fasteners,
      text: "We stock and sell fasteners of all sizes and shapes. Our inventory includes screws, nails, anchors, bolts, nuts, washers, studs, hinges, clamps, keystock and other hardware in stock.",
      category: "tsm",
    },
    {
      name: "Gaskets",
      image: Gaskets,
      text: "We stock and sell gaskets in a variety of materials, including spiral wound gaskets, ring joint gaskets, sheet gaskets and die-cut gaskets. If you need a gasket, we have you covered.",
      category: "tsm",
    },
    {
      name: "Piping Accessories",
      image: Pipe_accessories,
      text: "We carry a wide variety of piping accessories to help you get the job done. Whether you need strainers, steam traps, blinds, closures, vents or arresters, we have what you need.",
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
        <h2 className="">Industry-Leading Pump Products and Services for Superior Flow Management</h2>
        <p className="">
        Pump products are incredibly versatile and can resolve several issues related to the transportation and movement of fluids. We have various sizes and types of pumping products, each offering specific benefits and features that cater to multiple requirements. DNOW pump services are also available for all pumps and equipment, ensuring they are in prime condition. With this kind of support, individuals can have peace of mind knowing that their pump products will operate reliably and efficiently. Whether it's for municipal or industrial use, DNOW's pump products can make a significant difference in enhancing your fluid movement process
        </p>
        <div className="mb-4">
          <Button variant="primary" className="me-2" onClick={() => filterProducts("all")}>
            Show all
          </Button>
          <Button variant="secondary" onClick={() => filterProducts("tsm")}>
            TS&M Supply Fiberglass
          </Button>
        </div>
        <Row>
          {filteredProducts.map((product, index) => (
            <Col md={3} sm={6} key={index} className="mb-4">
              <Card className="text-center shadow-sm">
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title style={{ color: "red" }}>{product.name}</Card.Title>
                  <Card.Text>{product.text}</Card.Text>
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
      <PVFHeaderSection />
      <ProductsSection />
    </>
  );
};

export default PumpServicePage;
