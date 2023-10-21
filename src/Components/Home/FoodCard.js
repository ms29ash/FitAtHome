import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import tw from "tailwind-styled-components";
import { useNavigate } from "react-router-dom";
import ReviewStar from "./ReviewStar";
import { useDispatch } from "react-redux";
import {
  addCart,
  getItemIndex,
  setQuantity,
} from "../../features/basket/basketSlice";
import { useSelector } from "react-redux";
import CustomToast from "../Box/AddToCartAlert";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

function FoodCard({ foodItem }) {
  //index of food in cart
  const [index, setIndex] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // checking cart or isloggedIn redux
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const cart = useSelector((state) => state.basket.basket);

  //checking index of food in cart
  useEffect(() => {
    const checkBasket = (cart, id) => {
      if (cart) {
        const index = getItemIndex(cart, foodItem?._id);
        setIndex(index);
      }
    };
    checkBasket(cart, foodItem?._id);
  }, [cart]);

  //Add to Cart Hanlder
  const addToCart = (e) => {
    if (isLoggedIn === true) {
      dispatch(
        addCart({ quantity: 1, id: foodItem?._id, price: foodItem?.price })
      );

      CustomToast(foodItem?.image, foodItem.name, "Added to cart", "success");
    } else {
      navigate("/signin");
    }
  };

  //Increase Quantity in Cart hanlder
  const increaseQuantity = (e) => {
    if (isLoggedIn === true && index > -1) {
      dispatch(
        setQuantity({
          id: foodItem?._id,
          quantity: cart[index]?.quantity + 1,
        })
      );
    } else {
      navigate("/signin");
    }
  };

  //Decrease Quantity in Cart hanlder
  const decreaseQuantity = (e) => {
    if (isLoggedIn === true && index > -1) {
      if (cart[index]?.quantity === 1) {
        CustomToast(foodItem?.image, foodItem.name, "Removed from cart");
      }
      dispatch(
        setQuantity({
          id: foodItem?._id,
          quantity: cart[index]?.quantity - 1,
        })
      );
    } else {
      navigate("/signin");
    }
  };

  return (
    <>
      <Container>
        <Wrapper>
          {/* Box for image and food type */}
          <Box onClick={() => navigate(`/food/${foodItem?._id}`)}>
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
              {foodItem?.name.length < 20 ? (
                <TextHead className="mb-2">
                  {foodItem?.name.slice(0, 20)}
                </TextHead>
              ) : (
                <TextHead className="mb-2">
                  {foodItem?.name.slice(0, 20)}..
                </TextHead>
              )}
              <p className=" whitespace-nowrap  text-black text-3xl font-bold  ">
                &#8377; {foodItem?.price}
              </p>
            </Top>
            {/* Second Part of Description With name Description and Rating */}
            <Details>
              <p className="text-xs text-slate-700 leading-5">
                {foodItem?.description.slice(0, 88)}...
              </p>

              {/* Rating stars */}
              <ReviewStar rating={foodItem?.ratings} />

              <hr className="my-3" />
              {/* Add to Cart Button */}
              {index < 0 ? (
                <BuyBtn onClick={() => addToCart()}>Add to Cart</BuyBtn>
              ) : (
                <Btn>
                  <BtnWrapper>
                    <SmallBtn onClick={decreaseQuantity}>
                      <AiOutlineMinus />
                    </SmallBtn>
                    <p className="px-4">{cart[index]?.quantity}</p>
                    <SmallBtn>
                      <AiOutlinePlus onClick={increaseQuantity} />
                    </SmallBtn>
                  </BtnWrapper>
                </Btn>
              )}
            </Details>
          </Text>
        </Wrapper>
      </Container>
    </>
  );
}

export default FoodCard;

const Container = tw.div`scroll-end scroll-mx-5 shrink-0   `;
const Wrapper = tw.div`card-container my-3   rounded-md w-[300px] \  hover:shadow-2xl duration-300  transition-all bg-white shadow-lg`;

//Image and Food Type
const Box = tw.div` grid place-items-center relative `;
const FoodImg = tw(
  LazyLoadImage
)`rounded-t-md object-cover w-[100%]  mx-auto aspect-[3/2] bg-white `;
const FoodTypeIcon = tw.div`flex absolute items-center bottom-2 left-2 bg-white font-bold  px-2 py-[0.35rem] text-xs rounded-md `;
const FoodTypeImg = tw.img` w-[15px] h-[15px] mr-2 `;

const LoadFoodImg = tw.img`rounded-t-md object-cover w-[250px] h-[187px] bg-gray-400 `;
// Description
const Text = tw.div`p-3 `;
//Top Part
const Top = tw.div`flex justify-between items-center`;
const TextHead = tw.h1`text-base font-bold text-black transition-all `;
//Second Part
const Details = tw.div` justify-between items-center w-full mt-2`;
//Add to Cart Btn
const BuyBtn = tw.button`text-ssorange font-bold  border-2 border-ssorange w-full py-2 rounded-md hover:text-white hover:bg-ssorange transition-all select-none `;
//Increase and Decrease Btn
const Btn = tw.div`flex  font-bold    w-full select-none justify-end `;
const BtnWrapper = tw.div`flex  items-center font-bold      rounded-md  transition-all select-none `;
const SmallBtn = tw.button` border-2 hover:bg-grayfood/20   p-2 border-ssorange rounded-lg `;
