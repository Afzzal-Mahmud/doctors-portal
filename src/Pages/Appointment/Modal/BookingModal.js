import React from "react";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
function BookingModal({handleBookingClose,openBooking,bookingData}){
    const {name,time} = bookingData
    function collectData(e){
      alert('submiting')
      e.preventDefault()
    } 
    return(
      <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openBooking}
        onClose={handleBookingClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openBooking}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {name}
            </Typography>
            <form>
            <TextField disabled sx={{width:"100%",my:1}} id="outlined-size-small" defaultValue={time} size="small"/>
            <TextField sx={{width:"100%",my:1}} id="standard-basic" label="Name" variant="standard" />
            <TextField sx={{width:"100%",my:1}} id="standard-basic" label="E-mail" variant="standard" />
            <TextField sx={{width:"100%",my:1}} id="standard-basic" label="Phone" variant="standard" />
            <Button onClick={collectData} sx={{width:"100%",my:1}} variant="contained">Approve</Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
    )
}
export default BookingModal