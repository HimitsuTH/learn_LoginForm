import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import Login from "./pages/Login";
import { FormData } from "./pages/Login";

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
    errorElement: <div>Error</div>,
  },
  {
    path: "login",
    element: <Login onSubmit={handleSubmit} />,
    errorElement: <div>Error</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
