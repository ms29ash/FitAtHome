import React, { useRef } from "react";
import tw from "tailwind-styled-components";
import { useDispatch } from "react-redux";
import { setQuantity, removeCart } from "../../features/basket/basketSlice";

function BoxCard({ item }) {
  //dispatch of redux
  const dispatch = useDispatch();
  //select quantity ref
  const refSelect = useRef();

  const { image, name, price, type, quantity, _id } = item?.item || {};

  //quantity change handler
  const onChangeHandler = () => {
    dispatch(
      setQuantity({ id: _id, quantity: parseInt(refSelect.current.value) })
    );
  };

  //Remove from cart handler
  const removeHandler = () => {
    dispatch(removeCart(_id));
  };

  console.log(item);

  return (
    <>
      {item?.item && (
        <Container>
          <Img src={image} alt="" />
          <Wrapper>
            <p className="text-lg mt-[10%] font-bold">{name}</p>
            {type && (
              <FoodTypeIcon>
                <img
                  className="w-[25px] h-[25px] mr-2"
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

            <Select
              name="quantity"
              ref={refSelect}
              value={item.quantity}
              onChange={onChangeHandler}
            >
              <option value="0">0</option>
              {Array(10)
                .fill()
                .map((item, index) => (
                  <option value={index + 1} key={index}>
                    {index + 1}
                  </option>
                ))}
              {quantity > 10 && <option value={quantity}>{quantity}</option>}
            </Select>
            <div className="flex mt-4 text-grayfood  mb-4">
              <Btn onClick={removeHandler}>Remove</Btn>

              <Btn>Add to Favorites</Btn>
            </div>
          </Wrapper>
        </Container>
      )}
      <hr />
    </>
  );
}

export default BoxCard;

const Container = tw.div`
w-full h-26 my-3 flex relative  
`;
const Img = tw.img`
w-[30%] max-w-[250px] object-cover aspect-square md:aspect-[4/3]
`;
//Details Section
const Wrapper = tw.div` ml-4`;

const Select = tw.select` drop-shadow-4xl shadow-lg bg-gray-200 px-2 py-1 text-base rounded-lg mt-2 border-[2px] border-slate-400 mt-[6%] mb-[4%] `;
const FoodTypeIcon = tw.div` my-2  items-center flex`;
const Price = tw.p`my-3 h-[15%] absolute top-2 right-2  text-black text-xl font-bold`;
const Btn = tw.button` mr-4 hover:text-ssorange text-sm hover:underline`;
