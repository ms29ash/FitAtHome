import React, { useEffect, useState } from "react";
import SideBox from "../Components/Box/SideBox";
import BoxMain from "../Components/Box/BoxMain";
import tw from "tailwind-styled-components";

function Box() {
  return (
    <Wrapper>
      <BoxMain />
    </Wrapper>
  );
}

export default Box;

const Wrapper = tw.div`w-screen h-screen bg-[#f6fafb] py-[1.5%]  space-y-4 transition-all duration-[5000] overflow-y-hidden `;
