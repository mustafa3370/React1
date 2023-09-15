import React from "react";
import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";
import Layout from "./Components/Layout/Layout";
import Notfound from "./Components/NotFound/Notfound";


let routers = createBrowserRouter([
  {
    path: "",
    element: <Layout></Layout>,
    children: [
      { index: true, element: <Home></Home> },
      { path: "Contact", element: <Contact></Contact> },
      { path: "About", element: <About></About> },
      { path: "*", element: <Notfound></Notfound> },

    ],
  },
]);

function App() {
  return <RouterProvider router={routers}></RouterProvider>;
}

export default App;
