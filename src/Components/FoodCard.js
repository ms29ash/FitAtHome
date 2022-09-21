import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import tw from "tailwind-styled-components";
import { Link } from "react-router-dom";

function FoodCard(props) {
  let { foodItem } = props;
  const description = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente vitae quam yess recusandae.'

  return (
    <>
      <Container>
        <Wrapper>
          <Link to={`food/foodDetail/${foodItem?._id}`} >
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
              <TextHead className="">{foodItem?.name}</TextHead>
              <p className="mb-3 text-md h-[50%] ">{description}</p>
              <p className=" mb-3 h-[15%]  text-redfood text-2xl font-bold ">&#8377; {foodItem?.price}</p>
            </Text>
          </Link>
        </Wrapper>
      </Container>
    </>
  );
}

export default FoodCard;

const Container = tw.div`scroll-end scroll-mx-5 shrink-0`;
const Wrapper = tw.div`card-container my-3  rounded-md w-[250px] aspect-[3/5] hover:bg-redfood/20  transition-all pt-2 bg-gray-100`;
const FoodImg = tw(
  LazyLoadImage
)`rounded-t-md object-cover w-[95%]  mx-auto aspect-[4/3] bg-white `;
const LoadFoodImg = tw.img`rounded-t-md object-cover w-[250px] h-[187px] bg-gray-400 `;
const FoodTypeIcon = tw.img`absolute top-8 ml-3 w-[30px] h-[30px]`;
const Text = tw.div`p-[8px] h-[55%]`;
const TextHead = tw.h1`text-xl h-[30%] font-bold text-redfood`;
