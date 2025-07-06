import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Root.jsx'
import Home from './Componet/home.jsx'
import About from "./Componet/about.jsx"
import Project from './Componet/Project.jsx'
import Contact from './Componet/Contact.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    children : [
      {
        path : '',
        element: <Home/>,
      },
      {
        path : '/about',
        element: <About/>,
      },
      {
        path : '/Project',
        element: <Project/>,
      },
      {
        path : '/Contact',
        element: <Contact/>,
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
