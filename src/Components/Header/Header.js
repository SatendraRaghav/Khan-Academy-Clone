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
    <Stack sx={{maxWidth:"1100px",justifyContent:"center", display:{xs:"none",md:"flex"}}} spacing={4} direction="row" >
    <Box sx={{width:"45%",textAlign:"center",paddingY:"70px"}}>
       <img src="../images/girlWithLap.png" alt="Girl with Laptop" style={{width:"100%"}}/> 
   </Box>
    <Box sx={{width:"45%",paddingY:"120px",marginRight:"150px"}}>
        <Typography  sx={{fontSize:"40px",fontFamily:"aria-bold",fontWeight:600,borderBottom:"2px solid green"}}>For every student, <br/>
        every classroom,<br/>
        Real Results
       </Typography>
       <Typography sx={{lineHeight:"200%",paddingY:"10px",fontSize:"20px"}}>We’re a nonprofit with the mission to provide a free, world-class education for anyone, anywhere.</Typography>
        <ButtonGroup variant="contained" sx={{boxShadow:"none",width:"100%"}}  >
            <Button sx={{width:"31%",marginLeft:"1px","&:hover":{outline:"2px solid blue",outlineOffset:"1px"}}}>Learners</Button>
            <Button sx={{width:"31%",marginLeft:"8px","&:hover":{outline:"2px solid blue",outlineOffset:"1px"}}}>Teachers</Button>
            <Button sx={{width:"31%",marginLeft:"8px","&:hover":{outline:"2px solid blue",outlineOffset:"1px"}}}>Parents</Button>
        </ButtonGroup>
    </Box>
    </Stack>
    <Box sx={{display:{xs:"block",md:"none"},position:"relative"}}>
      <Box sx={{textAlign:"center"}}>
      <img src="../images/girlWithLap.png" alt="Girl with Laptop" style={{width:"75%"}}/>
      </Box>
      <Box sx={{width:{xs:"70%",sm:"50%"},zIndex:2,position:"absolute",top:"60%",marginLeft:"50px",}}>
       {/* <Typography style={{fontSize:"20px",fontFamily:"aria-bold",fontWeight:600,borderBottom:"2px solid green",backgroundColor:"white",zIndex:2}}> */}
        <span style={{fontSize:"32px",fontFamily:"aria-bold",fontWeight:600,backgroundColor:"white",zIndex:2}}>For every student, <br/>
        every classroom,<br/>
        Real Results</span>
        {/* </Typography> */}
       <Typography sx={{lineHeight:"200%",paddingY:"10px",fontSize:"15px"}}>We’re a nonprofit with the mission to provide a free, world-class education for anyone, anywhere.
       {/* Learners,teachers and parents: */}
       </Typography>
        <Button variant='contained' sx={{padding:"15px 25px","&:hover":{outline:"2px solid blue",outlineOffset:"3px"}}}>Start here</Button>
        </Box>
    </Box>
    </Box>
  )
}

export default Header;