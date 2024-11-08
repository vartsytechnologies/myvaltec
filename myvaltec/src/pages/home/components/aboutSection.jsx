import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DefaultButton from '../../../components/defaultButton'
import aboutImg from '../../../assets/aboutImg.png';

function AboutSection(){
    return(<>
        <Container className="pb-4">
            <Row className="mt-4 flex-column">
                        <Col className=''><h1>About Us</h1></Col>
                        <Col>
                            <Row className="justify-content-between align-items-start">
                                <Col className='ps-0'>Valtec Limited, established in August 2015, is a Ghanaian
                                        indigenous support service company that stands out in its
                                        commitment to providing value through technology to EPC
                                        projects, existing plants, and contractors in the energy, mining, oil, and gas industries. Valtec’s unique blend of
                                        locally available expertise and a globalized affiliated
                                        support network ensures specialized precision, real-time
                                        speed, and reliable services to EPC projects and operations
                                        in West Africa.
                                <p className="mt-4"><DefaultButton name ="Read More" variant = "danger" /></p>
                                </Col>
                                <Col xs={12} lg={6} className='zoom-out-container'>
                                    <img src={aboutImg} alt='about-valtec'className='w-100'/>
                                </Col>
                            </Row>
                        </Col>
            </Row>
        </Container>
        </>
    )
}
export default AboutSection