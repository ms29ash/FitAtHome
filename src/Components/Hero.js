import React from 'react'
import tw from "tailwind-styled-components";
import { Link } from "react-router-dom"




function Hero() {

    return (
        <>

            <Wrapper>
                <Container>
                    <Head>Healthy food Home Delivery</Head>
                    <SubText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim aspernatur veniam iure totam, libero modi voluptatem omnis</SubText>
                    <Buttons>

                        <Button to="/food" >Place an Order</Button>
                        <TrialButton to="/trial" >Get a Free Trial</TrialButton>
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
const Button = tw(Link)` bg-redfood hover:bg-orangefood cursor-pointer text-white mr-4 px-5 py-3 rounded-full font-bold shadow-md hover:shadow-xl`
const TrialButton = tw(Link)` cursor-pointer text-black mr-4 px-5 py-3 rounded-full   bg-white  font-bold shadow-md hover:shadow-2xl`
const Head = tw.h1`md:text-4xl  text-[2.65rem] leading-[3.75rem] capitalize w-full md:w-[80%] lg:w-[50%] lg:leading-[4.25rem]`
const SubText = tw.p`lg:w-[50%] md:w-[80%] w-full text-slate-600  `
