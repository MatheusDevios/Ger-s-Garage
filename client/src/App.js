import React, { Suspense, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Components/Loading";
import { authActions } from "./Redux/authRedux";
// import { useQuery } from "@tanstack/react-query";
import { userRequest } from "./requestMethods";
import { cartActions } from "./Redux/cartRedux";
const Admin = React.lazy(() => import("./Pages/Admin"));
const Auth = React.lazy(() => import("./Pages/Auth"));
const User = React.lazy(() => import("./Pages/User"));
const Home = React.lazy(() => import("./Pages/Home"));
const ProductsPage = React.lazy(() => import("./Pages/ProductsPage"));
const SingleProduct = React.lazy(() => import("./Pages/SingleProduct"));
const Cart = React.lazy(() => import("./Pages/Cart"));
const Services = React.lazy(() => import("./Pages/Services"));
const SingleServices = React.lazy(() => import("./Pages/SingleServices"));
const Error404 = React.lazy(() => import("./Pages/Error404"));

function App() {
  const dispatch = useDispatch();
  const authToken = localStorage.getItem("token");
  const authUserId = localStorage.getItem("userId");
  // const cartItems = localStorage.getItem("cartItems");
  const cartItems = JSON.parse(localStorage.getItem("cartItems"));
  const cartTotalPrice = parseInt(localStorage.getItem("cartTotalAmount"));
  const isLogged = useSelector((state) => state.auth.isLoggedIn);
  const isAdmin = useSelector((state) => state.auth.isAdmin);

  // const { data } = useQuery(["userInfo"], async () => {
  //   return await userRequest
  //     .get(`users/find/${authUserId}`)
  //     .then((res) => res.data)
  //     .then((data) => console.log(data));
  // });

  // const cartItemAddHandler = (item) => {
  //   // console.log(item);
  //   const cartItem = { ...item, amount: 1 };
  //   dispatch(cartActions.addItemToCartHandler(cartItem));
  // };
  const persistCartHandler = () => {
    Object.keys(cartItems).forEach(function (product, index) {
      dispatch(
        cartActions.updateCartHandler({
          items: cartItems,
          totalAmount: cartTotalPrice,
        })
      );
    });
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
            })
          );
          persistCartHandler();
        }
      } else {
        dispatch(authActions.logout());
      }
    };
    getUser();
    // eslint-disable-next-line
  }, []);

  return (
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
        <Route path="/cart" element={<Cart />} />
        <Route path="/*" element={<Navigate replace to="/404" />} />
        <Route path="/404" element={<Error404 />} />
      </Routes>
    </Suspense>
  );
}

export default App;
