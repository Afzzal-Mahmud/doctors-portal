import React, { useState } from "react";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import useAuth from "../../../Hooks/useAuth";

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
function BookingModal({handleBookingClose,openBooking,bookingData,currentDate}){
    const {user} = useAuth()
    const {name,time} = bookingData
    
    /* user initial info from his login status */
    const initialInfo = {
      patientName : user.displayName,
      email : user.email,
      phone : ''
    }

    const [appiontmentInfo,setAppiontmentInfo] = useState(initialInfo)

    /* collecting appiontment data */
    function collectAppiontmentData(e){
      e.preventDefault()
      /* collect user appiontment data */
      const userAppiontmentInfo = {...appiontmentInfo,
                                  appiontmentType:name,
                                  appiontmentDate : currentDate.toDateString(),
                                  appiontmentTime : time
                                }
                                console.log(userAppiontmentInfo)
    } 

    /* handle appiontment onBlur */

    function handleAppiontmentOnBlur(e) {
      /* which text area you clicked */
      const field = e.target.name;
      const value = e.target.value;
      /* ek shate onekgula state ke update korte hole ager info ta copy kore nite hoy */
      const updatedAppiontmentInfo = {...appiontmentInfo}
      updatedAppiontmentInfo[field] = value
      setAppiontmentInfo(updatedAppiontmentInfo)
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
            {/* type of appiontment */}
            <Typography name='appiontmentType' onBlur={handleAppiontmentOnBlur} id="transition-modal-title" variant="h6" component="h2">
              {name}
            </Typography>
            <form onSubmit={handleAppiontmentOnBlur}>
            
            {/* time of appiontment */}
            <TextField disabled sx={{width:"100%",my:1}} onBlur={handleAppiontmentOnBlur} id="outlined-size-small" name='appiontmentTime' defaultValue={time} size="small"/>

            {/* date of appiontment */}
            <TextField disabled sx={{width:"100%",my:1}}  id="outlined-size-small" name='appiontmentDate' defaultValue={currentDate.toDateString()} size="small"/>

            {/* patient name */}
            <TextField name='patientName' defaultValue={user.displayName} sx={{width:"100%",my:1}} onBlur={handleAppiontmentOnBlur} id="standard-basic" label="Patient Name" variant="standard" />
            
            {/* patient email */}
            <TextField name='email' defaultValue={user.email} sx={{width:"100%",my:1}} onBlur={handleAppiontmentOnBlur} id="standard-basic" label="E-mail" variant="standard" />
            
            {/* patient phone */}
            <TextField name='phone' sx={{width:"100%",my:1}} onBlur={handleAppiontmentOnBlur} id="standard-basic" label="Phone" variant="standard" />

            <Button type='submit' onClick={collectAppiontmentData} sx={{width:"100%",my:1}} variant="contained">Approve</Button>

            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
    )
}
export default BookingModal