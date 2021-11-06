import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Calender from "../../Components/Shaired/Calender/Calender";
import chair from '../../images/chair.png'
import AvailableAppiontment from "./AvailableAppiontment/AvailableAppiontment";

function Appointment() {
    const [date, setDate] = React.useState(new Date());
return(
    <>
    <Box className='home-main' sx={{ flexGrow: 1 }}>
            {/* home-img-container,came from home components */}
      <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Calender date={date} setDate={setDate}></Calender>
        </Grid>
        <Grid className='home-img-container' item xs={12} md={6}>
          <img style={{height:'330px'}} src={chair} alt="" />
        </Grid>
      </Grid>


    {/* available appiontment are the sibling of thes section*/}

    <AvailableAppiontment 
                currentDate={date}>
    </AvailableAppiontment>

      </Container>
    </Box>
    </>
)
    
}
export default Appointment;