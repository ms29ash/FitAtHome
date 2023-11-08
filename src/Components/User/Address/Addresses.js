import React from "react";
import tw from "tailwind-styled-components";
import Address from "./Address";
import { AiOutlinePlus } from "react-icons/ai";
import { useSelector } from "react-redux";
import NewAddress from "./NewAddress";
import { useState } from "react";

function Addresses() {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const data = useSelector((state) => state.list.address?.addresses);
  return (
    <>
      <Container>
        <Box>
          <Heading>Addresses</Heading>
          <Btn onClick={onOpenModal}>
            <AiOutlinePlus className="mr-2 z-10 relative" />
            <p className="z-10 relative">Add New</p>
          </Btn>
        </Box>
        <Wrapper>
          {data &&
            data?.map((item, n) => {
              return <Address key={item._id} item={item} />;
            })}
        </Wrapper>
      </Container>
      <NewAddress
        open={open}
        onOpenModal={onOpenModal}
        onCloseModal={onCloseModal}
      />
    </>
  );
}

export default Addresses;

const Container = tw.div`w-full`;
const Box = tw.div`flex flex-row items-center justify-between w-full`;
const Heading = tw.h1` py-6`;
const Btn = tw.button` text-white bg-ssorange flex items-center font-bold py-2 px-3  rounded-lg  cursor-pointer before:bg-ssgreen hover-btn `;
const Wrapper = tw.div`grid grid-cols-3 gap-x-2 w-full  `;
