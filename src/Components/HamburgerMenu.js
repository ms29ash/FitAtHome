import React from 'react'
import tw from "tailwind-styled-components";
import { Link } from "react-router-dom";



function HamburgerMenu(props) {
    const { isOpen, setOpen } = props || {}

    const toggle = () => {
        setOpen(!isOpen)
        document.getElementById('body').classList.toggle('toggle')
    }
    return (
        <Container>
            <NavLinks>
                <NavLink key='key' onClick={toggle} to="/food">Food</NavLink>

                <NavLink key='food' onClick={toggle} to="/trial">Free Trial</NavLink>

                <NavLink key='trial' onClick={toggle} to="/subscribe">Subscribe</NavLink>

                <LoginLink key='login' onClick={toggle} to="/signin">Login</LoginLink>
            </NavLinks>
        </Container>
    )
}

export default HamburgerMenu

const Container = tw.div`absolute grid place-items-center w-screen  bg-white top-[80px] right-0 z-20  h-screen`
const NavLinks = tw.div` h-full -mt-44
flex-1 flex flex-col justify-center items-center`;
const NavLink = tw(
    Link
)`mx-4 text-lg text-redfood hover:text-orangefood  font-semibold hover:underline py-3  `;
const LoginLink = tw(Link)`
mx-4 text-sm text-white  font-bold bg-redfood hover:bg-orangefood px-8  py-3  rounded-full
`;