import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import ProjectSectionItem from "./projectSectionItem";
import DefaultButton from "../../../components/defaultButton";

// Import your images
import aboutImg from '../../../assets/aboutImg.png';

function ProjectSection() {
    return (
        <>
        <Container>
            <Row>
                <Col>
                    <ProjectSectionItem 
                        heading="Project Name 1" 
                        subtext="A brief description about project number 1" 
                        imageSource={aboutImg} 
                    />
                </Col>
                <Col>
                    <ProjectSectionItem 
                        heading="Project Name 2" 
                        subtext="A brief description about project number 2" 
                        imageSource={aboutImg} 
                    />
                </Col>
                <Col>
                    <ProjectSectionItem 
                        heading="Project Name 3" 
                        subtext="A brief description about project number 3" 
                        imageSource={aboutImg} 
                    />
                </Col>
            </Row>
        </Container>
        <p style={{textAlign:'center', marginTop:'0.8rem'}}>
            <DefaultButton name="See More Projects"/>
        </p>
        </>
    );
}

export default ProjectSection;
