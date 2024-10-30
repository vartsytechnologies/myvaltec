import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DefaultButton from '../../../components/defaultButton'
import aboutImg from '../../../assets/aboutImg.png';

function AboutSection(){
    return(<>
        <Container>
            <Row className="mt-4 flex-column">
                        <Col className=''><h1>About Us</h1></Col>
                        <Col>
                            <Row className="justify-content-between align-items-start">
                                <Col>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Nunc tempor magna et placerat fringilla. Phasellus nisl orci,
                                imperdiet vitae eros ac, molestie elementum magna. Maecenas dictum,
                                velit quis volutpat cursus, sapien risus hendrerit eros, non congue arcu massa sit amet magna.
                                Cras tristique quam augue. Quisque ac tincidunt ante, eu consequat ligula.
                                Nam sollicitudin leo ut massa consequat, a faucibus risus maximus. Suspendisse velit purus, 
                                facilisis eu magna vitae, fermentum consequat tortor. Pellentesque sodales consequat finibus. 
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor magna et placerat fringilla.
                                Phasellus nisl orci, imperdiet vitae eros ac, molestie elementum magna. Maecenas dictum, velit quis volutpat cursus,
                                sapien risus hendrerit eros, non congue arcu massa sit am
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