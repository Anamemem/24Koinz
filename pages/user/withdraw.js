import React from "react"
import { AppBar, Box, Button, Stack, TextField
    , Typography } from "@mui/material"
import { fontWeight } from "@mui/system"
import Nav from "../../components/nav"
import Footer from "../../components/Footer"

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';



export default function Withdraw() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  }


    return(
        <>
        <Nav />
<Stack px={{xs:"12px", sm:"18px", md:"25px"}} 
  mt={{xs:"41px", sm:"60px", md:"6.21vw"}}
  maxWidth={{xs:"657px", sm:"986px", md:"1315px"}}>
    
     


  </Stack>
  <Stack
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={2}
>
  <Box  px={{xs:"30px", sm:"48px", md:"5.00vw"}} sx={{boxShadow: 3}}
   maxWidth={{xs:"458px", sm:"730px", md:"56.25vw"}} width="100%">
    <Typography textAlign="center" fontSize={{xs:"17px", sm:"26px", md:"36px"}}
              style={{fontWeight: "700", color: "black",fontFamily: "Raleway"
              }}
              > 
              withdrawal</Typography>
    
    
    <Stack mt={2} mb={3} direction="column" spacing={3}>

    
    <TextField fullWidth sx={{ width: "100%",  backgroundColor: " #D9D9D9" }} label="Enter  wallet address"  />
    <TextField sx={{ width: "100%",  backgroundColor: " #D9D9D9" }} label="Amount"  />
    

       </Stack>
  </Box>
</Stack>
  <Stack
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={2}
  mt={5}
><Button s sx={{ fontSize: { sm: "14px", md: "25px" } }}
                variant="contained">Submit</Button></Stack>s


                  </>
    )
};