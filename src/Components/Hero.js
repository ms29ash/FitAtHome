import React from 'react'
import tw from "tailwind-styled-components";
import { Link } from "react-router-dom"




function Hero() {

    return (
        <>

            <Wrapper>
                <Container>
                    <Head>Eat less from box & more from the Earth</Head>
                    <Buttons>

                        <Button to="/food" >Order Now</Button>
                        <TrialButton to="/trial" >Free Trial</TrialButton>
                    </Buttons>

                </Container>


            </Wrapper>


        </>
    )
}

export default Hero


const Wrapper = tw.div`
w-screen  overflow-hidden `
const Container = tw.div` w-screen h-screen max-h-[600px] intro flex flex-col justify-center items-start px-[10vw]`
const Buttons = tw.div` flex items-center my-5`
const Button = tw(Link)` bg-redfood hover:bg-orangefood cursor-pointer text-white mr-4 px-5 py-3 rounded-full font-bold`
const TrialButton = tw(Link)` cursor-pointer text-redfood mr-4 px-5 py-3 rounded-full  border-2 border-redfood  hover:border-orangefood hover:text-white hover:bg-redfood font-bold `
const Head = tw.h1`md:text-6xl  text-[2.65rem] leading-[3.75rem] capitalize w-full md:w-[80%] lg:w-[60%] lg:leading-[4.25rem]`
