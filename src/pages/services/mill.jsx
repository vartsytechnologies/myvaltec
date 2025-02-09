import React, { useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

import Batteries_thumb from "../../assets/services_img/mill/Batteries_thumb.webp";
import Drill from "../../assets/services_img/mill/Drilling_and_production_thumb.webp";
import Facilities from "../../assets/services_img/mill/Facilities_and_maintenance_thumb.webp";
import Fleet from "../../assets/services_img/mill/Fleet_maintenance_thumb.webp";
import Food from "../../assets/services_img/mill/Food_Service_thumb.jpg";
import Hvac from "../../assets/services_img/mill/HVAC_thumbnail.jpg";
import Hardware from "../../assets/services_img/mill/Hardware_thumb.webp";
import IndustrialSup from "../../assets/services_img/mill/Industrial-Supplies-Header-Thumbnail.jpeg";
import IndustrialChem from "../../assets/services_img/mill/Industrial_chemicals_and_cleaners_thumb.jpg";
import Janitorial from "../../assets/services_img/mill/Janitorial_supplies_thumb.webp";
import Lifting from "../../assets/services_img/mill/Lifting_Products_thumb.jpg";
import Lubrication from "../../assets/services_img/mill/Lubrication_thumb.webp";
import Marking from "../../assets/services_img/mill/Marking_Products_thumb.webp";
import Material from "../../assets/services_img/mill/Material_handling_thumb.webp";
import Office from "../../assets/services_img/mill/Office_supplies_thumb.webp";
import Tape from "../../assets/services_img/mill/Tape_and_adhesives_thumb.webp";
import Tools from "../../assets/services_img/mill/tools-and-welding-thumbnail.webp";

import Breadcrumb from "react-bootstrap/Breadcrumb";

function BreadcrumbSection() {
  return (
    <Container>
      <br />
      <Breadcrumb>
        <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/service">Services</Breadcrumb.Item>
        <Breadcrumb.Item active>Mill</Breadcrumb.Item>
      </Breadcrumb>
    </Container>
  );
}

const MillHeaderSection = () => {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        <Col md={8} className="text-center text-md-start">
          <h1 className="defheadFont">Industrial and Facility Supplies</h1>
          <h5 className="defbodyFont text-danger">
            Industrial MRO Supplies for the Upkeep of Buildings and Grounds
          </h5>
          <p className="defbodyFont">
            From manufacturing to facility maintenance, VALTEC's range of
            industrial and facility supplies ensures smooth operations and
            safety at every level. Whether you're looking for industrial
            machinery, facility equipment or warehouse tools, our material
            handling solutions can do the job. Our commitment is to provide the
            best in industrial supplies and facility maintenance products,
            ensuring maximum efficiency, safety and satisfaction.
          </p>
        </Col>
        <Col md={4} className="text-center">
          <img src={IndustrialSup} alt="PVF Products" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

const MillProductsSection = () => {
  const allProducts = [
    {
      name: "Tools",
      image: Tools,
      text: "Look no further for the complete range of reliable and durable tools for any job! Order from a comprehensive selection of hand, power, air and cutting tools to get the very best products available today!",
      category: "all",
    },
    {
      name: "Adhesives, Sealants and Tape",
      image: Tape,
      text: "Discover our premium adhesives, sealants and tapes for industrial needs. From bonding to protection, our products ensure top performance. Discover general-purpose glues to high-end sealants.",
      category: "all",
    },
    {
      name: "Batteries and Battery Chargers",
      image: Batteries_thumb,
      text: "Discover our selection of batteries and chargers for industry needs. From daily tasks to oil and gas operations, we offer continuous energy solutions from button to industrial batteries.",
      category: "all",
    },
    {
      name: "Facilities Management",
      image: Facilities,
      text: "Keep your facility in top condition with tools designed for optimal facility upkeep. We have everything from construction materials to pest controls to ensure your space remains at its prime.",
      category: "all",
    },
    {
      name: "Fleet and Engine Maintenance",
      image: Fleet,
      text: "Enhance fleet performance with maintenance solutions. From air filters to spark plugs our selection ensures peak equipment efficiency. Explore maintenance products for optimal asset upkeep.",
      category: "tsm",
    },
    {
      name: "Food Service Essentials",
      image: Food,
      text: "Explore a range of kitchen gadgets, cookware and dining tools. Perfect for industrial canteens and facility kitchens. We have everything you need to be prepared for peak meal times and special events",
      category: "tsm",
    },
    {
      name: "Hardware",
      image: Hardware,
      text: "Discover premium hardware for industrial maintenance. From anchors, bolts and clamps to specialized tools, our offerings cater to every maintenance need, ensuring precise alignments, security and adaptability for any project.",
      category: "tsm",
    },
    {
      name: "HVAC Solutions",
      image: Hvac,
      text: "Whether facing summer's heat or winter's chill, from heaters to fans our selection ensures the perfect atmosphere. Prioritizing safety and contentment, with HVAC products that ensure efficient temperature control and clean air circulation.",
      category: "tsm",
    },
    {
      name: "Industrial Chemicals and Cleaners",
      image: IndustrialChem,
      text: "Industrial chemicals and cleaners are formulated to tackle water-insoluble substances, rust, electronic residues and more. Our products ensure optimal equipment functionality and workplace hygiene.",
      category: "tsm",
    },
    {
      name: "Janitorial, Cleaning and Personal Care",
      image: Janitorial,
      text: "We offer a wide range of janitorial supplies including cleaning products, brooms, mops, bags, dispensers, personal care items and vacuums. From trusted brands that ensure clean and safe facilities. Find products for all your cleaning needs.",
      category: "tsm",
    },
    {
      name: "Lifting Equipment and Accessories",
      image: Lifting,
      text: "Find top-quality lifting equipment for safe and efficient heavy-duty tasks. From beam attachments to overhead cranes, our products ensure precision, safety and durability. Trusted by professionals in construction and heavy industries.",
      category: "tsm",
    },
    {
      name: "Lubricants and Lubrication Supplies",
      image: Lubrication,
      text: "We offer an extensive selection of high-quality lubricants and lubrication equipment to ensure the smooth operation of your machinery. With products ranging from motor and gear oil to specialized anti-seize compounds we cater to a diverse array of needs.",
      category: "tsm",
    },
    {
      name: "Marking Products",
      image: Marking,
      text: "Our inventory consists of marking products tailored for industrial precision from paint markers and stencils to wire tags and stamps. Ensuring clear, durable markings across varied surfaces, essential for error-free projects and impeccable results.",
      category: "tsm",
    },
    {
      name: "Material Handling",
      image: Material,
      text: "From forklift accessories to waste management tools, we offer material handling solutions to boost efficiency, safety and space optimization. We sell handling equipment that streamlines operations, ensuring both productivity and customer satisfaction.",
      category: "tsm",
    },
    {
      name: "Office Supplies",
      image: Office,
      text: "Enhance your workspace's productivity with our selection of office supplies from basic items like binders and notebooks to tech essentials and laminating tools. Organize and boost productivity with our essential office tools.",
      category: "tsm",
    },
    {
      name: "Oilfield Solutions",
      image: Drill,
      text: "We stock tailored oilfield solutions including chemical soap sticks for optimizing well production and efficient rig wash products. Committed to eco-compliance, we provide high-quality pit liners and environmental tanks for contamination prevention.",
      category: "tsm",
    },
    // {
    //   name: "Industrial Chemicals and Cleaners",
    //   image: Pipe_accessories,
    //   text: "Industrial chemicals and cleaners are formulated to tackle water-insoluble substances, rust, electronic residues and more. Our products ensure optimal equipment functionality and workplace hygiene.",
    //   category: "tsm",
    // },
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
        <h2 className="defheadFont text-center">Explore Product Offerings</h2>
        <p className="defbodyFont text-center">
          Our curated inventory boasts everything from premium adhesives and
          advanced electrical products to elite safety equipment and precision
          tools. Discover our vast selection, featuring oilfield solutions,
          essential office supplies, efficient material handling and much more.
          Prioritize workplace safety with our top-tier PPE or find robust
          hardware for maintenance tasks. With VALTEC, you're choosing
          unparalleled quality and durability. Explore our product offerings now
          and elevate your operations.
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
            <Col md={4} sm={6} key={index} className="mb-4">
              <Card className="text-center shadow-sm d-flex flex-column h-100">
                <Card.Img className="p-3" variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title className="defheadFont text-start" style={{}}>
                    {product.name}
                  </Card.Title>
                  <Card.Text className="defbodyFont text-start flex-grow-1">
                    {product.text}
                  </Card.Text>
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
      <BreadcrumbSection />
      <MillHeaderSection />
      <MillProductsSection />
    </>
  );
};

export default MillServicePage;
