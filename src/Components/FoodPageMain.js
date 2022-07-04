import React, { useEffect } from "react";
import tw from "tailwind-styled-components";
import FoodPgCard from "./FoodPgCard";
import { useQuery, useQueryClient } from "react-query";
import axios from "../axios";
import { useSelector } from 'react-redux'

function FoodPageMain() {
  const queryClient = useQueryClient();
  const type = useSelector((state) => state.food.type)
  const fetchFood = async () => {
    return axios.get("/food");
  };

  useEffect(() => {
    console.log(type)
  }, [type])
  const filter = (arr, type) => {
    return arr.filter((food) => food.type === type);
  };

  const { data: food, isLoading, isError, error } = useQuery(
    "food",
    fetchFood,
    {
      initialData: () => {

        return queryClient.getQueryData("food");
      },
    }
  );
  const filtered = food?.data?.food || {};
  return (
    <Container>
      {
        food ?
          (type === null
            ? food?.data?.food.map((item, index) => {
              return <FoodPgCard foodItem={item} key={item._id} />;
            })
            : type !== null
              ? filter(filtered, type).map((item, index) => {
                return <FoodPgCard foodItem={item} key={item._id} />;
              })
              : "") : Array(10).fill().map((item, index) => { return <FoodPgCard key={index} /> })}

    </Container>
  );
}

export default FoodPageMain;

const Container = tw.div` xl:p-4 p-1  w-[100%] xl:w-[80%] grid md:grid-cols-3 grid-cols-2 xl:gap-x-5 gap-x-3 gap-y-5`;
