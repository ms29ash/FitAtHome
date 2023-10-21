import React from "react";
import tw from "tailwind-styled-components";
import MenuSideBar from "../Components/Menu/MenuSideBar";
import MenuMain from "../Components/Menu/MenuMain";

function Menu() {
  return (
    <Page>
      <Container>
        <MenuSideBar />
        <MenuMain />
      </Container>
    </Page>
  );
}

export default Menu;

const Page = tw.div`  py-200 bg-[#f2f2f2]`;
const Container = tw.div` flex w-[97vw] xl:flex-row flex-col  mx-auto xl:mb-[18vh] mb-[5vh]`;
