import "./App.css"
import {
  createBrowserRouter,
  RouterProvider,
  createHashRouter,
} from "react-router-dom"
import { routes } from "@/Module/Navigation/Application/routes.tsx"
import { extendTheme, ChakraProvider } from "@chakra-ui/react"

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
}

const theme = extendTheme({ colors })

const router = createHashRouter(routes)
function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <RouterProvider router={router} />
      </ChakraProvider>
    </>
  )
}

export default App
