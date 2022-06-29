import React from "react";
import tw from "tailwind-styled-components";
import { useDispatch, useSelector } from 'react-redux'
import { setType } from '../features/filter/foodFilterSlice'

function FoodPageSideBar() {
  const dispatch = useDispatch()
  const type = useSelector((state) => state.food.type);

  return (
    <Container>
      <Wrapper>
        <TopHead>Filter</TopHead>
        <hr />

        <Group>
          <Head>Type</Head>

          <Option>
            <Checkbox
              type="checkbox"
              checked={type === 'Veg'}
              name="type"
              id="veg"
              onChange={() => {
                dispatch(setType('Veg'))
              }}
            />
            <OptionText htmlFor="veg">Veg</OptionText>
          </Option>
          <Option>
            <Checkbox
              type="checkbox"
              checked={type === 'Non-Veg'}
              name="type"
              id="non-veg"
              onChange={() => {
                dispatch(setType('Non-Veg'))
              }}
            />
            <OptionText htmlFor="non-veg">Non Veg</OptionText>
          </Option>
          <Option>
            <Checkbox
              type="checkbox"
              checked={type === 'Vegan'}
              name="type"
              id="vegan"
              onChange={() => {
                dispatch(setType('Vegan'))
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

                dispatch(setType(null))
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

const Container = tw.div` h-screen w-[20%] hidden xl:block  `;
const Wrapper = tw.div`fixed bg-white w-[15%] h-[80vh]  p-10`;
const TopHead = tw.h3`text-3xl mb-2`;
const Head = tw.h5`text-2xl my-3`;
const Group = tw.div`mt-8`;
const Option = tw.div`flex items-center mt-2`;
const Checkbox = tw.input`w-5 h-5 mr-3 `;
const OptionText = tw.label` text-lg text-black/80`;
