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
import {useState} from "react"

function ContactForm() {
  const [phone, setPhone] = useState("");
 
  useEffect(() => {
    AOS.init({
      duration: 650, // Animation duration in milliseconds
      offset: 50, // Trigger animations 50px before an element is in view
    });
  }, []);
  return (
    <Form data-aos="fade-up">
      <Row className="py-3">
        <Col xs={12} lg={5}>
          <Form.Group as={Col} className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" placeholder="Enter your name" required />
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              required
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
                  pattern: "^\\+?[1-9][0-9]{7,14}$", // Pattern to support international numbers
                }}
              />
            </div>
          </Form.Group>
        
        </Col>
        <Col xs={12} lg={7}>
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
              Send <IoSendSharp className="" />
            </Button>
          </div>
        </Col>
      </Row>
    </Form>
  );
}
export default ContactForm;
