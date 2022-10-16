import { Box, Button, ButtonGroup, Grid, Paper, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import React from 'react'
import { styled } from '@mui/material/styles';
import { display, fontFamily } from '@mui/system';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
const Header  = () => {
  return (
   <Box sx={{display:"flex",marginTop:"40px",width:"100%",justifyContent:"center",marginLeft:"-15px"}}>
    <Stack sx={{maxWidth:"1100px",justifyContent:"center"}} spacing={4} direction="row" >
    <Box sx={{width:"45%",textAlign:"center",paddingY:"70px"}}>
       <img src="../images/girlWithLap.png" alt="Girl with Laptop" style={{width:"100%"}}/> 
   </Box>
    <Box sx={{width:"45%",paddingY:"150px"}}>
        <Typography variant='h4' sx={{fontSize:"45px",fontFamily:"aria-bold",fontWeight:{md:600,sm:450},borderBottom:"2px solid green"}}>For every student, <br/>
        every classroom,<br/>
        Real Results
       </Typography>
       <Typography sx={{lineHeight:"200%",paddingY:"10px",fontSize:"20px"}}>We’re a nonprofit with the mission to provide a free, world-class education for anyone, anywhere.</Typography>
        <ButtonGroup variant="contained" sx={{boxShadow:"none",width:"100%"}}  >
            <Button sx={{width:"33%",marginLeft:"2px"}}>Learners</Button>
            <Button sx={{width:"33%",marginLeft:"2px"}}>Teachers</Button>
            <Button sx={{width:"33%",marginLeft:"2px"}}>Parents</Button>
        </ButtonGroup>
    </Box>
    </Stack>
   </Box>  
  )
}

export default Header;