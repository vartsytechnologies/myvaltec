
// import {React, useState} from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import ProjectCard from "./ProjectCard";
// import companyOverview from '../../../assets/companyOverview.jpg'
// import { Modal, Button } from "react-bootstrap";
// import projectImage from '../../../assets/ENI OCTP ORF1.jpg';
// import projectImage2 from '../../../assets/ENI OCTP ORF2.jpeg';
// import projectImage3 from '../../../assets/ENI OCTP ORF3.jpeg'
// import { Carousel } from "react-bootstrap";

// const projects = [
//   { title: "ENI Ghana Exploration and Production Limited", description: "ENI Offshore Cape Three Point Onshore Gas Receiving Facility ", imgSrc: companyOverview, modalProjectName:"Akosombo Damn", modalContent:"Akosombo dam is the project"},
//   { title: "AMANDI Energy Power Plant, Power Enclave, Aboadze, Ghana", description: "192MW dual-fired combined cycle power plant", imgSrc: companyOverview, modalProjectName:"Bui Dam Damn", modalContent:"BuI Dam is the project"},
//   { title: "AngloGold Ashanti Obuasi Paste Plant, Obuasi, Ghana", description: "Lorem ipsum dolor sit amet...", imgSrc: companyOverview, modalProjectName:"Wli Falls", modalContent:"Wli Fals dam is the project" },
//   { title: "Yinson Productions", description: "FPSO_JohnAgyekumKuffour", imgSrc: companyOverview },
//   { title: "MODEC Ghana Limited", description: "Supply of various  Bently Nevada accessories", imgSrc: companyOverview },
// ];

// function ProjectSection() {
//   const handleShow = () => setShowModal(true);
//   const handleClose = () => setShowModal(false);
//   const [showModal, setShowModal] = useState(false);

//   return (<>
//     <Container className="py-5">
//       <Row>
//         {projects.map((project, index) => (
//           <Col xs={12} md={6} lg={4} className="mb-4" key={index}>
//             <ProjectCard title={project.title} description={project.description} imgSrc={project.imgSrc}  onClick={handleShow}/>
//             < >
//             <Modal
//             show={showModal}
//             onHide={handleClose}
//             dialogClassName="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg"
//           >
//             <Modal.Header closeButton>
//               <Modal.Title>Project Details</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//               <div className="d-flex">
//               <Carousel>
//               <Carousel.Item>
//               <img src={projectImage} alt="projectImage1" className=""/>
//                 <Carousel.Caption>
//                   <h3>First slide label</h3>
//                   <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//                 </Carousel.Caption>
//               </Carousel.Item>
//               <Carousel.Item>
//               <img src={projectImage2} alt="projectImage2"/>
//                 <Carousel.Caption>
//                   <h3>Second slide label</h3>
//                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                 </Carousel.Caption>
//               </Carousel.Item>
//               <Carousel.Item>
//               <img src={projectImage3} alt="projectImage3"/>
//                 <Carousel.Caption>
//                   <h3>Third slide label</h3>
//                   <p>
//                     Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//                   </p>
//                 </Carousel.Caption>
//               </Carousel.Item>
//             </Carousel>
                
                
                
//               </div>
//               <div>
//                 <h2>{project.modalProjectName}</h2>
//                 <p>{project.modalContent}</p>
//               </div>
//             </Modal.Body>
//             <Modal.Footer>
//               <Button variant="secondary" onClick={handleClose}>
//                 Close
//               </Button>
//             </Modal.Footer>
//           </Modal>
//         </>
//           </Col>
//         ))}
//       </Row>
//     </Container>

//      {/* modal */}
    
//     </>
//   );
// }

// export default ProjectSection;
