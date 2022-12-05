import { Box, Typography } from '@mui/material'
import React from 'react'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'


const Footer = () => {
  return (
    <Box sx={{ margin: "0", backgroundColor: "#0b2149", coloe: "white", textAlign: "center", paddingY: "40px", color: "white" }}>
      <Grid2 container justifyContent={"space-around"} >
        <Grid2 xs={12} md={3} sx={{ maxWidth: "400px"}}>
          <Typography sx={{ width: "80%", textAlign: "center", paddingBottom: "25px",fontSize:"22px",padding:"40px 40px" }}>  Our mission is to provide a free, world-class education to anyone, anywhere.
          </Typography>
          <Typography  sx={{ width: "80%", textAlign: "center",fontSize:"25px",padding:"0 40px" }}>  Khan Academy is a 501(c)(3) nonprofit organization. Donate or volunteer today!</Typography>
        </Grid2>
        <Grid2 xs={4} md={3}>
          <ul style={{listStyleType:"none"}}>
            <li style={{padding:"15px 5px"}}>About</li>
            <li style={{padding:"15px 5px"}}>News</li>
            <li style={{padding:"15px 5px"}}>Impact</li>
            <li style={{padding:"15px 5px"}}>Our content specialists</li>
            <li style={{padding:"15px 5px"}}>Our leadership</li>
            <li style={{padding:"15px 5px"}}>Our supporters</li>
            <li style={{padding:"15px 5px"}}>Our contributors</li>
            <li style={{padding:"15px 5px"}}>Our finances</li>
            <li style={{padding:"15px 5px"}}>
              Careers</li>
            <li style={{padding:"15px 5px"}}>Internships</li>
          </ul>
        </Grid2>
        <Grid2 xs={4} md={3}>
        <ul style={{listStyleType:"none"}}>
          <li style={{padding:"15px 5px"}}>Contact</li>
            <li style={{padding:"15px 5px"}}>Help center</li>
            <li style={{padding:"15px 5px"}}>Support community</li>
            <li style={{padding:"15px 5px"}}>Share your story</li>
            <li style={{padding:"15px 5px"}}>Pres</li>
          </ul>
    
      
        <ul style={{listStyleType:"none"}}>
          <li style={{padding:"15px 5px"}}>Download your apps</li>
            <li style={{padding:"15px 5px"}}>iOS app</li>
            <li style={{padding:"15px 5px"}}>Android App</li>
          </ul>
       </Grid2>
        <Grid2 xs={4} md={3}>
          <ul style={{listStyleType:"none"}}>
            <li style={{padding:"15px 5px"}}>About</li>
            <li style={{padding:"15px 5px"}}>News</li>
            <li style={{padding:"15px 5px"}}>Impact</li>
            <li style={{padding:"15px 5px"}}>Our content specialists</li>
            <li style={{padding:"15px 5px"}}>Our leadership</li>
            <li style={{padding:"15px 5px"}}>Our supporters</li>
            <li style={{padding:"15px 5px"}}>Our contributors</li>
            <li style={{padding:"15px 5px"}}>Our finances</li>
            <li style={{padding:"15px 5px"}}>
              Careers</li>
            <li style={{padding:"15px 5px"}}>Internships</li>
          </ul>
        </Grid2>
      </Grid2>
    </Box>
  )
}

export default Footer