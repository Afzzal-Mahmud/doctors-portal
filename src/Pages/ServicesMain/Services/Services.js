import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from "@mui/material";
import ServicesCard from "../ServicesCard/ServicesCard";
import Typography from "@mui/material/Typography";

function Services(){
  const [servicesData ,setServicesData] = useState([])

  useEffect(() =>{
    fetch('./services.json')
    .then(Response => Response.json())
    .then(data => {
      setServicesData(data)
      console.log(data)
    })
  },[])
  
    return(
      <Box sx={{ flexGrow: 1 , textAlign: 'center'}}>
        <Typography sx={{  fontWeight: 600, m:5 }} gutterBottom variant="h4" component="div">
          Services
        </Typography>
        <Container>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {
            servicesData.map(services => <ServicesCard
            key={services.image}
            servicesObject = {services}
            ></ServicesCard>)
          }
      </Grid>
      </Container>
    </Box>
    )
}
export default Services