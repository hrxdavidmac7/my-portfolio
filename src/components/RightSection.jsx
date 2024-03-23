import React from 'react';
import Footer from './Footer/Footer';
import ProjectsSection from './ProjectsSection';
import SkillsSection from './SkillsSection';
import ProfileCard from './Cards/ProfileCard';
import IntroCard from './Cards/IntroCard';
import Mainfooter from './Footer/mainfooter';
import { Container, SpeedDial } from '@mui/material';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import Contact from './Cards/contact';
import PortfolioCard from './Cards/trendingcard';
import HireMePage from './Cards/hireme';


function RightSection() {
  return (
    <Container class="right-section">

      <IntroCard />
      
      <ProjectsSection />
      <SkillsSection />
     

      <Contact />
      
      <Mainfooter />








    </Container>
  );
}

export default RightSection;
