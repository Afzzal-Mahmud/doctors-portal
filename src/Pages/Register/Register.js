import React, { useState } from 'react'
import { NavLink, useLocation, useHistory } from 'react-router-dom'

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

import useAuth from '../../Hooks/useAuth'
import loginImg from '../../images/login.png'

function Register() {
    /* user registration function */
    const {user,registerUser,goolgeSignIn,isLoading,err} = useAuth()
    const [logInData,setLogInData] = useState({})

    /* fro user back to wher he wants to go */
    const location = useLocation()
    const history = useHistory()

    function handleOnBlur(e) {
        const field = e.target.name;
        const value = e.target.value;
        const newLogInData = {...logInData}
        newLogInData[field] = value
        setLogInData(newLogInData)
        console.log(field,value)
    }
    function handleLogInSubmit(e){
        e.preventDefault()
        if(logInData.password !== logInData.password2){
            alert('password did not matched')
            return
        }else{
            registerUser(logInData.email,logInData.password,location,history,logInData.name)
        }
    }
    return(
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Register</Typography>
                    {/* if the loading state is true then show the spinar */}
                    {!isLoading && 
                   
                        <form onSubmit={handleLogInSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Name"
                            type="text"
                            name="name"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            type="email"
                            name="email"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                            variant="standard" />

                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Confirm password"
                            type="password"
                            name="password2"
                            onBlur={handleOnBlur}
                            variant="standard" />

                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Register</Button>

                        {/* google log in */}
                        <Button onClick={() =>goolgeSignIn(location,history)} sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Log In With Google</Button>

                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/login">
                            <Button variant="text">Already Register ? LogIn</Button>
                        </NavLink>
                        
                    </form> }

            {isLoading &&
                    <Box sx={{ display: 'flex'}}>
                    <CircularProgress sx={{ textAlign: 'center' }} />
                </Box> 
            }
            {/* see the successfully login */}
            {user?.email && 
            <Alert severity="success" color="info">
                Account created successfully — check it out!
            </Alert>}
                {/* show error */}
            {err && 
            <Alert severity="error">
                {err}
            </Alert>}

                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={loginImg} alt="" />
                </Grid>
            </Grid>
        </Container>
    )
}
export default Register