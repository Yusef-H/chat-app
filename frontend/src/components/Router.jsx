import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Chat from "../pages/Chat";
import Login from "../pages/Login";
import Register from "../pages/Register";


const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Chat />,
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
  ]);

  return <RouterProvider router={router} />;
};

export default Router;