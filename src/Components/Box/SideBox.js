import React from "react";
import tw from "tailwind-styled-components";
import { RxCross2 } from "react-icons/rx";
import BoxAddress from "./BoxAddress";
import BillDetails from "./BillDetails";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import BoxCard from "./BoxCard";
import BoxPayment from "./BoxPayment";
import { useRef } from "react";
import EmptyBox from "./EmptyBox";
import { getSubTotal, getTotal } from "../../logics/total";

function SideBox({ setOpen, isopen, boxOpenHandler }) {
  const [total, setTotal] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const data = useSelector((state) => state.basket.basket);
  const payRef = useRef();
  const headRef = useRef();

  //Getting Total amount
  useEffect(() => {
    setTotal(getTotal(data));
    if (total > 0) {
      setSubTotal(getSubTotal(total));
    }
  }, [data]);

  return (
    <Container isopen={isopen} onClick={boxOpenHandler}>
      <Wrapper
        isopen={isopen}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Header ref={headRef}>
          <h1 className="text-xl">My Box</h1>
          <RxCross2
            className="text-3xl cursor-pointer hidden xl:block"
            onClick={boxOpenHandler}
          />
        </Header>
        <BoxAddress />

        <BoxContainer
          style={{
            paddingBottom: `calc(${payRef?.current?.offsetHeight}px + 2rem )`,
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
              <EmptyBox boxOpenHandler={boxOpenHandler} />
            )}
          </Box>
          {/* Bill Details  */}
          <BillDetails total={total} subTotal={subTotal} />
        </BoxContainer>

        <PayWrap ref={payRef}>
          <BoxPayment subTotal={subTotal} />
        </PayWrap>
      </Wrapper>
    </Container>
  );
}

export default SideBox;

const Container = tw.div`z-[60] fixed top-0 right-0 left-0 h-screen bg-black/70 flex justify-end transition-all duration-100  ${(
  p
) => (p.isopen ? "visible" : "invisible")} `;

const Wrapper = tw.div`w-[40%] h-full bg-[#f6fafb] py-[1.5%] max-w-[500px] min-w-[500px] space-y-4 transition-all duration-[5000] relative ${(
  p
) => (p.isopen ? "translate-x-[0%]" : "translate-x-[100%]")} `;
const Header = tw.div`flex py-2  px-4 justify-between items-center rounded-xl mx-[5%]`;
const BoxContainer = tw.div`flex flex-col   overflow-y-auto  w-full  rounded-xl  px-[5%] `;
const Box = tw.div`flex-1 w-full rounded-xl  bg-white p-[2.5%] `;
const PayWrap = tw.div`absolute right-0 left-0 bottom-0`;
