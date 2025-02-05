import { React, useState, useEffect } from "react";
import { Container, Row, Col, Modal, Button, Carousel } from "react-bootstrap";
import Banner from "../../components/banner/Banner";
import "./services.css";
// import ContactSalesBtn from "./contactSalesbtn";
import ProductsSection from "./epcService.jsx";
import ReadMorebtn from "./readMorebtn.jsx";
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

import serv_bg from "../../assets/services_img/white-unsplash-9d0375d2.jpg";
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


const epcDetails = [
    {
    name: "Engineering Procurement and Construction",
    initialImage: epc1,
    imgOrder: 0,
    carouselImages: [epc1, epc2, epc3, epc4],
    icon: <MdOutlineConstruction className="s-icon" />,
    description:
      "VALTEC Limited offers comprehensive EPC (Engineering, Procurement, and Construction) services, tailored to meet the complex needs of the energy, mining, oil, and gas sectors. Our team brings a wealth of experience, utilizing advanced technology and local expertise to streamline project execution from design to completion.",
    detailedContent: (
      <div className="service-description">
        <p>
          VALTEC Limited offers comprehensive EPC (Engineering, Procurement, and
          Construction) services tailored to meet the complex needs of the
          energy, mining, oil, and gas sectors. We are your premier sourcing
          partner, equipped with capabilities, offerings, technology, rapid
          turnaround, quality, and modular solutions. Our affiliation with a
          global distribution network provides your project with continuous
          product access, exceptional supply chain management, and an unwavering
          commitment to your success. When fabrication is central to your
          project, VALTEC is your reliable partner. With modular processes and
          state-of-the-art production equipment, we ensure your projects align
          seamlessly with your objectives. Our extensive offerings include
          turnkey metering, treatment facilities, and civil to mechanical
          construction services. <br />
          We specialize in the procurement of OEM products, such as but not
          limited to:
        </p>
        <ul>
          <li>Pipe, Tubes, Valves, Fittings & Flanges</li>
          <li>Pumps Production, and Drilling</li>
          <li>Mill, Tools, MRO & Consumables</li>
          <li>Electrical Cable & Products</li>
        </ul>
      </div>
    ),
  },
]

// Service items with their data
const serviceItems = [
  // {
  //   name: "Engineering Procurement and Construction",
  //   initialImage: epc1,
  //   imgOrder: 0,
  //   carouselImages: [epc1, epc2, epc3, epc4],
  //   icon: <MdOutlineConstruction className="s-icon" />,
  //   description:
  //     "VALTEC Limited offers comprehensive EPC (Engineering, Procurement, and Construction) services, tailored to meet the complex needs of the energy, mining, oil, and gas sectors. Our team brings a wealth of experience, utilizing advanced technology and local expertise to streamline project execution from design to completion.",
  //   detailedContent: (
  //     <div className="service-description">
  //       <p>
  //         VALTEC Limited offers comprehensive EPC (Engineering, Procurement, and
  //         Construction) services tailored to meet the complex needs of the
  //         energy, mining, oil, and gas sectors. We are your premier sourcing
  //         partner, equipped with capabilities, offerings, technology, rapid
  //         turnaround, quality, and modular solutions. Our affiliation with a
  //         global distribution network provides your project with continuous
  //         product access, exceptional supply chain management, and an unwavering
  //         commitment to your success. When fabrication is central to your
  //         project, VALTEC is your reliable partner. With modular processes and
  //         state-of-the-art production equipment, we ensure your projects align
  //         seamlessly with your objectives. Our extensive offerings include
  //         turnkey metering, treatment facilities, and civil to mechanical
  //         construction services. <br />
  //         We specialize in the procurement of OEM products, such as but not
  //         limited to:
  //       </p>
  //       <ul>
  //         <li>Pipe, Tubes, Valves, Fittings & Flanges</li>
  //         <li>Pumps Production, and Drilling</li>
  //         <li>Mill, Tools, MRO & Consumables</li>
  //         <li>Electrical Cable & Products</li>
  //       </ul>
  //     </div>
  //   ),
  // },
  {
    name: "Calibration Services",
    initialImage: calib,
    imgOrder: 2,
    carouselImages: [ca_calib, ca_calib2, ca_calib3],
    icon: <MdOutlineCompassCalibration className="s-icon" />,
    description:
      "In an industry where accuracy is paramount, our Calibration Services provide reliable, precise calibrations for industrial equipment across energy, mining, and oil & gas sectors. VALTEC Limited is dedicated to maintaining optimal performance and regulatory compliance by utilizing state-of-the-art calibration tools. Our services reduce downtime and improve operational safety, delivering the assurance our clients need to operate confidently and efficiently.",
    detailedContent: (
      <p>
        In an industry where accuracy, precision, and reliability of instruments
        and equipment are paramount, VALTEC calibration services solution will
        be your reliable partner for reliable, precise calibrations for all
        industrial instruments (temperature, pressure, humidity, electrical,
        mechanical) across the energy, manufacturing, mining, and oil & gas
        sectors. VALTEC is dedicated to maintaining optimal performance and
        regulatory compliance by utilizing our state-of-the-art calibration
        laboratory, which is well-equipped with precision tools and advanced
        technology. Partner with us for the calibration of your instruments and
        equipment, including sensor calibration, as-found calibration, as-left
        calibration, verification calibration, routine calibration, and
        maintenance calibration. Our services minimize downtime and enhance
        operational safety, providing the confidence our clients require to
        operate effectively and efficiently.
      </p>
    ),
  },
  {
    name: "Additives : Fuel, Lubricants and Greases",
    initialImage: lubricants,
    imgOrder: 0,
    carouselImages: [f1, f2, f3, f4, f5, f6],
    icon: <AiOutlineExperiment className="s-icon" />,
    description:
      "VALTEC Limited offers a range of high-quality fuel additives and lubricants designed to enhance equipment performance, reduce emissions, and extend machinery life. Our solutions are formulated for the demanding conditions of the energy and industrial sectors, providing improved efficiency and reliability in day-to-day operations. Partner with us for a greener, more efficient approach to fuel and lubricant management.",
    detailedContent: (
      <div>
        <p>
          Industry has struggled forever to find a way to significantly reduce
          the cost of maintaining its capital equipment. Friction and
          inefficient combustion are the greatest destroyers of machinery,
          efficiency, and the environment. We provide the industrial world with
          the most powerful lubricants and fuel additives that not only extend
          the life of equipment but also reduce greenhouse gas emissions, fuel
          consumption, maintenance, and replacement parts costs. The Fuel Ox®
          Infinity Lube™ and Fuel Ox® fuel additive line of products have
          accomplished this and by doing so offer value far beyond that of our
          competition. Our patented lubricant and fuel additive formulas,
          derived from renewable plant sources, are proven to deeply penetrate
          surfaces and reduce friction. They have been tested against all
          competitive products in the marketplace and our results show that they
          outlast conventional oil by up to 4x while reducing emissions by up to
          50%.
        </p>
      </div>
    ),
  },
  {
    name: "Infrastructure and Facilities",
    initialImage: infrastructure,
    imgOrder: 2,
    carouselImages: [i1, i2, i3],
    icon: <MdOutlinePrecisionManufacturing className="s-icon" />,
    description:
      "Our Infrastructure and Facilities services cater to the specific requirements of the industrial sector, providing reliable, tailored solutions for facility management, construction, and maintenance. VALTEC Limited leverages its local expertise and global network to support infrastructure projects, ensuring optimal functionality and safety standards in every project. We are dedicated to building resilient facilities that support long-term operational success.",
    detailedContent: (
      <div>
        <p>
          Our Infrastructure and Facilities services cater to the specific
          requirements of the industrial sector, providing reliable, tailored
          solutions for facility management, construction, and maintenance.
          VALTEC Limited leverages its local expertise and global network to
          support infrastructure projects, ensuring optimal functionality and
          safety standards in every project. We are dedicated to building
          resilient facilities that support long-term operational success.
        </p>
      </div>
    ),
  },
  {
    name: "Renewable Energy",
    initialImage: renewables,
    imgOrder: 0,
    carouselImages: [
      ren1,
      ren2,
      ren3,
      ren4,
      ren5,
      ren6,
      ren7,
      ren8,
      ren9,
      ren10,
    ],
    icon: <MdOutlineSolarPower className="s-icon" />,
    description:
      "VALTEC Limited is committed to promoting sustainable growth through renewable energy solutions. From solar and wind to bioenergy, we design and implement clean energy projects that help reduce carbon footprints and energy costs. Our renewable energy expertise enables us to support clients on their journey toward sustainable operations, offering solutions that align with global energy goals and environmental standards.",
    detailedContent: (
      <div>
        <p>
          Our Infrastructure and Facilities services cater to the specific
          requirements of the industrial sector, providing reliable, tailored
          solutions for facility management, construction, and maintenance.
          VALTEC Limited leverages its local expertise and global network to
          support infrastructure projects, ensuring optimal functionality and
          safety standards in every project. We are dedicated to building
          resilient facilities that support long-term operational success.
        </p>
      </div>
    ),
  },
  {
    name: "Digital Solutions",
    initialImage: digital,
    imgOrder: 2,
    carouselImages: [digital],
    icon: <PiMonitor className="s-icon" />,
    description: (
      <ul className="list-unstyled">
        <li>
          <strong>Data Analytics</strong>
          <br />
          <span>
            We help businesses make smarter decisions by turning raw data into
            actionable insights.
          </span>
        </li>

        <li>
          <strong>Visualization and Immersive Storytelling</strong>
          <br />
          <span>
            VALTEC brings your data to life with stunning visuals and engaging
            stories.
          </span>
        </li>
      </ul>
    ),
  },
  {
    name: "Public Private Partnerships",
    initialImage: partnership,
    imgOrder: 0,
    carouselImages: [partnership],
    icon: <MdOutlineGroup className="s-icon" />,
    description:
      "VALTEC Limited fosters strategic public-private partnerships to drive innovation, enhance infrastructure, and boost economic growth in West Africa. Our collaborative approach connects government entities and private enterprises, fostering projects that benefit communities and contribute to sustainable development. By leveraging our industry expertise, we create mutually beneficial partnerships that address critical infrastructure and service needs.",
    detailedContent: (
      <div>
        <p>
          VALTEC Limited fosters strategic public-private partnerships to drive
          innovation, enhance infrastructure, and boost economic growth in West
          Africa. Our collaborative approach connects government entities and
          private enterprises, fostering projects that benefit communities and
          contribute to sustainable development. By leveraging our industry
          expertise, we create mutually beneficial partnerships that address
          critical infrastructure and service needs.
        </p>
      </div>
    ),
  },
  {
    name: "Sustainability",
    initialImage: sustainability,
    imgOrder: 2,
    carouselImages: [sustainability],
    icon: <MdOutlineGroup className="s-icon" />,
    description: (
      <ul className="list-unstyled">
        <li>
          <strong>Risk and assurance Strategy</strong>
          <br />
          We help you identify risks and build strategies that ensure
          sustainable, long-term success.
        </li>
        <li>
          <strong>Energy and emissions modeling</strong>
          <br />
          Our solutions help you track energy use and reduce emissions for a
          greener, efficient future.
        </li>
      </ul>
    ),
    detailedContent: (
      <div className="service-description">
        <h2>Risk and Assurance Strategy</h2>
        <p>
          Uncertainty, experienced by all businesses, is synonymous with risk.
          We recognize this and offer comprehensive risk and assurance
          strategies for clients that yield significant enterprise, strategic,
          and capital asset outcomes. We assist business leaders in becoming
          comfortable with uncertainty, defining complex problems, managing
          ambiguity, and navigating dynamic environments through:
        </p>
        <h4>Strategic risk and assurance</h4>
        <ul>
          <li>Risk-based strategy and strategic risk management</li>
          <li>Strategy performance and governance integration</li>
          <li>
            Risk-based decision support, scenario management, and adaptive
            planning
          </li>
          <li>Critical success factor identification</li>
          <li>
            Board and Executive advisory, alignment, and assurance delivery
            services
          </li>
        </ul>
        <h4>Enterprise risk and assurance</h4>
        <ul>
          <li>Risk, governance, audit, assurance, and benefits frameworks</li>
          <li>
            Risk assessments and controls, key risk indicators, risk reporting,
            knowledge management and continuous improvement approaches
          </li>
          <li>Second-line assurance and compliance services</li>
          <li>
            Enterprise resilience, including business continuity, security, and
            crisis and emergency management
          </li>
        </ul>
        <h4>Enterprise risk and assurance</h4>
        <ul>
          <li>
            Project, program, and portfolio risk advisory, governance, benefits
            management, and assurance services
          </li>
          <li>
            Capital portfolio prioritization, multi-criteria analysis (MCA),
            total value of ownership (TVO), and complex diagnostic-based project
            selection
          </li>
          <li>
            Qualitative and quantitative risk analysis, scenario testing,
            risk-based cost estimation, and Monte Carlo simulation
          </li>
        </ul>
      </div>
    ),
  },
];

function Services() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      offset: 50,
    });
  }, []);
  // State for Image Modal
  const [showModal, setShowModal] = useState(false);
  const [clickedImage, setClickedImage] = useState(null);

  // State for Read More Modal
  const [showReadMoreModal, setShowReadMoreModal] = useState(false);
  const [clickedService, setClickedService] = useState(null);

  // Function for showing image modal
  const handleShowImageModal = (service) => {
    setShowModal(true);
    setClickedImage(service);
  };

  // Function for showing read more modal
  const handleShowReadMoreModal = (service) => {
    console.log("Service passed to modal:", service);
    setShowReadMoreModal(true);
    setClickedService(service); // Set service data for Read More modal
  };

  // Close both modals
  const handleClose = () => {
    setShowModal(false);
    setShowReadMoreModal(false); // Close both modals when called
  };

  return (
    <>
      <Banner title="Services" />
      <Container
        fluid
        className="mt-0 pt-4 px-0"
        style={{
          backgroundImage: `url(${serv_bg})`,
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          backgroundBlendMode: "soft-light",
        }}
      >
        <Container>
          <Row>
            <ProductsSection/>
            <Col style={{'position':'relative', 'top':'-50px', 'left':'45px'}}>
              <ReadMorebtn onClick={() => handleShowReadMoreModal(epcDetails[0])}/>
            </Col>
          </Row>
          <Row className="flex-column mt-5">
            {serviceItems.map((service, idx) => (
              <Col key={idx} data-aos="fade-up" className="py-0 mb-5">
                <Row className="justify-content-between align-items-center">
                  <Col
                    xs={12}
                    lg={6}
                    className={`zoom-out-container mb-0 mb-md-5 align-self-center order-md-${service.imgOrder}`}
                  >
                    <div
                      className="image-Container align-self-center pe-3 pt-0"
                      style={{ width: "100%", height: "auto" }}
                    >
                      <img
                        src={service.initialImage}
                        alt={service.name}
                        className={`img-fluid `}
                        onClick={() => handleShowImageModal(service)}
                      />
                    </div>
                  </Col>
                  <Col className="align-self-center pt-0">
                    <div className="d-flex">
                      <p className="fs-5 pt-2 m-0 defheadFont text-danger mb-0">
                        {service.icon}
                      </p>
                      <p className="fs-5 pt-3 defheadFont text-danger ms-1 mb-0 ">
                        {service.name}{" "}
                      </p>
                    </div>
                    <hr
                      style={{
                        borderTop: "2px solid rgba(255,17,67,1)",
                        borderRadius: "4px",
                        opacity: "1",
                      }}
                    />
                    <p className="defbodyFont d-block pb-1">
                      {service.description}
                    </p>
                    {/* <ContactSalesBtn />{" "} */}
                    <ReadMorebtn
                      onClick={() => handleShowReadMoreModal(service)}
                    />
                  </Col>
                </Row>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>

      <Modal
        show={showModal}
        onHide={handleClose}
        dialogClassName="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg"
      >
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
                    alt={`Slideshow ${idx + 1}`}
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

      {/* Modal for Read More (Detailed Content) */}
      <Modal
        show={showReadMoreModal}
        dialogClassName="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg"
        onHide={() => setShowReadMoreModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>{clickedService?.name || "No Title"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {clickedService?.detailedContent ||
            "No additional content available."}
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
