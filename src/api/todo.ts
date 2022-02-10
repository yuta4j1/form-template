import { getRequest } from "./index"
import { TodoData } from "../model"

export const todoAPI = {
  todoList: () => {
    return getRequest<TodoData[]>("/todos")
  },
}
