import Image from "next/image"
import React from 'react';
import { AppBar, Box, Button, Stack, Toolbar, Typography } from "@mui/material"
import Link from 'next/link';
import Pictureone from "../public/Pictureone.png"
import Picturetwo from "../public/Picturetwo.png"
import Picturethr from "../public/Picturethr.png"




 export default function Card() {
    return(

        <>
         <Stack rowGap={{xs:"95px", sm:"97px", md:"130px"}} 
       columnGap={ {xs:"95px", sm:"97px", md:"180px"}}  
      
                                                      
       direction={{ xs: "column", md: "row" }}>
         
          <Box  
          textAlign="center"  
 maxWidth={{ md: "45.54vw" }}  height="100px"  width="100%">
    <Image  src={Pictureone}   alt="" />
            <Typography textAlign="center" 
            fontSize={{md:"1.67vw"}}
            style={{fontWeight: "700"}}>Regulated</Typography>
            <Typography>MiFID II investment firm. Virtual Asset <br />
Service Provider. PSD2 payment<br />
 institution. E-Money Institute.</Typography>
          </Box>
         
          
          <Box 
          textAlign="center"  
 maxWidth={{ md: "45.54vw" }}  height="100px"  width="100%">
    <Image  src={Picturetwo}  height="50px" alt="" />

            <Typography textAlign="center" 
            fontSize={{md:"1.67vw"}}
            mt={5}
            style={{fontWeight: "700"}}>Safe and secure</Typography>
            <Typography>Funds secured in offline wallets.<br />
Fully compliant with AML5 and GDPR</Typography>
          </Box>
          
          
          <Box  
          textAlign="center"  
 maxWidth={{ md: "45.54vw" }}  height="100px"  width="100%">
    <Image  src={Picturethr}  height="50px" alt="" />

            <Typography textAlign="center" 
            fontSize={{md:"1.67vw"}}
            mt={4}
            style={{fontWeight: "700"}}>Trusted</Typography>
            <Typography>3.5+ million happy users.<br />
Excellent Trustpilot rating.</Typography>
          </Box>
         
        </Stack> 
        </>
    )
 };