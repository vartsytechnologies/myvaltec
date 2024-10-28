import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DefaultButton from '../../../components/defaultButton'
import aboutImg from '../../../assets/aboutImg.png';

function AboutSection(){
    return(<>
        <Container>
            <Row className="mt-2">
                <Col xs={12} lg={7}>
                    <Row className='flex-column'>
                        <Col className='mb-2'><b>About Us</b></Col>
                        <Row>
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
                        </Col>
                        <Col xs={12} lg={3}>
                            <img src={aboutImg} alt='about-valtec'/>
                        </Col>
                        </Row>
                        <Col><DefaultButton name ="Read More"/></Col>
                    </Row>
                </Col>
            </Row>
        </Container>
        </>
    )
}
export default AboutSection