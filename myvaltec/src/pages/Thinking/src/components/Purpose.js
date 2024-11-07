
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
//import placeholderImg from './placeholder.jpg';
import CompanyOverview from '../../../../assets/companyOverview.jpg';
import AOS from 'aos';
import {useEffect} from 'react'
import 'aos/dist/aos.css'

function Purpose() {
  useEffect(()=>{
    AOS.init(
      {
        duration: 950, // Animation duration in milliseconds
        offset: 50,     // Trigger animations 50px before an element is in view
      }
    )
  },[])

  return (
    <Container className="my-5">
      <Row>
        <Col md={4}>
          <img src={CompanyOverview} alt="Purpose" className="img-fluid" data-aos='fade-left'/>
        </Col>
        <Col md={8}>
          <h2 className="text-danger" data-aos='fade-up'>Our Purpose</h2>
          <ul>
            <li data-aos='fade-up'>Deliver value through technology.</li>
            <li data-aos='fade-up'>Demonstrate leadership with excellence.</li>
            <li data-aos='fade-up'>Think innovatively while embracing new ideas.</li>
            <li data-aos='fade-up'>Operate ethically and with integrity, prioritizing safety and security.</li>
            <li data-aos='fade-up'>Collaborate with unrivaled expertise to solve complex challenges.</li>
            <li data-aos='fade-up'>Share success with our stakeholders.</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Purpose;
