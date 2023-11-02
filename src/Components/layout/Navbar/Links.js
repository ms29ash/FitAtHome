import React from "react";
import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";

function Links({ pathname }) {
  return (
    <Wrapper>
      <LinkTo selected={pathname === "/menu"} to="/menu">
        Menu
      </LinkTo>
      <LinkTo selected={pathname === "/product"} to="/product">
        Products
      </LinkTo>
      <LinkTo selected={pathname === "/plans"} to="/food">
        Subscriptions
      </LinkTo>
    </Wrapper>
  );
}

export default Links;

//Section 2
const Wrapper = tw.div` flex-1    space-x-3 xl:space-x-8  pl-[5%] md:!flex hidden   `;
const LinkTo = tw(
  Link
)`font-bold  px-5 text-center whitespace-nowrap text-gray-700 hover:text-ssorange text-xs xl:text-lg
relative before:absolute before:-bottom-3 before:w-0 hover:before:w-full before:left-0 before:h-1 before:rounded-full before:transition-all  before:bg-ssorange  ${(
  p
) => p.selected === true && "before:w-full text-ssorange"}  `;
