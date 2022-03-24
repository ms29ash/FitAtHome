import React, { useRef } from 'react'
import { Link } from "react-router-dom";

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
            <nav className="navbar flex flex-row w-screen bg-black h-[10vh] md:bg-black/80 backdrop-blur-sm text-black z-50 absolute md:fixed top-0  ">
                <div className="header">
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div id="hamburger" className="hamburger" ref={menu} onClick={toggleClass}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
                <div className="navlinks" ref={navlink}>
                    <ul>
                        {/* <li>
                            <a className="text-white hover:text-orangefood" href="/">Home</a>
                            </li> */}
                        <li><Link className="text-white hover:text-orangefood hover:underline" to="/food">Food</Link></li>
                        <li><Link className="text-white hover:text-orangefood hover:underline" to="/trial">Free Trial</Link></li>
                        <li> <Link className="text-white hover:text-orangefood hover:underline" to="/subscribe">Subscribe</Link></li>
                        <li><Link className="text-white hover:bg-orangefood bg-redfood px-3 py-2 rounded-2xl hover:underline" to="/signin">Sign In</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
