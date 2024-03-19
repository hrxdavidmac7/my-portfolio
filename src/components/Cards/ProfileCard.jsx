import { Container, Box } from '@mui/material';
import React from 'react';
import { createTheme } from '@mui/material/styles';

const ProfileCard = () => {
  return (
    <Container  sx={{ border: 2, marginBottom:'30px', marginTop:'30px' }}>
      <Box class="profile-card">
        <div class="profile-photo-container">
          <img src="/images/flaviu.jpg" alt="Your" class="profile-photo"/>
        </div>
        
        <Container class="scrolling-text-container">
          <div class="scrolling-text">
            <div class="slide build-text">Coder</div>
            <div class="slide create-text">Developer</div>
            <div class="slide design-text">Hacker</div>
            <div class="slide code-text">Creater</div>
            <div class="slide build-text">Coder</div> 
          </div>
        </Container>
        </Box>
    </Container>
  );
}

export default ProfileCard;
