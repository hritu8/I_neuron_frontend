import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./features/counter/Counter";
import ProductList from "./features/product-list/components/ProductList";
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
import Cart from "./features/cart/Cart";
import CartPage from "./pages/CartPage";
import CheckOutPage from "./pages/CheckOutPage";
import ProductDetails from "./features/product-list/components/ProductDetails";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import Protected from "./features/auth/Components/Protected";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        <Home></Home>
      </Protected>
    ),
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignUpPage></SignUpPage>,
  },
  {
    path: "/cart",
    element: <CartPage></CartPage>,
  },
  {
    path: "/checkout",
    element: (
      <Protected>
        {" "}
        <CheckOutPage></CheckOutPage>
      </Protected>
    ),
  },
  {
    path: "/product-details/:id",
    element: (
      <Protected>
        <ProductDetailsPage></ProductDetailsPage>
      </Protected>
    ),
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
