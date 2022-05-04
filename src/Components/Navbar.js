import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import tw from "tailwind-styled-components";

import logo from "../images/logo.png";
// import "../Styles/nav.css";

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const navlink = useRef(null);
  return (
    <>
      <Nav className="navbar  ">
        <LogoWrapper className="header">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </LogoWrapper>

        <HamburgerIcon>
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            rounded
            // color="#fff"
            onToggle={(toggled) => {
              navlink.current.classList.toggle("hidden");
            }}
          />
        </HamburgerIcon>

        <NavLinks ref={navlink}>
          <NavLink to="/food">Food</NavLink>

          <NavLink to="/trial">Free Trial</NavLink>

          <NavLink to="/subscribe">Subscribe</NavLink>

          <LoginLink to="/signin">Sign In</LoginLink>
        </NavLinks>
      </Nav>
    </>
  );
}

export default Navbar;

const Nav = tw.nav`
flex flex-row w-screen min-h-[100px] h-[10vh] bg-white/80 backdrop-blur-sm text-redfood z-50 absolute md:fixed top-0 items-center px-5
`;
const LogoWrapper = tw.div`inline-block`;
const HamburgerIcon = tw.div`text-redfood top-[25px] md:hidden right-3 absolute`;
const NavLinks = tw.div`
flex-1 md:!flex hidden justify-end items-center`;
const NavLink = tw(
  Link
)`mx-4 text-xl text-redfood hover:text-orangefood  font-semibold`;
const LoginLink = tw(Link)`
mx-4 text-xl text-white  font-semibold bg-redfood px-3 py-2 rounded-2xl
`;
