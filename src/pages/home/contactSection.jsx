import { React, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PhoneInput } from "react-international-phone";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./homeServices.css";
import { GoHomeFill } from "react-icons/go";
import { LuPhoneCall } from "react-icons/lu";
import { MdEmail } from "react-icons/md";
import { IoSendSharp } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";

function ContactSection() {
  useEffect(() => {
    AOS.init({
      duration: 1050,
      offset: 100,
    });
  }, []);

  //Form handling
  const [phone, setPhone] = useState("");
  const sendDetails = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_CONTACT_SERVICE,
        process.env.REACT_APP_CONTACT_TEMP,
        e.target,
        process.env.REACT_APP_CONTACT_PUBK
      )
      .then(
        (result) => {
          e.target.reset();
          alert("Message Sent Successfully. Thank you for contacting VALTEC!");
        },
        (error) => {
          alert(
            "Failed to send the Message. Please try again Later. You can also contact us through the contact details below."
          );
          console.error(error);
        }
      );
  };

  return (
    <Container fluid data-aos="fade-up" data-aos-delay="400">
      <Container className="mt-4" style={{ marginBottom: "30px" }}>
        <h1 className="mt-4 text-center defheadFont text-danger">Contact Us</h1>
        <p className="text-center defbodyFont">
          <i>Send us an equiry. We will gladly respond.</i>
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
                              Mountain View Community, Pantang West. | Accra,
                              Ghana.
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
                            className="mb-3"
                            controlId="formPhoneNumber"
                          >
                            <Form.Label>Phone Number</Form.Label>
                            <div
                              className="phone-input-container w-100"
                              style={{ border: "1px solid black" }}
                            >
                              <PhoneInput
                                defaultCountry="gh" // Change to desired default country
                                value={phone}
                                onChange={setPhone}
                                inputClassName="field"
                                inputProps={{
                                  required: true,
                                  placeholder: "Enter your phone number",
                                  // pattern: "^\\+?[1-9][0-9]{7,14}$", // Pattern to support international numbers
                                }}
                                name="sender_phone"
                              />
                            </div>
                          </Form.Group>

                          <Form.Group
                            as={Col}
                            md="6"
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>Institution or Company</Form.Label>
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
                            placeholder="Enter the subject of the mail here"
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
