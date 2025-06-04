import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import {
  AddJobs,
  ErrorPages,
  Home,
  JobApply,
  JobDetails,
  MyApplications,
  MyPostedJobs,
  Register,
  Signin,
  ViewApplications,
} from "../pages";
import { Loader } from "../components";
import PrivateRoute from "./PrivateRoute";

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
        element: <JobDetails />,
        hydrateFallbackElement: <Loader />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/jobs/${params.id}`),
      },
      {
        path: "/jobApply/:id",
        element: (
          <PrivateRoute>
            <JobApply />
          </PrivateRoute>
        ),
      },
      {
        path: "/myApplications",
        element: (
          <PrivateRoute>
            <MyApplications />
          </PrivateRoute>
        ),
      },
      {
        path: "/addJob",
        element: (
          <PrivateRoute>
            <AddJobs />
          </PrivateRoute>
        ),
      },
      {
        path: "/myPostedJobs",
        element: (
          <PrivateRoute>
            <MyPostedJobs />
          </PrivateRoute>
        ),
      },
      {
        path: "/applications/:job_id",
        element: (
          <PrivateRoute>
            <ViewApplications />
          </PrivateRoute>
        ),
        hydrateFallbackElement: <Loader />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/applications/job/${params.job_id}`),
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
