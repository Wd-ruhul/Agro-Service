import React from "react";
import Main from "../../Layout/Main";
import AddService from "../../Pages/Home/AddService/AddService";
import Home from "../../Pages/Home/Home/Home"
import Login from "../../Pages/Home/Login/Login";
import ServiceDetails from "../../Pages/Home/ServiceDetails/ServiceDetails";
import Services from "../../Pages/Home/Services/Services";
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
        element: <SignUp></SignUp>,
      },
      {
        path: "/add/service",
        element: <AddService></AddService>,
      },
      {
        path: "services",
        element: <Services></Services>,
      },
      {
        path: "/servicedetails/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/servicedetails/${params.id}`),
      },
    ],
  },
]);

export default router;
