import React from "react";
import AppoinmentBanner from "../../AppointmentBanner/AppointmentBanner";
import Services from "../../ServicesMain/Services/Services";
import homeChair from "../../../images/chair.png"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './HomeMain.css'
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
function HomeMain() {
    return(
        <>
    <Box className='home-main' sx={{ flexGrow: 1 }}>
      <Container>
      <Grid className='home-main-grid' container spacing={2}>
        <Grid item xs={12} md={6}>
          <h1 className='home-title'>
              Your Smail Start Hear
          </h1>
          <Typography variant="body2" variant="body2" color="text.secondary">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim incidunt facilis, architecto obcaecati tenetur eos a cumque earum quia provident vel ratione aliquam voluptatem ab soluta quae nulla eveniet impedit!
              </Typography>
          <Button variant="contained">Appoinment</Button>
        </Grid>
        <Grid className='home-img-container' item xs={12} md={6}>
          <img style={{height:'330px'}} src={homeChair} alt="" />
        </Grid>
      </Grid>
      </Container>
    </Box>
        <Services></Services>
        <AppoinmentBanner></AppoinmentBanner>
        </>
    )
}
export default HomeMain