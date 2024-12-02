import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import ProjectSectionItem from "./projectSectionItem";
import DefaultButton from "../../../components/defaultButton";
import { FaTools } from "react-icons/fa";
import ENI1 from "../../../assets/projectpics/ENI_OCTP_ORF1.jpg";
import MiG1 from "../../../assets/projectpics/MIG_Welding1.jpg";
// import img9 from "../../../assets/projectpics/image9.jpg";
import img9 from "../../../assets/projectpics/bently2.jpg";
import { Link } from "react-router-dom";

// Import your images
//import aboutImg from "../../../assets/aboutImg.png";

function ProjectSection() {
  return (
    <>
      <Container className="mt-5 defPt defPb">
        <h1
          className="text-center mb-5 text-danger defheadFont"
          data-aos="fade-up"
        >
          <FaTools /> Projects
        </h1>
        <Row>
          <Col xs={12} md={6} lg={4}>
            <ProjectSectionItem
              heading="ENI Ghana Exploration and Production Limited"
              // subtext="ENI Offshore Cape Three Point Onshore Gas Receiving Facility"
              imageSource={ENI1}
            />
          </Col>
          <Col xs={12} md={6} lg={4}>
            <ProjectSectionItem
              heading="AMANDI Energy Power Plant, Power Enclave, Aboadze, Ghana"
              // subtext="A brief description about project number 2"
              imageSource={MiG1}
            />
          </Col>
          <Col xs={12} md={6} lg={4}>
            <ProjectSectionItem
              heading="MODEC Ghana Limited"
              // subtext="A brief description about project number 3"
              imageSource={img9}
            />
          </Col>
        </Row>
        <p
          style={{ textAlign: "center", marginTop: "0.8rem" }}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Link to="/projects">
            <DefaultButton name="See More Projects" variant="danger" />
          </Link>
        </p>
      </Container>
    </>
  );
}

export default ProjectSection;
