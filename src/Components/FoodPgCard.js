import React from 'react'
import { FaStar } from "react-icons/fa";
import tw from 'tailwind-styled-components'
import { Link } from 'react-router-dom'
import { BsFillCartPlusFill } from "react-icons/bs";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDispatch } from 'react-redux'
import { addCart } from '../features/basket/basketSlice'



function FoodPgCard(props) {
    const { foodItem } = props || {};
    const dispatch = useDispatch()
    return (
        <Container>
            <Link to="/food">
                <Img src={foodItem?.image} alt="" placeholder={<LoadFoodImg />}
                    threshold={100} />
                <Button onClick={() => dispatch(addCart({ quantity: 1, item: foodItem }))} > <Icon /></Button>
                <Wrapper >

                    <Head >{foodItem?.name}</Head>
                    <Card >

                        <Text >&#8377; {foodItem?.price} Only</Text>
                        <ReviewBox >

                            <FaStar style={{ color: 'white' }} />
                            <Review >{foodItem?.ratings}</Review>
                        </ReviewBox>

                    </Card>
                </Wrapper>
            </Link>
        </Container>
    )
}

export default FoodPgCard
const Container = tw.div` relative shadow-sm rounded-lg bg-white  hover:shadow-lg h-full  transition-all duration-100 ease-linear `
const Img = tw(LazyLoadImage)`rounded-t-lg object-cover h-48 w-full transition-all duration-100 ease-linear`
const Wrapper = tw.div`xl:px-4 xl:py-4 px-1 py-2 h-28  flex flex-col justify-between overflow-y-hidden   `
const Head = tw.h5`!text-base`
const Card = tw.div`flex justify-between items-center `
const Text = tw.p`text-black/80 `
const ReviewBox = tw.div`flex justify-end items-center rounded-md bg-grayfood px-2 py-1`
const Review = tw.div`rounded-sm bg-grayfood text-white ml-1`
const Button = tw.button`  font-bold  rounded-full absolute top-1 right-1 flex items-center  `
const LoadFoodImg = tw.img`rounded-t-md object-cover w-[250px] h-[187px] bg-gray-400 `;
const Icon = tw(BsFillCartPlusFill)`bg-orangefood rounded-full -ml-12 py-1 px-3 text-white !text-xl h-12 w-12 hover:bg-redfood`