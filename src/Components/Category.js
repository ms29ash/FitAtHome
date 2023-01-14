import React from 'react'
import CategoryCard from './CategoryCard';
import tw from "tailwind-styled-components";

import {
  useQuery,
} from 'react-query'
import axios from '../axios'

function TypeMeals() {


  const fetchMeals = async () => {
    return axios.get('/category')
  }
  const { isLoading, data, isError } = useQuery('categories', fetchMeals)


  return (
    <>
      <Category id="services">
        <Heading>Categories</Heading>
        <Wrapper>

          {

            isError || isLoading ?
              Array(4).fill().map((item, index) => { return <CategoryCard key={index} /> })
              : data?.data.categories?.map((category) => {
                return <CategoryCard title={category.title} description={category.description} image={category.image} key={category._id} />
              })
          }
        </Wrapper>
      </Category>

    </>
  )
}

export default TypeMeals

const Category = tw.section`bg-white  w-screen items-center flex flex-col  justify-center px-6 md:pb-20 pt-16`
const Heading = tw.h1`text-redfood text-lg headings md:col-span-4`
const Wrapper = tw.div`flex w-fit flex-wrap justify-between`
