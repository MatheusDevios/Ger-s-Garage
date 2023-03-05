import React, { Suspense, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Components/Loading";
import { authActions } from "./Redux/authRedux";
import { userRequest } from "./Utils/requestMethods";
import { cartActions } from "./Redux/cartRedux";
import Appointment from "./Components/Appointment/Appointment";
import InvoiceAdmin from "./Pages/InvoiceAdmin";
import AES from "crypto-js/aes";
import encUtf8 from "crypto-js/enc-utf8";
import Cookies from "js-cookie";

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
const secretCart = process.env.REACT_APP_CART_SECRET;

function App() {
  const dispatch = useDispatch();
  const authToken = localStorage.getItem("token");
  const authUserId = localStorage.getItem("userId");
  const isLogged = useSelector((state) => state.auth.isLoggedIn);
  const isAdmin = useSelector((state) => state.auth.isAdmin);

  const persistCartHandler = () => {
    try {
      const encryptedData = Cookies.get("encryptedData");
      const { cart, cartTotalAmount } = JSON.parse(
        AES.decrypt(encryptedData, secretCart).toString(encUtf8)
      );
      // console.log(cart);
      // console.log(cartTotalAmount);
      if (cart) {
        dispatch(
          cartActions.updateCartHandler({
            items: cart,
            totalAmount: cartTotalAmount,
            userId: authUserId,
          })
        );
      }
    } catch (error) {
      console.log("Empty cart.");
    }
  };

  useEffect(() => {
    const getUser = async () => {
      if (authToken) {
        const res = await userRequest.get(`users/find/${authUserId}`);
        // console.log(res.data.cart);
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
          // console.log(res.data.cart);
          // console.log(res.data.cartTotalAmount);
          dispatch(
            cartActions.updateCartHandler({
              items: res.data.cart,
              totalAmount: res.data.cartTotalAmount,
              userId: authUserId,
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
        {/* <Route path="/product/:category" element={<ProductList />} /> */}
        <Route
          path="/invoice/:_id"
          element={isLogged ? <Invoice /> : <Navigate replace to="/*" />}
        />
        <Route
          path="/invoiceAdmin/:_id"
          element={isAdmin ? <InvoiceAdmin /> : <Navigate replace to="/*" />}
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
  );
}

export default App;
