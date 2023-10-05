import React from 'react'
import Food from '../Components/Home/Food'
import Hero from '../Components/Home/Hero'
import Category from '../Components/Home/Category'
import Trial from '../Components/Home/Trial'
import Subscribe from '../Components/Home/Subscribe'
import Testimonials from '../Components/Home/Testimonials'
import Services from '../Components/Home/Services'


function Home(props) {


    return (
        <>
            <Hero />
            <Category />
            <Food />
            <Services />
            <Trial />
            <Subscribe />
            <Testimonials />
        </>
    )
}

export default Home
