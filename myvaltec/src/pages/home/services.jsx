import {React, useEffect} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./homeServices.css";
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


function ServiceSection() {
  useEffect(() => {
    AOS.init({
      duration: 1050, // Animation duration in milliseconds
      offset: 50, // Trigger animations 50px before an element is in view
    });
  }, []);
  return (
    <Container fluid className="defPb">
      <Container className="pb-4 mb-4">
        <h1 className="mt-4 text-center text-danger defheadFont" data-aos="fade-up">Services</h1>
        <p className="text-center defbodyFont defPb" data-aos="fade-up" data-aos-delay="400">
          <i>We serve our clients very well in these areas of services</i>
        </p>
        {/* <hr style={{ height: "3px", background: "black", opacity: "1" }} /> */}
        <Row>
          <Col xs={12} lg={6}>
            <Row className="flex-column">
              <Col>
                <div className="main mb-5 pb-2">
                  <div className="row">
                    <div
                      className="col-3 d-flex align-items-center justify-content-center"
                      style={{
                        background: "rgba(255, 177, 193, 0.22",
                      }}
                    >
                      <div className="image-container m-2 p-2 d-flex align-items-center justify-content-center" data-aos="fade-up" data-aos-delay="500">
                        <MdOutlineConstruction className="i-cons" />
                      </div>
                    </div>
                    <div className="col-9">
                      <div className="text-container me-2">
                        <h3 className="fs-5 p-0 m-0 defheadFont text-danger" data-aos="fade-up" data-aos-delay="600">
                          Engineering, Procument and Construction
                        </h3>
                        <hr
                          style={{
                            borderTop: "2px solid rgba(255,17,67,1)",
                            borderRadius: "4px",
                            opacity: "1",
                            margin: "0.5rem 0",
                          }} data-aos="fade-left" data-aos-delay="10"
                        />
                        <p className="p-0 m-0 defbodyFont" data-aos="fade-up" data-aos-delay="700">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Aspernatur itaque placeat impedit aut obcaecati
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
                      className="col-3 d-flex align-items-center justify-content-center"
                      style={{
                        background: "rgba(255, 177, 193, 0.22",
                      }}
                    >
                      <div
                        className="image-container m-2 p-2 d-flex align-items-center justify-content-center"
                        style={{}} data-aos="fade-up" data-aos-delay="500">
                        <MdOutlineCompassCalibration className="i-cons" />
                      </div>
                    </div>
                    <div className="col-9">
                      <div className="text-container me-2">
                        <p className="fs-5 p-0 m-0 defheadFont text-danger" data-aos="fade-up" data-aos-delay="600">Calibration Services</p>
                        <hr
                          style={{
                            borderTop: "2px solid rgba(255,17,67,1)",
                            borderRadius: "4px",
                            opacity: "1",
                            margin: "0.5rem 0",
                          }} data-aos="fade-up" data-aos-delay="10"
                        />
                        <p className="p-0 m-0 defbodyFont" data-aos="fade-up" data-aos-delay="700">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Aspernatur itaque placeat impedit aut obcaecati
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
                      className="col-3 d-flex align-items-center justify-content-center"
                      style={{
                        background: "rgba(255, 177, 193, 0.22",
                      }}
                    >
                      <div className="image-container m-2 p-2 d-flex align-items-center justify-content-center" data-aos="fade-up" data-aos-delay="500">
                        <AiOutlineExperiment className="i-cons" />
                      </div>
                    </div>
                    <div className="col-9">
                      <div className="text-container me-2">
                        <p className="fs-5 p-0 m-0 defheadFont text-danger" data-aos="fade-up" data-aos-delay="600"> 
                          Fuel Additives and Lubricants
                        </p>
                        <hr
                          style={{
                            borderTop: "2px solid rgba(255,17,67,1)",
                            borderRadius: "4px",
                            opacity: "1",
                            margin: "0.5rem 0",
                          }} data-aos="fade-up" data-aos-delay="10"
                        />
                        <p className="p-0 m-0 defbodyFont" data-aos="fade-up" data-aos-delay="700">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Aspernatur itaque placeat impedit aut obcaecati
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
                      className="col-3 d-flex align-items-center justify-content-center"
                      style={{
                        background: "rgba(255, 177, 193, 0.22",
                      }}
                    >
                      <div className="image-container m-2 p-2 d-flex align-items-center justify-content-center" data-aos="fade-up" data-aos-delay="500">
                        <PiMonitor className="i-cons" />
                      </div>
                    </div>
                    <div className="col-9">
                      <div className="text-container me-2">
                        <p className="fs-5 p-0 m-0 defheadFont text-danger" data-aos="fade-up" data-aos-delay="600">
                          Digital Solutions, IT and Cybersecurity
                        </p>
                        <hr
                          style={{
                            borderTop: "2px solid rgba(255,17,67,1)",
                            borderRadius: "4px",
                            opacity: "1",
                            margin: "0.5rem 0",
                          }} data-aos="fade-up" data-aos-delay="10"
                        />
                        <p className="p-0 m-0 defbodyFont">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Aspernatur itaque placeat impedit aut obcaecati
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
                      className="col-3 d-flex align-items-center justify-content-center"
                      style={{
                        background: "rgba(255, 177, 193, 0.22",
                      }}
                    >
                      <div className="image-container m-2 p-2 d-flex align-items-center justify-content-center" data-aos="fade-up" data-aos-delay="500">
                        <MdOutlineSolarPower className="i-cons" />
                      </div>
                    </div>
                    <div className="col-9">
                      <div className="text-container me-2">
                        <p className="fs-5 p-0 m-0 defheadFont text-danger" data-aos="fade-up" data-aos-delay="600">Renewable Energy</p>
                        <hr
                          style={{
                            borderTop: "2px solid rgba(255,17,67,1)",
                            borderRadius: "4px",
                            opacity: "1",
                            margin: "0.5rem 0",
                          }} data-aos="fade-up" data-aos-delay="10"
                        />
                        <p className="p-0 m-0 defbodyFont" data-aos="fade-up" data-aos-delay="700">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Aspernatur itaque placeat impedit aut obcaecati
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
                      className="col-3 d-flex align-items-center justify-content-center"
                      style={{
                        background: "rgba(255, 177, 193, 0.22",
                      }}
                    >
                      <div className="image-container m-2 p-2 d-flex align-items-center justify-content-center" data-aos="fade-up" data-aos-delay="500">
                        <MdOutlinePrecisionManufacturing className="i-cons" />
                      </div>
                    </div>
                    <div className="col-9">
                      <div className="text-container me-2">
                        <p className="fs-5 p-0 m-0 defheadFont text-danger" data-aos="fade-up" data-aos-delay="600">
                          Infrastructure and Facilities
                        </p>
                        <hr
                          style={{
                            borderTop: "2px solid rgba(255,17,67,1)",
                            borderRadius: "4px",
                            opacity: "1",
                            margin: "0.5rem 0",
                          }} data-aos="fade-up" data-aos-delay="10"
                        />
                        <p className="p-0 m-0 defbodyFont" data-aos="fade-up" data-aos-delay="700">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Aspernatur itaque placeat impedit aut obcaecati
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
                      className="col-3 d-flex align-items-center justify-content-center"
                      style={{
                        background: "rgba(255, 177, 193, 0.22",
                      }}
                    >
                      <div className="image-container m-2 p-2 d-flex align-items-center justify-content-center " data-aos="fade-up" data-aos-delay="500">
                        <MdOutlineGroup className="i-cons" />
                      </div>
                    </div>
                    <div className="col-9">
                      <div className="text-container me-2">
                        <p className="fs-5 p-0 m-0 defheadFont text-danger" data-aos="fade-up" data-aos-delay="600">
                          Public Private Partnerships
                        </p>
                        <hr
                          style={{
                            borderTop: "2px solid rgba(255,17,67,1)",
                            borderRadius: "4px",
                            opacity: "1",
                            margin: "0.5rem 0",
                          }} data-aos="fade-up" data-aos-delay="10"
                        />
                        <p className="p-0 m-0 defbodyFont" data-aos="fade-up" data-aos-delay="700">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Aspernatur itaque placeat impedit aut obcaecati
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
  );
}

export default ServiceSection;
