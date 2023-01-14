import React from 'react'
import Food from './Food'
import Hero from './Hero'
import Category from './Category'
import Trial from './Trial'
import Subscribe from './Subscribe'
import Testimonials from './Testimonials'
import Service from './Service'


function Home(props) {


    return (
        <>
            <Hero />
            <Category />
            <Food />
            <Service />
            <Trial />
            <Subscribe />
            <Testimonials />
        </>
    )
}

export default Home
