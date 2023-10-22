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
          <Heading
            onClick={() => {
              refContainer.current.classList.toggle("filter__height");
              refGroup.current.classList.toggle("filter__option");
              document
                .getElementById("arrow__filter")
                .classList.toggle("filter__arrow");
            }}
          >
            <TopHeadSmall>Filter</TopHeadSmall>
            <Arrow id="arrow__filter" />
          </Heading>

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

const Container = tw.div` h-[10vh] mt-3  xl:h-screen  w-[30%] transition-all duration-200 max-w-[300px]		 `;
const Wrapper = tw.div`fixed flex items-start py-[6rem]  mt-4 w-[30%] transition-all duration-200 max-w-[300px]  top-0 bottom-0 `;
const Box = tw.div`   w-full rounded-xl overflow-hidden `;
const Heading = tw.div`flex w-full items-center justify-between xl:hidden cursor-pointer `;

//Heading
const TopHead = tw.h3`text-2xl xl:mb-1 xl:block hidden px-6 pb-5`;
const TopHeadSmall = tw.h3`text-redfood xl:mb-2 text-xl  xl:hidden  `;
const Arrow = tw(
  AiOutlineCaretDown
)`!fill-redfood  xl:hidden transition-transform`;

//Group
const Group = tw.div` w-full rounded-lg bg-white   hidden xl:block`;

const Option = tw.div`flex items-center pt-2 px-3 hover:bg-ssgreen/30 border-b-[1px] py-3 hover:border-l-8 hover:border-l-ssgreen transition-all duration-200 cursor-pointer ${(
  p
) => p.typeOf && "border-l-ssgreen  border-l-8 bg-ssgreen/30 "} `;
const Img = tw.img` w-16 aspect-square object-cover rounded-lg `;
const Checkbox = tw.input` opacity-0 `;
const OptionText = tw.label`  ml-4 w-full cursor-pointer    rounded transition-all duration-200 
`;
