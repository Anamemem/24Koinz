import { Typography } from "@mui/material"
import { Stack, Box } from "@mui/system"
import Nav from "../components/nav"

export default function Pricing() {
    return(
        <>
        <Nav />

        <Stack spacing={{ xs: "0.00vw", md: "3.99vw" }}
         px={{ xs: "4.80vw", md: "0" }}
         pl={{ md: "6.78vw" }}
         alignItems={"center"}
        
         direction={{xs: "column", md: "row"}}>
            <Box mt={5} maxWidth={{ md: "43.54vw" }}>
                <Typography
                style={{fontFamily: "Raleway", fontWeight: "700", }}
                fontSize={{xs:"38px", sm:"60px", md:"5.25vw"}}>Invest in Bitcoin and crypto 
                 <span style={{color: "#021BFF"}}>more wisely</span></Typography>
            </Box>
            <Box>
                <Typography  fontSize={{xs:"14px", sm:"16px", md:"1.67vw"}} style={{
              fontFamily: "Raleway", fontWeight: "400"}}>our webapp is designed you with a clear and simple overview of your investmentat at any time </Typography>
            </Box>
        </Stack>
        </>
    )
}