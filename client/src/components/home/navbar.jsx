import { Box, Typography } from "@mui/material";
import { navData } from "../../constants/data";
import GlobalStyles from "@mui/styled-engine";


const Component = GlobalStyles(Box)(({theme}) =>({

display : 'flex',
margin : '55px 130px 0 130px',
justifyContent : 'space-between',
  // [theme.breakponts.down('lg')]:{
  //   margin: 0
  // }
}));


const Container = GlobalStyles(Box)`
  padding : 12px 8px;
  text-align: center;

`

const Text = GlobalStyles(Typography)`

font-size: 14px;
font-weight: 600;
font-family: inherit;


`

const Navbar = ()=>{
  
   return(
      
    <Box style= {{background: '#fff'}}>
     <Component>
     {
       navData.map((data, index)=>(
         <Container key={index}>
           <img src= {data.url} alt= "nav" style={{width: 64}}/>
           <Text>{data.text}</Text>

         </Container>



       ))



     }



     </Component>
     </Box>



   )




}
export default Navbar;