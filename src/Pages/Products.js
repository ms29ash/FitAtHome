import React from "react";
import ProductSideBar from "../Components/Products/ProductSideBar";
import ProductsSection from "../Components/Products/ProductsSection";

function Products() {
  return (
    <div className=" flex justify-center w-screen bg-[#f2f2f2]  ">
      <div className="flex w-full max-w-[1400px] flex-col lg:flex-row max-w-screen 2xl:max-w-[1600px] max-h-[97vh]  lg:max-h-max  overflow-hidden  ">
        <ProductSideBar />
        <ProductsSection />
      </div>
    </div>
  );
}

export default Products;
