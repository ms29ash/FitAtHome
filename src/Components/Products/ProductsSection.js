import React from "react";
import ProductCard from "./ProductCard";

function ProductsSection() {
  return (
    <div className="w-full p-[2.5%]  flex-1 grid grid-cols-4  gap-x-3 gap-y-3  h-full overflow-y-auto ">
      {Array(20)
        .fill("")
        .map((i, n) => {
          return <ProductCard />;
        })}
    </div>
  );
}

export default ProductsSection;
