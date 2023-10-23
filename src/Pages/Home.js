import React from "react";
import Food from "../Components/Home/Food";
import Hero from "../Components/Home/Hero";
import Category from "../Components/Home/Category";
import Trial from "../Components/Home/Trial";
import Subscribe from "../Components/Home/Subscribe";
import Testimonials from "../Components/Home/Testimonials";
import Services from "../Components/Home/Services";
import Products from "../Components/Home/Products";

function Home(props) {
  return (
    <>
      <Hero />
      <div className="w-screen flex justify-center ">
        <div className="max-w-[1600px] px-2 w-full items-center flex-col ">
          <Category />
          <Food />
          <Products />
        </div>
      </div>
      <Services />
      <Trial />
      <Subscribe />
      <Testimonials />
    </>
  );
}

export default Home;
