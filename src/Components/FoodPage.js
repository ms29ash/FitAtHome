import React, { useEffect, useContext, useState } from "react";
import tw from "tailwind-styled-components";
import FoodPageSideBar from "./FoodPageSideBar";
import FoodPageMain from "./FoodPageMain";

function FoodPage(props) {
  const [lowerPrice, setLowerPrice] = useState(0);
  const [upperPrice, setUpperPrice] = useState(10000);
  const [type, setType] = useState("");

  return (
    <Page>
      <Container>
        <FoodPageSideBar
          setLowerPrice={setLowerPrice}
          setUpperPrice={setUpperPrice}
          setType={setType}
        />
        <FoodPageMain
          lowerPrice={lowerPrice}
          upperPrice={upperPrice}
          type={type}
        />
      </Container>
    </Page>
  );
}

export default FoodPage;

const Container = tw.div` flex w-[90vw]  mx-auto  `;
const Page = tw.div` mt-[12vh] py-200`;
