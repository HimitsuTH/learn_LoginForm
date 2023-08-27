import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

//==>>Pages
import App from "./App.tsx";
import Login from "./pages/Login";
import Home from "./pages/Home.tsx";
import UserPage from "./pages/UserPage.tsx";
import { FormData } from "./pages/Login";
import { ErrorPage } from "./pages/ErrorPage.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function handleSubmit(formData: FormData) {
  if (formData.email == "admin@test.com" && formData.password == "12345") {
    return true;
  }

  return false;
}

const router = createBrowserRouter([

  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path:"/",
        element: <Home/>,
        index: true
      },
      {
        path:"/user",
        element: <UserPage/>
      },
    ]
  },
  {
    path: "/login",
    element: <Login onSubmit={handleSubmit} />,
    errorElement: <ErrorPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
