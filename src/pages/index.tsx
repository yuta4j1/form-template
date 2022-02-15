import React from "react"
import { Box, Link } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

const IndexPage: React.VFC<{
  toForm1: () => void
  toTodo: () => void
  toCatalog: () => void
}> = ({ toForm1, toTodo, toCatalog }) => {
  return (
    <Box>
      <Link
        onClick={() => {
          toForm1()
        }}
      >
        フォーム画面へ
      </Link>
      <Link
        onClick={() => {
          toTodo()
        }}
      >
        Todoリスト画面へ
      </Link>
      <Link
        onClick={() => {
          toCatalog()
        }}
      >
        コンポーネントカタログ画面へ
      </Link>
    </Box>
  )
}

const IndexPageContainer = () => {
  let navigate = useNavigate()
  const toForm1 = () => {
    navigate("/form1")
  }
  const toTodo = () => {
    navigate("/todo")
  }
  const toCatalog = () => {
    navigate("/catalog")
  }
  return <IndexPage toForm1={toForm1} toTodo={toTodo} toCatalog={toCatalog} />
}

export default IndexPageContainer
