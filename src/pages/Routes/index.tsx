import { createBrowserRouter, RouterProvider } from "react-router";
import { Home } from "../Home";
import { Login } from "../login";
import { Register } from "../register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
])

export function AppRoutes() {
  return <RouterProvider  router={router} />
}