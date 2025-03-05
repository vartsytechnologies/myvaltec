import { Container } from "react-bootstrap";

function CarouselImage({ sliderImage }) {
  // Function to take in the sliderimage
  return (
    <Container
      fluid
      className="carousel-image-container"
      style={{
        height: "78vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
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
