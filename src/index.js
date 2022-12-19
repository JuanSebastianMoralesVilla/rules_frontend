import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,

  Outlet,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./routes/Home";
import Data from "./routes/Data";
import Credits from "./routes/Credits";
import "./App.css"
import Navbar from "./components/Navbar";

import 'bootstrap/dist/css/bootstrap.min.css';

const AppLayout = () => (

  <>
    <Navbar />
    <Outlet />
  </>
);
const router = createBrowserRouter(createRoutesFromElements(


 
  <Route element={<AppLayout />}>
    <Route path="/" element={<Home />} />
    <Route path="/data" element={<Data />} />
    <Route path="/credits" element={<Credits />} />
  </Route>

  
));

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
/*
const router = createBrowserRouter([
  {
    element: < AppLayout />,
    children: [


      {
        path: "/",
        element: <Home />,
      },
      {
        path: "data",
        element: <Data />,
      },
      {
        path: "credits",
        element: <Credits />,
      },

    ],
  },



]);
*/

