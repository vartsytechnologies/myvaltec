import React from "react";
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
function ServiceSection() {
  return (
    <Container fluid className=" mb-4">
      <Container className="pb-4 mb-4">
        <h1 className="mt-4 text-center">Services</h1>
        <p className="text-center">
          <i>We serve our clients very well in these areas of services</i>
        </p>
        {/* <hr style={{ height: "3px", background: "black", opacity: "1" }} /> */}
        <Row>
          <Col xs={12} lg={6}>
            <Row className="flex-column">
              <Col>
                <div className="main mb-4">
                  <div className="row">
                    <div
                      className="col-3 d-flex align-items-center justify-content-center"
                      style={{
                        background: "rgba(255, 177, 193, 0.42",
                      }}
                    >
                      <div className="image-container m-2 p-2 d-flex align-items-center justify-content-center">
                        <MdOutlineConstruction className="i-cons" />
                      </div>
                    </div>
                    <div className="col-9">
                      <div className="text-container me-2">
                        <p className="fs-5 p-0 m-0">
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
                        <p className="p-0 m-0">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Aspernatur itaque placeat impedit aut obcaecati
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="main mb-4">
                  <div className="row">
                    <div
                      className="col-3 d-flex align-items-center justify-content-center"
                      style={{
                        background: "rgba(255, 177, 193, 0.42",
                      }}
                    >
                      <div
                        className="image-container m-2 p-2 d-flex align-items-center justify-content-center"
                        style={{}}
                      >
                        <MdOutlineCompassCalibration className="i-cons" />
                      </div>
                    </div>
                    <div className="col-9">
                      <div className="text-container me-2">
                        <p className="fs-5 p-0 m-0">Calibration Services</p>
                        <hr
                          style={{
                            borderTop: "2px solid rgba(255,17,67,1)",
                            borderRadius: "4px",
                            opacity: "1",
                            margin: "0.5rem 0",
                          }}
                        />
                        <p className="p-0 m-0">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Aspernatur itaque placeat impedit aut obcaecati
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="main mb-4">
                  <div className="row">
                    <div
                      className="col-3 d-flex align-items-center justify-content-center"
                      style={{
                        background: "rgba(255, 177, 193, 0.42",
                      }}
                    >
                      <div className="image-container m-2 p-2 d-flex align-items-center justify-content-center">
                        <AiOutlineExperiment className="i-cons" />
                      </div>
                    </div>
                    <div className="col-9">
                      <div className="text-container me-2">
                        <p className="fs-5 p-0 m-0">
                          Fuel Additives and Lubricants
                        </p>
                        <hr
                          style={{
                            borderTop: "2px solid rgba(255,17,67,1)",
                            borderRadius: "4px",
                            opacity: "1",
                            margin: "0.5rem 0",
                          }}
                        />
                        <p className="p-0 m-0">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Aspernatur itaque placeat impedit aut obcaecati
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="main mb-4">
                  <div className="row">
                    <div
                      className="col-3 d-flex align-items-center justify-content-center"
                      style={{
                        background: "rgba(255, 177, 193, 0.42",
                      }}
                    >
                      <div className="image-container m-2 p-2 d-flex align-items-center justify-content-center">
                        <PiMonitor className="i-cons" />
                      </div>
                    </div>
                    <div className="col-9">
                      <div className="text-container me-2">
                        <p className="fs-5 p-0 m-0">
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
                        <p className="p-0 m-0">
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
                <div className="main mb-4">
                  <div className="row">
                    <div
                      className="col-3 d-flex align-items-center justify-content-center"
                      style={{
                        background: "rgba(255, 177, 193, 0.42",
                      }}
                    >
                      <div className="image-container m-2 p-2 d-flex align-items-center justify-content-center">
                        <MdOutlineSolarPower className="i-cons" />
                      </div>
                    </div>
                    <div className="col-9">
                      <div className="text-container me-2">
                        <p className="fs-5 p-0 m-0">Renewable Energy</p>
                        <hr
                          style={{
                            borderTop: "2px solid rgba(255,17,67,1)",
                            borderRadius: "4px",
                            opacity: "1",
                            margin: "0.5rem 0",
                          }}
                        />
                        <p className="p-0 m-0">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Aspernatur itaque placeat impedit aut obcaecati
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="main mb-4">
                  <div className="row">
                    <div
                      className="col-3 d-flex align-items-center justify-content-center"
                      style={{
                        background: "rgba(255, 177, 193, 0.42",
                      }}
                    >
                      <div className="image-container m-2 p-2 d-flex align-items-center justify-content-center">
                        <MdOutlinePrecisionManufacturing className="i-cons" />
                      </div>
                    </div>
                    <div className="col-9">
                      <div className="text-container me-2">
                        <p className="fs-5 p-0 m-0">
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
                        <p className="p-0 m-0">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Aspernatur itaque placeat impedit aut obcaecati
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="main mb-4">
                  <div className="row">
                    <div
                      className="col-3 d-flex align-items-center justify-content-center"
                      style={{
                        background: "rgba(255, 177, 193, 0.42",
                      }}
                    >
                      <div className="image-container m-2 p-2 d-flex align-items-center justify-content-center">
                        <MdOutlineGroup className="i-cons" />
                      </div>
                    </div>
                    <div className="col-9">
                      <div className="text-container me-2">
                        <p className="fs-5 p-0 m-0">
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
                        <p className="p-0 m-0">
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
