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

const Container = tw.div` mt-3  xl:h-screen  xl:w-[30%] transition-all duration-200 xl:max-w-[300px]	w-full bg-white xl:bg-transparent	shadow-xl xl:shadow-none `;
const Wrapper = tw.div`xl:fixed flex items-start xl:py-[6rem]  xl:my-4 xl:w-[30%] transition-all duration-200 w-full xl:max-w-[300px]  top-0 bottom-0  `;
const Box = tw.div`   w-max xl:w-full scroll-smooth rounded-xl overflow-hidden `;

//Heading
const TopHead = tw.h3`text-2xl xl:mb-1 hidden xl:block  px-6 pb-5`;

//Group
const Group = tw.div` w-full flex flex-row xl:flex-col rounded-xl overflow bg-transparent bg-white overflow-x-auto hideScroll  py-4 xl:py-0 `;

const Option = tw.div`flex items-center  px-3 bg-gray-100 xl:bg-white hover:bg-ssgreen/10 xl:hover:bg-ssgreen/30 sm:py-2  xl:py-3 mx-1 xl:mx-0 xl:hover:border-l-8 xl:hover:border-l-ssgreen  w-[25%] xl:w-full min-w-[150px] md:min-w-[250px]  border-[2px] xl:border-0 border-gray-300 border-b-[1px]  rounded-xl xl:rounded-none transition-all duration-200 cursor-pointer   ${(
  p
) => p.typeOf && "xl:border-l-ssgreen  xl:border-l-8 !bg-ssgreen/30 "} `;
const Img = tw.img`w-8 xl:w-16 aspect-square object-cover rounded-xl `;
const Checkbox = tw.input` opacity-0 `;
const OptionText = tw.label`  ml-4 w-full cursor-pointer    rounded transition-all duration-200 select-none`;
