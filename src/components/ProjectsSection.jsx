import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Container, Grid } from '@mui/material';

const ProjectsSection = () => {
  return (
    <Container className="project-section-heading" id="projects">
      <Typography sx={{marginTop:'20px', marginBottom:"50px"}} variant="h4" align="center" gutterBottom className="projects-heading">
        Projects
      </Typography>
      
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ maxWidth: '100%'}} >
              <CardActionArea>
                <div className="project-image" style={{ backgroundImage: 'url(/images/chatgpt.png)' }}></div>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Open-Ai Clone
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    This is made using Nodejs, reactjs, python, javascript, and some html and css
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ maxWidth: '100%' }}>
              <CardActionArea>
                <div className="project-image" style={{ backgroundImage: 'url(/images/amazon.png)' }}></div>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    HardHat
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    This is made using Nodejs, reactjs, python, javascript, and some html and css
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ maxWidth: '100%' }}>
              <CardActionArea>
                <div className="project-image" style={{ backgroundImage: 'url(/images/hardhat.png)' }}></div>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Rumango
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    This is made using Nodejs, reactjs, python, javascript, and some html and css
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ maxWidth: '100%', marginBottom: '20px' }}>
              <CardActionArea>
                <div className="project-image" style={{ backgroundImage: 'url(/images/spotify.png)' }}></div>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Ichi-Web
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    This is made using Nodejs, reactjs, python, javascript, and some html and css
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
   
  );
}

export default ProjectsSection;
