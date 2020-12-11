import { Box } from "@chakra-ui/react";
import {useEffect} from 'react';


export default function Timeline({title}){
    useEffect(()=>{
        document.title = title
    },[])


    return (
        <Box>Timeline</Box>
    )
}