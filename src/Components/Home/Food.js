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
    <Section>
      <h1 className="heading  ">Our Menu</h1>

      <Slider>
        <>
          {isError || isLoading
            ? Array(10)
                .fill()
                .map((item, index) => {
                  return <FoodCard key={index} />;
                })
            : food?.data?.food.map((foodItem) => {
                return (
                  <FoodCard
                    className={"w-[250px]"}
                    foodItem={foodItem}
                    key={foodItem._id}
                  />
                );
              })}
        </>
      </Slider>
    </Section>
  );
}

export default Food;

const Section = tw.section` group   w-full    pt-[3.5rem]`;
