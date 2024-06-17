// router
import { createBrowserRouter } from "react-router-dom";
import Root, { loader as rootLoader } from "./root";

// pages
import Home from "../pages/home";
import Explore from "../pages/explore";
import PoolDetails from "../pages/poolDetails"; 
import Borrow from "../pages/borrow"; // Adjust if your structure is different
// Make sure to import the new component

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div>Oops this is an error</div>,
    loader: rootLoader,
    children: [
      {
        path: "/", // Home page
        element: <Home />,
      },
      {
        path: "explore", // Explore page
        element: <Explore />,
      },
      {
        path: "pool-details", // Pool details page
        element: <PoolDetails />,
      },
      { path: "borrow", element: <Borrow /> },
      {
        path: "*", // Fallback for any other path
        element: <Home />,
      },
    ],
  },
]);
