import React from 'react';
import HamburgerMenu from './HamburgerMenu';
import { Divider } from '@mui/material';


const Header = () => {
  return (
   <header>
    <nav class="apple-nav">
      <div class="logo">Portfolio</div>
      <ul class="nav-list">
        <li><a href="#projects">Projects</a></li>
        <li><a href="">Resume</a></li>
        <li><a href="#me">Hire me</a></li>
      </ul>
      <div class="hamburger-menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
    <HamburgerMenu/>
    <Divider/>
   </header>
  );
}

export default Header;
