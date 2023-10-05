import React, { useEffect } from 'react'
import { useState } from 'react';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import tw from "tailwind-styled-components";

function ReviewStar({ rating }) {

    const [stars, setStars] = useState(0)
    const [halfStars, setHalfStars] = useState(0)

    useEffect(() => {
        setStars(Math.floor(rating))
        setHalfStars(rating - Math.floor(rating));

    }, [])

    return (
        <ReviewBox >
            {stars > 0 &&
                Array(stars).fill('').map((i, n) => {

                    return <FaStar key={n} style={{ color: '' }} className="text-ssorange" />
                })
            }
            {
                halfStars && <FaStarHalfAlt style={{ color: '' }} className="text-ssorange" />
            }

            <Review >{rating}</Review>
        </ReviewBox>
    )
}

export default ReviewStar

const ReviewBox = tw.div`flex space-x-3 my-2 items-center rounded-md  px-2 `
const Review = tw.div`rounded-sm font-bold text-sm  text-black ml-1`