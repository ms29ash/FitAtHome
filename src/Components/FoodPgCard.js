import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCofee } from '@fortawesome/free-solid-svg-icons'
import { FaStar } from "react-icons/fa";




function FoodPgCard(props) {
    const { foodItem } = props
    return (
        <div className="shadow-sm rounded-lg bg-white   hover:scale-105 h-full transition-all duration-100 ease-linear ">
            <a href="/food">
                <img className="rounded-t-lg object-cover h-48 w-full transition-all duration-100 ease-linear" src={foodItem.image} alt="" />
                <div className="p-4 h-28 overflow-y-hidden ">

                    <h5 className="!text-base">{foodItem.name}</h5>
                    <div className="flex justify-between items-center">

                        <p className="text-black/80">&#8377; {foodItem.price} Only</p>
                        <div className="flex justify-end items-center rounded-md bg-redfood px-2 py-1">

                            <FaStar style={{ color: 'white' }} />
                            <div className="rounded-sm bg-redfood text-white ml-1">{foodItem.ratings}</div>
                        </div>

                    </div>
                </div>
            </a>
        </div>
    )
}

export default FoodPgCard
