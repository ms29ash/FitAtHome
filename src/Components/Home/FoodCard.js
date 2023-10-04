import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import tw from "tailwind-styled-components";
import { Link } from "react-router-dom";
import ReviewStar from "./ReviewStar";

function FoodCard(props) {
  let { foodItem } = props;

  return (
    <>
      <Container >
        <Wrapper>
          <Link to={`search/foodDetail/${foodItem?._id}`}>

            {/* Box for image and food type */}
            <Box>

              <FoodImg
                src={foodItem?.image}
                alt=""
                placeholder={<LoadFoodImg />}
                threshold={100}
              />
              <FoodTypeIcon>

                <FoodTypeImg
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
                <p>{foodItem?.type}</p>
              </FoodTypeIcon>
            </Box>



            {/* Description Part */}
            <Text>
              {/* First Part of Description With name Price */}
              <Top>

                {foodItem?.name.length < 20 ?

                  <TextHead className="mb-2">{foodItem?.name.slice(0, 20)}</TextHead>
                  :
                  <TextHead className="mb-2">{foodItem?.name.slice(0, 20)}..</TextHead>}
                <p className=" whitespace-nowrap  text-black text-3xl font-bold  ">
                  &#8377; {foodItem?.price}
                </p>
              </Top>
              {/* Second Part of Description With name Description and Rating */}
              <Details>
                <p className="text-xs text-slate-700 leading-5" >
                  {foodItem?.description.slice(0, 88)}...
                </p>

                {/* Rating stars */}
                <ReviewStar rating={foodItem?.ratings} />

                <hr className="my-3" />
                {/* Add to Cart Button */}
                <BuyBtn>Add to Cart</BuyBtn>

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
const Wrapper = tw.div`card-container my-3   rounded-md w-[300px] \  hover:shadow-2xl duration-300  transition-all bg-white shadow-lg`;

//Image and Food Type
const Box = tw.div` grid place-items-center relative `
const FoodImg = tw(
  LazyLoadImage
)`rounded-t-md object-cover w-[100%]  mx-auto aspect-[3/2] bg-white `;
const FoodTypeIcon = tw.div`flex absolute items-center bottom-2 left-2 bg-white font-bold  px-2 py-[0.35rem] text-xs rounded-md `;
const FoodTypeImg = tw.img` w-[15px] h-[15px] mr-2 `;


const LoadFoodImg = tw.img`rounded-t-md object-cover w-[250px] h-[187px] bg-gray-400 `;
// Description
const Text = tw.div`p-3 `;
//Top Part
const Top = tw.div`flex justify-between items-center`
const TextHead = tw.h1`text-base font-bold text-black transition-all `;
//Second Part
const Details = tw.div` justify-between items-center w-full mt-2`

//Add to Cart Btn
const BuyBtn = tw.button`text-ssorange font-bold  border-2 border-ssorange w-full py-2 rounded-md hover:text-white hover:bg-ssorange transition-all `