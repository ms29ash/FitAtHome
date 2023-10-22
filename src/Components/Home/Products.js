import React, { useRef } from "react";
import FoodCard from "./FoodCard";
import { useQuery } from "react-query";
import axios from "../../axios";
import tw from "tailwind-styled-components";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import ProductCard from "../Products/ProductCard";

function Products() {
  const scrollRef = useRef(null);
  const fetchProduct = async () => {
    return axios.get("/product");
  };

  const { data, isLoading, isError } = useQuery("product", fetchProduct);

  const rightScroll = () => {
    scrollRef.current.scrollLeft += 400;
  };
  const leftScroll = () => {
    scrollRef.current.scrollLeft -= 400;
  };

  console.log(data);
  return (
    <div className="w-screen flex justify-center pt-6 ">
      <FoodSection id="food">
        <h1 className="w-full text-black mb-8 md:mb-16 font-bold text-4xl text-center">
          Our Products
        </h1>

        <div className="flex justify-between w-screen z-20">
          <LeftBtn onClick={leftScroll} className="btn-arrow">
            <FaAngleLeft />
          </LeftBtn>
          <RightBtn onClick={rightScroll} className="btn-arrow">
            <FaAngleRight />
          </RightBtn>
        </div>
        <div
          className="relative w-full flex items-stretch gap-6 snap-x snap-mandatory overflow-x-auto pb-4 "
          id="food-section"
          ref={scrollRef}
        >
          {data?.data &&
            //   isError || isLoading
            //     ? Array(10)
            //         .fill()
            //         .map((item, index) => {
            //           return <FoodCard key={index} />;
            //         })
            //     :
            data?.data?.map((item) => {
              return (
                <ProductCard
                  classes={"min-w-[300px]"}
                  item={item}
                  key={item._id}
                />
              );
            })}
        </div>
      </FoodSection>
    </div>
  );
}

export default Products;

const FoodSection = tw.section`px-3 bg-white w-full  xl:px-20  pt-10  xl:!max-w-[1600px] pb-6 md:!pb-10`;
const Button = tw.button`hidden mt-20 md:block w-16  h-20 absolute  z-20  text-black  px-4 py-3 text-5xl bg-white rounded stroke-1  cursor-pointer`;

const LeftBtn = tw(Button)`
left-0`;

const RightBtn = tw(Button)`
right-0`;
