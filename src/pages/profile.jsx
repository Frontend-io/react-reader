import { Box } from "@chakra-ui/react";
import {useEffect} from 'react';


export default function Profile({title}){
    useEffect(()=>{
        document.title = title
    },[title])

    return (
        <Box>Profile</Box>
    )
}