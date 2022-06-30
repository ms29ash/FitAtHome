import React, { Component } from "react";
import tw from "tailwind-styled-components";
import "../Styles/Testimonials.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import TestimonialCard from "./TestimonialCard";

export default class Testimonials extends Component {
  render() {
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
      lazyLoad: true,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            lazyLoad: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            infinite: true,
            autoplay: true,
            speed: 3000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            arrows: true,
          },
        },
      ],
    };

    return (
      <Container className="testimonials-section  	">
        <Wrapper>
          <Head>Reviews</Head>
          <Slider {...settings}>
            <Contain>
              <TestimonialCard />
            </Contain>
            <Contain>
              <TestimonialCard />
            </Contain>
            <Contain>
              <TestimonialCard />
            </Contain>
            <Contain>
              <TestimonialCard />
            </Contain>
            <Contain>
              <TestimonialCard />
            </Contain>
            <Contain>
              <TestimonialCard />
            </Contain>
            <Contain>
              <TestimonialCard />
            </Contain>
            <Contain>
              <TestimonialCard />
            </Contain>
            <Contain>
              <TestimonialCard />
            </Contain>
            <Contain>
              <TestimonialCard />
            </Contain>
          </Slider>
        </Wrapper>
      </Container>
    );
  }
}

const Contain = tw.div``;
const Container = tw.div`w-screen bg-cover bg-center  h-[90vh] place-items-center    grid `;
const Wrapper = tw.div`w-screen h`;
const Head = tw.h1`text-4xl text-center text-white my-5  `;
