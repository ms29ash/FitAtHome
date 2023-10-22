import React, { useRef } from "react";
import tw from "tailwind-styled-components";
import "../../Styles/Testimonials.css";
import TestimonialCard from "./TestimonialCard";
import axios from "../../axios";
import { useQuery } from "react-query";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Testimonials() {
  const fetchFood = async () => {
    return axios.get("/reviews");
  };

  const { data } = useQuery("reviews", fetchFood);

  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
  };

  return (
    <Container className="testimonials-section">
      <Head>Reviews</Head>
      <Wrapper>
        {data?.data?.reviews && (
          <Slider ref={sliderRef} {...settings}>
            {data?.data?.reviews.map((review) => {
              return (
                <TestimonialCard
                  key={review._id}
                  next={next}
                  previous={previous}
                  review={review}
                />
              );
            })}
          </Slider>
        )}
      </Wrapper>
    </Container>
  );
}

export default Testimonials;

const Wrapper = tw.div`w-screen `;
// const Slider = tw(Slder)`slider   relative w-[98vw] mx-[1vw] flex items-stretch gap-6 snap-x snap-mandatory overflow-x-auto pb-4`;
const Container = tw.div`relative flex flex-col items-center `;
const Head = tw.h1``;
