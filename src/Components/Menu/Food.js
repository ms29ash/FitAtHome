import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
import tw from 'tailwind-styled-components'
import { Link, useNavigate } from 'react-router-dom'
import { BsFillCartPlusFill } from "react-icons/bs";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDispatch } from 'react-redux'
import { addCart } from '../../features/basket/basketSlice'
import { useSelector } from "react-redux";



function Food(props) {
    const [alert, setAlert] = useState(null)
    const { foodItem } = props || {};
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    let host;
    if (window.location.hostname === 'localhost') {
        host = `http://${window.location.host}`;
    } else {
        host = `https://${window.location.host}`;
    }

    const addToCart = (e) => {
        e.stopPropagation()
        if (isLoggedIn === true) {

            setAlert('Added to Cart')
            dispatch(addCart({ quantity: 1, id: foodItem }));
            setTimeout(() => {
                setAlert(null);
            }, 2000);
        } else {
            navigate('/signin')
        }
    }

    const navigateTo = () => {
        navigate(`/findfood/foodDetail/${foodItem?._id}`)

    }
    return (
        <Container onClick={navigateTo} >
            <Img src={foodItem?.image} alt="" placeholder={<LoadFoodImg />}
                threshold={100} />

            <Alert alert={alert} >{alert}</Alert>
            <Wrapper >

                <Head >{foodItem?.name}</Head>
                <Card >
                    <FoodTypeIcon>
                        <FoodTypeImg
                            src={
                                foodItem?.type === "Veg"
                                    ? `${host}/images/veg_icon.png`
                                    : foodItem?.type === "Non-Veg"
                                        ? `${host}/images/nonveg_icon.png`
                                        : foodItem?.type === "Vegan"
                                            ? `${host}/images/vegan_icon.png`
                                            : ""
                            }
                            alt=""
                        />
                        <p className="text-xs ml-1">
                            {foodItem?.type === "Veg"
                                ? `veg`
                                : foodItem?.type === "Non-Veg"
                                    ? `nonveg`
                                    : foodItem?.type === "Vegan"
                                        ? `vegan`
                                        : ""}
                        </p>
                    </FoodTypeIcon>

                    <ReviewBox >

                        <FaStar style={{ color: 'black', fontSize: "15px" }} />
                        <Review >{foodItem?.ratings}</Review>
                    </ReviewBox>
                </Card>
                <hr className="mt-2 mb-1" />
                <Bottom>
                    <Price >&#8377; {foodItem?.price}</Price>
                    <Button onClick={(e) => addToCart(e)} > <BsFillCartPlusFill />
                        <p className="text-xs ml-2" >Add to Cart</p>
                    </Button>
                </Bottom>

            </Wrapper>
        </Container>
    )
}

export default Food
const Container = tw.div`  shadow-lg rounded bg-white  lg:w-[19%] md:w-[24%] sm:w-[32%] w-[49%] mx-[0.5%] xl:mb-6 mb-3   py-2 relative `
const Img = tw(LazyLoadImage)`rounded-t-lg object-cover aspect-[4/2] w-full 	`
const Wrapper = tw.div`xl:px-4 xl:py-2 px-1 py-2  flex flex-col  justify-between  `
const Head = tw.h5`!text-sm mb-1`
const Card = tw.div`flex items-center  `
const FoodTypeIcon = tw.div`flex items-center `;
const FoodTypeImg = tw.img` top-4  w-[18px] aspect-[1/1] select-none`;
const ReviewBox = tw.div`flex  items-center rounded-md px-2 py-1 ml-3`
const Review = tw.div`rounded-sm text-xs text-black ml-1`
const LoadFoodImg = tw.img`rounded-t-md object-cover w-full h-[187px] bg-gray-400 `;
const Bottom = tw.div`flex items-center justify-between mt-1 w-full`
const Price = tw.p`text-black text-bold text-md`
const Button = tw.button`select-none   font-bold   rounded-full  flex items-center bg-slate-100 p-3  text-black !text-lg  flex shadow-lg  transition hover:bg-slate-200 cursor-pointer`

//Alert
const Alert = tw.div`absolute right-0 left-0 -top-1  grid place-items-center   text-white bg-redfood  transition-all${p => p.alert && 'h-[15%]  top-1'}`