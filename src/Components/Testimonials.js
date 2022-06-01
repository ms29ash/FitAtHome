import React, { useEffect, useState } from 'react'
import tw from "tailwind-styled-components";
import '../Styles/Testimonials.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import TestimonialCard from './TestimonialCard'


function Testimonials() {

  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: true,
  }





  return (
    <Container className="testimonials-section  	">
      <Wrapper>
        <Head>Reviews</Head>
        <Slider {...settings}>

          <div>
            <TestimonialCard />
          </div>
          <div>
            <TestimonialCard />
          </div>
          <div>
            <TestimonialCard />
          </div>
          <div>
            <TestimonialCard />
          </div>
          <div>
            <TestimonialCard />
          </div>
          <div>
            <TestimonialCard />
          </div>
          <div>
            <TestimonialCard />
          </div>
          <div>
            <TestimonialCard />
          </div>
          <div>
            <TestimonialCard />
          </div>
          <div>
            <TestimonialCard />
          </div>

        </Slider>
      </Wrapper>


    </Container>
  )
}

export default Testimonials

const Container = tw.div`w-screen bg-cover bg-center lg:h-[70vh]  place-items-center invisible h-0 lg:visible grid `
const Wrapper = tw.div`w-screen h-[50vh]`
const Head = tw.h1`text-4xl text-center text-white my-5`