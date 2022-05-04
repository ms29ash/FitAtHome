import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import tw from "tailwind-styled-components";




function Hero() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
    }
    return (
        <>
            <Carousel>
                <Slides {...settings}>
                    <div>
                        <img src="/images/image.jpg" alt="" />

                    </div>
                    <div>
                        <img src="/images/image1.jpg" alt="" />
                    </div>
                    <div>
                        <img src="/images/image3.jpg" alt="" />
                    </div>

                </Slides>


            </Carousel>
        </>
    )
}

export default Hero
const Slides = tw(Slider)`
w-screen h-[50vh] overflow-hidden`
const Carousel = tw.div``
