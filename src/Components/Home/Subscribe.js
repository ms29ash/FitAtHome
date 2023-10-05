import React from 'react'
import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";
import { AiFillRightCircle } from "react-icons/ai"

function Subscribe() {
    return (
        <>

            <Section id="subscribe">

                <Container className="card-container ">
                    <Wrapper >
                        <Img src='/images/subscribe.jpg' alt="....." />
                        <Details  >
                            <Heading> Subscribe For Taste Healthy Difference</Heading>
                            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis perferendis saepe laborum iste veniam facilis error vitae distinctio
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt vel atque repellendus odit iusto optio culpa dolorum odio, iure error, sit vero, sapiente saepe distinctio?
                            </Text>
                            <Button to="/subscribe" >
                                <p className='relative z-1' >
                                    Subscribe Now
                                </p >
                                <AiFillRightCircle className="relative z-1" /></Button>
                        </Details>
                    </Wrapper>
                </Container>
            </Section>
        </>
    )



}


export default Subscribe

const Section = tw.div`xl:px-[20vw]  flex  justify-center  align-center items-center -m-5 subscribe bg-transparent py-16`

const Container = tw.div`   bg-white justify-center px-12 md:px-16 flex flex-col  `

const Wrapper = tw.div`flex  items-center flex-col lg:flex-row xl:py-8 py-4 space-x-8 `

const Img = tw.img`w-[50%]  aspect-square object-cover`
const Details = tw.div`text flex flex-col bg-white p-4 justify-center items-center lg:items-start`

const Heading = tw.h1`text-4xl text-center xl:text-left font-bold my-3 `

const Text = tw.p`mb-3 text-center text-gray-800  lg:!text-left`
const Button = tw(Link)` flex items-center  text-center bg-ssorange before:bg-ssgreen text-white xl:mx-0 text-lg  px-4 py-3 mt-3 mb-3  justify-between hover-btn w-full`



