import React from "react";
import ProductSideBar from "../Components/Products/ProductSideBar";
import ProductsSection from "../Components/Products/ProductsSection";

function Products() {
  return (
    <div className=" flex justify-center w-screen bg-[#f2f2f2]  ">
      <div className="flex w-full max-w-[1400px]">
        <ProductSideBar />
        <ProductsSection />
      </div>
    </div>
  );
}

export default Products;
