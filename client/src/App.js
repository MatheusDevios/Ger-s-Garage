import React, { Suspense } from "react";
import { Routes, Route, Navigate, redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "./Components/Loading";
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
  const isLogged = useSelector((state) => state.auth.isLoggedIn);
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service/:_id" element={<SingleServices />} />
        <Route
          path="/auth"
          element={!isLogged ? <Auth /> : <Navigate replace to="/user" />}
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
