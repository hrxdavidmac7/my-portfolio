import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Container } from '@mui/material';

export default function Contact() {
  return (
    <form>
      <Box id="contact"
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
     <Container>
     <div>
      <TextField
          id="outlined-textarea"
          label="Name"
          placeholder="Enter Your Name"
          required="true"
          multiline
        /><br></br>
        <TextField
          id="outlined-textarea"
          label="Email"
          placeholder="Enter Your Email"
          required="true"
          multiline
        /><br/>
        <TextField
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={20}
          defaultValue="Drop Message here......"
        />
      </div>
      <Button id='editicon' variant='outlined'> Send</Button>
     </Container>
     
     
    </Box>
    </form>
  );
}