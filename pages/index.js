import { AppBar, Box, Button, Stack, Toolbar, Typography } from "@mui/material"
import { fontWeight } from "@mui/system"
import Image from "next/image"
import Link from "next/link"
import Nav from "../components/nav"
// import Card from "../components/Card"
import Footer from "../components/Footer"
import Hero from "../public/Hero.png"
import One from "../public/One.png"
import Two from "../public/Two.png"
import Thr from "../public/Thr.png"
import Section from "../public/Section.png"
import BitImg from "../public/BitImg.png"
import Group23 from "../public/Group23.png"
import Pictureone from "../public/Pictureone.png"
import Picturetwo from "../public/Picturetwo.png"
import Picturethr from "../public/Picturethr.png"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



export default function Home() {
  return (      
    <>
    <Nav />
      <Stack
          px={{ xs: "4.80vw", md: "0" }}
          pl={{ md: "2.78vw" }}
          direction={{ xs: "column-reverse", md: "row" }}
          alignItems={"center"}
          // justifyContent={{xs:"flex-start",}}
          spacing={{ xs: "0.00vw", md: "3.99vw" }}
          mt={{xs: "10px"}}
        >
          <Box  mt={5} maxWidth={{ md: "43.54vw" }}>
            <Typography  style={{fontFamily: "Raleway", fontWeight: "500"}}
             fontSize={{xs:"38px", sm:"60px", md:"6.25vw"}} variant="h1">
            Invest in what <br />
           you believe in.
            </Typography>
           

            <Stack
              direction="row"
              my={{ xs: "14px", sm: "22px", md: "2.29vw" }}
              px={{xs:"50px", sm:"80px", md:"8.33vw"}}
              flexWrap={"wrap"}
              alignItems="center"
              spacing={{ xs: "4px", sm: "7px", md: "10px" }}
            >
                <Link href="./signup">

              <Button
                sx={{ fontSize: { sm: "20px", md: "25px" } }}
                variant="contained"
              >
                
               Start Investing
              </Button>
                </Link>
            </Stack>
          </Box>
          <Box pl={{md:"6.60vw"}}  
          maxWidth={{ md: "50.54vw" }}  width="100%">
            <Image src={Hero} alt="heroImage"  layout="responsive" />
          </Box>
        </Stack>
        <Stack id="how it works" rowGap={{xs:"95px", sm:"97px", md:"130px"}} 
       columnGap={ {xs:"46px", sm:"74px", md:"7.72vw"}}  
       px={{xs:"24px", sm:"38px", md:"4.96vw"}}
                                                      
       direction={{ xs: "column", md: "row" }}>

        <Box mt={16} 
          textAlign="center"  
 maxWidth={{ md: "45.54vw" }}  height="100px"  width="100%">
    <Image  src={One}   alt="" />

            <Typography textAlign="center" mt={1}
            fontSize={{md:"1.67vw"}}
            style={{fontWeight: "700", 
            fontFamily: "Inika"}} >Regulated</Typography>
            <Typography fontSize={{md:"1.5vw"}} style={{fontWeight: "500", 
     fontFamily: "Inika"}}>MiFID II investment firm.  Asset <br />
Service Provider. PSD2 payment<br />
 institution. E-Money Institute.</Typography>
          </Box>
          <Box mt={16}
          textAlign="center"  
 maxWidth={{ md: "45.54vw" }}  height="100px"  width="100%">
   <Image  src={Two}  height="50px" alt="" />

            <Typography textAlign="center" mt={5}
            fontSize={{md:"1.67vw"}}
            style={{fontWeight: "700", 
            fontFamily: "Inika"}} >Safe and secure</Typography>
            <Typography fontSize={{md:"1.5vw"}} style={{fontWeight: "500", 
     fontFamily: "Inika"}}>
            Funds secured in offline wallets.<br />
Fully compliant with AML5 and GDPR</Typography>
          </Box>
          <Box  mt={16} 
          textAlign="center"  
 maxWidth={{ md: "45.54vw" }}  height="100px"  width="100%">
     <Image  src={Thr}  height="50px" alt="" />

            <Typography textAlign="center" mt={4}
            fontSize={{md:"1.67vw"}}
            style={{fontWeight: "700", 
            fontFamily: "Inika"}} >Trusted</Typography>
            <Typography fontSize={{md:"1.5vw"}} style={{fontWeight: "500", 
     fontFamily: "Inika"}}>
            3.5+ million happy users.<br />
Excellent Trustpilot rating.</Typography>
          </Box>
          </Stack>

<Stack
          px={{ xs: "4.80vw", md: "0" }}
          pl={{ md: "2.78vw" }}
          direction={{ xs: "column", md: "row" }}
          mt={{xs:"105px", sm:"136px", md:"32.24vw"}}
          alignItems={"center"}
          // justifyContent={{xs:"flex-start",}}
         
         
        >
           <Box  
          maxWidth={{ md: "45.54vw" }}  width="100%">
            <Image src={Section} alt="sectionImage"  layout="responsive" />
          </Box>
          <Box maxWidth={{ md: "43.54vw" }}>
            <Typography textAlign="center" 
            fontSize={{xs:"23px", sm:"37px", md:"3.82vw"}} style={{

              fontFamily: "Raleway", fontWeight: "500"}} variant="h1">
            The easiest way 
            to invest in
            cryptocurrency<br />
           <span style={{color: "#021BFF"}}>  No trading skills.</span> 
            </Typography>
           

            <Stack
              direction="row"
              my={{ xs: "14px", sm: "22px", md: "3.29vw" }}
              px={{xs:"89px", sm:"128px", md:"10.13vw"}}
              flexWrap={"wrap"}
              alignItems="center"
              spacing={{ xs: "4px", sm: "7px", md: "10px" }}
            >
             <Link href="#how it works">

              <Button
                sx={{ fontSize: { sm: "14px", md:"2.22vw" } }}
                variant="contained"
                >
                {" "}
               How it Works{" "}
              </Button>
                </Link>
            </Stack>
          </Box>
         
        </Stack>

      <Stack direction={{xs: "column", md: "column"}} alignItems="center" justifyContent="center"
      mt={{xs:"50px", sm:"80px", md:"8.33vw"}}
      px={{xs:"10px"}}>
      <Typography textAlign="center" 
            fontSize={{xs:"20px", sm:"32px", md:"3.33vw"}} style={{

              fontFamily: "Raleway", fontWeight: "500"}} variant="h1">
            You don't need to be an expert to
           <span style={{color: "#021BFF"}}> build <br />
           your cryptocurrency portfolio and <br />
           digital wealth</span> 
            </Typography>
            <Typography textAlign="center" 
            fontSize={{xs:"10px", sm:"16px", md:"1.67vw"}} style={{
              fontFamily: "Raleway", fontWeight: "400"}}
              mt={{xs:"29px", sm:"47px", md:"4.86vw"}} 
              variant="h4">
            Investing in cryptocurrency can be intimidating, especially for beginners. Sometimes managing a<br /> 
crypto investment is daunting due to the uncertainty and volatility of the market, as well as the<br />
 time investment needed to be successful.
 
            </Typography>
      </Stack>
 

      <Stack
          px={{ xs: "4.80vw", md: "0" }}
          pl={{ md: "2.78vw" }}
          direction={{ xs: "column", md: "row" }}
          mt={{xs:"105px", sm:"136px", md:"32.24vw"}}
          alignItems={"center"}
          // justifyContent={{xs:"flex-start",}}
         
         
        >
           <Box  
          maxWidth={{ md: "45.54vw" }}  width="100%">
            <Image src={BitImg} alt="sectionImage" />
          </Box>
          <Box maxWidth={{ md: "43.54vw" }}>
            <Stack justfyContent="center"> 
            <Typography textAlign={{xs: "center", md: "flex-end"}} 
            fontSize={{xs:"23px", sm:"37px", md:"3.82vw"}} style={{

              fontFamily: "Raleway", fontWeight: "500"}} variant="h1">
            Register
            </Typography>
            <Typography textAlign={{xs: "center", md:"flex-end"}}
            fontSize={{xs:"10px", sm:"16px", md:"1.67vw"}} style={{
              fontFamily: "Raleway", fontWeight: "400"}}
              mt={{xs:"29px", sm:"47px", md:"4.86vw"}} 
              variant="h4">
            Sign up to create your free cryptocurrency account
            </Typography>
            </Stack>
            <Stack
              direction="row"
              my={{ xs: "14px", sm: "22px", md: "3.29vw" }}
              px={{xs:"89px", sm:"128px", md:"10.13vw"}}
              flexWrap={"wrap"}
              alignItems="center"
              spacing={{ xs: "4px", sm: "7px", md: "10px" }}
            >
             <Link href="/signup">

              <Button
                sx={{ fontSize: { xs:"8px", sm:"13px", md:"1.39vw"} }}
                variant="contained"
                >
                {" "}
               Get Started{" "}
              </Button>
                </Link>
            </Stack>
          </Box>
         
        </Stack>


  <Stack px={{xs:"12px", sm:"18px", md:"25px"}} 
  mt={{xs:"109px", sm:"164px", md:"218px"}}
  maxWidth={{xs:"657px", sm:"986px", md:"1315px"}}>
    
      <Typography textAlign="center" style={{fontWeight: "600", 
     fontFamily: "Raleway"}}
      fontSize={{xs:"23px", sm:"34px", md:"46px"}}>
        Boost your financial literacy skills
</Typography>
    
  </Stack>

 
  <Stack  direction={{xs: "column", md: "row"}} spacing={10}
  px={{xs:"27px", sm:"41px", md:"54px"}} mt={5}
   >
    <Box maxWidth={{xs:"100%", sm:"100%", md:"554px"}}
    minHeight={{xs:"325px", sm:"487px", md:"650px"}}
    px={{xs:"5px", sm:"7px", md:"9px"}}
    style={{backgroundColor: "#CD6A0F"}}
    
    width="100%">

      <Button  style={{backgroundColor: "#D9D9D975",
       margin: "20px", color: "white", 
       fontFamily: "Inika"}}>24kIONZ BLOG</Button>
       <Typography mt={{xs:"90px", sm:"134px", md:"179px"}} color="white" style={{
     fontFamily: "Inika"}}
       fontSize={{xs:"17px", sm:"26px", md:"34px"}}>Get the latest company <br />
        news and industry updates

        </Typography>

<Link style={{textDecoration: "none"}}  href="/">
  <Typography mt={5} fontSize={{xs:"11px", sm:"17px", md:"23px"}} style={{ fontFamily: "Inika"}}
  color="white">Visit blog</Typography></Link>


    </Box>
    <Box maxWidth={{xs:"100%", sm:"100%", md:"554px"}}
    minHeight={{xs:"325px", sm:"487px", md:"650px"}}
    px={{xs:"5px", sm:"7px", md:"9px"}}
    style={{backgroundColor: "#52EB7D", 
    fontFamily: "Inika"}}
    width="100%">

      <Button  style={{backgroundColor: "#D9D9D975",
       margin: "20px", color: "white"}}>24kIONZ Academy</Button>

<Typography mt={{xs:"90px", sm:"134px", md:"179px"}} color="white"  style={{ fontFamily: "Inika"}}
fontSize={{xs:"17px", sm:"26px", md:"34px"}}>Learn all about investing,<br />
Bitcoin and blockchain.
</Typography>

<Link style={{textDecoration: "none"}}  href="/">
  <Typography mt={5} style={{
     fontFamily: "Inika"}} fontSize={{xs:"11px", sm:"17px", md:"23px"}} 
  color="white">Visit Academy</Typography></Link>


    </Box>

 </Stack>
 <Stack px={{xs:"37px", sm:"130px", md:"174px"}} 
  mt={{xs:"109px", sm:"164px", md:"218px"}}
  maxWidth={{xs:"657px", sm:"986px", md:"1315px"}}
  >
    
      <Typography textAlign="center" style={{fontWeight: "700", 
     fontFamily: "Raleway"}}
      fontSize={{xs:"23px", sm:"34px", md:"46px"}}>
        Frequently asked questions
</Typography>

    
  </Stack>
<Stack direction={{xs: "column", md: "row"}}>
<Box maxWidth={{xs:"100%", sm:"100%", md:"50.67vw"}}
width="100%"
px={{xs:"32px", sm:"51px", md:"8.35vw"}}
mt={6}
mb={6}
>
<Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{fontWeight: "600", 
     fontFamily: "Inika"}}>Do you have a moblie app?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Box mt={6}>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          >
          <Typography style={{fontWeight: "600", 
     fontFamily: "Inika"}}>What are the fees?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
        </Box>
        <Box mt={6}>

<Accordion>
  <AccordionSummary
    expandIcon={<ExpandMoreIcon />}
    aria-controls="panel1a-content"
    id="panel1a-header"
    >
    <Typography style={{fontWeight: "600", 
     fontFamily: "Inika"}}>What currencies can I use to make deposits?</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      malesuada lacus ex, sit amet blandit leo lobortis eget.
    </Typography>
  </AccordionDetails>
</Accordion>
  </Box>

</Box>
<Box maxWidth={{xs:"100%", sm:"100%", md:"41.67vw"}}
width="100%"
px={{xs:"32px", sm:"51px", md:"6.35vw"}}
mt={6}
mb={6}
>
<Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{fontWeight: "600", 
     fontFamily: "Inika"}}>What are the risks?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Box mt={6}>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          >
          <Typography style={{fontWeight: "600", 
     fontFamily: "Inika"}}>When can I make a withdrawal?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
        </Box>
        <Box mt={6}>

<Accordion>
  <AccordionSummary
    expandIcon={<ExpandMoreIcon />}
    aria-controls="panel1a-content"
    id="panel1a-header"
    >
    <Typography style={{fontWeight: "600", 
     fontFamily: "Inika"}}>How long does it take my funds to be allocated 
into my account?</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      malesuada lacus ex, sit amet blandit leo lobortis eget.
    </Typography>
  </AccordionDetails>
</Accordion>
  </Box>

</Box>

</Stack>
{/* <Stack px={{xs:"37px", sm:"130px", md:"174px"}} display={{xs:"none",sm: "none",md: "flex"}}
  mt={{xs:"22px", sm:"35px", md:"3.61vw"}}
  maxWidth={{xs:"657px", sm:"986px", md:"1315px"}}
  >
    
      <Typography textAlign="center" style={{fontWeight: "700"}}
      fontSize={{xs:"23px", sm:"34px", md:"46px"}}>
        What our customers say about us
</Typography>
<Box maxWidth={{xs:"576px", sm:"920px", md:"96.04vw"}} display={{xs:"none",sm: "none",md: "block"}}>
<Image src={Group23} width={1150} alt='img'/>
</Box>

    
  </Stack> */}
 <Footer />
    </>

  )}