import { React, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Image from "react-bootstrap/Image";
import kin_r from "../../../assets/partnerIcons/kin_r.png";
import ecos_r from "../../../assets/partnerIcons/ecos_r.png";
import fulltrades_r from "../../../assets/partnerIcons/fulltrades_r.png";
import kimray_r from "../../../assets/partnerIcons/kimray_r.png";
import micin_r from "../../../assets/partnerIcons/micin_r.png";
import pana_r from "../../../assets/partnerIcons/pana_r.png";
import russ_r from "../../../assets/partnerIcons/russ_r.png";
import druck_r from "../../../assets/partnerIcons/druck_r.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Partners() {
  useEffect(() => {
    AOS.init({
      duration: 1050,
      offset: 100,
    });
  }, []);
  return (
    <>
      <Container
        className="my-5"
        fluid
        style={{ backgroundColor: "rgba(255, 177, 193, 0.6" }}
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <h1 className="text-center pt-4 defheadFont">Our Partners</h1>
        <Row>
          <Col
            xs={12}
            lg={6}
          >
            <div className="row my-4">
              <div className="col-3">
                <div
                  className="logo-wrapper d-flex align-items-center justify-content-center flex-column "
                  style={{ height: "100px" }}
                >
                  <img
                    src={kin_r}
                    alt="Logo"
                    className="logo fluid"
                  />
                  <div className="hover-text d-none">Your Hover Text</div>
                </div>
              </div>
              <div className="col-3">
                <div
                  className="logo-wrapper d-flex align-items-center justify-content-center flex-column "
                  style={{ height: "100px" }}
                >
                  <img
                    src={ecos_r}
                    alt="Logo"
                    className="logo fluid"
                  />
                  <div className="hover-text d-none">Your Hover Text</div>
                </div>
              </div>
              <div className="col-3">
                <div
                  className="logo-wrapper d-flex align-items-center justify-content-center flex-column "
                  style={{ height: "100px" }}
                >
                  <img
                    src={fulltrades_r}
                    alt="Logo"
                    className="logo fluid"
                  />
                  <div className="hover-text d-none">Your Hover Text</div>
                </div>
              </div>
              <div className="col-3">
                <div
                  className="logo-wrapper d-flex align-items-center justify-content-center flex-column "
                  style={{ height: "100px" }}
                >
                  <img
                    src={kimray_r}
                    alt="Logo"
                    className="logo fluid"
                  />
                  <div className="hover-text d-none">Your Hover Text</div>
                </div>
              </div>
            </div>
          </Col>
          <Col
            xs={12}
            lg={6}
          >
            <div className="row my-4">
              <div className="col-3">
                <div
                  className="logo-wrapper d-flex align-items-center justify-content-center flex-column "
                  style={{ height: "100px" }}
                >
                  <img
                    src={micin_r}
                    alt="Logo"
                    className="logo fluid"
                  />
                  <div className="hover-text d-none">Your Hover Text</div>
                </div>
              </div>
              <div className="col-3">
                <div
                  className="logo-wrapper d-flex align-items-center justify-content-center flex-column "
                  style={{ height: "100px" }}
                >
                  <img
                    src={pana_r}
                    alt="Logo"
                    className="logo fluid"
                  />
                  <div className="hover-text d-none">Your Hover Text</div>
                </div>
              </div>
              <div className="col-3">
                <div
                  className="logo-wrapper d-flex align-items-center justify-content-center flex-column "
                  style={{ height: "100px" }}
                >
                  <img
                    src={russ_r}
                    alt="Logo"
                    className="logo fluid"
                  />
                  <div className="hover-text d-none">Your Hover Text</div>
                </div>
              </div>
              <div className="col-3">
                <div
                  className="logo-wrapper d-flex align-items-center justify-content-center flex-column "
                  style={{ height: "100px" }}
                >
                  <img
                    src={druck_r}
                    alt="Logo"
                    className="logo fluid"
                  />
                  <div className="hover-text d-none">Your Hover Text</div>
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
