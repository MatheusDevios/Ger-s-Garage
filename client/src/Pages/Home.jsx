import React from "react";
import Advantages from "../Components/Home/Advantages";
import Testimonials from "../Components/Home/Testimonials";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import ServicesEg from "../Components/Home/ServicesEg";
import Slider from "../Components/Home/Slider";
import Products from "../Components/Products";

const Home = () => {
  return (
    <>
      <NavBar />
      <Slider />
      <ServicesEg />
      <Advantages />
      <Products page={false} filters={{}} />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
