import React from 'react';
import MainSlider from './pages/home/components/carousel.jsx'
import AboutSection from './pages/home/components/aboutSection.jsx';
import MarketSection from './pages/home/components/marketSection.jsx';
import ProjectSection from './pages/home/components/projectsSection.jsx';

function App() {
  return (
    <>
        <MainSlider/>
        <AboutSection/>
        <MarketSection/>
        <ProjectSection/>
    </>

  );
}

export default App;
