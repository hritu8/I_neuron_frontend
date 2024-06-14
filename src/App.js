import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./features/counter/Counter";
import ProductList from "./features/product-list/ProductList";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignUp from "./features/auth/Components/SignUp";
import SignUpPage from "./pages/SignUpPage";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignUpPage></SignUpPage>,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
