import React, { useRef } from 'react'
import FoodCard from './FoodCard';
import {
    useQuery,
} from 'react-query'
import axios from '../axios'
import tw from "tailwind-styled-components";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";



function Food() {
    const scrollRef = useRef(null);
    const fetchFood = async () => {
        return axios.get('/food')
    }

    const { data: food, isLoading, isError } = useQuery('food', fetchFood)





    const rightScroll = () => {
        scrollRef.current.scrollLeft += 400;

    }
    const leftScroll = () => {
        scrollRef.current.scrollLeft -= 400;
    }
    return (
        <>
            <FoodSection id="food">
                <h1 className="w-full  text-redfood xl:text-3xl mb-4 text-2xl mb-4  xl:mb-8" >Best Healthy Food</h1>

                <div className="flex justify-between w-screen z-20">
                    <LeftBtn onClick={leftScroll} className="btn-arrow">
                        <FaAngleLeft />

                    </LeftBtn>
                    <RightBtn onClick={rightScroll} className="btn-arrow">
                        <FaAngleRight />

                    </RightBtn>
                </div>
                <div className="relative w-full flex items-stretch gap-6 snap-x snap-mandatory overflow-x-auto pb-4 " id="food-section" ref={scrollRef}>

                    {isError || isLoading ? Array(10).fill().map((item, index) => { return <FoodCard key={index} /> }) :

                        food?.data?.food.map((foodItem) => {
                            return <FoodCard foodItem={foodItem} key={foodItem._id} />;


                        })



                    }

                </div>
            </FoodSection>
        </>
    )
}

export default Food

const FoodSection = tw.section`px-3 bg-white  xl:px-20  pt-16 xl:pt-6 pb-6 py-10`
const Button = tw.button`hidden mt-20 md:block w-16  h-20 absolute  z-20  text-black  px-4 py-3 text-5xl bg-white rounded stroke-1  cursor-pointer`

const LeftBtn = tw(Button)`
left-0`

const RightBtn = tw(Button)`
right-0`