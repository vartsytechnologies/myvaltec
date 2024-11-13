//import sliderImage from '../../../assets/slider1.jpg';
import { Container } from 'react-bootstrap';


function CarouselImage({sliderImage}) {
    return (
        <Container fluid className='m-0 p-0' style={{height: '60vh', overflow: 'hidden', backgroundPosition:'center' }}>
        <img src={sliderImage} alt="sliderImage" style={{width: '100%', height:'auto', overflow: 'hidden',  }}/>    
        </Container>
    );
}

export default CarouselImage;
