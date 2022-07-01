import React, { useState } from "react";
import tw from "tailwind-styled-components";
import { ReactQueryDevtools } from "react-query/devtools";
import FoodDetail from "./FoodDetail";
import FoodPageMain from "./FoodPageMain";


function FoodDetails() {

  return (
    <Container>
      <FoodDetail />
      <Wrapper>
        <Head>More Food Items</Head>
        <Hr />
        <FoodPageMain />
      </Wrapper>
      <ReactQueryDevtools initialIsOpen={false} />
    </Container>
  );
}

export default FoodDetails;

const Container = tw.div`mt-[12vh] mx-auto w-[80vw]`;
const Wrapper = tw.div``;
const Head = tw.h1``
const Hr = tw.hr` bg-redfood my-5 h-[0.15rem]`
