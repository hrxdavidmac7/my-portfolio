import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { Container } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { FacebookOutlined, Instagram } from '@mui/icons-material';

const StyledLink = styled('a')({
  boxSizing: 'border-box',
  color: 'rgb(66, 63, 63)',
  cursor: 'pointer',
  display: 'flex', // Change display to flex
  alignItems: 'center', // Align items vertically
  fontFamily: '"Google Sans", arial, sans-serif',
  fontSize: '11px',
  fontWeight: 400,
  textDecoration: 'none',
});

const FooterContainer = styled('footer')({
  borderTop: '1px solid rgba(0, 0, 0, 0.12)',
  padding: '12px 8px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap', // Allow items to wrap to a new line
});

const LinksContainer = styled('div')({
  display: 'flex',
  gap: '16px',
});

const Footer = () => {
  return (
    <Box>
      <Container>
        {/* Add content here if needed */}
      </Container>
      <FooterContainer>
        <Box display="flex" gap={2}>
          <StyledLink href='google.com'><TwitterIcon /></StyledLink>
          <StyledLink href='google.com'><Instagram /></StyledLink>
          <StyledLink href='google.com'> <FacebookOutlined /></StyledLink>
          <StyledLink href='google.com'><YouTubeIcon />  </StyledLink>
          
        </Box>

        <Divider orientation="vertical" flexItem />

        <LinksContainer>
          <StyledLink href="#">Privacy</StyledLink>
          <StyledLink href="#">Terms of Service</StyledLink>
          <StyledLink href="#">Contact</StyledLink>
        </LinksContainer>
      </FooterContainer>
    </Box>
  );
};

export default Footer;
