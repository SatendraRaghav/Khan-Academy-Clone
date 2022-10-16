import { AppBar, IconButton,Box, Toolbar, Typography, Button, InputBase, ButtonGroup, } from '@mui/material'
import React, { useState } from 'react'
import SchoolIcon from '@mui/icons-material/School';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Search from '@mui/icons-material/Search';
import { styled ,alpha} from '@mui/material/styles';


const SearchStyled = styled('div')(({theme})=>({
    position:"relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor : "#E0E0E0",
    fontWeight:"bolder",
    '&:hover':{
        backgroundColor : "#D1D1D1",  
    },
    padding:theme.spacing(0.5),
    paddingLeft:theme.spacing(1),
    margin:theme.spacing(2),
    display:"none",
    [theme.breakpoints.up('md')]:{
    display:"flex",
    alignItems:"center"  ,
    }
}))
const SearchIconWrapper = styled('div')(({theme})=>({
    position:"absolute",
    right:0,
    padding:theme.spacing(2),
    display:"flex",
    alignItems:"center"  ,
}))
const StyledInputBase = styled(InputBase)(({theme})=>({
    position:"relative",
    'input':{
         '&::placeholder':{
       color:"blue"
    } 
    }
  
}))
const Navbar = () => {
    const[age,setAge] = useState("Age")
    const handleChange = (e)=>{
        const {value} = e.target;
        setAge(value)
    }
  return (
    <div>
        <Box sx={{flexGrow:1}}>
        <AppBar>
            <Toolbar sx={{backgroundColor:"white"
                 }}>
                <Button sx={{display:{xs:"none",sm:"none",md:"block"},'&:hover':{
                    borderBottom:"4px solid blue"
                } }}>
                    <Typography>courses   <IconButton>
                        <ExpandMoreIcon />
                    </IconButton></Typography>
                  
                </Button>
              <SearchStyled>
                
                <StyledInputBase 
                placeholder='Search..'/>
                <SearchIconWrapper>
                <SearchIcon />
                </SearchIconWrapper>
            </SearchStyled>
            <Box sx={{flexGrow:1,display:{xs:"none",sm:"none",md:"flex"}}} />
                <IconButton color="success">
                  <SchoolIcon />
                </IconButton>
                <Typography variant = "h6"  sx={{color:"#000366",fontSize:"larger",fontWeight:"bolder"}} component="div">
                    Khan Academy
                </Typography>
                <Box sx={{flexGrow:1}} />
                <ButtonGroup sx ={{color:"#1900B3",display:{xs:"block",md:"none"}}}>
                <IconButton  >
                    <SearchIcon />
                </IconButton>
                <IconButton >
                 <MenuIcon />
                </IconButton>
                </ButtonGroup>
                <ButtonGroup  sx ={{color:"#1900B3",display:{xs:"none",md:"block"}}}>
                <Button variant='text'>
                  Donate
                </Button>
                <Button variant='text'>
                 Log In
                </Button>
                <Button variant='text'>
                    Sign up
                </Button>
              </ButtonGroup>
            </Toolbar>
        </AppBar>
        </Box>
    </div>
  )
}

export default Navbar