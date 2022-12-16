import React from "react"
import { AppBar, Box, Button, Stack, TextField
    , Typography } from "@mui/material"
import { fontWeight } from "@mui/system"

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';



export default function Login() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  }


    return(
        <>
<Stack px={{xs:"12px", sm:"18px", md:"25px"}} 
  mt={{xs:"31px", sm:"50px", md:"3.21vw"}}
  maxWidth={{xs:"657px", sm:"986px", md:"1315px"}}>
    
     
<Typography textAlign="center" fontSize={{xs:"17px", sm:"26px", md:"36px"}}
              style={{fontWeight: "700", color: "#021BFF",fontFamily: "Raleway"
              }}
              > 
              24KOINZ</Typography>
    

  </Stack>
  <Stack
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={2}
>
  <Box  px={{xs:"30px", sm:"48px", md:"5.00vw"}} sx={{boxShadow: 3}}
   maxWidth={{xs:"458px", sm:"730px", md:"76.25vw"}}>
    <Stack mt={2} spacing={{xs: "20px", md: "40px", md: "60px"}} direction={{xs: "column", md: "row"}}>

    <TextField label="First name" sx={{backgroundColor: " #D9D9D9" }} />
    <TextField label="Last name" sx={{backgroundColor: " #D9D9D9" }} />
    </Stack>
    <Stack mt={2} mb={3} direction="column" spacing={3}>

    <TextField sx={{ width: "100%",   backgroundColor: " #D9D9D9" }} label="Country"  />
    <TextField sx={{ width: "100%",  backgroundColor: " #D9D9D9" }} label="Home adress"  />
    <TextField sx={{ width: "100%",  backgroundColor: " #D9D9D9" }} label="Email"  />
    <TextField sx={{ width: "100%",  backgroundColor: " #D9D9D9" }} label="Username"  />
    <FormControl   sx={{ width: "100%", backgroundColor: " #D9D9D9" }} variant="outlined">
    <InputLabel htmlFor="outlined-adornment-password">Current Password</InputLabel>
          <OutlinedInput
          
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        <FormControl   sx={{ width: "100%", backgroundColor: " #D9D9D9" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Re-enter Password</InputLabel>

          <OutlinedInput
          fullWidth 
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

       </Stack>
  </Box>
</Stack>
  <Stack
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={2}
><Button>Submit</Button></Stack>


                  </>
    )
};