import React from "react";
import tw from "tailwind-styled-components";
import BoxPayment from "./BoxPayment";
import BillDetails from "./BillDetails";
import BoxCard from "./BoxCard";
import { useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import BoxAddress from "./BoxAddress";
import { useRef } from "react";
import EmptyBox from "./EmptyBox";

function BoxMain({ isOpen, boxOpenHandler }) {
  const data = useSelector((state) => state.basket.basket);
  const payRef = useRef();
  const headRef = useRef();

  return (
    <ContainerBox>
      {/* Header */}

      <BoxAddress />

      <Header ref={headRef}>
        <h1 className="text-xl">My Box</h1>
        <RxCross2
          className="text-3xl cursor-pointer hidden xl:block"
          onClick={boxOpenHandler}
        />
      </Header>

      <BoxContainer
        style={{
          paddingBottom: `calc(${payRef?.current?.offsetHeight}px + 2.5rem )`,
          height: `calc(100% - ${headRef?.current?.offsetHeight}px - ${payRef?.current?.offsetHeight}px ) `,
        }}
      >
        {/* Box Items */}
        <Box>
          {data.length !== 0 ? (
            data?.map((item, index) => {
              return <BoxCard item={item} key={item.id} index={index} />;
            })
          ) : (
            <EmptyBox />
          )}
        </Box>

        {/* Bill Details  */}
        <BillDetails />
        {/* Cancellation Policy */}
      </BoxContainer>
      {/* Payment */}
      <PayWrapper ref={payRef}>
        <BoxPayment />
      </PayWrapper>
    </ContainerBox>
  );
}

export default BoxMain;

const ContainerBox = tw.div`relative h-screen w-full max-h-screen `;
const Header = tw.div` flex py-4  px-4 justify-between items-center rounded-xl mx-[5%] `;

const BoxContainer = tw.div`flex flex-col   overflow-y-auto  w-full  rounded-xl  px-[5%] `;
const Box = tw.div`w-full rounded-xl flex-1  bg-white p-[2.5%] `;
const PayWrapper = tw.div`fixed right-0 left-0 bottom-0`;
