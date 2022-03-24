import React, { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../Styles/Testimonials.css";

function Testimonials() {
  let [reviews, setReviews] = useState([]);


  async function fetchReviews() {
    const response = await fetch("http://localhost:4000/reviews", {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    let data = await response.json();
    setReviews(data.reviews);
  }
  useEffect(
    () => {
      fetchReviews()
    }, [])



  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="testimonials-section">
      <div className="testimonials-container shadow-xl rounded-3xl bg-orangefood/80 py-16">
        <h1 className="text-center text-white headings p-0"> Your Reviews</h1>
        <div className="testimonials">
          <Slider {...settings}>
            {reviews.map((review) => {
              return <TestimonialCard review={review} key={review._id} />
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
