import React from "react"
import { Box } from "@chakra-ui/react"

const FormCard: React.FC<{}> = ({ children }) => {
  return (
    <Box bgColor="white" borderRadius={8} px={16} py={8}>
      {children}
    </Box>
  )
}

export default FormCard
