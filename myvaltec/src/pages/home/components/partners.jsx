import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
// import sliderImage from '../../../assets/slider1.png';

function Partners() {
  return (
    <>
      <Container
        className="my-5"
        fluid
        style={{ backgroundColor: "rgba(255, 177, 193, 0.6" }}
      >
        <h1 className="text-center py-4">Our Partners</h1>
        <Row>
          <Col xs={12} lg={6} style={{ border: "1px solid red" }}>
            <div className="row">
              <div className="col-3">
                <div
                  className="logo-wrapper d-flex align-items-center justify-content-center flex-column "
                  style={{ height: "200px" }}
                >
                  <Image src="../" rounded />
                  <div className="hover-text">Your Hover Text</div>
                </div>
              </div>
              <div className="col-3">
                <div
                  className="logo-wrapper d-flex align-items-center justify-content-center flex-column "
                  style={{ height: "200px" }}
                >
                  <img
                    src="https://via.placeholder.com/100"
                    alt="Logo"
                    className="logo fluid"
                  />
                  <div className="hover-text">Your Hover Text</div>
                </div>
              </div>
              <div className="col-3">
                <div
                  className="logo-wrapper d-flex align-items-center justify-content-center flex-column "
                  style={{ height: "200px" }}
                >
                  <img
                    src="https://via.placeholder.com/100"
                    alt="Logo"
                    className="logo fluid"
                  />
                  <div className="hover-text">Your Hover Text</div>
                </div>
              </div>
              <div className="col-3">
                <div
                  className="logo-wrapper d-flex align-items-center justify-content-center flex-column "
                  style={{ height: "200px" }}
                >
                  <img
                    src="https://via.placeholder.com/100"
                    alt="Logo"
                    className="logo fluid"
                  />
                  <div className="hover-text">Your Hover Text</div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} lg={6} style={{ border: "1px solid red" }}>
            <div className="row">
              <div className="col-3">
                <div
                  className="logo-wrapper d-flex align-items-center justify-content-center flex-column "
                  style={{ height: "200px" }}
                >
                  <img
                    src="https://via.placeholder.com/100"
                    alt="Logo"
                    className="logo fluid"
                  />
                  <div className="hover-text">Your Hover Text</div>
                </div>
              </div>
              <div className="col-3">
                <div
                  className="logo-wrapper d-flex align-items-center justify-content-center flex-column "
                  style={{ height: "200px" }}
                >
                  <img
                    src="https://via.placeholder.com/100"
                    alt="Logo"
                    className="logo fluid"
                  />
                  <div className="hover-text">Your Hover Text</div>
                </div>
              </div>
              <div className="col-3">
                <div
                  className="logo-wrapper d-flex align-items-center justify-content-center flex-column "
                  style={{ height: "200px" }}
                >
                  <img
                    src="https://via.placeholder.com/100"
                    alt="Logo"
                    className="logo fluid"
                  />
                  <div className="hover-text">Your Hover Text</div>
                </div>
              </div>
              <div className="col-3">
                <div
                  className="logo-wrapper d-flex align-items-center justify-content-center flex-column "
                  style={{ height: "200px" }}
                >
                  <img
                    src="https://via.placeholder.com/100"
                    alt="Logo"
                    className="logo fluid"
                  />
                  <div className="hover-text">Your Hover Text</div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Partners;
