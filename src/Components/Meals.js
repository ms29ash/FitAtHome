import React, { useEffect, useState } from 'react'
import MealCard from './MealCard';

function TypeMeals() {
  let [meals, setMeals] = useState([]);


  async function fetchMeals() {
    const response = await fetch("http://localhost:4000/meals", {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    let data = await response.json();
    setMeals(data.meals)
  }
  useEffect(
    () => {
      fetchMeals()
    }, [])



  return (
    <>
      <section className="bg-white grid grid-cols-1  md:grid-cols-3 gap-x-10 justify-items-center sm:px-12 px-8 lg:px-20 pt-2 xl:pt-5 pb-16" id="services">
        <h1 className="text-orangefood headings md:col-span-3">Meals</h1>
        {meals.map((meal) => {
          return <MealCard title={meal.title} description={meal.description} image={meal.image} key={meal._id} />
        })
        }
      </section>

    </>
  )
}

export default TypeMeals
