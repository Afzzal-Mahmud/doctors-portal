import React,{ useEffect, useState } from "react"
import Box from "@mui/system/Box"
import Grid from '@mui/material/Grid';
import AppiontmentCard from "./AppiontmentCard"

function AvailableAppiontment({currentDate}) {
    const [appiontmentCard,setAppiontmentCard] = useState([])
    useEffect(() =>{
        fetch('./booking.json')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setAppiontmentCard(data)
        })
    },[])
    return(
        <Box>
            <h3>Available Appionment {currentDate.toDateString()}</h3>

            {/* card of appiontment */}
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {
            appiontmentCard.map(singleCard => <AppiontmentCard
            key={singleCard.key}
            bookingData = {singleCard}
            /* send current date to appiontment card then BookingModal */
            currentDate = {currentDate}
            ></AppiontmentCard>)
          }
            </Grid>
        </Box>
    )
}
export default AvailableAppiontment