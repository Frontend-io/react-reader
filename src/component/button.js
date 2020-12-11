import { Button } from "@chakra-ui/react";

export default function StoryButton(props){
    const darkerButton = (bg)=> {
        const split = bg.split('.')
        return `${split[0]}.${ parseInt(split[1]) + 100 }`
    }
    return(
        <Button 
        fontSize="sm" 
        _hover={{background: darkerButton(props.bg || props.background) }} 
        {...props}>{props.children}</Button>
    )
}