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



            <Text>
              <Top>

                {
                  foodItem?.name.length < 25 ?

                    <TextHead className="mb-2">{foodItem?.name.slice(0, 25)}</TextHead>
                    :
                    <TextHead className="mb-2">{foodItem?.name.slice(0, 20)}..</TextHead>
                }

                <div className="flex items-center">

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
                  <ReviewBox >

                    <FaStar style={{ color: 'white' }} />
                    <Review >{foodItem?.ratings}</Review>
                  </ReviewBox>

                </div>
              </Top>
              <Details>
                <p className="text-xs text-slate-700 leading-5" >
                  {foodItem?.description.slice(0, 132)}...
                </p>

                <hr className="my-3" />
                <Price>

                  <p className="  h-[15%] text-black text-md  ">
                    &#8377; {foodItem?.price}.00
                  </p>
                  <BuyBtn>Buy Now</BuyBtn>
                </Price>
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
const Wrapper = tw.div`card-container my-3 transition-all shadow-md   rounded-md w-[300px] \  hover:shadow-2xl duration-300  transition-all bg-white shadow-lg`;
const FoodImg = tw(
  LazyLoadImage
)`rounded-t-md object-cover w-[100%]  mx-auto aspect-[6/3] bg-white `;
const LoadFoodImg = tw.img`rounded-t-md object-cover w-[250px] h-[187px] bg-gray-400 `;
const FoodTypeIcon = tw.img` mr-3 w-[20px] h-[20px]`;
const Text = tw.div`p-3 `;
const Top = tw.div`flex justify-between items-center`
const Details = tw.div` justify-between items-center w-full mt-2`
const TextHead = tw.h1`text-sm h-[30%] font-bold text-black`;
const ReviewBox = tw.div`flex h-[20px] justify-between items-center rounded-md bg-redfood px-2 `
const Review = tw.div`rounded-sm h-[20px] text-sm  text-white ml-1`
const Price = tw.div`flex  justify-between items-center`
const BuyBtn = tw.button`text-redfood `