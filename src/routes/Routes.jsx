import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import { ErrorPages, Home, JobDetails, Register, Signin } from "../pages";
import { Loader } from "../components";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPages />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/job/:id",
        Component: JobDetails,
        hydrateFallbackElement: <Loader />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/jobs/${params.id}`),
        
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: Signin,
      },
    ],
  },
]);
