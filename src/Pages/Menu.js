import React from "react";
import tw from "tailwind-styled-components";
import FindFoodSideBar from "../Components/FindFoodPage/FindFoodSideBar";
import FindFoodMain from "../Components/FindFoodPage/FindFoodMain";

function Menu() {
  return (
    <Page>
      <Container>
        <FindFoodSideBar />
        <FindFoodMain />
      </Container>
    </Page>
  );
}

export default Menu;

const Page = tw.div`  py-200`;
const Container = tw.div` flex w-[97vw] xl:flex-row flex-col  mx-auto xl:mb-[18vh] mb-[5vh]`;
