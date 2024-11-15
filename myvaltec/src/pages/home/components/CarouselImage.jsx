//import sliderImage from '../../../assets/slider1.jpg';
import { Container } from "react-bootstrap";

function CarouselImage({ sliderImage }) {
  return (
    // <Container fluid className='m-0 p-0' style={{height: '60vh', overflow: 'hidden', backgroundPosition:'center' }}>
    <Container
      fluid
      className="carousel-image-container"
      style={{
        height: "65vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src={sliderImage}
        alt="sliderImage"
        // style={{ width: "100%", height: "auto", overflow: "hidden" }}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </Container>
  );
}

export default CarouselImage;
