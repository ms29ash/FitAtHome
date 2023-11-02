import React from "react";
import { useNavigate } from "react-router-dom";
import tw from "tailwind-styled-components";

function EmptyBox({ boxOpenHandler }) {
  const navigate = useNavigate();
  return (
    <Container>
      <p>Nothing to show</p>
      <Btn
        onClick={() => {
          boxOpenHandler();
          navigate("/menu");
        }}
      >
        Add Items
      </Btn>
    </Container>
  );
}

export default EmptyBox;

const Container = tw.div`w-full flex flex-col justify-center h-full items-center `;
const Btn = tw.button` border-[2px] border-ssorange text-xs text-ssorange px-4 py-2 rounded-lg my-4 transition-all hover:text-white hover:bg-ssorange`;
