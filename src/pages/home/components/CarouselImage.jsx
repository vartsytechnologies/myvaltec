import { Container } from "react-bootstrap";
import "../home.css";

function CarouselImage({ sliderImage }) {
  return (
    <Container fluid className="carousel-image-container">
      <img
        src={sliderImage}
        alt="sliderImage"
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
