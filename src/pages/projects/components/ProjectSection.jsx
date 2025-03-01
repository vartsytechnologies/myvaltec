import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

// Project images
import AG1 from "../../../assets/projectpics/AGA1.jpg";
import AG2 from "../../../assets/projectpics/AGA2.jpg";
import AG3 from "../../../assets/projectpics/AGA3.jpg";
import ENI1 from "../../../assets/projectpics/ENI_OCTP_ORF1.jpg";
import ENI2 from "../../../assets/projectpics/ENI_OCTP_ORF2.jpg";
import ENI3 from "../../../assets/projectpics/ENI_OCTP_ORF3.jpg";
import FPSOJA from "../../../assets/projectpics/FPSO_John_ Agyekum_Kuffour.jpg";
import MIG1 from "../../../assets/projectpics/MIG_Welding1.jpg";
import MIG2 from "../../../assets/projectpics/MIG_Welding1.jpg";
import MIG3 from "../../../assets/projectpics/MIG_Welding1.jpg";
import bently1 from "../../../assets/projectpics/bently.jpg";
import bently2 from "../../../assets/projectpics/bently2.jpg";
import bently3 from "../../../assets/projectpics/bently3.jpg";
import traffic from "../../../assets/projectpics/traffic.jpg";

const projects = [
  {
    title: "ENI Ghana Exploration and Production Limited",
    description:
      "ENI Offshore Cape Three Point Onshore Gas Receiving Facility ",
    imgSrc: ENI1,
    modalProjectName: (
      <p className="pt-3">
        ENI Offshore Cape Three Point Onshore Gas Receiving Facility
      </p>
    ),
    modalContent: (
      <p>
        {" "}
        <b>Project summary</b> <br />
        Supply of nitrogen building, hypochlorite, diesel pump, demineralized
        water, fire water day tank, compressor train I & II, clean agent,
        emergency diesel generator, MOV plant, transformer warehouse, and
        workshop shelter
      </p>
    ),
    carouselImages: [ENI1, ENI2, ENI3],
  },

  {
    title: "AMANDI Energy Power Plant, Power Enclave, Aboadze, Ghana",
    description: "192MW dual-fired combined cycle power plant",
    imgSrc: MIG1,
    modalProjectName: (
      <p className="pt-3">192MW dual-fired combined cycle power plant</p>
    ),
    modalContent: (
      <p>
        {" "}
        <b>Project summary</b> <br />
        MIG aluminum welding contract for the entire circa 192MW dual-fired
        combined cycle facility at Aboadze, near Takoradi.
      </p>
    ),
    carouselImages: [MIG1, MIG2, MIG3],
  },
  {
    title: "AngloGold Ashanti Ghana Limited",
    description: "Paste Backfill Plant for Obuasi Mine",
    imgSrc: AG1,
    modalProjectName: (
      <p className="pt-3">Paste Backfill Plant for Obuasi Mine</p>
    ),
    modalContent: (
      <p>
        {" "}
        <b>Project summary</b> <br />
        <ol>
          <li>
            Engineering, procurement, consulting and paste plant project
            management.
          </li>
          <li>
            Mobilization of local expertise (electrical, engineers mechanical
            engineers, civil engineers, technical planners, safety managers) for
            the entire plant installation.
          </li>
          <li>
            Mobilization of all equipment (cranes & boom lifts) for the plant
            installation.
          </li>
        </ol>
      </p>
    ),
    carouselImages: [AG1, AG2, AG3],
  },
  {
    title: "Yinson Productions West Africa Limited",
    description: "Supply of various FPSO refurbishment items",
    imgSrc: FPSOJA,
    modalProjectName: (
      <p className="pt-3">Yinson Productions West Africa Ltd</p>
    ),
    modalContent: (
      <p>
        {" "}
        <b>Project summary</b> <br />
        <ol>
          <li>JAK-TCP-174 PW Modification (Various)</li>
          <li>JAK-IHPR (Pump, Valves, Pipes, and Pipe Fittings)</li>
          <li>JAK TCP (Pump, Valves, Pipes, and Pipe Fittings)</li>
          <li>GTG Field Touch HMI System</li>
        </ol>
      </p>
    ),
    carouselImages: [FPSOJA],
  },
  {
    title: "MODEC Ghana Limited",
    description: "Supply of various  Bently Nevada accessories",
    imgSrc: bently1,
    modalProjectName: <p className="pt-3"> </p>,
    modalContent: (
      <p>
        {" "}
        <b>Project summary</b> <br />
        Supply of various Bently Nevada accessories
      </p>
    ),
    carouselImages: [bently1, bently2, bently3],
  },
  {
    title: "Solar Traffic Light",
    description: "Solar traffic light installation for road contractor",
    imgSrc: traffic,
    modalProjectName: <p className="pt-3">Rango Construction Limited</p>,
    modalContent: (
      <p>
        {" "}
        <b>Project summary</b> <br />
        Installation of Solar traffic light for Suame Interchange Project
      </p>
    ),
    carouselImages: [traffic],
  },
];

function ProjectSection() {
  return (
    <>
      <Container className="py-5">
        <Row>
          {projects.map((project, index) => (
            <Col xs={12} md={6} lg={4} className="mb-4" key={index}>
              <ProjectCard
                title={project.title}
                description={project.description}
                imgSrc={project.imgSrc}
                modalProjectName={project.modalProjectName}
                modalContent={project.modalContent}
                carouselImages={project.carouselImages}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default ProjectSection;
