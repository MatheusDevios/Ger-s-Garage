import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "./Pages/Auth";
import Home from "./Pages/Home";
import ProductsPage from "./Pages/ProductsPage";
import SingleProduct from "./Pages/SingleProduct";
import Cart from "./Pages/Cart";
import Services from "./Pages/Services";
import SingleServices from "./Pages/SingleServices";
import Error404 from "./Pages/Error404";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/service/:_id" element={<SingleServices />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/product/:_id" element={<SingleProduct />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/*" element={<Navigate replace to="/404" />} />
      <Route path="/404" element={<Error404 />} />
    </Routes>
  );
}

export default App;
