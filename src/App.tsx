import React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import Router from "./router"
import { Provider } from "react-redux"
import { store } from "./redux/store"
import { PersistGate } from "redux-persist/integration/react"
import { persistor } from "./redux/store"

if (process.env.NODE_ENV === "development") {
  const { worker } = await import("./mocks/browser")
  worker.start()
}

const App: React.VFC<{}> = ({}) => {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router />
        </PersistGate>
      </Provider>
    </ChakraProvider>
  )
}

export default App
