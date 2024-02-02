// router
import { createBrowserRouter } from "react-router-dom";
import Root, { loader as rootLoader } from "./root";

// pages
import Home from "../pages/home";
import Explore from "../pages/explore";
// import Solana from "./pages/solana";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div>Oops this is an error</div>,
    loader: rootLoader,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "explore",
        element: <Explore />,
      },
      {
        path: "*",
        element: <Home />,
      },
    ],
  },
]);
