import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import tw from "tailwind-styled-components";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

function Favorite(props) {
    let { foodItem } = props;

    return (
        <>
            <Container>
                <Wrapper>
                    <Link to={`/search/foodDetail/${foodItem?._id}`}>
                        {
                            <FoodImg
                                src={foodItem?.image}
                                alt=""
                                placeholder={<LoadFoodImg />}
                                threshold={100}
                            />
                        }


                        {/* <ReviewBox >

                            <FaStar style={{ color: 'white' }} />
                            <Review >{foodItem?.ratings}</Review>
                        </ReviewBox> */}
                        <Text>
                            <Head>

                                {
                                    foodItem?.name.length < 30 ?

                                        <TextHead className="mb-2">{foodItem?.name.slice(0, 30)}</TextHead>
                                        :
                                        <TextHead className="mb-2">{foodItem?.name.slice(0, 27)}..</TextHead>
                                }
                                <FoodTypeIcon>
                                    <img className="w-[15px] mr-2 h-[15px]" src={
                                        foodItem?.type === "Veg"
                                            ? "/images/veg_icon.png"
                                            : foodItem?.type === "Non-Veg"
                                                ? "/images/nonveg_icon.png"
                                                : foodItem?.type === "Vegan"
                                                    ? "/images/vegan_icon.png"
                                                    : ""
                                    }
                                        alt=""
                                    />
                                    {
                                        foodItem?.type === "Veg"
                                            ? "veg"
                                            : foodItem?.type === "Non-Veg"
                                                ? "nonveg"
                                                : foodItem?.type === "Vegan"
                                                    ? "vegan"
                                                    : ""
                                    }
                                </FoodTypeIcon>
                            </Head>
                            <p className="text-xs text-slate-600" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, quasi!</p>
                            <hr className="my-2" />
                            <Details>

                                <p className="  h-[15%]  leading-8 text-black-800 text-sm  ">
                                    &#8377; {foodItem?.price}
                                </p>
                                <Btn>Add to Cart</Btn>

                            </Details>



                        </Text>
                    </Link>
                    <Fav>
                        {/* <AiOutlineHeart /> */}
                        <AiFillHeart />

                    </Fav>


                </Wrapper>
            </Container>
        </>
    );
}

export default Favorite;

const Container = tw.div`scroll-end scroll-mx-5 shrink-0 mx-3 my-2   `;
const Wrapper = tw.div`card-container my-3 transition-all   rounded-md w-[250px]   hover:shadow-2xl duration-300  transition-all bg-white shadow-xl relative `;
const FoodImg = tw(
    LazyLoadImage
)`rounded-t-md object-cover w-[100%]  mx-auto aspect-[2/1] bg-white `;
const LoadFoodImg = tw.img`rounded-t-md object-cover w-[250px] h-[187px] bg-gray-400 `;
const FoodTypeIcon = tw.div`w-[80px] justify-center absolute flex bg-white p-2 -top-7  left-0 text-xs items-center`;
const Head = tw.div`flex items-center`
const Text = tw.div`p-[8px] relative`;
const Details = tw.div`flex justify-between items-center w-full`
const TextHead = tw.h1`text-sm  font-bold text-black`;
const ReviewBox = tw.div`flex justify-between items-center rounded-md bg-grayfood px-2 absolute top-3 left-3`
const Review = tw.div`rounded-sm bg-grayfood text-white ml-1`
const Btn = tw.button`text-sm text-redfood`
const Fav = tw.div`absolute top-3 right-3 bg-white rounded-full shadow-xl p-2 text-redfood text-lg`

