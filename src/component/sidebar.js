import {NavLink} from 'react-router-dom';
import { ListItem, List, Box } from '@chakra-ui/react';


const Sidebar = ({url})=>{ 
    const links = [
        {title: "profile", route: "profile"},
        {title: "timeline", route: "timeline"},
        {title: "purchase", route: "purchase"},
        {title: "settings", route: "settings"},
    ]
    const active = {
        background: "purple",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        textAlign:"center",
        boxShadow:"0 5px 20px rgba(0,0,0,.2)"
    }
    return(
        <Box minW="180px" pr="20px" borderRight="1.5px solid #ede">
            <List p="0">
                {
                    links.map((link, i)=> {
                        return <ListItem 
                        key={i}
                        mb=".5rem" 
                        transition=".3s ease-out"
                        padding="10px 20px"
                        textAlign="center"
                        color="gray.500"
                        textTransform="capitalize">
                            <NavLink 
                                activeStyle={active} 
                                to={`${url}/${link.route}`}>{link.title}</NavLink>
                        </ListItem>
                    } )
                }
            </List>
        </Box>
    )
}

export default Sidebar