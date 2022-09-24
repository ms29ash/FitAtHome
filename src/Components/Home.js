import React from 'react'
import Food from './Food'
import Hero from './Hero'
import Meals from './Meals'
import Trial from './Trial'
import Subscribe from './Subscribe'
import Testimonials from './Testimonials'
import Footer from './Footer'
import Service from './Service'


function Home(props) {


    return (
        <>
            <Hero />
            <Meals />
            <Service />
            <Food />
            <Trial />
            <Subscribe />
            <Testimonials />
        </>
    )
}

export default Home
