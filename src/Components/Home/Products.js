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
    <Section>
      <h1 className="heading  ">Our Products</h1>
      <Slider>
        {data?.data &&
          data?.data?.map((item) => {
            return <ProductCard item={item} key={item._id} />;
          })}
      </Slider>
    </Section>
  );
}

export default Products;

const Section = tw.section`w-full     pb-6 md:!pb-10 overflow-x-hidden group  pt-[3rem]`;
