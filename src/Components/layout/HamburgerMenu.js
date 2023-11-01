import React from "react";
import tw from "tailwind-styled-components";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineSearch } from "react-icons/hi";

function HamburgerMenu(props) {
  const { isOpen, setOpen, height } = props || {};

  let { pathname } = useLocation();

  return (
    <>
      <Container height={height}>
        <Wrapper isOpen={isOpen}>
          <NavLinks>
            <NavLink key="key" to="/menu" selected={pathname === "/menu"}>
              Menu
            </NavLink>

            {/* <Hr /> */}
            <NavLink
              key="food"
              to="/product"
              selected={pathname === "/product"}
            >
              Products
            </NavLink>
            {/* <Hr /> */}

            <NavLink
              key="trial"
              to="/subscribe"
              selected={pathname === "/subscribe"}
            >
              Subscriptions
            </NavLink>
          </NavLinks>
        </Wrapper>
      </Container>
    </>
  );
}

export default HamburgerMenu;

const Container = tw.div` w-full   fixed  left-0 right-0
bottom-[3vh] md:hidden flex items-end z-20 `;
const Wrapper = tw.div`w-full max-w-full px-[5%] transition-all `;
const NavLinks = tw.div`  
flex-1 flex  items-center  w-full  justify-around  shadow-review bg-black text-white rounded-lg  `;
const NavLink = tw(
  Link
)` text-xs    py-3 rounded-lg  underline-none    font-semibold hover:underline w-[33%] text-center  
 ${(p) => p.selected && " bg-ssorange  "}
  `;

const Hr = tw.div`bg-white w-[1px] h-6`;
