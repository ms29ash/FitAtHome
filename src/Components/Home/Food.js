import React, { useRef } from "react";
import FoodCard from "./FoodCard";
import { useQuery } from "react-query";
import axios from "../../axios";
import tw from "tailwind-styled-components";
import Slider from "../Slider/Slider";

function Food() {
  const fetchFood = async () => {
    return axios.get("/food");
  };

  const { data: food, isLoading, isError } = useQuery("food", fetchFood);

  return (
    <div className="w-screen flex justify-center pt-6 ">
      <Section>
        <h1 className="w-full text-black mb-8 md:mb-16 font-bold text-4xl text-center">
          Best Healthy Food
        </h1>

        <Slider>
          <>
            {isError || isLoading
              ? Array(10)
                  .fill()
                  .map((item, index) => {
                    return <FoodCard key={index} />;
                  })
              : food?.data?.food.map((foodItem) => {
                  return <FoodCard foodItem={foodItem} key={foodItem._id} />;
                })}
          </>
        </Slider>
      </Section>
    </div>
  );
}

export default Food;

const Section = tw.section` group px-3  w-full  xl:px-20  pt-10  pb-6 md:!pb-10`;
