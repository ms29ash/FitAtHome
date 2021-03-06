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

    const { data: food, isLoading, isError, error } = useQuery('food', fetchFood)





    const rightScroll = () => {
        scrollRef.current.scrollLeft += 400;

    }
    const leftScroll = () => {
        scrollRef.current.scrollLeft -= 400;
    }
    return (
        <>
            <FoodSection id="food">
                <Head >Get Your Food Here</Head>
                <div className="flex justify-between w-screen z-20">
                    <LeftBtn onClick={leftScroll} className="btn-arrow">
                        <FaAngleLeft />

                    </LeftBtn>
                    <RightBtn onClick={rightScroll} className="btn-arrow">
                        <FaAngleRight />

                    </RightBtn>
                </div>
                <div className="relative w-full flex gap-6 snap-x snap-mandatory overflow-x-auto pb-4 " id="food-section" ref={scrollRef}>

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

const FoodSection = tw.section`px-3 bg-white xl:px-20 pt-2 xl:pt-5 pb-10`

const Head = tw.h1`text-orangefood headings text-center`
const Button = tw.button`hidden mt-20 md:block w-16  h-20 absolute  z-20  text-black  px-4 py-3 text-5xl bg-white rounded stroke-1  cursor-pointer`

const LeftBtn = tw(Button)`
left-0`

const RightBtn = tw(Button)`
right-0`