import React from 'react'
import Nav from './Nav'
import Home from './Home'
import Product from './Product'
import Login from './Login'
import Signup from './Signup'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

let myrouter = createBrowserRouter([{

  path: "/",
  element: <Nav></Nav>,
  children: [
    {
      path: "./",
      element: <Home></Home>
    }, {
      path: "login",
      element: <Login></Login>
    }, {
      path: "signup",
      element: <Signup></Signup>
    }, {
      path: "product",
      element: <Product></Product>
    }

  ]


}])

const App = () => {
  return (
    <RouterProvider router={myrouter}></RouterProvider>
  )
}

export default App
