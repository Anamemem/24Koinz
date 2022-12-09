import { AppBar, Box, Button, Stack, TextField
    , Typography } from "@mui/material"
import { fontWeight } from "@mui/system"
import Image from "next/image"
import Link from "next/link"
import Nav from "../components/nav"
import Hero from "../public/Hero.png"
import login from "../public/login.png"




export default function Login() {

    return(
        <>


<Stack
          px={{ xs: "4.80vw", md: "0" }}
          pl={{ md: "2.78vw" }}
          direction={{ xs: "column-reverse", md: "row" }}
          alignItems={"center"}
          // justifyContent={{xs:"flex-start",}}
          spacing={{ xs: "0.00vw", md: "3.99vw" }}
          mt={{xs: "10px"}}
        >
          <Box maxWidth={{ md: "43.54vw" }}>
           
          <TextField fullWidth  label="email" id="fullWidth" />

          


        

            <Typography
              color="secondary"
              variant="body2"
              sx={{
                  cursor: "pointer",
                  fontWeight: "400",
                }}
            >
              Dont Have An Account?{" "}
                <Link href="/signup">
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
             
              <Button
                sx={{ fontSize: { sm: "14px", md: "25px" } }}
                variant="contained"
                >
              
               LogIn
              </Button>
            </Stack>
          </Box>
          <Box pl={{md:"6.60vw"}}  
          maxWidth={{ md: "50.54vw" }}  width="100%">
            <Image src={login} alt="heroImage"  layout="responsive" />
          </Box>
        </Stack>

                  </>
    )
};