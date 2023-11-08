import React from "react";
import { useSelector } from "react-redux";
import tw from "tailwind-styled-components";

function BoxAddress() {
  const item = useSelector((state) => state.list?.address?.defaultAddress);
  return (
    <Container>
      <Wrapper>
        <h1 className="text-lg mb-2">Address</h1>
        <p className="font-bold text-ssorange">Edit</p>
      </Wrapper>
      <p className="text-sm">
        {/* 123 Main Street Cityville Stateville 12345 (Postal Code) Countryland */}
        {item.street}, {item.state}, {item.postalCode}, {item.city} ,
        {item.country}
      </p>
    </Container>
  );
}

export default BoxAddress;

const Container = tw.div`  bg-white p-4 justify-between items-center rounded-xl mx-[5%]`;
const Wrapper = tw.div` flex justify-between`;
