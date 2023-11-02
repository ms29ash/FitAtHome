import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import tw from "tailwind-styled-components";
import loadPayment from "./Payment";
import { useDispatch, useSelector } from "react-redux";
import { resetCart } from "../../features/basket/basketSlice";
import { getAllTotal } from "../../logics/total";
import { useState } from "react";
import { useEffect } from "react";

function BoxPayment() {
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const address = useSelector(
    (state) => state?.userData?.userData?.address || null
  );

  const data = useSelector((state) => state.basket.basket);

  const response = () => {
    dispatch(resetCart());
  };

  useEffect(() => {
    setTotal(getAllTotal(data));
  }, [data]);

  return (
    <PaymentContainer>
      <PaymentWrapper
        onClick={() => loadPayment(total, address, response)}
        disabled={total === 0}
      >
        <PayDetails>
          <p className="font-bold text-lg">&#8377;{total}</p>
          <p className="text-slate-200">Total</p>
        </PayDetails>
        <p className="text-xl flex items-center">
          Pay Now <AiOutlineRight className="text-3xl" />
        </p>
      </PaymentWrapper>
    </PaymentContainer>
  );
}

export default BoxPayment;

const PaymentContainer = tw.div`bg-white paymentShadow rounded-t-lg h-max w-full px-[5%] py-4`;
const PaymentWrapper = tw.button`flex w-full items-center bg-ssgreen text-white justify-between px-[5%] py-1 rounded-lg disabled:opacity-30`;
const PayDetails = tw.div`text-left`;
