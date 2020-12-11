import { Box, Heading, Flex, Text, Stack, useDisclosure } from "@chakra-ui/react";
import Sidebar from "../component/sidebar";
import StoryButton from "../component/button";

const Dashboard = ({match, children, username})=>{
    const {isOpen, onOpen, onClose} = useDisclosure()
    
    return(
        <Flex>
            <Sidebar url={match?.url} />
            <Box w="100%" ml="30px">
                <Stack isInline justify="space-between" align="center">
                    <Box>
                        <Text fontSize="md">Hi {username},</Text>
                        <Heading mt="3px" fontSize="lg">Welcome to your Dashboard</Heading>
                    </Box>
                    <StoryButton bg="green.500" color="white">Create new story</StoryButton>
                </Stack>
                <Box mt="1rem">{children}</Box>
            </Box>
        </Flex>
    )
}

export default Dashboard