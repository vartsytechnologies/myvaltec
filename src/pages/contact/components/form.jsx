import React from "react";
import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Contacts.css";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import { IoSendSharp } from "react-icons/io5";
import { useState } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // "success

  useEffect(() => {
    AOS.init({
      duration: 650,
      offset: 50,
    });
  }, []);

  // Phone number validation (country code + 9-11 digits)
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

  // Form handling
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
    <Form data-aos="fade-up" autoComplete="off" onSubmit={sendDetails}>
      <Row className="py-3">
        <Col xs={12} lg={5}>
          <Form.Group as={Col} className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter your name"
              required
              name="sender_name"
            />
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              required
              name="sender_email"
            />
          </Form.Group>
          <Form.Group
            as={Col}
            md="12"
            className="mb-3"
            controlId="formPhoneNumber"
          >
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/[^0-9+]/g, ""))} // Allow only numbers & '+'
              onBlur={handlePhoneBlur}
              placeholder="e.g +233123456789"
              required
              name="sender_contact"
              pattern="^\+?[1-9]\d{9,11}$" // Country code + 9-11 digits
              title="Enter a valid phone number with country code (e.g., +233123456789)"
            />
            {phoneError && (
              <div
                className={`text-danger mt-1 ${phoneError ? "show" : ""}`}
                style={{ fontSize: ".9em" }}
              >
                {phoneError}
              </div>
            )}
          </Form.Group>

          <Form.Group as={Col} className="mb-3">
            <Form.Label>Name of Company/Institution</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter N/A if not applicable"
              required
              name="sender_institution"
            />
          </Form.Group>
        </Col>
        <Col xs={12} lg={7}>
          <Form.Group as={Col} md="12" className="mb-3">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your location here"
              required
              name="sender_location"
            />
          </Form.Group>
          <Form.Group as={Col} md="12" className="mb-3">
            <Form.Label>Subject</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the subject here"
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
        </Col>
      </Row>
      <Col className="mt-1 p-t-2">
        <div className="container  d-flex align-items-center justify-content-center">
          {successMessage && (
            <div className={`submission-message ${messageType}`}>
              {successMessage}
            </div>
          )}
        </div>
      </Col>
    </Form>
  );
}
export default ContactForm;
