import React from "react";
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BookingModal from '../Modal/BookingModal'

function AppiontmentCard({ bookingData,currentDate }) {
  const { name, time } = bookingData
  const [openBooking, setOpenBooking] = React.useState(false);
  const handleBookingOpen = () => setOpenBooking(true);
  const handleBookingClose = () => setOpenBooking(false);
  return (
    <>
        <Grid item xs={4} sm={4} md={4}>
          <Card sx={{ maxWidth: 345 }}>

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {time}
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="outlined" onClick={handleBookingOpen} size="small">Book Now</Button>
            </CardActions>
            {/* Booking modal open on click */}
            <BookingModal
            bookingData={bookingData}
            handleBookingClose={handleBookingClose}
            openBooking={openBooking}
            currentDate ={currentDate}
          ></BookingModal>
          </Card>
        </Grid>
        </>
  )
}
export default AppiontmentCard;