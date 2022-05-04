import React, { useEffect, useContext } from 'react'
import Food from './Food'
import Hero from './Hero'
import Meals from './Meals'
import Trial from './Trial'
import Subscribe from './Subscribe'
import Testimonials from './Testimonials'
import Footer from './Footer'

function Home(props) {



    useEffect(() => {

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <>
            <Hero />
            <Meals />
            <Food setProgress={props.setProgress} />

            <Trial />
            <Subscribe />
            <Testimonials />
            <Footer />

        </>
    )
}

export default Home
