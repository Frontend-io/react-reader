import { Box } from "@chakra-ui/react";
import {useEffect} from 'react';


export default function Purchase({title}){
    useEffect(()=>{
        document.title = title
    },[])

    return (
        <Box>Purchase</Box>
    )
}