import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Chat from "../pages/Chat";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Navbar from "./Navbar";



const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          path: "/",
          element: <Chat />
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "*",
          element: <Navigate to="/" />
        }
      ]
    },
  ]);

  return <RouterProvider router={router} />;

};

export default Router;