import React, { useRef } from 'react'
import logo from '../images/logo.png'
import '../Styles/nav.css'
import '../Styles/Hamburger.css'

function Navbar() {
    const navlink = useRef(null);
    const menu = useRef(null);

    const toggleClass = () => {
        navlink.current.classList.toggle('show')
        menu.current.classList.toggle('is-active')
    }
    return (
        <>
            <nav className="navbar flex flex-row w-screen bg-black md:bg-black/80 backdrop-blur-sm text-black z-50 absolute md:fixed top-0  ">
                <div className="header">
                    <img src={logo} alt="" />
                </div>
                <div id="hamburger" className="hamburger" ref={menu} onClick={toggleClass}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
                <div className="navlinks" ref={navlink}>
                    <ul>
                        <li>
                            <a className="text-white hover:text-orangefood" href="/">Home</a></li>
                        <li><a className="text-white hover:text-orangefood" href="/">Food</a></li>
                        <li><a className="text-white hover:text-orangefood" href="/">Services</a></li>
                        <li> <a className="text-white hover:text-orangefood" href="/">Subscribe</a></li>
                        <li><a className="text-white hover:text-orangefood" href="/">Buy Now</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
