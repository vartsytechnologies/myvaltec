import React from "react";
import MainSlider from "./components/carousel.jsx";
import AboutSection from "./components/aboutSection.jsx";

import ServiceSection from "./services.jsx";

import MarketSection from "./components/marketSection.js";
// import PartnersSection from "./components/partners.jsx";
import ProjectSection from "./components/projectsSection.jsx";
import ContactSection from "./contactSection.jsx";

function Home() {
  return (
    <>
      <MainSlider />
      <AboutSection />
      <ServiceSection />
      <MarketSection />
      <ProjectSection />
      {/* <PartnersSection /> */}
      <ContactSection />
    </>
  );
}

export default Home;
