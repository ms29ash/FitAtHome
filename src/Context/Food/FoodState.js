import { useState } from 'react'
import FoodContext from './foodContext'


const FoodState = (props) => {
    let [food, setFood] = useState([]);



    const fetchFood = async () => {
        const response = await fetch("http://localhost:4000/food", {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        let data = await response.json();
        setFood(data.food)
    }


    return (
        <FoodContext.Provider value={{ food, fetchFood }}>
            {props.children}
        </FoodContext.Provider>
    )
}

export default FoodState;
