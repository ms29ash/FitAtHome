import React from "react";
import tw from "tailwind-styled-components";
import { getAllTotal } from "../../../logics/total";
import { BsBox2Heart } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

function BoxIcon({ boxOpenHandler }) {
  const [total, setTotal] = useState(0);
  const basket = useSelector((state) => state.basket.basket);
  useEffect(() => {
    setTotal(getAllTotal(basket));
  }, [basket]);

  return (
    <Container onClick={boxOpenHandler} className="relative">
      <BsBox2Heart className="text-3xl " />
      <Details>
        <p className="text-base">{basket?.length} items</p>
        <p>&#8377;{total}</p>
      </Details>
    </Container>
  );
}

export default BoxIcon;

const Container = tw.button` hidden sm:flex
 ml-1 lg:ml-5  py-1 px-4  rounded-lg   font-bold  text-white transition-all items-center    bg-ssgreen space-x-2
`;
const Details = tw.div`hidden xl:block text-left `;
