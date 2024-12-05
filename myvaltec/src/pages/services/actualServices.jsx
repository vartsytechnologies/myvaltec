import { React, useState, useEffect } from "react";
import { Container, Row, Col, Modal, Button, Carousel} from "react-bootstrap";
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

import serv_bg from  "../../assets/services_img/white-unsplash-9d0375d2.jpg";
// new service images
import calib from "../../assets/services_img/new/calib.jpeg";
import digital from "../../assets/services_img/new/digital.jpg";
import lubricants from "../../assets/services_img/new/fuel.png";
import infrastructure from "../../assets/services_img/new/infra.jpg";
import partnership from "../../assets/services_img/partnership.jpg";
import renewables from "../../assets/services_img/new/pv.jpg";
import sustainability from "../../assets/services_img/new/sustainability2.JPG";

//service carousel images
import ca_calib from "../../assets/services_img/new/calib/dpi620-is1.jpeg";
import ca_calib2 from "../../assets/services_img/new/calib/dpi620g-is-ex-druck.jpg";
import ca_calib3 from "../../assets/services_img/new/calib/Bench.jpeg";

import f1 from "../../assets/services_img/new/fuel/f1.png";
import f2 from "../../assets/services_img/new/fuel/f2.png";
import f3 from "../../assets/services_img/new/fuel/f3.png";
import f4 from "../../assets/services_img/new/fuel/f4.png";
import f5 from "../../assets/services_img/new/fuel/f5.png";
import f6 from "../../assets/services_img/new/fuel/f6.png";

import i1 from "../../assets/services_img/new/infrastructure/i1.png";
import i2 from "../../assets/services_img/new/infrastructure/i2.jpeg";
import i3 from "../../assets/services_img/new/infrastructure/i3.jpeg";

import ren1 from "../../assets/services_img/new/renewable/pv.jpg";
import ren2 from "../../assets/services_img/new/renewable/lights.jpeg";
import ren3 from "../../assets/services_img/new/renewable/IMG_4122.JPG";
import ren4 from "../../assets/services_img/new/renewable/IMG_4123.JPG";
import ren5 from "../../assets/services_img/new/renewable/IMG_4124.JPG";
import ren6 from "../../assets/services_img/new/renewable/IMG_4125.JPG";
import ren7 from "../../assets/services_img/new/renewable/IMG_4126.JPG";
import ren8 from "../../assets/services_img/new/renewable/IMG_4127.JPG";
import ren9 from "../../assets/services_img/new/renewable/IMG_4128.JPG";
import ren10 from "../../assets/services_img/new/renewable/IMG_4129.JPG";

import epc1 from "../../assets/services_img/new/epc/epc1.jpg";
import epc2 from "../../assets/services_img/new/epc/epc2.jpg";
import epc3 from "../../assets/services_img/new/epc/epc3.jpg";
import epc4 from "../../assets/services_img/new/epc/epc4.jpg";

// Service items with their data
const serviceItems = [
  {
    name: "Engineering Procurement and Construction",
    initialImage: epc1,
    imgOrder: 0,
    carouselImages: [epc1, epc2, epc3, epc4],
    icon: <MdOutlineConstruction className="s-icon" />,
    description:"VALTEC Limited offers comprehensive EPC (Engineering, Procurement, and Construction) services, tailored to meet the complex needs of the energy, mining, oil, and gas sectors. Our team brings a wealth of experience, utilizing advanced technology and local expertise to streamline project execution from design to completion."
  },
  {
    name: "Calibration Services",
    initialImage: calib,
    imgOrder: 2,
    carouselImages: [ca_calib, ca_calib2, ca_calib3],
    icon: <MdOutlineCompassCalibration className="s-icon" />,
    description:
      "In an industry where accuracy is paramount, our Calibration Services provide reliable, precise calibrations for industrial equipment across energy, mining, and oil & gas sectors. VALTEC Limited is dedicated to maintaining optimal performance and regulatory compliance by utilizing state-of-the-art calibration tools. Our services reduce downtime and improve operational safety, delivering the assurance our clients need to operate confidently and efficiently.",
  },
  {
    name: "Additives : Fuel, Lubricants and Greases",
    initialImage: lubricants,
    imgOrder: 0,
    carouselImages: [f1, f2, f3, f4, f5, f6],
    icon: <AiOutlineExperiment className="s-icon" />,
    description:
      "VALTEC Limited offers a range of high-quality fuel additives and lubricants designed to enhance equipment performance, reduce emissions, and extend machinery life. Our solutions are formulated for the demanding conditions of the energy and industrial sectors, providing improved efficiency and reliability in day-to-day operations. Partner with us for a greener, more efficient approach to fuel and lubricant management"
  },
  {
    name: "Infrastructure and Facilities",
    initialImage: infrastructure,
    imgOrder: 2,
    carouselImages: [i1, i2, i3],
    icon: <MdOutlinePrecisionManufacturing className="s-icon" />,
    description:
      "Our Infrastructure and Facilities services cater to the specific requirements of the industrial sector, providing reliable, tailored solutions for facility management, construction, and maintenance. VALTEC Limited leverages its local expertise and global network to support infrastructure projects, ensuring optimal functionality and safety standards in every project. We are dedicated to building resilient facilities that support long-term operational success."

  },
  {
    name: "Renewable Energy",
    initialImage: renewables,
    imgOrder: 0,
    carouselImages: [ren1, ren2, ren3, ren4, ren5, ren6, ren7, ren8, ren9, ren10],
    icon: <MdOutlineSolarPower className="s-icon" />,
    description:
      "VALTEC Limited is committed to promoting sustainable growth through renewable energy solutions. From solar and wind to bioenergy, we design and implement clean energy projects that help reduce carbon footprints and energy costs. Our renewable energy expertise enables us to support clients on their journey toward sustainable operations, offering solutions that align with global energy goals and environmental standards."

  },
  {
    name: "Digital Solutions",
    initialImage: digital,
    imgOrder: 2,
    carouselImages: [digital],
    icon: <PiMonitor className="s-icon" />,
    description:
      <ul className="list-unstyled">
        <li><strong>Data Analytics</strong>
          <br/><span>We help businesses make smarter decisions by turning raw data into actionable insights.</span>
        </li>
        
        <li><strong>Visualization and Immersive Storytelling</strong>
          <br/><span>VALTEC brings your data to life with stunning visuals and engaging stories.</span>
        </li>
      </ul>
  },
  {
    name: "Public Private Partnerships",
    initialImage: partnership,
    imgOrder: 0,
    carouselImages: [partnership],
    icon: <MdOutlineGroup className="s-icon" />,
    description:
      "VALTEC Limited fosters strategic public-private partnerships to drive innovation, enhance infrastructure, and boost economic growth in West Africa. Our collaborative approach connects government entities and private enterprises, fostering projects that benefit communities and contribute to sustainable development. By leveraging our industry expertise, we create mutually beneficial partnerships that address critical infrastructure and service needs."
  },
  {
    name: "Sustainability",
    initialImage: sustainability,
    imgOrder: 2,
    carouselImages: [sustainability],
    icon: <MdOutlineGroup className="s-icon" />,
    description:
      <ul className="list-unstyled">
        <li><strong>Risk and assurance Strategy</strong>
          <br/>We help you identify risks and build strategies that ensure sustainable, long-term success.
        </li>
        <li><strong>Energy and emissions modeling</strong>
        <br/>Our solutions help you track energy use and reduce emissions for a greener, efficient future.
        </li>
      </ul>
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
      <Container fluid className="mt-0 pt-4 px-0" style={{backgroundImage: `url(${serv_bg})`,
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    backgroundBlendMode: 'soft-light', }} >
        <Container>
          <Row className="flex-column mt-5">
            {serviceItems.map((service, idx) => (
              <Col key={idx} data-aos="fade-up" className="py-0 mb-5">
                <Row className="justify-content-between align-items-center">
                  <Col xs={12} lg={6} className={`zoom-out-container mb-0 mb-md-5 align-self-center order-md-${service.imgOrder}`}>
                      <div className="image-Container align-self-center pe-3 pt-0" style={{ width: "100%", height: "auto" }}>
                        <img
                          src={service.initialImage}
                          alt={service.name}
                          className={`img-fluid `}
                          onClick={() => handleShow(service)}
                        />
                      </div>
                  </Col>
                  <Col className="align-self-center pt-0">
                  <div className="d-flex">
                    <p className="fs-5 pt-2 m-0 defheadFont text-danger mb-0">
                      {service.icon}
                    </p>
                    <p className="fs-5 pt-3 defheadFont text-danger ms-1 mb-0 ">
                      {service.name} </p>
                    </div>
                    <hr
                      style={{
                        borderTop: "2px solid rgba(255,17,67,1)",
                        borderRadius: "4px",
                        opacity: "1",
                        
                      }}
                    />
                    <p className="defbodyFont d-block pb-1">{service.description}</p>
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
