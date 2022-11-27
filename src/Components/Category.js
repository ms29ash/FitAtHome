import React from 'react'
import CategoryCard from './CategoryCard';
import tw from "tailwind-styled-components";

import {
  useQuery,
} from 'react-query'
import axios from '../axios'

let data = [
  {
    title: "Veg",
    image:
      "https://img.icons8.com/external-wanicon-flat-wanicon/344/external-vegetables-healthy-wanicon-flat-wanicon.png",
  },
  {
    title: "Non-Veg",
    image:
      "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/344/external-chicken-foodies-flaticons-lineal-color-flat-icons.png",
  },
  {
    title: "Vegan",
    image: "https://img.icons8.com/emoji/344/green-salad-emoji.png",
  },
  {
    title: "Drinks",
    image: "https://img.icons8.com/color-glass/344/coconut-milk.png",
  },
]

function TypeMeals() {


  const fetchMeals = async () => {
    return axios.get('/meals')
  }
  const { isLoading, data: categories, isError } = useQuery('categories', fetchMeals)



  return (
    <>
      <Category id="services">
        <Heading>Categories</Heading>
        <Wrapper>

          {

            isError || isLoading ? Array(3).fill().map((item, index) => { return <CategoryCard key={index} /> }) :
              // categories?.data?.meals.map((category) => {
              data.map((category) => {
                return <CategoryCard title={category.title} description={category.description} image={category.image} key={category._id} />
              })
          }
        </Wrapper>
      </Category>

    </>
  )
}

export default TypeMeals

const Category = tw.section`bg-white 1 w-screen items-center flex flex-col  justify-center px-6   py-24 pt-16`
const Heading = tw.h1`text-redfood text-lg headings md:col-span-4`
const Wrapper = tw.div`flex w-fit flex-wrap justify-between`
