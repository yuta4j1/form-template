import React from "react"
import {
  Box,
  Flex,
  Text,
  IconButton,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Slide,
} from "@chakra-ui/react"

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons"

const Header: React.VFC<{ isHeaderShow: boolean }> = ({ isHeaderShow }) => {
  const { isOpen, onToggle } = useDisclosure()
  return (
    <Slide direction="top" in={isHeaderShow} style={{ zIndex: 10 }}>
      <Box>
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
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
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
    </Slide>
  )
}

export default Header
