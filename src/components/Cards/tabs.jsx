import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import timelineItemClasses from '@mui/lab/TimelineItem';
import TimelineOppositeContent, {
    timelineOppositeContentClasses,
  } from '@mui/lab/TimelineOppositeContent';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider'  }}>
        <Tabs value={value} onChange={handleChange}  variant="scrollable" scrollButtons="auto" aria-label="basic tabs example">
          <Tab label="Experience" {...a11yProps(0)} sx={{fontSize:'16px'}} />
          <Tab label="Position of Resposibility" {...a11yProps(1)} sx={{fontSize:'16px'}} />
          <Tab label="Certificates" {...a11yProps(2)} sx={{fontSize:'16px'}} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0} >
      <Typography sx={{fontSize:'20px', fontWeight:500}} > I am Technical Enthisiast with proper Training, I dont have Industry experience but have project experince and hands on. I believe its would be a good match joining You.</Typography>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.3, textAlign:'left'
        },
      }}
     
    >
      
      <TimelineItem >
        <TimelineOppositeContent color="textSecondary" >
          Sep 2023
        </TimelineOppositeContent >
        <TimelineSeparator >
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent >Microsoft Student Ambassador</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          Present
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>IIT Bombay Campus Ambassador</TimelineContent>
      </TimelineItem>
    </Timeline>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <Timeline>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Microsoft Azure Ai 900 Certified</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Oracle Cloud Data Management Certified</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>Goldman Sachs Job Simulation</TimelineContent>
      </TimelineItem>
    </Timeline>
       
      </CustomTabPanel>
    </Box>
  );
}