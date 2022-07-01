import React, { useState } from "react";
import tw from "tailwind-styled-components";
import { useQuery, useQueryClient } from "react-query";

import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import axios from "../axios";

function FoodDetail() {
    let { id } = useParams();

    const fetchFood = async (id) => {
        return axios.get(`/food/food/${id}`);
    };

    const { data: food, isLoading, isError, error } = useQuery(
        ["food-page", id],
        () => fetchFood(id)
    );

    const { image, name, description, type, price, ratings } =
        food?.data?.food[0] || {};
    return (

        <Wrapper>
            {<>

                <Img
                    src={image}
                    alt=""
                    placeholder={<LoadFoodImg />}
                    threshold={100}
                />
                <Details>
                    <Head>{name}</Head>
                    <SmallDesc>


                        <ReviewBox >

                            <FaStar style={{ color: 'white' }} />
                            <Review >{ratings}</Review>
                        </ReviewBox>
                        <FoodType>

                            {<FoodTypeIcon
                                src={
                                    type === "Veg"
                                        ? "/images/veg_icon.png"
                                        : type === "Non-Veg"
                                            ? "/images/nonveg_icon.png"
                                            : type === "Vegan"
                                                ? "/images/vegan_icon.png"
                                                : ""
                                }
                                alt=""
                            />}
                            <Type>
                                {type}</Type>

                        </FoodType>
                    </SmallDesc>
                    <Price>&#8377; {price} Only</Price>
                    <Text>{description}</Text>
                    <Buttons>
                        <AddButton >Add to Cart</AddButton>
                        <BuyButton >Buy Now</BuyButton>
                    </Buttons>
                </Details>

            </>
            }
        </Wrapper>


    );
}

export default FoodDetail;

const Wrapper = tw.div`flex flex-col xl:flex-row  items-center w-full mb-[10vh]`;
const Img = tw(LazyLoadImage)`min-w-full  mx-5 xl:min-w-[50%] h-[40vh] sm:h-[60vh] object-cover rounded-md`;
const LoadFoodImg = tw.img`rounded-md  mx-5 w-[50%] h-full bg-gray-400 `;
const Details = tw.div`text-lg`;
const Head = tw.h1`text-3xl mt-5 mb-2 xl:my-2`;
const Text = tw.p``;
const SmallDesc = tw.div`flex items-center justify-start`
const Price = tw.p`text-2xl my-3 `;
const FoodType = tw.div`flex items-center my-2 mx-5`
const Type = tw.p``;
const FoodTypeIcon = tw.img` mr-2 w-[30px] h-[30px]`;
const ReviewBox = tw.div`flex w-16 justify-end items-center rounded-md bg-redfood px-2 py-1 my-5`
const Review = tw.div`rounded-sm bg-inherit text-white ml-1`

const Buttons = tw.div``
const BuyButton = tw.button`mr-2 mt-5 bg-redfood text-white py-3 px-5 rounded-full text-sm hover:bg-orangefood`
const AddButton = tw(BuyButton)`bg-greenfood hover:bg-grayfood`