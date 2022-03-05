import React, { useEffect, useRef, useCallback, useState } from "react"
import { Box } from "@chakra-ui/react"
import Header from "../components/common/header"

const Layout: React.FC<{}> = ({ children }) => {
  return (
    <Box>
      <Header />
      <Box minH={"60px"}></Box>
      <Box minH={"calc(100vh - 60px)"} bgColor={"gray.100"}>{children}</Box>
    </Box>
  )
}

export default Layout
