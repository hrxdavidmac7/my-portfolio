import { Container, Grid, Typography, Box } from '@mui/material';
import React from 'react';

const SkillsSection = () => {
  return (
    <Container sx={{  marginBottom:'60px', marginTop:'30px' }}>
      <Typography sx={{marginTop:'50px', marginBottom:"50px"}} variant="h4" align="center" gutterBottom className="skill-heading">
        What I know
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3} >
          <Box className="f1 flx flx-col g4 bg-cp p4 rd-md shdw">
            <Typography variant="subtitle1" className="tp fm tl tw">Frontend</Typography>
            <div className="flx flx-wrap g2">
              <div className="rd-md bg-b txs tp p2 bd bde2">HTML</div>
              <div className="rd-md bg-b txs tp p2">CSS</div>
              <div className="rd-md bg-b txs tp p2 bd bdb5">Tailwind</div>
              <div className="rd-md bg-b txs tp p2 bd bdy5">Javascript</div>
              <div className="rd-md bg-b txs tp p2">Typescript</div>
              <div className="rd-md bg-b txs tp p2 bd bdb5">React Js</div>
              <div className="rd-md bg-b txs tp p2 bd bdb">Next Js 13</div>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3} >
          <Box className="f1 flx flx-col g4 bg-cp p4 rd-md shdw">
            <Typography variant="subtitle1" className="tp fm tl tw">Back-end</Typography>
            <div className="flx flx-wrap g2">
              <div className="rd-md bg-b txs tp p2 bd bde2">Servlet</div>
              <div className="rd-md bg-b txs tp p2">JSP</div>
              <div className="rd-md bg-b txs tp p2 bd bdb5">Nodejs</div>
              <div className="rd-md bg-b txs tp p2 bd bdy5">Django</div>
              <div className="rd-md bg-b txs tp p2">Express Js</div>
              <div className="rd-md bg-b txs tp p2 bd bdb5">Next auth</div>
              <div className="rd-md bg-b txs tp p2">Springboot</div>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3} >
          <Box className="f1 flx flx-col g4 bg-cp p4 rd-md shdw">
            <Typography variant="subtitle1" className="tp fm tl tw">Database</Typography>
            <div className="flx flx-wrap g2">
              <div className="rd-md bg-b txs tp p2 bd bde2">MYSQL</div>
              <div className="rd-md bg-b txs tp p2">Oracle</div>
              <div className="rd-md bg-b txs tp p2 bd bdb5">MongoDB</div>
              <div className="rd-md bg-b txs tp p2 bd bdy5">DB2</div>
              <div className="rd-md bg-b txs tp p2">SQL Lite</div>
              <div className="rd-md bg-b txs tp p2 bd bdb5">NoSQL</div>
              <div className="rd-md bg-b txs tp p2 bd bdb">JDBC</div>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3} sx={{marginBottom:'20px'}} >
          <Box className="f1 flx flx-col g4 bg-cp p4 rd-md shdw">
            <Typography variant="subtitle1" className="tp fm tl tw">Familiarities</Typography>
            <div className="flx flx-wrap g2">
              <div className="rd-md bg-b txs tp p2 bd bde2">Google Cloud</div>
              <div className="rd-md bg-b txs tp p2 bd bdb5">Microsoft Azure</div>
              <div className="rd-md bg-b txs tp p2 ">Qwiklabs</div>
              <div className="rd-md bg-b txs tp p2 bd bdy5">Linux OS</div>
              <div className="rd-md bg-b txs tp p2">Bash Scripting</div>
              <div className="rd-md bg-b txs tp p2 bd bdb">Python</div>
            </div>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default SkillsSection;
