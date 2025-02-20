import React from "react";
import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import "./Contacts.css";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import { IoSendSharp } from "react-icons/io5";
import { useState } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const [phone, setPhone] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 650, // Animation duration in milliseconds
      offset: 50, // Trigger animations 50px before an element is in view
    });
  }, []);

  //Form handling
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
          alert("Message Sent Successfully. Thank you for contacting VALTEC!");
          e.target.reset();
          setPhone("");
        },
        (error) => {
          alert("Failed to send the Message. Please try again Later.");
          console.error(error);
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
          <Form.Group as={Col} className="mb-3" controlId="formPhoneNumber">
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
          <Form.Group as={Col} className="mb-3">
            <Form.Label>Name of Company or Institution</Form.Label>
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
    </Form>
  );
}
export default ContactForm;
