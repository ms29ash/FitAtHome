import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import tw from "tailwind-styled-components";
import HamburgerMenu from "./HamburgerMenu";
import { IoMdBasket } from 'react-icons/io'
import { BsFillPersonFill } from 'react-icons/bs'

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const navlink = useRef(null);
  return (
    <Container>
      <Nav className="navbar  ">
        <LogoWrapper className="header">
          <Link to="/">
            <Img src='/images/LogoInv.png' alt="" />
          </Link>
        </LogoWrapper>

        <HamburgerIcon>
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            rounded
            onToggle={(toggled) => {
              document.getElementById('body').classList.toggle('toggle')
            }}
          />
        </HamburgerIcon>

        <NavLinks ref={navlink} >
          <NavLink to="/food">Food</NavLink>

          <NavLink to="/trial">Free Trial</NavLink>

          <NavLink to="/subscribe">Subscribe</NavLink>

          <LoginLink to="/cart" ><IoMdBasket /></LoginLink>
          <LoginLink $as="div" className="hover:first:block" ><BsFillPersonFill />
            <Menu>
              <Opt to="/">Profile</Opt>
              <Opt to="/">Subscriptions</Opt>
              <Opt to="/">Help</Opt>
              <hr />
              <Opt to="/signin">Login</Opt>
            </Menu>
          </LoginLink>
        </NavLinks>
        {
          isOpen &&
          <HamburgerMenu isOpen={isOpen} setOpen={setOpen} />}
      </Nav>
    </Container>
  );
}

export default Navbar;

const Container = tw.header`w-screen min-h-[80px] h-[5vh] mb-4 `

const Nav = tw.nav`
flex py-2 rounded-xl shadow-xl bg-white backdrop-blur-sm text-redfood  absolute md:fixed top-4 w-[95vw] md:w-[90vw] mx-[2.5vw] md:!mx-[5vw] items-center px-5 z-[100]
`;
const LogoWrapper = tw.div`inline-block w-[100px]`;
const Img = tw.img`w-full`
const HamburgerIcon = tw.div`text-redfood top-[25px] md:hidden right-3 absolute`;
const NavLinks = tw.div` 
 flex-1 md:!flex hidden  justify-end items-center`;



const NavLink = tw(Link)`mx-4 text-lg text-redfood hover:text-orangefood  font-bold hover:underline `;
const LoginLink = tw(Link)`mx-4 text-xl text-white  font-bold bg-redfood hover:bg-orangefood px-3 py-3  rounded-full relative group
`;

const Menu = tw.div`absolute shadow-xl bg-white right-0 text-black top-[100%] text-base font-normal rounded-md hidden  group-hover:flex flex-col  `

const Opt = tw(Link)`hover:bg-redfood hover:text-white py-3  pl-2 pr-12`