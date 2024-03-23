import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

const HireMePage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add your form submission logic here
  };

  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Hire Me
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1" paragraph>
            Thank you for considering me for your project. I am excited about the opportunity to work with you.
          </Typography>
          <Typography variant="body1" paragraph>
            I am a passionate and experienced professional ready to take on new challenges. With my skills in [mention your skills], I am confident in my ability to deliver high-quality work.
          </Typography>
          <Typography variant="body1" paragraph>
            Please feel free to contact me using the form below or via email at [your email address].
          </Typography>
          <Typography variant="body1" paragraph>
            I look forward to hearing from you and discussing how I can contribute to your project's success.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Your Name"
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Your Email"
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HireMePage;
