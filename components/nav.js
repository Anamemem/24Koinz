import { AppBar, Box, Button, Stack, Toolbar, Typography } from "@mui/material"
import { fontWeight } from "@mui/system"
import Image from "next/image"
import Link from "next/link"
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';


export default function DefaultAppBar() {
  return (
    <AppBar    
      elevation={0}
      sx={{ bgcolor: "transparent", position: "relative", minHeight: "auto" }}
    >
      <Toolbar
        sx={{
          display: "block",
          pl: { xs: "37px", sm: "85px", md: "24px" },
          pr: { xs: "24px", sm: "81px", md: "108px" },
          mt: { xs: "18px", sm: "27px", md: "26px" },
        }}
        style={{ minHeight: "auto" }}
      >
        <Stack
          direction={"row"}
          justifyContent="space-between"
          flexWrap="wrap"
          alignItems={"center"}
          columnGap="20px"
          rowGap="60px"
        >
          <Stack
            direction={"row"}
            columnGap={{ xs: "41px", sm: "61px", md: "82px" }}
          >
            <Box
              width={{ xs: "53px", sm: "85px", md: "121px" }}
              position="relative"
            >
             <Typography  fontSize={{xs:"17px", sm:"26px", md:"36px"}}
              style={{fontWeight: "700", color: "#021BFF", 
              fontFamily: "Inika"}}
              > 
              24KOINZ</Typography>
            </Box>
            <Stack
  direction="row" display={{xs:"none",sm: "none",md: "flex"}}
  justifyContent="flex-end"
  alignItems="center"
  spacing={4}
pl={5}
>

    <Typography fontSize={{xs:"10px", sm:"16px", md:"1.67vw"}}
     style={{color: "black", fontWeight: "700", 
     fontFamily: "Inika"}}>How it works</Typography>
    <Typography fontSize={{xs:"10px", sm:"16px", md:"1.67vw"}}
     style={{color: "black", fontWeight: "700", 
     fontFamily: "Inika"}}>Pricing</Typography>
    <Box sx={{ minWidth: 6 }} >
      <FormControl variant="filled" fullWidth>
        <InputLabel  variant="filled" id="demo-simple-select-filled-label" >
        
        </InputLabel>
        <NativeSelect  fontSize={{xs:"10px", sm:"16px", md:"1.67vw"}}
     style={{color: "black", fontWeight: "700",
     fontFamily: "Inika", marginTop: "-2px"}}
         labelId="demo-simple-select-filled-label"
         id="demo-simple-select-filled"
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
        >
          <option >NIG</option>
          <option >BRA</option>
          <option >GER</option>
          <option >ALG</option>
          <option >CMR</option>
          <option >EGT</option>
          <option >ETH</option>
        </NativeSelect>
      </FormControl>
    </Box>
    <Typography fontSize={{xs:"10px", sm:"16px", md:"1.67vw"}}
     style={{color: "black", fontWeight: "700", 
     fontFamily: "Inika"}}>Log in</Typography>
</Stack>
          </Stack>
          
          <Box>
            <Link href="/login"  style={{}}>
            <Button sx={{ minWidth: { sm: "88px", md: "118px" }  }}
            style={{backgroundColor: "#021BFF", color: "white"}}>
            Get Started
            </Button>
            </Link>
          </Box>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}