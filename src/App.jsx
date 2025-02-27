import Home from "./pages/home"
import Authors from "./pages/author"
import Genre from "./pages/genre"
import { createBrowserRouter } from 'react-router-dom'
import "./components/components.css"

const App = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/authors',
    element: <Authors />
  },
  {
    path: '/genre',
    element: <Genre />
  }
])

export default App
