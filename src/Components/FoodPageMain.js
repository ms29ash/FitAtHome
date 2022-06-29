import React, { useEffect } from "react";
import tw from "tailwind-styled-components";
import FoodPgCard from "./FoodPgCard";
import { useQuery, useQueryClient } from "react-query";
import axios from "../axios";
import { ReactQueryDevtools } from "react-query/devtools";
import { useSelector } from 'react-redux'

function FoodPageMain(props) {
  const { lowerPrice, upperPrice } = props || {};
  const queryClient = useQueryClient();
  const type = useSelector((state) => state.food.type)
  const fetchFood = async () => {
    return axios.get("/food/food");
  };

  useEffect(() => {
    console.log(type)
  }, [type])
  const filter = (arr, type) => {
    return arr.filter((food) => food.type === type);
  };

  const { data: food, isLoading, isError, error } = useQuery(
    "food-page",
    fetchFood,
    {
      initialData: () => {
        // Use a todo from the 'todos' query as the initial data for this todo query
        return queryClient.getQueryData("food");
      },
    }
  );
  const filtered = food?.data?.food || {};
  return (
    <Container>
      {
        food &&
        (type === null
          ? food?.data?.food.map((item, index) => {
            return <FoodPgCard foodItem={item} key={item._id} />;
          })
          : type !== null
            ? filter(filtered, type).map((item, index) => {
              return <FoodPgCard foodItem={item} key={item._id} />;
            })
            : "")}
      <ReactQueryDevtools initialIsOpen={false} />
    </Container>
  );
}

export default FoodPageMain;

const Container = tw.div` p-4  w-[100%] xl:w-[80%] grid md:grid-cols-3 grid-cols-2 gap-x-5 gap-y-5`;
