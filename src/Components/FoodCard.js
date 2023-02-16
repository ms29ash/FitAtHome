import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import tw from "tailwind-styled-components";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

function FoodCard(props) {
  let { foodItem } = props;

  return (
    <>
      <Container>
        <Wrapper>
          <Link to={`search/foodDetail/${foodItem?._id}`}>
            {
              <FoodImg
                src={foodItem?.image}
                alt=""
                placeholder={<LoadFoodImg />}
                threshold={100}
              />
            }

            <FoodTypeIcon
              src={
                foodItem?.type === "Veg"
                  ? "/images/veg_icon.png"
                  : foodItem?.type === "Non-Veg"
                    ? "images/nonveg_icon.png"
                    : foodItem?.type === "Vegan"
                      ? "images/vegan_icon.png"
                      : ""
              }
              alt=""
            />

            <Text>
              {
                foodItem?.name.length < 30 ?

                  <TextHead className="mb-2">{foodItem?.name.slice(0, 30)}</TextHead>
                  :
                  <TextHead className="mb-2">{foodItem?.name.slice(0, 27)}..</TextHead>
              }
              <Details>

                <p className="  h-[15%]  leading-8 text-black-800 text-lg  ">
                  &#8377; {foodItem?.price}
                </p>
                <ReviewBox >

                  <FaStar style={{ color: 'white' }} />
                  <Review >{foodItem?.ratings}</Review>
                </ReviewBox>
              </Details>

            </Text>
          </Link>
        </Wrapper>
      </Container>
    </>
  );
}

export default FoodCard;

const Container = tw.div`scroll-end scroll-mx-5 shrink-0   `;
const Wrapper = tw.div`card-container my-3 transition-all   rounded-md w-[250px]  h-full  hover:shadow-2xl duration-300  transition-all bg-white shadow-lg`;
const FoodImg = tw(
  LazyLoadImage
)`rounded-t-md object-cover w-[100%]  mx-auto aspect-[4/3] bg-white `;
const LoadFoodImg = tw.img`rounded-t-md object-cover w-[250px] h-[187px] bg-gray-400 `;
const FoodTypeIcon = tw.img`absolute top-8 ml-3 w-[25px] h-[25px]`;
const Text = tw.div`p-[8px] `;
const Details = tw.div`flex justify-between items-center w-full`
const TextHead = tw.h1`text-sm h-[30%] font-bold text-black`;
const ReviewBox = tw.div`flex justify-between items-center rounded-md bg-grayfood px-2 `
const Review = tw.div`rounded-sm bg-grayfood text-white ml-1`
