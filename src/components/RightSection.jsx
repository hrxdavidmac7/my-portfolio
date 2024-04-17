import React, { useEffect, useState } from 'react';
import ProjectsSection from './ProjectsSection';
import SkillsSection from './SkillsSection';
import ProfileCard from './Cards/ProfileCard';
import IntroCard from './Cards/IntroCard';
import Mainfooter from './Footer/mainfooter';
import { Container, SpeedDial } from '@mui/material';
import Contact from './Cards/contact';
import HireMePage from './Cards/hireme';
import { Content } from './content';


export default function RightSection({ selectedMenuItem }) {
  const [sections, setSections] = useState(null);

  useEffect(() => {
    switch (selectedMenuItem) {
      case '#home':
        setSections(<Content />);
        break;
      case '#trending':
        setSections(<Content/>);
        break;
      case '#snippet':
        setSections(<Content/>);
        break;
      case '#video':
        setSections(<Content/>);
        break;
      default:
        setSections(<Content/>);
    }
  }, [selectedMenuItem]);

  return (
    <Container
      sx={{
        marginLeft:'20%',
        marginBottom: '10px',
        padding: '20px',
        width:'100%',
        '@media (max-width: 1200px)': {
          marginLeft: '0px',
          width: '100%',
        },
      }}
    >
      {sections}
    </Container>
  );
}
