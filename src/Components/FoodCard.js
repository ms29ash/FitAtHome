import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import tw from "tailwind-styled-components";
import { Link } from "react-router-dom";

function FoodCard(props) {
  let { foodItem } = props;

  return (
    <>
      <Container>
        <Wrapper>
          <Link to="/">
            {
              <FoodImg
                // effect="blur"
                src={foodItem?.image}
                alt=""
                placeholder={<LoadFoodImg />}
                threshold={100}
              />
            }

            {/* <FoodTypeIcon > */}

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

            {/* </FoodTypeIcon> */}
            <Text>
              <TextHead className="">{foodItem?.name}</TextHead>
              {/* <p className="mb-3">{description}</p> */}
              {/* <p className=" mb-3 absolute bottom-12 text-redfood text-2xl font-bold hover:text-orangefood">{price}</p> */}
            </Text>
          </Link>
        </Wrapper>
      </Container>
    </>
  );
}

export default FoodCard;

const Container = tw.div`scroll-end scroll-mx-6 shrink-0`;
const Wrapper = tw.div`bg-white card-container my-5 shadow-xl rounded-md w-[250px] h-[18rem]`;
const FoodImg = tw(
  LazyLoadImage
)`rounded-t-md object-cover w-[250px] h-[187px] bg-white `;
const LoadFoodImg = tw.img`rounded-t-md object-cover w-[250px] h-[187px] bg-gray-400 `;
const FoodTypeIcon = tw.img`absolute top-6 ml-2 w-[30px] h-[30px]`;
const Text = tw.div`p-[8px]`;
const TextHead = tw.h1`text-2xl font-bold hover:text-orangefood`;
