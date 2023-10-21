import React, { useState } from "react";
import tw from "tailwind-styled-components";
import FoodDetail from "./FoodDetail";
import MenuMain from "./Menu/MenuMain";

function FoodDetails() {
  return (
    <Container>
      <FoodContainer>
        <FoodDetail />
      </FoodContainer>
      <Wrapper>
        <Head>More Food Items</Head>
        <Hr />
        <MenuMain />
      </Wrapper>
    </Container>
  );
}

export default FoodDetails;

const Container = tw.div``;
const FoodContainer = tw.div`mt-4 mx-auto lg:w-[80vw] w-[98vw]`;
const Wrapper = tw.div`xl:w-[80vw] w-[97vw] mx-auto`;
const Head = tw.h1``;
const Hr = tw.hr` bg-redfood my-5 h-[0.15rem]`;
