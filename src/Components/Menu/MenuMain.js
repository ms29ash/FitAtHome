import React, { useEffect } from "react";
import tw from "tailwind-styled-components";
import FoodCard from "../Home/FoodCard";
import { useQuery, useQueryClient } from "react-query";
import axios from "../../axios";
import { useSearchParams } from "react-router-dom";

function MenuMain() {
  let [searchParams] = useSearchParams();
  const queryClient = useQueryClient();
  const type = searchParams.get("category") || null;
  // const type = useSelector((state) => state.food.type)
  const fetchFood = async () => {
    return axios.get("/food");
  };

  useEffect(() => {
    console.log(type);
  }, [type]);
  const filter = (arr, type) => {
    return arr.filter((food) => food.type === type);
  };

  const { data: food } = useQuery("food", fetchFood, {
    initialData: () => {
      return queryClient.getQueryData("food");
    },
  });
  const filtered = food?.data?.food || {};
  return (
    <Container>
      {food
        ? type === null
          ? food?.data?.food.map((item, index) => {
              return <FoodCard foodItem={item} key={item._id} />;
            })
          : type !== null
          ? filter(filtered, type).map((item, index) => {
              return <FoodCard foodItem={item} key={item._id} />;
            })
          : ""
        : Array(10)
            .fill()
            .map((item, index) => {
              return <FoodCard key={index} />;
            })}
    </Container>
  );
}

export default MenuMain;

const Container = tw.div` xl:p-4 p-1  w-[100%] h-max  items-stretch  flex-wrap xl:mt-1 mt-6  grid grid-cols-4`;
