import React from "react";
import CheckoutForm from "../Components/Checkout/CheckoutForm";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";

const Checkout = () => {
  return (
    <div>
      <NavBar />
      <CheckoutForm />
      <Footer />
    </div>
  );
};

export default Checkout;
