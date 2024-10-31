import React from "react";
import NavBar from "../../components/navbar/navbar";
import Banner from "../../components/banner/Banner";
import ProjectSection from "./components/ProjectSection";
import Footer from "../../components/Footer/Footer";

function projectApp() {
  return (
    <>
      <NavBar />
      <Banner title="Valtec Projects" />
      <ProjectSection />
      <Footer />
    </>
  );
}

export default projectApp;
