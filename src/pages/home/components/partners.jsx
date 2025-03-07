import { React, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import agamine_r from "../../../assets/partnerIcons/agamine_r.png";
import cans_r from "../../../assets/partnerIcons/cans_r.png";
import huawei_e from "../../../assets/partnerIcons/huawei_e.png";
import fuelox from "../../../assets/partnerIcons/fuelox.png";
import AOS from "aos";
import "../home.css";
import "aos/dist/aos.css";

const partners = [
  [fuelox, "https://www.fuelox.com"],
  [agamine_r, "https://www.agaminesolar.com"],
  [cans_r, "https://www.canadiansolar.com"],
  [huawei_e, "https://www.huawei.com"],
];

function Partners() {
  useEffect(() => {
    AOS.init({
      duration: 1050,
      offset: 100,
    });
  }, []);
  return (
    <Container fluid style={{ backgroundColor: "rgba(255, 177, 193, 0.6" }}>
      <Container className="mb-5 pb-3">
        <h1 className="text-center pb-0 pt-5 mt-1 defheadFont">Our Partners</h1>
        <Row className="mt-4 align-items-around justify-content-center mt-0 pt-0 pt-1 mb-5">
          {partners.map((partner, index) => (
            <Col
              xs={6}
              sm={4}
              md={3}
              className="d-flex align-self-center justify-content-center my-0 py-0"
            >
              <a href={`${partner[1]}`} target="blank">
                <img
                  src={partner[0]}
                  className="img-partner"
                  alt="valtec partner"
                  style={{ width: "85%" }}
                />
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}
export default Partners;
