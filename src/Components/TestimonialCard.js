import React from 'react'
import tw from "tailwind-styled-components";
import { GoQuote } from "react-icons/go";


function TestimonialCard(props) {
    // const { name, review } = props?.review;
    return (
        <Card>
            <Quote />
            <Head>Mohit</Head>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis officia ex consequuntur. Veritatis omnis nesciunt, corporis dignissimos sed non sequi voluptatem placeat! Hic.</p>
            <Date>26 Jul 2020</Date>

        </Card>
    )
}

export default TestimonialCard

const Card = tw.div`bg-white h-full mx-8 px-4 py-16 text-center rounded-xl`
const Head = tw.h1`my-3`

const Date = tw.p`mt-5`
const Quote = tw(GoQuote)`text-orangefood text-3xl ml-5`





