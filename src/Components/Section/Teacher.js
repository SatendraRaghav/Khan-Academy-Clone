import { Box, Typography, Button,Stack } from '@mui/material'
import React from 'react'

const Teacher = () => {
    return (
        <>
            <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "column", md: "row" }, justifyContent: { xs: "center", sm: "center", md: "space-between" }, paddingTop: "100px", position: "relative" }}>
                <Box sx={{ width: { sm: "60%", md: "46%" }, textAlign: "center", marginRight: "auto", marginLeft: "auto", }}>
                    <img src="../images/teacher.png" alt="teacherImage" width={"100%"} /></Box>
                <Box sx={{ width: { sm: "60%", md: "46%" }, maxWidth: "450px", marginRight: "auto", marginLeft: "auto" }}>
                    <Typography sx={{ color: "gray", textAlign: "left", marginBottom: "15px" }} >Teachers</Typography>
                    <Typography variant='h3' sx={{ fontSize: { sm: "25px", md: "35px" } }}>“I’m finally able to truly differentiate my classroom. This has been priceless for my students’ engagement.” </Typography>
                    <Typography sx={{ color: "gray", textAlign: "left", fontSize: "15px", marginY: "15px", maxwidth: "600px" }}>UDAYA LAKSHMI PALAPALA / Middle school Coordinator / Hyderabad, Telangana</Typography>
                    <Typography>We empower teachers to support their entire classroom. 90% of US teachers who have used Khan Academy have found us effective.
                    </Typography>
                    <Button variant='contained' sx={{ marginTop: "40px", paddingX: "30px", backgroundColor: "blue", paddingY: "10px" }}>Teachers,start here</Button>
                </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "column", md: "row" }, justifyContent: { xs: "center", sm: "center", md: "space-between" }, paddingTop: "100px", position: "relative" }}>
                <Box sx={{ width: { sm: "60%", md: "46%" }, maxWidth: "450px", marginRight: "auto", marginLeft: "auto" }}>
                    <Typography sx={{ color: "gray", textAlign: "left", marginBottom: "15px" }} >LEARNERS AND STUDENTS</Typography>
                    <Typography variant="h4" sx={{ marginY: "25px" }}>You can learn anything.</Typography>
                    <Typography>Build a deep, solid understanding in math, science, grammar, history, SAT®, and more.</Typography>
                    <Button variant="contained" sx={{ marginY: "25px", backgroundColor: "blue" }}>learners,start here</Button>
                </Box>
                <Box sx={{ width: { sm: "60%", md: "46%" }, textAlign: "center", marginRight: "auto", marginLeft: "auto", }}>
                    <img src="../images/laptop_collag.png" alt="teacherImage" width={"100%"} />
                </Box>
            </Box>
            <Box sx={{ paddingY: "100px", paddingX: "50px",Width:"80%",marginLeft:"auto",marginRight:"auto" }}>
                <Typography variant="h4" fontSize={"22px"}>“When I was a child, I used to fear mathematics. But now, I am in love with mathematics because of Khan Academy.”</Typography>

                    <Stack direction="row">
                        <Box sx={{ display:"flex",justifyContent:"flex-end",alignItems:"center",width:"80%" }}>
                            <span>
                              <span> ANJALI</span>       <br />
                                GURUGRAM, HARYANA
                            </span>
                            </Box >
                            <Box sx={{}} >
                                <img src="../images/anjali.png" alt="anjali-image" width={"100px"} />
                            </Box>
                        </Stack>
            </Box>
            <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "column", md: "row" }, justifyContent: { xs: "center", sm: "center", md: "space-between" }, paddingTop: "100px", position: "relative" }}>
                <Box sx={{ width: { sm: "60%", md: "46%" }, textAlign: "center", marginRight: "auto", marginLeft: "auto", }}>
                    <img src="../images/math-unicorn.png" alt="teacherImage" width={"100%"} /></Box>
                <Box sx={{ width: { sm: "60%", md: "46%" }, maxWidth: "450px", marginRight: "auto", marginLeft: "auto" }}>
                    <Typography sx={{ color: "gray", textAlign: "left", marginBottom: "25px" }} >TOGETHER WE CAN MAKE A DIFFERENCE</Typography>
                    <Typography variant='h3' sx={{ fontSize: { sm: "25px", md: "35px" } }}>Every child deserves the chance to learn. </Typography>
                    <Typography sx={{marginY:"30px"}}>Across the globe, 617 million children are missing basic math and reading skills. We’re a nonprofit delivering the education they need, and we need your help. You can change the course of a child’s life.</Typography>
                    <Button variant='contained'>Give them the chance</Button>
                </Box>
            </Box>
        </>
    )
}

export default Teacher