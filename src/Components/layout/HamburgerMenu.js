import React from "react";
import tw from "tailwind-styled-components";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineSearch } from "react-icons/hi";

function HamburgerMenu(props) {
  const { isOpen, setOpen, height } = props || {};

  let { pathname } = useLocation();

  const toggle = () => {
    setOpen(!isOpen);
    document.getElementById("body").classList.toggle("toggle");
  };
  return (
    <>
      <Container height={height} className={`top-[${height}px] `}>
        <Wrapper isOpen={isOpen}>
          <NavLinks>
            <NavLink key="key" to="/menu" selected={pathname === "/menu"}>
              Menu
            </NavLink>

            <NavLink
              key="food"
              to="/product"
              selected={pathname === "/product"}
            >
              Products
            </NavLink>

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

const Container = tw.div` w-full    left-0 lg:hidden `;
const Wrapper = tw.div`w-full max-w-full px-[5%] transition-all ${(p) =>
  p.isOpen ? "scale-y-0" : "scale-y-100"} `;
const NavLinks = tw.div`  
flex-1 flex  items-center  w-full  justify-around  `;
const NavLink = tw(
  Link
)` text-xs border-[1px] border-[2px] border-gray-300 text-gray-600 p-2 rounded-lg  bg-white underline-none    font-semibold hover:underline w-[30%] text-center  ${(
  p
) => p.selected && "border-ssorange bg-ssorange/30 text-ssornage "}  `;
