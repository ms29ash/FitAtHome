import React, { useRef } from "react";
import tw from "tailwind-styled-components";
import { AiOutlineCaretDown } from "react-icons/ai";
import { useNavigate, useSearchParams } from "react-router-dom";

function MenuSideBar() {
  const refContainer = useRef();
  const refGroup = useRef();

  let [searchParams] = useSearchParams();
  const type = searchParams.get("category");
  const navigate = useNavigate();

  return (
    <Container ref={refContainer}>
      <Wrapper>
        <Box>
          <TopHead>Category</TopHead>

          <Group ref={refGroup}>
            {/* <Head>Type</Head> */}
            <Option
              typeOf={type === null}
              onChange={() => {
                navigate("/menu");
              }}
            >
              <Checkbox
                type="checkbox"
                checked={type === null}
                name="type"
                id="all"
              />
              <Img src="./images/category/food.jpg" alt="" />
              <OptionText htmlFor="all">All</OptionText>
            </Option>
            <Option
              typeOf={type === "Veg"}
              onChange={() => {
                navigate("/menu?category=Veg");
              }}
            >
              <Checkbox
                type="checkbox"
                checked={type === "Veg"}
                name="type"
                id="veg"
              />
              <Img src="./images/category/veg.jpg" alt="" />
              <OptionText htmlFor="veg">Veg</OptionText>
            </Option>
            <Option
              typeOf={type === "Non-Veg"}
              onChange={() => {
                navigate("/menu?category=Non-Veg");
              }}
            >
              <Checkbox
                type="checkbox"
                checked={type === "Non-Veg"}
                name="type"
                id="non-veg"
              />
              <Img src="./images/category/nonveg.jpg" alt="" />
              <OptionText htmlFor="non-veg">Non-Veg</OptionText>
            </Option>
            <Option
              typeOf={type === "Vegan"}
              onChange={() => {
                navigate("/menu?category=Vegan");
              }}
            >
              <Checkbox
                type="checkbox"
                checked={type === "Vegan"}
                name="type"
                id="vegan"
              />
              <Img src="./images/category/vegan.jpg" alt="" />
              <OptionText htmlFor="vegan">Vegan</OptionText>
            </Option>
            {/* <Option>
            <Checkbox
              type="checkbox"
              checked={type === "drinks"}
              name="type"
              id="drinks"
              onChange={() => {
                dispatch(setType("drinks"));
              }}
              />
              <OptionText $typeOf={type === "Drinks"} htmlFor="drinks">Drinks</OptionText>
            </Option> */}
          </Group>
        </Box>
      </Wrapper>
    </Container>
  );
}

export default MenuSideBar;

const Container = tw.div` mt-3  xl:h-screen  lg:w-[30%] transition-all duration-200 lg:max-w-[300px]	w-full bg-white lg:bg-transparent	shadow-xl lg:shadow-none `;
const Wrapper = tw.div`lg:fixed flex items-start lg:py-[6rem]  lg:my-4 lg:w-[30%] transition-all duration-200 w-full lg:max-w-[300px]  top-0 bottom-0  `;
const Box = tw.div`   w-max lg:w-full scroll-smooth rounded-xl overflow-hidden `;

//Heading
const TopHead = tw.h3`text-2xl xl:mb-1 hidden lg:block  px-6 pb-5`;

//Group
const Group = tw.div` w-full flex flex-row lg:flex-col rounded-xl overflow bg-transparent bg-white overflow-x-auto hideScroll  py-4 lg:py-0 `;

const Option = tw.div`flex items-center  px-3 bg-gray-100 lg:bg-white hover:bg-ssgreen/30 sm:py-2  lg:py-3 mx-1 lg:mx-0 lg:hover:border-l-8 lg:hover:border-l-ssgreen  w-[25%] lg:w-full min-w-[150px]   border-[2px] lg:border-0 border-gray-300 border-b-[1px]  rounded-xl lg:rounded-none transition-all duration-200 cursor-pointer   ${(
  p
) => p.typeOf && "lg:border-l-ssgreen  lg:border-l-8 lg:bg-ssgreen/30 "} `;
const Img = tw.img`w-8 lg:w-16 aspect-square object-cover rounded-lg `;
const Checkbox = tw.input` opacity-0 `;
const OptionText = tw.label`  ml-4 w-full cursor-pointer    rounded transition-all duration-200 select-none`;
