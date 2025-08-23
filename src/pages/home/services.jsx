import React from "react";
// import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./homeServices.css";
import {
  MdOutlineConstruction,
  MdOutlineCompassCalibration,
  MdOutlineSolarPower,
  MdOutlinePrecisionManufacturing,
  MdOutlineWifiProtectedSetup,
  MdOutlineGroup,
} from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { PiMonitor } from "react-icons/pi";
import { AiOutlineExperiment } from "react-icons/ai";
import { motion } from "framer-motion";
import AnimatedElement from "../../components/motionComponent";

function ServiceSection() {
  return (
    <>
      <Container fluid className="defPb bg-gray pt-4 pb-0 mb-5">
        <Container className="pb-4 mb-4">
          <AnimatedElement
            as="h1"
            animation="fade-down"
            delay={0.5}
            className="mt-4 text-center text-danger defheadFont"
          >
            Services
          </AnimatedElement>
          <AnimatedElement
            as="p"
            animation="fade-down"
            delay={0.4}
            className="text-center defbodyFont defPb"
          >
            <i>
              We deliver value through technology to our clients in these areas.
            </i>
          </AnimatedElement>

          <Row>
            <Col xs={12} lg={6}>
              <Row className="flex-column p-0 m-0">
                <Col className="subs">
                  <div className="main mb-4 mb-md-5 pb-2">
                    <div className="row">
                      <div
                        className="col-3 d-none d-sm-flex align-items-center justify-content-center"
                        style={{
                          background: "rgba(255, 177, 193, 0.22",
                        }}
                      >
                        <AnimatedElement
                          as="div"
                          animation="fade-up"
                          delay={0.6}
                          className="image-container m-2 p-2 d-flex align-items-center justify-content-center"
                        >
                          {" "}
                          <MdOutlineConstruction className="i-cons" />
                        </AnimatedElement>
                      </div>
                      <div className="col-12 col-sm-9">
                        <div className="text-container me-2">
                          <AnimatedElement
                            className="fs-5 p-0 m-0 defheadFont text-danger"
                            animation="fade-up"
                            delay={0.6}
                          >
                            Engineering, Procurement, Consulting & Project
                            Management
                          </AnimatedElement>

                          <motion.hr
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            viewport={{ once: true }}
                            style={{
                              borderTop: "2px solid rgba(255,17,67,1)",
                              borderRadius: "4px",
                              opacity: "1",
                              margin: "0.5rem 0",
                            }}
                          />
                          <AnimatedElement
                            as="p"
                            animation="fade-up"
                            delay={0.7}
                            className="p-0 m-0 defbodyFont text-left"
                          >
                            Our team brings a wealth of experience, utilizing
                            advanced technology and local expertise to
                            streamline project execution from design to
                            completion.
                          </AnimatedElement>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className="subs">
                  <div className="main mb-4 mb-md-5 pb-2">
                    <div className="row">
                      <div
                        className="col-3 d-none d-sm-flex align-items-center justify-content-center"
                        style={{
                          background: "rgba(255, 177, 193, 0.22",
                        }}
                      >
                        <AnimatedElement
                          as="div"
                          animation="fade-up"
                          delay={0.6}
                          className="image-container m-2 p-2 d-flex align-items-center justify-content-center"
                        >
                          {" "}
                          <MdOutlineCompassCalibration className="i-cons" />
                        </AnimatedElement>
                      </div>
                      <div className="col-12 col-sm-9">
                        <div className="text-container me-2">
                          <AnimatedElement
                            className="fs-5 p-0 m-0 defheadFont text-danger"
                            animation="fade-up"
                            delay={0.6}
                          >
                            Calibration Services
                          </AnimatedElement>

                          <motion.hr
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            viewport={{ once: true }}
                            style={{
                              borderTop: "2px solid rgba(255,17,67,1)",
                              borderRadius: "4px",
                              opacity: "1",
                              margin: "0.5rem 0",
                            }}
                          />
                          <AnimatedElement
                            as="p"
                            animation="fade-up"
                            delay={0.7}
                            className="p-0 m-0 defbodyFont text-left"
                          >
                            In an industry where accuracy is paramount, our
                            Calibration Services provide reliable, precise
                            calibrations for industrial equipment across energy,
                            mining, and oil & gas sectors.
                          </AnimatedElement>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className="subs">
                  <div className="main mb-4 mb-md-5 pb-2">
                    <div className="row">
                      <div
                        className="col-3 d-none d-sm-flex align-items-center justify-content-center"
                        style={{
                          background: "rgba(255, 177, 193, 0.22",
                        }}
                      >
                        <AnimatedElement
                          as="div"
                          animation="fade-up"
                          delay={0.6}
                          className="image-container m-2 p-2 d-flex align-items-center justify-content-center"
                        >
                          {" "}
                          <AiOutlineExperiment className="i-cons" />
                        </AnimatedElement>
                      </div>
                      <div className="col-12 col-sm-9">
                        <div className="text-container me-2">
                          <AnimatedElement
                            className="fs-5 p-0 m-0 defheadFont text-danger"
                            animation="fade-up"
                            delay={0.6}
                          >
                            Additives : Fuel, Lubricants, and Greases
                          </AnimatedElement>

                          <motion.hr
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            viewport={{ once: true }}
                            style={{
                              borderTop: "2px solid rgba(255,17,67,1)",
                              borderRadius: "4px",
                              opacity: "1",
                              margin: "0.5rem 0",
                            }}
                          />
                          <AnimatedElement
                            as="p"
                            animation="fade-up"
                            delay={0.7}
                            className="p-0 m-0 defbodyFont text-left"
                          >
                            VALTEC offers a range of high quality addictives, fuels, 
                            lubricants, and greases designed to enhance equipment
                            performance, reduce emissions, and extend machinery
                            life.
                          </AnimatedElement>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className="subs">
                  <div className="main mb-4 mb-md-5 pb-2">
                    <div className="row">
                      <div
                        className="col-3 d-none d-sm-flex align-items-center justify-content-center"
                        style={{
                          background: "rgba(255, 177, 193, 0.22",
                        }}
                      >
                        <AnimatedElement
                          as="div"
                          animation="fade-up"
                          delay={0.6}
                          className="image-container m-2 p-2 d-flex align-items-center justify-content-center"
                        >
                          {" "}
                          <PiMonitor className="i-cons" />
                        </AnimatedElement>
                      </div>
                      <div className="col-12 col-sm-9">
                        <div className="text-container me-2">
                          <AnimatedElement
                            className="fs-5 p-0 m-0 defheadFont text-danger"
                            animation="fade-up"
                            delay={0.6}
                          >
                            Data & Analytics
                          </AnimatedElement>

                          <motion.hr
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            viewport={{ once: true }}
                            style={{
                              borderTop: "2px solid rgba(255,17,67,1)",
                              borderRadius: "4px",
                              opacity: "1",
                              margin: "0.5rem 0",
                            }}
                          />
                          <AnimatedElement
                            as="p"
                            animation="fade-up"
                            delay={0.7}
                            className="p-0 m-0 defbodyFont text-left"
                          >
                            We leverage data engineering, advanced analytics and
                            machine learning technology to address a diverse
                            range of client challenges.
                          </AnimatedElement>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className="subs">
                  <div className="main mb-4 mb-md-5 pb-2">
                    <div className="row">
                      <div
                        className="col-3 d-none d-sm-flex align-items-center justify-content-center"
                        style={{
                          background: "rgba(255, 177, 193, 0.22",
                        }}
                      >
                        <AnimatedElement
                          as="div"
                          animation="fade-up"
                          delay={0.6}
                          className="image-container m-2 p-2 d-flex align-items-center justify-content-center"
                        >
                          {" "}
                          <MdOutlineWifiProtectedSetup className="i-cons" />
                        </AnimatedElement>
                      </div>
                      <div className="col-12 col-sm-9">
                        <div className="text-container me-2">
                          <AnimatedElement
                            className="fs-5 p-0 m-0 defheadFont text-danger"
                            animation="fade-up"
                            delay={0.6}
                          >
                            Sustainability
                          </AnimatedElement>

                          <motion.hr
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            viewport={{ once: true }}
                            style={{
                              borderTop: "2px solid rgba(255,17,67,1)",
                              borderRadius: "4px",
                              opacity: "1",
                              margin: "0.5rem 0",
                            }}
                          />
                          <AnimatedElement
                            as="p"
                            animation="fade-up"
                            delay={0.7}
                            className="p-0 m-0 defbodyFont text-left"
                          >
                            We help you identify risks and build strategies that
                            ensure sustainable, long-term success. Our solutions
                            help you track energy use and reduce emissions for a
                            greener, efficient future.
                          </AnimatedElement>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xs={12} lg={6}>
              <Row className="flex-column">
                <Col className="subs">
                  <div className="main mb-4 mb-md-5 pb-2">
                    <div className="row">
                      <div
                        className="col-3 d-none d-sm-flex align-items-center justify-content-center"
                        style={{
                          background: "rgba(255, 177, 193, 0.22",
                        }}
                      >
                        <AnimatedElement
                          as="div"
                          animation="fade-up"
                          delay={0.6}
                          className="image-container m-2 p-2 d-flex align-items-center justify-content-center"
                        >
                          {" "}
                          <MdOutlineSolarPower className="i-cons" />
                        </AnimatedElement>
                      </div>
                      <div className="col-12 col-sm-9">
                        <div className="text-container me-2">
                          <AnimatedElement
                            className="fs-5 p-0 m-0 defheadFont text-danger"
                            animation="fade-up"
                            delay={0.6}
                          >
                            Renewable Energy
                          </AnimatedElement>

                          <motion.hr
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            viewport={{ once: true }}
                            style={{
                              borderTop: "2px solid rgba(255,17,67,1)",
                              borderRadius: "4px",
                              opacity: "1",
                              margin: "0.5rem 0",
                            }}
                          />
                          <AnimatedElement
                            as="p"
                            animation="fade-up"
                            delay={0.7}
                            className="p-0 m-0 defbodyFont text-left"
                          >
                            We meet residential, commercial, utility energy
                            demands with high-quality solar photovoltaic modules
                            and reliable battery solutions for our projects.
                          </AnimatedElement>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className="subs">
                  <div className="main mb-4 mb-md-5 pb-2">
                    <div className="row">
                      <div
                        className="col-3 d-none d-sm-flex align-items-center justify-content-center"
                        style={{
                          background: "rgba(255, 177, 193, 0.22",
                        }}
                      >
                        <AnimatedElement
                          as="div"
                          animation="fade-up"
                          delay={0.6}
                          className="image-container m-2 p-2 d-flex align-items-center justify-content-center"
                        >
                          {" "}
                          <MdOutlinePrecisionManufacturing className="i-cons" />
                        </AnimatedElement>
                      </div>
                      <div className="col-12 col-sm-9">
                        <div className="text-container me-2">
                          <AnimatedElement
                            className="fs-5 p-0 m-0 defheadFont text-danger"
                            animation="fade-up"
                            delay={0.6}
                          >
                            Infrastructure and Facilities
                          </AnimatedElement>

                          <motion.hr
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            viewport={{ once: true }}
                            style={{
                              borderTop: "2px solid rgba(255,17,67,1)",
                              borderRadius: "4px",
                              opacity: "1",
                              margin: "0.5rem 0",
                            }}
                          />
                          <AnimatedElement
                            as="p"
                            animation="fade-up"
                            delay={0.7}
                            className="p-0 m-0 defbodyFont text-left"
                            >
                            VALTEC leverages its local expertise and global
                            network to support infrastructure projects, ensuring
                            optimal functionality and safety standards in every
                            project.
                          </AnimatedElement>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className="subs">
                  <div className="main mb-4 mb-md-5 pb-2">
                    <div className="row">
                      <div
                        className="col-3 d-none d-sm-flex align-items-center justify-content-center"
                        style={{
                          background: "rgba(255, 177, 193, 0.22",
                        }}
                      >
                        <AnimatedElement
                          as="div"
                          animation="fade-up"
                          delay={0.6}
                          className="image-container m-2 p-2 d-flex align-items-center justify-content-center"
                        >
                          {" "}
                          <MdOutlineGroup className="i-cons" />
                        </AnimatedElement>
                      </div>
                      <div className="col-12 col-sm-9">
                        <div className="text-container me-2">
                          <AnimatedElement
                            className="fs-5 p-0 m-0 defheadFont text-danger"
                            animation="fade-up"
                            delay={0.6}
                          >
                            Public Private Partnerships
                          </AnimatedElement>

                          <motion.hr
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            viewport={{ once: true }}
                            style={{
                              borderTop: "2px solid rgba(255,17,67,1)",
                              borderRadius: "4px",
                              opacity: "1",
                              margin: "0.5rem 0",
                            }}
                          />
                          <AnimatedElement
                            as="p"
                            animation="fade-up"
                            delay={0.7}
                            className="p-0 m-0 defbodyFont text-left"
                          >
                            Our collaborative approach connects government
                            entities and private enterprises, fostering projects
                            that benefit communities and contribute to
                            sustainable development.
                          </AnimatedElement>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className="subs">
                  <div className="main mb-4 mb-md-5 pb-2">
                    <div className="row">
                      <div
                        className="col-3 d-none d-sm-flex align-items-center justify-content-center"
                        style={{
                          background: "rgba(255, 177, 193, 0.22",
                        }}
                      >
                        <AnimatedElement
                          as="div"
                          animation="fade-up"
                          delay={0.6}
                          className="image-container m-2 p-2 d-flex align-items-center justify-content-center"
                        >
                          {" "}
                          <VscWorkspaceTrusted className="i-cons" />
                        </AnimatedElement>
                      </div>
                      <div className="col-12 col-sm-9">
                        <div className="text-container me-2">
                          <AnimatedElement
                            className="fs-5 p-0 m-0 defheadFont text-danger"
                            animation="fade-up"
                            delay={0.6}
                          >
                            Precision & Reliability
                          </AnimatedElement>

                          <motion.hr
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            viewport={{ once: true }}
                            style={{
                              borderTop: "2px solid rgba(255,17,67,1)",
                              borderRadius: "4px",
                              opacity: "1",
                              margin: "0.5rem 0",
                            }}
                          />
                          <AnimatedElement
                            as="p"
                            animation="fade-up"
                            delay={0.7}
                            className="p-0 m-0 defbodyFont text-left"
                          >
                            Our highly specialized technical team is equipped to
                            identify and resolve operational issues while
                            utilizing various reliability tools and
                            complementary techniques to address every aspect of
                            your maintenance needs.
                          </AnimatedElement>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
      <br />
      <br />
    </>
  );
}

export default ServiceSection;
