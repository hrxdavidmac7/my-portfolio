import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Input, TextField, Button, Container } from '@mui/material';
import { useState } from 'react';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function () {
  return (
    <Container sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid  xs={12} md={5} lg={4}>
          <Item><TextField fullWidth 
          id="outlined-textarea"
          label="Email Subscription"
          placeholder="Enter Your Email"
          required></TextField></Item><br/>
          <Button variant='contained' > Submit</Button>
        </Grid>
        <Grid container xs={12} md={7} lg={8} spacing={4}>
          <Grid xs={6} lg={6}>
            <Item>
              <Box
                id="category-a"
                sx={{ fontSize: '12px', textTransform: 'uppercase' }}
              >
                Category A
              </Box>
              <Box component="ul" aria-labelledby="category-a" sx={{ pl: 2 }}>
                <li>Home</li>
                <li>Dashboard</li>
                <li>Resume</li>
              </Box>
            </Item>
          </Grid>
          <Grid xs={6} lg={6}>
            <Item>
              <Box
                id="category-b"
                sx={{ fontSize: '12px', textTransform: 'uppercase' }}
              >
               Quick Links
              </Box>
              <Box component="ul" aria-labelledby="category-b" sx={{ pl: 2}}>
                <li>Trending</li>
                <li>Our Company</li>
                <li>Hrxdavidmac</li>
              </Box>
            </Item>
          </Grid>
          
          
        </Grid>
        <Grid
          xs={12}
          container
          justifyContent="space-between"
          alignItems="center"
          flexDirection={{ xs: 'column', sm: 'row' }}
          sx={{ fontSize: '12px' }}
        >
          <Grid sx={{ order: { xs: 2, sm: 1 } }}>
            <Item>© Anubhav Copyright</Item>
          </Grid>
          <Grid container columnSpacing={1} sx={{ order: { xs: 1, sm: 2 } }}>
            <Grid>
              <Item>Instagram</Item>
            </Grid>
            <Grid>
              <Item>Facebook</Item>
            </Grid>
            <Grid>
              <Item>Twitter</Item>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}