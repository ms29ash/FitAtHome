import React, { useRef, useContext, useEffect } from 'react'
import FoodCard from './FoodCard';


function Food() {
    const scrollRef = useRef(null);

    useEffect(() => {

    })



    const rightScroll = () => {
        scrollRef.current.scrollLeft += 200;

    }
    const leftScroll = () => {
        scrollRef.current.scrollLeft -= 200;
    }
    return (
        <>
            <section className=" px-3 bg-white xl:px-20 pt-2 xl:pt-5 pb-10" id="food-section">
                <h1 className=" text-orangefood headings text-center ">Get Your Food Here</h1>
                <div className="flex justify-between w-screen z-20">
                    <button className="hidden md:block backdrop-blur  absolute mt-48 z-20 ml-8 text-white  px-4 py-3 text-3xl bg-black rounded left-0 cursor-pointer hover:bg-grayfood" onClick={leftScroll}>&laquo;</button>
                    <button className="hidden md:block backdrop-blur  absolute mt-48 z-20 ml-8 text-white  px-4 py-3 text-3xl bg-black rounded right-0 cursor-pointer hover:bg-grayfood" onClick={rightScroll}>&raquo;</button>
                </div>
                <div className="relative w-full flex gap-6 snap-x snap-mandatory overflow-x-auto pb-4 " ref={scrollRef}>

                    {

                        // food.map((foodItem) => {
                        //     return <FoodCard foodItem={foodItem} key={foodItem._id} />;


                        // })



                    }

                </div>
            </section>
        </>
    )
}

export default Food
