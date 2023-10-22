import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import tw from "tailwind-styled-components";
import {
  addCart,
  getItemIndex,
  setQuantity,
} from "../../features/basket/basketSlice";
import CustomToast from "../Box/AddToCartAlert";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function ProductCard({ item }) {
  //index of food in cart
  const [index, setIndex] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // checking cart or isloggedIn redux
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const cart = useSelector((state) => state.basket.basket);

  //checking index of food in cart
  useEffect(() => {
    const checkBasket = (cart, id) => {
      if (cart) {
        const index = getItemIndex(cart, item?._id);
        setIndex(index);
      }
    };
    checkBasket(cart, item?._id);
  }, [cart]);

  //Add to Cart Hanlder
  const addToCart = (e) => {
    if (isLoggedIn === true) {
      dispatch(addCart({ item: item, quantity: 1 }));

      CustomToast(item?.image, item.name, "Added to cart", "success");
    } else {
      navigate("/signin");
    }
  };

  //Increase Quantity in Cart hanlder
  const increaseQuantity = (e) => {
    if (isLoggedIn === true && index > -1) {
      dispatch(
        setQuantity({
          id: item?._id,
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
        CustomToast(item?.image, item.name, "Removed from cart");
      }
      dispatch(
        setQuantity({
          id: item?._id,
          quantity: cart[index]?.quantity - 1,
        })
      );
    } else {
      navigate("/signin");
    }
  };

  return (
    <div className=" rounded-lg h-full bg-white p-3 shadow-lg hover:shadow-xl cursor-pointer">
      <div className="w-full flex justify-center">
        <img
          className="rounded-t-lg w-[8rem]  aspect-square object-contain"
          src={item?.image}
          alt=""
        />
      </div>
      <h3 className="text-base">{item.name} </h3>
      <p className="text-[0.8rem] py-3">{item?.quantity}</p>
      <div className="flex items-center">
        <h1 className="text-base w-1/2">&#8377;{item?.price}</h1>

        {/* Buttons */}
        {index < 0 ? (
          <BuyBtnWrapper>
            <BuyBtn onClick={() => addToCart()}>Add to Cart</BuyBtn>
          </BuyBtnWrapper>
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
      </div>
    </div>
  );
}

export default ProductCard;

//Add to Cart Btn
const BuyBtnWrapper = tw.div`
flex-1
`;
const BuyBtn = tw.button`text-ssorange font-bold  border-2 border-ssorange w-full py-2 rounded-md hover:text-white hover:bg-ssorange transition-all select-none text-xs `;
//Increase and Decrease Btn
const Btn = tw.div`flex  font-bold  flex-1  w-full select-none justify-end `;
const BtnWrapper = tw.div`flex   items-center font-bold      rounded-md  transition-all select-none `;
const SmallBtn = tw.button` border-2 hover:bg-grayfood/20   p-2 border-ssorange rounded-lg `;
