import React from 'react'
import tw from "tailwind-styled-components";
import { Link } from "react-router-dom"




function Hero() {

    return (
        <>

            <Wrapper>
                <Container>
                    <UpperText>Savor Health, Savor Life</UpperText>
                    <Head>Where<br />Taste meets<br />wellness</Head>
                    <SubText>Unlock Your Journey to a Fitter, Healthier<br />
                        You with Sweet and Savory Nutritious Delights!</SubText>
                    <Buttons>

                        <Button to="/food" >Learn More</Button>
                        <TrialButton to="/trial" >Check the Menu</TrialButton>
                    </Buttons>

                </Container>


            </Wrapper>


        </>
    )
}

export default Hero


const Wrapper = tw.div`
w-screen  overflow-hidden `
const Container = tw.div` w-screen   intro aspect-[2/1] flex flex-col justify-center items-start px-[10vw]`
const Buttons = tw.div` flex items-center my-5`
const Button = tw(Link)` bg-ssorange hover:brightness-60 cursor-pointer text-white mr-4 px-10 py-4 rounded-xl font-bold hover:shadow-md `
const TrialButton = tw(Button)` cursor-pointer mr-4    bg-ssgreen `
const Head = tw.h1`text-[4.5rem] text-black  leading-[5rem] capitalize w-full md:w-[80%] lg:w-[50%] `
const SubText = tw.p`lg:w-[50%] md:w-[80%] mt-3 w-full text-lg  text-black/80  `
const UpperText = tw.p`lg:w-[50%] md:w-[80%] w-full  text-ssorange  `
