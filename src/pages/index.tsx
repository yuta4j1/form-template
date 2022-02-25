import React from "react"
import { Box, Flex, Link } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

const IndexPage: React.VFC<{
  toForm1: () => void
  toTodo: () => void
  toCatalog: () => void
  toCamera: () => void
  toConfirmLayout: () => void
  toFileUpload: () => void
}> = ({
  toForm1,
  toTodo,
  toCatalog,
  toCamera,
  toConfirmLayout,
  toFileUpload,
}) => {
  return (
    <Box>
      <Flex direction="column">
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
        <Link
          onClick={() => {
            toCamera()
          }}
        >
          カメラ画面へ
        </Link>
        <Link
          onClick={() => {
            toConfirmLayout()
          }}
        >
          レイアウト確認画面へ
        </Link>
        <Link
          onClick={() => {
            toFileUpload()
          }}
        >
          ファイルアップロード画面へ
        </Link>
      </Flex>
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
  const toCamera = () => {
    navigate("/camera")
  }
  const toConfirmLayout = () => {
    navigate("/confirm-layout")
  }
  const toFileUpload = () => {
    navigate("/file-upload")
  }
  return (
    <IndexPage
      toForm1={toForm1}
      toTodo={toTodo}
      toCatalog={toCatalog}
      toCamera={toCamera}
      toConfirmLayout={toConfirmLayout}
      toFileUpload={toFileUpload}
    />
  )
}

export default IndexPageContainer
