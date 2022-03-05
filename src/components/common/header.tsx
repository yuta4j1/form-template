import React from "react"
import {
  Box,
  Flex,
  Text,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react"

const Header: React.VFC<{}> = ({}) => {
  return (
    <Box position={"fixed"} zIndex={2}>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        w={"100%"}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        ></Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
          >
            Logo
          </Text>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Header
