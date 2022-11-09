import React from "react";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home"
import Login from "../../Pages/Home/Login/Login";
import SignUp from "../../Pages/Home/SignUp/SignUp";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
    ],
  },
]);

export default router;
