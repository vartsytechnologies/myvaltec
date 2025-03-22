import { React, useState } from "react";
import { Card, Carousel } from "react-bootstrap";

import { Modal, Button } from "react-bootstrap";
import AnimatedElement from "../../../components/motionComponent";

function ProjectCard({
  title,
  description,
  imgSrc,
  modalProjectName,
  modalContent,
  carouselImages = [],
}) {
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <AnimatedElement
        as={Card}
        className="shadow-sm h-100"
        animation="fade-up"
        onClick={handleShow}
      >
        <AnimatedElement
          as={Card.Img}
          variant="top"
          src={imgSrc}
          animation="fade-up"
        />

        <Card.Body>
          <AnimatedElement
            as={Card.Title}
            className="defheadFont text-danger"
            animation="fade-up"
            delay={0.3}
          >
            {title}
          </AnimatedElement>

          <AnimatedElement
            as={Card.Text}
            className="defbodyFont"
            animation="fade-up"
            delay={0.5}
          >
            {description}
          </AnimatedElement>
        </Card.Body>
      </AnimatedElement>

      {/* modal */}
      <>
        <Modal
          show={showModal}
          onHide={handleClose}
          dialogClassName="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title>Project Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="">
              <Carousel>
                {carouselImages.length > 0 ? (
                  carouselImages.map((image, idx) => (
                    <Carousel.Item key={idx} interval={1000}>
                      <img
                        src={image}
                        alt={`Slideshow ${idx + 1}`}
                        className=""
                      />
                    </Carousel.Item>
                  ))
                ) : (
                  <p>No images available for this project.</p>
                )}
              </Carousel>
            </div>
            <div>
              <h2>{modalProjectName}</h2>
              <p>{modalContent}</p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </>
  );
}

export default ProjectCard;
