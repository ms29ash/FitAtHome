import React from 'react'
import MealCard from './MealCard';
import tw from "tailwind-styled-components";

import {
  useQuery,
} from 'react-query'
import axios from '../axios'


function TypeMeals() {


  const fetchMeals = async () => {
    return axios.get('/food/meals')
  }
  const { data: meals, isLoading, isError, error } = useQuery('meals', fetchMeals)



  return (
    <>
      <Meals Mealsid="services">
        <MealHeading>Meals</MealHeading>
        {meals?.data?.meals.map((meal) => {
          return <MealCard title={meal.title} description={meal.description} image={meal.image} key={meal._id} />
        })
        }
      </Meals>

    </>
  )
}

export default TypeMeals

const Meals = tw.section`bg-white grid grid-cols-1  md:grid-cols-3 gap-x-10 justify-items-center sm:px-12 px-8 lg:px-20 pt-2 xl:pt-5 pb-16`
const MealHeading = tw.h1`text-orangefood headings md:col-span-3`
