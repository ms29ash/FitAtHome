import React from 'react'
import tw from "tailwind-styled-components";
import { Link } from "react-router-dom"




function Hero() {

    return (
        <>

            <Wrapper>
                <Container>
                    <div className="h-[20%] md:hidden invisible" > </div>
                    <Text>

                        <UpperText>Savor Health, Savor Life</UpperText>
                        <Head>Where<br />Taste meets<br />wellness</Head>
                        <SubText>Unlock Your Journey to a Fitter, Healthier
                            You with Sweet and Savory Nutritious Delights!</SubText>
                    </Text>
                    <Buttons>

                        <Button to="/food" ><p className=" relative z-10" >Check the Menu</p> </Button>
                        {/* <TrialButton to="/trial" >Check the Menu</TrialButton> */}
                    </Buttons>

                </Container>


            </Wrapper>


        </>
    )
}

export default Hero


const Wrapper = tw.div`
w-screen  overflow-hidden h-screen `
const Container = tw.div` w-screen   intro aspect-[2/1] flex flex-col md:justify-center justify-around items-start px-[10vw] h-full `

const Text = tw.div` w-full text-lg 3xl:text-[2xl] `
const Head = tw.h1`text-[2.5rem] md:text-[3.5rem] xl:text-[4rem] 3xl:text-[8rem] leading-[3rem] md:leading-[4rem] xl:leading-[5rem] 3xl:leading-[9rem] capitalize w-full md:w-[80%] lg:w-[50%] `
const SubText = tw.p`lg:w-[50%] md:w-[80%] mt-3 w-full   text-black/80  `
const UpperText = tw.p`lg:w-[50%] md:w-[80%] w-full  text-ssorange  `


const Buttons = tw.div` flex flex-col md:flex-row space-y-2 md:space-y-0 items-center my-5 w-full   `
const Button = tw(Link)` bg-ssorange cursor-pointer text-white mr-4 py-4  w-[100%] md:!w-[200px] before:bg-ssgreen hover-btn `
const TrialButton = tw(Button)` cursor-pointer mr-4    bg-ssgreen `