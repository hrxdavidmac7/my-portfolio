import React from 'react';
import Header from './components/Header/header';  
import LeftSection from './components/LeftSection';
import RightSection from './components/RightSection';
import IntroCard from './components/Cards/IntroCard';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ProfileCard from './components/Cards/ProfileCard';

import './App.css';


function App() {
  return (
    <div className="portfolio">
      <Header />
      <div className="portfolio-content">
        <LeftSection />
        
      </div>
      
    </div>
  );
}

export default App;
