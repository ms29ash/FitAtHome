import React from "react";
import { useQuery } from "react-query";
import axios from "../../axios";
import tw from "tailwind-styled-components";
import ProductCard from "../Products/ProductCard";
import Slider from "../Slider/Slider";

function Products() {
  //Fetching product
  const fetchProduct = async () => {
    return axios.get("/product");
  };
  const { data } = useQuery("product", fetchProduct);

  return (
    <div className="w-screen flex justify-center pt-6 ">
      <Section>
        <h1 className="w-full text-black mb-8 md:mb-16 font-bold text-4xl text-center">
          Our Products
        </h1>
        <Slider>
          {data?.data &&
            data?.data?.map((item) => {
              return <ProductCard item={item} key={item._id} />;
            })}
        </Slider>
      </Section>
    </div>
  );
}

export default Products;

const Section = tw.section`px-3  w-full  xl:px-20  pt-10   pb-6 md:!pb-10 overflow-x-hidden group`;
