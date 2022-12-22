import React from "react";
import Advantages from "../Components/Home Components/Advantages";
import Testimonials from "../Components/Home Components/Testimonials";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import ServicesEg from "../Components/Home Components/ServicesEg";
import Slider from "../Components/Home Components/Slider";
import Products from "../Components/Home Components/Products";

const Home = () => {
  return (
    <>
      <NavBar />
      <Slider />
      <ServicesEg />
      <Advantages />
      <Products />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
