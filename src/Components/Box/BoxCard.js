import React, { useRef } from "react";
import tw from "tailwind-styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setQuantity, removeCart } from "../../features/basket/basketSlice";
import { AiOutlineHeart, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function BoxCard({ item, index }) {
  //dispatch of redux
  const dispatch = useDispatch();
  //select quantity ref
  const refSelect = useRef();

  // checking cart or isloggedIn redux
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const cart = useSelector((state) => state.basket.basket);

  const { image, name, price, type, quantity, _id } = item?.item || {};

  //Increase Quantity in Cart hanlder
  const increaseQuantity = (e) => {
    if (isLoggedIn === true && index > -1) {
      dispatch(
        setQuantity({
          id: _id,
          quantity: cart[index]?.quantity + 1,
        })
      );
    }
  };

  //Decrease Quantity in Cart hanlder
  const decreaseQuantity = (e) => {
    if (isLoggedIn === true && index > -1) {
      if (cart[index]?.quantity === 1) {
      }
      dispatch(
        setQuantity({
          id: _id,
          quantity: cart[index]?.quantity - 1,
        })
      );
    }
  };

  return (
    <>
      {item?.item && (
        <Container>
          <Img src={image} alt="" />
          <Wrapper>
            <p className="text-base text-gray-800 max-w-[90%]  ">{name}</p>
            {type && (
              <FoodTypeIcon>
                <img
                  className="w-[15px] h-[15px] mr-2"
                  src={
                    type === "Veg"
                      ? "images/veg_icon.png"
                      : type === "Non-Veg"
                      ? "images/nonveg_icon.png"
                      : type === "Vegan"
                      ? "images/vegan_icon.png"
                      : ""
                  }
                  alt=""
                />
                {type}
              </FoodTypeIcon>
            )}
            {quantity && <p>{quantity}</p>}
            <Price className="  ">&#8377; {price}</Price>
            <Btn>
              <BtnWrapper>
                <SmallBtn onClick={decreaseQuantity}>
                  <AiOutlineMinus />
                </SmallBtn>
                <p className="px-2 md:px-4">{item?.quantity}</p>
                <SmallBtn>
                  <AiOutlinePlus onClick={increaseQuantity} />
                </SmallBtn>
              </BtnWrapper>
            </Btn>
            <FavBtn>
              <AiOutlineHeart />
            </FavBtn>
          </Wrapper>
        </Container>
      )}
      <hr />
    </>
  );
}

export default BoxCard;

const Container = tw.div`w-full   flex `;
const Img = tw.img`
w-[30%] max-w-[250px] object-contain aspect-[1/1]
`;
//Details Section
const Wrapper = tw.div` ml-4 w-full py-1 relative`;
const FoodTypeIcon = tw.div` my-2  items-center flex text-xs`;
const Price = tw.p`my-3 h-[15%]   text-black text-base font-bold`;
const FavBtn = tw.button`absolute top-2 right-2 cursor-pointer text-lg`;

//Increase and Decrease Btn
const Btn = tw.div`  flex  font-bold  flex-1  w-full select-none justify-end absolute bottom-4 `;
const BtnWrapper = tw.div`flex   items-center font-bold       rounded-md  transition-all select-none bg-ssorange text-white mt-1 justify-end `;
const SmallBtn = tw.button` border-2 hover:bg-grayfood/20  p-1 md:p-2 border-ssorange rounded-lg `;
