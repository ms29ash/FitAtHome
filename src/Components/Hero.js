import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import tw from "tailwind-styled-components";




function Hero() {

    return (
        <>

            <Wrapper>
                <Container>
                    <Img src="/images/hero.jpg" alt="" />

                </Container>


            </Wrapper>


            {/* </Carousel> */}
        </>
    )
}

export default Hero
const Wrapper = tw.div`
w-screen  overflow-hidden mt-[10vh]`
const Container = tw.div` `
const Img = tw.img`relative  w-screen max-h-[70vh] object-cover`
