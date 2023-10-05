import React, { useRef } from "react";
import tw from "tailwind-styled-components";
import "../../Styles/Testimonials.css";
import TestimonialCard from "./TestimonialCard";

function Testimonials() {
  const scrollRef = useRef()
  const review = {
    name: "Rohit Sharma",
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis officia ex consequuntur. Veritatis omnis nesciunt, corporis dignissimos sed non sequi voluptatem Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nobis quibusdam, maiores ut adipisci reprehenderit voluptatum soluta deserunt reiciendis, dolores inventore a?',
    date: '26 Jul 2020',
  }

  const change = (n) => {

    if (n === 1) {

      scrollRef.current.scrollLeft += window.innerWidth
    } else {
      scrollRef.current.scrollLeft -= window.innerWidth

    }

  }

  return (
    <Container className="testimonials-section" >
      <Head>Reviews</Head>
      <Wrapper>
        <Slider ref={scrollRef} >


          <TestimonialCard change={change} review={review} />
          <TestimonialCard change={change} review={review} />
          <TestimonialCard change={change} review={review} />
          <TestimonialCard change={change} review={review} />
          <TestimonialCard change={change} review={review} />
        </Slider>
      </Wrapper>
    </Container>
  )
}

export default Testimonials

const Wrapper = tw.div`w-screen `
const Slider = tw.div`slider   relative w-[98vw] mx-[1vw] flex items-stretch gap-6 snap-x snap-mandatory overflow-x-auto pb-4`
const Container = tw.div`relative flex flex-col items-center `;
const Head = tw.h1``;
