import { useParams } from "react-router-dom";
import Banner from "../../components/banner/Banner";
import { Container } from "react-bootstrap";
import { serviceItems } from "./actualServices.jsx";
import AnimatedElement from "../../components/motionComponent";

const ServiceDetails = () => {
  const { slug } = useParams();
  const service = serviceItems.find((s) => s.slug === slug);

  return (
    <>
      <Container fluid>
        <Banner title={service.name} />
        <Container className="py-3 mt-5 text-justify">
          <div>
            {service.name !== "Sustainability" &&
              service.name !== "Additives : Fuel, Lubricants & Greases" &&
              service.name !== "Data & Analytics" && (
                <AnimatedElement
                  as="p"
                  className="defbodyFont"
                  animation="fade-up"
                >
                  {service.description}
                </AnimatedElement>
              )}
            <AnimatedElement
              as="div"
              className="defbodyFont"
              animation="fade-down"
            >
              {service.detailedContent}
            </AnimatedElement>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default ServiceDetails;
