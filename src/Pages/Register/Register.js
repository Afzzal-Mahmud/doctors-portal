import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

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
    const {user,registerUser,isLoading,err} = useAuth()
    const [logInData,setLogInData] = useState({})
    function handleOnChange(e) {
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
            registerUser(logInData.email,logInData.password)
        }
    }
    return(
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Register</Typography>
                    {/* if the loading state is true then show the spinar */}
                    {isLoading ?  
                    <Box sx={{ display: 'flex'}}>
                        <CircularProgress sx={{ textAlign: 'center' }} />
                     </Box> :
                        <form onSubmit={handleLogInSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            type="email"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard" />

                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Confirm password"
                            type="password"
                            name="password2"
                            onChange={handleOnChange}
                            variant="standard" />

                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Register</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/login">
                            <Button variant="text">Already Register ? LogIn</Button>
                        </NavLink>
                        
                    </form>}

            {user?.email && 
            <Alert severity="success" color="info">
                Account created successfully — check it out!
            </Alert>}

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