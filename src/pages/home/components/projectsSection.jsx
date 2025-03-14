import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import ProjectSectionItem from "./projectSectionItem";
import DefaultButton from "../../../components/defaultButton";
import { FaTools } from "react-icons/fa";
import ENI1 from "../../../assets/projectpics/ENI_OCTP_ORF1.jpg";
import MiG1 from "../../../assets/projectpics/MIG_Welding1.jpg";
import img9 from "../../../assets/projectpics/bently2.jpg";
import { Link } from "react-router-dom";

import useIntersectionObserver from "../../../components/animationHook";

function ProjectSection() {
  const { ref, isVisible } = useIntersectionObserver();
  return (
    <>
      <Container className="mt-5 defPt defPb">
        <h1
          ref={ref}
          className={` text-center mb-5 text-danger defheadFont fade-up ${
            isVisible ? "visible" : ""
          }`}
        >
          <FaTools /> Projects
        </h1>
        <Row>
          <Col xs={12} md={6} lg={4}>
            <ProjectSectionItem
              heading="ENI Ghana Exploration and Production Limited"
              imageSource={ENI1}
            />
          </Col>
          <Col xs={12} md={6} lg={4}>
            <ProjectSectionItem
              heading="AMANDI Energy Power Plant, Power Enclave, Aboadze, Ghana"
              imageSource={MiG1}
            />
          </Col>
          <Col xs={12} md={6} lg={4}>
            <ProjectSectionItem
              heading="MODEC Ghana Limited"
              imageSource={img9}
            />
          </Col>
        </Row>
        <p style={{ textAlign: "center", marginTop: "0.8rem" }}>
          <Link to="/projects">
            <DefaultButton name="See More Projects" variant="danger" />
          </Link>
        </p>
      </Container>
    </>
  );
}

export default ProjectSection;
