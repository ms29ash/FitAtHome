import React from "react";
import ProductCard from "./ProductCard";
import axios from "../../axios";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";

function ProductsSection() {
  let [searchParams] = useSearchParams();
  const fetchProduct = async () => {
    return axios.get("/product");
  };

  const type = searchParams.get("category") || null;
  const { data } = useQuery("product", fetchProduct);

  const filterData = (data, category) => {
    if (category === null || category === undefined) {
      return data;
    } else {
      const filteredData = data?.filter((item) => item.category === category);
      return filteredData;
    }
  };

  return (
    <div className="w-full p-[2.5%]  flex-1 grid grid-cols-4  gap-x-3 gap-y-3  h-full overflow-y-auto pb-[10rem] ">
      {data?.data &&
        filterData(data?.data, type).map((product) => {
          return <ProductCard item={product} key={product._id} />;
        })}
    </div>
  );
}

export default ProductsSection;
