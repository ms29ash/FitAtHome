import React, { useEffect, useContext } from 'react'
import FoodContext from '../Context/Food/foodContext'
import ProgressContext from '../Context/Progress/ProgressContext'
import FoodPgCard from './FoodPgCard';

function FoodPage(props) {
    const context = useContext(ProgressContext);
    const FContext = useContext(FoodContext);
    const { setLoadBar } = context;
    const { food, fetchFood } = FContext;
    useEffect(() => {
        fetchFood();
        setLoadBar(100);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className="mt-[10vh] mx-5">
            <h1 className="text-center">Food</h1>

            <div className=" grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-12 mx-[10vw]  justify-center items-center auto-rows-max" >
                {food.map((foodItem) => {
                    return <FoodPgCard foodItem={foodItem} key={foodItem._id} />
                })}
            </div>


        </div>
    )
}

export default FoodPage
