import React from 'react'
import { useHistory } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
function Header() {
  const history = useHistory()
  /* go to log in page */
  function goLogIn() {
    history.push('/login')
  }
  const {user,logOut} = useAuth()
    return(
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Link to='/appointment'>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Appionment
            </Typography>
            </Link>
            <Link to='login'>Log In</Link>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            {/* conditioknal rendar based on uesr account */}
            {
              user?.email ? <Button onClick={logOut} color="inherit">Log Out</Button>
              : <Button onClick={goLogIn} color="inherit">Log In</Button>
            }
          </Toolbar>
        </AppBar>
      </Box>
    )
}
export default Header;