import React, { useState } from "react"
import { Box, Input, Text } from "@chakra-ui/react"

const InputText: React.VFC<{ placeholder: string; maxLength: number }> = ({
  placeholder,
  maxLength,
}) => {
  const [text, setText] = useState("")
  return (
    <Box>
      <Text>{`${text.length} / ${maxLength}`}</Text>
      <Input
        type="text"
        w="24rem"
        border="none"
        borderRadius="none"
        borderBottom="1px"
        borderBottomColor="gray.200"
        placeholder={placeholder}
        value={text}
        onChange={e => setText(e.currentTarget.value)}
        maxLength={maxLength}
        _focus={{
          outline: "none",
          borderBottom: "1px",
          borderBottomColor: "blue.500",
        }}
      />
    </Box>
  )
}

export default InputText
