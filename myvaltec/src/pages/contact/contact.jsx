import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Banner from "../../components/banner/Banner";
import { GoHomeFill } from "react-icons/go";
import { LuPhoneCall } from "react-icons/lu";
import { MdEmail } from "react-icons/md";
import ContactForm from "./components/form";
import Map from "./components/Map";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

export default function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 550, // Animation duration in milliseconds
      offset: 50, // Trigger animations 50px before an element is in view
    });
  }, []);
  return (
    <>
      <Banner title="How can we help ?" />
      <Container fluid>
        <Container className="pt-5 defbodyFont">
          <Row data-aos="fade-up">
            <Col xs={12} lg={6}>
              <div
                className="div google-map w-100 d-flex align-items-center justify-content-center"
                style={{ height: "410px" }}
              >
                {/* <h1>Google Map API here</h1>
                 */}
                <Map />
              </div>
            </Col>
            <Col xs={12} lg={6}>
              <div className="row">
                <div className="col-12">
                  <div className="row mt-2">
                    <div className="col-1">
                      <GoHomeFill className="icon" />
                    </div>
                    <div className="col-11">
                      <p className="pt-2">
                        <b>
                          <span style={{ color: "rgba(255, 17, 67, 1)" }}>
                            Office Address
                            <br />
                            VALTEC Limited
                          </span>
                        </b>
                        <br />
                        Mountain View Community, Pantang West.
                        <br /> Accra, Ghana.
                      </p>
                    </div>
                    <hr
                      className="mb-0"
                      style={{ color: "rgba(255, 17, 67, 1)", opacity: "1" }}
                    />
                  </div>
                </div>
                <div className="w-100"></div>
                <div className="col-12">
                  <div className="row mt-2">
                    <div className="col-1">
                      <LuPhoneCall className="icon" />
                    </div>
                    <div className="col-11">
                      <p>
                        <b>
                          <span style={{ color: "rgba(255, 17, 67, 1)" }}>
                            Call
                          </span>
                        </b>
                        <br />
                        (+233) 53 404 0014
                      </p>
                    </div>
                    <hr
                      className="mb-0"
                      style={{
                        color: "rgba(255, 17, 67, 1)",
                        opacity: "1",
                      }}
                    />
                  </div>
                </div>
                <div className="w-100"></div>
                <div className="col-12">
                  <div className="row">
                    <div className="col-1">
                      <MdEmail className="icon" />
                    </div>
                    <div className="col-11">
                      <p>
                        <b>
                          <span style={{ color: "rgba(255, 17, 67, 1)" }}>
                            Email
                          </span>
                        </b>
                        <br />
                        sales@myvaltec.com
                      </p>
                      <p>
                        <b>
                          <span style={{ color: "rgba(255, 17, 67, 1)" }}>
                            Postal Address
                          </span>
                        </b>
                        <br />
                        P.O Box AN 5733, Accra North, Accra, Ghana.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <h1
            data-aos="fade-up"
            className="pt-5 mt-2 text-center defheadFont"
            style={{ color: "rgba(255, 17, 67, 1)" }}
          >
            Make an enquiry
          </h1>
          <p className="text-center" data-aos="fade-up">
            <i>Send us your message and we will gladly respond!</i>
          </p>

          <ContactForm data-aos="fade-up" />
        </Container>
      </Container>
    </>
  );
}
