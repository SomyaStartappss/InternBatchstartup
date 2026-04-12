import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About'
import Blog from './components/Blog'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Param from './components/Param'
import Career from './components/Career'
import MyProjects from './components/MyProjects'
import "./App.css"

const router = createBrowserRouter(
  [
    {
      path: "/",
      element:
        <div>
          <Navbar/>
          <Home />
        </div>
    },

    {
      path: "/about",
      element:
        <div>
          <Navbar/>
          <About />
        </div>

    },

    {
      path: "/blog",

      element: <div>
      <Navbar/>
      <Blog />
      </div>,
      children:[
        {
          path:'Career',
          element:<Career/>
        },
        {
          path:'MyProjects',
          element:<MyProjects/>    
        }
      ]
    },

     {
      path: "/student/:id",
       element: <div>
      <Navbar/>
      <Param/>
      </div>
    }
  ]
)

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App