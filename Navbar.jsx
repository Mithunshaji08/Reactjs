import { Button, Typography,AppBar,Toolbar} from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <div> 
    <AppBar>
    <Toolbar>
        <Typography>My App</Typography>
        <Button variant='Contained' color="error">Home</Button>&nbsp;&nbsp;
        <Button variant='Contained' color="error">Login</Button>&nbsp;&nbsp;
    </Toolbar>
     </AppBar></div>
  )
}

export default Navbar
