
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

const projects = [
  { title: "ENI OCTP-ORF, Sanzule, Ghana", description: "Lorem ipsum dolor sit amet...", imgSrc: "https://via.placeholder.com/300" },
  { title: "AMANDI Energy Power Plant, Power Enclave, Aboadze, Ghana", description: "Lorem ipsum dolor sit amet...", imgSrc: "https://via.placeholder.com/300" },
  { title: "AngloGold Ashanti Obuasi Paste Plant, Obuasi, Ghana", description: "Lorem ipsum dolor sit amet...", imgSrc: "https://via.placeholder.com/300" },
  { title: "Yinson Productions", description: "Lorem ipsum dolor sit amet...", imgSrc: "https://via.placeholder.com/300" },
];

function ProjectSection() {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Valtec Projects</h2>
      <Row>
        {projects.map((project, index) => (
          <Col xs={12} md={6} lg={4} className="mb-4" key={index}>
            <ProjectCard title={project.title} description={project.description} imgSrc={project.imgSrc} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProjectSection;
