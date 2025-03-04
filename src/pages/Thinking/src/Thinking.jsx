import { useEffect, React } from "react";
import Banner from "../../../components/banner/Banner";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import valtec_digital from "../../../assets/valtec_digital.jpg";
import ISO_9 from "../../../assets/ISO/ISO_9.jpg";
import ISO_1 from "../../../assets/ISO/ISO_2.jpg";
import user from "../../../assets/ISO/user.jpg";
import companyOverview from "../../../assets/solars.jpeg";
import purpose from "../../../assets/purpose.jpg";
import quality_assurance from "../../../assets/q_a.jpg";
import ethics_and_compliance from "../../../assets/e_c.webp";

import AOS from "aos";
import "aos/dist/aos.css";
import "./components/thinking.css";

const teamMembers = [
  {
    // name: "Director 1",
    title: "President & CEO",
    image: "https://via.placeholder.com/150",
  },
  {
    // name: "Director 2",
    title: "Director, Finance & Administration",
    image: "https://via.placeholder.com/150",
  },
  {
    // name: "Director 3",
    title: "Director, Technical",
    image: "https://via.placeholder.com/150",
  },
  {
    // name: "Director 4",
    title: "Director, Growth & Strategic Partnerships",
    image: "https://via.placeholder.com/150",
  },
  {
    // name: "Director 5",
    title: "Manager, Sales & Marketing",
    image: "https://via.placeholder.com/150",
  },
  {
    // name: "Director 6",
    title: "Manager, People & Culture",
    image: "https://via.placeholder.com/150",
  },
  {
    // name: "Director 7",
    title: "Manager, HSEQ",
    image: "https://via.placeholder.com/150",
  },
  {
    // name: "Director 8",
    title: "Manager, Innovation & Communication",
    image: "https://via.placeholder.com/150",
  },
];

function App() {
  useEffect(() => {
    AOS.init({
      duration: 550,
      offset: 50,
    });
  }, []);

  return (
    <>
      <Banner title="Thinking" />
      <Container className="mt-4 px-0">
        <Container className="mt-4 px-0">
          <Row className="flex-column gy-2 mt-5">
            <Col data-aos="fade-up" className="">
              <Row className="justify-content-between">
                <Col
                  xs={12}
                  lg={6}
                  className="align-self-center p-auto text-xs-start"
                >
                  <h2 className="fs-5 p-0 m-0 defheadFont text-danger ">
                    Company Overview
                  </h2>
                  <hr
                    style={{
                      borderTop: "2px solid rgba(255,17,67,1)",
                      borderRadius: "4px",
                      opacity: "1",
                      margin: "0.5rem 0",
                    }}
                  />
                  <p className="defbodyFont d-block me-3 text-justify text-justify-xs-start">
                    Established in August 2015, VALTEC is a value-driven design,
                    engineering, procurement, consulting, and project management
                    company. Our mission is to deliver compelling value through
                    technology solutions to EPCM projects, existing plants, and
                    contractors in the energy, mining, manufacturing, refinery,
                    power, oil & gas industries. VALTEC's unique blend of
                    locally available expertise and a globalized affiliated
                    support network ensures specialized precision, real-time
                    speed, and reliable service quality across all projects in
                    Africa.
                  </p>
                  <p className="mt-4"></p>
                </Col>

                <Col
                  xs={12}
                  lg={6}
                  className="zoom-out-container mb-5 align-self-center"
                  style={{
                    borderRadius: "0",
                    boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <div
                    className="image-Container pt-0 "
                    style={{ width: "100%", height: "auto" }}
                  >
                    <Card>
                      <Card.Img
                        className="w-100 h-auto"
                        src={companyOverview}
                        style={{ borderRadius: "0" }}
                      />
                    </Card>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col data-aos="fade-up" className="py-4">
              <Row className="justify-content-between">
                <Col
                  xs={12}
                  Compliance
                  lg={6}
                  className="zoom-out-container mb-5 align-self-center"
                  style={{
                    borderRadius: "0",
                    boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <div
                    className="image-Container pt-0 "
                    style={{ width: "100%", height: "auto" }}
                  >
                    <Card>
                      <Card.Img
                        className="w-100 h-auto"
                        src={purpose}
                        alt="Purpose"
                        style={{ borderRadius: "0" }}
                      />
                    </Card>
                  </div>
                </Col>
                <Col className="align-self-center p-auto">
                  <h2 className="fs-5 p-0 m-0 defheadFont text-danger">
                    Our Purpose
                  </h2>
                  <hr
                    style={{
                      borderTop: "2px solid rgba(255,17,67,1)",
                      borderRadius: "4px",
                      opacity: "1",
                      margin: "0.5rem 0",
                    }}
                  />
                  <ul className="defbodyFont ">
                    <li data-aos="fade-up">
                      Deliver value through technology.
                    </li>
                    <li data-aos="fade-up">
                      Demonstrate leadership with excellence.
                    </li>
                    <li data-aos="fade-up">
                      Think innovatively while embracing new ideas.
                    </li>
                    <li data-aos="fade-up">
                      Operate ethically and with integrity, prioritizing safety
                      and security.
                    </li>
                    <li data-aos="fade-up">
                      Collaborate with unrivaled expertise to solve complex
                      challenges.
                    </li>
                    <li data-aos="fade-up">
                      Share success with our stakeholders.
                    </li>
                  </ul>
                  <p className="mt-4"></p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <Container fluid className="bg-gray">
          <Container className="py-4">
            <Row className="flex-column gy-2 mt-5">
              <Col data-aos="fade-up" className="py-4">
                <Row className="justify-content-between">
                  <Col
                    xs={12}
                    Compliance
                    lg={6}
                    className="zoom-out-container mb-5 align-self-center"
                    style={{
                      borderRadius: "0",
                      boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    <div
                      className="image-Container pt-0 "
                      style={{ width: "100%", height: "auto" }}
                    >
                      <Card>
                        <Card.Img
                          className="w-100 h-auto"
                          src={valtec_digital}
                          alt="valtec_digital"
                          style={{ borderRadius: "0" }}
                        />
                      </Card>
                    </div>
                  </Col>
                  <Col className="align-self-center p-auto">
                    <h2 className="fs-5 p-0 m-0 defheadFont text-danger">
                      Digital Innovation
                    </h2>
                    <hr
                      style={{
                        borderTop: "2px solid rgba(255,17,67,1)",
                        borderRadius: "4px",
                        opacity: "1",
                        margin: "0.5rem 0",
                      }}
                    />
                    <p className="defbodyFont d-block text-justify text-justify-xs-start">
                      The potential of harnessing digital technologies to
                      deliver value for our client's projects drives us at
                      VALTEC. We collaborate with experts and build global
                      partnerships with leading industrial solutions to deliver
                      transformative outcomes for our customers. We continuously
                      seek improvement in business performance by efficiently
                      considering evolving technologies, industry best
                      practices, and stakeholder expectations. We strongly
                      emphasize effective ways of working together and
                      developing productive long-term relationships with our
                      internal and external stakeholders.
                    </p>
                    <p className="mt-4"></p>
                  </Col>
                </Row>
              </Col>
              <Col data-aos="fade-up" className="py-4">
                <Row className="justify-content-between">
                  <Col className="align-self-center p-auto">
                    <h2 className="fs-5 p-0 m-0 defheadFont text-danger">
                      Ethics and Compliance
                    </h2>
                    <hr
                      style={{
                        borderTop: "2px solid rgba(255,17,67,1)",
                        borderRadius: "4px",
                        opacity: "1",
                        margin: "0.5rem 0",
                      }}
                    />
                    <p className="defbodyFont d-block me-3 text-justify text-justify-xs-start">
                      VALTEC prioritizes integrity and maintains high ethical
                      and compliance standards while delivering exceptional
                      value to our clients. We collaborate with each other, our
                      clients, suppliers, and stakeholders is essential to
                      embodying our principles and achieving our Blueprint. Our
                      principles shape our culture; they define our work
                      approach. Our Blueprint details our strategy and ambitions
                      across all business sectors. We embody our principles by
                      establishing clear behavioral expectations for our team
                      and fostering an integrity-focused culture that informs
                      our daily decisions, actions, and relationships. Our
                      clients recognize our commitment to ethical conduct and
                      compliance with local regulations. We consistently build
                      client trust through exceptional service and strict
                      adherence to ethical practices. Our integrity is guided by
                      our Code of Conduct and Anticorruption Policy, which lays
                      out crucial legal and ethical standards for making sound
                      business decisions across all projects.
                    </p>
                    <p className="mt-4"></p>
                  </Col>

                  <Col
                    xs={12}
                    Compliance
                    lg={6}
                    className="zoom-out-container mb-5 align-self-center"
                    style={{
                      borderRadius: "0",
                      boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    <div
                      className="image-Container pt-0 "
                      style={{ width: "100%", height: "auto" }}
                    >
                      <Card>
                        <Card.Img
                          className="w-100 h-auto"
                          src={ethics_and_compliance}
                          alt="Ethics&Compliance"
                          style={{ borderRadius: "0" }}
                        />
                      </Card>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Container>
        <Container>
          <Row className="flex-column gy-2 mt-5">
            <Col data-aos="fade-up" className="py-4">
              <Row className="justify-content-between">
                <Col
                  xs={12}
                  Compliance
                  lg={6}
                  className="zoom-out-container mb-5 align-self-center"
                  style={{
                    borderRadius: "0",
                    boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <div
                    className="image-Container pt-0 "
                    style={{ width: "100%", height: "auto" }}
                  >
                    <Card>
                      <Card.Img
                        className="w-100 h-auto"
                        src={quality_assurance}
                        alt="Quality_Assurance"
                        style={{ borderRadius: "0" }}
                      />
                    </Card>
                  </div>
                </Col>
                <Col className="align-self-center p-auto">
                  <h2 className="fs-5 p-0 m-0 defheadFont text-danger">
                    Quality Assurance
                  </h2>
                  <hr
                    style={{
                      borderTop: "2px solid rgba(255,17,67,1)",
                      borderRadius: "4px",
                      opacity: "1",
                      margin: "0.5rem 0",
                    }}
                  />
                  <p className="defbodyFont d-block text-justify text-justify-xs-start">
                    We are fully aware that when we get it wrong, the
                    consequences can be severe. When we get it wrong, the
                    consequencescanbesevere. We fully recognize our duty to
                    develop safe and reliable technical solutions. All our
                    projects follow a tailored, strong, flexible, and systematic
                    process that includes non-negotiable guidelines, expected
                    results, and suitable toolkits. Hence, our operations
                    strictly adhere to a robust QHSE policy that is dedicated to
                    safeguarding the physical, psychological, and social
                    well-being of our employees, stakeholders, and communities.
                    <br />{" "}
                    <span className="fw-bolder text-danger text-justify text-justify-xs-start">
                      We are ISO 9001 and ISO 14001 certified.
                    </span>
                  </p>
                  <div
                    className=" rounded bg-white d-flex align-items-center justify-content-between"
                    style={{ width: "290px" }}
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <img
                      className="m-3"
                      src={ISO_9}
                      style={{ height: "90px" }}
                      alt=""
                    />
                    <img
                      className="m-3"
                      src={ISO_1}
                      style={{ height: "100px" }}
                      alt=""
                    />
                  </div>
                  <p className="mt-4"></p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h4 className="text-danger pt-3" data-aos="fade-up">
                    VALTEC upholds a robust QHSE policy by:
                  </h4>
                  <p
                    className="defbodyFont text-justify text-justify-xs-start"
                    data-aos="fade-up"
                  >
                    Establishing clear and measurable Quality Objectives across
                    all operational sectors is imperative. Continuous
                    monitoring, evaluation, and enhancement of the Quality
                    System and its processes are essential to our success. Our
                    clientele is significant to us; thus, we endeavor to
                    cultivate partnerships with them at every level to
                    comprehensively understand their requirements. We strictly
                    adhere to all pertinent local, national, and international
                    regulations. Prioritizing the health and safety of both our
                    workforce and stakeholders. By improving our performance, we
                    aim to lessen our environmental impact. Promoting awareness
                    among all employees regarding their responsibilities in
                    client service, safety, and environmental stewardship is
                    crucial. Defining responsibilities and establishing
                    communication for each department. Our design, engineering,
                    project, and consulting teams implement effective risk
                    mitigation strategies, integrating safety from the project’s
                    inception. Thorough planning safeguards employees and the
                    environment.
                    <br />
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container>
        <div>
          <h3
            className="text-danger fw-bold ms-3 text-start pt-0 mt-0 mt-sm-5 pt-sm-3"
            data-aos="fade-up"
          >
            MANAGEMENT TEAM
          </h3>
        </div>
        <Row className="p-0 gx-0 defbodyFont my-5">
          <Col lg={12}>
            <Row>
              {teamMembers.map((member, index) => (
                <Col key={index} xs={12} sm={6} md={5} lg={3} className="mb-3">
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
