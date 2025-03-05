import { React, useEffect } from "react";
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
import AOS from "aos";
import "aos/dist/aos.css";

function ServiceSection() {
  useEffect(() => {
    AOS.init({
      duration: 350,
      offset: 50,
    });
  }, []);
  return (
    <>
      <Container fluid className="defPb bg-gray pt-5 pb-0 mb-5">
        <Container className="pb-4 mb-4">
          <h1
            className="mt-4 text-center text-danger defheadFont"
            data-aos="fade-up"
          >
            Services
          </h1>
          <p
            className="text-center defbodyFont defPb"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <i>We serve our clients very well in these areas of services</i>
          </p>

          <Row>
            <Col xs={12} lg={6}>
              <Row className="flex-column">
                <Col>
                  <div className="main mb-5 pb-2">
                    <div className="row">
                      <div
                        className="col-3 d-none d-sm-flex align-items-center justify-content-center"
                        style={{
                          background: "rgba(255, 177, 193, 0.22",
                        }}
                      >
                        <div
                          className="image-container m-2 p-2 d-flex align-items-center justify-content-center"
                          data-aos="fade-up"
                          data-aos-delay="500"
                        >
                          <MdOutlineConstruction className="i-cons" />
                        </div>
                      </div>
                      <div className="col-12 col-sm-9">
                        <div className="text-container me-2">
                          <h3
                            className="fs-5 p-0 m-0 defheadFont text-danger"
                            data-aos="fade-up"
                            data-aos-delay="600"
                          >
                            Engineering, Procurement, Consulting & Project
                            Management
                          </h3>
                          <hr
                            style={{
                              borderTop: "2px solid rgba(255,17,67,1)",
                              borderRadius: "4px",
                              opacity: "1",
                              margin: "0.5rem 0",
                            }}
                            data-aos="fade-up"
                            data-aos-delay="10"
                          />
                          <p
                            className="p-0 m-0 defbodyFont text-left"
                            data-aos="fade-up"
                            data-aos-delay="700"
                          >
                            Our team brings a wealth of experience, utilizing
                            advanced technology and local expertise to
                            streamline project execution from design to
                            completion.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="main mb-5 pb-2">
                    <div className="row">
                      <div
                        className="col-3 d-none d-sm-flex align-items-center justify-content-center"
                        style={{
                          background: "rgba(255, 177, 193, 0.22",
                        }}
                      >
                        <div
                          className="image-container m-2 p-2 d-flex align-items-center justify-content-center"
                          style={{}}
                          data-aos="fade-up"
                          data-aos-delay="500"
                        >
                          <MdOutlineCompassCalibration className="i-cons" />
                        </div>
                      </div>
                      <div className="col-12 col-sm-9">
                        <div className="text-container me-2">
                          <p
                            className="fs-5 p-0 m-0 defheadFont text-danger"
                            data-aos="fade-up"
                            data-aos-delay="600"
                          >
                            Calibration Services
                          </p>
                          <hr
                            style={{
                              borderTop: "2px solid rgba(255,17,67,1)",
                              borderRadius: "4px",
                              opacity: "1",
                              margin: "0.5rem 0",
                            }}
                            data-aos="fade-up"
                            data-aos-delay="10"
                          />
                          <p
                            className="p-0 m-0 defbodyFont text-left"
                            data-aos="fade-up"
                            data-aos-delay="700"
                          >
                            In an industry where accuracy is paramount, our
                            Calibration Services provide reliable, precise
                            calibrations for industrial equipment across energy,
                            mining, and oil & gas sectors.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="main mb-5 pb-2">
                    <div className="row">
                      <div
                        className="col-3 d-none d-sm-flex align-items-center justify-content-center"
                        style={{
                          background: "rgba(255, 177, 193, 0.22",
                        }}
                      >
                        <div
                          className="image-container m-2 p-2 d-flex align-items-center justify-content-center"
                          data-aos="fade-up"
                          data-aos-delay="500"
                        >
                          <AiOutlineExperiment className="i-cons" />
                        </div>
                      </div>
                      <div className="col-12 col-sm-9">
                        <div className="text-container me-2">
                          <p
                            className="fs-5 p-0 m-0 defheadFont text-danger"
                            data-aos="fade-up"
                            data-aos-delay="600"
                          >
                            Additives : Fuel, Lubricants and Greases
                          </p>
                          <hr
                            style={{
                              borderTop: "2px solid rgba(255,17,67,1)",
                              borderRadius: "4px",
                              opacity: "1",
                              margin: "0.5rem 0",
                            }}
                            data-aos="fade-up"
                            data-aos-delay="10"
                          />
                          <p
                            className="p-0 m-0 defbodyFont text-left"
                            data-aos="fade-up"
                            data-aos-delay="700"
                          >
                            VALTEC offers a range of high-quality fuel additives
                            and lubricants designed to enhance equipment
                            performance, reduce emissions, and extend machinery
                            life.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="main mb-5 pb-2">
                    <div className="row">
                      <div
                        className="col-3 d-none d-sm-flex align-items-center justify-content-center"
                        style={{
                          background: "rgba(255, 177, 193, 0.22",
                        }}
                      >
                        <div
                          className="image-container m-2 p-2 d-flex align-items-center justify-content-center"
                          data-aos="fade-up"
                          data-aos-delay="500"
                        >
                          <PiMonitor className="i-cons" />
                        </div>
                      </div>
                      <div className="col-12 col-sm-9">
                        <div className="text-container me-2">
                          <p
                            className="fs-5 p-0 m-0 defheadFont text-danger"
                            data-aos="fade-up"
                            data-aos-delay="600"
                          >
                            Data & Analytics
                          </p>
                          <hr
                            style={{
                              borderTop: "2px solid rgba(255,17,67,1)",
                              borderRadius: "4px",
                              opacity: "1",
                              margin: "0.5rem 0",
                            }}
                            data-aos="fade-up"
                            data-aos-delay="10"
                          />
                          <p className="p-0 m-0 defbodyFont ">
                            We leverage data engineering, advanced analytics and
                            machine learning technology to address a diverse
                            range of client challenges.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="main mb-5 pb-2">
                    <div className="row">
                      <div
                        className="col-3 d-none d-sm-flex align-items-center justify-content-center"
                        style={{
                          background: "rgba(255, 177, 193, 0.22",
                        }}
                      >
                        <div
                          className="image-container m-2 p-2 d-flex align-items-center justify-content-center"
                          data-aos="fade-up"
                          data-aos-delay="700"
                        >
                          <MdOutlineWifiProtectedSetup className="i-cons" />
                        </div>
                      </div>
                      <div className="col-12 col-sm-9">
                        <div className="text-container me-2">
                          <p
                            className="fs-5 p-0 m-0 defheadFont text-danger"
                            data-aos="fade-up"
                            data-aos-delay="800"
                          >
                            Sustainability
                          </p>
                          <hr
                            style={{
                              borderTop: "2px solid rgba(255,17,67,1)",
                              borderRadius: "4px",
                              opacity: "1",
                              margin: "0.5rem 0",
                            }}
                            data-aos="fade-up"
                            data-aos-delay="10"
                          />
                          <p className="p-0 m-0 defbodyFont ">
                            We help you identify risks and build strategies that
                            ensure sustainable, long-term success. Our solutions
                            help you track energy use and reduce emissions for a
                            greener, efficient future.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xs={12} lg={6}>
              <Row className="flex-column">
                <Col>
                  <div className="main mb-5 pb-2">
                    <div className="row">
                      <div
                        className="col-3 d-none d-sm-flex align-items-center justify-content-center"
                        style={{
                          background: "rgba(255, 177, 193, 0.22",
                        }}
                      >
                        <div
                          className="image-container m-2 p-2 d-flex align-items-center justify-content-center"
                          data-aos="fade-up"
                          data-aos-delay="500"
                        >
                          <MdOutlineSolarPower className="i-cons" />
                        </div>
                      </div>
                      <div className="col-12 col-sm-9">
                        <div className="text-container me-2">
                          <p
                            className="fs-5 p-0 m-0 defheadFont text-danger"
                            data-aos="fade-up"
                            data-aos-delay="600"
                          >
                            Renewable Energy
                          </p>
                          <hr
                            style={{
                              borderTop: "2px solid rgba(255,17,67,1)",
                              borderRadius: "4px",
                              opacity: "1",
                              margin: "0.5rem 0",
                            }}
                            data-aos="fade-up"
                            data-aos-delay="10"
                          />
                          <p
                            className="p-0 m-0 defbodyFont text-left"
                            data-aos="fade-up"
                            data-aos-delay="700"
                          >
                            We meet residential, commercial, utility energy
                            demands with high-quality solar photovoltaic modules
                            and reliable battery solutions for our projects.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="main mb-5 pb-2">
                    <div className="row">
                      <div
                        className="col-3 d-none d-sm-flex align-items-center justify-content-center"
                        style={{
                          background: "rgba(255, 177, 193, 0.22",
                        }}
                      >
                        <div
                          className="image-container m-2 p-2 d-flex align-items-center justify-content-center"
                          data-aos="fade-up"
                          data-aos-delay="500"
                        >
                          <MdOutlinePrecisionManufacturing className="i-cons" />
                        </div>
                      </div>
                      <div className="col-12 col-sm-9">
                        <div className="text-container me-2">
                          <p
                            className="fs-5 p-0 m-0 defheadFont text-danger"
                            data-aos="fade-up"
                            data-aos-delay="600"
                          >
                            Infrastructure and Facilities
                          </p>
                          <hr
                            style={{
                              borderTop: "2px solid rgba(255,17,67,1)",
                              borderRadius: "4px",
                              opacity: "1",
                              margin: "0.5rem 0",
                            }}
                            data-aos="fade-up"
                            data-aos-delay="10"
                          />
                          <p
                            className="p-0 m-0 defbodyFont text-left"
                            data-aos="fade-up"
                            data-aos-delay="700"
                          >
                            VALTEC leverages its local expertise and global
                            network to support infrastructure projects, ensuring
                            optimal functionality and safety standards in every
                            project.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="main mb-5 pb-2">
                    <div className="row">
                      <div
                        className="col-3 d-none d-sm-flex align-items-center justify-content-center"
                        style={{
                          background: "rgba(255, 177, 193, 0.22",
                        }}
                      >
                        <div
                          className="image-container m-2 p-2 d-flex align-items-center justify-content-center "
                          data-aos="fade-up"
                          data-aos-delay="500"
                        >
                          <MdOutlineGroup className="i-cons" />
                        </div>
                      </div>
                      <div className="col-12 col-sm-9">
                        <div className="text-container me-2">
                          <p
                            className="fs-5 p-0 m-0 defheadFont text-danger"
                            data-aos="fade-up"
                            data-aos-delay="600"
                          >
                            Public Private Partnerships
                          </p>
                          <hr
                            style={{
                              borderTop: "2px solid rgba(255,17,67,1)",
                              borderRadius: "4px",
                              opacity: "1",
                              margin: "0.5rem 0",
                            }}
                            data-aos="fade-up"
                            data-aos-delay="10"
                          />
                          <p
                            className="p-0 m-0 defbodyFont text-left"
                            data-aos="fade-up"
                            data-aos-delay="700"
                          >
                            Our collaborative approach connects government
                            entities and private enterprises, fostering projects
                            that benefit communities and contribute to
                            sustainable development.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="main mb-5 pb-2">
                    <div className="row">
                      <div
                        className="col-3 d-none d-sm-flex align-items-center justify-content-center"
                        style={{
                          background: "rgba(255, 177, 193, 0.22",
                        }}
                      >
                        <div
                          className="image-container m-2 p-2 d-flex align-items-center justify-content-center "
                          data-aos="fade-up"
                          data-aos-delay="500"
                        >
                          <VscWorkspaceTrusted className="i-cons" />
                        </div>
                      </div>
                      <div className="col-12 col-sm-9">
                        <div className="text-container me-2">
                          <p
                            className="fs-5 p-0 m-0 defheadFont text-danger"
                            data-aos="fade-up"
                            data-aos-delay="600"
                          >
                            Precision & Reliability
                          </p>
                          <hr
                            style={{
                              borderTop: "2px solid rgba(255,17,67,1)",
                              borderRadius: "4px",
                              opacity: "1",
                              margin: "0.5rem 0",
                            }}
                            data-aos="fade-up"
                            data-aos-delay="10"
                          />
                          <p
                            className="p-0 m-0 defbodyFont text-left"
                            data-aos="fade-up"
                            data-aos-delay="700"
                          >
                            Our highly specialized technical team is equipped to
                            identify and resolve operational issues while
                            utilizing various reliability tools and
                            complementary techniques to address every aspect of
                            your maintenance needs.
                          </p>
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
