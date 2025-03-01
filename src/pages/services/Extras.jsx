// import NavBar from "../../components/navbar/navbar_updated";
import { useParams } from "react-router-dom";
import Banner from "../../components/banner/Banner";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { serviceItems } from "./actualServices.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

const ServiceDetails = () => {
  const { slug } = useParams();
  const service = serviceItems.find((s) => s.slug === slug);

  useEffect(() => {
    AOS.init({
      duration: 900,
      offset: 200,
    });
  }, []);

  return (
    <>
      <Container fluid>
        <Banner title={service.name} />
        <Container className="py-3 mt-5 text-justify">
          <div>
            {service.name !== "Sustainability" &&
              service.name !== "Additives : Fuel, Lubricants and Greases" &&
              service.name !== "Data & Analytics" && (
                <p className="defbodyFont" data-aos="fade-down">
                  {service.description}
                </p>
              )}
            <div className="defbodyFont" data-aos="fade-down">
              {service.detailedContent}
            </div>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default ServiceDetails;
