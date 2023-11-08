import React from "react";
import tw from "tailwind-styled-components";
import Favorites from "./Favorites";
import Orders from "./Orders";
import Payments from "./Payments";
import Addresses from "./Address/Addresses";
function Tab({ tab }) {
  return (
    <Container>
      {tab === "address" ? (
        <Addresses />
      ) : tab === "payments" ? (
        <Payments />
      ) : tab === "favorites" ? (
        <Favorites />
      ) : (
        <Orders />
      )}
    </Container>
  );
}

export default Tab;

const Container = tw.div`flex-1 w-full px-[2.5%] max-h-[80vh] overflow-y-scroll`;
