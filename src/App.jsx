import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import ButtonContext from "./Components/ContextAPI/ButtonContext";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ButtonContext>
          <Home />
        </ButtonContext>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;
