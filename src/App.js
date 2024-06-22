import React, { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { fetchItemsByUserIdAsync } from "./features/cart/cartSlice";
import { selectLoggedInUser } from "./features/auth/authSlice";
import PageNotFound from "./pages/404";
import OrderSuccessPage from "./pages/OrderSuccessPage";
import UserOrders from "./features/user/Components/UserOrder";
import UserOrdersPage from "./pages/UserOrdersPage";
import UserProfile from "./features/user/Components/UserProfile";
import { fetchLoggedInUserAsync } from "./features/user/userSlice";
import LogOut from "./features/auth/Components/LogOut";
import ForgotPassWordPage from "./pages/LoginPage copy";

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
  {
    path: "/order-success/:id",
    element: (
      <OrderSuccessPage></OrderSuccessPage>
    ),
  },
  {
    path: "/orders",
    element: (
     <UserOrdersPage></UserOrdersPage>
    ),
  },
  {
    path: "/profile",
    element: (
     <UserProfile></UserProfile>
    ),
  },
  {
    path: "/logout",
    element: (
     <LogOut></LogOut>
    ),
  },
  {
    path: "/forgot-password",
    element: (
     <ForgotPassWordPage></ForgotPassWordPage>
    ),
  },
  {
    path: "*",
    element: (
      <PageNotFound></PageNotFound>
    ),
  },

]);

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  useEffect(() => {
    if (user) {
      dispatch(fetchItemsByUserIdAsync(user.id));
      dispatch( fetchLoggedInUserAsync(user.id)  );
    }
  }, [dispatch, user]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
