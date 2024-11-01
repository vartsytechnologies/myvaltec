import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home' // Adjust paths as necessary
import Thinking from './pages/Thinking/src/Thinking'; // Adjust paths as necessary

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={Thinking} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;


/*import React from "react";
import MainSlider from "./pages/home/components/carousel.jsx";
import AboutSection from "./pages/home/components/aboutSection.jsx";

import ServiceSection from "./pages/home/services.jsx";

import MarketSection from "./pages/home/components/marketSection.js";
import ProjectSection from "./pages/home/components/projectsSection.jsx";
import NavBar from "./components/navbar/navbar.jsx";
import ContactSection from "./pages/home/contactSection.jsx";
import Footer from "./components/Footer/Footer.js";

function App() {
  return (
    <>
      <NavBar />
      <MainSlider />
      <AboutSection />

      <ServiceSection />

      <MarketSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
*/