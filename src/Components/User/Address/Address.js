import React from "react";
import tw from "tailwind-styled-components";
import { BiPencil } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { deleteAddress, setDefault } from "../../../features/basket/listSlice";
import { useState } from "react";
import { useEffect } from "react";
import UpdateAddress from "./UpdateAddress";

function Address({ item }) {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const [isDefault, setDefaultAdd] = useState();
  const dispatch = useDispatch();
  const setDefHandler = () => {
    dispatch(setDefault({ defaultAddress: item._id }));
  };

  const defaultAddress = useSelector(
    (state) => state.list.address?.defaultAddress
  );

  const deleteAddressHandler = () => {
    console.log("delete");
    dispatch(deleteAddress({ address: item?._id }));
  };

  useEffect(() => {
    if (item._id === defaultAddress._id) {
      setDefaultAdd(true);
    } else {
      setDefaultAdd(false);
    }
  }, [defaultAddress]);

  return (
    <>
      <Container>
        <div className="relative">
          <Head>{item.title || item.street}</Head>
          <Items>
            {item.street}, {item.state}, {item.postalCode}, {item.city},
            {item.country}
          </Items>
          <EditBtns>
            <Btn onClick={onOpenModal}>
              <BiPencil />
            </Btn>
            <Btn onClick={deleteAddressHandler}>
              <MdDeleteOutline />
            </Btn>
          </EditBtns>
        </div>
        <hr className="my-3" />
        <Bottom>
          {isDefault === true ? <Def>Default</Def> : ""}
          <Buttons>
            {!isDefault && (
              <DefaultBtn onClick={setDefHandler}>SET AS DEFAULT</DefaultBtn>
            )}
          </Buttons>
        </Bottom>
      </Container>
      <UpdateAddress
        open={open}
        onOpenModal={onOpenModal}
        onCloseModal={onCloseModal}
        item={item}
      />
    </>
  );
}

export default Address;

const Container = tw.div`rounded-lg shrink-0  bg-white  shadow-xl py-6 px-4 mb-6`;
const Head = tw.h1`text-lg`;
const Def = tw.p`top-1 right-1 font-bold absolute  `;
const Bottom = tw.div`flex justify-between relative`;
const Items = tw.p`text-sm`;
const Buttons = tw.div`flex items-center py-2`;
const EditBtns = tw.div` absolute right-2 top-0`;
const Btn = tw.button`  text-ssorange text-2xl hover:bg-ssorange/80 hover:text-white rounded-full p-1 transition-all`;
const DefaultBtn = tw.button` rounded-lg text-white bg-ssorange border-[1px] border-ssorange text-xs hover:shadow-xl   shadow-lg px-4 font-bold py-2 `;
