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

const MillHeaderSection = () => {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        <Col md={6} className="text-center text-md-start">
          <h1>Industrial and Facility Supplies
          </h1>
          <h5>Industrial MRO Supplies for the Upkeep of Buildings and Grounds</h5>
          <p>
          From manufacturing to facility maintenance, VALTEC's range of industrial and facility supplies ensures smooth operations and safety at every level. Whether you're looking for industrial machinery, facility equipment or warehouse tools, our material handling solutions can do the job. Our commitment is to provide the best in industrial supplies and facility maintenance products, ensuring maximum efficiency, safety and satisfaction.
          </p>
        </Col>
        <Col md={6} className="text-center">
          <img src={Pvf} alt="PVF Products" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

const MillProductsSection = () => {
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
        <h2 className="text-center">Explore Product Offerings</h2>
        <p className="text-center">
        Our curated inventory boasts everything from premium adhesives and advanced electrical products to elite safety equipment and precision tools. Discover our vast selection, featuring oilfield solutions, essential office supplies, efficient material handling and much more. Prioritize workplace safety with our top-tier PPE or find robust hardware for maintenance tasks. With VALTEC, you're choosing unparalleled quality and durability. Explore our product offerings now and elevate your operations.
        </p>
        {/* <div className="text-center mb-4">
          <Button variant="primary" className="me-2" onClick={() => filterProducts("all")}>
            Show all
          </Button>
          <Button variant="secondary" onClick={() => filterProducts("tsm")}>
            TS&M Supply Fiberglass
          </Button>
        </div> */}
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

const MillServicePage = () => {
  return (
    <>
      <MillHeaderSection />
      <MillProductsSection />
    </>
  );
};

export default MillServicePage;

