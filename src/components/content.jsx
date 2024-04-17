import React, { useState } from 'react';

import ProjectsSection from './ProjectsSection';
import SkillsSection from './SkillsSection';
import ProfileCard from './Cards/ProfileCard';
import IntroCard from './Cards/IntroCard';
import Mainfooter from './Footer/mainfooter';
import { Container, SpeedDial } from '@mui/material';

import Contact from './Cards/contact';
import HireMePage from './Cards/hireme';

export function Content() {
  
  
  return (
    <div    >
      <IntroCard />
      <ProjectsSection />
      <SkillsSection />
      <Contact />      
      <Mainfooter />
   </div>
  );
}


