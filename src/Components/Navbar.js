import React, { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Hamburger from "hamburger-react";
import tw from "tailwind-styled-components";
import HamburgerMenu from "./HamburgerMenu";
import { useSelector, useDispatch } from "react-redux";
import Cookies from 'universal-cookie'
import { useEffect } from "react";
import { fetchUserData } from "../features/auth/userDataSlice";
import { BsPersonFill } from 'react-icons/bs'
import { AiFillFire } from 'react-icons/ai'
import { FaBoxOpen } from 'react-icons/fa'
import { MdNotifications } from 'react-icons/md'


const cookies = new Cookies()


function Navbar() {

  const [isOpen, setOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const navlink = useRef(null);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  const basket = useSelector(state => state.basket.basket)
  const dispatch = useDispatch()
  const authToken = cookies.get('authToken')

  let { pathname } = useLocation();




  useEffect(() => {
    if (isLoggedIn === false || isLoggedIn === null) {
      if (authToken) {
        try {

          dispatch(fetchUserData(authToken))
        } catch (error) {
          return
        }
      }
    }
  })



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
  return (
    <Container sticky={sticky === true ? 'true' : 'false'} >
      {/* Navbar */}
      <Nav className="navbar  "  >
        {/* Section 1 Logo  */}
        <LogoWrapper className="header">
          <Link to="/">
            <Img src='/images/LogoInv.png' alt="" />
          </Link>
        </LogoWrapper>

        {/* Section 2 Links */}
        <Wrapper>
          <LinkTo selected={pathname === '/food'} to="/food" >Menu</LinkTo>
          {/* <LinkTo to="/food?category=Non-Veg" >Non-Veg</LinkTo>
          <LinkTo to="/food?category=Vegan" >Vegan</LinkTo> */}
          {/* <LinkTo to="/food?category=drink" >Drinks</LinkTo> */}

        </Wrapper>

        {/* Section 3 Icons */}
        <NavLinks ref={navlink} >
          <NavLink to="/fire" >
            <AiFillFire className={`${icon} ${pathname === '/fire' && 'bg-grayfood/20'}`} />
            <NavLinkTxt>Fire</NavLinkTxt>
          </NavLink>
          <NavLink to="/box" className="relative" >
            <FaBoxOpen className={`${icon} ${pathname === '/box' && 'bg-grayfood/20'}`} />
            <NavLinkTxt>Box</NavLinkTxt>
            <Notification>{basket?.length}</Notification>


          </NavLink>
          <NavLink to="/notification" className="relative"  >
            <MdNotifications className={`${icon} ${pathname === '/notification' && 'bg-grayfood/20'}`} />
            <NavLinkTxt>Notification</NavLinkTxt>
            <Notification>3</Notification>
          </NavLink>
          {
            isLoggedIn === true ?
              <NavLink to="/menu/order"><BsPersonFill className=" p-2 bg-grayfood/10 text-5xl mr-1 rounded-full hover:bg-grayfood/30 " /></NavLink>
              :
              <Button to="/signin"><p className="relative z-[1]" >Login</p> </Button>
          }
        </NavLinks>


        {/* Hamburger Icon  */}
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
        {/* Hamburger Menu  */}
        {isOpen &&
          <HamburgerMenu isOpen={isOpen} setOpen={setOpen} />
        }
      </Nav>
    </Container>
  );
}

export default Navbar;

const Container = tw.header`w-screen fixed top-0 right-0 left-0 flex items-center justify-center    z-50  ${p => p.sticky === "true" ? " bg-white md:fixed shadow-xl " : "static bg-transparent "
  }  `

const Nav = tw.nav`
flex  w-full max-w-[1600px] px-[5%]    items-center z-[100]  rounded-lg  top-0 right-0 left-0
 
`;
const LogoWrapper = tw.div`inline-block w-[100px]`;
const Img = tw.img`w-full`
const HamburgerIcon = tw.div` top-[25px] md:hidden right-3 absolute`;

//Section 2
const Wrapper = tw.div` flex-1  flex space-x-8 pl-[10%]   `
const LinkTo = tw(Link)`font-bold  px-5 text-center whitespace-nowrap text-gray-700 relative before:absolute before:-bottom-3 before:w-0 hover:before:w-full before:left-0 before:h-1 before:rounded-full before:transition-all  before:bg-ssorange hover:text-ssorange ${p => p.selected === true && 'before:w-full text-ssorange'
  }  `;


//Section 3
const NavLinks = tw.div` 
 flex-1 md:!flex hidden  justify-end items-center  `;
const NavLink = tw(Link)`ml-10 text-2xl items-center  flex  p-2 aspect-square rounded-full   font-bold  text-black transition-all flex-col justify-center  `;
const icon = `text-[2.5rem] mr-1 p-2 rounded-full hover:bg-grayfood/10 `
const NavLinkTxt = tw.p`text-xs `;
const Button = tw(Link)`ml-10 text-base items-center flex bg-ssorange text-white px-8 py-3  rounded-lg   font-bold   hover-btn before:bg-ssgreen `;
const Notification = tw.small` text-xs absolute right-[30%] top-[20%] bg-ssorange text-white w-4 text-center aspect-square rounded-full  `

