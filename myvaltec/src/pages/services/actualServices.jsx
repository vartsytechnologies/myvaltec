import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Banner from "../../components/banner/Banner";
import "./services.css";
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
import { useEffect } from "react";
import "aos/dist/aos.css";
//service images
import epc from "../../assets/services_img/epc.jpg";
import calib from "../../assets/services_img/calib.jpg";
import digital from "../../assets/services_img/digital.jpg";
import lubricants from "../../assets/services_img/lubricants.jpg";
import infrastructure from "../../assets/services_img/infrastructure.jpg";
import partnership from "../../assets/services_img/partnership.jpg";
import renewables from "../../assets/services_img/renewables.jpg";

function Services() {
  useEffect(() => {
    AOS.init({
      duration: 900, // Animation duration in milliseconds
      offset: 50, // Trigger animations 50px before an element is in view
    });
  }, []);
  return (
    <>
      <Banner title="Services" />
      <Container
        fluid
        className="mt-4 px-0"
      >
        <Container>
          <Row className="flex-column gy-2 mt-5">
            <Col
              data-aos="fade-up"
              className="py-4"
            >
              <Row className="justify-content-between align-items-start">
                <Col
                  xs={12}
                  lg={6}
                  className="zoom-out-container mb-5"
                >
                  <div
                    className="image-Container"
                    style={{ width: "100%", height: "auto" }}
                  >
                    <img
                      src={epc}
                      alt="Company"
                      className="img-fluid"
                    />
                  </div>
                </Col>
                <Col className="">
                  <p className="fs-5 p-0 m-0 defheadFont text-danger">
                    <MdOutlineConstruction className="s-icon" />
                    Engineering, Procument and Construction
                  </p>
                  <hr
                    style={{
                      borderTop: "2px solid rgba(255,17,67,1)",
                      borderRadius: "4px",
                      opacity: "1",
                      margin: "0.5rem 0",
                    }}
                  />
                  <span className="defbodyFont d-block">
                    Valtec Limited offers comprehensive EPC (Engineering,
                    Procurement, and Construction) services, tailored to meet
                    the complex needs of the energy, mining, oil, and gas
                    sectors. Our team brings a wealth of experience, utilizing
                    advanced technology and local expertise to streamline
                    project execution from design to completion. With a strong
                    focus on precision and efficiency, we ensure that every
                    project adheres to the highest standards, driving
                    cost-effectiveness and timely delivery for our clients.
                  </span>
                  <p className="mt-4"></p>
                </Col>
              </Row>
            </Col>
            <Col
              data-aos="fade-up"
              className="py-4"
            >
              <Row className="justify-content-between align-items-start">
                <Col
                  xs={12}
                  lg={6}
                  className="zoom-out-container mb-5"
                >
                  <img
                    src={calib}
                    alt="Company"
                    className="img-fluid"
                  />
                </Col>
                <Col>
                  <p className="fs-5 p-0 m-0 defheadFont text-danger">
                    <MdOutlineCompassCalibration className="s-icon" />
                    Calibration Services
                  </p>
                  <hr
                    style={{
                      borderTop: "2px solid rgba(255,17,67,1)",
                      borderRadius: "4px",
                      opacity: "1",
                      margin: "0.5rem 0",
                    }}
                  />
                  <span className="defbodyFont d-block">
                    In an industry where accuracy is paramount, our Calibration
                    Services provide reliable, precise calibrations for
                    industrial equipment across energy, mining, and oil & gas
                    sectors. Valtec Limited is dedicated to maintaining optimal
                    performance and regulatory compliance by utilizing
                    state-of-the-art calibration tools. Our services reduce
                    downtime and improve operational safety, delivering the
                    assurance our clients need to operate confidently and
                    efficiently.
                  </span>
                  <p className="mt-4"></p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <Container
          fluid
          className="bg-gray"
        >
          <Container className="py-4">
            <Row className="flex-column gy-2 mt-5">
              <Col
                data-aos="fade-up"
                className="py-4"
              >
                <Row className="justify-content-between align-items-start">
                  <Col
                    xs={12}
                    lg={6}
                    className="zoom-out-container mb-5"
                  >
                    <img
                      src={lubricants}
                      alt="Company"
                      className="img-fluid"
                    />
                  </Col>
                  <Col className="">
                    <p className="fs-5 p-0 m-0 defheadFont text-danger">
                      <AiOutlineExperiment className="s-icon" /> Fuel Additives
                      and Lubricants
                    </p>
                    <hr
                      style={{
                        borderTop: "2px solid rgba(255,17,67,1)",
                        borderRadius: "4px",
                        opacity: "1",
                        margin: "0.5rem 0",
                      }}
                    />
                    <span className="defbodyFont d-block">
                      Valtec Limited offers a range of high-quality fuel
                      additives and lubricants designed to enhance equipment
                      performance, reduce emissions, and extend machinery life.
                      Our solutions are formulated for the demanding conditions
                      of the energy and industrial sectors, providing improved
                      efficiency and reliability in day-to-day operations.
                      Partner with us for a greener, more efficient approach to
                      fuel and lubricant management.
                    </span>
                    <p className="mt-4"></p>
                  </Col>
                </Row>
              </Col>
              <Col
                data-aos="fade-up"
                className="py-4"
              >
                <Row className="justify-content-between align-items-start">
                  <Col
                    xs={12}
                    lg={6}
                    className="zoom-out-container mb-5"
                  >
                    <img
                      src={infrastructure}
                      alt="Company"
                      className="img-fluid"
                    />
                  </Col>
                  <Col className="">
                    <p className="fs-5 p-0 m-0 defheadFont text-danger">
                      <MdOutlinePrecisionManufacturing className="s-icon" />{" "}
                      Infrastructure and Facilities
                    </p>
                    <hr
                      style={{
                        borderTop: "2px solid rgba(255,17,67,1)",
                        borderRadius: "4px",
                        opacity: "1",
                        margin: "0.5rem 0",
                      }}
                    />
                    <span className="defbodyFont d-block">
                      Our Infrastructure and Facilities services cater to the
                      specific requirements of the industrial sector, providing
                      reliable, tailored solutions for facility management,
                      construction, and maintenance. Valtec Limited leverages
                      its local expertise and global network to support
                      infrastructure projects, ensuring optimal functionality
                      and safety standards in every project. We are dedicated to
                      building resilient facilities that support long-term
                      operational success.
                    </span>
                    <p className="mt-4"></p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Container>
        <Container>
          <Row className="flex-column gy-2 mt-5">
            <Col
              data-aos="fade-up"
              className="py-4"
            >
              <Row className="justify-content-between align-items-start">
                <Col
                  xs={12}
                  lg={6}
                  className="zoom-out-container mb-5"
                >
                  <img
                    src={renewables}
                    alt="Company"
                    className="img-fluid"
                  />
                </Col>
                <Col className="">
                  <p className="fs-5 p-0 m-0 defheadFont text-danger">
                    <MdOutlineSolarPower className="s-icon" />
                    Renewable Energy
                  </p>
                  <hr
                    style={{
                      borderTop: "2px solid rgba(255,17,67,1)",
                      borderRadius: "4px",
                      opacity: "1",
                      margin: "0.5rem 0",
                    }}
                  />
                  Valtec Limited is committed to promoting sustainable growth
                  through renewable energy solutions. From solar and wind to
                  bioenergy, we design and implement clean energy projects that
                  help reduce carbon footprints and energy costs. Our renewable
                  energy expertise enables us to support clients on their
                  journey toward sustainable operations, offering solutions that
                  align with global energy goals and environmental standards.
                  <p className="mt-4"></p>
                </Col>
              </Row>
            </Col>
            <Col
              data-aos="fade-up"
              className="py-4"
            >
              <Row className="justify-content-between align-items-start">
                <Col
                  xs={12}
                  lg={6}
                  className="zoom-out-container mb-5"
                >
                  <img
                    src={digital}
                    alt="Company"
                    className="img-fluid"
                  />
                </Col>
                <Col className="">
                  <p className="fs-5 p-0 m-0 defheadFont text-danger">
                    <PiMonitor className="s-icon" />
                    Digital Solutions, IT and Cybersecurity
                  </p>
                  <hr
                    style={{
                      borderTop: "2px solid rgba(255,17,67,1)",
                      borderRadius: "4px",
                      opacity: "1",
                      margin: "0.5rem 0",
                    }}
                  />
                  <span className="defbodyFont d-block">
                    In an increasingly digital world, Valtec Limited provides
                    cutting-edge IT and cybersecurity solutions tailored for
                    industrial environments. Our team of experts secures
                    operational technology (OT) systems against emerging cyber
                    threats and integrates advanced digital solutions to drive
                    operational efficiency. We help companies modernize their
                    operations while safeguarding critical infrastructure,
                    ensuring peace of mind in an era of heightened cyber risks.
                  </span>
                  <p className="mt-4"></p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <Container
          fluid
          className="bg-gray py-4"
        >
          <Container>
            <Row className="flex-column gy-2 mt-5">
              <Col
                data-aos="fade-up"
                className="py-4"
              >
                <Row className="justify-content-between align-items-start">
                  <Col
                    xs={12}
                    lg={6}
                    className="zoom-out-container mb-5"
                  >
                    <img
                      src={partnership}
                      alt="Company"
                      className="img-fluid"
                    />
                  </Col>
                  <Col className="">
                    <p className="fs-5 p-0 m-0 defheadFont text-danger">
                      <MdOutlineGroup className="s-icon" />
                      Public Private Partnerships
                    </p>
                    <hr
                      style={{
                        borderTop: "2px solid rgba(255,17,67,1)",
                        borderRadius: "4px",
                        opacity: "1",
                        margin: "0.5rem 0",
                      }}
                    />
                    <span className="defbodyFont d-block">
                      Valtec Limited fosters strategic public-private
                      partnerships to drive innovation, enhance infrastructure,
                      and boost economic growth in West Africa. Our
                      collaborative approach connects government entities and
                      private enterprises, fostering projects that benefit
                      communities and contribute to sustainable development. By
                      leveraging our industry expertise, we create mutually
                      beneficial partnerships that address critical
                      infrastructure and service needs.
                    </span>
                    <p className="mt-4"></p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Container>
      </Container>
    </>
  );
}

export default Services;
