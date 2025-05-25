import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import { ErrorPages, Home } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement:<ErrorPages/>,
    children: [
      {
        index: true,
       Component: Home,
      },
    ],
  },
]);
