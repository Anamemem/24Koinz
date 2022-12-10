import {Box, Stack, Typography } from '@mui/material'


export default function Footer() {
    return (  
    <div>
        
        <Box bgcolor="#000000" color="white"
         minHeight={{xs:"58px", sm:"93px", md:"9.72vh"}} 
         width="100%" 
      >
            <Stack 
               px={{xs:"8px", sm:"77px", md:"8.06vw"}}
               textAlign="center"
               pt={{xs:"5px", sm:"31px", md:"3.26vw"}}
               rowGap={{ xs: "28px", sm: "43px", md: "57px" }}
               columnGap={{ xs: "28px", sm: "43px", md: "57px" }}
               justifyContent="center"
               flexWrap="wrap"
               direction="row"
              >

       
            </Stack>
<Typography mt={10} textAlign="center">© 2022 24KIONZ
</Typography>
        </Box>
    </div>
    );
}

