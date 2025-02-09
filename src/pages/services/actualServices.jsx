import { React, useState, useEffect } from "react";
import { Container, Row, Col, Modal, Button, Carousel } from "react-bootstrap";
import Banner from "../../components/banner/Banner";
import "./services.css";
import { useParams } from "react-router-dom";
// import ContactSalesBtn from "./contactSalesbtn";
import { Link } from "react-router-dom";
import ProductsSection from "./epcService.jsx";
import ReadMorebtn from "./readMorebtn.jsx";
import {
  MdOutlineConstruction,
  MdOutlineCompassCalibration,
  MdOutlineSolarPower,
  MdOutlinePrecisionManufacturing,
  MdOutlineWifiProtectedSetup,
  MdOutlineGroup,
} from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { PiMonitor } from "react-icons/pi";
import { AiOutlineExperiment } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";

import serv_bg from "../../assets/services_img/white-unsplash-9d0375d2.jpg";
// new service images
import calib from "../../assets/services_img/new/calib.jpeg";
import digital from "../../assets/services_img/new/digital.jpg";
import lubricants from "../../assets/services_img/new/fuel.png";
import infrastructure from "../../assets/services_img/new/infra.jpg";
import partnership from "../../assets/services_img/partnership.jpg";
import renewables from "../../assets/services_img/new/pv.jpg";
import sustainability from "../../assets/services_img/new/sustainability2.JPG";

//service carousel images
import ca_calib from "../../assets/services_img/new/calib/dpi620-is1.jpeg";
import ca_calib2 from "../../assets/services_img/new/calib/dpi620g-is-ex-druck.jpg";
import ca_calib3 from "../../assets/services_img/new/calib/Bench.jpeg";

import f1 from "../../assets/services_img/new/fuel/f1.png";
import f2 from "../../assets/services_img/new/fuel/f2.png";
import f3 from "../../assets/services_img/new/fuel/f3.png";
import f4 from "../../assets/services_img/new/fuel/f4.png";
import f5 from "../../assets/services_img/new/fuel/f5.png";
import f6 from "../../assets/services_img/new/fuel/f6.png";

import i1 from "../../assets/services_img/new/infrastructure/i1.png";
import i2 from "../../assets/services_img/new/infrastructure/i2.jpeg";
import i3 from "../../assets/services_img/new/infrastructure/i3.jpeg";

import ren1 from "../../assets/services_img/new/renewable/pv.jpg";
import ren2 from "../../assets/services_img/new/renewable/lights.jpeg";
import ren3 from "../../assets/services_img/new/renewable/IMG_4122.JPG";
import ren4 from "../../assets/services_img/new/renewable/IMG_4123.JPG";
import ren5 from "../../assets/services_img/new/renewable/IMG_4124.JPG";
import ren6 from "../../assets/services_img/new/renewable/IMG_4125.JPG";
import ren7 from "../../assets/services_img/new/renewable/IMG_4126.JPG";
import ren8 from "../../assets/services_img/new/renewable/IMG_4127.JPG";
import ren9 from "../../assets/services_img/new/renewable/IMG_4128.JPG";
import ren10 from "../../assets/services_img/new/renewable/IMG_4129.JPG";

import epc1 from "../../assets/services_img/new/epc/epc1.jpg";
import epc2 from "../../assets/services_img/new/epc/epc2.jpg";
import epc3 from "../../assets/services_img/new/epc/epc3.jpg";
import epc4 from "../../assets/services_img/new/epc/epc4.jpg";

const epcDetails = [
  {
    name: "Engineering Procurement and Construction",
    initialImage: epc1,
    imgOrder: 0,
    carouselImages: [epc1, epc2, epc3, epc4],
    icon: <MdOutlineConstruction className="s-icon" />,
    description:
      "VALTEC Limited offers comprehensive EPC (Engineering, Procurement, and Construction) services, tailored to meet the complex needs of the energy, mining, oil, and gas sectors. Our team brings a wealth of experience, utilizing advanced technology and local expertise to streamline project execution from design to completion.",
    detailedContent: (
      <div className="service-description">
        <p>
          VALTEC Limited offers comprehensive EPC (Engineering, Procurement, and
          Construction) services tailored to meet the complex needs of the
          energy, mining, oil, and gas sectors. We are your premier sourcing
          partner, equipped with capabilities, offerings, technology, rapid
          turnaround, quality, and modular solutions. Our affiliation with a
          global distribution network provides your project with continuous
          product access, exceptional supply chain management, and an unwavering
          commitment to your success. When fabrication is central to your
          project, VALTEC is your reliable partner. With modular processes and
          state-of-the-art production equipment, we ensure your projects align
          seamlessly with your objectives. Our extensive offerings include
          turnkey metering, treatment facilities, and civil to mechanical
          construction services. <br />
          We specialize in the procurement of OEM products, such as but not
          limited to:
        </p>
        <ul>
          <li>Pipe, Tubes, Valves, Fittings & Flanges</li>
          <li>Pumps Production, and Drilling</li>
          <li>Mill, Tools, MRO & Consumables</li>
          <li>Electrical Cable & Products</li>
        </ul>
      </div>
    ),
  },
];

// Service items with their data
export const serviceItems = [
  // {
  //   name: "Engineering Procurement and Construction",
  //   initialImage: epc1,
  //   imgOrder: 0,
  //   carouselImages: [epc1, epc2, epc3, epc4],
  //   icon: <MdOutlineConstruction className="s-icon" />,
  //   description:
  //     "VALTEC Limited offers comprehensive EPC (Engineering, Procurement, and Construction) services, tailored to meet the complex needs of the energy, mining, oil, and gas sectors. Our team brings a wealth of experience, utilizing advanced technology and local expertise to streamline project execution from design to completion.",
  //   detailedContent: (
  //     <div className="service-description">
  //       <p>
  //         VALTEC Limited offers comprehensive EPC (Engineering, Procurement, and
  //         Construction) services tailored to meet the complex needs of the
  //         energy, mining, oil, and gas sectors. We are your premier sourcing
  //         partner, equipped with capabilities, offerings, technology, rapid
  //         turnaround, quality, and modular solutions. Our affiliation with a
  //         global distribution network provides your project with continuous
  //         product access, exceptional supply chain management, and an unwavering
  //         commitment to your success. When fabrication is central to your
  //         project, VALTEC is your reliable partner. With modular processes and
  //         state-of-the-art production equipment, we ensure your projects align
  //         seamlessly with your objectives. Our extensive offerings include
  //         turnkey metering, treatment facilities, and civil to mechanical
  //         construction services. <br />
  //         We specialize in the procurement of OEM products, such as but not
  //         limited to:
  //       </p>
  //       <ul>
  //         <li>Pipe, Tubes, Valves, Fittings & Flanges</li>
  //         <li>Pumps Production, and Drilling</li>
  //         <li>Mill, Tools, MRO & Consumables</li>
  //         <li>Electrical Cable & Products</li>
  //       </ul>
  //     </div>
  //   ),
  // },
  {
    name: "Renewable Energy",
    slug: "renewable_energy",
    initialImage: renewables,
    imgOrder: 2,
    carouselImages: [
      ren1,
      ren2,
      ren3,
      ren4,
      ren5,
      ren6,
      ren7,
      ren8,
      ren9,
      ren10,
    ],
    icon: <MdOutlineSolarPower className="s-icon" />,
    description:
      "VALTEC Limited is committed to promoting sustainable growth through renewable energy solutions. From solar and wind to bioenergy, we design and implement clean energy projects that help reduce carbon footprints and energy costs. Our renewable energy expertise enables us to support clients on their journey toward sustainable operations, offering solutions that align with global energy goals and environmental standards.",
    detailedContent: (
      <div>
        <p>Fix Content here</p>
      </div>
    ),
  },
  {
    name: "Additives : Fuel, Lubricants and Greases",
    slug: "additives",
    initialImage: lubricants,
    imgOrder: 0,
    carouselImages: [f1, f2, f3, f4, f5, f6],
    icon: <AiOutlineExperiment className="s-icon" />,
    description:
      "VALTEC Limited offers a range of high-quality fuel additives and lubricants designed to enhance equipment performance, reduce emissions, and extend machinery life. Our solutions are formulated for the demanding conditions of the energy and industrial sectors, providing improved efficiency and reliability in day-to-day operations. Partner with us for a greener, more efficient approach to fuel and lubricant management.",
    detailedContent: (
      <div>
        <p>
          Industry has struggled forever to find a way to significantly reduce
          the cost of maintaining its capital equipment. Friction and
          inefficient combustion are the greatest destroyers of machinery,
          efficiency, and the environment. We provide the industrial world with
          the most powerful lubricants and fuel additives that not only extend
          the life of equipment but also reduce greenhouse gas emissions, fuel
          consumption, maintenance, and replacement parts costs. The Fuel Ox®
          Infinity Lube™ and Fuel Ox® fuel additive line of products have
          accomplished this and by doing so offer value far beyond that of our
          competition. Our patented lubricant and fuel additive formulas,
          derived from renewable plant sources, are proven to deeply penetrate
          surfaces and reduce friction. They have been tested against all
          competitive products in the marketplace and our results show that they
          outlast conventional oil by up to 4x while reducing emissions by up to
          50%.
        </p>
      </div>
    ),
  },
  {
    name: "Infrastructure and Facilities",
    slug: "infrastructure&facilities",
    initialImage: infrastructure,
    imgOrder: 2,
    carouselImages: [i1, i2, i3],
    icon: <MdOutlinePrecisionManufacturing className="s-icon" />,
    description:
      "Our Infrastructure and Facilities services cater to the specific requirements of the industrial sector, providing reliable, tailored solutions for facility management, construction, and maintenance. VALTEC Limited leverages its local expertise and global network to support infrastructure projects, ensuring optimal functionality and safety standards in every project. We are dedicated to building resilient facilities that support long-term operational success.",
    detailedContent: (
      <div>
        <p>
          Our Infrastructure and Facilities services cater to the specific
          requirements of the industrial sector, providing reliable, tailored
          solutions for facility management, construction, and maintenance.
          VALTEC Limited leverages its local expertise and global network to
          support infrastructure projects, ensuring optimal functionality and
          safety standards in every project. We are dedicated to building
          resilient facilities that support long-term operational success.
        </p>
      </div>
    ),
  },
  {
    name: "Calibration Services",
    slug: "calibration_services",
    initialImage: calib,
    imgOrder: 0,
    carouselImages: [ca_calib, ca_calib2, ca_calib3],
    icon: <MdOutlineCompassCalibration className="s-icon" />,
    description:
      "In an industry where accuracy is paramount, our Calibration Services provide reliable, precise calibrations for industrial equipment across energy, mining, and oil & gas sectors. VALTEC Limited is dedicated to maintaining optimal performance and regulatory compliance by utilizing state-of-the-art calibration tools. Our services reduce downtime and improve operational safety, delivering the assurance our clients need to operate confidently and efficiently.",
    detailedContent: (
      <p>
        In an industry where accuracy, precision, and reliability of instruments
        and equipment are paramount, VALTEC calibration services solution will
        be your reliable partner for reliable, precise calibrations for all
        industrial instruments (temperature, pressure, humidity, electrical,
        mechanical) across the energy, manufacturing, mining, and oil & gas
        sectors. VALTEC is dedicated to maintaining optimal performance and
        regulatory compliance by utilizing our state-of-the-art calibration
        laboratory, which is well-equipped with precision tools and advanced
        technology. Partner with us for the calibration of your instruments and
        equipment, including sensor calibration, as-found calibration, as-left
        calibration, verification calibration, routine calibration, and
        maintenance calibration. Our services minimize downtime and enhance
        operational safety, providing the confidence our clients require to
        operate effectively and efficiently.
      </p>
    ),
  },

  {
    name: "Digital Solutions",
    slug: "digital_solutions",
    initialImage: digital,
    imgOrder: 2,
    carouselImages: [digital],
    icon: <PiMonitor className="s-icon" />,
    description: (
      <p>
        <strong>Data Analytics </strong>
        We help businesses make smarter decisions by turning raw data into
        actionable insights. <br />
        <strong>Visualization and Immersive Storytelling</strong>
        <br />
        VALTEC brings your data to life with stunning visuals and engaging
        stories.
      </p>
    ),
    detailedContent: (
      <div className="row">
        <div className="col-12">
          <h1 className="text-danger defheadFont">Data & Analytics</h1>
          <p className="mb-5">
            We help businesses make smarter decisions by turning raw data into
            actionable insights. We leverage data engineering, advanced
            analytics and machine learning technology to address a diverse range
            of client challenges. A typical project may include a combination of
            data scientists, data engineers, business analysts, software
            engineers and domain experts in disciplines such as geotechnical,
            electrical, civil and mechanical engineering.  <br />
            <span className="mt-3">
              Our data and analytics team works closely with all other parts of
              VALTEC to deliver exceptional results for clients, for example:
            </span>
          </p>
          <div className="row d-flex align-items-stretch">
            <div className="col-md-6 d-flex">
              <ol
                className="list-unstyled p-3 flex-grow-1 rounded"
                style={{ border: "2px solid red" }}
              >
                <li>
                  {" "}
                  <h3 className="text-danger p-0 my-0">Visualize</h3>
                  We create engaging interactive dashboards and data
                  visualization tools to display averages, variations, trends,
                  relationships, and structures.
                </li>
                <li>
                  {" "}
                  <h3 className="text-danger p-0">Detect</h3>
                  We identify people, objects, assets, features, anomalies,
                  faults, hazards, risks, actions, and behaviors. For example,
                  we map roads from aerial images and identify road signs and
                  pipeline faults from video footage.
                </li>
                <li>
                  {" "}
                  <h3 className="text-danger p-0">Predict</h3>
                  We utilize metered data from residential developments to
                  predict critical peak loads for energy consumption. We
                  anticipate demand, timing, events, equipment failures, and
                  cost revenue.
                </li>
              </ol>
            </div>
            <div className="col-md-6 d-flex">
              <ol
                className="list-unstyled p-3 flex-grow-1 rounded"
                style={{ border: "2px solid red" }}
              >
                <li className="p-0">
                  {" "}
                  <h3 className="text-danger p-0">Optimize</h3>
                  We optimize site selection, routes, schedules, operational and
                  production processes, and maintenance. Projects include HVAC
                  energy reduction, predictive maintenance, and production
                  process optimization.
                </li>
                <li>
                  {" "}
                  <h3 className="text-danger p-0">Automate</h3>
                  Automating expensive, repetitive, or hazardous tasks;
                  construction and manufacturing activities; and evaluations.
                </li>
                <li>
                  {" "}
                  <h3 className="text-danger p-0">Create</h3>
                  Machine learning for designs, images, processes, strategies,
                  and experiments. We applied machine learning-based generative
                  design to automate the configuration of a data center. We
                  assist clients in managing, understanding, and extracting
                  insights from their data to enhance asset management, optimize
                  operations, make informed planning and design decisions, and
                  execute projects more efficiently.
                </li>
              </ol>
            </div>
          </div>
          <br />
          <h2 className="mt-5 defheadFont">
            {" "}
            Our services focus on four key areas and include:
          </h2>
          <ul>
            <li>
              <h3 className="text-danger">Data management</h3> Advising on the
              capabilities, processes, platforms, and architectures needed to
              effectively and securely manage big data. Designing and
              implementing processes and infrastructure for data acquisition,
              storage, transformation, and integration. Creating interactive
              dashboards and reporting tools that enable clients to understand
              their data and gain better insights into the performance of their
              assets and operations.
            </li>
            <li>
              <h3 className="text-danger">Asset management</h3> Analytical
              models for optimizing asset management or capital projects at the
              portfolio or program level. Automated monitoring of asset
              conditions and forecasting of asset health. Utilizing machine
              vision to more accurately, quickly, safely, and remotely detect,
              geolocate, and inspect geographically dispersed assets. Predictive
              maintenance through machine learning to optimize maintenance
              scheduling, road surface evaluation, and capital expenditure
              decisions.
            </li>
            <li>
              <h3 className="text-danger">Operational improvement</h3>
              Optimizing logistics, scheduling, capacity assessment, root cause
              analysis, and production processes with machine learning.
              Enhancing energy efficiency of HVAC systems, pumps, and other
              energy-intensive systems through machine learning. Automated event
              detection, activity analysis, and traffic incident detection
              utilizing computer vision and machine learning technologies.
            </li>
            <li>
              <h3 className="text-danger">Planning and design</h3>Utilizing
              advanced analytics enhances infrastructure planning,
              transportation planning, and urban design. Employing predictive
              modeling to forecast or assess the likelihood of events, such as
              predicting critical peak loads for energy usage in residential
              developments, to aid infrastructure planning. Automating and
              augmenting design processes through generative design technology.
              Monitoring projects and enhancing productivity. Optimizing site
              selection.
            </li>
          </ul>
        </div>
        <div className="col-12">
          <h1 className="text-danger pt-4 defheadFont">
            Visualization and Immersive Storytelling
          </h1>
          <p>
            VALTEC brings your data to life with stunning visuals and compelling
            narratives. Visualization and real-time rendering build
            anticipation, eliminate ambiguity, clarify design features, and
            engage stakeholders through immersive project experiences. By
            collaborating with our clients, we uncover, translate, and
            strategically convey their project’s vision through various visual
            mediums, from augmented reality to motion graphics to app
            development. Our team transforms your designs from plans and
            architectural models into fit-for-purpose visual formats, such as
            videos, before-and-after comparisons, photomontages, 360-degree
            panoramic videos, aerial photography, and more. High-quality digital
            content breathes life into your project for a range of purposes and
            audiences, whether it's for stakeholder engagement or promotion.
          </p>
        </div>
      </div>
    ),
  },
  {
    name: "Public Private Partnerships",
    slug: "public_details",
    initialImage: partnership,
    imgOrder: 0,
    carouselImages: [partnership],
    icon: <MdOutlineGroup className="s-icon" />,
    description:
      "VALTEC Limited fosters strategic public-private partnerships to drive innovation, enhance infrastructure, and boost economic growth in West Africa. Our collaborative approach connects government entities and private enterprises, fostering projects that benefit communities and contribute to sustainable development. By leveraging our industry expertise, we create mutually beneficial partnerships that address critical infrastructure and service needs.",
    detailedContent: (
      <div>
        <p>
          VALTEC Limited fosters strategic public-private partnerships to drive
          innovation, enhance infrastructure, and boost economic growth in West
          Africa. Our collaborative approach connects government entities and
          private enterprises, fostering projects that benefit communities and
          contribute to sustainable development. By leveraging our industry
          expertise, we create mutually beneficial partnerships that address
          critical infrastructure and service needs.
        </p>
      </div>
    ),
  },
  {
    name: "Sustainability",
    slug: "sustainability",
    initialImage: sustainability,
    imgOrder: 2,
    carouselImages: [sustainability],
    icon: <MdOutlineWifiProtectedSetup className="s-icon" />,
    description: (
      <p>
        <strong>Risk and assurance Strategy</strong>
        <br />
        We help you identify risks and build strategies that ensure sustainable,
        long-term success. <br />
        <strong>Energy and emissions modeling</strong>
        <br />
        Our solutions help you track energy use and reduce emissions for a
        greener, efficient future.
      </p>
    ),
    detailedContent: (
      <div className="service-description">
        <h2 className="text-danger p-0 defheadFont">
          Risk and Assurance Strategy
        </h2>
        <p>
          Uncertainty, experienced by all businesses, is synonymous with risk.
          We recognize this and offer comprehensive risk and assurance
          strategies for clients that yield significant enterprise, strategic,
          and capital asset outcomes. We assist business leaders in becoming
          comfortable with uncertainty, defining complex problems, managing
          ambiguity, and navigating dynamic environments through:
        </p>
        <h4 className="text-danger">Strategic risk and assurance</h4>
        <ul>
          <li>Risk-based strategy and strategic risk management.</li>
          <li>Strategy performance and governance integration.</li>
          <li>
            Risk-based decision support, scenario management, and adaptive
            planning.
          </li>
          <li>
            Board and Executive advisory, alignment, and assurance delivery
            services.
          </li>
        </ul>
        <h4 className="text-danger">Enterprise risk and assurance</h4>
        <ul>
          <li>Risk, governance, audit, assurance, and benefits frameworks</li>
          <li>
            Risk assessments and controls, key risk indicators, risk reporting,
            knowledge management and continuous improvement approaches.
          </li>
          <li>Second-line assurance and compliance services.</li>
          <li>
            Enterprise resilience, including business continuity, security, and
            crisis and emergency management.
          </li>
        </ul>
        <h4 className="text-danger">
          Capital asset program risk and assurance
        </h4>
        <ul>
          <li>
            Project, program, and portfolio risk advisory, governance, benefits
            management, and assurance services.
          </li>
          <li>
            Capital portfolio prioritization, multi-criteria analysis (MCA),
            total value of ownership (TVO), and complex diagnostic-based project
            selection.
          </li>
          <li>
            Qualitative and quantitative risk analysis, scenario testing,
            risk-based cost estimation, and Monte Carlo simulation.
          </li>
        </ul>
        <h2 className="text-danger p-0 defheadFont">
          Energy and emissions modeling
        </h2>
        <p>
          Our solutions help you track energy use and reduce emissions for a
          greener, efficient future.
        </p>
      </div>
    ),
  },
  {
    name: "Reliability Services",
    slug: "reliability_services",
    initialImage: partnership,
    imgOrder: 0,
    carouselImages: [partnership],
    icon: <VscWorkspaceTrusted className="s-icon" />,
    description: (
      <p>
        VALTEC ensures the reliability of your machinery through advanced
        vibration analysis and predictive maintenance solutions. Our expert team
        conducts in-depth reliability appraisals to assess critical assets,
        identify vulnerabilities, and recommend tailored solutions for your
        plant or factory.
      </p>
    ),
    detailedContent: (
      <div>
        <p>
          Most customers encounter various challenges regarding the overall
          reliability of their machinery. Consequently, a vibration analysis
          service for rotating assets has evolved into a comprehensive solution
          for your factory or plant’s high-cost equipment maintenance program.
          To determine which technology is best suited for your needs, we
          perform an in-depth analysis of your business through a complimentary
          reliability appraisal that assesses your current and future
          maintenance requirements highlights:
        </p>

        <ul>
          <li>What are your critical assets are</li>
          <li>Where are your potential pain points & weaknesses are</li>
          <li>
            Which solution is optimal for your business (conventional or
            customized)
          </li>
          <li>How your business will benefit.</li>
        </ul>
        <h2 className="defheadFont text-danger">
          Our consulting services cover:
        </h2>
        <div className="row">
          <div className="col-md-6">
            <ul>
              <li>Machinery balancing</li>
              <li>Acceptance testing</li>
              <li>Safety assessments for people & the environment</li>
              <li>Structural stability</li>
              <li>Electrical issues</li>
              <li>Fire mitigation</li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul>
              <li>Leak detection</li>
              <li>Energy savings</li>
              <li>Oil analysis</li>
              <li>Thermographic photography</li>
              <li>Ultrasound cameras</li>
            </ul>
          </div>
        </div>
        <div className="p-3 rounded" style={{ border: "2px solid red" }}>
          <p>
            Our highly specialized technical team is equipped to identify and
            resolve operational issues while utilizing various reliability tools
            and complementary techniques to address every aspect of your
            maintenance needs. We collaborate with other experts to achieve the
            best results if we do not have in-house personnel available for the
            task. VALTEC offers reliable solutions and 24/7 repair services,
            including{" "}
            <strong>
              Vibration Analysis, Onsite Repairs, Laser Alignment, Dynamic
              Balancing, and Diagnostics Services. Vibration Analysis
            </strong>
          </p>
          <p>
            Our ASNT-certified analysts provide the most effective predictive
            tool for routine machinery health monitoring, detecting early
            issues, and minimizing unscheduled downtime, along with diagnostic
            capabilities for nearly any rotating equipment machine.
          </p>
          <ul>
            <li>
              <h4 className="text-danger">Onsite Repairs</h4>
              We don’t just identify problems; we solve them. Our onsite repair
              services will get your malfunctioning equipment back online faster
              because we come to you! Let us minimize your downtime by repairing
              your machinery at your facility.
            </li>
            <li>
              <h4 className="text-danger">Laser Alignment</h4>
              We provide precision laser alignment for coupled and belt-driven
              equipment, minimizing wear and repair costs while enhancing the
              efficiency and longevity of machines and their parts.
            </li>
            <li>
              <h4 className="text-danger">Dynamic Balancing</h4>
              VALTEC specializes in the balancing of centrifugal chillers,
              blowers, fans, and other rotating equipment.
            </li>
          </ul>
        </div>
      </div>
    ),
  },
];

function Services() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      offset: 50,
    });
  }, []);

  // State for Image Modal
  const [showModal, setShowModal] = useState(false);
  const [clickedImage, setClickedImage] = useState(null);

  // Function for showing image modal
  const handleShowImageModal = (service) => {
    setShowModal(true);
    setClickedImage(service);
  };

  // Close image modals
  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <Banner title="Services" />
      <Container
        fluid
        className="mt-0 pt-4 px-0"
        style={{
          backgroundImage: `url(${serv_bg})`,
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          backgroundBlendMode: "soft-light",
        }}
      >
        <Container>
          <Row>
            <ProductsSection />
            <Col
              style={{ position: "relative", top: "-50px", left: "45px" }}
            ></Col>
          </Row>
          <Row className="flex-column mt-5">
            {/* Render the first service separately
            <Col data-aos="fade-up" className="py-0 mb-5">
              <Row className="justify-content-between align-items-center">
                <Col
                  xs={12}
                  lg={6}
                  className={`zoom-out-container mb-0 mb-md-5 align-self-center`}
                >
                  <div className="d-flex">
                    <p className="fs-5 pt-2 m-0 defheadFont text-danger mb-0">
                      {epcDetails.icon}
                    </p>
                    <p className="fs-5 pt-3 defheadFont text-danger ms-1 mb-0 ">
                      {epcDetails.name}{" "}
                    </p>
                  </div>
                </Col>
              </Row>
            </Col> */}
            {serviceItems.map((service, idx) => (
              <Col key={idx} data-aos="fade-up" className="py-0 mb-5">
                <Row className="justify-content-between align-items-center">
                  <Col
                    xs={12}
                    lg={6}
                    className={`zoom-out-container mb-0 mb-md-4 align-self-center order-md-${service.imgOrder}`}
                  >
                    <div
                      className="image-Container align-self-center pe-3 pt-0"
                      style={{ width: "100%", height: "auto" }}
                    >
                      <img
                        style={{
                          width: "100%",
                          height: "500px",
                          objectFit: "contain",
                        }}
                        src={service.initialImage}
                        alt={service.name}
                        className={`img-fluid `}
                        onClick={() => handleShowImageModal(service)}
                      />
                    </div>
                  </Col>
                  <Col
                    xs={12}
                    lg={6}
                    className="align-self-center pt-0 rounded"
                  >
                    <div className="d-flex">
                      <p className="fs-5 pt-2 m-0 defheadFont text-danger mb-0">
                        {service.icon}
                      </p>
                      <p className="fs-5 pt-3 defheadFont text-danger ms-1 mb-0 ">
                        {service.name}{" "}
                      </p>
                    </div>
                    <hr
                      style={{
                        borderTop: "2px solid rgba(255,17,67,1)",
                        borderRadius: "4px",
                        opacity: "1",
                      }}
                    />
                    <p className="defbodyFont d-block pb-1">
                      {service.description}
                    </p>

                    {/* Conditional rendering to exclude "Read More" for certain services */}
                    {service.name !== "Calibration Services" &&
                      service.name !== "Infrastructure and Facilities" &&
                      service.name !== "Public Private Partnerships" && (
                        <Link
                          className="bg-primary p-2 mb-4 text-white fs-6 fw-bolder rounded"
                          style={{ textDecorationLine: "none" }}
                          to={`/service/${service.slug}`}
                        >
                          Read More
                        </Link>
                      )}
                  </Col>
                </Row>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
      <Modal
        show={showModal}
        onHide={handleClose}
        dialogClassName="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>{clickedImage?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex w-100">
            <Carousel interval={2000}>
              {clickedImage?.carouselImages.map((image, idx) => (
                <Carousel.Item key={idx}>
                  <img
                    src={image}
                    alt={`Slideshow ${idx + 1}`}
                    className="d-block w-100 modal-img" // Ensure modal images have the same size
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Services;
