import React from 'react'

function TestimonialCard(props) {
    const { name, review } = props.review;
    return (
        <div className="testimonial-box text-white !bg-orangefood/5 text-center">
            <img src={process.env.PUBLIC_URL + `images/testimonials.png}`} alt="" className="m-auto w-[20%] " />
            <p className="md:text-xl text-base px-2 md:px-16">
                {review}
            </p>
            <h1 className="md:text-3xl text-xl">{name}</h1>

        </div>
    )
}


export default TestimonialCard
