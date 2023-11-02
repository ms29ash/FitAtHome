import React from "react";
import tw from "tailwind-styled-components";
import { getDeliveryCharges, getDiscount } from "../../logics/total";

function BillDetails({ total, subTotal }) {
  return (
    <Container>
      <Wrapper>
        <Head>Bill Details</Head>
        <table className="w-full text-gray-700 mt-4">
          <tbody>
            <tr>
              <td>Total</td>
              <td> &#8377;{Math.floor(total)}</td>
            </tr>
            <tr>
              <td>Discount</td>
              <td>-&#8377;{getDiscount(total)}</td>
            </tr>
            <tr>
              <td>Delivery</td>
              <td>&#8377;{getDeliveryCharges(total)}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <Th>SubTotal</Th>
              <Th> &#8377;{Math.floor(subTotal)}</Th>
            </tr>
          </tfoot>
        </table>
      </Wrapper>
    </Container>
  );
}

export default BillDetails;

const Container = tw.div` mt-2   `;
const Wrapper = tw.div` bg-white py-4 px-[10%] rounded-lg`;
const Head = tw.h1`text-lg `;
const Th = tw.th`text-left`;
