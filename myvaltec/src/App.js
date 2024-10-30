import React from 'react';
import MainSlider from './pages/home/components/carousel.jsx'
import AboutSection from './pages/home/components/aboutSection.jsx';

import Example from './pages/home/services.jsx';

import MarketSection from './pages/home/components/marketSection.jsx';
import ProjectSection from './pages/home/components/projectsSection.jsx';
import NavBar from './components/navbar/navbar.jsx';
import Footer from './components/Footer/Footer.js';


function App() {
  return (
    <>
        <NavBar/>
        <MainSlider/>
        <AboutSection/>

        <Example/>

        <MarketSection/>
        <ProjectSection/>

        <Footer/>
    </>
  );
}

export default App;

