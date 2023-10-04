import React from 'react'
import CategoryCard from './CategoryCard';
import tw from "tailwind-styled-components";

import {
  useQuery,
} from 'react-query'
import axios from '../../axios'
import CategoryLoading from './CategoryLoading';

function TypeMeals() {


  const fetchMeals = async () => {
    return axios.get('/category')
  }
  const { isSuccess, error, data, isError } = useQuery('categories', fetchMeals)

  return (
    <>
      <Category id="services">
        <Heading>Categories</Heading>
        <Wrapper>

          {

            isSuccess ?
              data?.data.categories?.map((category) => {
                return <CategoryCard title={category.title} description={category.description} image={category.image} key={category._id} icon={category.icon} />
              })
              :
              Array(4).fill().map((item, index) => { return <CategoryLoading key={index} /> })
          }
        </Wrapper>
      </Category>

    </>
  )
}

export default TypeMeals

const Category = tw.section`bg-white  w-screen  items-center flex flex-col  justify-center px-6 md:pb-20 pt-16`
const Heading = tw.h1`text-black text-lg headings md:col-span-4`
const Wrapper = tw.div`  max-w-[1400px] grid grid-cols-4 w-fit flex-wrap justify-between gap-x-5 `
