import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import tw from "tailwind-styled-components";
import { Link, useNavigate } from "react-router-dom";
import ReviewStar from "./ReviewStar";
import { useDispatch } from "react-redux";
import { addCart, removeCart } from '../../features/basket/basketSlice'
import { useSelector } from "react-redux";
import toast from 'react-hot-toast';
import CustomToast from "../Cart/AddToCartAlert";


function FoodCard({ foodItem }) {
  const [basket, setBasket] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  const cart = useSelector(state => state.basket.basket)





  useEffect(() => {
    const checkBasket = (cart, id) => {
      const idToCheck = cart?.some(item => item.id === id);
      setBasket(idToCheck);
    }
    checkBasket(cart, foodItem?._id)
  }, [cart])



  //Add to Cart Function
  const addToCart = (e) => {
    if (isLoggedIn === true) {
      dispatch(addCart({ quantity: 1, id: foodItem?._id, price: foodItem?.price }))

      CustomToast(foodItem?.image, foodItem.name, 'Added to cart', 'success')
    } else {
      navigate('/signin')
    }
  }
  //Remove from Cart Function
  const removeFromCart = (e) => {
    if (isLoggedIn === true) {
      dispatch(removeCart(foodItem?._id))
      CustomToast(foodItem?.image, foodItem.name, 'Removed from cart')
    } else {
      navigate('/signin')
    }
  }


  return (
    <>
      <Container >
        <Wrapper>

          {/* Box for image and food type */}
          <Box onClick={() => navigate(`/food/${foodItem?._id}`)} >

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
              {basket === false ?
                <BuyBtn onClick={() => addToCart()}>Add to Cart</BuyBtn> : <RemoveBtn onClick={() => removeFromCart()}>Added to Cart</RemoveBtn>
              }

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
const BuyBtn = tw.button`text-ssorange font-bold  border-2 border-ssorange w-full py-2 rounded-md hover:text-white hover:bg-ssorange transition-all select-none `
const RemoveBtn = tw.button`text-white font-bold  border-2 bg-ssorange w-full py-2 rounded-md  transition-all select-none `