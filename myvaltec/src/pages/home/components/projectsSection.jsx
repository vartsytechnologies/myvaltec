import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import ProjectSectionItem from "./projectSectionItem";
import DefaultButton from "../../../components/defaultButton";
import { FaTools, } from 'react-icons/fa';

// Import your images
import aboutImg from '../../../assets/aboutImg.png';

function ProjectSection() {
    return (
        <>
        <Container className="mt-5">
        <h2 className='text-center mb-5'><FaTools /> Projects</h2>
            <Row>
                <Col  xs={12} md={6} lg={4}>
                    <ProjectSectionItem 
                        heading="Project Name 1" 
                        subtext="A brief description about project number 1" 
                        imageSource={aboutImg} 
                    />
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <ProjectSectionItem 
                        heading="Project Name 2" 
                        subtext="A brief description about project number 2" 
                        imageSource={aboutImg} 
                    />
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <ProjectSectionItem 
                        heading="Project Name 3" 
                        subtext="A brief description about project number 3" 
                        imageSource={aboutImg} 
                    />
                </Col>
            </Row>
        </Container>
        <p style={{textAlign:'center', marginTop:'0.8rem'}}>
            <DefaultButton name="See More Projects" variant = "danger"/>
        </p>
        </>
    );
}

export default ProjectSection;
