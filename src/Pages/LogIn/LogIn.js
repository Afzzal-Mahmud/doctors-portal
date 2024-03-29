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

function LogIn() {
    const {user,logInUser,isLoading,err} = useAuth()
    const [logInData,setLogInData] = useState({})

    /* fro user back to wher he wants to go */
    const location = useLocation()
    const history = useHistory()

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
        logInUser(logInData.email,logInData.password,location,history)
    }
    return(
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Login</Typography>
                    {isLoading? <Box sx={{ display: 'flex'}}>
                             <CircularProgress sx={{ textAlign: 'center' }} />
                                </Box> 
                    :<form onSubmit={handleLogInSubmit}>
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

                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/register">
                            <Button variant="text">New User? Please Register</Button>
                        </NavLink>
                        
                    </form>}
                </Grid>
                {user?.email && 
                <Alert severity="success" color="info">
                    Log In successfully — check it out!
                </Alert>}

            {err && 
            <Alert severity="error">
                {err}
            </Alert>}
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={loginImg} alt="" />
                </Grid>
            </Grid>
        </Container>
    )
}
export default LogIn