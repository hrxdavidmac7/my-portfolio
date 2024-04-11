import React, { useState } from 'react';

import ProjectsSection from './ProjectsSection';
import SkillsSection from './SkillsSection';
import ProfileCard from './Cards/ProfileCard';
import IntroCard from './Cards/IntroCard';
import Mainfooter from './Footer/mainfooter';
import { Container, SpeedDial } from '@mui/material';

import Contact from './Cards/contact';
import HireMePage from './Cards/hireme';







export default function RightSection() {
  const [sections, setSections] = useState();
  function handleTrendingClick(){
    setSections(<HireMePage></HireMePage>);
  }
  return (
    <Container
      sx={{
        marginLeft: '20%',
        marginBottom: '10px',
        padding: '20px',
        '@media (max-width: 1200px)': {
          marginLeft: '0px',
          width: '100%',
        },
      }}
    >
      <IntroCard />
      <ProjectsSection />
      <SkillsSection />
      <Contact />      
      <Mainfooter />
    </Container>
  );
}


