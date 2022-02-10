import { rest } from "msw"
import { mockTodoList } from "./mock-data/todo"

const apiUrl = (path: string): string => {
  return "http://localhost:5432" + path
}

export const handlers = [
  rest.get(apiUrl("/todos"), (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        todos: mockTodoList,
      })
    )
  }),
]
