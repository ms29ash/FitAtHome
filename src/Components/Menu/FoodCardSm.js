import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import tw from "tailwind-styled-components";
import { useNavigate } from "react-router-dom";
import ReviewStar from "../Home/ReviewStar";
import { useDispatch } from "react-redux";
import {
  addCart,
  getItemIndex,
  setQuantity,
} from "../../features/basket/basketSlice";
import { useSelector } from "react-redux";
import CustomToast from "../Box/AddToCartAlert";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

function FoodCardSm({ foodItem, className }) {
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
      dispatch(addCart({ item: foodItem, quantity: 1 }));

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
      <Container className={className}>
        <Wrapper>
          {/* Box for image and food type */}
          <Box onClick={() => navigate(`/food/${foodItem?._id}`)}>
            <FoodImg
              src={foodItem?.image}
              alt=""
              placeholder={<LoadFoodImg />}
              threshold={300}
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
            {/* name of food */}
            <TextHead className="mb-2">
              {/* {foodItem?.name.slice(0, 20)} */}
              {foodItem?.name}
            </TextHead>
            {/* Second Part of Description With name Description and Rating */}
            <Details>
              {/* Rating stars */}
              <ReviewStar rating={foodItem?.ratings} />

              <hr className="my-3" />
              <Bottom>
                <p className=" whitespace-nowrap  text-black flex-1 font-bold  ">
                  &#8377; {foodItem?.price}
                </p>
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
              </Bottom>
            </Details>
          </Text>
        </Wrapper>
      </Container>
    </>
  );
}

export default FoodCardSm;

const Container = tw.div`  block  sm:hidden  ${(p) => p.className}   `;
const Wrapper = tw.div`flex flex-row border-b-[1px] duration-300  transition-all bg-white py-1 items-center`;

//Image and Food Type
const Box = tw.div` grid place-items-center relative w-[30%] `;
const FoodImg = tw(
  LazyLoadImage
)`rounded-t-md object-cover w-full max-w-[300px]  mx-auto aspect-[2/2.25] bg-white `;
const FoodTypeIcon = tw.div`flex absolute items-center bottom-2 left-2 bg-white font-bold  px-2 py-[0.35rem] text-xs rounded-md `;
const FoodTypeImg = tw.img` w-[15px] h-[15px] mr-2 `;

const LoadFoodImg = tw.img`rounded-t-md object-cover w-[250px] h-[187px] bg-gray-400 `;
// Description
const Text = tw.div`p-3 flex-1 `;
//Top Part
const TextHead = tw.h1`text-[0.9rem] font-bold text-gray-700 transition-all `;
//Second Part
const Details = tw.div` justify-between items-center w-full `;
const Bottom = tw.div`flex justify-between items-center`;
//Add to Cart Btn
const BuyBtn = tw.button`flex-1 text-ssorange font-bold  border-2 border-ssorange w-full py-2 rounded-md   hover:bg-ssorange/20 transition-all select-none  text-xs `;
//Increase and Decrease Btn
const Btn = tw.div`flex  font-bold    w-full select-none justify-end `;
const BtnWrapper = tw.div`flex  items-center font-bold      rounded-md  transition-all select-none `;
const SmallBtn = tw.div` border-2 hover:bg-ssorange/20   p-2 border-ssorange rounded-lg cursor-pointer `;
