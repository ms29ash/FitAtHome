import React from 'react'
import CategoryCard from './CategoryCard';
import tw from "tailwind-styled-components";

import {
  useQuery,
} from 'react-query'
import axios from '../axios'


function TypeMeals() {


  const fetchMeals = async () => {
    return axios.get('/meals')
  }
  const { isLoading, data: categories, isError } = useQuery('categories', fetchMeals)



  return (
    <>
      <Category id="services">
        <Heading>Categories</Heading>
        {

          isError || isLoading ? Array(3).fill().map((item, index) => { return <CategoryCard key={index} /> }) :
            categories?.data?.meals.map((category) => {
              return <CategoryCard title={category.title} description={category.description} image={category.image} key={category._id} />
            })
        }
      </Category>

    </>
  )
}

export default TypeMeals

const Category = tw.section`bg-white grid grid-cols-1 w-screen md:grid-cols-3 gap-x-2 md:gap-x-6 justify-items-center sm:px-12 px-8 lg:px-20 pt-2 xl:pt-5 lg:pb-10 pb-6`
const Heading = tw.h1`text-redfood headings md:col-span-3`
