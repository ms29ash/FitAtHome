import React, { useEffect, useContext } from 'react'
import Food from './Food'
import Hero from './Hero'
import Meals from './Meals'
import Trial from './Trial'
import Subscribe from './Subscribe'
import Testimonials from './Testimonials'
import Footer from './Footer'
import ProgressContext from '../Context/Progress/ProgressContext';

function Home(props) {
    const context = useContext(ProgressContext);
    const { setLoadBar } = context;


    useEffect(() => {
        setLoadBar(100);
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
