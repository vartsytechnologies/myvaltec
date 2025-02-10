import { React } from "react";
import Banner from "../../../components/banner/Banner";
import CompanyOverview from "./components/CompanyOverview";
import Purpose from "./components/Purpose";
import Section from "./components/Section";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import valtec_digital from "../../../assets/valtec_digital.jpg";
import ISO_9 from "../../../assets/ISO/ISO_9.webp";
import ISO_1 from "../../../assets/ISO/ISO_1.webp";
import user from "../../../assets/ISO/user.jpg";
import quality_assurance from "../../../assets/quality_assurance.jpg";
import ethics_and_compliance from "../../../assets/ethics_and_compliance.jpg";
import "../src/components/thinking.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the CSS styles;
import "./components/thinking.css";

const teamMembers = [
  {
    name: "Korda Asare",
    title: "Chairman and CEO",
    image: "https://via.placeholder.com/150", // Replace with the actual image URL
  },
  {
    name: "Joel Michaels",
    title: "Lead Director",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Dr. Omanye Jason",
    title: "Quality Assurance Officer",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Manye Dromor",
    title: "Human Resource Manager",
    image: "https://via.placeholder.com/150",
  },
];

function App() {
  useEffect(() => {
    AOS.init({
      duration: 550, // Animation duration in milliseconds
      offset: 50, // Trigger animations 50px before an element is in view
    });
  }, []);

  return (
    <>
      <Banner title="Thinking" />
      <CompanyOverview />
      <Purpose />
      <Section
        className="mt-3 me-sm-1 me-md-3 me-lg-4"
        imgOrder={0}
        title="Digital Innovation"
        content="The potential of harnessing digital technologies to deliver value for our client's projects drives us at VALTEC.
      We collaborate with experts and build global partnerships with leading industrial solutions to deliver transformative outcomes for our customers. 
      We continuously seek improvement in business performance by efficiently considering evolving technologies, industry best practices, and stakeholder
       expectations. We strongly emphasize effective ways of working together and developing productive long-term relationships with our internal and external 
       stakeholders."
        imgSrc={valtec_digital}
      />

      <Section
        title="Ethics & Compliance"
        content="VALTEC prioritizes integrity and maintains high ethical and compliance standards while delivering exceptional value to our clients. We collaborate with each other, our clients, suppliers, and stakeholders is essential to embodying our principles and achieving our Blueprint.
                Our principles shape our culture; they define our work approach. Our Blueprint details our strategy and ambitions across all business sectors.
                We embody our principles by establishing clear behavioral expectations for our team and fostering an integrity-focused culture that informs our daily decisions, actions, and relationships.
                Our clients recognize our commitment to ethical conduct and compliance with local regulations. We consistently build client trust through exceptional service and strict adherence to ethical practices. Our integrity is guided by our Code of Conduct and Anticorruption Policy, which lays out crucial legal and ethical standards for making sound business decisions across all projects."
        imgSrc={ethics_and_compliance}
      />
      <Container fluid className="bg-gray py-5">
        <Section
          title="Quality and Assurance"
          content="When we get it wrong, the consequences can be severe. We fully recognize our duty to develop safe
                  and reliable technical solutions. All our projects follow a tailored, strong, flexible, and systematic process that includes non-negotiable guidelines,
                  expected results, and suitable toolkits.
                  VALTEC is dedicated to safeguarding the physical, psychological, and social well-being of our employees, stakeholders, and communities through
                 effective risk management strategies. Our services adhere to ISO 9001 and ISO 17025."
          imgSrc={quality_assurance}
          extraContent={
            <>
              <h4 className="text-danger pt-3" data-aos="fade-up">
                VALTEC upholds a robust QHSE policy by:
              </h4>
              <p data-aos="fade-down">
                Establishing clear and measurable Quality Objectives across all
                operational sectors is imperative. Continuous monitoring,
                evaluation, and enhancement of the Quality System and its
                processes are essential to our success. Our clientele is
                significant to us; thus, we endeavor to cultivate partnerships
                with them at every level to comprehensively understand their
                requirements. We strictly adhere to all pertinent local,
                national, and international regulations. Prioritizing the health
                and safety of both our workforce and stakeholders. By improving
                our performance, we aim to lessen our environmental impact.
                Promoting awareness among all employees regarding their
                responsibilities in client service, safety, and environmental
                stewardship is crucial. Defining responsibilities and
                establishing communication for each department. Our design,
                engineering, project, and construction teams implement effective
                risk mitigation strategies, integrating safety from the
                project’s inception. Thorough planning safeguards employees and
                the environment.
                <br />
              </p>
              <p
                className="pt-2 text-danger"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <strong>VALTEC is ISO Certified </strong>
              </p>
              <div
                className="border border-secondary border-2 rounded bg-white d-flex align-items-center justify-content-between"
                style={{ width: "320px" }}
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <img
                  className="m-3"
                  src={ISO_9}
                  style={{ height: "100px" }}
                  alt=""
                />
                <img
                  className="m-3"
                  src={ISO_1}
                  style={{ height: "130px" }}
                  alt=""
                />
              </div>
            </>
          }
        />
      </Container>
      <Container>
        <div>
          <h4 className="text-secondary pt-3 mt-5" data-aos="fade-up">
            Team Members
          </h4>
        </div>
        <Row className="p-0 gx-0 defbodyFont my-5">
          <Col lg={12}>
            <Row>
              {teamMembers.map((member, index) => (
                <Col key={index} xs={12} sm={6} md={5} lg={3} className="mb-4">
                  <Card className="text-center h-100 d-flex flex-column">
                    <Card.Img
                      className="border border-secondary border-1"
                      variant="top"
                      src={user}
                    />
                    <Card.Body className="d-flex flex-column flex-grow-1">
                      <Card.Title>{member.name}</Card.Title>
                      <Card.Text>{member.title}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default App;
