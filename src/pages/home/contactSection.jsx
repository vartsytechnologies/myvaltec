import { React, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./home.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./homeServices.css";
import { GoHomeFill } from "react-icons/go";
import { LuPhoneCall } from "react-icons/lu";
import { MdEmail } from "react-icons/md";
import { IoSendSharp } from "react-icons/io5";
import emailjs from "@emailjs/browser";
import AnimatedElement from "../../components/motionComponent";

function ContactSection() {
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  // **Phone number validation (country code + 9-11 digits)**
  const phoneRegex = /^\+?[1-9]\d{0,3}\d{9,11}$/;

  const handlePhoneBlur = () => {
    if (!phoneRegex.test(phone)) {
      setPhoneError(
        "Invalid phone number. Include country code [e.g, +233123456789]"
      );
    } else {
      setPhoneError("");
    }
  };

  // **Form submission**
  const sendDetails = (e) => {
    e.preventDefault();
    if (phoneError) {
      return;
    }

    emailjs
      .sendForm(
        process.env.REACT_APP_CONTACT_SERVICE,
        process.env.REACT_APP_CONTACT_TEMP,
        e.target,
        process.env.REACT_APP_CONTACT_PUBK
      )
      .then(
        (result) => {
          setSuccessMessage(
            "Message Sent Successfully. Thank you for contacting VALTEC!"
          );
          setMessageType("success");

          // Wait 4.5 seconds before resetting the form
          setTimeout(() => {
            e.target.reset();
            setPhone("");
            setSuccessMessage(""); // Hide message after reset
            setMessageType("");
          }, 4500);
        },
        (error) => {
          setSuccessMessage(
            "Failed to send the message. Please try again later."
          );
          setMessageType("error");

          // Hide message after 5 seconds
          setTimeout(() => {
            setSuccessMessage("");
            setMessageType("");
          }, 5000);
        }
      );
  };

  return (
    <AnimatedElement as={Container} fluid animation="fade-up" delay={0.4}>
      <Container className="mt-4" style={{ marginBottom: "30px" }}>
        <h1 className="mt-4 text-center defheadFont text-danger">Contact Us</h1>
        <p className="text-center defbodyFont">
          <i>Send us an enquiry. We will gladly respond.</i>
        </p>
        <Row>
          <Col xs={12} lg={5}>
            <Row className="flex-column p-0 gx-0 defbodyFont">
              <Col className="contactForm p-3 mb-sm-2">
                <div className="row">
                  <div className="col-12">
                    <div className="contactParent mt-3">
                      <div className="row">
                        <div
                          className="col-3 col-sm-2 d-flex align-items-center justify-content-center"
                          style={{
                            background: "rgba(255, 177, 193, 0.42)",
                          }}
                        >
                          <GoHomeFill className="icon" />
                        </div>
                        <div className="col-9 col-sm-10">
                          <div className="text ">
                            <h4
                              className="p-0 mt-3"
                              style={{ color: "rgba(255, 17, 67, 1)" }}
                            >
                              Address
                            </h4>
                            <p className="p-0 m-0">
                              Mountain View Community, Pantang West. <br />
                              Accra, Ghana.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-100"></div>
                  <div className="col-12">
                    <div className="contactParent my-2">
                      <div className="row">
                        <div
                          className="col-3 col-sm-2 d-flex align-items-center justify-content-center"
                          style={{
                            background: "rgba(255, 177, 193, 0.42)",
                          }}
                        >
                          <LuPhoneCall className="icon" />
                        </div>
                        <div className="col-9 col-sm-10">
                          <div className="text ">
                            <h4
                              className="p-0 mt-3"
                              style={{ color: "rgba(255, 17, 67, 1)" }}
                            >
                              Call
                            </h4>
                            <p className="p-0 m-0">(+233) 53 404 0014</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="contactParent  mb-3">
                      <div className="row">
                        <div
                          className="col-3 col-sm-2 d-flex align-items-center justify-content-center"
                          style={{
                            background: "rgba(255, 177, 193, 0.42)",
                          }}
                        >
                          <MdEmail className="icon" />
                        </div>
                        <div className="col-9 col-sm-10">
                          <div className="text ">
                            <h4
                              className="p-0 mt-3"
                              style={{ color: "rgba(255, 17, 67, 1)" }}
                            >
                              Email
                            </h4>
                            <p className="p-0 m-0">sales@myvaltec.com</p>
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
            <Row className="flex-column p-0 gx-0 defbodyFont">
              <Col className="contactForm p-3">
                <div className="row">
                  <div className="col-12">
                    <div className="contactParent mt-3 mb-4">
                      <Form autoComplete="off" onSubmit={sendDetails}>
                        <Row className="gx-1">
                          <Form.Group as={Col} md="6" className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                              type="name"
                              placeholder="Enter your name"
                              required
                              name="sender_name"
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
                              name="sender_email"
                            />
                          </Form.Group>
                        </Row>
                        <Row className="gx-1">
                          <Form.Group
                            as={Col}
                            md="6"
                            className="mb-3"
                            controlId="formPhoneNumber"
                          >
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                              type="tel"
                              value={phone}
                              onChange={(e) =>
                                setPhone(e.target.value.replace(/[^0-9+]/g, ""))
                              } // Allow only numbers & '+'
                              onBlur={handlePhoneBlur}
                              placeholder="e.g +233123456789"
                              required
                              name="sender_contact"
                              pattern="^\+?[1-9]\d{9,11}$" // Country code + 9-11 digits
                              title="Enter a valid phone number with country code (e.g., +233123456789)"
                            />
                            {phoneError && (
                              <div
                                className={`text-danger mt-1 ${
                                  phoneError ? "show" : ""
                                }`}
                                style={{ fontSize: ".9em" }}
                              >
                                {phoneError}
                              </div>
                            )}
                          </Form.Group>

                          <Form.Group
                            as={Col}
                            md="6"
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>Institution/Company</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter N/A if not applicable"
                              required
                              name="sender_institution"
                            />
                          </Form.Group>
                        </Row>
                        <Form.Group as={Col} md="12" className="mb-3">
                          <Form.Label>Subject</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter the subject of the mail"
                            required
                            name="subject"
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
                            name="message"
                          />
                        </Form.Group>

                        <div className="d-flex align-items-center justify-content-center">
                          <Button
                            className="bg-danger mt-3 px-5 fs-5 ms-2"
                            variant="danger"
                            type="submit"
                          >
                            Send <IoSendSharp className="" />
                          </Button>
                        </div>
                        <Col className="mt-1 p-t-2">
                          <div className="container d-flex align-items-center justify-content-center">
                            {successMessage && (
                              <div
                                className={`submission-message ${messageType}`}
                              >
                                {successMessage}
                              </div>
                            )}
                          </div>
                        </Col>
                      </Form>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </AnimatedElement>
  );
}

export default ContactSection;
