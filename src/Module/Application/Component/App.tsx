import "./App.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { routes } from "@/Module/Navigation/Application/routes.tsx"
// 1. Import the extendTheme function
import { extendTheme, ChakraProvider } from "@chakra-ui/react"

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
}

const theme = extendTheme({ colors })
const router = createBrowserRouter(routes)

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
