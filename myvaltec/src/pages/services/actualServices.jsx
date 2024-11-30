import { React, useState, useEffect } from "react";
import { Container, Row, Col, Modal, Button, Carousel, Tooltip, OverlayTrigger } from "react-bootstrap";
import Banner from "../../components/banner/Banner";
import "./services.css";
import ContactSalesBtn from "./contactSalesbtn";
import {
  MdOutlineConstruction,
  MdOutlineCompassCalibration,
  MdOutlineSolarPower,
  MdOutlinePrecisionManufacturing,
  MdOutlineGroup,
} from "react-icons/md";
import { PiMonitor } from "react-icons/pi";
import { AiOutlineExperiment } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";

//service images
import epc from "../../assets/services_img/epc.jpg";
// new service images
import calib from "../../assets/services_img/new/calib.jpeg";
import digital from "../../assets/services_img/new/digital.jpg";
import lubricants from "../../assets/services_img/new/fuel.png";
import infrastructure from "../../assets/services_img/new/infra.jpg";
import partnership from "../../assets/services_img/partnership.jpg";
import renewables from "../../assets/services_img/new/pv.jpg";

// Define the service items with their data
const serviceItems = [
  {
    name: "EPC Service",
    initialImage: epc,
    carouselImages: [calib, renewables],
    icon: <MdOutlineConstruction className="s-icon" />,
    description:"VALTEC Limited offers comprehensive EPC (Engineering, Procurement, and Construction) services, tailored to meet the complex needs of the energy, mining, oil, and gas sectors. Our team brings a wealth of experience, utilizingadvanced technology and local expertise to streamlineproject execution from design to completion. With a strongfocus on precision and efficiency, we ensure that every project adheres to the highest standards, driving cost-effectiveness and timely delivery for our clients."
  },
  {
    name: "Calibration Services",
    initialImage: calib,
    carouselImages: [calib, renewables],
    icon: <MdOutlineCompassCalibration className="s-icon" />,
    description:
      "In an industry where accuracy is paramount, our Calibration Services provide reliable, precise calibrations for industrial equipment across energy, mining, and oil & gas sectors. VALTEC Limited is dedicated to maintaining optimal performance and regulatory compliance by utilizing state-of-the-art calibration tools. Our services reduce downtime and improve operational safety, delivering the assurance our clients need to operate confidently and efficiently.",
  },
  {
    name: "Additives : Fuel, Lubricants and Greases",
    initialImage: lubricants,
    carouselImages: [lubricants, infrastructure],
    icon: <AiOutlineExperiment className="s-icon" />,
    description:
      "VALTEC Limited offers a range of high-quality fuel additives and lubricants designed to enhance equipment performance, reduce emissions, and extend machinery life. Our solutions are formulated for the demanding conditions of the energy and industrial sectors, providing improved efficiency and reliability in day-to-day operations. Partner with us for a greener, more efficient approach to fuel and lubricant management"
  },
  {
    name: "Infrastructure and Facilities",
    initialImage: infrastructure,
    carouselImages: [infrastructure, partnership],
    icon: <MdOutlinePrecisionManufacturing className="s-icon" />,
    description:
      "Our Infrastructure and Facilities services cater to the specific requirements of the industrial sector, providing reliable, tailored solutions for facility management, construction, and maintenance. VALTEC Limited leverages its local expertise and global network to support infrastructure projects, ensuring optimal functionality and safety standards in every project. We are dedicated to building resilient facilities that support long-term operational success."

  },
  {
    name: "Renewable Energy",
    initialImage: renewables,
    carouselImages: [renewables],
    icon: <MdOutlineSolarPower className="s-icon" />,
    description:
      "VALTEC Limited is committed to promoting sustainable growth through renewable energy solutions. From solar and wind to bioenergy, we design and implement clean energy projects that help reduce carbon footprints and energy costs. Our renewable energy expertise enables us to support clients on their journey toward sustainable operations, offering solutions that align with global energy goals and environmental standards."

  },
  {
    name: "Digital Solutions, IT and Cybersecurity",
    initialImage: digital,
    carouselImages: [digital],
    icon: <PiMonitor className="s-icon" />,
    description:
      "In an increasingly digital world, VALTEC Limited provides cutting-edge IT and cybersecurity solutions tailored for industrial environments. Our team of experts secures operational technology (OT) systems against emerging cyber threats and integrates advanced digital solutions to drive operational efficiency. We help companies modernize their operations while safeguarding critical infrastructure, ensuring peace of mind in an era of heightened cyber risks."
  },
  {
    name: "Public Private Partnerships",
    initialImage: partnership,
    carouselImages: [partnership],
    icon: <MdOutlineGroup className="s-icon" />,
    description:
      "VALTEC Limited fosters strategic public-private partnerships to drive innovation, enhance infrastructure, and boost economic growth in West Africa. Our collaborative approach connects government entities and private enterprises, fostering projects that benefit communities and contribute to sustainable development. By leveraging our industry expertise, we create mutually beneficial partnerships that address critical infrastructure and service needs."
  },
];

function Services() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      offset: 50,
    });
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [clickedImage, setClickedImage] = useState(null);

  const handleShow = (service) => {
    setShowModal(true);
    setClickedImage(service);
  };

  const handleClose = () => setShowModal(false);

  return (
    <>
      <Banner title="Services" />
      <Container fluid className="mt-4 px-0">
        <Container>
          <Row className="flex-column gy-2 mt-5">
            {serviceItems.map((service, idx) => (
              <Col key={idx} data-aos="fade-up" className="py-0">
                <Row className="justify-content-between align-items-start">
                  <Col xs={12} lg={6} className="zoom-out-container mb-5 align-self-center">
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip id={`tooltip-${idx}`}>Click me for more</Tooltip>}
                    >
                      <div className="image-Container pe-3 pt-0" style={{ width: "100%", height: "auto" }}>
                        <img
                          src={service.initialImage}
                          alt={service.name}
                          className="img-fluid"
                          onClick={() => handleShow(service)}
                        />
                      </div>
                    </OverlayTrigger>
                  </Col>
                  <Col className="align-self-center pt-0">
                    <p className="fs-5 p-0 m-0 defheadFont text-danger">
                      {service.icon} {service.name}
                    </p>
                    <hr
                      style={{
                        borderTop: "2px solid rgba(255,17,67,1)",
                        borderRadius: "4px",
                        opacity: "1",
                      }}
                    />
                    <span className="defbodyFont d-block pb-0">{service.description}</span>
                    <ContactSalesBtn />
                  </Col>
                </Row>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>

      <Modal show={showModal} onHide={handleClose} dialogClassName="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <Modal.Header closeButton>
          <Modal.Title>{clickedImage?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex w-100">
            <Carousel interval={2000}>
              {clickedImage?.carouselImages.map((image, idx) => (
                <Carousel.Item key={idx}>
                  <img
                    src={image}
                    alt={`Carousel Image ${idx + 1}`}
                    className="d-block w-100 modal-img" // Ensure modal images have the same size
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Services;
