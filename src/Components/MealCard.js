import React from 'react'
import { Link } from "react-router-dom";


function MealCard(props) {
    const { title, description, image } = props

    return (
        <>


            <div className="card-container   mt-4 lg:mt-10 xl:mt-12   bg-white border-black-100 shadow-lg border-[1px] hover:shadow-2xl rounded-md">
                <Link to="/food">
                    <img src={process.env.PUBLIC_URL + `images/${image}`} alt="" className="object-cover rounded-t-md w-full h-[10rem]" />
                    <div className="p-4">
                        <h1 className="text-2xl font-bold meal-heading">{title}
                        </h1>
                        <p className="meal-details">{description}</p>
                    </div>
                </Link>
            </div>

        </>
    )
}

export default MealCard
