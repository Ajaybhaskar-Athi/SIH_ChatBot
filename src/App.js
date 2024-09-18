import React from "react";
  import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Bot from "../src/components/Bot";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Body from "../src/components/Body";
import About from "./components/About";
import ImageSlider from "./components/ImageSlider";

// Create the router using createBrowserRouter
const Home = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Body />
            <Bot />
            <ImageSlider/>
          </>
        ),
      },
      {
        path: "About",
        element: <About />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
