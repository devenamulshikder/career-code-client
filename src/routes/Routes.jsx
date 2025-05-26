import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import { ErrorPages, Home, Register } from "../pages";

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
      {
        path:'/register',
        Component: Register
      }
    ],
  },
]);
