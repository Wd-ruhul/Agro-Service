import React from "react";
import Main from "../../Layout/Main";
import AddService from "../../Pages/Home/AddService/AddService";
import Blog from "../../Pages/Home/Blog/Blog";
import Home from "../../Pages/Home/Home/Home"
import Login from "../../Pages/Home/Login/Login";
import MyReview from "../../Pages/Home/MyReview/MyReview";
import ServiceDetails from "../../Pages/Home/ServiceDetails/ServiceDetails";
import Services from "../../Pages/Home/Services/Services";
import SignUp from "../../Pages/Home/SignUp/SignUp";
import PrivateRoutes from "../PrivateRoute/PrivateRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute"

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
        element: (
          <PrivateRoutes>
            <AddService></AddService>
          </PrivateRoutes>
        ),
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
      {
        path: "/myreview",
        element: (
          <PrivateRoute>
            <MyReview></MyReview>
          </PrivateRoute>
        ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

export default router;
