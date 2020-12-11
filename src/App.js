import logo from './logo.svg';
import { NavLink } from 'react-router-dom';
import './App.css';
import { Box, Flex, Image,  ListItem, Stack, List } from '@chakra-ui/react';
import RouterMain from './container/router';

function App() {
  return (
    <Box fontFamily="Inter">
      <Flex pos="absolute" w="100%" justifyContent="space-between" align="center" p="20px">
          <Image src={logo} h="50px" />
          <List>
            <Stack spacing={8} isInline color="gray.300" p="0">
              <ListItem>
                <NavLink 
                  activeStyle={{color: "white" }} 
                  to="/home">Home</NavLink>
              </ListItem>
              <ListItem>
                <NavLink 
                  activeStyle={{color: "white" }} 
                  to="/sign-in">Account</NavLink>
              </ListItem>
              <ListItem>
                <NavLink 
                  activeStyle={{color: "white" }} 
                  to="/dashboard">Dashboard</NavLink>
              </ListItem>
            </Stack>
          </List>
      </Flex>
      <Box 
        d="flex" 
        justifyContent="center" 
        alignItems="center" 
        p="2rem" 
        w="100%" 
        h="100vh" 
        bg="pink.800">
         <Box overflowY="auto" bg="white" p="1rem" borderRadius="10px" boxShadow="0 5px 100px rgba(0,0,0,.3)"  w="80%" h="80%">
          <RouterMain />
         </Box>
      </Box>
    </Box>
  );
}

export default App;
