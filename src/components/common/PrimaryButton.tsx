import React from "react"
import { Button } from "@chakra-ui/react"

const PrimaryButton: React.VFC<{
  text: string
  clickHandler: () => void
}> = ({ text, clickHandler }) => {
  return (
    <Button
      w="12rem"
      bg="white"
      color="blue.200"
      border="2px"
      borderColor="blue.200"
      onClick={clickHandler}
      fontSize={"sm"}
      _hover={{
        color: "white",
        bg: "blue.200",
      }}
    >
      {text}
    </Button>
  )
}

export default PrimaryButton
