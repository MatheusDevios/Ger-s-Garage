import React from "react";
import Advantages from "../Components/Home/Advantages";
import Testimonials from "../Components/Home/Testimonials";
import ServicesEg from "../Components/Home/ServicesEg";
import Slider from "../Components/Home/Slider";
import Products from "../Components/Products";

const Home = () => {
  return (
    <>
      <Slider />
      <ServicesEg />
      <Advantages />
      <Products page={false} filters={{}} />
      <Testimonials />
    </>
  );
};

export default Home;
