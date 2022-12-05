import { Button, ButtonGroup, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'

const JoinAcademy = () => {
  return (
    <Box sx={{paddingY:"100px"}} >
        
            <Typography  sx={{fontSize:{xs:"5.5vw",md:"3.8vw",lg:"3.2vw"}, fontWeight:"400",textAlign:"center"}}>Join Khan Academy today</Typography>
         <Box sx={{width:"300px",marginRight:"auto",marginLeft:"auto"}} >
        <ButtonGroup orientation='vertical'  variant="contained" size="large" sx={{width:"100%",marginTop:"25px"}} >
            <Button sx={{marginY:"10px",paddingY:"10px", backgroundColor:"blue"}}>Learners</Button>
            <Button sx={{marginY:"10px",paddingY:"10px", backgroundColor:"blue"}}>Teachers</Button>
            <Button sx={{marginY:"10px",paddingY:"10px", backgroundColor:"blue"}}>Parents</Button>
            <Button  sx={{marginY:"10px",paddingY:"10px", backgroundColor:"blue"}} >Give today</Button>
        </ButtonGroup>
        </Box>
        </Box>
  )
}

export default JoinAcademy