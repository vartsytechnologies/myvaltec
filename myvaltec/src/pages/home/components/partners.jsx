import { React, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Image from "react-bootstrap/Image";
import kin_r from "../../../assets/partnerIcons/kin_r.png";
import agamine_r from "../../../assets/partnerIcons/agamine_r.png";
import fulltrades_r from "../../../assets/partnerIcons/fulltrades_r.png";
import kimray_r from "../../../assets/partnerIcons/kimray_r.png";
import micin_r from "../../../assets/partnerIcons/micin_r.png";
import pana_r from "../../../assets/partnerIcons/pana_r.png";
import russ_r from "../../../assets/partnerIcons/russ_r.png";
import druck_r from "../../../assets/partnerIcons/druck_r.png";
import cans_r from "../../../assets/partnerIcons/cans_r.png";
import huawei_e from "../../../assets/partnerIcons/huawei_e.png";
import fuelox from "../../../assets/partnerIcons/fuelox.png"
// import druck_r from "../../../assets/partnerIcons/druck_r.png";
import AOS from "aos";
import "aos/dist/aos.css";

const partners = [kin_r, agamine_r, fulltrades_r, kimray_r, micin_r, pana_r, russ_r, druck_r, cans_r, huawei_e,, fuelox]

function Partners() {
  useEffect(() => {
    AOS.init({
      duration: 1050,
      offset: 100,
    });
  }, []);
  return (
      <Container  fluid style={{backgroundColor:"rgba(255, 177, 193, 0.6"}}>
        <Container className="mb-5 pb-3">
        <h1 className="text-center pb-0 pt-5 mt-1 defheadFont">Our Partners</h1>
        <Row className="align-items-around justify-content-center mt-0 pt-0 pb-5 mb-5" >
            {partners.map((partner, index)=>(
                (<Col xs={6} sm={4} md={3} className="align-self-center justify-content-center my-0 py-0">
                    <img src={partner} alt="valtec partner" style={{width:'75%'}} />
                </Col>)
            ))}
        </Row>
        </Container>
      </Container>
  );
}
export default Partners;
