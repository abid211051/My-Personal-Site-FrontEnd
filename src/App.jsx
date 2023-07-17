import React from "react";
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Home from "./Components/Home/Home";
import Test from './Components/Test'
import ButtonContext from "./Components/ContextAPI/ButtonContext";
const App = () => {
  const router = createBrowserRouter([
    {
      path : '/',
      element : <ButtonContext><Home/></ButtonContext>
    },
    {
      path : 'test',
      element : <Test/>
    }
  ])

  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
