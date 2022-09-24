
import React from "react";
import tw from "tailwind-styled-components";
import FoodPageSideBar from "./FoodPageSideBar";
import FoodPageMain from "./FoodPageMain";

function FoodPage() {

  return (
    <Page>
      <Container>
        <FoodPageSideBar />
        <FoodPageMain />
      </Container>
    </Page>
  );
}

export default FoodPage;

const Container = tw.div` flex w-[97vw] xl:flex-row flex-col  mx-auto xl:mb-[18vh] mb-[5vh]`;
const Page = tw.div` mt-[12vh] py-200`;
