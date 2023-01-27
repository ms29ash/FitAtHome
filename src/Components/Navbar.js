import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import tw from "tailwind-styled-components";
import HamburgerMenu from "./HamburgerMenu";
import { BsPerson } from 'react-icons/bs'
import { useSelector, useDispatch } from "react-redux";
import Cookies from 'universal-cookie'
import { useEffect } from "react";
import { fetchUserData } from "../features/auth/userDataSlice";
import { BiSearch } from 'react-icons/bi'
import { TbBasket } from 'react-icons/tb'
import { AiOutlineFire } from 'react-icons/ai'
import { FiHelpCircle } from 'react-icons/fi'


const cookies = new Cookies()


function Navbar() {

  const [isOpen, setOpen] = useState(false);
  const navlink = useRef(null);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  const name = useSelector(state => state.userData.name)
  const dispatch = useDispatch()
  const authToken = cookies.get('authToken')



  useEffect(() => {
    if (isLoggedIn === false || isLoggedIn === null) {
      if (authToken) {
        dispatch(fetchUserData(authToken))
      }
    }
  })
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
          <NavLink to="/food"><BiSearch className="mr-1" />Search</NavLink>
          <NavLink to="/subscribe"><AiOutlineFire className="mr-1" />Fire</NavLink>
          <NavLink to="/cart"><TbBasket className="mr-1" />Cart</NavLink>
          {
            isLoggedIn === true ?
              <NavLink to="/profile"><BsPerson className="mr-1" />{name ? name.substr(0, 5) : 'Person'}</NavLink>
              :
              <NavLink to="/signin"><BsPerson className="mr-1" />Sign in</NavLink>
          }
          <NavLink to="/"><FiHelpCircle className="mr-1" />Help</NavLink>
        </NavLinks>
        {
          isOpen &&
          <HamburgerMenu isOpen={isOpen} setOpen={setOpen} />}
      </Nav>
    </Container>
  );
}

export default Navbar;

const Container = tw.header`w-screen min-h-[80px] h-[5vh]  `

const Nav = tw.nav`
flex py-2  shadow-xl bg-white backdrop-blur-sm text-redfood  absolute md:fixed top-0 right-0 left-0 max-w-screen px-[5%] md:py-3  items-center z-[100]
`;
const LogoWrapper = tw.div`inline-block w-[100px]`;
const Img = tw.img`w-full`
const HamburgerIcon = tw.div`text-redfood top-[25px] md:hidden right-3 absolute`;
const NavLinks = tw.div` 
 flex-1 md:!flex hidden  justify-end items-center`;



const NavLink = tw(Link)`ml-10 text-md items-center flex text-redfood hover:text-orangefood  font-bold hover:underline `;

