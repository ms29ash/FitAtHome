import React from "react";
import { BiUser } from "react-icons/bi";
import { BsBox2Heart, BsFire } from "react-icons/bs";
import { HiOutlineSearch } from "react-icons/hi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";
import { getAllTotal } from "../../../logics/total";

function NavIcons({ boxOpenHandler, navlink, pathname }) {
  const basket = useSelector((state) => state.basket.basket);

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <NavLinks ref={navlink}>
      {isLoggedIn === true ? (
        <>
          <NavLink to="/search" className="relative  ">
            <HiOutlineSearch
              className={`${icon} ${
                pathname === "/search" && "bg-grayfood/20"
              }`}
            />
          </NavLink>
          <NavLink to="/fire">
            <BsFire
              className={`${icon} ${pathname === "/fire" && "text-ssorange"}`}
            />
            {/* <NavLinkTxt>Fire</NavLinkTxt> */}
          </NavLink>
          <NavLink to="/user">
            <BiUser
              className={`${icon} ${pathname === "/user" && "text-ssorange"}`}
            />
          </NavLink>
          <NavLink
            to="/box"
            className="!text-white !bg-ssgreen sm:hidden !rounded-lg"
          >
            <BsBox2Heart className="!text-white" />
          </NavLink>
          <Basket onClick={boxOpenHandler} className="relative">
            <BsBox2Heart
              className="text-3xl "
              // className={`${icon} ${
              //   pathname === "/box" && "text-ssorange"
              // }`}
            />
            <BDetails>
              <p className="text-base">{basket?.length} items</p>
              <p>&#8377;{getAllTotal(basket)}</p>
            </BDetails>
          </Basket>
        </>
      ) : (
        <Button to="/signin">
          <p className="relative z-[1]">Login</p>{" "}
        </Button>
      )}
    </NavLinks>
  );
}

export default NavIcons;

const NavLinks = tw.div` 
 md:flex-1 flex   justify-end items-center  `;
const NavLink = tw(
  Link
)` ml-1 lg:ml-5 text-2xl items-center  flex  p-1 lg:p-2 aspect-square rounded-full   font-bold  text-black transition-all flex-col justify-center   hover:!text-ssorange  `;
const Basket = tw.button` hidden sm:flex
 ml-1 lg:ml-5  py-1 px-4  rounded-lg   font-bold  text-white transition-all items-center    bg-ssgreen space-x-2
`;
const BDetails = tw.div`hidden xl:block text-left `;
const icon = `text-[2rem] lg:text-[2.25rem]  p-1   `;
const Button = tw(
  Link
)`ml-10 text-base items-center flex bg-ssorange text-white px-8 py-3  rounded-lg   font-bold   hover-btn before:bg-ssgreen `;
