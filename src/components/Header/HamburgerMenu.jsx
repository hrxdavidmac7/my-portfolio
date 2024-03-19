import React, { useEffect } from 'react';

const HamburgerMenu = () => {
  useEffect(() => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const leftSection = document.querySelector('.left-section');

    function toggleLeftSection() {
      leftSection.style.display = leftSection.style.display === 'none' ? 'block' : 'none';
    }

    function handleWindowResize() {
      if (window.innerWidth <= 1200) {
        leftSection.style.display = 'none';
        hamburgerMenu.style.display = 'block';
      } else {
        leftSection.style.display = 'block';
        hamburgerMenu.style.display = 'none';
      }
    }

    function handleClick() {
      hamburgerMenu.classList.toggle('cross');
      if (window.innerWidth <= 1200) {
        toggleLeftSection();
      }
    }

    hamburgerMenu.addEventListener('click', handleClick);
    window.addEventListener('resize', handleWindowResize);

    // Set the initial state based on screen width
    handleWindowResize();

    // Cleanup event listeners on component unmount
    return () => {
      hamburgerMenu.removeEventListener('click', handleClick);
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return null; // React components must return something, but in this case, we don't need to render anything
};

export default HamburgerMenu;
