import { Typography,Stack,Box, Grid} from '@mui/material'
import { styled } from '@mui/material/styles';
import ArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import React from 'react'
const StyleBox = styled(Box)(({theme})=>({
    disply:"flex",
    margin:"120px 50px",
    flexDirection:"row",
    [theme.breakpoints.up('sm')]:{
        flexDirection:"column"
    }
}))
const AcedemyWork = () => {
  return (
    <Box sx={{marginTop:"10px",paddingBottom:"50px"}}>
      <Box sx={{display:{sm:"block",md:"none"},paddingY:"100px",textAlign:"center"}} >
        <ArrowDownIcon />
      </Box>
       <Typography variant='h4' sx={{textAlign:"center",marginTop:"13px"}}>Why Khan Academy works</Typography> 
       <Box sx={{display:"flex",flexDirection:{xs:"column",sm:"column",md:"row"},marginTop:"20px"}}>
        <Box  component="div" sx={{display:"flex",width:{xs:"70%",sm:"50%",md:"30%"},flexDirection:{xs:"column",sm:"row",md:"column"},marginLeft:"auto",marginRight:"auto",marginTop:"30px"}} >
        
          <Box sx={{paddingTop:"40px",textAlign:"center"}} >
            <img src="../images/personalized_learning_icon.png" alt="image" width={"110px"} height={"100"} />
           </Box>
          <Box sx={{textAlign:"center",width:"100%"}}>
            <Typography variant='h5' >Personalized learning</Typography>
            <Typography sx={{marginTop:"20px",fontSize:"0.85rem"}}>Students practice at their own pace, first filling in gaps in their understanding and then accelerating their learning.</Typography>
          </Box>
          
        </Box>
        <Box  component="div" sx={{display:"flex",width:{xs:"70%",sm:"50%",md:"30%"},flexDirection:{xs:"column",sm:"row",md:"column"},marginLeft:"auto",marginRight:"auto",marginTop:"30px"}} >
        
        <Box sx={{paddingTop:"40px",textAlign:"center"}} >
            <img src="../images/trusted_content_icon.png" alt="image" width={"110px"} />
           </Box>
          <Box sx={{textAlign:"center",width:"100%"}}>
            <Typography variant='h5' >Personalized learning</Typography>
            <Typography sx={{marginTop:"20px",fontSize:"0.85rem"}}>Students practice at their own pace, first filling in gaps in their understanding and then accelerating their learning.</Typography>
          </Box>
        </Box>
     <Box  component="div" sx={{display:"flex",width:{xs:"70%",sm:"50%",md:"30%"},flexDirection:{xs:"column",sm:"row",md:"column"},marginLeft:"auto",marginRight:"auto",marginTop:"30px"}} >
        
          <Box sx={{paddingTop:"40px",textAlign:"center"}} >
            <img src="../images/empower_teachers_icon.png" alt="image" width={"110px"} />
           </Box>
          <Box sx={{textAlign:"center",width:"100%"}}>
            <Typography variant='h5' >Personalized learning</Typography>
            <Typography sx={{marginTop:"20px",fontSize:"0.85rem"}}>Students practice at their own pace, first filling in gaps in their understanding and then accelerating their learning.</Typography>
          </Box>
          
        </Box>
      </Box>
    </Box>
  )
}

export default AcedemyWork