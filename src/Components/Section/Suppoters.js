import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import React from 'react'


const Suppoters = () => {

    const style = {
        Firstsytle: {
            textAlign: "center", width: { xs: "100%", sm: "50%" }
        },
        Secondsytle: { display: "flex", marginTop: "-12px", width: "100%", flexDirection: { xs: "column", sm: "row", md: "row" } },
        parentStyle:{display: "flex", width: "80%", borderBottom: "1.2px solid black", margin: "0 auto  50px auto", flexDirection: { xs: "column", sm: "column", md: "column", lg: "row" }},
        textStyle:{ textAlign: "center", marginBottom: "75px", fontSize: "22px", fontWeight: "bold", color: "gray" },
        img:{ marginBottom: "50px", padding: "0 10px" }
    }

    return (
        <div>
            <Typography sx={style.textStyle}>Key Suppoters</Typography>
            <Box >
                <Box sx={style.parentStyle}>
                    <Box sx={style.Secondsytle}>
                        <Box sx={style.Firstsytle}>
                            <img src='../images/footerImage/america.png' alt="america" width={180} style={style.img} /><br />
                            <img src='../images/footerImage/college-board.png' alt="collage-board" width={150} style={style.img} />
                        </Box>
                        <Box sx={style.Firstsytle}>
                            <img src='../images/footerImage/ann-and-john.png' alt="ann-and-john" width={150} style={style.img} /><br />
                            <img src='../images/footerImage/gates-foundation.png' alt="gate-foundation" width={180} style={style.img} />
                        </Box>
                    </Box>
                    <Box sx={style.Secondsytle}>
                        <Box sx={style.Firstsytle}>
                            <img src='../images/footerImage/lemann-foundation.png' alt="lemann" width={150} style={style.img} /><br />
                            <img src='../images/footerImage/carlos-rodriguez.png' alt="carlos" width={180} style={style.img} />
                        </Box>
                        <Box sx={{ ...style.Firstsytle, marginTop: "12px" }}>
                            <img src='../images/footerImage/tata-trusts.png' alt="tata-trusts" width={150} style={style.img} /><br />
                            <img src='../images/footerImage/valhalla-dark.png' alt="valhalla" width={150} style={style.img} />
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ width: "80%", margin: "auto auto" }}>
                    <Typography sx={style.textStyle}>Supporters of our COVID-19 response
                    </Typography>
                    <Box sx={{ textAlign: "center", justifyContent: "center", display: "flex", flexDirection: { xs: "column", sm: "column", md: "row" } }}>
                        <Box>
                            <img src='../images/footerImage/america.png' alt="america" width={180} style={style.img} /><br />
                            <img src='../images/footerImage/att-dark.png' alt="att" width={100} style={style.img} />
                        </Box>
                        <Box>
                            <img src='../images/footerImage/google.png' alt="geogle" width={130} style={style.img} /><br />
                            <img src='../images/footerImage/novartis.png' alt="novartis" width={150} style={style.img} />
                        </Box>
                        <Box>
                            <img src='../images/footerImage/fastly.png' alt="fastly" width={100} style={style.img} /><br />
                            <img src='../images/footerImage/gm.png' alt="gm" width={180} style={{...style.img,marginTop: "-15px" }} />
                        </Box>
                        <Box>
                            <img src='../images/footerImage/adobe.png' alt="adobe" width={100} style={style.img} /><br />
                        </Box>
                    </Box>
                </Box>

            </Box>
        </div>
    )
}

export default Suppoters