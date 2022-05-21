import React from 'react'
import tw from "tailwind-styled-components";
import FoodPgCard from './FoodPgCard'
import {
    useQuery, useQueryClient
} from 'react-query'
import axios from '../axios'
import { ReactQueryDevtools } from 'react-query/devtools'

function FoodPageMain() {
    const queryClient = useQueryClient()

    const fetchFood = async () => {
        return axios.get('/food/food')
    }

    const { data: food, isLoading, isError, error } = useQuery('food-page', fetchFood, {
        initialData: () => {
            // Use a todo from the 'todos' query as the initial data for this todo query
            return queryClient.getQueryData('food')
        },

    })
    const data = queryClient.getQueryData('food')
    console.log(data);

    return (
        <Container>
            {
                food?.data?.food.map((item, index) => {
                    return <FoodPgCard foodItem={item} key={item._id} />
                })
            }
            <ReactQueryDevtools initialIsOpen={false} />

        </Container>
    )
}

export default FoodPageMain

const Container = tw.div` p-4  w-[100%] xl:w-[80%] grid grid-cols-3 gap-x-5 gap-y-5`