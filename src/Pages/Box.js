import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RiCheckLine } from "react-icons/ri";
import CartCard from "../Components/Cart/CartCard";
import { AiOutlineArrowRight } from "react-icons/ai";
import loadPayment from "../Components/Cart/Payment";
import { useNavigate } from "react-router-dom";
import { resetCart } from "../features/basket/basketSlice";

function Box() {
  const data = useSelector((state) => state.basket.basket);
  const address = useSelector(
    (state) => state?.userData?.userData?.address || null
  );
  const [total, setTotal] = useState();
  const [subTotal, setSubTotal] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //Payment Response
  const response = () => {
    dispatch(resetCart());
  };

  useEffect(() => {
    const total = data.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setTotal(total);
    const subTotal =
      total + (total * 20) / 100 + (total > 500 ? 50 : total === 0 ? 0 : 100);
    setSubTotal(subTotal);
  }, [data]);

  return (
    <Container>
      <Section>
        <AddContainer className="w-[98%]">
          <Address>
            <h3 className="flex items-center">
              {" "}
              <CheckIcon /> Delivering to
            </h3>
            {address !== null ? (
              <p className="ml-8">{address}</p>
            ) : (
              <p className="ml-8">address</p>
            )}
          </Address>
          {address === null ? (
            <ChangeBtn>Set Address</ChangeBtn>
          ) : (
            <ChangeBtn>Change</ChangeBtn>
          )}
        </AddContainer>
        <hr className=" my-3 w-[98%] bg-black h-[1px] border-0 " />
        <Head>Your Cart</Head>
        <hr className=" my-3 w-[98%]" />
        <Wrapper>
          {data?.map((item) => {
            return <CartCard item={item} key={item.id} />;
          })}
        </Wrapper>
      </Section>
      <Total>
        <table className="w-[80%] mx-auto">
          <tbody>
            <tr>
              <td>Total</td>
              <td> &#8377;{total}</td>
            </tr>
            <tr>
              <td>Tax</td>
              <td>&#8377;{(total * 20) / 100}</td>
            </tr>
            <tr>
              <td>Delivery</td>
              <td>&#8377;{total > 500 ? 50 : total === 0 ? 0 : 100}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <Th>SubTotal</Th>
              <Th> &#8377;{subTotal}</Th>
            </tr>
          </tfoot>
        </table>

        <Btn
          onClick={() => loadPayment(subTotal, address, response)}
          disabled={subTotal === 0}
        >
          <p className="z-[1]">Pay Now</p> <AiOutlineArrowRight />
        </Btn>
      </Total>
    </Container>
  );
}

export default Box;

const Container = tw.div` mt-2 mx-auto w-[98vw] max-w-[98vw]     rounded-xl flex flex-col-reverse lg:flex-row`;
const Section = tw.div`lg:max-w-[75%] w-full p-6 mx-auto bg-white`;
const Head = tw.h1`text-xl`;
const Wrapper = tw.div`w-[98%]  my-3 mt-8 pb-10`;
const AddContainer = tw.div`flex items-center mt-5 `;
const Address = tw.div`flex-1`;
const ChangeBtn = tw.button` text-ssorange mx-3 hover:text-orangefood`;
const CheckIcon = tw(
  RiCheckLine
)`bg-redfood text-white rounded-full  mr-2 text-lg`;
const Total = tw.div`flex  w-full   flex-col items-center mb-6 h-fit bg-white py-3 lg:!w-[23%] mx-auto `;
const Th = tw.th`text-left`;
const Btn = tw.button` bg-ssorange  text-white  px-8 py-4 text-xl font-bold rounded-lg fixed bottom-6 lg:bottom-0 right-5  flex items-center space-x-4 lg:relative  lg:py-2  lg:mt-4 lg:w-[90%] justify-center disabled:opacity-50 disabled:hover:bg-redfood before:bg-ssgreen hover-btn  `;
