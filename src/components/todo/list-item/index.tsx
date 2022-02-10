import React from "react"
import { ListItem, Checkbox, Flex, Text } from "@chakra-ui/react"
import { TodoData } from "../../../model"

const ATodo: React.VFC<{ todo: TodoData }> = ({ todo }) => {
  return (
    <ListItem>
      <Flex>
        <Checkbox isChecked={todo.done} />
        <Text px="4">{todo.text}</Text>
      </Flex>
    </ListItem>
  )
}

export default ATodo
