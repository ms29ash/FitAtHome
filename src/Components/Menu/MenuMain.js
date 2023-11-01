import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import FoodCard from "../Home/FoodCard";
import { useQuery, useQueryClient } from "react-query";
import axios from "../../axios";
import { useSearchParams } from "react-router-dom";
import FoodCardSm from "./FoodCardSm";

function MenuMain() {
  const [data, setData] = useState(null);
  let [searchParams] = useSearchParams();
  const queryClient = useQueryClient();
  const type = searchParams.get("category") || "all";
  // const type = useSelector((state) => state.food.type)
  const fetchFood = async () => {
    return axios.get("/food");
  };

  const filter = (arr, type) => {
    return arr.filter((food) => food.type === type);
  };

  const { data: food, isSuccess } = useQuery("food", fetchFood, {
    initialData: () => {
      return queryClient.getQueryData("food");
    },
  });

  const filtered = food?.data?.food || null;

  useEffect(() => {
    if (filtered !== null) {
      if (type === "all") {
        setData(filtered);
      } else {
        let items = filter(filtered, type);
        setData(items);
      }
    }
  }, [type, filtered]);
  return (
    <Container>
      {isSuccess
        ? data?.map((item, index) => {
            return (
              <>
                <FoodCard foodItem={item} key={item._id + 1} />
                <FoodCardSm foodItem={item} key={item._id} />
              </>
            );
          })
        : Array(10)
            .fill()
            .map((item, index) => {
              return (
                <>
                  <FoodCard key={index} />
                  <FoodCardSm key={index + 1} />
                </>
              );
            })}
    </Container>
  );
}

export default MenuMain;

const Container = tw.div`  px-2 xl:p-4 flex-1 h-full  md:items-stretch   xl:mt-1 mt-3  grid grid-cols-1 sm:grid-cols-2 overflow-y-auto gap-x-2 md:grid-cols-3 lg:grid-cols-4 pb-[10vh] md:pb-1 `;
