import React, { useEffect, useContext } from 'react'
import Food from './Food'
import Hero from './Hero'
import Meals from './Meals'
import Trial from './Trial'
import Subscribe from './Subscribe'
import Testimonials from './Testimonials'
import Footer from './Footer'
import { ReactQueryDevtools } from 'react-query/devtools'


function Home(props) {


    return (
        <>
            <Hero />
            <Meals />
            <Food />

            <Trial />
            <Subscribe />
            <Testimonials />
            <Footer />
            {/* <ReactQueryDevtools initialIsOpen={false} /> */}


        </>
    )
}

export default Home
