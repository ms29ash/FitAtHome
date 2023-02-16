import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
import tw from 'tailwind-styled-components'
import { Link, useNavigate } from 'react-router-dom'
import { BsFillCartPlusFill } from "react-icons/bs";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDispatch } from 'react-redux'
import { addCart } from '../../features/basket/basketSlice'
import { useSelector } from "react-redux";



function FoodCard(props) {
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

    const addToCart = () => {
        if (isLoggedIn === true) {

            setAlert('Added to Cart')
            dispatch(addCart({ quantity: 1, item: foodItem }));
            setTimeout(() => {
                setAlert(null);
            }, 2000);
        } else {
            navigate('/signin')
        }
    }
    return (
        <Container>
            <Button onClick={addToCart} > <BsFillCartPlusFill /></Button>
            <Link to={`/search/foodDetail/${foodItem?._id}`}>
                <Img src={foodItem?.image} alt="" placeholder={<LoadFoodImg />}
                    threshold={100} />
                <FoodTypeIcon
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
                <Alert alert={alert} >{alert}</Alert>
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

export default FoodCard
const Container = tw.div` relative shadow-sm rounded-lg bg-white  hover:bg-redfood/20 lg:w-[19%] md:w-[24%] sm:w-[32%] w-[49%] mx-[0.5%] xl:mb-6 mb-3 h-min transition-all duration-100 ease-linear py-2  overflow-y-hidden  `
const Img = tw(LazyLoadImage)`rounded-t-lg object-cover aspect-[1/1] w-[95%] mx-auto transition-all duration-100 ease-linear select-none	`
const Wrapper = tw.div`xl:px-4 xl:py-4 px-1 py-2  flex flex-col  justify-between relative pointer-events-none hover:pointer-events-auto `
const Head = tw.h5`!text-base  text-redfood h-14`
const Card = tw.div`flex justify-between items-center `
const Text = tw.p`text-black text-bold text-lg`
const ReviewBox = tw.div`flex justify-end items-center rounded-md bg-grayfood px-2 py-1`
const Review = tw.div`rounded-sm bg-grayfood text-white ml-1`
const Button = tw.div` transition-colors hover:bg-orangefood  font-bold   rounded-full absolute top-[50%] right-3 flex items-center bg-redfood p-3 shadow-xl text-white !text-lg  `
const LoadFoodImg = tw.img`rounded-t-md object-cover w-full h-[187px] bg-gray-400 `;
const FoodTypeIcon = tw.img`absolute top-4 ml-3 w-[30px] h-[30px] select-none`;

//Alert
const Alert = tw.div`absolute right-0 left-0 -top-12  grid place-items-center   text-white bg-redfood  transition-all
${p => p.alert && 'h-[15%]  top-1'}`