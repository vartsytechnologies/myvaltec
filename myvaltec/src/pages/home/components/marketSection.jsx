import Card from 'react-bootstrap/Card';
import oilAndGasMarketImg from '../../../assets/oilAndGasMarket.png'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

function MarketSection() {
  return (
    <Container fluid className='mt-5 mb-5 p-5 marketSection'>
        <Row className='ps-5 pe-5'>
            <Col>
                <Card className="bg-dark text-white">
                    <Card.Img src={oilAndGasMarketImg} alt="Oil and Gas Market" />
                    <Card.ImgOverlay>
                        <Card.Title>Oil and Gas Infrastructure</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </Col>
            <Col>
            <Card className="bg-dark text-white">
                    <Card.Img src={oilAndGasMarketImg} alt="Oil and Gas Market" />
                    <Card.ImgOverlay>
                        <Card.Title>Oil and Gas Infrastructure</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </Col>
        </Row>
    </Container>
  );
}

export default MarketSection;