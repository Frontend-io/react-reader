import { Box } from "@chakra-ui/react";
import {useEffect} from 'react';


export default function Home(){
    useEffect(()=>{
        document.title = "Home"
    },[])

    return (
        <Box>Home</Box>
    )
}