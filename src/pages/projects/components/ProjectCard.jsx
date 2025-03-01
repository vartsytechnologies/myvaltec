import { React, useState, useEffect } from "react";
import { Card, Carousel } from "react-bootstrap";
import AOS from "aos";
import { Modal, Button } from "react-bootstrap";

function ProjectCard({
  title,
  description,
  imgSrc,
  modalProjectName,
  modalContent,
  carouselImages = [],
}) {
  useEffect(() => {
    AOS.init({
      duration: 1050,
      offset: 50,
    });
  });
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Card className="shadow-sm h-100" data-aos="fade-up" onClick={handleShow}>
        <Card.Img variant="top" src={imgSrc} data-aos="fade-up" />
        <Card.Body>
          <Card.Title
            className="defheadFont text-danger"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {title}
          </Card.Title>
          <Card.Text
            className="defbodyFont"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            {description}
          </Card.Text>
        </Card.Body>
      </Card>

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
