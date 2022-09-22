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
            <Button onClick={() => dispatch(addCart({ quantity: 1, item: foodItem }))} > <BsFillCartPlusFill /></Button>
            <Link to={`/food/foodDetail/${foodItem?._id}`}>
                <Img src={foodItem?.image} alt="" placeholder={<LoadFoodImg />}
                    threshold={100} />
                <FoodTypeIcon
                    src={
                        foodItem?.type === "Veg"
                            ? "/images/veg_icon.png"
                            : foodItem?.type === "Non-Veg"
                                ? "images/nonveg_icon.png"
                                : foodItem?.type === "Vegan"
                                    ? "images/vegan_icon.png"
                                    : ""
                    }
                    alt=""
                />
                <Wrapper >

                    <Head >{foodItem?.name}</Head>
                    <Card >

                        <Text >&#8377; {foodItem?.price}</Text>
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
const Container = tw.div` relative shadow-sm rounded-lg bg-white  hover:bg-redfood/20 lg:w-[19%] md:w-[24%] sm:w-[32%] w-[49%] mx-[0.5%] mb-6 aspect-[3/4] transition-all duration-100 ease-linear py-2 h-max  `
const Img = tw(LazyLoadImage)`rounded-t-lg object-cover aspect-[1/1] w-[95%] mx-auto transition-all duration-100 ease-linear`
const Wrapper = tw.div`xl:px-4 xl:py-4 px-1 py-2  flex flex-col  justify-between relative pointer-events-none hover:pointer-events-auto `
const Head = tw.h5`!text-base  text-redfood h-14`
const Card = tw.div`flex justify-between items-center `
const Text = tw.p`text-black text-bold text-lg`
const ReviewBox = tw.div`flex justify-end items-center rounded-md bg-grayfood px-2 py-1`
const Review = tw.div`rounded-sm bg-grayfood text-white ml-1`
const Button = tw.div` transition-colors hover:bg-orangefood  font-bold   rounded-full absolute top-[50%] right-3 flex items-center bg-redfood p-3 shadow-xl text-white !text-lg  `
const LoadFoodImg = tw.img`rounded-t-md object-cover w-full h-[187px] bg-gray-400 `;
const FoodTypeIcon = tw.img`absolute top-4 ml-3 w-[30px] h-[30px]`;