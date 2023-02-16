
import React from "react";
import tw from "tailwind-styled-components";
import SearchPageSideBar from "../Components/SearchPage/SearchPageSideBar";
import SearchPageMain from "../Components/SearchPage/SearchPageMain";

function Search() {

  return (
    <Page>
      <Container>
        <SearchPageSideBar />
        <SearchPageMain />
      </Container>
    </Page>
  );
}

export default Search;

const Page = tw.div`  py-200`;
const Container = tw.div` flex w-[97vw] xl:flex-row flex-col  mx-auto xl:mb-[18vh] mb-[5vh]`;
