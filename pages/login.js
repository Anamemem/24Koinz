import React from "react"
import { AppBar, Box, Button, Stack, TextField
    , Typography } from "@mui/material"
import { fontWeight } from "@mui/system"
import Image from "next/image"
import Link from "next/link"
import Nav from "../components/nav"
import Hero from "../public/Hero.png"
import login from "../public/login.png"
// import TextField from '@mui/material/TextField';
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

<Nav />
<Stack
          px={{xs:"37px", sm:"59px", md:"6.18vw"}}
          pl={{ md:"11.18vw" }}
          direction={{ xs: "column-reverse", md: "row" }}
          alignItems={"center"}
          // justifyContent={{xs:"flex-start",}}
          spacing={{ xs: "0.00vw", md: "3.99vw" }}
          mt={{xs: "10px"}}
        >
          <Box  mt={{xs:"47px", sm:"75px", md:"7.85vw"}} maxWidth={{ md: "43.54vw" }}>
            <Box mb={10}>

          <TextField sx={{ width: "100%",  backgroundColor: " #021BFF" }} label="email"  />
            </Box>
           

          
          <FormControl   sx={{ width: "100%", backgroundColor: " #021BFF" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password"> Password</InputLabel>
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


        

            <Typography
              color="secondary"
              variant="body2"
              align="right"
              sx={{
                  cursor: "pointer",
                  fontWeight: "400",
                }}
            >
              Dont Have An Account?{" "}
                <Link href="/">
              <span style={{ fontWeight: "900" }}>Sign Up </span>
          </Link>
            </Typography>
            <Stack
              direction="row"
              my={{ xs: "14px", sm: "22px", md: "2.29vw" }}
              px={{xs:"50px", sm:"80px", md:"8.33vw"}}
              flexWrap={"wrap"}
              alignItems="center"
              spacing={{ xs: "4px", sm: "7px", md: "10px" }}
            >
             <Link href="/user">

              <Button
                sx={{ fontSize: { sm: "14px", md: "25px" } }}
                variant="contained"
                >
              
               LogIn
              </Button>
             </Link>
            </Stack>
          </Box>
          <Box pl={{md:"6.60vw"}} 
          px={{xs:"17px", sm:"27px", md:"2.85vw"}} 
          maxWidth={{ md: "50.54vw" }}  width="100%">
            <Image src={login} alt="heroImage"  layout="responsive" />
          </Box>
        </Stack>

                  </>
    )
};