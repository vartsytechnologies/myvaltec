import { useParams } from "react-router-dom";
import Banner from "../../components/banner/Banner";
import { Container, Row, Col, Modal, Button, Carousel } from "react-bootstrap";
import { serviceItems } from "./actualServices.jsx"; // Import serviceItems

const ServiceDetails = () => {
  const { slug } = useParams();
  const service = serviceItems.find((s) => s.slug === slug);

  if (!service) {
    return <h2>Service not found</h2>;
  }

  return (
    <>
      <Container fluid>
        <Banner title={service.name} />
        <Container className="py-3 mt-5 text-justify">
          <div>
            {/* <img src={service.initialImage} alt={service.name} /> */}
            <p className="defbodyFont">{service.description}</p>
            <div>{service.detailedContent}</div>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default ServiceDetails;
