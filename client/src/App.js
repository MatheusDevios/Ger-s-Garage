import React, { Suspense, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Components/Loading";
import { authActions } from "./Redux/authRedux";
import { userRequest } from "./Utils/requestMethods";
import { cartActions } from "./Redux/cartRedux";
import Appointment from "./Components/Appointment/Appointment";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const Invoice = React.lazy(() => import("./Pages/Invoice"));
const Admin = React.lazy(() => import("./Pages/Admin"));
const Auth = React.lazy(() => import("./Pages/Auth"));
const User = React.lazy(() => import("./Pages/User"));
const Home = React.lazy(() => import("./Pages/Home"));
const ProductsPage = React.lazy(() => import("./Pages/ProductsPage"));
const SingleProduct = React.lazy(() => import("./Pages/SingleProduct"));
const Cart = React.lazy(() => import("./Pages/Cart"));
const Checkout = React.lazy(() => import("./Pages/Checkout"));
const Services = React.lazy(() => import("./Pages/Services"));
const SingleServices = React.lazy(() => import("./Pages/SingleServices"));
const Error404 = React.lazy(() => import("./Pages/Error404"));

function App() {
  const dispatch = useDispatch();
  const authToken = localStorage.getItem("token");
  const authUserId = localStorage.getItem("userId");
  const cartItems = JSON.parse(localStorage.getItem("cartItems"));
  const cartTotalPrice = parseInt(localStorage.getItem("cartTotalAmount"));
  const isLogged = useSelector((state) => state.auth.isLoggedIn);
  const isAdmin = useSelector((state) => state.auth.isAdmin);

  const persistCartHandler = () => {
    if (cartItems) {
      Object.keys(cartItems).forEach(function (product, index) {
        dispatch(
          cartActions.updateCartHandler({
            items: cartItems,
            totalAmount: cartTotalPrice,
          })
        );
      });
    }
  };

  useEffect(() => {
    const getUser = async () => {
      if (authToken) {
        const res = await userRequest.get(`users/find/${authUserId}`);
        // console.log(res.data);
        if (res.data) {
          dispatch(
            authActions.login({
              token: authToken,
              userId: authUserId,
              isAdmin: res.data.isAdmin,
              name: `${res.data.firstname} ${res.data.surname}`,
              phone: res.data.phone,
              email: res.data.email,
              maker: res.data.maker,
              type: res.data.type,
              license: res.data.license,
            })
          );
        }
      } else {
        dispatch(authActions.logout());
      }
    };
    persistCartHandler();
    getUser();
    // eslint-disable-next-line
  }, []);

  return (
    <MuiThemeProvider>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/admin"
            element={isAdmin ? <Admin /> : <Navigate replace to="/user" />}
          />
          <Route
            path="/user"
            element={isLogged ? <User /> : <Navigate replace to="/auth" />}
          />
          <Route path="/services" element={<Services />} />
          <Route path="/service/:_id" element={<SingleServices />} />
          <Route
            path="/auth"
            element={!isLogged ? <Auth /> : <Navigate replace to="/admin" />}
          />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:_id" element={<SingleProduct />} />
          <Route
            path="/invoice/:_id"
            element={isLogged ? <Invoice /> : <Navigate replace to="/*" />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/checkout"
            element={isLogged ? <Checkout /> : <Navigate replace to="/auth" />}
          />
          <Route path="/*" element={<Navigate replace to="/404" />} />
          <Route path="/404" element={<Error404 />} />
          <Route path="/appointment" element={<Appointment />} />
        </Routes>
      </Suspense>
    </MuiThemeProvider>
  );
}

export default App;
