import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./fromServices.css";

function ContactSection() {
  return (
    <Container fluid>
      <Container style={{ marginBottom: "30px" }}>
        <h2 className="mt-4 text-center">Contact Us</h2>
        <p className="text-center">
          <i>
            Send us your enquiries, Request a quote, etc. Get in touch with us!
          </i>
        </p>
        <Row>
          <Col xs={12} lg={5}>
            <Row className="flex-column p-0 gx-0">
              <Col className="contactForm p-3 mb-sm-2">
                <div className="row">
                  <div className="col-12">
                    <div className="contactParent mt-3">
                      <div className="row">
                        <div
                          className="col col-sm-3 col-md-2 col-lg-2"
                          style={{
                            background: "rgba(255, 177, 193, 0.42)",
                            height: "80px",
                          }}
                        ></div>
                        <div className="col col-sm-8 col-md-10 col-lg-10">
                          <div className="text ">
                            <h4
                              className="p-0 mt-3"
                              style={{ color: "rgba(255, 17, 67, 1)" }}
                            >
                              Address
                            </h4>
                            <p className="p-0 m-0">Kasoa, Accra, Ghana.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="contactParent my-4">
                      <div className="row">
                        <div
                          className="col col-sm-3 col-md-2 col-lg-2"
                          style={{
                            background: "rgba(255, 177, 193, 0.42)",
                            height: "80px",
                          }}
                        ></div>
                        <div className="col col-sm-8 col-md-10 col-lg-10">
                          <div className="text ">
                            <h4
                              className="p-0 mt-3"
                              style={{ color: "rgba(255, 17, 67, 1)" }}
                            >
                              Call Us
                            </h4>
                            <p className="p-0 m-0">+233 550 988 226</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="contactParent  mb-3">
                      <div className="row">
                        <div
                          className="col col-sm-3 col-md-2 col-lg-2"
                          style={{
                            background: "rgba(255, 177, 193, 0.42)",
                            height: "80px",
                          }}
                        ></div>
                        <div className="col col-sm-8 col-md-10 col-lg-10">
                          <div className="text ">
                            <h4
                              className="p-0 mt-3"
                              style={{ color: "rgba(255, 17, 67, 1)" }}
                            >
                              Email Us
                            </h4>
                            <p className="p-0 m-0">vartsytech@gmail.com</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={12} lg={7}>
            <Row className="flex-column p-0 gx-0">
              <Col className="contactForm p-3">
                <div className="row">
                  <div className="col-12">
                    <div className="contactParent mt-3 mb-4">
                      <Form>
                        <Row className="gx-1">
                          <Form.Group as={Col} md="6" className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                              type="name"
                              placeholder="Enter your name"
                              required
                            />
                          </Form.Group>

                          <Form.Group
                            as={Col}
                            md="6"
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                              type="email"
                              placeholder="Enter your email"
                              required
                            />
                          </Form.Group>
                        </Row>
                        <Form.Group as={Col} md="12" className="mb-3">
                          <Form.Label>Subject</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter the subject of the mail here"
                            required
                          />
                        </Form.Group>
                        <Form.Group as={Col} md="12" className="mb-3">
                          <Form.Label>Message</Form.Label>
                          <Form.Control
                            style={{ resize: "none" }}
                            as="textarea"
                            rows={7}
                            placeholder="Write your message here..."
                            required
                          />
                        </Form.Group>

                        <div className="d-flex align-items-center justify-content-center">
                          <Button
                            className="bg-danger mt-3 px-5 fs-5 ms-2"
                            variant="danger"
                            type="submit"
                          >
                            Send
                          </Button>
                        </div>
                      </Form>
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

export default ContactSection;
