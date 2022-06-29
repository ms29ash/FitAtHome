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

const Container = tw.div` flex w-[90vw] xl:flex-row flex-col  mx-auto  `;
const Page = tw.div` mt-[12vh] py-200`;
