import React, { useRef } from "react";
import tw from "tailwind-styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setType } from "../../features/filter/foodFilterSlice";
import { AiOutlineCaretDown } from "react-icons/ai";
import { useNavigate, useSearchParams } from "react-router-dom";

function FindFoodSideBar() {
  const refContainer = useRef();
  const refGroup = useRef();
  const refArrow = useRef();
  const dispatch = useDispatch();

  let [searchParams] = useSearchParams();
  const type = searchParams.get('category')
  const navigate = useNavigate();


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

        <Group ref={refGroup}>
          {/* <Head>Type</Head> */}
          <Option>
            <Checkbox
              type="checkbox"
              checked={type === null}
              name="type"
              id="all"
              onChange={() => {
                navigate('/food')
              }}
            />
            <OptionText $typeOf={type === null} htmlFor="all">All</OptionText>
          </Option>
          <Option>
            <Checkbox
              type="checkbox"
              checked={type === "Veg"}
              name="type"
              id="veg"
              onChange={() => {
                navigate('/food?category=Veg')
              }}
            />
            <OptionText $typeOf={type === "Veg"} htmlFor="veg">Veg</OptionText>
          </Option>
          <Option>
            <Checkbox
              type="checkbox"
              checked={type === "Non-Veg"}
              name="type"
              id="non-veg"
              onChange={() => {
                navigate('/food?category=Non-Veg');
              }}
            />
            <OptionText $typeOf={type === "Non-Veg"} htmlFor="non-veg">Non-Veg</OptionText>
          </Option>
          <Option>
            <Checkbox
              type="checkbox"
              checked={type === "Vegan"}
              name="type"
              id="vegan"
              onChange={() => {
                navigate('/food?category=Vegan')
              }}
            />
            <OptionText $typeOf={type === "Vegan"} htmlFor="vegan">Vegan</OptionText>
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
      </Wrapper>
    </Container>
  );
}

export default FindFoodSideBar;

const Container = tw.div` h-[10vh] mt-3  xl:h-screen  xl:w-[18%] transition-all duration-200		 `;
const Wrapper = tw.div`xl:fixed static bg-white shadow-xl rounded-xl  xl:w-[15%] w-[95vw] xl:py-8 xl:px-6 p-4 my-0 xl:mt-0  mt-4 `;
const Heading = tw.div`flex w-full items-center justify-between xl:hidden cursor-pointer `
const TopHead = tw.h3`text-2xl xl:mb-1 xl:block hidden`;
const TopHeadSmall = tw.h3`text-redfood xl:mb-2 text-xl  xl:hidden`;
const Arrow = tw(AiOutlineCaretDown)`!fill-redfood  xl:hidden transition-transform`;
const Head = tw.p`text-xl mx-3 my-1`;
const Group = tw.div`mt-4  w-full   hidden xl:block`;
const Option = tw.div`flex items-center mt-2 mx-3   rounded `;
const Checkbox = tw.input` opacity-0 `;
const OptionText = tw.label` text-sm  font-bold  -ml-2 w-full py-3 text-center cursor-pointer   bg-slate-100 rounded transition-all duration-200 ${(p) => (p.$typeOf ? "bg-black text-white" : "hover:bg-slate-200 text-black/80")}
`;
