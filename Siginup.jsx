import { TextField, Typography,Button } from '@mui/material'
import React from 'react'

const Siginup = () => {
  return (
    <div>
        <br /><br />

        <Typography variant='h3'>Sigin Up</Typography>
        <br /><br />
        <TextField id="outlined-basic" label="Usename" variant="outlined" />
        <br /><br />
        <TextField id="outlined-basic" label="Place" variant="outlined" />
        <br /><br />
        <TextField id="outlined-basic" label="age" variant="outlined" />
        <br /><br />
        <TextField id="outlined-basic" label="Gender" variant="outlined" />
        <br /><br />
        <TextField id="outlined-basic" label="email" variant="outlined" />
        <br /><br />
        <TextField id="outlined-basic" label="password" variant="outlined" type='password' />
        <br /><br />
        <Button variant="contained">Submit</Button>
        


    </div>
  )
}

export default Siginup