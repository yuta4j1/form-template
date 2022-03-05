import React from "react"
import { Box } from "@chakra-ui/react"

const FormCard: React.FC<{}> = ({ children }) => {
  return (
    <Box bgColor="white" px={{ base: 4, sm: 16 }} py={{ base: 2, sm: 8 }}>
      {children}
    </Box>
  )
}

export default FormCard
