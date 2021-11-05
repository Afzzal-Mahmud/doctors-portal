import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../images/doctor.png'
import './Appionment.css'
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

function AppoinmentBanner() {
    return( 
    <Box className='appionment-main' sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid className='doctor-img-container' item xs={12} md={6}>
          <img style={{height:'330px'}} src={doctor} alt="" />
        </Grid>
        <Grid item xs={12} md={6}>
          <h3 style={{color:"#4fc3f7"}}>
              Make An Appoinment
          </h3>
          <Typography variant="body2" style={{color:"#e0f7fa",}}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim incidunt facilis, architecto obcaecati tenetur eos a cumque earum quia provident vel ratione aliquam voluptatem ab soluta quae nulla eveniet impedit!
              </Typography>
          <Button variant="contained">Appoinment</Button>
        </Grid>
      </Grid>
    </Box>
    )
}
export default AppoinmentBanner