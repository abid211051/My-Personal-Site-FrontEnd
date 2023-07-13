import React from "react";
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Home from "./Components/Home/Home";
const App = () => {
  const router = createBrowserRouter([
    {
      path : '/',
      element : <Home/>
    },
  ])

  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
