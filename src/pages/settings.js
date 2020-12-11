import { Box } from "@chakra-ui/react";
import {useEffect} from 'react';


export default function Settings({title}){
    useEffect(()=>{
        document.title = title
    },[])


    return (
        <Box>Settings</Box>
    )
}