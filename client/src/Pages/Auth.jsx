import React from "react";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import AuthComp from "../Components/Auth/AuthComp";

const Auth = () => {
  return (
    <div>
      <NavBar />
      <AuthComp />
      <Footer />
    </div>
  );
};

export default Auth;
