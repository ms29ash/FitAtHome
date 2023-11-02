import React, { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import tw from "tailwind-styled-components";
import HamburgerMenu from "../HamburgerMenu";
import { useSelector, useDispatch } from "react-redux";
import Cookies from "universal-cookie";
import { useEffect } from "react";
import { fetchUserData } from "../../../features/auth/userDataSlice";
import SideBox from "../../Box/SideBox";
import NavLogo from "./NavLogo";
import Links from "./Links";
import NavIcons from "./NavIcons";

const cookies = new Cookies();

function Navbar() {
  const [isopen, setOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [height, setHeight] = useState();
  const ref = useRef();
  const navlink = useRef(null);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
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

  // For Opening Box
  const boxOpenHandler = () => {
    let body = document.documentElement;
    body.classList.toggle("preventScroll");
    setOpen(!isopen);
  };

  return (
    <Container sticky={sticky === true ? "true" : "false"}>
      {/* Navbar */}
      <Nav className="navbar  " ref={ref}>
        {/* Section 1 Logo  */}
        <NavLogo />

        {/* Section 2 Links */}
        <Links pathname={pathname} />

        {/* Section 3 Icons */}
        <NavIcons
          boxOpenHandler={boxOpenHandler}
          navlink={navlink}
          pathname={pathname}
        />
      </Nav>

      {/* Links for small screens */}
      {pathname !== "/box" && <HamburgerMenu height={height} />}

      {/* Box  */}
      <SideBox
        setOpen={setOpen}
        boxOpenHandler={boxOpenHandler}
        isopen={isopen}
      />
    </Container>
  );
}
export default Navbar;

const Container = tw.header`w-screen flex-col   top-0 right-0 left-0 flex items-center justify-center bg-white z-50  ${(
  p
) => (p.sticky === "true" ? "  static lg:fixed shadow-xl " : "static  ")}  `;

const Nav = tw.nav`flex w-full max-w-[1600px] px-[5%] justify-between   items-center z-[50] rounded-lg  top-0 right-0 left-0 py-3 `;
