import React from "react";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import Products from "../Components/Products";

const ProductsPage = () => {
  return (
    <div>
      <NavBar />
      <Products page={true} />
      <Footer />
    </div>
  );
};

export default ProductsPage;
