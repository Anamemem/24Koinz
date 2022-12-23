import { Typography, Button, ButtonGroup } from "@mui/material"
import { Stack, Box } from "@mui/system"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Nav from "../components/nav"
import Footer from "../components/Footer"
import Link from "next/link"


export default function Pricing() {
  return (
    <>
      <Nav />

      <Stack spacing={{ xs: "0.00vw", md: "3.99vw" }}
        px={{ xs: "4.80vw", md: "0" }}
        pl={{ md: "6.78vw" }}
        alignItems={"center"}

        direction={{ xs: "column", md: "row" }}>
        <Box mt={5} maxWidth={{ md: "43.54vw" }}>
          <Typography
            style={{ fontFamily: "Raleway", fontWeight: "700", textAlign: "center" }}
            fontSize={{ xs: "38px", sm: "60px", md: "5.25vw" }}>Invest in Bitcoin and crypto
            <span style={{ color: "#021BFF" }}>more wisely</span></Typography>

          {/* <Stack spacing={2}
direction="column">
<Box width={{xs: "100%", md: "75%"}} px={4} pt={1} height={{xs: "50vh",sm: "45vh", md: "170px"}} style={{borderRadius: "10px "}}
                 bgcolor="lightgray">
                      <Typography variant="h4">Diversified Portfolio</Typography>
                      <Typography >Devastifying your assests various sub classes is key to mtigating risk .
                        put more simply . we create a custom cryptocurrency that suits your needs while minimizing risk
                      </Typography>
                 </Box>
                 <Box width="75%" px={4} pt={1} height="170px"  style={{borderRadius: "10px "}}
                 bgcolor="lightgray">
                      <Typography variant="h4">Diversified Portfolio</Typography>
                      <Typography >Devastifying your assests various sub classes is key to mtigating risk .
                        put more simply . we create a custom cryptocurrency that suits your needs while minimizing risk
                      </Typography>
                 </Box>
</Stack>
                  */}
        </Box>
        <Box>
          <Typography mt={10} mb={5} fontSize={{ xs: "14px", sm: "16px", md: "1.67vw" }} style={{
            fontFamily: "Raleway", fontWeight: "400"
          }}>our webapp is designed you with
            a clear and simple overview of your investmentat at any time </Typography>
          <Box>
            <Link href="/signup"  >
              <Button sx={{ minWidth: { sm: "88px", md: "258px" } }}
                style={{ backgroundColor: "#021BFF", color: "white", textAlign: "center" }}>
                Get Started
              </Button>
            </Link>
          </Box>
          <Box mt={5} maxWidth={{ md: "33.54vw" }}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography fontSize={{ xs: "14px", sm: "16px", md: "1.67vw" }}
                  style={{ fontWeight: "600", textAlign: "center" }} gutterBottom>
                  Diverstifiction Level
                </Typography>
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}
                >

                  <ButtonGroup style={{ border: "1px solid lightgray" }}>
                    <Button>Low</Button>
                    <Button>Mid</Button>
                    <Button style={{ backgroundColor: "darkblue" }}>High</Button>
                  </ButtonGroup>
                  <hr />
                </Stack>
                <Stack spacing={2} px={{ xs: "2px", md: "40.1px" }} mt={3}
                  direction="row">
                  <Typography color="darkblue" style={{ fontWeight: "600" }}>Low
                    <Typography color="darkblue" >up to 5 coins

                    </Typography>
                  </Typography>
                  <Typography color="darkblue" style={{ fontWeight: "600" }}>Mid
                    <Typography color="darkblue" >up to 10 coins

                    </Typography></Typography>
                  <Typography color="darkblue" style={{ fontWeight: "600" }}>High
                    <Typography color="darkblue" >up to 20 coins

                    </Typography></Typography>
                </Stack>

                <Stack
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="center"

                >
                  <Button style={{ backgroundColor: "darkblue" }}>Set risk level</Button>
                </Stack>

              </CardContent>
            </Card>
          </Box>


        </Box>

      </Stack>
      <Stack direction={{ xs: "column", md: "column" }} alignItems="center" justifyContent="center"
        mt={{ xs: "50px", sm: "80px", md: "8.33vw" }}
        px={{ xs: "10px" }}>
        <Typography textAlign="center"
          fontSize={{ xs: "20px", sm: "32px", md: "3.33vw" }}
          style={{ fontFamily: "Raleway", fontWeight: "500" }} variant="h1">
          Our investment Portfolio

        </Typography>

      </Stack>
      <Stack rowGap={{ xs: "95px", sm: "97px", md: "130px" }}
        columnGap={{ xs: "46px", sm: "74px", md: "7.72vw" }}
        px={{ xs: "24px", sm: "38px", md: "8.96vw" }}
        mt={5}
        direction={{ xs: "column", md: "row" }}>
        <Box>

          <Card sx={{ minWidth: 275, bgcolor: "blue" }}>
            <CardContent>
              <Typography fontSize={{ xs: "14px", sm: "16px", md: "1.67vw" }} textAlign="center"
                color="white" gutterBottom>
                starter
              </Typography>
              <Box width="100%" height="40px" style={{ backgroundColor: "white", borderRadius: "10px" }}></Box>
              <Box width="100%" height="40px" mt={4}
                fontSize={{ xs: "14px", sm: "16px", md: "1.67vw" }}
                style={{
                  backgroundColor: "white",
                  borderRadius: "10px", textAlign: "center", fontWeight: "600"
                }}>VIP I</Box>

            </CardContent>

          </Card>
        </Box>
        <Box>

          <Card sx={{ minWidth: 275, bgcolor: "blue" }}>
            <CardContent>
              <Typography fontSize={{ xs: "14px", sm: "16px", md: "1.67vw" }} textAlign="center"
                color="white" gutterBottom>
                starter
              </Typography>
              <Box width="100%" height="40px" style={{ backgroundColor: "white", borderRadius: "10px" }}></Box>
              <Box width="100%" height="40px" mt={4}
                fontSize={{ xs: "14px", sm: "16px", md: "1.67vw" }}
                style={{
                  backgroundColor: "white",
                  borderRadius: "10px", textAlign: "center", fontWeight: "600"
                }}>VIP I</Box>

            </CardContent>

          </Card>
        </Box>
        <Box>

          <Card sx={{ minWidth: 275, bgcolor: "blue" }}>
            <CardContent>
              <Typography fontSize={{ xs: "14px", sm: "16px", md: "1.67vw" }} textAlign="center"
                color="white" gutterBottom>
                starter
              </Typography>
              <Box width="100%" height="40px" style={{ backgroundColor: "white", borderRadius: "10px" }}></Box>
              <Box width="100%" height="40px" mt={4}
                fontSize={{ xs: "14px", sm: "16px", md: "1.67vw" }}
                style={{
                  backgroundColor: "white",
                  borderRadius: "10px", textAlign: "center", fontWeight: "600"
                }}>VIP I</Box>

            </CardContent>

          </Card>
        </Box>

      </Stack>
      <Stack rowGap={{ xs: "95px", sm: "97px", md: "130px" }}
        columnGap={{ xs: "46px", sm: "74px", md: "7.72vw" }}
        px={{ xs: "24px", sm: "38px", md: "8.96vw" }}
        mt={10}
        direction={{ xs: "column", md: "row" }}>
        <Box>

          <Card sx={{ minWidth: 275, bgcolor: "blue" }}>
            <CardContent>
              <Typography fontSize={{ xs: "14px", sm: "16px", md: "1.67vw" }} textAlign="center"
                color="white" gutterBottom>
                starter
              </Typography>
              <Box width="100%" height="40px" style={{ backgroundColor: "white", borderRadius: "10px" }}></Box>
              <Box width="100%" height="40px" mt={4}
                fontSize={{ xs: "14px", sm: "16px", md: "1.67vw" }}
                style={{
                  backgroundColor: "white",
                  borderRadius: "10px", textAlign: "center", fontWeight: "600"
                }}>VIP I</Box>

            </CardContent>

          </Card>
        </Box>
        <Box>

          <Card sx={{ minWidth: 275, bgcolor: "blue" }}>
            <CardContent>
              <Typography fontSize={{ xs: "14px", sm: "16px", md: "1.67vw" }} textAlign="center"
                color="white" gutterBottom>
                starter
              </Typography>
              <Box width="100%" height="40px" style={{ backgroundColor: "white", borderRadius: "10px" }}></Box>
              <Box width="100%" height="40px" mt={4}
                fontSize={{ xs: "14px", sm: "16px", md: "1.67vw" }}
                style={{
                  backgroundColor: "white",
                  borderRadius: "10px", textAlign: "center", fontWeight: "600"
                }}>VIP I</Box>

            </CardContent>

          </Card>
        </Box>
        <Box>

          <Card sx={{ minWidth: 275, bgcolor: "blue" }}>
            <CardContent>
              <Typography fontSize={{ xs: "14px", sm: "16px", md: "1.67vw" }} textAlign="center"
                color="white" gutterBottom>
                starter
              </Typography>
              <Box width="100%" height="40px" style={{ backgroundColor: "white", borderRadius: "10px" }}></Box>
              <Box width="100%" height="40px" mt={4}
                fontSize={{ xs: "14px", sm: "16px", md: "1.67vw" }}
                style={{
                  backgroundColor: "white",
                  borderRadius: "10px", textAlign: "center", fontWeight: "600"
                }}>VIP I</Box>

            </CardContent>

          </Card>
        </Box>

      </Stack>
      <Stack direction={{ xs: "column", md: "column" }} alignItems="center" justifyContent="center"
        mt={{ xs: "50px", sm: "80px", md: "8.33vw" }}
        px={{ xs: "10px" }}>

        <Typography textAlign="center"
          fontSize={{ xs: "14px", sm: "16px", md: "1.67vw" }} style={{
            fontFamily: "Raleway", fontWeight: "400"
          }}
          mt={{ xs: "29px", sm: "47px", md: "4.86vw" }}
          variant="h4">
          Investing in cryptocurrency can be intimidating, especially for beginners. Sometimes managing a<br />
          crypto investment is daunting due to the uncertainty and volatility of the market, as well as the<br />
          time investment needed to be successful.

        </Typography>
      </Stack>
      <Stack spacing={{ xs: "0.00vw", md: "3.99vw" }}
        px={{ xs: "4.80vw", md: "0" }}
        pl={{ md: "6.78vw" }}
        alignItems={"center"}

        direction={{ xs: "column", md: "row" }}>
        <Box mt={5} maxWidth={{ md: "43.54vw" }}>
          <Typography
            style={{ fontFamily: "Raleway", fontWeight: "700", textAlign: "center", color: "#021BFF" }}
            fontSize={{ xs: "38px", sm: "60px", md: "4.25vw" }}>We build confidence<br />
            and help <br />
            invest in best market
          </Typography>
        </Box>
        <Box mt={5} maxWidth={{ md: "43.54vw" }} px={{ xs: "0px", md: "60px" }}>
          <Card sx={{ minWidth: 375, bgcolor: "lightgray" }} >
            <Typography fontSize={{ xs: "14px", sm: "16px", md: "1.67vw" }} color="#021BFF"
              textAlign="center">Coming Soon</Typography>
            <Typography textAlign="center"
              fontSize={{ xs: "18px", sm: "40px", md: "3.25vw" }}>NFTs< br />
              Precious metals</Typography>
          </Card>
        </Box>
      </Stack>
      <Footer />
    </>
  )
}