import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import tw from "tailwind-styled-components";

import logo from "../images/logo.png";
import HamburgerMenu from "./HamburgerMenu";
// import "../Styles/nav.css";

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef()
  const navlink = useRef(null);
  return (
    <>
      <Nav className="navbar  ">
        <LogoWrapper className="header">
          <Link to="/">
            <Img src={logo} alt="" />
          </Link>
        </LogoWrapper>

        <HamburgerIcon>
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            rounded
            // color="#fff"
            onToggle={(toggled) => {
              document.getElementById('body').classList.toggle('toggle')

            }}
          />
        </HamburgerIcon>

        <NavLinks ref={navlink}>
          <NavLink to="/food">Food</NavLink>

          <NavLink to="/trial">Free Trial</NavLink>

          <NavLink to="/subscribe">Subscribe</NavLink>

          <LoginLink to="/signin">Login</LoginLink>
        </NavLinks>
        {
          isOpen &&
          <HamburgerMenu isOpen={isOpen} setOpen={setOpen} />}
      </Nav>
    </>
  );
}

export default Navbar;

const Nav = tw.nav`
flex flex-row w-screen min-h-[80px] h-[5vh] bg-white/80 backdrop-blur-sm text-redfood z-50 absolute md:fixed top-0 items-center px-5
`;
const LogoWrapper = tw.div`inline-block w-16`;
const Img = tw.img`w-full`
const HamburgerIcon = tw.div`text-redfood top-[25px] md:hidden right-3 absolute`;
const NavLinks = tw.div` 
flex-1 md:!flex hidden  justify-end items-center`;
const NavLink = tw(
  Link
)`mx-4 text-lg text-redfood hover:text-orangefood  font-semibold hover:underline `;
const LoginLink = tw(Link)`
mx-4 text-sm text-white  font-bold bg-redfood hover:bg-orangefood px-8  py-3  rounded-full
`;
