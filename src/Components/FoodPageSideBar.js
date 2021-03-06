import React, { useRef } from "react";
import tw from "tailwind-styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setType } from "../features/filter/foodFilterSlice";
import { AiOutlineCaretDown } from "react-icons/ai";

function FoodPageSideBar() {
  const refContainer = useRef();
  const refGroup = useRef();
  const refArrow = useRef();
  const dispatch = useDispatch();
  const type = useSelector((state) => state.food.type);

  return (
    <Container ref={refContainer}>
      <Wrapper>
        <TopHead>Filter</TopHead>
        <Heading onClick={() => {
          refContainer.current.classList.toggle("filter__height");
          refGroup.current.classList.toggle("filter__option");
          document.getElementById('arrow__filter').classList.toggle("filter__arrow");
        }}>

          <TopHeadSmall>
            Filter
          </TopHeadSmall>
          <Arrow id="arrow__filter" />
        </Heading>
        {/* <hr /> */}

        <Group ref={refGroup}>
          <Head>Type</Head>

          <Option>
            <Checkbox
              type="checkbox"
              checked={type === "Veg"}
              name="type"
              id="veg"
              onChange={() => {
                dispatch(setType("Veg"));
              }}
            />
            <OptionText htmlFor="veg">Veg</OptionText>
          </Option>
          <Option>
            <Checkbox
              type="checkbox"
              checked={type === "Non-Veg"}
              name="type"
              id="non-veg"
              onChange={() => {
                dispatch(setType("Non-Veg"));
              }}
            />
            <OptionText htmlFor="non-veg">Non-Veg</OptionText>
          </Option>
          <Option>
            <Checkbox
              type="checkbox"
              checked={type === "Vegan"}
              name="type"
              id="vegan"
              onChange={() => {
                dispatch(setType("Vegan"));
              }}
            />
            <OptionText htmlFor="vegan">Vegan</OptionText>
          </Option>
          <Option>
            <Checkbox
              type="checkbox"
              checked={type === null}
              name="type"
              id="all"
              onChange={() => {
                dispatch(setType(null));
              }}
            />
            <OptionText htmlFor="all">All</OptionText>
          </Option>
        </Group>
      </Wrapper>
    </Container>
  );
}

export default FoodPageSideBar;

const Container = tw.div` h-[10vh]  xl:h-screen  xl:w-[20%] transition-all duration-200		 `;
const Wrapper = tw.div`xl:fixed static bg-white shadow-xl rounded-xl  xl:w-[15%] w-[90vw] xl:p-10 p-4  items  `;
const Heading = tw.div`flex w-full items-center justify-between xl:hidden cursor-pointer `
const TopHead = tw.h3`text-3xl xl:mb-2 xl:block hidden`;
const TopHeadSmall = tw.h3`text-redfood xl:mb-2 text-xl  xl:hidden`;
const Arrow = tw(AiOutlineCaretDown)`!fill-redfood  xl:hidden transition-transform`;
const Head = tw.p`text-xl m-3 `;
const Group = tw.div`mt-8  w-full   hidden xl:block`;
const Option = tw.div`flex items-center mt-2 mx-3`;
const Checkbox = tw.input`w-5 h-5 mr-3 `;
const OptionText = tw.label` text-lg text-black/80`;
