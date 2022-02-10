import React, { useState, useMemo, useEffect } from "react"
import { fetchTodoList } from "../redux/reducers/todoData"
import { useAppDispatch } from "../redux/hooks"
import {
  Heading,
  Box,
  Center,
  List,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  Link,
} from "@chakra-ui/react"
import ListItem from "../components/todo/list-item"
import { TodoData } from "../model"
import SearchInput from "../components/todo/search-input"
import TodoAddForm from "../components/todo/todo-add-form"
import { useNavigate } from "react-router-dom"

const TodoList: React.VFC<{
  searchText: string
  setSearchText: (v: string) => void
  todoList: TodoData[]
  modalControl: { isOpen: boolean; onOpen: () => void; onClose: () => void }
}> = ({ searchText, setSearchText, todoList, modalControl }) => {
  let navigate = useNavigate()
  return (
    <Box>
      <Center px={12} py={16}>
        <Heading>Todo List Demo</Heading>
      </Center>
      <Center>
        <Button
          bg="teal.300"
          color="white"
          onClick={modalControl.onOpen}
          fontSize={"sm"}
        >
          タスクを追加する
        </Button>
      </Center>
      <SearchInput text={searchText} setText={setSearchText} />
      <Center>
        <List spacing={3}>
          {todoList.map((v, i) => (
            <ListItem key={i} todo={v} />
          ))}
        </List>
      </Center>
      <Modal isOpen={modalControl.isOpen} onClose={modalControl.onClose}>
        <ModalOverlay />
        <ModalContent>
          <TodoAddForm title="test" />
        </ModalContent>
      </Modal>
    </Box>
  )
}

const TodoListContainer: React.VFC<{}> = ({}) => {
  const [searchText, setSearchText] = useState("")
  const [todos, setTodos] = useState<TodoData[]>([])
  const { isOpen, onOpen, onClose } = useDisclosure()
  let dispatch = useAppDispatch()

  useEffect(() => {
    ;(async () => {
      try {
        const resAction = await dispatch(fetchTodoList()).unwrap()
        console.log("success")
      } catch (err) {
        console.error(err)
      }
    })()
  }, [])

  useEffect(() => {
    ;(async () => {
      try {
        const res = await fetch("http://localhost:5432/todos")
        if (res) {
          const data: { todos: TodoData[] } = await res.json()
          setTodos(data.todos)
        }
      } catch (err) {
        console.error(err)
      }
    })()
  }, [])

  const todoList = useMemo(() => {
    return todos.filter(v => v.text.indexOf(searchText) !== -1)
  }, [todos, searchText])

  return (
    <TodoList
      searchText={searchText}
      setSearchText={setSearchText}
      todoList={todoList}
      modalControl={{
        isOpen,
        onOpen,
        onClose,
      }}
    />
  )
}

export default TodoListContainer
