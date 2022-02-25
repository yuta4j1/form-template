import React, { useEffect, useRef, useCallback, useState } from "react"
import { Box } from "@chakra-ui/react"
import Header from "../components/common/header"

const Layout: React.VFC<{}> = ({}) => {
  const currentYPosition = useRef<number>(0)
  const [isHeaderShow, setIsHeaderShow] = useState(true)
  const onScroll = useCallback((ev: Event) => {
    const top = window.scrollY
    if (top < currentYPosition.current) {
      console.log("scroll to Top!")
      if (top > 60) {
        setIsHeaderShow(true)
      }
    } else {
      console.log("scroll to Bottom!")
      if (top > 60) {
        setIsHeaderShow(false)
      }
    }
    currentYPosition.current = top
  }, [isHeaderShow, setIsHeaderShow])
  useEffect(() => {
    document.addEventListener("scroll", onScroll)

    return () => {
      document.removeEventListener("scroll", onScroll)
    }
  }, [])
  return (
    <Box>
      <Header isHeaderShow={isHeaderShow} />
      <Box>
        <Box w={200} h={400} bg={"gray.200"}>
          Dummy
        </Box>
        <Box w={200} h={400} bg={"gray.200"}>
          Dummy
        </Box>
        <Box w={200} h={400} bg={"gray.200"}>
          Dummy
        </Box>
        <Box w={200} h={400} bg={"gray.200"}>
          Dummy
        </Box>
      </Box>
    </Box>
  )
}

export default Layout
