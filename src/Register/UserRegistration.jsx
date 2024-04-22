
import React from 'react';

import { Button, TextField, Grid, Typography, Link } from '@mui/material';


    const UserRegisteration=()=>{
            return (
              <Grid container direction="column" alignItems="center" spacing={4}>
              <Grid item>
                <Typography  variant="h5">Create Accounts</Typography>
                <Typography fontSize={12} variant="h6">Lets Create Your Account</Typography>
              </Grid>
              <Grid item>
                <TextField label="Full Name" variant="outlined" fullWidth />
              </Grid>
              <Grid item>
                <TextField label="Email Address" variant="outlined" fullWidth />
              </Grid>
              <Grid item>
                <TextField label="Password" type="password" variant="outlined" fullWidth />
              </Grid>
              <Grid item>
        <Button variant="contained" color="primary" fullWidth>
          Sign Up
        </Button>
      </Grid>
      <Grid item>
        <Typography variant="body1">
          or sign up with
        </Typography>
      </Grid>
      {/* Add social media buttons here */}
      <Grid item>
        <Link href="#" variant="body2">
          Already have an account? Sign in
        </Link>
      </Grid>
    </Grid>
              
            );
          
    }
    export default UserRegisteration;