import React from 'react'
import footLgo from "../images/logoFoooter.png"
import { Link } from "react-router-dom"

function Footer() {
    return (
        <footer className="py-16 bg-greenfood grid md:grid-cols-4 grid-cols-1  justify-items-center items-center  text-white text-center">
            <div>
                <Link to="/">
                    <img src={footLgo} alt="" />
                </Link>
            </div>
            <div>
                <ul>
                    <li className="py-3">
                        <Link to="/" className=" my-3 hover:text-orangefood hover:underline">Veg</Link>
                    </li>
                    <li className="py-3">
                        <Link to="/" className=" my-3 hover:text-orangefood hover:underline">NonVeg</Link></li>
                    <li className="py-3">
                        <Link to="/" className=" my-3 hover:text-orangefood hover:underline">Vegan</Link></li>
                </ul>
            </div >
            <div>
                <ul>
                    <li className="py-3">
                        <Link to="/subscribe" className=" my-3 hover:text-orangefood hover:underline">Subscribe</Link>
                    </li>
                    <li className="py-3">
                        <Link to="/food" className=" my-3 hover:text-orangefood hover:underline">Buy Now</Link>
                    </li>
                    <li className="py-3">
                        <Link to="/trial" className=" my-3 hover:text-orangefood hover:underline">Free Trial</Link>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className="py-3">
                        <Link to="/" className=" my-3 hover:text-orangefood hover:underline">Facebook</Link>
                    </li>
                    <li className="py-3">
                        <Link to="/" className=" my-3 hover:text-orangefood hover:underline">Twitter</Link>
                    </li>
                    <li className="py-3">
                        <Link to="/" className=" my-3 hover:text-orangefood hover:underline">Instagram</Link>
                    </li>
                </ul>
            </div>

        </footer >
    )
}

export default Footer
