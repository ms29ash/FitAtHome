import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import tw from "tailwind-styled-components";
import { Link } from "react-router-dom";
import { AiFillHeart, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { removeFavId } from "../../features/basket/listSlice";
import CustomToast from "../Box/AddToCartAlert";
import { addCart, setQuantity } from "../../features/basket/basketSlice";

function Favorite({ item, index }) {
  const dispatch = useDispatch();
  // checking cart or isloggedIn redux
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const cart = useSelector((state) => state.basket.basket);

  const removeFromFav = () => {
    dispatch(removeFavId(index));
  };

  //Add to Cart Hanlder
  const addToCart = (e) => {
    if (isLoggedIn === true) {
      dispatch(addCart({ item: item, quantity: 1 }));

      CustomToast(item?.image, item.name, "Added to cart", "success");
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
    }
  };

  return (
    <>
      <Container>
        <Wrapper>
          <Link to={`/search/foodDetail/${item?._id}`}>
            {
              <FoodImg
                src={item?.image}
                alt=""
                placeholder={<LoadFoodImg />}
                threshold={100}
              />
            }
            <Text>
              <TextHead className="mb-2">{item?.name}</TextHead>
              {item.type && (
                <FoodTypeIcon>
                  <img
                    className="w-[15px] mr-2 h-[15px]"
                    src={
                      item?.type === "Veg"
                        ? "/images/veg_icon.png"
                        : item?.type === "Non-Veg"
                        ? "/images/nonveg_icon.png"
                        : item?.type === "Vegan"
                        ? "/images/vegan_icon.png"
                        : ""
                    }
                    alt=""
                  />
                  {item?.type === "Veg"
                    ? "veg"
                    : item?.type === "Non-Veg"
                    ? "nonveg"
                    : item?.type === "Vegan"
                    ? "vegan"
                    : ""}
                </FoodTypeIcon>
              )}
              <p>{item?.quantity}</p>
              <p className=" font-bold  leading-8 text-black-800   ">
                &#8377; {item?.price}
              </p>

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
            </Text>
          </Link>
          <Fav>
            {/* <AiOutlineHeart /> */}
            <AiFillHeart onClick={removeFromFav} />
          </Fav>
        </Wrapper>
      </Container>
    </>
  );
}

export default Favorite;

const Container = tw.div`scroll-end scroll-mx-5 shrink-0 mx-3 my-2   `;
const Wrapper = tw.div`card-container my-3 transition-all   rounded-md w-[250px]   hover:shadow-2xl duration-300 bg-white shadow-xl relative `;
const FoodImg = tw(
  LazyLoadImage
)`rounded-t-md object-contain w-[100%]  mx-auto aspect-[3/2] bg-white `;
const LoadFoodImg = tw.img`rounded-t-md object-cover w-[250px] h-[187px] bg-gray-400 `;
const FoodTypeIcon = tw.div`  flex bg-white py-2 text-xs items-center`;
const Text = tw.div`p-[8px]`;
const TextHead = tw.h1`text-sm  font-bold text-black`;
const Fav = tw.div`absolute top-3 right-3 bg-white rounded-full shadow-xl p-2 text-redfood text-lg cursor-pointer`;

//Add to Cart Btn
const BuyBtn = tw.button`flex-1 text-ssorange font-bold  border-2 border-ssorange w-full py-2 rounded-md   hover:bg-ssorange/20 transition-all select-none  text-xs `;
//Increase and Decrease Btn
const Btn = tw.div`flex  font-bold    w-full select-none justify-end `;
const BtnWrapper = tw.div`flex  items-center font-bold      rounded-md  transition-all select-none `;
const SmallBtn = tw.div` border-2 hover:bg-ssorange/20   p-2 border-ssorange rounded-lg cursor-pointer `;
