import React, { useState } from "react";
import tw from "tailwind-styled-components";
import { useQuery } from "react-query";
import { Navigate, useParams, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import axios from "../axios";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../features/basket/basketSlice";
import laodPayment from "../Components/Box/Payment";
import ReviewStar from "./Home/ReviewStar";

function FoodDetail() {
  const [alert, setAlert] = useState(null);
  let { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const fetchFood = async (id) => {
    return axios.get(`/food/${id}`);
  };

  const {
    data: food,
    isLoading,
    isError,
    error,
  } = useQuery(["food-page", id], () => fetchFood(id));

  const { image, name, description, type, price, ratings } =
    food?.data?.food || {};

  const addToCart = () => {
    if (isLoggedIn === true) {
      setAlert("Added to Cart");
      dispatch(addCart({ quantity: 1, item: food?.data.food[0] }));
      setTimeout(() => {
        setAlert(null);
      }, 2000);
    } else {
      navigate("/signin");
    }
  };
  return (
    <Wrapper>
      {
        <>
          <Img
            src={image}
            alt=""
            placeholder={<LoadFoodImg />}
            threshold={100}
          />
          <Details>
            <Head>{name}</Head>
            <SmallDesc>
              <ReviewStar rating={ratings} />
              <FoodType>
                {
                  <FoodTypeIcon
                    src={
                      type === "Veg"
                        ? `/images/veg_icon.png`
                        : type === "Non-Veg"
                        ? `/images/nonveg_icon.png`
                        : type === "Vegan"
                        ? `/images/vegan_icon.png`
                        : ""
                    }
                    alt=""
                  />
                }
                <Type>{type}</Type>
              </FoodType>
            </SmallDesc>
            <Price>&#8377; {price} Only</Price>
            <Text>{description}</Text>
            <Buttons>
              <AddButton onClick={addToCart} disabled={!name}>
                Add to Cart
              </AddButton>
              <BuyButton
                onClick={() => {
                  laodPayment(price, "Dehradun");
                }}
                disabled={!price}
              >
                Buy Now
              </BuyButton>
            </Buttons>
          </Details>
        </>
      }
    </Wrapper>
  );
}

export default FoodDetail;

const Wrapper = tw.div`flex flex-col md:flex-row  items-center w-full mb-[3vh] bg-white py-6 px-5 rounded-lg shadow-lg relative`;
const Img = tw(
  LazyLoadImage
)`w-full  md:w-[45%] aspect-[12/9] object-cover  rounded-lg`;
const LoadFoodImg = tw.img`rounded-md w-[50%] h-full bg-gray-400 `;
const Details = tw.div`text-lg mx-auto px-4`;
const Head = tw.h1`text-2xl mt-5 mb-2 xl:my-2`;
const Text = tw.p`text-sm`;
const SmallDesc = tw.div`flex items-center justify-start`;
const Price = tw.p`text-2xl my-2 `;
const FoodType = tw.div`flex items-center my-2 mx-5`;
const Type = tw.p``;
const FoodTypeIcon = tw.img` mr-2 w-[30px] h-[30px]`;

const Buttons = tw.div``;
const BuyButton = tw.button`mr-2 mt-5 bg-ssorange/90  py-3 px-5 rounded-lg min-w-[150px] text-sm  transition-all  text-white disabled:opacity-50 font-bold before:bg-ssorange   `;
const AddButton = tw(BuyButton)`bg-ssgreen   hover:bg-ssgreen `;
