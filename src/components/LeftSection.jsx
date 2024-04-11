import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CodeIcon from '@mui/icons-material/Code';
import TelegramIcon from '@mui/icons-material/Telegram';
import { useState } from 'react';
import ProjectsSection from './ProjectsSection';
import SkillsSection from './SkillsSection';
import ProfileCard from './Cards/ProfileCard';
import IntroCard from './Cards/IntroCard';
import Mainfooter from './Footer/mainfooter';
import { Container, SpeedDial } from '@mui/material';

import Contact from './Cards/contact';
import HireMePage from './Cards/hireme';

const drawerWidth = 280;

export default function PermanentDrawerLeft() {
  const menuItems = [
    { text: 'Home', icon: <HomeIcon />, url:'https://www.google.com' },
    { text: 'Trending', icon: <TrendingUpIcon />, url:'https://www.google.com'  },
    { text: 'Snippet', icon: <CodeIcon />, url:'https://www.google.com'  },
    { text: 'Video', icon: <VideoLibraryIcon />, url:'https://www.google.com'  }
  ];

  const socialItems = [
    { text: 'LinkedIn', icon: <LinkedInIcon />, url:'https://www.linkedin.com/in/iamanubhav7/'  },
    { text: 'GitHub', icon: <GitHubIcon /> ,url:'https://github.com/hrxdavidmac7' },
    { text: 'YouTube', icon: <YouTubeIcon />, url:'https://www.youtube.com/channel/UCRgqzKU2mgrDjj7GoGs3DdA'  },
    { text: 'LeetCode', icon: <CodeIcon /> , url:'https://leetcode.com/anubhav-7/' },
    { text: 'Telegram', icon: <TelegramIcon />,url:'https://t.me/hrxdavidmac'  }
  ];

  return (
    <div className="portfolio">
      <div className="left-section" >
        <div className="card">
          <CssBaseline />
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
                marginLeft: '20px',
                marginTop: '40px',
              },
            }}
            variant="permanent"
            anchor="left"
          >
            <Typography variant="h6" gutterBottom component="div" sx={{ textAlign: 'center', mt: 6 }}>
           
            </Typography>
            
            <List>
              {menuItems.map((item, index) => (
                <React.Fragment key={item.text}>
                  <ListItem disablePadding>
                  <a href={item.url}  style={{ textDecoration: 'none', color: 'inherit', width:'100%' }}>
                    <ListItemButton>
                      <ListItemIcon>
                        {item.icon}
                      </ListItemIcon>
                      <Divider orientation="vertical" flexItem sx={{ width: '1px', marginRight: '5px' }} />
                      <ListItemText primary={item.text} sx={{ marginLeft: '10px' }} />
                    </ListItemButton>
                    </a>
                  </ListItem>
                </React.Fragment>
              ))}
            </List>
            <Divider />
            <Typography  gutterBottom sx={{ mt: 2, ml: 2, fontSize:18, fontWeight:600,color: '#424242' }}>
              Social
            </Typography>
            <List>
              {socialItems.map((item, index) => (
                <React.Fragment key={item.text}>
                  <ListItem disablePadding>
                  <a href={item.url} style={{ textDecoration: 'none', color: 'inherit', width:'100%' }}>
                    <ListItemButton>
                      <ListItemIcon>
                        {item.icon}
                      </ListItemIcon>
                      <Divider orientation="vertical" flexItem sx={{ width: '1px',  marginRight: '5px' }} />
                      <ListItemText primary={item.text} sx={{ marginLeft: '10px' }} />
                    </ListItemButton>
                    </a>
                  </ListItem>
                </React.Fragment>
              ))}
            </List>
           
          
          </Drawer>
         
        </div>
      </div>
      
    </div>
  );
}















