import React from 'react'
import { Link } from "react-router-dom"
import '../Styles/Trial.css'

function Trial() {
    return (
        <div className="pt-[15vh] md:h-[80vh] h-[50vh] bg-blend-overlay " id="trial">
            <div className="flex flex-col">
                <p className="lg:text-5xl md:text-4xl text-2xl text-center my-2 lg:my-5 font-bold text-white">Get a Trial</p>
                <p className="lg:text-5xl md:text-4xl text-2xl text-center my-2 lg:my-5 font-bold text-orangefood">Make Your Life Easy</p>
                <Link to="/trial" className=" text-center md:text-2xl  hover:bg-orangefood bg-redfood rounded-3xl px-3 py-2 lg:px-5  text-white text-xl lg:text-2xl mt-5 mx-auto"> Get a free trial</Link>
            </div>
        </div>
    )
}

export default Trial
