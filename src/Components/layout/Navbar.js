import React, { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import tw from "tailwind-styled-components";
import HamburgerMenu from "./HamburgerMenu";
import { useSelector, useDispatch } from "react-redux";
import Cookies from "universal-cookie";
import { useEffect } from "react";
import { fetchUserData } from "../../features/auth/userDataSlice";
import { BsBox2Heart, BsFire } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { BiUser } from "react-icons/bi";
import { HiMenuAlt1, HiOutlineSearch } from "react-icons/hi";

const cookies = new Cookies();

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [height, setHeight] = useState();
  const ref = useRef();
  const navlink = useRef(null);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const basket = useSelector((state) => state.basket.basket);
  const dispatch = useDispatch();
  const authToken = cookies.get("authToken");

  let { pathname } = useLocation();

  useEffect(() => {
    if (isLoggedIn === false || isLoggedIn === null) {
      if (authToken) {
        try {
          dispatch(fetchUserData(authToken));
        } catch (error) {
          return;
        }
      }
    }
  });

  //Sticky Navbar
  useEffect(() => {
    const handleSticky = () => {
      if (window.scrollY > 200) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleSticky);
  });

  let navHeight;
  useEffect(() => {
    if (ref.current) {
      const navHeight = ref.current.offsetHeight;
      setHeight(navHeight);
    }
  }, [navHeight]);

  return (
    <Container sticky={sticky === true ? "true" : "false"}>
      {/* Navbar */}
      <Nav className="navbar  " ref={ref}>
        {/* Section 1 Logo  */}
        <LogoWrapper className="header">
          <HamburgerIcon onClick={() => setOpen(!isOpen)}>
            {isOpen ? <HiMenuAlt1 /> : <RxCross2 />}
          </HamburgerIcon>
          <Link to="/">
            <picture className="w-full">
              <source media="(max-width:768px)" srcset="/images/logo.png" />
              <source media="(min-width:768px)" srcset="/logo.png" />
              <Img src="img_orange_flowers.jpg" alt="/images/logo.png" />
            </picture>
          </Link>
        </LogoWrapper>

        {/* Section 2 Links */}
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

        {/* Section 3 Icons */}
        <NavLinks ref={navlink}>
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
          <NavLink to="/box" className="relative">
            <BsBox2Heart
              className={`${icon} ${pathname === "/box" && "text-ssorange"}`}
            />

            <Notification>{basket?.length}</Notification>
          </NavLink>
          {isLoggedIn === true ? (
            <NavLink to="/user">
              <BiUser
                className={`${icon} ${pathname === "/user" && "text-ssorange"}`}
              />
            </NavLink>
          ) : (
            <Button to="/signin">
              <p className="relative z-[1]">Login</p>{" "}
            </Button>
          )}
        </NavLinks>

        {/* Hamburger Icon  */}
        {/* <HamburgerIcon>
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            rounded
            onToggle={(toggled) => {
              document.getElementById("body").classList.toggle("toggle");
            }}
          />
        </HamburgerIcon> */}
      </Nav>
      {/* Hamburger Menu  */}
      <HamburgerMenu height={height} isOpen={isOpen} setOpen={setOpen} />
    </Container>
  );
}

export default Navbar;

const Container = tw.header`w-screen flex-col   top-0 right-0 left-0 flex items-center justify-center    z-50  ${(
  p
) =>
  p.sticky === "true"
    ? " bg-white static lg:fixed shadow-xl "
    : "static bg-transparent "}  `;

const Nav = tw.nav`flex  w-full max-w-[1600px] px-[5%] justify-between   items-center z-[100] rounded-lg  top-0 right-0 left-0 py-3 `;
const LogoWrapper = tw.div`lg:inline-block w-fit flex items-center `;
const Img = tw.img`max-w-[50px] lg:max-w-[200px]  `;
const HamburgerIcon = tw.div`text-4xl  xl:hidden static`;

//Section 2
const Wrapper = tw.div` flex-1   space-x-8 pl-[10%] xl:!flex hidden   `;
const LinkTo = tw(
  Link
)`font-bold  px-5 text-center whitespace-nowrap text-gray-700 relative before:absolute before:-bottom-3 before:w-0 hover:before:w-full before:left-0 before:h-1 before:rounded-full before:transition-all  before:bg-ssorange hover:text-ssorange ${(
  p
) => p.selected === true && "before:w-full text-ssorange"}  `;

//Section 3
const NavLinks = tw.div` 
 md:flex-1 flex   justify-end items-center  `;
const NavLink = tw(
  Link
)` ml-1 lg:ml-5 text-2xl items-center  flex  p-1 lg:p-2 aspect-square rounded-full   font-bold  text-black transition-all flex-col justify-center rounded-full  hover:!text-ssorange  `;
const icon = `text-[2rem] lg:text-[2.25rem]  p-1   `;
const Button = tw(
  Link
)`ml-10 text-base items-center flex bg-ssorange text-white px-8 py-3  rounded-lg   font-bold   hover-btn before:bg-ssgreen `;
const Notification = tw.small`text-[0.5rem] text-xs absolute right-[0%] top-[0%] bg-ssorange text-white  w-5 text-center aspect-square rounded-full grid place-items-center  `;
