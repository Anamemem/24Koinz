import { Grid, Box, Typography, Stack, Card  } from "@mui/material";
import PersistentDrawerLeft from "../../components/user/drawer"
import Avatar from '@mui/material/Avatar';
import Link from "next/link"


export default function UserDashboard() {
    return ( 
    <>
    <Grid container bgcolor="#1976d2" height={{xs: "200vh", md: "100vh"}}>
    <PersistentDrawerLeft />
  <Grid item xs={2}>
  <Box pt={10} sx={{display: {xs: "none", md: "block"} }}
   style={{borderRight: "2px solid black", height: "100vh"}}>
    <Stack spacing={2} px={1} direction="row">
    <Avatar alt="Remy Sharp"   src="/static/images/avatar/1.jpg" />
<Typography color="white" 
        style={{fontFamily: "Raleway", fontWeight: "600"}}

variant="h4" >NavBar</Typography>
    </Stack>
<Link href="/user/withdraw">

<Typography mt={15} px={2} color="white" fontSize={{ xs: "14px", sm: "16px", md: "1.67vw" }}
        style={{fontFamily: "Raleway", fontWeight: "600"}}

>withdraw <br />Referral</Typography>
</Link>
<Link href="/user/deposit">

<Typography mt={10} px={2} color="white" fontSize={{ xs: "14px", sm: "16px", md: "1.67vw" }}
        style={{fontFamily: "Raleway", fontWeight: "600"}}

>Deposit</Typography>
</Link>
    </Box>
  </Grid>
  <Grid item   xs={9}>
  
    <Stack   spacing={5} direction={{xs: "column", md: "row"}} px={10}
    mt={10}>
    <Box  maxWidth={{ md: "43.54vw" }} px={{ xs: "0px", md: "60px" }}>
          <Card sx={{ minWidth: 175, bgcolor: "white" }} >
            <Typography fontSize={{ xs: "14px", sm: "16px", md: "1.67vw" }} color="#021BFF" 
            style={{fontFamily: "Raleway", fontWeight: "600"}}
              textAlign="center">ETHEREUM
              <br />
              <span style={{fontSize: "1vw", color: "black"}}>
                daily analysis

                </span> </Typography>
          </Card>
        </Box>
        <Box  maxWidth={{ md: "43.54vw" }} px={{ xs: "0px", md: "60px" }}>
          <Card sx={{ minWidth: 175, bgcolor: "lightgreen" }} >
            <Typography fontSize={{ xs: "14px", sm: "16px", md: "1.67vw" }} color="#021BFF"
            style={{fontFamily: "Raleway", fontWeight: "600"}}
              textAlign="center">BTC <br />
              <span style={{fontSize: "1vw", color: "black"}}>
                daily analysis

                </span> </Typography>
            
          </Card>
        </Box>
        <Box  maxWidth={{ md: "43.54vw" }} px={{ xs: "0px", md: "60px" }}>
          <Card sx={{ minWidth: 175, bgcolor: "#F86262" }} >
            <Typography fontSize={{ xs: "14px", sm: "16px", md: "1.67vw" }} color="#021BFF"
            style={{fontFamily: "Raleway", fontWeight: "600"}}
              textAlign="center">CARDANO <br />
             <span style={{fontSize: "1vw", color: "black"}}>
                daily analysis

                </span>
              </Typography>
            
          </Card>
        </Box>
    </Stack>
    
        <Typography px={{ xs: "70px", md: "140px" }} mt ={7}
        style={{color: "white", fontWeight: "600",fontFamily: "Raleway",}}
       
        fontSize={{ xs: "14px", sm: "16px", md: "1.67vw" }} >Status: VIP1</Typography>
        <Stack
  direction="row"
  justifyContent="center"
  alignItems="center"
  
>
<Box  maxWidth={{ md: "43.54vw" }} px={{ xs: "0px", md: "60px" }}>
          <Card sx={{ minWidth: 175, bgcolor: "" }} >
            <Typography fontSize={{ xs: "14px", sm: "16px", md: "1.67vw" }} color="#021BFF"
                    style={{fontFamily: "Raleway", fontWeight: "600"}}

              textAlign="center">Select Portfolio
            
              </Typography>
            
          </Card>
        </Box>
</Stack>

   
   <Stack spacing={10} direction={{xs: "column", md: "row"}}>
   <Stack  spacing={5} direction={{xs: "column"}} px={10}
    mt={10}>
    <Box  maxWidth={{ md: "33.54vw" }} px={{ xs: "0px", md: "60px" }}>
          <Card sx={{ minWidth: 175, bgcolor: "white" }} >
            <Typography fontSize={{ xs: "14px", sm: "16px", md: "1.67vw" }} color="#021BFF"
                    style={{fontFamily: "Raleway", fontWeight: "600"}}

              textAlign="center">ETHEREUM
              <br />
              <span style={{fontSize: "1vw", color: "black"}}>
                daily analysis

                </span> </Typography>
          </Card>
        </Box>
        <Box  maxWidth={{ md: "33.54vw" }} px={{ xs: "0px", md: "60px" }}>
          <Card sx={{ minWidth: 175, bgcolor: "" }} >
            <Typography fontSize={{ xs: "14px", sm: "16px", md: "1.67vw" }} color="#021BFF"
                    style={{fontFamily: "Raleway", fontWeight: "600"}}

              textAlign="center">BTC <br />
               <span style={{fontSize: "1vw", color: "black"}}>
                daily analysis

                </span> </Typography>
            
          </Card>
        </Box>
        <Box  maxWidth={{ md: "33.54vw" }} px={{ xs: "0px", md: "60px" }}>
          <Card sx={{ minWidth: 175, bgcolor: "" }} >
            <Typography fontSize={{ xs: "14px", sm: "16px", md: "1.67vw" }} color="#021BFF"
                    style={{fontFamily: "Raleway", fontWeight: "600"}}

              textAlign="center">CARDANO <br />
              <span style={{fontSize: "1vw", color: "black"}}>
                daily analysis

                </span> 
              </Typography>
            
          </Card>
        </Box>
    
    </Stack>
    <Stack direction="column"  
    px={{xs: "160px", md: "0px"}}
    justifyContent="center"
    alignItems="center">
    <Box  maxWidth={{ md: "43.54vw" }} mt={10} >
          <Card  sx={{ minWidth: 275, bgcolor: "" }}>
            <Typography fontSize={{ xs: "14px", sm: "16px", md: "1.67vw" }} color="black" mt={3}
                    style={{fontFamily: "Raleway", fontWeight: "600"}}

              textAlign="center"> How it works<br />
              </Typography>
             <Typography fontSize={{ xs: "14px", sm: "16px", md: "1.67vw" }} color="black" mt={1}
                     style={{fontFamily: "Raleway", fontWeight: "600"}}

              textAlign="center">
                
                click on Select portfolio
                </Typography> 
             <Typography textAlign="center"   
                   style={{fontFamily: "Raleway", fontWeight: "600"}}
 mt={2} variant="h6">
             Deposit your btc in the approved wallet 
              click on  contact support fill the support ticket for your portfolio
              to be activated  
            
             </Typography>
            
          </Card>
        </Box>
    </Stack>
   </Stack>

  
   
  </Grid>
  </Grid>
    </>
    
    )
}

