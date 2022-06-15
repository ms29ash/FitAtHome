import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import tw from "tailwind-styled-components";
import { Link } from "react-router-dom"




function Hero() {

    return (
        <>

            <Wrapper>
                <Container>
                    <Head>Eat less from box <br /> & more from the Earth</Head>
                    <Buttons>

                        <Button to="/food" >Order Now</Button>
                        <Button to="/trial" >Free Trial</Button>
                    </Buttons>
                    {/* <Img src="./images/intro.jpg" alt="" /> */}

                </Container>


            </Wrapper>


            {/* </Carousel> */}
        </>
    )
}

export default Hero
const Wrapper = tw.div`
w-screen  overflow-hidden mt-[10vh]`
const Container = tw.div` w-screen h-screen intro flex flex-col justify-center items-start px-[10vw]`
const Buttons = tw.div` flex items-center my-5`
const Button = tw(Link)` bg-redfood hover:bg-orangefood cursor-pointer text-white mr-4 px-5 py-4 rounded-full`
const Head = tw.h1`text-6xl leading-[4rem] capitalize`
